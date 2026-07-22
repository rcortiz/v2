import emailjs from "@emailjs/browser";

export const EMAIL_ERROR_CODES = {
  CONFIGURATION: "configuration",
  PROVIDER_AUTH: "provider-auth",
  RATE_LIMIT: "rate-limit",
  DELIVERY: "delivery",
};

const createDeliveryError = (error) => {
  const status = Number(error?.status) || 0;
  const responseText = String(error?.text || error?.message || "");

  let code = EMAIL_ERROR_CODES.DELIVERY;

  if (status === 412 && /invalid grant|reconnect/i.test(responseText)) {
    code = EMAIL_ERROR_CODES.PROVIDER_AUTH;
  } else if (status === 429) {
    code = EMAIL_ERROR_CODES.RATE_LIMIT;
  }

  const deliveryError = new Error("Email delivery failed.");
  deliveryError.code = code;
  deliveryError.status = status;

  return deliveryError;
};

const sendEmail = async (values) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    const configurationError = new Error("Email service is not configured.");
    configurationError.code = EMAIL_ERROR_CODES.CONFIGURATION;
    throw configurationError;
  }

  try {
    return await emailjs.send(serviceId, templateId, values, { publicKey });
  } catch (error) {
    throw createDeliveryError(error);
  }
};

export default sendEmail;
