"use client";

import { motion } from "framer-motion";
import Wrapper from "@/components/ui/wrapper";
import SectionHeading from "@/components/ui/section-heading";
import ContactForm from "@/components/contact-form";
import useSectionInView from "@/hooks/useSectionInView";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <Wrapper>
      <motion.section
        ref={ref}
        id="contact"
        className="mb-20 scroll-mt-28 sm:mb-28"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
      >
        <SectionHeading title="Contact" />
        <p>
          Please contact me directly as{" "}
          <a href="mailto:souravsspace@gmail.com" className="underline">
            dev@sourav.cloud
          </a>{" "}
          or though the form.
        </p>

        <div className="mt-6 sm:mt-10">
          <ContactForm />
        </div>
      </motion.section>
    </Wrapper>
  );
}
