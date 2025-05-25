
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
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
          <Shield className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Privacy Policy</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-cyan-500" />
                  <span>Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Make a donation or sign up for our newsletter</li>
                  <li>Contact us through our website or email</li>
                  <li>Volunteer or participate in our programs</li>
                  <li>Apply for assistance from our services</li>
                </ul>
                <p className="text-gray-700">
                  This may include your name, email address, phone number, postal address, and payment information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-cyan-500" />
                  <span>How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Process donations and provide tax receipts</li>
                  <li>Communicate with you about our programs and services</li>
                  <li>Send newsletters and updates (with your consent)</li>
                  <li>Coordinate volunteer activities and program participation</li>
                  <li>Evaluate and improve our services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-cyan-500" />
                  <span>Information Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We take the security of your personal information seriously and implement appropriate measures to protect it, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Encryption of sensitive data during transmission</li>
                  <li>Secure storage systems with access controls</li>
                  <li>Regular security assessments and updates</li>
                  <li>Staff training on data protection practices</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>With your explicit consent</li>
                  <li>With service providers who assist us in operating our organization</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>In connection with a merger or acquisition (with advance notice)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications at any time</li>
                  <li>Withdraw consent for data processing where applicable</li>
                </ul>
                <p className="text-gray-700">
                  To exercise these rights, please contact us at info@prevailfoundation.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies and Website Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Our website may use cookies and similar technologies to improve your browsing experience and help us understand how our site is used. You can control cookie settings through your browser preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the effective date.
                </p>
                <p className="text-gray-700 font-semibold">
                  Last updated: December 2024
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> info@prevailfoundation.com</p>
                  <p><strong>Address:</strong> Greater Accra, Ghana, West Africa</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
