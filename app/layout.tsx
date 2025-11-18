import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Vismar Aqua - Expert Aquaculture Solutions',
    template: '%s | Vismar Aqua',
  },
  description: 'Leading provider of aquaculture solutions, water quality management, and sustainable fish farming technology.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
