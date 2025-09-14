import React from 'react';
import { notFound } from 'next/navigation';

interface HackathonPageProps {
  params: {
    year: string;
  };
}

export default function HackathonPage({ params }: HackathonPageProps) {
  const { year } = params;

  // Map years to their corresponding URLs
  const yearToUrl: Record<string, string> = {
    '2023': 'https://s3.hackthisfall.tech',
    '2024': 'https://s4.hackthisfall.tech',
  };

  const url = yearToUrl[year];

  // If year is not supported, redirect to 404
  if (!url) {
    notFound();
  }

  return (
    <div style={{ margin: 0, padding: 0, height: '100vh', width: '100vw' }}>
      <iframe
        src={url}
        style={{
          width: '100vw',
          height: '100vh',
          border: 'none',
          margin: 0,
          padding: 0,
        }}
      />
    </div>
  );
}
