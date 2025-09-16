import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSpreadsheet, Mail, Database, FolderOpen } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      title: "Excel + Browser Workflows",
      description: "Extract data from Excel, upload to a web app, download reports back to Excel automatically.",
      icon: FileSpreadsheet,
      example: "Monthly sales report processing in 5 minutes instead of 2 hours",
    },
    {
      title: "Email Automation",
      description: "Fill out PDFs and send them via Outlook automatically with dynamic content.",
      icon: Mail,
      example: "Automated invoice generation and distribution to 100+ clients",
    },
    {
      title: "Desktop Data Entry",
      description: "Automate form filling in legacy apps and modern software with seamless integration.",
      icon: Database,
      example: "CRM data synchronization between 3 different desktop applications",
    },
    {
      title: "File Management",
      description: "Copy, rename, or organize files automatically on schedule with smart rules.",
      icon: FolderOpen,
      example: "Daily backup and organization of 1000+ project files",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              What Can You Automate with{" "}
              <span className="text-primary">BuddhiSys?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world automation scenarios that save hours of manual work every day.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-custom-md transition-all duration-300 hover:-translate-y-2 border-border hover:border-primary/20"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                      {useCase.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="bg-secondary/50 p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-sm text-primary font-medium">
                      Example: {useCase.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-card p-8 rounded-2xl shadow-custom-md border border-border max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Automate Your Workflows?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of professionals who have already saved hundreds of hours with BuddhiSys.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Start Your Free Trial
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;