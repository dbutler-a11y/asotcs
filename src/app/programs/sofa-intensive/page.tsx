import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Video,
  BookOpen,
  MessageCircle,
  Calendar,
  Clock,
  Heart,
  Eye,
  Zap,
  Target,
} from "lucide-react";

export const metadata = {
  title: "SOFA Intensive | 6-Week Live Cohort | ASOTCS",
  description: "The SOFA Intensive is a 6-week live cohort experience to rebuild your foundation and reclaim your life with direct access to Tonia.",
};

const painPoints = [
  "You start every week with good intentions—and end it feeling like you failed",
  "You've read the books, saved the podcasts, and still feel stuck",
  "Your emotions run the show and you're exhausted from the rollercoaster",
  "You know what you should do but can't seem to actually do it",
  "You feel disconnected—from yourself, your goals, your people",
];

const curriculum = [
  {
    week: 1,
    letter: "S",
    title: "Self-Reflection",
    theme: "Where Am I, Really?",
    color: "bg-rose-100 text-rose-700 border-rose-200",
    description: "Complete your personal values audit, identify the gap between who you are and who you're being, and start your SOFA journal practice.",
    outcome: "Radical clarity on your starting point",
  },
  {
    week: 2,
    letter: "O",
    title: "Observation",
    theme: "What Patterns Are Running My Life?",
    color: "bg-amber-100 text-amber-700 border-amber-200",
    description: "Map your emotional triggers and responses, identify the blind spots sabotaging your progress, and learn to observe without judgment.",
    outcome: "Awareness that creates choice",
  },
  {
    week: 3,
    letter: "F",
    title: "Flow",
    theme: "How Do I Actually Want to Feel?",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    description: "Audit your energy—what drains you, what fills you. Understand your nervous system basics and design your personal flow rituals.",
    outcome: "A sustainable rhythm that supports you",
  },
  {
    week: 4,
    letter: "A",
    title: "Action",
    theme: "What's the Next Right Move?",
    color: "bg-sky-100 text-sky-700 border-sky-200",
    description: "Build your goal architecture (not just goals—systems), create micro-habits that stick, and learn the momentum formula.",
    outcome: "Action that doesn't require motivation",
  },
  {
    week: 5,
    letter: "I",
    title: "Integration",
    theme: "Making It All Work Together",
    color: "bg-violet-100 text-violet-700 border-violet-200",
    description: "Build your personalized SOFA protocol, identify your non-negotiables, and create your 'when life happens' contingency plan.",
    outcome: "A method that's truly yours",
  },
  {
    week: 6,
    letter: "S",
    title: "Sustainability",
    theme: "How Do I Keep This Going?",
    color: "bg-pink-100 text-pink-700 border-pink-200",
    description: "Set up accountability systems, plan for obstacles before they arrive, and celebrate and cement your transformation.",
    outcome: "Confidence that this time is different",
  },
];

const included = [
  {
    icon: Video,
    title: "6 Weekly Live Coaching Calls",
    description: "90-minute sessions with Tonia each week",
  },
  {
    icon: Users,
    title: "Small Cohort Format",
    description: "15-20 women for personalized attention",
  },
  {
    icon: MessageCircle,
    title: "Private Cohort Community",
    description: "Daily support between sessions",
  },
  {
    icon: BookOpen,
    title: "SOFA Method Workbook",
    description: "Comprehensive guide for your journey",
  },
  {
    icon: Calendar,
    title: "1:1 Private Check-In",
    description: "30-minute call with Tonia",
  },
  {
    icon: Clock,
    title: "Lifetime Replay Access",
    description: "Never miss a session",
  },
];

const testimonials = [
  {
    quote: "The Intensive gave me something no book or course ever has: actual implementation with support. I finally stopped consuming and started doing.",
    name: "Lauren P.",
    title: "Spring Cohort Graduate",
    rating: 5,
  },
  {
    quote: "Week 3 was my breakthrough moment. Understanding my nervous system changed how I approach everything. I wish I'd learned this years ago.",
    name: "Christina S.",
    title: "Fall Cohort Graduate",
    rating: 5,
  },
  {
    quote: "The small group format meant I couldn't hide. In the best way. Having Tonia and 15 other women holding space for me? Powerful.",
    name: "Jasmine R.",
    title: "Winter Cohort Graduate",
    rating: 5,
  },
];

const isFor = [
  "You're tired of consuming content and ready to actually implement",
  "You thrive with structure, accountability, and community",
  "You want therapist-informed guidance without ongoing therapy",
  "You're willing to show up—to the calls, the work, and yourself",
  "You're ready to stop surviving and start building a life you're proud of",
];

const notFor = [
  "You're looking for a quick fix or magic solution",
  "You're in active crisis (please seek clinical support first)",
  "You can't commit 2-3 hours per week for 6 weeks",
  "You're not willing to be honest with yourself and the group",
  "You want to stay in consumption mode without taking action",
];

const faqs = [
  {
    question: "What if I can't make a live call?",
    answer: "All sessions are recorded and available within 24 hours. While live attendance is strongly encouraged for the full experience, you won't fall behind if you need to catch a replay.",
  },
  {
    question: "Is this therapy?",
    answer: "No. The SOFA Intensive is therapist-informed but not clinical therapy. It's a structured personal development experience. If you're in active crisis or need clinical support, please work with a licensed provider first.",
  },
  {
    question: "How much time do I need to commit?",
    answer: "Plan for 2-3 hours per week: 90 minutes for the live call, plus 30-60 minutes for workbook exercises and community engagement.",
  },
  {
    question: "What if I've tried other programs and they didn't work?",
    answer: "The difference here is the combination of live coaching, small group accountability, and a proven framework. This isn't content consumption—it's guided implementation with support.",
  },
  {
    question: "Can I join if I'm already in the Sofa Circle?",
    answer: "Absolutely. Many Intensive participants are Sofa Circle members who want a deeper, more focused experience. Your membership continues alongside the Intensive.",
  },
  {
    question: "Is there a payment plan?",
    answer: "Yes. You can split your investment into 2 payments of $317 (total $634).",
  },
];

const valueStack = [
  { item: "6 Weekly Group Coaching Calls (90 min each)", value: "$900" },
  { item: "Private Cohort Community Access", value: "$197" },
  { item: "SOFA Method Workbook", value: "$97" },
  { item: "1:1 Private Call with Tonia (30 min)", value: "$197" },
  { item: "Lifetime Replay Access", value: "$297" },
  { item: "Resource Library Access", value: "$97" },
];

export default function SofaIntensivePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/20 text-primary-foreground">
              6-Week Live Cohort Experience
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Rebuild Your Foundation. Reclaim Your Life.
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              The SOFA Intensive gives you the structure, support, and accountability to finally get unstuck—without years of therapy or another self-help book collecting dust.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="#apply">
                Apply for the Next Cohort <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="text-sm text-primary-foreground/60 mt-4">
              Next cohort starts soon. Only 20 spots available.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's be honest about where you are right now...
            </h2>
          </div>
          <div className="space-y-4 mb-8">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-medium text-primary">
            If you checked more than two of these... you're not broken. You're just building on a shaky foundation.
          </p>
        </div>
      </section>

      {/* Turning Point */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What if the problem isn't your motivation?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-xl mb-4">
              You don't need more willpower. You don't need another planner. You don't need to "just push through."
            </p>
            <p className="text-xl mb-4">
              What you need is a foundation.
            </p>
            <p className="text-xl">
              A way to understand yourself deeply enough that the right actions become obvious. A method that meets you where you are—not where some guru thinks you should be.
            </p>
          </div>
        </div>
      </section>

      {/* Introducing the Solution */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">The Experience</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Introducing the SOFA Intensive
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              6 weeks. Small group. Real transformation. This isn't a course you watch alone. It's an experience you move through together.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your 6-Week Journey
            </h2>
            <p className="text-muted-foreground">
              Each week builds on the last, creating a complete foundation for transformation.
            </p>
          </div>
          <div className="space-y-6">
            {curriculum.map((week) => (
              <Card key={week.week} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[200px_1fr] gap-0">
                    <div className={`p-6 ${week.color} flex flex-col justify-center items-center text-center`}>
                      <span className="text-sm font-medium opacity-70">Week {week.week}</span>
                      <span className="text-4xl font-bold my-2">{week.letter}</span>
                      <span className="font-semibold">{week.title}</span>
                    </div>
                    <div className="p-6">
                      <Badge variant="outline" className="mb-2">{week.theme}</Badge>
                      <p className="text-muted-foreground mb-4">{week.description}</p>
                      <p className="text-sm">
                        <span className="font-semibold">Outcome:</span>{" "}
                        <span className="text-muted-foreground">{week.outcome}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For / Not For */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">This Is For You If...</h3>
                <ul className="space-y-4">
                  {isFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-muted/50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-muted-foreground">This Isn't For You If...</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {notFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-destructive shrink-0">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm">
                  If this isn't your season, that's okay.{" "}
                  <Link href="/community/vip" className="text-primary hover:underline">
                    The Sofa Circle membership
                  </Link>{" "}
                  might be a better starting point.
                </p>
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
              What Past Participants Are Saying
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
              <p className="text-muted-foreground">Your Guide</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Meet Your Guide</h2>
              <p className="text-muted-foreground mb-4">
                I'm Tonia—therapist, founder of ASOTCS, and creator of the SOFA Method. For years, I watched brilliant, capable women struggle with the same patterns.
              </p>
              <p className="text-muted-foreground mb-4">
                The Intensive is where I bring everything I know into one transformative experience. It's the closest thing to having me as your personal guide for 6 weeks.
              </p>
              <p className="font-medium text-primary">
                I can't wait to meet you inside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="apply" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Investment</h2>
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
            <div className="text-center border-t border-primary-foreground/20 pt-8">
              <p className="text-sm text-primary-foreground/60 mb-2">Total Value: $1,785</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="text-center">
                  <p className="text-4xl font-bold">$597</p>
                  <p className="text-sm text-primary-foreground/60">Pay in Full (Save $37)</p>
                </div>
                <span className="text-primary-foreground/40">or</span>
                <div className="text-center">
                  <p className="text-4xl font-bold">2 × $317</p>
                  <p className="text-sm text-primary-foreground/60">Payment Plan</p>
                </div>
              </div>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
                  Apply for the Next Cohort <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <p className="text-sm text-primary-foreground/60 mt-4">
                Application takes 2 minutes. You'll hear back within 48 hours.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-primary-foreground/60 text-sm">
              Compare: Weekly therapy costs $150-300/session ($900-1,800 for 6 weeks)
            </p>
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
            Your Seat Is Waiting
          </h2>
          <p className="text-muted-foreground mb-4">
            Only 20 spots available per cohort. Applications close when the cohort fills.
          </p>
          <p className="text-lg mb-8">
            If you're ready to rebuild your foundation and finally create lasting change, this is your moment.
          </p>
          <Button size="lg" asChild>
            <a href="https://www.skool.com/asotcs" target="_blank" rel="noopener noreferrer">
              Apply for the Next Cohort <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Not ready for the Intensive?{" "}
            <Link href="/community" className="text-primary hover:underline">
              Join the community first
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
