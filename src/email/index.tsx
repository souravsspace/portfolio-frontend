import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type Props = {
  message: string;
  email: string;
};

export default function ContactFormEmail({ message, email }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New message from Contact form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md border border-black/10 bg-white px-10 py-4">
              <Heading className="leading-tight">
                Your received the following message from contact form.
              </Heading>
              <Text>{message}</Text>

              <Hr />
              <Text>Sender email: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
