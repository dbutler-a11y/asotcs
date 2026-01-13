"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Heart,
  Users,
  Sparkles,
  ArrowRight,
  Gift,
  Star,
  CheckCircle2,
  Calendar,
  MapPin,
} from "lucide-react";

const impactPoints = [
  {
    icon: Heart,
    title: "Healing Spaces",
    description: "Creating safe environments where young girls can process, heal, and grow",
  },
  {
    icon: Users,
    title: "Group Support",
    description: "Building community through therapist-led group sessions for emotional wellness",
  },
  {
    icon: Sparkles,
    title: "Confidence Building",
    description: "Empowering the next generation with tools for self-worth and resilience",
  },
];

const foundingBenefits = [
  "Exclusive founding member pricing locked forever",
  "Invitation to the Founding Members Lunch",
  "Direct impact on young girls' mental health",
  "First access to all community features",
  "Special founding member badge and recognition",
  "Be part of something meaningful from day one",
];

export default function LaunchPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0eb] via-[#faf8f6] to-white" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c4a98a]/10 rounded-full blur-3xl" />

        <div className="container relative mx-auto max-w-5xl px-4">
          <div className="text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-0 px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              Founding Members Launch Event
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              A Seat on the Counselor&apos;s Sofa
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              Where healing begins. Where community grows.
              <br className="hidden md:block" />
              Where every seat makes a difference.
            </p>

            <p className="text-lg text-primary font-medium mb-8">
              Founding Members Lunch — Limited Seats Available
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="#reserve">
                  Reserve Your Seat <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#impact">Learn About Our Mission</a>
              </Button>
            </div>

            {/* Trust indicator */}
            <p className="text-sm text-muted-foreground">
              <Heart className="inline h-4 w-4 text-primary mr-1" />
              Proceeds support group therapy programs for young girls
            </p>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Than a Community — A Movement
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                A Seat on the Counselor&apos;s Sofa isn&apos;t just about personal transformation. It&apos;s about
                creating ripples of healing that extend far beyond ourselves.
              </p>
              <p>
                When you become a founding member, you&apos;re not just investing in your own
                wellness journey — you&apos;re helping fund <strong>group therapy programs for young girls</strong> who
                need a safe space to heal, grow, and discover their own strength.
              </p>
              <p className="text-primary font-medium">
                Every seat you take helps create a seat for someone who needs it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-[#faf8f6]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">Our Impact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Your Membership Creates
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A portion of all founding member proceeds goes directly toward building
              therapeutic support programs for young girls in our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactPoints.map((point, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <point.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block border-primary/20 bg-white">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg md:text-xl italic text-muted-foreground">
                  &quot;A safe space begins with a seat. Your seat creates theirs.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founding Members Lunch */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary">Exclusive Event</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Founding Members Lunch
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join us for an intimate gathering to celebrate the launch of A Seat on the Counselor&apos;s Sofa.
                Connect with fellow founding members, meet Tonia, and be the first to experience
                the community that&apos;s changing lives.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Date & Time</p>
                    <p className="text-sm text-muted-foreground">To be announced to founding members</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Exclusive venue for founding members only</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">What to Expect</p>
                    <p className="text-sm text-muted-foreground">Connection, community, and a chance to give back</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                <Star className="inline h-4 w-4 text-primary mr-1" />
                Limited to founding members only. Reserve your spot today.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[#c4a98a]/20 rounded-3xl transform rotate-3" />
              <Card className="relative border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Founding Member Rate</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold">$37</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-primary font-medium mt-2">
                      Locked in forever — never increases
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {foundingBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" size="lg" asChild>
                    <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
                      Become a Founding Member
                    </a>
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Only 100 founding spots available
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Values Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <Sparkles className="h-12 w-12 mx-auto mb-6 opacity-80" />
          <blockquote className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
            &quot;Building community while giving back. Because when we heal together,
            we create space for others to heal too.&quot;
          </blockquote>
          <p className="text-primary-foreground/80">— Tonia, Founder of ASOTCS</p>
        </div>
      </section>

      {/* Reserve Section */}
      <section id="reserve" className="py-20 bg-[#faf8f6]">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Reserve Your Seat
            </h2>
            <p className="text-muted-foreground">
              Join the waitlist to be notified when founding member spots open.
              Be among the first to claim your seat and make an impact.
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg">
                    Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By joining, you&apos;ll receive updates about the launch and founding member opportunities.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">You&apos;re on the list!</h3>
                  <p className="text-muted-foreground">
                    We&apos;ll notify you as soon as founding member spots open.
                    Thank you for being part of this journey.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Ready to join now? Founding member spots are currently available.
            </p>
            <Button variant="outline" asChild>
              <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
                Skip the Waitlist — Join as Founding Member
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your Seat Is Waiting
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a community that&apos;s not just about personal growth — it&apos;s about
            creating a ripple effect of healing. Every founding member helps us
            bring therapy and support to young girls who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
                Claim Your Founding Seat <Heart className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/free-guide">
                Get the Free Guide First
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
