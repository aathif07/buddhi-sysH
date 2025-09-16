import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Monitor, 
  Globe, 
  Workflow, 
  Clock, 
  Shield, 
  FileText, 
  BarChart3 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Desktop & Native App Automation",
      description: "Interact with Windows applications like Excel, Word, Outlook, and more. Automate repetitive desktop operations without coding.",
      icon: Monitor,
    },
    {
      title: "Browser Automation",
      description: "Automate Chrome, Edge, or Firefox. Fill forms, scrape data, and perform tasks across multiple sites.",
      icon: Globe,
    },
    {
      title: "Workflow Orchestration",
      description: "Build multi-step workflows combining both desktop and browser actions. Visual workflow builder for non-technical users.",
      icon: Workflow,
    },
    {
      title: "Scheduled Tasks",
      description: "Run automations on a schedule (daily, weekly, or event-based). Set and forget.",
      icon: Clock,
    },
    {
      title: "Credential Wallet",
      description: "Securely store and reuse login credentials. Enterprise-grade encryption for sensitive data.",
      icon: Shield,
    },
    {
      title: "Templates Library",
      description: "Access pre-built automation templates for common tasks. Customize and save time.",
      icon: FileText,
    },
    {
      title: "Unified Console & Dashboard",
      description: "Control everything from a central hub. Track automation runs, history, and task status in real-time.",
      icon: BarChart3,
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Everything You Need to Automate Your{" "}
              <span className="text-primary">Digital Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive automation tools that work seamlessly across all your applications and workflows.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-custom-md transition-all duration-300 hover:-translate-y-2 border-border hover:border-primary/20"
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;