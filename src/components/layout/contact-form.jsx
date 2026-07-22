import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaArrowRight, FaSpinner } from "react-icons/fa6";

import { contactFormSchema } from "@/services/validation";

const ContactForm = ({ handleOnSubmit }) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      fullname: "",
      email: "",
      subject: "",
      body: "",
    },
  });

  const submitForm = async (values) => {
    const didSend = await handleOnSubmit(values);
    if (didSend) reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          id="fullname"
          label="Full name"
          error={errors.fullname?.message}
        >
          <Input
            id="fullname"
            type="text"
            autoComplete="name"
            maxLength={80}
            placeholder="John Doe"
            aria-invalid={Boolean(errors.fullname)}
            aria-describedby={errors.fullname ? "fullname-error" : undefined}
            {...register("fullname")}
          />
        </FormField>
        <FormField id="email" label="Email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            placeholder="john@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </FormField>
      </div>

      <FormField id="subject" label="Subject" error={errors.subject?.message}>
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <Select
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger
                id="subject"
                ref={field.ref}
                onBlur={field.onBlur}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              >
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Project inquiry">Project inquiry</SelectItem>
                <SelectItem value="Collaboration">Collaboration</SelectItem>
                <SelectItem value="Consulting">Consulting</SelectItem>
                <SelectItem value="General inquiry">General inquiry</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </FormField>

      <FormField id="body" label="Message" error={errors.body?.message}>
        <Textarea
          id="body"
          rows={5}
          maxLength={2000}
          placeholder="Tell me why you're reaching out and how I can help."
          aria-invalid={Boolean(errors.body)}
          aria-describedby={errors.body ? "body-error" : undefined}
          {...register("body")}
        />
      </FormField>

      <DialogFooter className="pt-1">
        <DialogClose asChild>
          <Button
            type="button"
            variant="neutral"
            className="w-full text-black sm:w-auto"
          >
            Cancel
          </Button>
        </DialogClose>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="mr-2 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              Send message <FaArrowRight className="ml-2" aria-hidden="true" />
            </>
          )}
        </Button>
      </DialogFooter>
    </form>
  );
};

const FormField = ({ id, label, error, children }) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="font-cera font-bold">
      {label}
    </Label>
    {children}
    {error && (
      <p
        id={`${id}-error`}
        role="alert"
        className="text-xs font-medium text-destructive"
      >
        {error}
      </p>
    )}
  </div>
);

export default ContactForm;
