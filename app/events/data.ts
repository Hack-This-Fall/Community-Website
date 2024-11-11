import moment from 'moment';
import momentTz from 'moment-timezone';
momentTz.tz.setDefault('Asia/Kolkata');

export interface eventData {
  id: string;
  individualPageActive?: boolean;
  heading: string;
  description?: string;
  partnerName?: string;
  partnerLogo?: string;
  partnerDescription?: string;
  startTimestamp?: moment.Moment;
  endTimestamp?: moment.Moment | null;
  location?: string;
  eventMode: string;
  type: 'CITY MEETUP' | 'HACKTOBERFEST' | 'BUILD WITH' | 'HACKATHON';
  agenda?: agenda[];
  link?: string;
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

export const colorsMap = {
  'CITY MEETUP': {
    color: '#00000095',
    secondaryColor: '#FAFAFA',
  },
  HACKTOBERFEST: {
    color: '#00000095',
    secondaryColor: '#FAFAFA',
  },
  'BUILD WITH': {
    color: '#9933FF',
    secondaryColor: '#9933FF66',
  },
  HACKATHON: {
    color: '#FF6633',
    secondaryColor: '#FF663366',
  },
};

const eventsData: eventsData = {
  tabs: [
    {
      heading: 'ALL',
      filterFunction: (eventData: eventData) => true,
    },
    {
      heading: 'HACKATHONS',
      filterFunction: (eventData: eventData) => eventData.type === 'HACKATHON',
    },
    {
      heading: 'EVENTS',
      filterFunction: (eventData: eventData) => eventData.type !== 'HACKATHON',
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
      id: '0',
      heading: 'Hack This Fall 2020',
      startTimestamp: moment('2020-10-31 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: moment('2020-11-01 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      eventMode: 'Virtual',
      type: 'HACKATHON',
      link: 'https://s1.hackthisfall.tech/',
    },
    {
      id: '1',
      heading: 'Hack This Fall 2021',
      startTimestamp: moment('2021-10-22 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: moment('2021-10-24 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      eventMode: 'Virtual',
      type: 'HACKATHON',
      link: 'https://s2.hackthisfall.tech/',
    },
    {
      id: '2',
      heading: 'Jaipur City',
      startTimestamp: moment('2022-04-04 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFJaipur&src=typed_query',
    },
    {
      id: '3',
      heading: 'Mumbai City',
      startTimestamp: moment('2022-04-16 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFMumbai&src=typed_query&f=top',
    },
    {
      id: '4',
      heading: 'Pune City',
      startTimestamp: moment('2022-04-17 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFPune&src=typed_query&f=top',
    },
    {
      id: '5',
      heading: 'Delhi City',
      startTimestamp: moment('2022-05-28 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFDelhi&src=typed_query&f=top',
    },
    {
      id: '6',
      heading: 'Bengaluru City',
      startTimestamp: moment('2022-06-11 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFBengaluru&src=typed_query&f=top',
    },
    {
      id: '7',
      heading: 'Ahmedabad City',
      startTimestamp: moment('2022-07-30 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFAhmedabad&src=typed_query&f=top',
    },
    {
      id: '8',
      heading: 'Hacktoberfest 2022',
      startTimestamp: moment('2022-10-16 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'HACKTOBERFEST',
      link: 'https://lu.ma/HTFxSolanaxHacktoberfest22',
    },
    {
      id: '9',
      heading: 'Hacktoberfest 2022 - Virtual',
      startTimestamp: moment('2022-10-22 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'Virtual',
      type: 'HACKTOBERFEST',
      link: 'https://www.youtube.com/live/2WIqHHZq_B8?si=hVa1VNXFrwBtmd3L',
    },
    {
      id: '10',
      heading: 'Build with Nhost',
      startTimestamp: moment('2022-12-10 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'BUILD WITH',
      link: 'https://lu.ma/BWHTFxNhost',
    },
    {
      id: '11',
      heading: 'Hack This Fall 2023',
      startTimestamp: moment('2023-02-03 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: moment('2023-02-05 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      eventMode: 'In Person',
      type: 'HACKATHON',
      link: 'https://s3.hackthisfall.tech/',
    },
    {
      id: '12',
      heading: 'Indore City',
      startTimestamp: moment('2022-12-10 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFIndore&src=typed_query&f=top',
    },
    {
      id: '13',
      heading: 'Raipur City',
      startTimestamp: moment('2022-12-10 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFRaipur&src=typed_query&f=top',
    },
    {
      id: '14',
      heading: 'Nagpur City',
      startTimestamp: moment('2022-12-10 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFNagpur&src=typed_query&f=top',
    },
    {
      id: '15',
      heading: 'Chandigarh City',
      startTimestamp: moment('2023-06-17 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFChandigarh&src=typed_query&f=top',
    },
    {
      id: '16',
      heading: 'Kolkata City',
      startTimestamp: moment('2023-07-01 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFKolkata&src=typed_query&f=top',
    },
    {
      id: '17',
      heading: 'Chennai City',
      startTimestamp: moment('2023-07-08 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFChennai&src=typed_query&f=top',
    },
    {
      id: '18',
      heading: 'Hyderabad City',
      startTimestamp: moment('2023-07-15 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFHyderabad&src=typed_query&f=top',
    },
    {
      id: '19',
      heading: 'Gurugram City',
      startTimestamp: moment('2023-08-05 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFGurugram&src=typed_query&f=top',
    },
    {
      id: '20',
      heading: 'Build with Google Dev Library',
      startTimestamp: moment('2023-09-23 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'BUILD WITH',
      link: 'https://lu.ma/BWHTFxGDL',
    },
    {
      id: '21',
      heading: 'Hacktoberfest 2023 - Virtual',
      startTimestamp: moment('2023-10-15 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'Virtual',
      type: 'HACKTOBERFEST',
      link: 'https://www.youtube.com/live/P_f7-3MRgx8?si=SAtYhKXE-rLKEgXR',
    },
    {
      id: '22',
      heading: 'Hacktoberfest 2023',
      startTimestamp: moment('2023-10-28 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'In Person',
      type: 'HACKTOBERFEST',
      link: 'https://x.com/hashtag/HackThisFallHacktoberfest?src=hashtag_click',
    },
    {
      id: '23',
      heading: 'Hack This Fall 2024',
      startTimestamp: moment('2024-02-09 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: moment('2024-02-11 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      eventMode: 'In Person',
      type: 'HACKATHON',
      link: 'https://s4.hackthisfall.tech/',
    },
    {
      id: '24',
      heading: 'Hack This Fall 2024',
      startTimestamp: moment('2024-11-08 00:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: moment('2024-11-10 00:00 AM', 'YYYY-MM-DD hh:mm A'),
      eventMode: 'Virtual',
      type: 'HACKATHON',
      link: 'https://hackathon.hackthisfall.tech/virtual',
    },
    {
      id: '25',
      heading: 'Hack This Fall 2025',
      startTimestamp: moment('2025-03-21 00:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: moment('2024-03-23 00:00 AM', 'YYYY-MM-DD hh:mm A'),
      eventMode: 'In Person',
      type: 'HACKATHON',
      link: 'https://hackathon.hackthisfall.tech/',
    },
  ],
};

export default eventsData;

// Complete data example
// {
//   id: '1',
//   heading: 'Chandigarh City Meetup',
//   eventMode: 'IN PERSON',
//   description:
//     'Hack This Fall brings you yet another event under Build With series, where we partner with different companies and organizations to deliver opportunities for you to build, network & grow. These are the events with a focused agenda where we talk about various products, tools, technologies, ideas, and beyond.',
//   startTimestamp: moment().add(1, 'days'),
//   endTimestamp: null,
//   location: 'Magnet Cowork',
//   partnerName: 'Google Dev Library',
//   partnerLogo: '/images/events/partner-dummy.png',
//   partnerDescription:
//     'Dev Library is a curated platform for technical content written or built using Google technologies like Android, Angular, Flutter, Firebase, Google Cloud, Machine Learning, Google Assistant, and Google Maps Platform. You can explore open-source dev projects and content libraries featuring Google tools and technologies contributed by developers from around the world. Find the inspiration you need for your next project now: devlibrary.withgoogle.com',
//   type: 'CITY MEETUP',
//   color: '#F6902A',
//   secondaryColor: 'rgba(246, 144, 42, 0.10)',
//   agenda: [
//     {
//       title: 'Opening Remarks',
//       startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
//       endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
//     },
//     {
//       title: 'Opening Remarks',
//       startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
//       endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
//     },
//     {
//       title: 'Opening Remarks',
//       startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
//       endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
//     },
//     {
//       title: 'Opening Remarks',
//       startTime: moment('2024-06-05 12:00 AM', 'YYYY-MM-DD hh:mm A'),
//       endTime: moment('2024-06-05 12:51 AM', 'YYYY-MM-DD hh:mm A'),
//     },
//     {
//       title: 'Opening Remarks',
//       startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
//       endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
//     },
//     {
//       title: 'Opening Remarks',
//       startTime: moment('2022-11-07 01:00 PM', 'YYYY-MM-DD hh:mm A'),
//       endTime: moment('2022-11-07 02:00 PM', 'YYYY-MM-DD hh:mm A'),
//     },
//   ],
// },
