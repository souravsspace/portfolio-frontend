type Props = {
  title: string;
};

export default function SectionHeading({ title }: Props) {
  return (
    <h2 className="mb-5 text-center text-3xl font-medium tracking-tighter sm:text-4xl">
      {title}
    </h2>
  );
}
