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

import { FaArrowRight } from "react-icons/fa6";
import sendEmail from "@/services/send-email";

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
    } catch {
      toast.error("Message could not be sent", {
        id: toastId,
        description: "Please try again or contact me through LinkedIn.",
      });
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
