import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Navigation />
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About Our Company
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are a team of passionate engineers and developers from top institutions including MIT, Princeton, Stanford, and U Penn. Our expertise spans full-stack development, AI/ML, and automation.
              </p>
            </div>
          </div>
        </div>

        {/* Client Success Stories */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8 pb-24">
          <h2 className="text-2xl font-bold text-[#2A5DB0] mb-8 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Example 1 */}
            <div className="bg-[#F5F9FF] rounded-xl shadow p-6 flex flex-col items-center">
              <a href="https://www.accesspointfoundation.org/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/Screenshot 2025-05-28 at 8.43.19 PM.png"
                  alt="AccessPoint Foundation Web App Screenshot"
                  width={500}
                  height={300}
                  className="rounded-lg mb-4 object-contain"
                  style={{ maxHeight: 220, width: '100%', height: 'auto' }}
                />
              </a>
              <h3 className="text-xl font-semibold mb-2 text-[#2A5DB0]">AccessPoint Foundation</h3>
              <p className="text-gray-700 mb-2">
                We built a full-stack web application for <a href="https://www.accesspointfoundation.org/" target="_blank" rel="noopener noreferrer" className="text-[#2A5DB0] underline">AccessPoint Foundation</a>, a nonprofit dedicated to helping students find college resources, scholarships, and expert guidance. The platform features a custom dashboard, resource management, and a modern, user-friendly interface.
              </p>
            </div>
            {/* Example 2 */}
            <div className="bg-[#F5F9FF] rounded-xl shadow p-6 flex flex-col items-center justify-center">
            
            <Image
                  src="/67e1d5d49b530cefaef90683_n8n-example-workflow.webp"
                  alt="n8n workflow"
                  width={500}
                  height={300}
                  className="rounded-lg mb-4 object-contain"
                  style={{ maxHeight: 220, width: '100%', height: 'auto' }}
                />
              <h3 className="text-xl font-semibold mb-2 text-[#2A5DB0]">Automated Client Scheduling</h3>
              <p className="text-gray-700 mb-2">
                For a professional services client, we designed and implemented a fully automated scheduling system. This solution integrated with their calendar and CRM, automatically handled booking requests, sent reminders, and reduced manual coordination—saving hours each week and improving client satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#2A5DB0]">Our Team</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet the experts behind our solutions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {[
                {
                  role: 'Full-Stack Developer',
                  institution: 'MIT, Stanford',
                  description: 'Specializing in frontend/backend integration and modern web technologies.',
                },
                {
                  role: 'Data Engineer',
                  institution: 'Princeton',
                  description: 'Expert in pipeline setup and advanced analytics solutions.',
                },
                {
                  role: 'Automation Specialist',
                  institution: 'U Penn',
                  description: 'Creating efficient workflows and automation solutions.',
                },
              ].map((member) => (
                <div key={member.role} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    {member.role}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{member.description}</p>
                    <p className="mt-6 text-sm text-[#2A5DB0]">
                      {member.institution}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Mission section */}
        <div className="bg-[#E8F0FE] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[#2A5DB0]">Our Mission</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Empowering businesses through technology
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We believe in delivering customized solutions that drive real business value. Our approach combines technical excellence with a deep understanding of business needs to create lasting partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 