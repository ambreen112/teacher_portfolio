import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description:
    "View Amber's curriculum vitae — education, experience, skills, and professional qualifications in teaching.",
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
