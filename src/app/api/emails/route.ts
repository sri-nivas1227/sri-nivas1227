import { sendEmail } from "@/app/utils/sendEmail";

export async function POST(req: Request, res: Response) {
  const data = await req.json();

  console.log(data);
  const finalSubject = `${data.connectionName} wants to connect. Subject: ${data.subject}`;
  const finalMessage = `Name: ${data.connectionName} \nEmail: ${""}\nMessage: ${
    data.message
  }`;
  try {
    await sendEmail({ subject: finalSubject, message: finalMessage });
    return Response.json({ message: "done" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "error" }, { status: 500 });
  }
}
