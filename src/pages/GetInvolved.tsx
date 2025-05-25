
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Handshake, Megaphone, DollarSign, Clock, Globe, Award } from 'lucide-react';

const GetInvolved = () => {
  const ways = [
    {
      icon: DollarSign,
      title: 'Donate',
      description: 'Support our programs with a secure online donation. Every contribution makes a difference.',
      action: 'Donate Now',
      link: '/donate',
      color: 'bg-green-500'
    },
    {
      icon: Heart,
      title: 'Volunteer',
      description: 'Join our team and make a direct impact in the community through hands-on volunteer work.',
      action: 'Learn More',
      link: '/contact',
      color: 'bg-blue-500'
    },
    {
      icon: Handshake,
      title: 'Partner',
      description: 'Collaborate with us to amplify our impact through corporate partnerships and sponsorships.',
      action: 'Partner With Us',
      link: '/contact',
      color: 'bg-purple-500'
    },
    {
      icon: Megaphone,
      title: 'Advocate',
      description: 'Help raise awareness about our mission and programs through social media and word of mouth.',
      action: 'Start Advocating',
      link: '/contact',
      color: 'bg-cyan-500'
    }
  ];

  const volunteerOpportunities = [
    { icon: Users, title: 'Community Outreach', description: 'Help us connect with communities and identify needs.' },
    { icon: Clock, title: 'Event Support', description: 'Assist with fundraising events and community activities.' },
    { icon: Globe, title: 'Digital Marketing', description: 'Support our online presence and digital campaigns.' },
    { icon: Award, title: 'Skills-Based Volunteering', description: 'Use your professional skills to support our operations.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16 min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-primary-800 bg-opacity-75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Get Involved</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Join us in creating positive change. There are many ways to support our mission and make a lasting impact.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Ways to Support Us</h2>
            <p className="text-gray-600 text-lg">Choose how you'd like to make a difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ways.map((way, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <CardHeader>
                  <div className={`${way.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <way.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary-800">{way.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{way.description}</p>
                  <Button asChild className="w-full">
                    <Link to={way.link}>{way.action}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Volunteer Opportunities</h2>
            <p className="text-gray-600 text-lg">Find the perfect way to contribute your time and skills</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <opportunity.icon className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600 text-sm">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Partner With Us</h2>
              <p className="text-gray-700 text-lg mb-6">
                We believe in the power of collaboration. By partnering with businesses, organizations, and individuals, we can multiply our impact and reach more communities in need.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-semibold text-primary-800">Corporate Sponsorships</h3>
                    <p className="text-gray-600">Support specific programs or events with corporate funding.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-semibold text-primary-800">In-Kind Donations</h3>
                    <p className="text-gray-600">Contribute goods, services, or expertise to our programs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-semibold text-primary-800">Employee Engagement</h3>
                    <p className="text-gray-600">Organize team volunteer days and fundraising campaigns.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Ready to Partner?</h3>
              <p className="text-gray-700 mb-6">
                Contact us to discuss partnership opportunities and how we can work together to create positive change.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Every Action Counts</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you donate, volunteer, partner, or advocate, your support helps us empower more individuals and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600">
              <Link to="/donate">Make a Donation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-800">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
