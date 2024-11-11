import { Image } from '@chakra-ui/react';

const PartnerDetails = [
  {
    link: 'https://appwrite.io',
    image: '/images/partners/appwrite.svg',
  },
  {
    link: 'https://auth0.com',
    image: '/images/partners/auth0.png',
  },
  {
    link: 'https://www.databricks.com',
    image: '/images/partners/databricks.png',
  },
  {
    link: 'https://devfolio.co',
    image: '/images/partners/devfolio.png',
  },
  {
    link: 'https://github.com',
    image: '/images/partners/github.png',
  },
  {
    link: 'https://developers.google.com',
    image: '/images/partners/google.png',
  },
  {
    link: 'https://devlibrary.withgoogle.com',
    image: '/images/partners/googleDev.png',
  },
  {
    link: 'https://www.logitech.com',
    image: '/images/partners/logitech.png',
  },
  {
    link: 'https://www.linode.com',
    image: '/images/partners/linode.png',
  },
  {
    link: 'https://azure.microsoft.com',
    image: '/images/partners/azure.png',
  },
  {
    link: 'https://mlh.io',
    image: '/images/partners/mlh.png',
  },
  {
    link: 'https://www.mongodb.com',
    image: '/images/partners/mongodb.png',
  },
  {
    link: 'https://www.neurelo.com',
    image: '/images/partners/neurelo.png',
  },
  {
    link: 'https://orkes.io',
    image: '/images/partners/orkes.png',
  },
  {
    link: 'https://peerlist.io',
    image: '/images/partners/peerlist.png',
  },
  {
    link: 'https://polygon.technology',
    image: '/images/partners/polygon.png',
  },
  {
    link: 'https://www.postman.com',
    image: '/images/partners/postman.png',
  },
  {
    link: 'https://www.quicknode.com',
    image: '/images/partners/quicknode.png',
  },
  {
    link: 'https://replit.com',
    image: '/images/partners/replit.png',
  },
  {
    link: 'https://solana.com',
    image: '/images/partners/solana.png',
  },
  {
    link: 'https://www.storyblok.com',
    image: '/images/partners/storyblok.png',
  },
  {
    link: 'https://streamlit.io',
    image: '/images/partners/streamlit.png',
  },
  {
    link: 'https://www.twilio.com',
    image: '/images/partners/twilio.png',
  },
  {
    link: 'https://www.getunleash.io',
    image: '/images/partners/unleash.png',
  },
  {
    link: 'https://www.vonage.com',
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
        {PartnerDetails.map((s, i) => (
          <a
            href={s.link}
            target="_blank"
            className="border p-2 md:p-4 rounded-xl flex justify-center items-center cursor-pointer h-[70px] md:h-[100px] lg:h-[120px]"
            key={i}
          >
            <Image maxH="60%" maxW="80%" src={s.image} alt="Community" />
          </a>
        ))}
      </div>
    </div>
  );
}
