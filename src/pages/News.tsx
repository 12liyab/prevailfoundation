import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Users, Heart, Award, MapPin, Clock, Target } from 'lucide-react';
import { useState } from 'react';

const News = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const news = [
    {
      type: 'Event',
      title: 'Charity Run for Affordable Housing',
      date: 'December 15, 2024',
      excerpt: 'Join us for our annual charity run to raise funds for affordable housing projects. Every step counts towards building homes for families in need.',
      fullContent: `Join us for our annual charity run to raise funds for affordable housing projects in Greater Accra. This year's event will take place at Laboma Beach and will feature multiple distance options to accommodate runners of all fitness levels.

Event Details:
• 5K Fun Run (families welcome)
• 10K Competitive Run
• Half Marathon (21K)
• Registration starts at 6:00 AM
• Races begin at 7:00 AM

All proceeds will directly support our Housing Initiative, specifically funding the construction of 50 new affordable housing units for low-income families. Each participant will receive a commemorative t-shirt, medal, and breakfast package.

Registration fee: GHS 50 (5K), GHS 80 (10K), GHS 120 (Half Marathon)
Expected fundraising goal: GHS 200,000

Special guests include local celebrities, government officials, and community leaders who will participate alongside our beneficiaries. Free health screenings and family activities will be available throughout the morning.

To register, visit our website or contact us at events@prevailfoundation.org`,
      category: 'Upcoming Event',
      icon: Users,
      color: 'bg-green-500',
      location: 'Laboma Beach, Accra',
      time: '6:00 AM - 12:00 PM'
    },
    {
      type: 'News',
      title: 'Prevail Foundation Receives Grant for Health Services Expansion',
      date: 'November 28, 2024',
      excerpt: 'We are excited to announce that we have received a significant grant to expand our health services program, allowing us to reach more communities.',
      fullContent: `Prevail Foundation has been awarded a transformative GHS 2.5 million grant from the Ghana Health Foundation to significantly expand our health services program across the Greater Accra region.

Grant Highlights:
• Three-year funding period (2025-2027)
• Establishment of 5 new mobile health clinics
• Training of 50 community health workers
• Free health screenings for 10,000+ residents annually
• Mental health support services expansion

This funding will enable us to:

1. Mobile Health Clinics: Deploy state-of-the-art mobile units to underserved communities, providing primary healthcare, vaccinations, and preventive care directly to residents' doorsteps.

2. Community Health Worker Program: Train and deploy certified health workers who will provide ongoing support, health education, and basic medical services in their own communities.

3. Mental Health Initiative: Launch comprehensive mental health support services, including counseling, therapy groups, and crisis intervention programs.

4. Specialized Care Access: Partner with major hospitals to provide referral services and subsidized specialized care for complex medical conditions.

Expected Impact:
• 15,000 direct beneficiaries annually
• 40% reduction in preventable diseases in target communities
• 200+ jobs created in the health sector
• Improved health outcomes for vulnerable populations

Dr. Kwame Asante, our Health Program Director, states: "This grant represents a turning point in our ability to address health disparities in Ghana. We're committed to ensuring that quality healthcare is accessible to all, regardless of economic status."`,
      category: 'Recent News',
      icon: Heart,
      color: 'bg-blue-500',
      funding: 'GHS 2.5 Million',
      duration: '2025-2027'
    },
    {
      type: 'Blog',
      title: 'The Intersection of Housing and Health: Why It Matters',
      date: 'November 20, 2024',
      excerpt: 'Exploring the critical connection between stable housing and good health outcomes, and how our integrated approach makes a difference.',
      fullContent: `Housing is not just shelter—it's a fundamental determinant of health. At Prevail Foundation, we've witnessed firsthand how stable, quality housing dramatically improves health outcomes for individuals and families.

The Connection Between Housing and Health:

1. Physical Health Impact
Poor housing conditions contribute to respiratory diseases, injuries, and exposure to environmental toxins. Our housing renovation projects have resulted in a 60% reduction in respiratory illnesses among beneficiaries.

2. Mental Health Benefits
Stable housing reduces stress, anxiety, and depression. Families in our affordable housing programs report 75% improvement in overall mental well-being and family stability.

3. Child Development
Children in stable housing perform better academically and have fewer behavioral issues. Our family housing initiatives have led to 45% improvement in school attendance rates.

4. Healthcare Access
Stable housing provides a reliable address for healthcare services, prescription deliveries, and follow-up care. This has improved medication compliance by 80% among our beneficiaries.

Our Integrated Approach:

• Housing First Model: We prioritize housing stability as the foundation for addressing other health and social issues.

• On-site Health Services: Many of our housing developments include health clinics and wellness programs.

• Community Health Workers: Residents trained as health advocates within their own communities.

• Preventive Care Programs: Regular health screenings and education within housing communities.

Success Stories:
The Tema Housing Project has become a model for health-integrated affordable housing. Since 2022, residents have experienced:
• 50% reduction in emergency room visits
• 40% decrease in chronic disease complications
• 85% of residents now have primary care providers
• Significant improvements in children's immunization rates

Evidence-Based Results:
Our research partnership with University of Ghana's School of Public Health has documented substantial health improvements in our housing communities compared to control groups. These findings are informing national housing and health policy discussions.

Moving Forward:
We're advocating for policies that recognize housing as healthcare infrastructure. Our goal is to demonstrate that investing in quality, affordable housing is one of the most cost-effective public health interventions available.

By addressing housing and health together, we're not just building homes—we're building healthier communities and stronger futures for Ghanaian families.`,
      category: 'Blog Post',
      icon: Award,
      color: 'bg-purple-500',
      readTime: '8 min read',
      author: 'Dr. Nana Affum, Founder'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Community Health Fair',
      date: 'January 20, 2025',
      location: 'Accra Community Center',
      description: 'Free health screenings and wellness education for the community.'
    },
    {
      title: 'Housing Initiative Workshop',
      date: 'February 10, 2025',
      location: 'Prevail Foundation Office',
      description: 'Learn about our housing programs and how to apply for assistance.'
    },
    {
      title: 'Youth Leadership Summit',
      date: 'March 5, 2025',
      location: 'University of Ghana',
      description: 'Empowering young leaders to create change in their communities.'
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16 min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-primary-800 bg-opacity-75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">News, Events & Updates</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Stay informed about our latest programs, events, and impact in the community.
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Latest Updates</h2>
            <p className="text-gray-600 text-lg">Recent news and announcements from Prevail Foundation</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`${item.color} w-10 h-10 rounded-full flex items-center justify-center`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-cyan-600">{item.category}</span>
                  </div>
                  <CardTitle className="text-xl text-primary-800 group-hover:text-cyan-600 transition-colors">
                    {item.title}
                  </CardTitle>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                  {/* Additional metadata */}
                  {item.location && (
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      {item.location}
                    </div>
                  )}
                  {item.time && (
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Clock className="h-4 w-4 mr-2" />
                      {item.time}
                    </div>
                  )}
                  {item.funding && (
                    <div className="flex items-center text-green-600 text-sm font-semibold mt-1">
                      <Target className="h-4 w-4 mr-2" />
                      {item.funding}
                    </div>
                  )}
                  {item.readTime && (
                    <div className="text-gray-500 text-sm mt-1">
                      {item.readTime} • {item.author}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {expandedItem === index ? item.fullContent : item.excerpt}
                  </p>
                  <Button 
                    variant="outline" 
                    className="group-hover:bg-cyan-500 group-hover:text-white transition-colors"
                    onClick={() => toggleExpanded(index)}
                  >
                    {expandedItem === index ? 'Show Less' : 'Read More'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 text-lg">Join us at these upcoming community events</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary-800 mb-2">{event.title}</h3>
                  <div className="flex items-center text-cyan-600 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{event.location}</p>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates about our programs and events.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <Button className="bg-cyan-500 hover:bg-cyan-600 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
