
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | Hack This Fall Community',
  openGraph: {
    title: 'Events | Hack This Fall Community',
    description:
      "Hack This Fall is one of India's most thriving hacker communities. Join us to build groundbreaking solutions, inspire problem-solvers, and grow together in a diverse, supportive environment",
    siteName: 'Events | Hack This Fall Community',
    images: [
      {
        url: 'https://hackthisfall.tech/og.png',
        width: 2000,
        height: 1000,
        alt: 'Hack This Fall Community',
      },
    ],
  },
  twitter: {
    title: 'Events | Hack This Fall Community',
    images: [
      {
        url: 'https://hackthisfall.tech/og.png',
        width: 2000,
        height: 1000,
        alt: 'Hack This Fall Community',
      },
    ],
    description:
      "Hack This Fall is one of India's most thriving hacker communities. Join us to build groundbreaking solutions, inspire problem-solvers, and grow together in a diverse, supportive environment",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
