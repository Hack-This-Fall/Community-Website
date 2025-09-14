import React from 'react';
import { notFound } from 'next/navigation';

interface VirtualPageProps {
  params: {
    year: string;
  };
}

export default function VirtualPage({ params }: VirtualPageProps) {
  const { year } = params;

  // Map years to their corresponding subdomain numbers
  const yearToSubdomain: Record<string, string> = {
    '2020': 's1',
    '2021': 's2',
    '2023': 's3',
    '2024': 's4'
  };

  const subdomain = yearToSubdomain[year];

  // If year is not supported, redirect to 404
  if (!subdomain) {
    notFound();
  }

  return (
    <div style={{ margin: 0, padding: 0, height: '100vh', width: '100vw' }}>
      <iframe
        src={`https://${subdomain}.hackthisfall.tech`}
        style={{
          width: '100vw',
          height: '100vh',
          border: 'none',
          margin: 0,
          padding: 0
        }}
      />
    </div>
  );
}
