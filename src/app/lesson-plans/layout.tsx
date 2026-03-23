import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lesson Plans",
  description:
    "Explore sample lesson plans by Amber showcasing interactive, student-centered teaching approaches across various subjects.",
};

export default function LessonPlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
