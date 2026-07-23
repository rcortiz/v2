import React, { useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ContactForm from "./contact-form";
import { Button } from "../ui/button";

import { FaArrowRight } from "@/components/icons";
import sendEmail, { EMAIL_ERROR_CODES } from "@/services/send-email";

const CONTACT_EMAIL = "rcortiz.dev@gmail.com";

const openEmailFallback = ({ fullname, email, subject, body }) => {
  const message = [body, "", `From: ${fullname}`, `Reply to: ${email}`].join(
    "\n",
  );
  const query = new URLSearchParams({ subject, body: message });

  window.location.href = `mailto:${CONTACT_EMAIL}?${query.toString()}`;
};

const ContactDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnSubmit = async (values) => {
    const toastId = toast.loading("Sending your message...", {
      description: "This usually takes only a moment.",
    });

    try {
      await sendEmail(values);
      toast.success("Message sent", {
        id: toastId,
        description: "Thanks for reaching out. I will get back to you soon.",
      });
      setIsOpen(false);
      return true;
    } catch (error) {
      const providerNeedsReconnect =
        error?.code === EMAIL_ERROR_CODES.PROVIDER_AUTH;

      toast.error(
        providerNeedsReconnect
          ? "Email is temporarily unavailable"
          : "Message could not be sent",
        {
          id: toastId,
          description: providerNeedsReconnect
            ? "Open your email app to send this message directly."
            : "Try again or send this message from your email app.",
          action: {
            label: "Email directly",
            onClick: () => openEmailFallback(values),
          },
        },
      );
      return false;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full">
          Contact Me <FaArrowRight className="ml-2" size="14px" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto sm:max-w-xl">
        <DialogHeader className="pr-8">
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            Choose a reason for reaching out and leave me a message.
          </DialogDescription>
        </DialogHeader>
        <ContactForm handleOnSubmit={handleOnSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
