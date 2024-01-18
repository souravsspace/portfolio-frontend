"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormSchema, type FormSchemaType } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import sendEmail from "@/action/send-email";
import toast from "react-hot-toast";
import SubmitButton from "@/components/submit-button";

export default function ContactForm() {
  const form = useForm<FormSchemaType>({
    defaultValues: {
      email: "",
      message: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: FormSchemaType) => {
    try {
      const res = await sendEmail(data);

      if (res.success) {
        toast.success("Message sent successfully");
      }
      if (res.failed) {
        toast.error("Message failed to send");
      }
    } catch (error) {
      toast.error("Message failed to send");
    } finally {
      form.reset();
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Form {...form}>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-base"
                    placeholder="Your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="text-base"
                    rows={8}
                    placeholder="You message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SubmitButton />
        </div>
      </Form>
    </form>
  );
}
