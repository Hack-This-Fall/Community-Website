import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Hack This Fall Community',
  openGraph: {
    title: 'About | Hack This Fall Community',
    description:
      "Hack This Fall is one of India's most thriving hacker communities. Join us to build groundbreaking solutions, inspire problem-solvers, and grow together in a diverse, supportive environment",
    siteName: 'About | Hack This Fall Community',
  },
  twitter: {
    title: 'About | Hack This Fall Community',
    description:
      "Hack This Fall is one of India's most thriving hacker communities. Join us to build groundbreaking solutions, inspire problem-solvers, and grow together in a diverse, supportive environment",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
