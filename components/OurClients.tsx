"use client"

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

type Props = {
    src: string;
    alt: string;
    width: number;
    height: number;
    };

const ClientLogo = ({ src, alt, width, height }:Props) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const element :HTMLElement  = document.getElementById('our-clients');
    const elementOffset= element.offsetTop;
    const offset = 200;

    if (scrollY > elementOffset - offset) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="max-h-12 w-full object-contain lg:col-span-1 dark:invert"
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
};

const OurClients = () => {
  return (
    <section id="our-clients" className="flex flex-col justify-start items-start gap-4 bg-pink-950 rounded-xl px-4 py-3">
      <div className='flex flex-row  justify-center items-center gap-2 text-sm font-normal '>
        <Image src='/planet.png' width={25} height={25} alt='logo' />
        <h4>our clients</h4>
      </div>
      <div className="py-24 sm:py-32 rounded-xl ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-white">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <ClientLogo
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <ClientLogo
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <ClientLogo
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <ClientLogo
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <ClientLogo
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
