import dashboardImage from "@/assets/dashboard-preview.jpg";

const ProductPreview = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Your Automation{" "}
              <span className="text-primary">Command Center</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The BuddhiSys dashboard gives you complete visibility and control over your
              automations. With an intuitive interface, you can launch workflows, monitor
              tasks, and manage credentials — all in one place.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={dashboardImage}
                alt="BuddhiSys Dashboard"
                className="w-full h-auto rounded-2xl shadow-custom-lg border border-border"
              />
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-accent opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-80 h-80 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-primary-foreground">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Real-time Monitoring</h3>
              <p className="text-muted-foreground">
                Track all your automation runs, success rates, and performance metrics in real-time.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-primary-foreground">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">One-Click Launch</h3>
              <p className="text-muted-foreground">
                Launch complex workflows with a single click from your centralized dashboard.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-primary-foreground">🔐</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Secure Management</h3>
              <p className="text-muted-foreground">
                Manage credentials, browser profiles, and sensitive data with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;