
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Home, Stethoscope, GraduationCap, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  const values = [
    { icon: Heart, title: 'Compassion', description: 'We approach every situation with empathy and understanding.' },
    { icon: Users, title: 'Empowerment', description: 'We believe in empowering individuals to create positive change.' },
    { icon: Users, title: 'Inclusivity', description: 'We welcome and support people from all backgrounds.' },
    { icon: Heart, title: 'Integrity', description: 'We operate with transparency and honesty in all we do.' },
    { icon: Users, title: 'Community', description: 'We strengthen communities through collaborative efforts.' },
  ];

  const programs = [
    {
      icon: Home,
      title: 'Housing Initiative',
      description: 'Providing safe, affordable housing solutions for those in need.',
      color: 'bg-blue-500'
    },
    {
      icon: Stethoscope,
      title: 'Health Services',
      description: 'Comprehensive healthcare access and wellness programs.',
      color: 'bg-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'People-Empowerment',
      description: 'Education, training, and leadership development opportunities.',
      color: 'bg-primary-600'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white py-20 min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/28a7115f-c755-4db8-b44b-3bd61b9a8cea.png')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-primary-800 bg-opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/28a7115f-c755-4db8-b44b-3bd61b9a8cea.png" 
              alt="Prevail Foundation Logo" 
              className="h-32 w-32 mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Prevail Foundation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Empowering individuals and communities to prevail over adversity through housing, health, and people-empowerment programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                <Link to="/get-involved">Get Involved</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-800">
                <Link to="/programs">Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg mb-6">
                Prevail Foundation was founded by a group of passionate individuals who believe that everyone deserves a chance to thrive. We saw a need for comprehensive support services that address the interconnected issues of housing, health, and empowerment.
              </p>
              <p className="text-gray-700 text-lg">
                Our team has grown to include experts in various fields, all united by a shared vision of creating positive change in communities across Ghana and beyond.
              </p>
            </div>
            <div className="animate-slide-in">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Vision</h3>
                <p className="text-gray-700 text-lg">
                  A world where everyone has access to safe housing, quality healthcare, and equal opportunities for growth and development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Our Impact Areas</h2>
            <p className="text-gray-600 text-lg">Three pillars of change in our communities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`${program.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <ArrowRight className="h-5 w-5 text-cyan-500 mx-auto group-hover:translate-x-2 transition-transform" />
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/programs">Learn More About Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to empower communities and create lasting change. Every contribution counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600">
              <Link to="/donate">Donate Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-800">
              <Link to="/get-involved">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
