import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "BuddhiSys cut our manual work by 70%. Now our team focuses on strategy instead of repetitive tasks.",
      author: "Sarah Chen",
      role: "Operations Director",
      company: "TechFlow Solutions",
      rating: 5,
    },
    {
      quote: "Unlike browser-only tools, BuddhiSys helped us automate our entire desktop workflows seamlessly.",
      author: "Michael Rodriguez",
      role: "IT Manager",
      company: "DataCore Industries",
      rating: 5,
    },
    {
      quote: "The credential wallet and security features give us peace of mind while automating sensitive processes.",
      author: "Emily Watson",
      role: "Compliance Officer",
      company: "FinanceFirst Bank",
      rating: 5,
    },
    {
      quote: "Setting up complex workflows is incredibly intuitive. Even non-technical team members can create automations.",
      author: "David Kim",
      role: "Business Analyst",
      company: "GrowthMetrics Co",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Trusted by Teams Who Value{" "}
              <span className="text-primary">Efficiency</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our customers are saying about transforming their workflows with BuddhiSys.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-custom-md transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/20"
              >
                <CardContent className="p-8">
                  {/* Rating Stars */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Tasks Automated</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;