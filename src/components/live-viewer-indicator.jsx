"use client";

import { useEffect, useState } from "react";

const HEARTBEAT_INTERVAL = 15_000;

const LiveViewerIndicator = () => {
  const [viewers, setViewers] = useState(1);

  useEffect(() => {
    const sessionId = crypto.randomUUID();
    let isActive = true;

    const updatePresence = async () => {
      if (document.visibilityState === "hidden") return;

      try {
        const response = await fetch("/api/presence", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
          cache: "no-store",
        });

        if (!response.ok) return;

        const data = await response.json();
        if (isActive && Number.isFinite(data.viewers)) {
          setViewers(Math.max(1, data.viewers));
        }
      } catch {
        // Keep the local viewer represented when presence is unreachable.
      }
    };

    const removePresence = () => {
      fetch("/api/presence", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
        keepalive: true,
      }).catch(() => {});
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") updatePresence();
    };

    updatePresence();
    const intervalId = window.setInterval(updatePresence, HEARTBEAT_INTERVAL);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", removePresence);

    return () => {
      isActive = false;
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", removePresence);
      removePresence();
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={`${viewers} ${viewers === 1 ? "person" : "people"} viewing now`}
      className="flex h-9 items-center gap-2 whitespace-nowrap"
    >
      <span className="relative flex h-3 w-3 items-center justify-center">
        <span
          className="live-viewer-pulse absolute inset-0 rounded-full border-2 border-primary"
          aria-hidden="true"
        />
        <span
          className="relative h-2 w-2 rounded-full bg-primary"
          aria-hidden="true"
        />
      </span>
      <span className="font-inter text-[0.65rem]">
        <strong className="font-bold text-primary">{viewers}</strong>{" "}
        <span className="text-primary/55">
          {viewers === 1 ? "person" : "people"} viewing now
        </span>
      </span>
    </div>
  );
};

export default LiveViewerIndicator;
