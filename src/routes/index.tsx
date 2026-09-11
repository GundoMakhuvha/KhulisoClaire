import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khuliso & Claise Wedding Invitation" },
      {
        name: "description",
        content:
          "You are warmly invited to the wedding of Khuliso and Claise. Open the envelope for our story, the schedule, dress code and RSVP.",
      },
      { property: "og:title", content: "Khuliso & Claise Wedding Invitation" },
      {
        property: "og:description",
        content: "Open the envelope: our story, the schedule, dress code and RSVP.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The invitation is a fully standalone, portable single file: public/invitation.html
function Index() {
  return (
    <iframe
      src="/invitation.html"
      title="Khuliso & Claise wedding invitation"
      style={{ border: 0, width: "100%", height: "100svh", display: "block" }}
    />
  );
}
