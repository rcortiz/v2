import React, { useState } from "react";
import { useToast } from "../ui/use-toast";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "../ContactForm/ContactForm";
import { Button } from "../ui/button";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import sendEmail from "@/services/sendEmail";

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
        <Button variant="outline" size="lg">
          Contact Me <ArrowRightIcon className="ml-3 h-6 w-6" />
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
