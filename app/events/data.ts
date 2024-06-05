import moment from 'moment';
import momentTz from 'moment-timezone';
momentTz.tz.setDefault('Asia/Kolkata');

export interface eventData {
  id: string;
  heading: string;
  description: string;
  partnerName?: string;
  partnerLogo?: string;
  partnerDescription?: string;
  startTimestamp: moment.Moment;
  endTimestamp: moment.Moment | null;
  location: string;
  eventMode: string;
  color: string;
  secondaryColor: string;
  type: 'CITY MEETUP' | 'HACKTOBERFEST' | 'BUILD WITH' | 'HACKATHONS';
  agenda: agenda[];
}

export interface agenda {
  title: string;
  startTime: moment.Moment;
  endTime: moment.Moment;
}

interface eventsData {
  tabs: {
    heading: string;
    filterFunction: (eventData: eventData) => boolean;
  }[];
  individualEventTabs: {
    [key: string]: {
      heading: string;
      filterFunction: (eventData: eventData, type: string) => boolean;
    };
  };
  events: eventData[];
}

const eventsData: eventsData = {
  tabs: [
    {
      heading: 'ALL',
      filterFunction: (eventData: eventData) => true,
    },
    {
      heading: 'HACKATHONS',
      filterFunction: (eventData: eventData) => eventData.type === 'HACKATHONS',
    },
    {
      heading: 'EVENTS',
      filterFunction: (eventData: eventData) => eventData.type !== 'HACKATHONS',
    },
  ],
  individualEventTabs: {
    EVENT_UPCOMING: {
      heading: 'Upcoming',
      filterFunction: (eventData: eventData, type: string) =>
        moment().diff(eventData.startTimestamp) < 0 && eventData.type === type,
    },
    EVENT_PAST: {
      heading: 'Past',
      filterFunction: (eventData: eventData, type: string) =>
        moment().diff(eventData.startTimestamp) > 0 && eventData.type === type,
    },
  },
  events: [
    {
      id: '1',
      heading: 'Chandigarh City Meetup',
      eventMode: 'IN PERSON',
      description:
        'Hack This Fall brings you yet another event under Build With series, where we partner with different companies and organizations to deliver opportunities for you to build, network & grow. These are the events with a focused agenda where we talk about various products, tools, technologies, ideas, and beyond.',
      startTimestamp: moment().add(1, 'days'),
      endTimestamp: null,
      location: 'Magnet Cowork',
      partnerName: 'Google Dev Library',
      partnerLogo: '/images/events/partner-dummy.png',
      partnerDescription:
        'Dev Library is a curated platform for technical content written or built using Google technologies like Android, Angular, Flutter, Firebase, Google Cloud, Machine Learning, Google Assistant, and Google Maps Platform. You can explore open-source dev projects and content libraries featuring Google tools and technologies contributed by developers from around the world. Find the inspiration you need for your next project now: devlibrary.withgoogle.com',
      type: 'CITY MEETUP',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2024-06-05 12:00 AM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2024-06-05 12:51 AM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
      ],
    },
    {
      id: '2',
      heading: 'Chandigarh City Meetup',
      eventMode: 'IN PERSON',
      description:
        'Hack This Fall brings you yet another event under Build With series, where we partner with different companies and organizations to deliver opportunities for you to build, network & grow. These are the events with a focused agenda where we talk about various products, tools, technologies, ideas, and beyond.',
      startTimestamp: moment().add(1, 'days'),
      endTimestamp: null,
      location: 'Magnet Cowork',
      partnerName: 'Google Dev Library',
      partnerLogo: '/images/events/partner-dummy.png',
      partnerDescription:
        'Dev Library is a curated platform for technical content written or built using Google technologies like Android, Angular, Flutter, Firebase, Google Cloud, Machine Learning, Google Assistant, and Google Maps Platform. You can explore open-source dev projects and content libraries featuring Google tools and technologies contributed by developers from around the world. Find the inspiration you need for your next project now: devlibrary.withgoogle.com',
      type: 'CITY MEETUP',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2024-06-05 12:00 AM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2024-06-05 12:51 AM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
      ],
    },
    {
      id: '3',
      heading: 'Chandigarh City Meetup',
      eventMode: 'IN PERSON',
      description:
        'Hack This Fall brings you yet another event under Build With series, where we partner with different companies and organizations to deliver opportunities for you to build, network & grow. These are the events with a focused agenda where we talk about various products, tools, technologies, ideas, and beyond.',
      startTimestamp: moment().add(1, 'days'),
      endTimestamp: null,
      location: 'Magnet Cowork',
      partnerName: 'Google Dev Library',
      partnerLogo: '/images/events/partner-dummy.png',
      partnerDescription:
        'Dev Library is a curated platform for technical content written or built using Google technologies like Android, Angular, Flutter, Firebase, Google Cloud, Machine Learning, Google Assistant, and Google Maps Platform. You can explore open-source dev projects and content libraries featuring Google tools and technologies contributed by developers from around the world. Find the inspiration you need for your next project now: devlibrary.withgoogle.com',
      type: 'CITY MEETUP',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2024-06-05 12:00 AM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2024-06-05 12:51 AM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
      ],
    },
    {
      id: '4',
      heading: 'Chandigarh City Meetup',
      eventMode: 'IN PERSON',
      description:
        'Hack This Fall brings you yet another event under Build With series, where we partner with different companies and organizations to deliver opportunities for you to build, network & grow. These are the events with a focused agenda where we talk about various products, tools, technologies, ideas, and beyond.',
      startTimestamp: moment().add(1, 'days'),
      endTimestamp: null,
      location: 'Magnet Cowork',
      partnerName: 'Google Dev Library',
      partnerLogo: '/images/events/partner-dummy.png',
      partnerDescription:
        'Dev Library is a curated platform for technical content written or built using Google technologies like Android, Angular, Flutter, Firebase, Google Cloud, Machine Learning, Google Assistant, and Google Maps Platform. You can explore open-source dev projects and content libraries featuring Google tools and technologies contributed by developers from around the world. Find the inspiration you need for your next project now: devlibrary.withgoogle.com',
      type: 'CITY MEETUP',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2024-06-05 12:00 AM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2024-06-05 12:51 AM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
      ],
    },
    {
      id: '5',
      heading: 'Chandigarh City Meetup',
      eventMode: 'IN PERSON',
      description:
        'Hack This Fall brings you yet another event under Build With series, where we partner with different companies and organizations to deliver opportunities for you to build, network & grow. These are the events with a focused agenda where we talk about various products, tools, technologies, ideas, and beyond.',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: null,
      location: 'Magnet Cowork',
      partnerName: 'Google Dev Library',
      partnerLogo: '/images/events/partner-dummy.png',
      partnerDescription:
        'Dev Library is a curated platform for technical content written or built using Google technologies like Android, Angular, Flutter, Firebase, Google Cloud, Machine Learning, Google Assistant, and Google Maps Platform. You can explore open-source dev projects and content libraries featuring Google tools and technologies contributed by developers from around the world. Find the inspiration you need for your next project now: devlibrary.withgoogle.com',
      type: 'CITY MEETUP',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2024-06-05 12:00 AM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2024-06-05 12:51 AM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
      ],
    },
    {
      id: '6',
      heading: 'Chandigarh City Meetup',
      eventMode: 'IN PERSON',
      description:
        'Hack This Fall brings you yet another event under Build With series, where we partner with different companies and organizations to deliver opportunities for you to build, network & grow. These are the events with a focused agenda where we talk about various products, tools, technologies, ideas, and beyond.',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: null,
      location: 'Magnet Cowork',
      partnerName: 'Google Dev Library',
      partnerLogo: '/images/events/partner-dummy.png',
      partnerDescription:
        'Dev Library is a curated platform for technical content written or built using Google technologies like Android, Angular, Flutter, Firebase, Google Cloud, Machine Learning, Google Assistant, and Google Maps Platform. You can explore open-source dev projects and content libraries featuring Google tools and technologies contributed by developers from around the world. Find the inspiration you need for your next project now: devlibrary.withgoogle.com',
      type: 'CITY MEETUP',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2024-06-05 12:00 AM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2024-06-05 12:51 AM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
      ],
    },
    {
      id: '7',
      heading: 'Chandigarh City Meetup',
      eventMode: 'IN PERSON',
      description:
        'Hack This Fall brings you yet another event under Build With series, where we partner with different companies and organizations to deliver opportunities for you to build, network & grow. These are the events with a focused agenda where we talk about various products, tools, technologies, ideas, and beyond.',
      startTimestamp: moment().add(1, 'days'),
      endTimestamp: null,
      location: 'Magnet Cowork',
      partnerName: 'Google Dev Library',
      partnerLogo: '/images/events/partner-dummy.png',
      partnerDescription:
        'Dev Library is a curated platform for technical content written or built using Google technologies like Android, Angular, Flutter, Firebase, Google Cloud, Machine Learning, Google Assistant, and Google Maps Platform. You can explore open-source dev projects and content libraries featuring Google tools and technologies contributed by developers from around the world. Find the inspiration you need for your next project now: devlibrary.withgoogle.com',
      type: 'CITY MEETUP',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2024-06-05 12:00 AM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2024-06-05 12:51 AM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Opening Remarks',
          startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
      ],
    },
  ],
};

export default eventsData;
