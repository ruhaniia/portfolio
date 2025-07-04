import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6n9tktx",    // Replace with actual ID
        "template_bbq6pns",   // Replace with actual ID
        form.current,
        "_8dr2VttBmB_VNO9t"   // Replace with actual public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Something went wrong. Try again later.");
        }
      );
  };

  return (
    <section className="text-black dark:text-white transition-colors duration-500 py-16 px-4 md:px-10 lg:px-24">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <ContactCard
            icon="📧"
            label="Email"
            value="you@gmail.com"
            link="mailto:you@gmail.com"
          />
          <ContactCard
            icon="📱"
            label="Phone"
            value="+91-999999999"
            link="tel:+91999999999"
          />
          <ContactCard
            icon="💼"
            label="LinkedIn"
            value="linkedin.com/in/you"
            link="https://linkedin.com/in/you"
          />
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-3 bg-white dark:bg-gray-900"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-3 bg-white dark:bg-gray-900"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            required
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-3 bg-white dark:bg-gray-900"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white dark:bg-orange-500 dark:text-white rounded hover:opacity-90 transition"
          >
            Send Message
          </button>
          {status && (
            <p className="text-sm mt-2 text-green-600 dark:text-green-400">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, link }) {
  return (
    <a
      href={link}
      className="block p-4 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      <div className="flex items-center space-x-4">
        <span className="text-2xl">{icon}</span>
        <div>
          <div className="font-medium">{label}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {value}
          </div>
        </div>
      </div>
    </a>
  );
}
