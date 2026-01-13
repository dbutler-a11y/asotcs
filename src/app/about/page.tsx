import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Users, Sparkles, Target } from "lucide-react";

export const metadata = {
  title: "About | ASOTCS",
  description: "Meet Tonia, founder of ASOTCS and creator of the SOFA Method. Learn about our mission to provide therapist-informed wellness support.",
};

const values = [
  {
    icon: Heart,
    title: "Compassion Over Judgment",
    description: "We meet you where you are, not where we think you should be.",
  },
  {
    icon: Users,
    title: "Community Over Isolation",
    description: "Healing happens in connection. You're not meant to do this alone.",
  },
  {
    icon: Sparkles,
    title: "Progress Over Perfection",
    description: "Small steps forward matter more than perfect execution.",
  },
  {
    icon: Target,
    title: "Action Over Information",
    description: "We prioritize implementation, not just consumption.",
  },
];

const timeline = [
  {
    year: "The Problem",
    title: "Watching Brilliant Women Struggle",
    description: "After years in practice, a pattern emerged: capable, intelligent women stuck in the same cycles—not because they lacked knowledge, but because they lacked a sustainable framework.",
  },
  {
    year: "The Insight",
    title: "It's Not About More Information",
    description: "The self-help industry is full of content. What's missing is structure, support, and a method that adapts to real life—not an idealized version of it.",
  },
  {
    year: "The Solution",
    title: "The SOFA Method Was Born",
    description: "A framework built on therapeutic principles but designed for everyday application. Self-Reflection, Observation, Flow, Action—four pillars that create lasting change.",
  },
  {
    year: "The Vision",
    title: "ASOTCS Becomes Home",
    description: "A Seat on the Counselor's Sofa isn't just a community—it's a movement. A place where women can get therapist-informed support without the clinical setting.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">About ASOTCS</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                A Seat on the Counselor&apos;s Sofa
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                We're building the wellness community we wish existed—therapist-informed, judgment-free, and actually practical.
              </p>
              <p className="text-muted-foreground">
                ASOTCS was created for women who are tired of surviving and ready to thrive. For those who've tried the apps, read the books, and still feel stuck. For anyone who knows they're capable of more but can't seem to make it happen consistently.
              </p>
            </div>
            <div className="bg-primary/10 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary">T</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Tonia</h2>
                <p className="text-muted-foreground mb-4">Founder & Creator of the SOFA Method</p>
                <a
                  href="https://instagram.com/thehouseoftonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  @thehouseoftonia
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tonia's Story */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Tonia</h2>
            <p className="text-muted-foreground">The story behind the SOFA Method</p>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              I spent years in therapeutic practice watching something frustrating happen over and over: brilliant, capable women would come in knowing exactly what they needed to do—but unable to actually do it consistently.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              They'd read every self-help book. Downloaded every habit tracker app. Followed every wellness influencer. And still, they'd end up back in my office feeling like failures.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              But they weren't failures. They were missing something fundamental: a framework that actually worked with their real lives—not against them.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              That's why I created the SOFA Method. Not another productivity system or wellness trend, but a therapist-informed approach to building a life that actually works. And ASOTCS? It's the community where that method comes to life.
            </p>
            <p className="text-lg font-medium text-foreground">
              Because I believe you don't need another diagnosis. You don't need another lecture. You need structure, support, and the right tools—delivered to the counselor's sofa.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Got Here</h2>
            <p className="text-muted-foreground">The journey from frustration to framework</p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <Badge variant="outline" className="mb-2">{item.year}</Badge>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Believe</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Vision</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            A world where women have access to therapist-informed support without barriers. Where getting your life together doesn't require a diagnosis, a six-month waitlist, or a small fortune. Where community and structure replace isolation and chaos.
          </p>
          <p className="text-lg font-medium">
            That's the world ASOTCS is building—one seat at a time.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take a Seat?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join a community of women who are done surviving and ready to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/community">
                Join the Community <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/sofa-method">
                Learn the SOFA Method
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
