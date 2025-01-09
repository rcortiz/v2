import emailjs from "@emailjs/browser";

const sendEmail = (values) => {
  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      values,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      }
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch((error) => {
      console.log("FAILED...", error);
    });
};

export default sendEmail;
