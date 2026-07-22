import emailjs from "@emailjs/browser";

const sendEmail = async (values) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Email service is not configured.");
  }

  return emailjs.send(serviceId, templateId, values, { publicKey });
};

export default sendEmail;
