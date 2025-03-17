import { sendEmail } from "@/app/utils/sendEmail";

export async function POST(req: Request) {
  const data = await req.json();

  console.log(data);
  const finalSubject = `${data.connectionName} saw your Portfolio and says: "${data.subject}"`;
  const finalMessage = `Name: ${data.connectionName} \nEmail: ${data.email} \nMessage: ${data.message}`;
  try {
    await sendEmail({ subject: finalSubject, message: finalMessage });
    return Response.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "fail", data: error }, { status: 200 });
  }
}
