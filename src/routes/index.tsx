import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khuliso & Claire Wedding Invitation" },
      {
        name: "description",
        content:
          "You are warmly invited to the wedding of Khuliso and Claire. Open the envelope for our story, the schedule, dress code and RSVP.",
      },
      { property: "og:title", content: "Khuliso & Claire Wedding Invitation" },
      {
        property: "og:description",
        content: "Developed By: Capvtal Innovations",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The invitation is a fully standalone, portable single file: public/invitation.html
// A link like /#programme (used by the QR code) is passed through to the invitation,
// which then skips the envelope and opens straight on that tab.
function Index() {
  const [src, setSrc] = useState("/invitation.html");
  useEffect(() => {
    if (window.location.hash) setSrc("/invitation.html" + window.location.hash);
  }, []);
  return (
    <iframe
      key={src}
      src={src}
      title="Khuliso & Claire wedding invitation"
      style={{ border: 0, width: "100%", height: "100svh", display: "block" }}
    />
  );
}
