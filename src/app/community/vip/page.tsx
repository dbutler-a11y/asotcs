import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  BookOpen,
  Calendar,
  Download,
  Video,
  Gift,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Sofa Circle VIP | ASOTCS",
  description: "Join Sofa Circle - the VIP membership for full access to the SOFA Method, resources, livestreams, and our complete wellness community.",
};

const features = [
  {
    icon: BookOpen,
    title: "Full SOFA Method Modules",
    description: "Complete access to all four pillars with deep-dive lessons, exercises, and implementation guides",
  },
  {
    icon: Calendar,
    title: "Weekly Challenges",
    description: "Structured weekly activities with built-in accountability to keep you moving forward",
  },
  {
    icon: Users,
    title: "All Themed Circles",
    description: "Specialized discussion groups for wellness, career, relationships, finances, and more",
  },
  {
    icon: Download,
    title: "Resource Library",
    description: "Downloadable journals, trackers, budgeting sheets, and planning templates",
  },
  {
    icon: Video,
    title: "Livestreams + Replays",
    description: "Regular live sessions with Tonia plus lifetime access to all recordings",
  },
  {
    icon: Gift,
    title: "Member Perks",
    description: "Early access to events, member discounts, and exclusive brand partner offers",
  },
];

const testimonials = [
  {
    quote: "The accountability alone is worth it. Having a community that actually checks in and celebrates wins with you? Game changer.",
    name: "Amanda K.",
    title: "Sofa Circle Member, 6 months",
    rating: 5,
  },
  {
    quote: "I've been in other online communities before. This one is different. It feels like a space that was actually designed for us.",
    name: "Rachel M.",
    title: "Founding Member",
    rating: 5,
  },
  {
    quote: "The resources alone—the journals, the trackers—I would have paid for those separately. Getting them with the membership is incredible.",
    name: "Danielle T.",
    title: "Sofa Circle Member, 3 months",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What exactly do I get with Sofa Circle?",
    answer: "Full access to the complete SOFA Method curriculum, all community spaces (including themed Circles), weekly challenges, the entire resource library, livestream access with replays, and exclusive member perks. It's everything ASOTCS offers.",
  },
  {
    question: "How is this different from the free tier?",
    answer: "Take a Seat (free) gives you a taste—limited community access, weekly prompts, and an overview of the SOFA Method. Sofa Circle unlocks everything: complete modules, all resources, livestreams, themed circles, and accountability features.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. Sofa Circle is month-to-month with no contracts. You can cancel anytime from your account settings, and you'll retain access until the end of your billing period.",
  },
  {
    question: "Is there an annual option?",
    answer: "Yes! You can pay $397/year instead of $47/month—that's 2 months free. The annual option locks in your rate and saves you money.",
  },
  {
    question: "What if I'm already in therapy?",
    answer: "Perfect! Many of our members use Sofa Circle alongside their therapeutic work. The SOFA Method provides practical daily structure that complements clinical insights. It's not a replacement for therapy—it's a supplement.",
  },
  {
    question: "How much time do I need to commit?",
    answer: "As much or as little as fits your life. Some members spend 30 minutes a day in the community; others check in weekly. The content is always there when you need it.",
  },
];

const valueStack = [
  { item: "Complete SOFA Method Curriculum", value: "$297" },
  { item: "Weekly Live Challenges", value: "$97/mo" },
  { item: "Resource Library Access", value: "$147" },
  { item: "Livestream Sessions + Replays", value: "$197" },
  { item: "Community Access", value: "$47/mo" },
  { item: "Brand Partner Perks", value: "Varies" },
];

export default function VIPPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/20 text-primary-foreground">
              VIP Membership
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sofa Circle
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Full access to everything ASOTCS has to offer. The complete SOFA Method, all resources, and the deepest level of community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
                  Join Sofa Circle — $47/mo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/60 mt-4">
              Or $397/year (save 2 months)
            </p>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              You've tried everything else.
            </h2>
            <p className="text-muted-foreground">
              The apps that promise habit change. The courses that sit unwatched. The books with highlighted passages you never implemented.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-muted/50 border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-destructive mb-4">What You've Tried</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Habit tracking apps (abandoned after 2 weeks)</li>
                  <li>Online courses (10% completion rate)</li>
                  <li>Self-help books (read, not applied)</li>
                  <li>Willpower and "just pushing through"</li>
                  <li>Going it alone</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-4">What You Need</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    A proven framework (not random tips)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    Built-in accountability
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    Community support
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    Therapist-informed guidance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    Practical tools you'll actually use
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything Inside Sofa Circle
            </h2>
            <p className="text-muted-foreground">Full access to the complete ASOTCS experience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOFA Method Preview */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">The Curriculum</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Complete SOFA Method
              </h2>
              <p className="text-muted-foreground mb-6">
                Four comprehensive modules that guide you through building a sustainable foundation for life. Each pillar includes video lessons, worksheets, and implementation exercises.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-rose-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-rose-200 flex items-center justify-center font-bold text-rose-700">S</div>
                  <div>
                    <p className="font-medium">Self-Reflection</p>
                    <p className="text-sm text-muted-foreground">Values, identity, starting point</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center font-bold text-amber-700">O</div>
                  <div>
                    <p className="font-medium">Observation</p>
                    <p className="text-sm text-muted-foreground">Patterns, triggers, blind spots</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center font-bold text-emerald-700">F</div>
                  <div>
                    <p className="font-medium">Flow</p>
                    <p className="text-sm text-muted-foreground">Energy, rhythm, nervous system</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center font-bold text-sky-700">A</div>
                  <div>
                    <p className="font-medium">Action</p>
                    <p className="text-sm text-muted-foreground">Goals, habits, momentum</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-semibold mb-4">What Each Module Includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Video lessons from Tonia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Downloadable worksheets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Implementation exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Community discussion prompts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Progress tracking tools</span>
                </li>
              </ul>
            </div>
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
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
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

      {/* About Tonia */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-primary/10 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">T</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Tonia</h3>
              <p className="text-muted-foreground">Founder & Creator</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Your Guide</h2>
              <p className="text-muted-foreground mb-4">
                I'm Tonia—therapist, founder of ASOTCS, and creator of the SOFA Method. After years of watching brilliant women struggle with the same patterns, I built a framework for sustainable transformation.
              </p>
              <p className="text-muted-foreground mb-4">
                Sofa Circle is where I bring everything I know into a community format. It's the closest thing to having me in your corner—without the therapy prices.
              </p>
              <Button variant="outline" asChild>
                <Link href="/about">Read My Full Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Investment</h2>
            <p className="text-primary-foreground/80">
              Everything you need for sustainable transformation
            </p>
          </div>
          <div className="bg-primary-foreground/10 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <div className="space-y-3 mb-8">
              {valueStack.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-primary-foreground/20">
                  <span>{item.item}</span>
                  <span className="text-primary-foreground/60">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-primary-foreground/60 mb-2">Total Value: $800+</p>
              <p className="text-5xl font-bold mb-2">$47</p>
              <p className="text-primary-foreground/80 mb-6">/month</p>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
                  Join Sofa Circle Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <p className="text-sm text-primary-foreground/60 mt-4">
                Or $397/year (save 2 months)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
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

      {/* Final CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Seat in the Circle Is Waiting
          </h2>
          <p className="text-muted-foreground mb-8">
            Join hundreds of women who are done surviving and ready to thrive. Cancel anytime.
          </p>
          <Button size="lg" asChild>
            <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
              Join Sofa Circle — $47/mo <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Not ready for VIP? <Link href="/community" className="text-primary hover:underline">Start with the free tier</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
