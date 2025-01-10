import React, { useState } from "react";
import { useToast } from "../UI/ui/use-toast";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/ui/dialog";
import ContactForm from "../Layout/ContactForm";
import { Button } from "../UI/ui/button";

import { FaArrowRight } from "react-icons/fa6";

import sendEmail from "@/services/send-email";

const ContactDialog = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleOnSubmit = (values) => {
    sendEmail(values);
    toast({
      title: "Message has been sent successfully",
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={IsOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg">
          Contact Me <FaArrowRight className="ml-2" size="14px" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            Let&apos;s get in touch by sending me a message.
          </DialogDescription>
        </DialogHeader>
        <ContactForm handleOnSubmit={handleOnSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
