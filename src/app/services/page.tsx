import Navigation from '@/components/Navigation';
import Link from 'next/link';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    features: [
      'Responsive React.js applications',
      'Python backend (Django/Flask)',
      'PostgreSQL database integration',
      'User authentication and CMS',
      'SEO optimization',
    ],
  },
  {
    title: 'Automated Marketing Campaigns',
    description: 'Streamline your marketing efforts with automation',
    features: [
      'Email marketing integration (Mailchimp/SendGrid)',
      'Social media scheduling (Hootsuite/Buffer)',
      'Campaign performance analytics',
      'Lead nurturing automation',
      'Custom marketing workflows',
    ],
  },
  {
    title: 'Data Solutions',
    description: 'Transform your data into actionable insights',
    features: [
      'Customer behavior tracking',
      'Google Analytics 4 integration',
      'Predictive analytics with Python',
      'Custom data pipelines',
      'Real-time analytics dashboards',
    ],
  },
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline operations',
    features: [
      'n8n/Zapier workflow integration',
      'CRM automation (HubSpot/Salesforce)',
      'Invoice generation automation',
      'Payment reminder systems',
      'Custom workflow solutions',
    ],
  },
];

export default function Services() {
  return (
    <>
      <Navigation />
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comprehensive software solutions tailored to your business needs
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#2A5DB0]">What We Offer</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              End-to-end technology solutions
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col bg-[#E8F0FE] p-8 rounded-lg">
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    {service.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <ul className="mt-8 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-[#2A5DB0]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="rounded-md bg-[#2A5DB0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1e4a8f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A5DB0]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 