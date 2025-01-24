import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_SERVER_USERNAME,
    pass: process.env.NEXT_PUBLIC_SMTP_SERVER_PASSWORD,
  },
});

export const sendEmail = async ({
  subject,
  message,
}: {
  subject: string;
  message: string;
}) => {
  console.log(
    process.env.NEXT_PUBLIC_SENDER_EMAIL,
    process.env.NEXT_PUBLIC_RECEIVER_EMAIL
  );
  console.log(subject, message);
  return await transporter.sendMail({
    to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL,
    subject: subject,
    text: message,
  });
};
