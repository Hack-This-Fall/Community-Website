import { Image } from '@chakra-ui/react';

const sponsors = [
  {
    linkTo: 'https://appwrite.io',
    image: '/images/partners/appwrite.svg',
  },
  {
    linkTo: 'https://devfolio.co',
    image: '/images/partners/devfolio.png',
  },
  {
    linkTo: 'https://github.com',
    image: '/images/partners/github.png',
  },
  {
    linkTo: 'https://devlibrary.withgoogle.com',
    image: '/images/partners/googleDev.png',
  },
  {
    linkTo: 'https://www.linode.com',
    image: '/images/partners/linode.png',
  },
  {
    linkTo: 'https://azure.microsoft.com',
    image: '/images/partners/azure.png',
  },
  {
    linkTo: 'https://mlh.io',
    image: '/images/partners/mlh.png',
  },
  {
    linkTo: 'https://www.mongodb.com',
    image: '/images/partners/mongodb.png',
  },
  {
    linkTo: 'https://www.neurelo.com',
    image: '/images/partners/neurelo.png',
  },
  {
    linkTo: 'https://orkes.io',
    image: '/images/partners/orkes.png',
  },
  {
    linkTo: 'https://peerlist.io',
    image: '/images/partners/peerlist.png',
  },
  {
    linkTo: 'https://polygon.technology',
    image: '/images/partners/polygon.png',
  },
  {
    linkTo: 'https://www.postman.com',
    image: '/images/partners/postman.png',
  },
  {
    linkTo: 'https://www.quicknode.com',
    image: '/images/partners/quicknode.png',
  },
  {
    linkTo: 'https://replit.com',
    image: '/images/partners/replit.png',
  },
  {
    linkTo: 'https://solana.com',
    image: '/images/partners/solana.png',
  },
  {
    linkTo: 'https://www.storyblok.com',
    image: '/images/partners/storyblok.png',
  },
  {
    linkTo: 'https://www.twilio.com',
    image: '/images/partners/twilio.png',
  },
  {
    linkTo: 'https://www.getunleash.io',
    image: '/images/partners/unleash.png',
  },
  {
    linkTo: 'https://www.vonage.com',
    image: '/images/partners/vonage.png',
  },
];

export default function Sponsors() {
  return (
    <div className="flex flex-col align-center text-center container-1440">
      <div className="font-outfit font-semibold text-[2.2rem] md:text-[3.9rem] text-black">
        Partners in doing good
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4 mt-8 container-1200 mx-auto">
        {sponsors.map((s, i) => (
          <a
            href={s.linkTo}
            target='_blank'
            className="border p-2 md:p-4 rounded-xl flex justify-center items-center cursor-pointer h-[70px] md:h-[100px] lg:h-[120px]"
            key={i}
          >
            <Image maxH="60%" src={s.image} alt="Community" />
          </a>
        ))}
      </div>
    </div>
  );
}
