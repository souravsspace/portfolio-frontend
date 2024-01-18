"use client";

import { buttonVariants } from "@/components/ui/button";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.03 }}
      className={buttonVariants()}
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <span>
          sending <span className="ml-2 h-3.5 w-3.5" />
        </span>
      ) : (
        <span>
          Send Message <FaPaperPlane className="ml-2 h-3.5 w-3.5" />
        </span>
      )}
    </motion.button>
  );
}
