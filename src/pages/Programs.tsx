
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Stethoscope, GraduationCap, Shield, Wrench, Heart, Users, BookOpen, Briefcase, Award, Activity } from 'lucide-react';

const Programs = () => {
  const housingServices = [
    { icon: Home, title: 'Affordable Housing Projects', description: 'Building and maintaining affordable housing for low-income families.' },
    { icon: Wrench, title: 'Home Renovation & Repair', description: 'Providing renovation and repair services to improve living conditions.' },
    { icon: Shield, title: 'Emergency Shelter & Support', description: 'Temporary shelter and support services for those in crisis.' },
    { icon: Users, title: 'Homelessness Prevention', description: 'Programs designed to prevent homelessness before it occurs.' },
  ];

  const healthServices = [
    { icon: Stethoscope, title: 'Medical Clinics & Outreach', description: 'Mobile clinics and community health programs for underserved areas.' },
    { icon: BookOpen, title: 'Health Education & Awareness', description: 'Educational programs promoting health and wellness in communities.' },
    { icon: Activity, title: 'Access to Specialized Care', description: 'Connecting patients with specialized medical services and resources.' },
    { icon: Heart, title: 'Mental Health & Wellness', description: 'Counseling services and mental health support programs.' },
  ];

  const empowermentServices = [
    { icon: GraduationCap, title: 'Education & Skills Training', description: 'Vocational training and educational programs for career development.' },
    { icon: Briefcase, title: 'Economic Empowerment & Job Placement', description: 'Job training, placement services, and entrepreneurship support.' },
    { icon: Award, title: 'Leadership Development & Mentorship', description: 'Leadership training and mentorship programs for personal growth.' },
    { icon: Users, title: 'Community Engagement & Social Activities', description: 'Programs that strengthen community bonds and social connections.' },
  ];

  const ProgramSection = ({ title, services, bgColor, iconColor }: any) => (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service: any, index: number) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className={`h-8 w-8 ${iconColor}`} />
                </div>
                <CardTitle className="text-lg text-primary-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16 min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-primary-800 bg-opacity-75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Programs</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Comprehensive support services addressing housing, health, and empowerment needs in our communities.
          </p>
        </div>
      </section>

      {/* Housing Initiative */}
      <ProgramSection
        title="1. Housing Initiative"
        services={housingServices}
        bgColor="bg-blue-500"
        iconColor="text-white"
      />

      {/* Divider */}
      <div className="bg-gray-50 py-1"></div>

      {/* Health Services */}
      <section className="bg-gray-50">
        <ProgramSection
          title="2. Health Services"
          services={healthServices}
          bgColor="bg-cyan-500"
          iconColor="text-white"
        />
      </section>

      {/* People-Empowerment */}
      <ProgramSection
        title="3. People-Empowerment"
        services={empowermentServices}
        bgColor="bg-primary-600"
        iconColor="text-white"
      />

      {/* Impact Statistics */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl">Making a difference in communities across Ghana</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-lg">Families Housed</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1,200+</div>
              <div className="text-lg">Health Services Provided</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-cyan-400 mb-2">800+</div>
              <div className="text-lg">People Empowered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
