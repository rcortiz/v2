import React from "react";
import { ErrorMessage, Form, Formik } from "formik";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { Textarea } from "../ui/textarea";
import { contactFormSchema } from "@/services/validation";

const ContactForm = ({ handleOnSubmit }) => {
  return (
    <Formik
      initialValues={{
        fullname: "",
        email: "",
        subject: "",
        body: "",
      }}
      validationSchema={contactFormSchema}
      onSubmit={handleOnSubmit}
    >
      {({ values, handleChange, handleBlur, isValid }) => (
        <Form className="space-y-4 mt-4">
          <div className="space-y-2">
            <p htmlFor="fullname" className="text-sm font-semibold">
              Full Name
            </p>
            <Input
              id="fullname"
              type="text"
              placeholder="John Doe"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="fullname"
              component="div"
              className="text-[0.8rem] font-medium text-destructive"
            />
          </div>
          <div className="space-y-2">
            <p htmlFor="email" className="text-sm font-semibold">
              Email
            </p>
            <Input
              id="email"
              type="email"
              placeholder="johndoe@gmail.com"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-[0.8rem] font-medium text-destructive"
            />
          </div>
          <div className="space-y-2">
            <p htmlFor="subject" className="text-sm">
              Subject
            </p>
            <Input
              id="subject"
              type="text"
              placeholder="Enter Email Subject"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="subject"
              component="div"
              className="text-[0.8rem] font-medium text-destructive"
            />
          </div>
          <div className="space-y-2">
            <p htmlFor="body" className="text-sm">
              Body
            </p>
            <Textarea
              id="body"
              type="text"
              placeholder="Enter Email Body"
              name="body"
              value={values.body}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="body"
              component="div"
              className="text-[0.8rem] font-medium text-destructive"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="outline" disabled={!isValid}>
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
