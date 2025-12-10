import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast"; // Assuming this is imported correctly
import { useState, useEffect, useRef } from "react";

// Helper component for Contact Details Card (Unchanged)
const ContactDetailCard = ({ icon: Icon, title, content, href }) => (
  <div className="p-4 rounded-xl card-hover bg-card shadow-sm border border-border flex items-start space-x-4 transition-all duration-300">
    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
      {Icon && <Icon className="h-6 w-6 text-primary" />}
    </div>
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      {href ? (
        <a
          href={href}
          className="text-muted-foreground hover:text-primary transition-colors text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <span className="text-muted-foreground text-sm">{content}</span>
      )}
    </div>
  </div>
);

// Helper component for Social Links (Unchanged)
const SocialLink = ({ icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 shadow-md"
  >
    {Icon && <Icon size={24} />}
  </a>
);


export const ContactSection = () => {
  // Use a mock for toast if the dependency isn't fully included
  const toast = typeof window !== 'undefined' ? (window.useToast || (() => {})) : (() => {});
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // EmailJS initialization logic (Unchanged)
  useEffect(() => {
    const loadEmailJS = () => {
      if (typeof window !== 'undefined' && !window.emailjs) {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
        script.async = true;
        script.onload = () => {
          if (window.emailjs) {
             window.emailjs.init("EBsqYTnXDwYKD7Jbh");
          }
        };
        document.head.appendChild(script);
      }
    };

    loadEmailJS();
  }, []);

  // Form submission logic (Unchanged)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // ... [rest of handleSubmit logic]
    try {
        if (typeof window === 'undefined' || !window.emailjs) {
            (toast.error || console.error)("EmailJS library not yet loaded. Please wait a moment and try again.");
            throw new Error("EmailJS library not yet loaded. Please wait a moment and try again.");
        }
        await window.emailjs.sendForm("service_rcnfbcb", "template_56o2f3l", formRef.current, "EBsqYTnXDwYKD7Jbh");
        toast({ title: "Message sent!", description: "Thank you for your message. I'll get back to you soon." });
        formRef.current.reset();
    } catch (error) {
        console.error("Email send error:", error);
        toast({ title: "Failed to send message", description: "Please try again or email me directly at amankumar005562@gmail.com", variant: "destructive" });
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let's <span className="text-primary">Connect</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm actively seeking new opportunities, collaborations, and ambitious projects. Reach out via the form or use the direct contact methods below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Contact Info (Unchanged) */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Direct Contact</h3>
            <div className="space-y-4">
              <ContactDetailCard icon={Mail} title="Email Address" content="amankumar005562@gmail.com" href="mailto:amankumar005562@gmail.com" />
              <ContactDetailCard icon={Phone} title="Phone Number" content="+91 8084075974" href="tel:+918084075974" />
              <ContactDetailCard icon={MapPin} title="Location" content="Jalandhar, PB, India" />
            </div>
            <div className="pt-8">
              <h4 className="font-semibold text-lg mb-4 text-center md:text-left">Connect Online</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <SocialLink href="https://linkedin.com/in/aman32" icon={Linkedin} />
                <SocialLink href="https://youtube.com/@codewithamankumar?si=QRPbC6paVgmUa8JI" icon={Youtube} />
                <SocialLink href="https://x.com/CodeWithAmanz?t=wwH9kqbxHZ6oj5LF3kYp5g&s=09" icon={Twitter} />
                <SocialLink href="https://www.instagram.com/theamankumarthakur" icon={Instagram} />
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-card p-8 rounded-xl shadow-xl border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              
              {/* Input: Name */}
              <div className="opacity-100 transition-none">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  placeholder="Aman Kumar..."
                />
              </div>

              {/* Input: Email */}
              <div className="opacity-100 transition-none">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  placeholder="aman@gmail.com"
                />
              </div>

              {/* Textarea: Message (Targeted Fix: Added opacity-100 and transition-none) */}
              <div className="opacity-100 transition-none"> 
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary resize-none transition-all duration-200"
                  placeholder="Hello, I'd like to discuss a project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 mt-4",
                  isSubmitting && "opacity-80 cursor-not-allowed" 
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};