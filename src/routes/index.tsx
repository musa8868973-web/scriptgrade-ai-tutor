import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScriptGrade — AI Teacher Dashboard for Answer Sheet Grading" },
      {
        name: "description",
        content:
          "ScriptGrade teacher dashboard: Qwen-powered grading with garbage-text, negation, synonym, typo, sequence, diagram and density engines.",
      },
      { property: "og:title", content: "ScriptGrade — AI Teacher Dashboard" },
      {
        property: "og:description",
        content:
          "Interactive demo of ScriptGrade's 8 answer-evaluation engines for automated exam grading.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/scriptgrade.html"
      title="ScriptGrade Teacher Dashboard"
      className="h-screen w-screen border-0"
    />
  );
}
