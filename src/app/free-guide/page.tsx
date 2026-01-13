"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Heart,
  Eye,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import { trackLead } from "@/components/meta-pixel";

const guideIncludes = [
  "The complete SOFA Method breakdown",
  "7-day reset challenge with daily prompts",
  "Self-reflection journaling templates",
  "Energy audit worksheet",
  "Pattern recognition guide",
  "Quick-start action plan",
];

const painPoints = [
  "Feeling stuck despite knowing what you 'should' do",
  "Starting strong but losing momentum by Wednesday",
  "Overwhelm that makes even simple tasks feel impossible",
  "Disconnection from yourself and your goals",
];

export default function FreeGuidePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track lead event for Meta Pixel
    trackLead();

    // TODO: Connect to ConvertKit/Beehiiv API
    // For now, simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <Badge variant="secondary" className="mb-4">
                Free Download
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                The 7-Day SOFA Reset Guide
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                A therapist-informed guide to rebuilding your foundation in one
                week. No fluff. No toxic positivity. Just practical tools that
                work.
              </p>

              {/* Pain Points */}
              <div className="space-y-3 mb-8">
                <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                  Perfect if you're experiencing:
                </p>
                {painPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>2,500+ downloads</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Therapist-created</span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <Card className="border-2 border-primary/20 shadow-xl">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Download className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Check Your Inbox!</h3>
                      <p className="text-muted-foreground mb-6">
                        Your SOFA Reset Guide is on its way. While you wait...
                      </p>
                      <Button asChild>
                        <Link href="/community">
                          Join the Free Community <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold mb-2">
                          Get Your Free Guide
                        </h2>
                        <p className="text-muted-foreground">
                          Enter your details and we'll send it right over.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                          >
                            First Name
                          </label>
                          <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your first name"
                            required
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Email Address
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                            className="h-12"
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full h-12"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Me the Guide <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                          No spam. Unsubscribe anytime. We respect your inbox.
                        </p>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What's Inside the Guide</h2>
            <p className="text-muted-foreground">
              Everything you need to start your reset journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideIncludes.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-background rounded-lg"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFA Preview */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              The Framework
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Built on the SOFA Method
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The same therapist-informed framework used by 500+ women in our
              community
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-rose-700">S</span>
                </div>
                <h3 className="font-semibold mb-1">Self-Reflection</h3>
                <p className="text-sm text-muted-foreground">Know your starting point</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-amber-700">O</span>
                </div>
                <h3 className="font-semibold mb-1">Observation</h3>
                <p className="text-sm text-muted-foreground">See your patterns</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-emerald-700">F</span>
                </div>
                <h3 className="font-semibold mb-1">Flow</h3>
                <p className="text-sm text-muted-foreground">Align your energy</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-sky-700">A</span>
                </div>
                <h3 className="font-semibold mb-1">Action</h3>
                <p className="text-sm text-muted-foreground">Move forward</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Tonia */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">T</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Created by Tonia</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              "I created this guide because I saw too many women drowning in
              information but starving for implementation. This isn't another
              thing to add to your pile—it's the starting point that actually
              works."
            </p>
            <p className="text-sm text-muted-foreground">
              Therapist & Founder of ASOTCS
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Reset?</h2>
          <p className="text-muted-foreground mb-8">
            Get the free guide and start your 7-day journey today.
          </p>
          <Button size="lg" asChild>
            <a href="#top">
              Get the Free Guide <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
