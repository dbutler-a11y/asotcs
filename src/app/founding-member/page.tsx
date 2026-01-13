"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Lock,
  Star,
  Sparkles,
  Gift,
} from "lucide-react";
import { trackInitiateCheckout } from "@/components/meta-pixel";

const vipFeatures = [
  "Full SOFA Method modules with deep-dive content",
  "Weekly challenges with accountability",
  "All themed Circles (wellness, career, relationships)",
  "Complete resource library (journals, trackers, templates)",
  "Livestream access + lifetime replays",
  "Early event access + member discounts",
  "Exclusive brand partner perks",
  "Direct community access with Tonia",
];

const foundingBonuses = [
  {
    title: "Locked-In Pricing Forever",
    description: "Pay $37/month forever, even when the price increases to $47+",
    icon: Lock,
  },
  {
    title: "Founding Member Badge",
    description: "Exclusive recognition in the community",
    icon: Star,
  },
  {
    title: "Bonus: 1:1 Welcome Call",
    description: "15-minute onboarding call with Tonia (first 50 members)",
    icon: Gift,
  },
];

const testimonials = [
  {
    quote: "I've been waiting for something like this. Finally, a community that gets it.",
    name: "Sarah M.",
  },
  {
    quote: "The SOFA Method changed how I approach everything. Can't wait to go deeper.",
    name: "Jessica T.",
  },
];

// Countdown timer component
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Sec" },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold">
            {item.value.toString().padStart(2, "0")}
          </div>
          <p className="text-xs mt-1 text-muted-foreground">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function FoundingMemberPage() {
  // Set deadline to 7 days from now (adjust as needed)
  const [deadline] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
  });

  const handleJoinClick = () => {
    trackInitiateCheckout(37, "USD");
  };

  return (
    <div className="flex flex-col">
      {/* Urgency Banner */}
      <div className="bg-primary text-primary-foreground py-3 text-center">
        <p className="text-sm font-medium">
          <Clock className="inline h-4 w-4 mr-1" />
          Founding Member pricing ends soon — Lock in $37/month forever
        </p>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary">Limited Time Offer</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Become a Founding Member
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join the Sofa Circle at the lowest price it will ever be. Lock in
              $37/month forever—before it goes to $47.
            </p>

            {/* Countdown */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4">
                Founding Member pricing ends in:
              </p>
              <CountdownTimer targetDate={deadline} />
            </div>

            {/* CTA */}
            <Button size="lg" className="text-lg px-8" onClick={handleJoinClick} asChild>
              <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
                Claim Your Founding Spot — $37/mo <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              <Users className="inline h-4 w-4 mr-1" />
              Only 100 founding spots available
            </p>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Founding Member */}
            <Card className="border-2 border-primary relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                FOUNDING MEMBER — LIMITED TIME
              </div>
              <CardContent className="p-8 pt-16">
                <h3 className="text-2xl font-bold mb-2">Sofa Circle</h3>
                <p className="text-muted-foreground mb-4">Founding Member Rate</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$37</span>
                  <span className="text-muted-foreground">/month</span>
                  <p className="text-sm text-primary font-medium mt-1">
                    Locked in forever
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {vipFeatures.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  <li className="text-sm text-muted-foreground">+ 3 more benefits</li>
                </ul>
                <Button className="w-full" size="lg" onClick={handleJoinClick} asChild>
                  <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
                    Claim Founding Spot
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Regular Price */}
            <Card className="bg-muted/50 border-0 relative">
              <div className="absolute top-0 left-0 right-0 bg-muted text-muted-foreground text-center py-2 text-sm">
                REGULAR PRICE — COMING SOON
              </div>
              <CardContent className="p-8 pt-16 opacity-75">
                <h3 className="text-2xl font-bold mb-2">Sofa Circle</h3>
                <p className="text-muted-foreground mb-4">Standard Rate</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$47</span>
                  <span className="text-muted-foreground">/month</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Starting after launch
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {vipFeatures.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  <li className="text-sm text-muted-foreground">+ 3 more benefits</li>
                </ul>
                <Button variant="outline" className="w-full" size="lg" disabled>
                  Available After Launch
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-medium text-primary">
              Save $120/year by joining as a Founding Member
            </p>
          </div>
        </div>
      </section>

      {/* Founding Bonuses */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Founding Member Bonuses</h2>
            <p className="text-muted-foreground">
              Exclusive perks only available during this launch
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {foundingBonuses.map((bonus, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <bonus.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{bonus.title}</h3>
                  <p className="text-sm text-muted-foreground">{bonus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Get</h2>
            <p className="text-muted-foreground">
              Full access to the complete ASOTCS experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {vipFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-background rounded-lg"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What People Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Questions</h2>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What does "locked in forever" mean?</h3>
                <p className="text-muted-foreground">
                  As a Founding Member, you'll pay $37/month for as long as you remain
                  a member—even when we raise prices. Regular members will pay $47+.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, there's no contract. Cancel anytime from your account. But if you
                  rejoin later, you'll pay the regular price.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How many founding spots are available?</h3>
                <p className="text-muted-foreground">
                  We're limiting founding memberships to 100 people to maintain community
                  quality and ensure everyone gets personalized attention.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Miss Your Founding Spot
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Lock in $37/month forever. This price disappears when the timer hits zero.
          </p>
          <div className="mb-8">
            <CountdownTimer targetDate={deadline} />
          </div>
          <Button size="lg" variant="secondary" className="text-lg px-8" onClick={handleJoinClick} asChild>
            <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
              Become a Founding Member — $37/mo <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <p className="text-sm text-primary-foreground/60 mt-4">
            100 spots only. No risk. Cancel anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
