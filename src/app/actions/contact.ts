"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormState = {
  success: boolean;
  message: string;
}

export async function submitContactForm(values: z.infer<typeof contactSchema>): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map(issue => issue.message).join(" ");
    return { success: false, message: `Invalid form data: ${errorMessages}` };
  }

  try {
    // In a real application, you would integrate with an email service
    // like SendGrid, Resend, or save the message to a database.
    console.log("New contact form submission:", parsed.data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
