// "use client";
// import { sendEmail } from "../actions/sendEmail";

//  // Mark as a Client Component


// export default function ContactPage() {
//   async function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const { success } = await sendEmail(formData);
//     if (success) {
//       alert("Message sent!");
//     } else {
//       alert("Failed to send message.");
//     }
//   }

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Your Name" required />
//         <input type="email" name="email" placeholder="Your Email" required />
//         <textarea name="message" placeholder="Your Message" required />
//         <button type="submit" className="bg-slate-50">Send</button>
//       </form>
//     </div>
//   );
// }

"use client"; 
import { useState } from "react";
import { sendEmail } from "../actions/contactActions";
// import { sendEmail } from "../actions/contactActions"; // Import server action

export default function ContactPage() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Call the server action
    const response = await sendEmail(formData);

    // Show success or error message
    setMessage(response.message);

    if (response.success) {
      event.target.reset(); // Reset form after submission
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="text" name="name" placeholder="Your Name" required className="border p-2" />
        <input type="email" name="email" placeholder="Your Email" required className="border p-2" />
        <textarea name="message" placeholder="Your Message" required className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
