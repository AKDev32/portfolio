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
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* =========================
   CONTACT CARD (FIXED)
========================= */
const ContactDetailCard = ({ icon: Icon, title, content, href }) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border shadow-sm min-w-0">
      {/* Icon */}
      <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h4 className="text-lg font-semibold">{title}</h4>

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-muted-foreground hover:text-primary break-all max-w-full"
          >
            {content}
          </a>
        ) : (
          <span className="block text-sm text-muted-foreground break-all max-w-full">
            {content}
          </span>
        )}
      </div>
    </div>
  );
};

/* =========================
   SOCIAL LINK
========================= */
const SocialLink = ({ icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
  >
    <Icon size={22} />
  </a>
);

/* =========================
   CONTACT SECTION
========================= */
export const ContactSection = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* Load EmailJS */
  useEffect(() => {
    if (!window.emailjs) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
      script.async = true;
      script.onload = () => {
        window.emailjs.init("EBsqYTnXDwYKD7Jbh");
      };
      document.head.appendChild(script);
    }
  }, []);

  /* Submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await window.emailjs.sendForm(
        "service_rcnfbcb",
        "template_56o2f3l",
        formRef.current,
        "EBsqYTnXDwYKD7Jbh"
      );
      formRef.current.reset();
      alert("Message sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Direct <span className="text-primary">Contact</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Reach out directly or send a message using the form.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 min-w-0">

          {/* LEFT */}
          <div className="space-y-6 min-w-0">
            <ContactDetailCard
              icon={Mail}
              title="Email Address"
              content="amankumar005562@gmail.com"
              href="mailto:amankumar005562@gmail.com"
            />

            <ContactDetailCard
              icon={Phone}
              title="Phone Number"
              content="+91 8084075974"
              href="tel:+918084075974"
            />

            <ContactDetailCard
              icon={MapPin}
              title="Location"
              content="Jalandhar, Punjab, India"
            />

            <div className="pt-6">
              <div className="flex justify-center md:justify-start gap-4">
                <SocialLink icon={Linkedin} href="https://linkedin.com/in/aman32" />
                <SocialLink icon={Youtube} href="https://youtube.com/@codewithamankumar" />
                <SocialLink icon={Twitter} href="https://x.com/CodeWithAmanz" />
                <SocialLink icon={Instagram} href="https://www.instagram.com/theamankumarthakur" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-xl min-w-0">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input
                name="from_name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary"
              />

              <input
                name="reply_to"
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary"
              />

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin h-4 w-4" />
                    Sending...
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
