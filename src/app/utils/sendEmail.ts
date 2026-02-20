import { Resend } from "resend";
const transporter = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  subject,
  message,
}: {
  subject: string;
  message: string;
}) => {
  return await transporter.emails.send({
    from: "onboarding@srinivasmekala.dev",
    to: process.env.RECEIVER_EMAIL!,
    subject: subject,
    html: `<p>${message}</p>`,
  });
};
