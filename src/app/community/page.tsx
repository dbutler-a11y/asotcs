import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Users, MessageCircle, Calendar, BookOpen } from "lucide-react";

export const metadata = {
  title: "Join the Community | ASOTCS",
  description: "Join the ASOTCS community - Take a Seat for free or upgrade to Sofa Circle VIP for full access to the SOFA Method.",
};

const freeFeatures = [
  {
    icon: Users,
    title: "Community Lounge",
    description: "Connect with like-minded women in our welcoming space",
  },
  {
    icon: MessageCircle,
    title: "Weekly Reflection Prompts",
    description: "Guided questions to spark self-discovery",
  },
  {
    icon: Calendar,
    title: "Monthly Sunday Resets",
    description: "Start each month with intention and clarity",
  },
  {
    icon: BookOpen,
    title: "SOFA Method Overview",
    description: "Introduction to our transformative framework",
  },
];

const vipFeatures = [
  "Full SOFA Method modules with deep-dive content",
  "Weekly challenges with accountability",
  "All themed Circles (wellness, career, relationships, etc.)",
  "Complete resource library (journals, trackers, budgeting sheets)",
  "Wellness library with curated content",
  "Livestream access + lifetime replays",
  "Early event access + member discounts",
  "Exclusive brand partner perks",
];

const faqs = [
  {
    question: "What platform is the community on?",
    answer: "ASOTCS is hosted on Skool, a modern community platform that's easy to use and accessible from any device. You'll get access as soon as you join.",
  },
  {
    question: "Can I upgrade from Free to VIP later?",
    answer: "Absolutely! Many members start with Take a Seat (free) to get a feel for the community, then upgrade to Sofa Circle when they're ready for the full experience.",
  },
  {
    question: "Is there a contract or commitment?",
    answer: "No contracts. Sofa Circle is month-to-month, and you can cancel anytime. We also offer an annual option that saves you 2 months.",
  },
  {
    question: "What if I have questions before joining?",
    answer: "We'd love to hear from you! Reach out through our contact page and we'll get back to you within 24-48 hours.",
  },
];

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Join the Community</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Seat Is Waiting
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join a community of women who are done surviving and ready to thrive. Start free or go all-in with VIP.
            </p>
          </div>
        </div>
      </section>

      {/* Free Tier Detail */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Free Tier</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Take a Seat</h2>
              <p className="text-muted-foreground mb-6">
                Get a taste of the ASOTCS community and start your journey with the SOFA Method. No credit card required.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {freeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <feature.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">{feature.title}</p>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
                  Join Free on Skool <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="bg-secondary/10 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <p className="text-5xl font-bold text-secondary mb-2">$0</p>
                <p className="text-muted-foreground mb-6">Forever free</p>
                <p className="text-sm text-muted-foreground">
                  Perfect for getting started and exploring the community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Tier Preview */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <Badge variant="secondary" className="mb-4 bg-primary-foreground/20 text-primary-foreground">
                VIP Membership
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sofa Circle</h2>
              <p className="text-primary-foreground/80 mb-6">
                Full access to everything ASOTCS has to offer. The complete SOFA Method, all resources, and the deepest level of community support.
              </p>
              <ul className="space-y-3 mb-8">
                {vipFeatures.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/community/vip">
                  See Full VIP Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:order-1 bg-primary-foreground/10 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">$47</p>
                <p className="text-primary-foreground/80 mb-4">/month</p>
                <p className="text-sm text-primary-foreground/60 mb-6">
                  or $397/year (save 2 months)
                </p>
                <Button variant="secondary" asChild>
                  <Link href="/community/vip">Join VIP</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Options</h2>
            <p className="text-muted-foreground">Find the right fit for your journey</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 pr-4">Feature</th>
                  <th className="text-center py-4 px-4">Take a Seat<br /><span className="text-sm font-normal text-muted-foreground">Free</span></th>
                  <th className="text-center py-4 pl-4 bg-primary/5 rounded-t-lg">Sofa Circle<br /><span className="text-sm font-normal text-primary">$47/mo</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 pr-4">Community access</td>
                  <td className="text-center py-4 px-4">Limited</td>
                  <td className="text-center py-4 pl-4 bg-primary/5">Full access</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 pr-4">SOFA Method content</td>
                  <td className="text-center py-4 px-4">Overview only</td>
                  <td className="text-center py-4 pl-4 bg-primary/5">Complete modules</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 pr-4">Reflection prompts</td>
                  <td className="text-center py-4 px-4"><CheckCircle2 className="h-5 w-5 text-secondary mx-auto" /></td>
                  <td className="text-center py-4 pl-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 pr-4">Weekly challenges</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 pl-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 pr-4">Resource library</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 pl-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 pr-4">Livestreams + replays</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 pl-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 pr-4">Themed Circles</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 pl-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 pr-4">Brand partner perks</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 pl-4 bg-primary/5 rounded-b-lg"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="outline" asChild>
              <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
                Join Free
              </a>
            </Button>
            <Button asChild>
              <Link href="/community/vip">
                Join VIP — $47/mo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions?</h2>
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

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Seat?
          </h2>
          <p className="text-muted-foreground mb-8">
            Start free and upgrade whenever you're ready. Either way, we're glad you're here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
                Join Free <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" asChild>
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
