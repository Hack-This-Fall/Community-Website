import moment from 'moment';
import momentTz from 'moment-timezone';
momentTz.tz.setDefault('Asia/Kolkata');

export interface eventData {
  id: string;
  image: string;
  heading: string;
  description: string;
  startTimestamp: moment.Moment;
  endTimestamp: moment.Moment;
  location: string;
  color: string;
  secondaryColor: string;
  type: 'EVENT_CITY_MEETUP' | 'EVENT_HACKTOBERFEST' | 'EVENT_BUILD_WITH';
  agenda: string[][];
}

interface eventsData {
  tabs: {
    [key: string]: {
      heading: string;
      filterFunction: (eventData: eventData) => boolean;
    };
  };
  individualEventTabs: {
    [key: string]: {
      heading: string;
      filterFunction: (eventData: eventData, type: string) => boolean;
    };
  };
  events: eventData[];
}

const eventsData: eventsData = {
  tabs: {
    EVENT_UPCOMING: {
      heading: 'Upcoming',
      filterFunction: (eventData: eventData) =>
        moment().diff(eventData.startTimestamp) < 0,
    },
    EVENT_CITY_MEETUP: {
      heading: 'City Meetup',
      filterFunction: (eventData: eventData) =>
        eventData.type === 'EVENT_CITY_MEETUP',
    },
    EVENT_HACKTOBERFEST: {
      heading: 'Hacktoberfest',
      filterFunction: (eventData: eventData) =>
        eventData.type === 'EVENT_HACKTOBERFEST',
    },
    EVENT_BUILD_WITH: {
      heading: 'Build With',
      filterFunction: (eventData: eventData) =>
        eventData.type === 'EVENT_BUILD_WITH',
    },
  },
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
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().add(1, 'days'),
      endTimestamp: moment().add(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_CITY_MEETUP',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '2',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_CITY_MEETUP',
      color: '#4E9DFF',
      secondaryColor: 'rgba(78, 157, 255, 0.30)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '3',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_CITY_MEETUP',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '1',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: moment().subtract(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_CITY_MEETUP',
      color: '#4E9DFF',
      secondaryColor: 'rgba(78, 157, 255, 0.30)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '4',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_CITY_MEETUP',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '5',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: moment().subtract(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_CITY_MEETUP',
      color: '#A163FF',
      secondaryColor: 'rgba(161, 99, 255, 0.30)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '6',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().add(1, 'days'),
      endTimestamp: moment().add(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_BUILD_WITH',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '7',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_BUILD_WITH',
      color: '#4E9DFF',
      secondaryColor: 'rgba(78, 157, 255, 0.30)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '8',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_BUILD_WITH',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '9',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: moment().subtract(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_BUILD_WITH',
      color: '#4E9DFF',
      secondaryColor: 'rgba(78, 157, 255, 0.30)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '10',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_BUILD_WITH',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '11',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: moment().subtract(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_BUILD_WITH',
      color: '#A163FF',
      secondaryColor: 'rgba(161, 99, 255, 0.30)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '12',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().add(1, 'days'),
      endTimestamp: moment().add(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_HACKTOBERFEST',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '13',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_HACKTOBERFEST',
      color: '#4E9DFF',
      secondaryColor: 'rgba(78, 157, 255, 0.30)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '14',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_HACKTOBERFEST',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '15',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: moment().subtract(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_HACKTOBERFEST',
      color: '#4E9DFF',
      secondaryColor: 'rgba(78, 157, 255, 0.30)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '16',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_HACKTOBERFEST',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
    {
      id: '17',
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      description:
        'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities. Experience the latest announcements from I/O.',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: moment().subtract(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_HACKTOBERFEST',
      color: '#A163FF',
      secondaryColor: 'rgba(161, 99, 255, 0.30)',
      agenda: [
        ['Check-in', '12:30 PM  to 1:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
        ['Opening Remarks', '01:00 PM to 2:00 PM IST '],
      ],
    },
  ],
};

export default eventsData;
