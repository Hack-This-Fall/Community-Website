import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Showcase | Hack This Fall Community",
  description:
    "Discover amazing projects built by our community at Hack This Fall hackathons. Explore innovative solutions in sustainability, healthcare, education, and more.",
  openGraph: {
    title: "Project Showcase | Hack This Fall Community",
    description:
      "Discover amazing projects built by our community at Hack This Fall hackathons. Explore innovative solutions in sustainability, healthcare, education, and more.",
    siteName: "Project Showcase | Hack This Fall Community",
    images: [
      {
        url: "https://hackthisfall.tech/og.png",
        width: 2000,
        height: 1000,
        alt: "Hack This Fall Community",
      },
    ],
  },
  twitter: {
    title: "Project Showcase | Hack This Fall Community",
    images: [
      {
        url: "https://hackthisfall.tech/og.png",
        width: 2000,
        height: 1000,
        alt: "Hack This Fall Community",
      },
    ],
    description:
      "Discover amazing projects built by our community at Hack This Fall hackathons. Explore innovative solutions in sustainability, healthcare, education, and more.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
