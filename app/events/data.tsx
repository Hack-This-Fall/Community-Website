import moment from 'moment';
import momentTz from 'moment-timezone';
momentTz.tz.setDefault('Asia/Kolkata');
import { Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';

export interface eventData {
  id: string;
  individualPageActive?: boolean;
  individualPageLink?: string;
  heading: string;
  description?: string;
  partnerName?: string;
  partnerLogo?: string;
  heroImage?: string;
  images?: string[];
  partnerDescription?: string;
  workshopDetails?: {
    heading: string;
    speaker: string;
    speakerImage: string;
    speakerTagline: string;
  }[];
  startTimestamp?: moment.Moment;
  endTimestamp?: moment.Moment | null;
  location?: string;
  locationLink?: string;
  mapView?: string;
  resources?: any;
  discordChannel?: string;
  eventMode: string;
  type: 'CITY MEETUP' | 'HACKTOBERFEST' | 'BUILD WITH' | 'HACKATHON';
  agenda?: agenda[];
  link?: string;
  faqs?: faq[];
}

export interface faq {
  question: string;
  answer: string;
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
      eventMode: 'VIRTUAL',
      type: 'HACKATHON',
      link: 'https://s1.hackthisfall.tech/',
    },
    {
      id: '1',
      heading: 'Hack This Fall 2021',
      startTimestamp: moment('2021-10-22 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: moment('2021-10-24 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      eventMode: 'VIRTUAL',
      type: 'HACKATHON',
      link: 'https://s2.hackthisfall.tech/',
    },
    {
      id: '2',
      heading: 'Jaipur City',
      startTimestamp: moment('2022-04-04 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFJaipur&src=typed_query',
    },
    {
      id: '3',
      heading: 'Mumbai City',
      startTimestamp: moment('2022-04-16 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFMumbai&src=typed_query&f=top',
    },
    {
      id: '4',
      heading: 'Pune City',
      startTimestamp: moment('2022-04-17 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFPune&src=typed_query&f=top',
    },
    {
      id: '5',
      heading: 'Delhi City',
      startTimestamp: moment('2022-05-28 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFDelhi&src=typed_query&f=top',
    },
    {
      id: '6',
      heading: 'Bengaluru City',
      startTimestamp: moment('2022-06-11 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFBengaluru&src=typed_query&f=top',
    },
    {
      id: '7',
      heading: 'Ahmedabad City',
      startTimestamp: moment('2022-07-30 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFAhmedabad&src=typed_query&f=top',
    },
    {
      id: '8',
      heading: 'Hacktoberfest 2022',
      startTimestamp: moment('2022-10-16 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'HACKTOBERFEST',
      link: 'https://lu.ma/HTFxSolanaxHacktoberfest22',
    },
    {
      id: '9',
      heading: 'Hacktoberfest 2022 - VIRTUAL',
      startTimestamp: moment('2022-10-22 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'VIRTUAL',
      type: 'HACKTOBERFEST',
      link: 'https://www.youtube.com/live/2WIqHHZq_B8?si=hVa1VNXFrwBtmd3L',
    },
    {
      id: 'nhost-pune-10-12',
      heading: 'Build with Nhost',
      individualPageActive: true,
      individualPageLink: '/events/build-with/nhost-pune-10-12',
      location: 'CODITAS, PUNE',
      description:
        'Hack This Fall brings to you a Build With series, where we partner with different companies and organizations to deliver opportunities for you to learn, network & grow. These events are focussed meet-ups where we talk about various products, tools, technologies, ideas and beyond.',
      startTimestamp: moment('2022-12-10 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      partnerLogo: '/images/partners/nhost.png',
      heroImage: '/images/events/bw-nhost/hero.png',
      images: [
        '/images/events/bw-nhost/1.png',
        '/images/events/bw-nhost/2.png',
        '/images/events/bw-nhost/3.png',
      ],
      workshopDetails: [
        {
          heading: 'Building the right projects with Devfolio',
          speaker: 'Shriya Karanam',
          speakerImage: '/images/events/bw-nhost/workshop/shriya.png',
          speakerTagline: 'Community Manager, Devfolio',
        },
        {
          heading: 'Git & GitHub for Hackathons',
          speaker: 'Dhiraj Chauhan',
          speakerImage: '/images/events/bw-nhost/workshop/dhiraj.png',
          speakerTagline: 'Github Campus Experts',
        },
        {
          heading: 'I Code; Therefore, I am;',
          speaker: 'Varun Srinivas',
          speakerImage: '/images/events/bw-nhost/workshop/varun.png',
          speakerTagline: 'Partner and Director of Technology, Coditas',
        },
        {
          heading: 'Build a quick backend with Nhost',
          speaker: 'Pratim Bhosale',
          speakerImage: '/images/events/bw-nhost/workshop/pratim.png',
          speakerTagline: 'Developer Advocate, Nhost',
        },
      ],
      partnerName: 'Nhost',
      partnerDescription:
        'Nhost is the open source GraphQL backend (Firebase Alternative) and a development platform. Nhost is doing for the backend, what Netlify and Vercel are doing for the frontend. \nThey provide a modern backend with the general building blocks required to build fantastic digital products.',
      endTimestamp: null,
      eventMode: 'IN PERSON',
      resources: (
        <Text
          textAlign="left"
          fontSize="1.3rem"
          fontFamily="var(--font-outfit)"
          fontWeight="500"
        >
          <UnorderedList>
            <ListItem>
              Check out Nhost{' '}
              <Link
                textDecor="underline"
                href="https://github.com/nhost/nhost"
                target="_blank"
              >
                repo
              </Link>
              .
            </ListItem>
            <ListItem>
              Login to Nhost{' '}
              <Link
                textDecor="underline"
                href="https://app.nhost.io/signin"
                target="_blank"
              >
                Dashboard
              </Link>
              .
            </ListItem>
            <ListItem>
              Create your first Nhost project by following the first step of the
              guide:{' '}
              <Link
                textDecor="underline"
                href="https://nhost.io/blog/build-Link-simple-notes-app-with-nhost-and-nextjs"
                target="_blank"
              >
                Build a basic notes app with Nhost and Next.js
              </Link>
            </ListItem>
            <ListItem>
              Get GitHub Student Developer Pack{' '}
              <Link
                textDecor="underline"
                href="https://education.github.com/discount_requests/student_application?utm_source=2022-12-10-BWHTFxNhost"
                target="_blank"
              >
                here
              </Link>
            </ListItem>
          </UnorderedList>
        </Text>
      ),
      locationLink:
        'https://maps.google.com/maps?width=600&amp;height=200&amp;hl=en&amp;q=coditas, viman nagar, pune&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
      mapView: '/images/events/bw-nhost/location.png',
      type: 'BUILD WITH',
      link: 'https://lu.ma/BWHTFxNhost',
      discordChannel: '#htf-x-nhost',
      agenda: [
        {
          title: 'Check-In',
          startTime: moment('2022-12-10 10:00 AM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-12-10 10:30 AM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Welcome & Introduction',
          startTime: moment('2022-12-10 10:30 AM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-12-10 10:45 AM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Build a quick Backend with Nhost [Workshop]',
          startTime: moment('2022-12-10 10:45 AM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-12-10 11:30 AM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Nhost Quiz and Swag Giveaway',
          startTime: moment('2022-12-10 11:30 AM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-12-10 11:45 AM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'I Code; Therefore, I am; [Talk]',
          startTime: moment('2022-12-10 11:50 AM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-12-10 12:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Git & GitHub for Hackathons [Workshop]',
          startTime: moment('2022-12-10 12:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-12-10 1:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Lunch Break & Networking',
          startTime: moment('2022-12-10 13:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-12-10 14:15 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Build the right projects with Devfolio [Talk]',
          startTime: moment('2022-12-10 2:30 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-12-10 3:00 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Prizes + Giveaways',
          startTime: moment('2022-12-10 3:00 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-12-10 3:15 PM', 'YYYY-MM-DD hh:mm A'),
        },
        {
          title: 'Conclusion + Group Photo',
          startTime: moment('2022-12-10 3:15 PM', 'YYYY-MM-DD hh:mm A'),
          endTime: moment('2022-12-10 3:30 PM', 'YYYY-MM-DD hh:mm A'),
        },
      ],
      faqs: [
        {
          question: 'Will you support or reimburse our travel expenses?',
          answer:
            'Since Hack This Fall 2024 is a community-driven hackathon, unfortunately we will not be able to support you with travel.',
        },
        {
          question:
            'A member/few members of my team canceled at the last minute. Can I still hack?',
          answer: `Kindly open the #organizer-ticket on our <a href="https://discord.hackthisfall.tech" target="_blank">Discord Server</a> and let the organizers know as soon as possible, so that we can try to make necessary next steps.`,
        },
        {
          question: 'What are the arrangements for hackers?',
          answer: `On both nights (9th Feb & 10th Feb) we will have a supervised sleeping space for hackers to rest and sleep at the venue. We have arranged a separate sleeping area for girls, clean washrooms, personal hygiene and sanitary kits, etc. We recommend bringing your own blanket if you need one. We want to make sure that all hackers feel comfortable and safe at the hackathon. 
      <br/>
      <br/>
      There will be meals served on the respective days to everyone who checks-in
      <ul>
      <li style="margin-left:1rem">High-tea, and Dinner on<b> 9 Feb</b></li><li style="margin-left:1rem">
      Breakfast, Lunch, High-tea, and Dinner on<b> 10 Feb</b></li ><li style="margin-left:1rem">
      Breakfast and Lunch on <b>11 Feb</b></li>
      `,
        },
        {
          question: 'Can hackers start working on projects in advance?',
          answer:
            'No. You can only start working on the projects once hacking begins on 9 Feb after the opening ceremony. Any project with an earlier commit history will be disqualified.<br/><br/>However, you can learn the basic tools and technologies you might need before the hackathon.',
        },
        {
          question:
            'At what time should I arrive at the hackathon on 9 Feb and at what time can I depart on 11 Feb?',
          answer:
            "You are expected to arrive at the hackathon venue by 2 PM IST on Friday, 9 Feb. The estimated departure time from the venue is 7 PM IST on Sunday, 11th Feb. Book your return travel tickets accordingly to ensure you don't miss the Closing Ceremony.",
        },
        {
          question:
            'Is there any resource that can help me get more info about the venue?',
          answer:
            'To learn more about the venue, arrival & departure, and how to reach there, you can check out our Venue Guide <a href="https://bit.ly/htf4-venue-guide" target="_blank">here</a>.',
        },
        {
          question:
            'Where can I find the judging criteria? How many judging rounds should I be prepared for?',
          answer:
            'You can find everything you need to know about judging including the criteria and the structure in the judging guidelines in the Hacker Guide sent to you via email.',
        },
        {
          question: 'What is the event Code of Conduct?',
          answer:
            'We want to ensure a positive experience for all participants. We will be following <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">MLH’s Code of Conduct</a>, we encourage you to read it.',
        },
        {
          question: 'I have more questions, how and where can I reach out?',
          answer:
            'You can reach out to us on our <a href="https://discord.hackthisfall.tech" target="_blank">Discord Server</a> in #🍁〡ask-htf-team or email us at <a href="mailto:hackthisfall@gmail.com" target="_blank">hackthisfall@gmail.com</a>! We\'re always ready to answer all your questions.',
        },
      ],
    },
    {
      id: '11',
      heading: 'Hack This Fall 2023',
      startTimestamp: moment('2023-02-03 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: moment('2023-02-05 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      eventMode: 'IN PERSON',
      type: 'HACKATHON',
      link: 'https://s3.hackthisfall.tech/',
    },
    {
      id: '12',
      heading: 'Indore City',
      startTimestamp: moment('2022-12-10 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFIndore&src=typed_query&f=top',
    },
    {
      id: '13',
      heading: 'Raipur City',
      startTimestamp: moment('2022-12-10 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFRaipur&src=typed_query&f=top',
    },
    {
      id: '14',
      heading: 'Nagpur City',
      startTimestamp: moment('2022-12-10 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFNagpur&src=typed_query&f=top',
    },
    {
      id: '15',
      heading: 'Chandigarh City',
      startTimestamp: moment('2023-06-17 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFChandigarh&src=typed_query&f=top',
    },
    {
      id: '16',
      heading: 'Kolkata City',
      startTimestamp: moment('2023-07-01 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFKolkata&src=typed_query&f=top',
    },
    {
      id: '17',
      heading: 'Chennai City',
      startTimestamp: moment('2023-07-08 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFChennai&src=typed_query&f=top',
    },
    {
      id: '18',
      heading: 'Hyderabad City',
      startTimestamp: moment('2023-07-15 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFHyderabad&src=typed_query&f=top',
    },
    {
      id: '19',
      heading: 'Gurugram City',
      startTimestamp: moment('2023-08-05 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'CITY MEETUP',
      link: 'https://x.com/search?q=%23HTFGurugram&src=typed_query&f=top',
    },
    {
      id: '20',
      heading: 'Build with Google Dev Library',
      startTimestamp: moment('2023-09-23 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'BUILD WITH',
      link: 'https://lu.ma/BWHTFxGDL',
    },
    {
      id: '21',
      heading: 'Hacktoberfest 2023 - VIRTUAL',
      startTimestamp: moment('2023-10-15 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'VIRTUAL',
      type: 'HACKTOBERFEST',
      link: 'https://www.youtube.com/live/P_f7-3MRgx8?si=SAtYhKXE-rLKEgXR',
    },
    {
      id: '22',
      heading: 'Hacktoberfest 2023',
      startTimestamp: moment('2023-10-28 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: null,
      eventMode: 'IN PERSON',
      type: 'HACKTOBERFEST',
      link: 'https://x.com/hashtag/HackThisFallHacktoberfest?src=hashtag_click',
    },
    {
      id: '23',
      heading: 'Hack This Fall 2024',
      startTimestamp: moment('2024-02-09 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: moment('2024-02-11 12:00 AM', 'YYYY-MM-DD hh:mm A'),
      eventMode: 'IN PERSON',
      type: 'HACKATHON',
      link: 'https://s4.hackthisfall.tech/',
    },
    {
      id: '24',
      heading: 'Hack This Fall 2024',
      startTimestamp: moment('2024-11-08 00:00 AM', 'YYYY-MM-DD hh:mm A'),
      endTimestamp: moment('2024-11-10 00:00 AM', 'YYYY-MM-DD hh:mm A'),
      eventMode: 'VIRTUAL',
      type: 'HACKATHON',
      link: 'https://hackathon.hackthisfall.tech/virtual',
    },
    {
      id: '26',
      heading: "Builder 's Meetup with Devfolio",
      startTimestamp: moment('2024-12-15 11:00 AM', 'YYYY-MM-DD hh:mm A'),
      eventMode: 'IN PERSON',
      type: 'BUILD WITH',
      link: 'https://lu.ma/5dcx1ipq',
    },
    {
      id: '28',
      heading: 'Build With TON Society India',
      eventMode: 'IN PERSON',
      type: 'BUILD WITH',
      startTimestamp: moment('2025-01-25 10:00 AM', 'YYYY-MM-DD hh:mm A'),
      link: 'https://lu.ma/wlk4sari',
    },
    {
      id: '27',
      heading: 'Hack This Fall 2025',
      eventMode: 'VIRTUAL',
      type: 'HACKATHON',
      link: 'https://hackathon.hackthisfall.tech/virtual',
    },
    {
      id: '28',
      heading: 'BuildShip x DevDay Hackathon',
      startTimestamp: moment('2025-06-21 10:00 AM', 'YYYY-MM-DD hh:mm A'),
      eventMode: 'IN PERSON',
      type: 'HACKATHON',
      link: 'https://lu.ma/ekumfiam',
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
