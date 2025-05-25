
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Heart, Shield, Users, Home, Stethoscope, GraduationCap, CheckCircle } from 'lucide-react';

const Donate = () => {
  const donationAmounts = [25, 50, 100, 250, 500, 1000];
  
  const impactAreas = [
    {
      icon: Home,
      title: 'Housing Initiative',
      description: 'Help provide safe, affordable housing for families in need.',
      example: '$100 can help with housing repairs for one family',
      color: 'bg-blue-500'
    },
    {
      icon: Stethoscope,
      title: 'Health Services',
      description: 'Support medical clinics and health education programs.',
      example: '$75 can provide health screenings for 5 community members',
      color: 'bg-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'People-Empowerment',
      description: 'Fund education and skills training programs.',
      example: '$150 can sponsor vocational training for one person',
      color: 'bg-primary-600'
    }
  ];

  const benefits = [
    'Direct impact on community members in need',
    'Transparent use of funds with regular updates',
    'Tax-deductible receipt (where applicable)',
    'Join our community of changemakers',
    'Access to exclusive donor updates and events'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Donate Today</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Every contribution counts towards creating a better future for those in need. Your donation directly supports our programs and helps us empower more communities.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary-800">Make a Donation</CardTitle>
              <p className="text-gray-600">Choose your donation amount and make an immediate impact</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Quick Amount Selection */}
              <div>
                <label className="block text-lg font-semibold text-primary-800 mb-4">Select Amount (USD)</label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {donationAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="h-12 hover:bg-cyan-500 hover:text-white hover:border-cyan-500"
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Or enter custom amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="pl-8 h-12 text-lg"
                  />
                </div>
              </div>

              {/* Donation Type */}
              <div>
                <label className="block text-lg font-semibold text-primary-800 mb-4">Donation Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-16 flex-col hover:bg-primary-50">
                    <span className="font-semibold">One-time Donation</span>
                    <span className="text-sm text-gray-500">Make a single contribution</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex-col hover:bg-primary-50">
                    <span className="font-semibold">Monthly Donation</span>
                    <span className="text-sm text-gray-500">Ongoing monthly support</span>
                  </Button>
                </div>
              </div>

              {/* Program Selection */}
              <div>
                <label className="block text-lg font-semibold text-primary-800 mb-4">Support Area (Optional)</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {impactAreas.map((area, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-20 flex-col hover:bg-gray-50 text-left p-4"
                    >
                      <area.icon className="h-6 w-6 mb-2" />
                      <span className="font-semibold text-sm">{area.title}</span>
                    </Button>
                  ))}
                  <Button variant="outline" className="h-20 flex-col hover:bg-gray-50">
                    <Users className="h-6 w-6 mb-2" />
                    <span className="font-semibold text-sm">Where Needed Most</span>
                  </Button>
                </div>
              </div>

              {/* Donor Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <Input placeholder="Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
                  <Input placeholder="+233 xxx xxx xxx" />
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm text-green-800 font-medium">Secure Donation</p>
                  <p className="text-sm text-green-700">Your payment information is encrypted and secure. We never store your payment details.</p>
                </div>
              </div>

              {/* Donate Button */}
              <Button className="w-full h-14 text-lg bg-cyan-500 hover:bg-cyan-600">
                Donate Securely Now
              </Button>

              <p className="text-center text-sm text-gray-500">
                By donating, you agree to our terms and privacy policy. You will receive a receipt via email.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Your Impact</h2>
            <p className="text-gray-600 text-lg">See how your donation makes a difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className={`${area.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <p className="text-sm font-semibold text-cyan-600">{area.example}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Why Your Donation Matters</h2>
              <p className="text-gray-700 text-lg mb-8">
                When you donate to Prevail Foundation, you're not just giving money – you're investing in sustainable change that empowers individuals and strengthens communities.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Other Ways to Give</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-primary-800">Banking or Mobile Money</h4>
                  <p className="text-gray-600 text-sm">Send donations to our office address in Greater Accra, Ghana</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-primary-800">Corporate Partnerships</h4>
                  <p className="text-gray-600 text-sm">Partner with us for larger impact initiatives</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-primary-800">In-Kind Donations</h4>
                  <p className="text-gray-600 text-sm">Donate goods, services, or expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
