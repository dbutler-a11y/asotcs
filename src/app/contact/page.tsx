"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Instagram,
    title: "Instagram",
    description: "Follow and DM us",
    link: "https://instagram.com/thehouseoftonia",
    linkText: "@thehouseoftonia",
  },
  {
    icon: Mail,
    title: "Email",
    description: "For inquiries and support",
    link: "mailto:hello@asotcs.com",
    linkText: "hello@asotcs.com",
  },
  {
    icon: MessageCircle,
    title: "Community",
    description: "Join and chat with us",
    link: "https://www.skool.com/asotcs",
    linkText: "Join on Skool",
  },
];

const faqs = [
  {
    question: "What is ASOTCS?",
    answer: "ASOTCS (A Seat on the Counselor's Sofa) is a therapist-informed wellness community using the SOFA Method. We help women build sustainable foundations for their lives without the clinical overhead.",
  },
  {
    question: "Is this therapy?",
    answer: "No. ASOTCS is therapist-informed but not clinical therapy. It's a personal development community and framework. If you need clinical support, please work with a licensed provider.",
  },
  {
    question: "How do I join?",
    answer: "You can join our free tier (Take a Seat) directly on Skool, or upgrade to our VIP membership (Sofa Circle) for $47/month. Visit our Community page to get started.",
  },
  {
    question: "Can I cancel my membership?",
    answer: "Yes, Sofa Circle is month-to-month with no contracts. You can cancel anytime from your account settings.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    {method.linkText}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Send a Message</h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thanks for reaching out. We'll get back to you within 24-48 hours.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us more..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
            <p className="text-muted-foreground">
              Quick answers to frequently asked questions
            </p>
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
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <Button variant="outline" asChild>
              <Link href="/community">Join the Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
