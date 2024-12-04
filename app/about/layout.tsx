import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Hack This Fall Community',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
