
import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { FileUp, Shield, Zap, Users, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                About Us
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h1>
              <p className="text-muted-foreground md:text-xl">
                We're making file conversion simple, accessible, and efficient for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Convertify was born out of frustration with existing file conversion tools that were either too complex, filled with ads, or required installing software.
              </p>
              <p className="text-muted-foreground">
                We believe that converting files should be simple, secure, and fast. Our team of developers and designers worked together to create a suite of conversion tools that anyone can use, regardless of technical expertise.
              </p>
              <p className="text-muted-foreground">
                Since our launch, we've helped thousands of users convert millions of files, saving them time and simplifying their workflow.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                <div className="bg-white p-6 rounded-xl shadow-lg max-w-md">
                  <div className="flex items-center justify-center bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-center font-medium text-lg">
                    "We're passionate about creating tools that make people's digital lives easier."
                  </p>
                  <p className="text-center text-muted-foreground mt-2">
                    - The Convertify Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">What We Value</h2>
            <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
              These core principles guide everything we do at Convertify
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Security & Privacy</h3>
              <p className="text-muted-foreground">
                Your files are encrypted during processing and deleted afterward. We respect your privacy and never share your data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Speed & Efficiency</h3>
              <p className="text-muted-foreground">
                Our conversion algorithms are optimized for speed without sacrificing quality, saving you time and frustration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe everyone should have access to quality file conversion tools, which is why we offer a generous free tier.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <FileUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                Our conversion tools maintain the highest possible quality, preserving the details that matter in your files.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We're constantly improving our technology and adding new features based on user feedback and emerging needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">User Experience</h3>
              <p className="text-muted-foreground">
                We obsess over creating intuitive, delightful interfaces that make file conversion a pleasure, not a chore.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Meet the Team</h2>
            <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
              The passionate individuals behind Convertify
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-muted rounded-full mb-4"></div>
                <h3 className="font-medium">Team Member {index + 1}</h3>
                <p className="text-sm text-muted-foreground">Co-Founder & {index === 0 ? 'CEO' : index === 1 ? 'CTO' : index === 2 ? 'Designer' : 'Developer'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
