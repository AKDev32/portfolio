import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  // Twitch,
  Twitter,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect, useRef } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // ✅ Load EmailJS on mount
  useEffect(() => {
    const loadEmailJS = () => {
      if (!window.emailjs) {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
        script.async = true;
        script.onload = () => {
          window.emailjs.init("EBsqYTnXDwYKD7Jbh"); // Your Public Key
        };
        document.head.appendChild(script);
      }
    };

    loadEmailJS();
  }, []);

  // ✅ Handle form submission with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!window.emailjs) {
        throw new Error("EmailJS not loaded. Please try again.");
      }

      await window.emailjs.sendForm(
        "service_rcnfbcb", // Your Service ID
        "template_56o2f3l", // Your Template ID
        formRef.current, // The form reference
        "EBsqYTnXDwYKD7Jbh" // Your Public Key
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("Email send error:", error);
      toast({
        title: "Failed to send message",
        description:
          "Please try again or email me directly at amankumar005562@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:amankumar005562@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    amankumar005562@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+918084075974"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8084075974
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Jalandhar, PB, India
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://linkedin.com/in/aman32" target="_blank" rel="noreferrer">
                  <Linkedin />
                </a>
                <a href="https://youtube.com/@codewithamankumar?si=QRPbC6paVgmUa8JI" target="_blank" rel="noreferrer">
                  <Youtube />
                </a>
                <a href="https://x.com/CodeWithAmanz?t=wwH9kqbxHZ6oj5LF3kYp5g&s=09" target="_blank" rel="noreferrer">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/theamankumarthakur" target="_blank" rel="noreferrer">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Aman Kumar..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="aman@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
