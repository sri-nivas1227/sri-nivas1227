import { toast } from "sonner"; // Importing the Toaster component from the sonner library
import axios from "axios";
const SubmitButton = ({
  connectionName,
  email,
  subject,
  message,
  resetForm,
}: {
  connectionName: string;
  email: string;
  subject: string;
  message: string;
  resetForm: () => void;
}) => {
  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!connectionName || !email || !subject || !message) {
      toast.warning("Please fill all the fields");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.warning("Invalid email address");
      return;
    }
    axios
      .post("/api/emails", {
        connectionName,
        email,
        subject,
        message,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Email sent successfully");
          resetForm();
        } else {
          toast.error("Error sending email");
        }
      });
  };
  return (
    <button
      onClick={handleSubmit}
      className="bg-yellow-400 text-black font-bold text-2xl p-2 rounded-md"
    >
      Send
    </button>
  );
};

export default SubmitButton;
