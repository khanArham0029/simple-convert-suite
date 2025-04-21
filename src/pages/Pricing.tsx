
import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic file conversion for occasional users",
      features: [
        "5 file conversions per day",
        "Maximum file size: 10MB",
        "Standard processing speed",
        "Basic format support",
        "No watermarks on documents"
      ],
      cta: "Get Started",
      ctaLink: "/signup",
      highlighted: false
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      description: "Advanced features for regular users",
      features: [
        "Unlimited file conversions",
        "Maximum file size: 100MB",
        "Priority processing",
        "All format support",
        "Batch conversion",
        "Cloud storage integration",
        "Premium customer support"
      ],
      cta: "Go Premium",
      ctaLink: "/signup",
      highlighted: true
    },
    {
      name: "Business",
      price: "$24.99",
      period: "per month",
      description: "Complete solution for teams and companies",
      features: [
        "Everything in Premium",
        "Maximum file size: 1GB",
        "5 team members included",
        "API access",
        "Advanced security features",
        "Dedicated support",
        "Custom branding options"
      ],
      cta: "Contact Sales",
      ctaLink: "/contact",
      highlighted: false
    }
  ];

  return (
    <MainLayout>
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Pricing Plans
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose your plan</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Simple, transparent pricing for all your conversion needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col p-6 bg-white shadow-lg rounded-lg border ${
                  plan.highlighted ? "border-primary" : "border-muted"
                } ${plan.highlighted ? "relative" : ""}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="ml-1 text-sm text-muted-foreground">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3 my-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="text-primary mr-2 h-4 w-4" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={plan.ctaLink}>
                  <Button 
                    className={`w-full ${plan.highlighted ? "" : "bg-muted-foreground hover:bg-muted-foreground/90"}`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="max-w-[600px] text-muted-foreground">
                Find answers to common questions about our services
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 py-6">
              <div className="space-y-1 text-left">
                <h3 className="text-lg font-medium">What happens after my free conversions are used?</h3>
                <p className="text-sm text-muted-foreground">
                  You'll need to wait until the next day for your free conversions to reset, or upgrade to a premium plan for unlimited conversions.
                </p>
              </div>
              <div className="space-y-1 text-left">
                <h3 className="text-lg font-medium">Can I cancel my subscription anytime?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, you can cancel your subscription at any time. You'll still have access to premium features until the end of your billing period.
                </p>
              </div>
              <div className="space-y-1 text-left">
                <h3 className="text-lg font-medium">Is my data secure?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we take data security seriously. Your files are encrypted during upload and processing, and are deleted from our servers after 24 hours.
                </p>
              </div>
              <div className="space-y-1 text-left">
                <h3 className="text-lg font-medium">Can I convert files in batch?</h3>
                <p className="text-sm text-muted-foreground">
                  Batch conversion is available on our Premium and Business plans. You can convert multiple files simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Pricing;
