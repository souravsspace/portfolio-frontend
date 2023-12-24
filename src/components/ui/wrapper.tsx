import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Wrapper({ children, className }: Props) {
  return <div className={cn("mx-auto max-w-2xl", className)}>{children}</div>;
}
