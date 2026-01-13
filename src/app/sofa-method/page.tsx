import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Eye, Zap, Target, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "The SOFA Method | ASOTCS",
  description: "Discover the SOFA Method - a therapist-informed framework for building a life that actually works. Self-Reflection, Observation, Flow, Action.",
};

const pillars = [
  {
    letter: "S",
    title: "Self-Reflection",
    tagline: "Know Where You're Starting",
    icon: Heart,
    color: "bg-rose-100 text-rose-700",
    description: "Before you can go anywhere, you need to know where you are. Self-reflection isn't navel-gazing—it's the foundation everything else is built on.",
    includes: [
      "Values discovery and alignment",
      "Identity audit: who you are vs. who you're being",
      "Honest assessment of your current state",
      "Journaling frameworks that actually work",
    ],
    outcome: "Radical clarity on your starting point and what actually matters to you.",
  },
  {
    letter: "O",
    title: "Observation",
    tagline: "See Your Patterns Clearly",
    icon: Eye,
    color: "bg-amber-100 text-amber-700",
    description: "Most of us are running on autopilot, repeating the same patterns without realizing it. Observation is about seeing clearly—without judgment—so you can finally choose differently.",
    includes: [
      "Pattern recognition techniques",
      "Trigger mapping and response awareness",
      "Identifying blind spots and self-sabotage",
      "Building the observer mindset",
    ],
    outcome: "Awareness that creates choice instead of reaction.",
  },
  {
    letter: "F",
    title: "Flow",
    tagline: "Align Your Energy",
    icon: Zap,
    color: "bg-emerald-100 text-emerald-700",
    description: "Sustainable change requires working with your energy, not against it. Flow is about understanding your nervous system and creating rhythms that support—not deplete—you.",
    includes: [
      "Energy audit: what fills you, what drains you",
      "Nervous system basics for non-therapists",
      "Creating your personal flow rituals",
      "Managing emotional regulation",
    ],
    outcome: "A sustainable rhythm that supports your goals instead of sabotaging them.",
  },
  {
    letter: "A",
    title: "Action",
    tagline: "Move Forward Intentionally",
    icon: Target,
    color: "bg-sky-100 text-sky-700",
    description: "Action without foundation leads to burnout. Action WITH foundation leads to momentum. This is where clarity, awareness, and energy come together in movement.",
    includes: [
      "Goal architecture (systems, not just goals)",
      "Micro-habits that compound over time",
      "The momentum formula",
      "Building action that doesn't require motivation",
    ],
    outcome: "Consistent forward movement that doesn't depend on feeling motivated.",
  },
];

const faqs = [
  {
    question: "Is this therapy?",
    answer: "No. The SOFA Method is therapist-informed but not clinical therapy. It's a personal development framework based on therapeutic principles. If you're in crisis or need clinical support, please work with a licensed provider.",
  },
  {
    question: "Do I need to do the pillars in order?",
    answer: "The pillars build on each other, so we recommend starting with Self-Reflection. However, the method is designed to be cyclical—you'll return to each pillar as you grow and your life changes.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most members report feeling more clarity and calm within the first few weeks. Sustainable transformation typically unfolds over 6-12 weeks of consistent engagement.",
  },
  {
    question: "Can I use this alongside therapy?",
    answer: "Absolutely. Many members use the SOFA Method as a complement to their therapeutic work. It provides practical daily structure that enhances clinical insights.",
  },
];

export default function SofaMethodPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">The Framework</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The SOFA Method
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A therapist-informed framework for building a life that actually works. Four pillars. One foundation. Real results.
            </p>
            <div className="flex justify-center gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.letter}
                  className={`w-14 h-14 rounded-full ${pillar.color} flex items-center justify-center font-bold text-xl`}
                >
                  {pillar.letter}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Most Methods Fail</h2>
            <p className="text-muted-foreground">And why this one doesn't</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-muted/50 border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-destructive mb-4">What Doesn't Work</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✕</span>
                    One-size-fits-all approaches
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✕</span>
                    Information without implementation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✕</span>
                    Motivation-dependent systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✕</span>
                    Action without self-awareness
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✕</span>
                    Isolation and willpower alone
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-4">The SOFA Difference</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    Adaptable framework, not rigid rules
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    Built-in accountability and support
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    Systems that work without motivation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    Foundation-first approach
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    Community-powered transformation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pillars Deep Dive */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Four Pillars</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each pillar builds on the last, creating a complete system for sustainable transformation.
            </p>
          </div>
          <div className="space-y-16">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.letter}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-full ${pillar.color} flex items-center justify-center font-bold text-2xl mb-4`}>
                    {pillar.letter}
                  </div>
                  <Badge variant="outline" className="mb-2">{pillar.tagline}</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-6">{pillar.description}</p>
                  <div className="mb-6">
                    <p className="font-semibold mb-3">What's included:</p>
                    <ul className="space-y-2">
                      {pillar.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm">
                      <span className="font-semibold">Outcome:</span>{" "}
                      <span className="text-muted-foreground">{pillar.outcome}</span>
                    </p>
                  </div>
                </div>
                <div className={`${pillar.color} rounded-2xl p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <pillar.icon className="w-32 h-32 mx-auto opacity-50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Experience */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Experience the SOFA Method</h2>
            <p className="text-muted-foreground">Choose the path that fits your journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">Free</Badge>
                <h3 className="text-xl font-bold mb-2">Take a Seat</h3>
                <p className="text-muted-foreground mb-4">
                  Get introduced to the SOFA Method through our free community tier. Perfect for testing the waters.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    SOFA Method overview
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    Weekly reflection prompts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    Community access
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/community">Join Free</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardContent className="p-6">
                <Badge className="mb-4">Popular</Badge>
                <h3 className="text-xl font-bold mb-2">Sofa Circle</h3>
                <p className="text-muted-foreground mb-4">
                  Full access to all SOFA Method modules, resources, and community features.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Complete SOFA modules
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Weekly challenges
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Resource library
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Live events
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/community/vip">Join VIP — $47/mo</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-4">Intensive</Badge>
                <h3 className="text-xl font-bold mb-2">SOFA Intensive</h3>
                <p className="text-muted-foreground mb-4">
                  6-week live cohort experience with direct access to Tonia and deep implementation support.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    Weekly live coaching
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    Small cohort format
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    1:1 check-in call
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    Lifetime replay access
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/programs/sofa-intensive">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Foundation?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Start with the free community or dive into the full experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/community">
                Start Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/community/vip">
                Go VIP — $47/month
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
