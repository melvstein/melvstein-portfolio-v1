"use client";

import { JsonBlock } from "@/components/ui/json-block";
import LINK from "@/lib/link";

const contactData = {
  name: "Melvin Justine L. Bayogo",
  role: "Full-Stack Developer",
  email: "melvinbayogo@gmail.com",
  location: "Philippines",
  availability: "Open to opportunities",
  resume: LINK.RESUME,
  social: {
    github: LINK.GITHUB,
    linkedin: LINK.LINKEDIN,
    x: LINK.X,
  },
};

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-7xl mx-auto w-full h-full relative z-10 md:pt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-heading font-bold text-blue-500 tracking-widest uppercase mb-2">
              Get in Touch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Contact
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-base font-light">
            Have a project in mind, a role to discuss, or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="flex justify-center">
          <JsonBlock
            data={contactData}
            showLineNumbers
            className="w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
