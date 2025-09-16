import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const Comparison = () => {
  const features = [
    { name: "Browser Automation", buddhiCloud: true, buddhiSys: true },
    { name: "Desktop App Automation", buddhiCloud: false, buddhiSys: true },
    { name: "Credential Wallet", buddhiCloud: false, buddhiSys: true },
    { name: "Workflow Orchestration", buddhiCloud: "Limited", buddhiSys: true },
    { name: "Task Scheduling", buddhiCloud: "Limited", buddhiSys: true },
    { name: "Native Windows Integration", buddhiCloud: false, buddhiSys: true },
    { name: "Multi-App Workflows", buddhiCloud: false, buddhiSys: true },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Go Beyond{" "}
              <span className="text-primary">Browser Automation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              BuddhiCloud was designed for browser-based automation. BuddhiSys takes it
              further — with full desktop automation, secure credential storage, and workflow
              orchestration that works across all your applications.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-card rounded-2xl shadow-custom-md overflow-hidden border border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-subtle">
                    <th className="text-left py-6 px-8 text-lg font-semibold text-foreground">
                      Feature
                    </th>
                    <th className="text-center py-6 px-8 text-lg font-semibold text-muted-foreground">
                      BuddhiCloud
                    </th>
                    <th className="text-center py-6 px-8 text-lg font-semibold text-primary">
                      BuddhiSys
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr 
                      key={index} 
                      className="border-t border-border hover:bg-card-hover transition-colors"
                    >
                      <td className="py-4 px-8 font-medium text-foreground">
                        {feature.name}
                      </td>
                      <td className="py-4 px-8 text-center">
                        {feature.buddhiCloud === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : feature.buddhiCloud === false ? (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        ) : (
                          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                            {feature.buddhiCloud}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-8 text-center">
                        {feature.buddhiSys === true ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6"
            >
              Switch to Full Desktop Automation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;