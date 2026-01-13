import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Users,
  Sparkles,
  Target,
  Eye,
  Zap,
  PlayCircle,
} from "lucide-react";

const painPoints = [
  "You start every week with good intentions—and end it feeling like you failed",
  "You've read the books, saved the podcasts, and still feel stuck",
  "Your emotions run the show and you're exhausted from the rollercoaster",
  "You know what you should do but can't seem to actually do it",
  "You feel disconnected—from yourself, your goals, your people",
  "You're functioning, but barely. And no one knows how close to the edge you are",
];

const sofaPillars = [
  {
    letter: "S",
    title: "Self-Reflection",
    description: "Understand who you are, what you value, and where you're starting from",
    icon: Heart,
  },
  {
    letter: "O",
    title: "Observation",
    description: "Recognize your patterns, triggers, and blind spots without judgment",
    icon: Eye,
  },
  {
    letter: "F",
    title: "Flow",
    description: "Align your energy, manage your nervous system, and find your rhythm",
    icon: Zap,
  },
  {
    letter: "A",
    title: "Action",
    description: "Build sustainable habits and take the next right step forward",
    icon: Target,
  },
];

const testimonials = [
  {
    quote:
      "For the first time, I feel like I have a system that actually works for MY life. Not some cookie-cutter approach.",
    name: "Sarah M.",
    title: "Sofa Circle Member",
  },
  {
    quote:
      "The community alone is worth it. Being surrounded by women who get it—without judgment—changed everything.",
    name: "Jessica T.",
    title: "Founding Member",
  },
  {
    quote:
      "I've tried therapy, coaching, apps... this is the first thing that gave me both the tools AND the support.",
    name: "Michelle R.",
    title: "SOFA Intensive Graduate",
  },
];

const tierComparison = {
  free: [
    "Community lounge access",
    "Weekly reflection prompts",
    "Monthly Sunday Resets",
    "SOFA Method overview",
    "Event announcements",
  ],
  vip: [
    "Everything in Free tier",
    "Full SOFA Method modules",
    "Weekly challenges + accountability",
    "All themed Circles",
    "Resource library (journals, trackers)",
    "Livestream access + replays",
    "Brand partner perks",
  ],
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image - Full Width on Mobile, Right Side on Desktop */}
        <div className="absolute inset-0 lg:left-1/2 lg:right-0">
          <Image
            src="/images/hero.png"
            alt="Woman sitting confidently on a counselor's sofa in a warm, inviting space"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 lg:from-background lg:via-background/80 lg:to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative mx-auto max-w-6xl px-4 py-20 lg:py-32">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-6 animate-fade-in">
              Therapist-Informed Wellness Community
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-up">
              The wellness community where you finally get your life together
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-100">
              Without a diagnosis or a lecture. Just structure, support, and sanity—delivered to the counselor's sofa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
              <Button size="lg" asChild>
                <Link href="/community">
                  Join Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/80 backdrop-blur-sm" asChild>
                <Link href="/sofa-method">
                  Learn the SOFA Method
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in animation-delay-300">
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>500+ members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Therapist-informed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>SOFA Method™</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Let's be honest about where you are right now...
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              If any of these sound familiar, you're in the right place.
            </p>
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-lg font-medium text-primary">
              You're not broken. You're just building on a shaky foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - SOFA Method */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              The Framework
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The SOFA Method
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A therapist-informed framework for building a life that actually works. Four pillars. One foundation. Real results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sofaPillars.map((pillar) => (
              <Card key={pillar.letter} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{pillar.letter}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/sofa-method">
                Explore the Full Method <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Preview */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-primary-foreground/20 text-primary-foreground">
                The Community
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                More than content. A place to belong.
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                ASOTCS is where women come to get real support—without the judgment, the jargon, or the toxic positivity. It's a community that meets you where you are and helps you get where you want to go.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>Supportive community of like-minded women</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  <span>Weekly prompts, challenges, and live events</span>
                </li>
                <li className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5" />
                  <span>Therapist-informed content and resources</span>
                </li>
              </ul>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/community">
                  See Membership Options <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-center">
                <p className="text-6xl font-bold mb-2">500+</p>
                <p className="text-primary-foreground/80">Women in the community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Comparison */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Seat
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start free or go all-in with VIP. Either way, you're welcome here.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <Card className="relative">
              <CardContent className="p-8">
                <Badge variant="secondary" className="mb-4">Free</Badge>
                <h3 className="text-2xl font-bold mb-2">Take a Seat</h3>
                <p className="text-muted-foreground mb-6">
                  Get a taste of the community and start your journey.
                </p>
                <p className="text-3xl font-bold mb-6">$0<span className="text-base font-normal text-muted-foreground">/month</span></p>
                <ul className="space-y-3 mb-8">
                  {tierComparison.free.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/community">Join Free</Link>
                </Button>
              </CardContent>
            </Card>

            {/* VIP Tier */}
            <Card className="relative border-primary shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary">Most Popular</Badge>
              </div>
              <CardContent className="p-8">
                <Badge variant="outline" className="mb-4 border-primary text-primary">VIP</Badge>
                <h3 className="text-2xl font-bold mb-2">Sofa Circle</h3>
                <p className="text-muted-foreground mb-6">
                  Full access to everything ASOTCS has to offer.
                </p>
                <p className="text-3xl font-bold mb-6">$47<span className="text-base font-normal text-muted-foreground">/month</span></p>
                <ul className="space-y-3 mb-8">
                  {tierComparison.vip.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/community/vip">Join VIP</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Members Are Saying
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Tonia Mini - Now with Hero Image */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero.png"
                alt="Tonia - Founder of ASOTCS"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Tonia</h2>
              <p className="text-muted-foreground mb-6">
                Therapist, founder of ASOTCS, and creator of the SOFA Method. After years of watching brilliant women struggle with the same patterns, she built a framework for sustainable transformation—without the clinical overhead.
              </p>
              <p className="text-muted-foreground mb-6">
                "I created ASOTCS because I saw too many capable women drowning in information but starving for implementation. The SOFA Method is what I wish I could give every client—a foundation that actually holds."
              </p>
              <Button variant="outline" asChild>
                <Link href="/about">
                  Read Her Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take a Seat?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of women who are done surviving and ready to thrive. Your seat is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/community">
                Join Free <ArrowRight className="ml-2 h-4 w-4" />
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
