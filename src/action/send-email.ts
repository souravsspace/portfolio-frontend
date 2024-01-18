"use server";

import { Resend } from "resend";
import { type FormSchemaType, FormSchema } from "@/types";
import ContactFormEmail from "@/email";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormSchemaType) {
  const isValidate = await FormSchema.safeParseAsync(formData);

  if (!isValidate.success) {
    return {
      failed: "Invalid form data",
    };
  }

  const { email, message } = formData;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "souravsspace@gmail.com",
      subject: "New message from Contact form",
      reply_to: email,
      react: ContactFormEmail({ email, message }),
      // text: `Email: ${email} \n Message: ${message}`,
    });

    return {
      success: "Email sent",
    };
  } catch (error) {
    return {
      failed: "Something went wrong",
    };
  }
}
