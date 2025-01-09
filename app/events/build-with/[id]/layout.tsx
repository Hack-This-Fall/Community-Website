import { Metadata } from 'next';
import eventsData from '../../data';
import { redirect } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const eventId = params.id;
  const eventData = eventsData.events.find(
    (event) => event.id === eventId && event.individualPageActive,
  );

  return eventData
    ? {
        title: `${eventData?.heading} | Hack This Fall Community`,
        openGraph: {
          title: `${eventData?.heading} | Hack This Fall Community`,
          description: eventData?.partnerDescription,
          siteName: `${eventData?.heading} | Hack This Fall Community`,
          images: [
            {
              url: `${eventData?.heroImage}`,
              width: 2000,
              height: 1000,
              alt: 'Hack This Fall Community',
            },
          ],
        },
        twitter: {
          title: `${eventData?.heading} | Hack This Fall Community`,
          description: eventData?.partnerDescription,
          images: [
            {
              url: `${eventData?.heroImage}`,
              width: 2000,
              height: 1000,
              alt: 'Hack This Fall Community',
            },
          ],
        },
      }
    : {
        title: 'Events | Hack This Fall Community',
        openGraph: {
          title: 'Events | Hack This Fall Community',
          description:
            "Hack This Fall is one of India's most thriving hacker communities. Join us to build groundbreaking solutions, inspire problem-solvers, and grow together in a diverse, supportive environment",
          siteName: 'Events | Hack This Fall Community',
          images: [
            {
              url: '/logo.png',
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
              url: '/logo.png',
              width: 2000,
              height: 1000,
              alt: 'Hack This Fall Community',
            },
          ],
          description:
            "Hack This Fall is one of India's most thriving hacker communities. Join us to build groundbreaking solutions, inspire problem-solvers, and grow together in a diverse, supportive environment",
        },
      };
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const eventId = params.id;
  const eventData = eventsData.events.find(
    (event) => event.id === eventId && event.individualPageActive,
  );
  if (!eventData) {
    redirect('/404');
  }
  return children;
}
