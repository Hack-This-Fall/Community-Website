import moment from 'moment';
import momentTz from 'moment-timezone';
momentTz.tz.setDefault('Asia/Kolkata');

export interface eventData {
  image: string;
  heading: string;
  startTimestamp: moment.Moment;
  endTimestamp: moment.Moment;
  location: string;
  color: string;
  secondaryColor: string;
  type: 'EVENT_CITY_MEETUP' | 'EVENT_HACKTOBERFEST' | 'EVENT_BUILD_WITH';
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
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().add(1, 'days'),
      endTimestamp: moment().add(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_CITY_MEETUP',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_CITY_MEETUP',
      color: '#4E9DFF',
      secondaryColor: 'rgba(78, 157, 255, 0.30)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_CITY_MEETUP',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: moment().subtract(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_CITY_MEETUP',
      color: '#4E9DFF',
      secondaryColor: 'rgba(78, 157, 255, 0.30)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_CITY_MEETUP',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: moment().subtract(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_CITY_MEETUP',
      color: '#A163FF',
      secondaryColor: 'rgba(161, 99, 255, 0.30)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().add(1, 'days'),
      endTimestamp: moment().add(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_BUILD_WITH',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_BUILD_WITH',
      color: '#4E9DFF',
      secondaryColor: 'rgba(78, 157, 255, 0.30)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_BUILD_WITH',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: moment().subtract(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_BUILD_WITH',
      color: '#4E9DFF',
      secondaryColor: 'rgba(78, 157, 255, 0.30)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_BUILD_WITH',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: moment().subtract(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_BUILD_WITH',
      color: '#A163FF',
      secondaryColor: 'rgba(161, 99, 255, 0.30)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().add(1, 'days'),
      endTimestamp: moment().add(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_HACKTOBERFEST',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_HACKTOBERFEST',
      color: '#4E9DFF',
      secondaryColor: 'rgba(78, 157, 255, 0.30)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_HACKTOBERFEST',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: moment().subtract(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_HACKTOBERFEST',
      color: '#4E9DFF',
      secondaryColor: 'rgba(78, 157, 255, 0.30)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().add(2, 'days'),
      endTimestamp: moment().add(2, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_HACKTOBERFEST',
      color: '#F6902A',
      secondaryColor: 'rgba(246, 144, 42, 0.10)',
    },
    {
      image: '/images/events/event_dummy.jpeg',
      heading: 'City Meetup Chandigarh',
      startTimestamp: moment().subtract(1, 'days'),
      endTimestamp: moment().subtract(1, 'days').add('1', 'hour'),
      location: 'Magnet Cowork',
      type: 'EVENT_HACKTOBERFEST',
      color: '#A163FF',
      secondaryColor: 'rgba(161, 99, 255, 0.30)',
    },
  ],
};

export default eventsData;
