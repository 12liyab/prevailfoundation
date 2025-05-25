
import { Card, CardContent } from '@/components/ui/card';
import { Mail, User } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Nana Affum',
      position: 'Founder and Leader',
      email: 'nana@prevailfoundation.org',
      description: 'Visionary leader dedicated to creating positive change in communities across Ghana.',
    },
    {
      name: 'Pascal Obeng-Poku',
      position: 'Chief of Operations',
      email: 'pascal@prevailfoundation.org',
      description: 'Experienced operations professional ensuring efficient program delivery and organizational excellence.',
    },
    {
      name: 'Financial Secretary',
      position: 'Financial Secretary',
      email: 'finance@prevailfoundation.org',
      description: 'Dedicated to maintaining financial transparency and ensuring responsible stewardship of resources.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16 min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-primary-800 bg-opacity-75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Meet Our Team</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Passionate individuals united by a shared vision of creating positive change in our communities.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Leadership Team</h2>
            <p className="text-gray-600 text-lg">Meet the dedicated leaders driving our mission forward</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-2">{member.name}</h3>
                  <p className="text-cyan-600 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-6">{member.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-gray-500">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{member.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Join Our Team</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision and want to make a difference in the community.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Current Opportunities</h3>
            <div className="space-y-4 text-left">
              <div className="border-l-4 border-cyan-500 pl-4">
                <h4 className="font-semibold text-primary-800">Community Outreach Coordinator</h4>
                <p className="text-gray-600 text-sm">Help us expand our reach and connect with more communities in need.</p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <h4 className="font-semibold text-primary-800">Program Manager</h4>
                <p className="text-gray-600 text-sm">Lead and coordinate our various empowerment and support programs.</p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <h4 className="font-semibold text-primary-800">Volunteer Coordinator</h4>
                <p className="text-gray-600 text-sm">Manage our volunteer network and organize community engagement activities.</p>
              </div>
            </div>
            <p className="text-gray-600 mt-6">
              Interested in any of these positions? Contact us at{' '}
              <a href="mailto:info@prevailfoundation.org" className="text-cyan-600 hover:underline">
                info@prevailfoundation.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
            <p className="text-xl">The values that unite our team and guide our work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Dedication</h3>
              <p className="text-gray-300">Committed to excellence in everything we do for our communities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-300">Working together to amplify our impact and reach more people.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-300">Finding creative solutions to complex community challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
