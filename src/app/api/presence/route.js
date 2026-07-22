const SESSION_TTL = 45_000;
const MAX_SESSIONS = 5_000;

export const dynamic = "force-dynamic";
export const preferredRegion = "sin1";

const sessions = globalThis.__portfolioPresenceSessions ?? new Map();
globalThis.__portfolioPresenceSessions = sessions;

const pruneSessions = (now = Date.now()) => {
  for (const [sessionId, lastSeen] of sessions) {
    if (now - lastSeen > SESSION_TTL) sessions.delete(sessionId);
  }
};

const getSessionId = async (request) => {
  try {
    const { sessionId } = await request.json();

    if (
      typeof sessionId === "string" &&
      /^[a-zA-Z0-9-]{8,64}$/.test(sessionId)
    ) {
      return sessionId;
    }
  } catch {
    return null;
  }

  return null;
};

const response = () =>
  Response.json(
    { viewers: Math.max(1, sessions.size) },
    { headers: { "Cache-Control": "no-store, max-age=0" } },
  );

export async function POST(request) {
  const sessionId = await getSessionId(request);

  if (!sessionId) {
    return Response.json({ error: "Invalid session" }, { status: 400 });
  }

  const now = Date.now();
  pruneSessions(now);

  if (sessions.size < MAX_SESSIONS || sessions.has(sessionId)) {
    sessions.set(sessionId, now);
  }

  return response();
}

export async function DELETE(request) {
  const sessionId = await getSessionId(request);

  if (sessionId) sessions.delete(sessionId);
  pruneSessions();

  return response();
}
