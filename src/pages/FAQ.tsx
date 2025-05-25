
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is Prevail Foundation?',
      answer: 'Prevail Foundation is a charity non-profit organization dedicated to empowering individuals and communities to prevail over adversity. We focus on three key areas: housing, health, and people-empowerment.'
    },
    {
      question: 'How can I donate to Prevail Foundation?',
      answer: 'You can donate securely online through our website, mail a check to our office, or contact us about other donation methods. We accept one-time and recurring donations.'
    },
    {
      question: 'Are donations tax-deductible?',
      answer: 'Yes, Prevail Foundation is a registered charity organization. We provide tax-deductible receipts for all donations where applicable according to local tax laws.'
    },
    {
      question: 'How can I volunteer with Prevail Foundation?',
      answer: 'We welcome volunteers! You can get involved through community outreach, event support, digital marketing, or skills-based volunteering. Contact us to learn about current opportunities.'
    },
    {
      question: 'Where does Prevail Foundation operate?',
      answer: 'We are based in Greater Accra, Ghana, West Africa, and primarily serve communities throughout Ghana. We are exploring opportunities to expand our reach to other regions.'
    },
    {
      question: 'How do I apply for assistance from your programs?',
      answer: 'Contact us directly via email or phone to discuss your needs. Our team will assess your situation and guide you through the appropriate application process for our programs.'
    },
    {
      question: 'Can businesses partner with Prevail Foundation?',
      answer: 'Absolutely! We welcome corporate partnerships, sponsorships, and collaboration opportunities. Contact us to discuss how your business can support our mission.'
    },
    {
      question: 'How do you ensure transparency in your operations?',
      answer: 'We maintain financial transparency through regular reporting, publish our impact metrics, and provide updates to donors and stakeholders about our programs and achievements.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16 min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-primary-800 bg-opacity-75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Frequently Asked Questions</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Find answers to common questions about Prevail Foundation and our programs.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary-800 text-center">Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-primary-800 hover:text-cyan-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Still Have Questions?</h2>
          <p className="text-gray-600 text-lg mb-8">
            If you can't find the answer you're looking for, please don't hesitate to contact us directly.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> info@prevailfoundation.com
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Location:</strong> Greater Accra, Ghana, West Africa
            </p>
            <p className="text-sm text-gray-500">
              We typically respond to inquiries within 24-48 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
