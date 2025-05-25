
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { PieChart, BarChart, FileText, Download } from 'lucide-react';

const Financials = () => {
  const expenseBreakdown = [
    { category: 'Housing Programs', percentage: 45, amount: '$45,000', color: 'bg-blue-500' },
    { category: 'Health Services', percentage: 30, amount: '$30,000', color: 'bg-cyan-500' },
    { category: 'People-Empowerment', percentage: 15, amount: '$15,000', color: 'bg-primary-600' },
    { category: 'Administrative Costs', percentage: 10, amount: '$10,000', color: 'bg-gray-500' },
  ];

  const yearlyReports = [
    { year: '2023', title: 'Annual Financial Report 2023', status: 'Available' },
    { year: '2022', title: 'Annual Financial Report 2022', status: 'Available' },
    { year: '2021', title: 'Annual Financial Report 2021', status: 'Available' },
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
          <FileText className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Financial Transparency</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            We believe in complete transparency about how we use donations and manage our resources to create maximum impact.
          </p>
        </div>
      </section>

      {/* Financial Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">2023 Financial Overview</h2>
            <p className="text-gray-600 text-lg">How we allocated resources to maximize community impact</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Expense Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5 text-cyan-500" />
                  <span>Expense Allocation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {expenseBreakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-primary-800">{item.category}</span>
                      <span className="text-gray-600">{item.amount} ({item.percentage}%)</span>
                    </div>
                    <Progress value={item.percentage} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart className="h-5 w-5 text-cyan-500" />
                  <span>Key Financial Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">90%</div>
                    <div className="text-sm text-gray-600">Program Expenses</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">10%</div>
                    <div className="text-sm text-gray-600">Administrative</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">$100K</div>
                    <div className="text-sm text-gray-600">Total Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-cyan-50 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-600">500+</div>
                    <div className="text-sm text-gray-600">People Served</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Annual Reports</h2>
            <p className="text-gray-600 text-lg">Download our detailed financial reports and impact summaries</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {yearlyReports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-primary-800 mb-2">{report.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">Status: {report.status}</p>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Our Commitment to Accountability</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-4">Regular Reporting</h3>
                <p className="text-gray-600">We publish quarterly financial updates and annual impact reports to keep stakeholders informed.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PieChart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-4">External Audits</h3>
                <p className="text-gray-600">Independent auditors review our financial practices annually to ensure compliance and best practices.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-4">Impact Measurement</h3>
                <p className="text-gray-600">We track and report on the measurable outcomes and impact of every program we run.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Financials;
