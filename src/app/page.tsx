'use client';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const collegeLogos = [
  { src: '/college-logos/mit_clean-removebg-preview.png', alt: 'MIT Logo' },
  { src: '/college-logos/images__3_-removebg-preview.png', alt: 'Stanford Logo' }, // Stanford
  { src: '/college-logos/png-transparent-princeton-university-logo-ivy-league-universities-removebg-preview.png', alt: 'Princeton Logo' }, // Princeton
  { src: '/college-logos/UniversityofPennsylvania_FullLogo_RGB-4_0-removebg-preview.png', alt: 'UPenn Logo' },
  { src: '/college-logos/Harvard-removebg-preview.png', alt: 'Harvard Logo'} // UPenn
];

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="relative isolate bg-[#E8F0FE] min-h-screen">
        {/* Hero section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative px-6 lg:px-8 pt-20 pb-24 bg-gradient-to-b from-[#E8F0FE] to-white"
        >
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl font-extrabold tracking-tight text-[#2A5DB0] sm:text-6xl mb-6"
            >
              Transform Your Business<br />with Custom Software Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-6 text-xl leading-8 text-gray-700 mb-10"
            >
              We deliver cutting-edge web applications, automated workflows, and data-driven insights to streamline your operations and drive growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex items-center justify-center gap-x-6"
            >
              <Link
                href="/contact"
                className="rounded-md bg-[#2A5DB0] px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-[#1e4a8f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A5DB0] transition"
              >
                Get Started
              </Link>
              <Link href="/services" className="text-lg font-semibold leading-6 text-[#2A5DB0] hover:underline">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Team section with college logos */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#F5F9FF] py-12 sm:py-20"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2A5DB0] mb-4">Our Team</h2>
            <p className="mb-8 text-gray-700 text-lg">A team of talent from top schools</p>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {collegeLogos.map((logo) => {
                // Custom sizes for each logo for visual balance
                let width = 160, height = 96, imgClass = "object-contain h-24 w-auto drop-shadow-md";
                if (logo.alt === 'Stanford Logo' || logo.alt === 'Princeton Logo' || logo.alt === 'UPenn Logo') {
                  width = 200; height = 112; imgClass = "object-contain h-28 w-auto drop-shadow-md";
                }
                return (
                  <motion.div
                    key={logo.alt}
                    whileHover={{ scale: 1.08 }}
                    className="flex items-center justify-center rounded-lg p-2 h-36 w-56 bg-transparent shadow-none"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={width}
                      height={height}
                      className={imgClass}
                      style={{ background: 'transparent' }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Services section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[#2A5DB0]">Our Services</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to scale your business
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {[
                  {
                    title: 'Web Development',
                    description: 'Custom web applications built with React.js, featuring responsive design and modern UI/UX principles.',
                  },
                  {
                    title: 'Automated Marketing',
                    description: 'Streamline your marketing efforts with automated email campaigns and social media scheduling.',
                  },
                  {
                    title: 'Data Analytics',
                    description: 'Leverage data-driven insights with our advanced analytics and predictive modeling solutions.',
                  },
                ].map((service, idx) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.6 }}
                    className="flex flex-col bg-[#F5F9FF] rounded-xl shadow p-8 hover:shadow-lg transition-shadow min-h-[220px]"
                  >
                    <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-[#2A5DB0] mb-2">
                      {service.title}
                    </dt>
                    <dd className="flex flex-auto flex-col text-base leading-7 text-gray-700">
                      <p className="flex-auto mb-4">{service.description}</p>
                      <Link href="/services" className="text-sm font-semibold leading-6 text-[#2A5DB0] hover:underline">
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}