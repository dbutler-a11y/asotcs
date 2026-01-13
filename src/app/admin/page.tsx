"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  FileText,
  Video,
  Mail,
  MessageSquare,
  Calendar,
  Target,
  Download,
  ExternalLink,
  Clock,
  DollarSign,
} from "lucide-react";

// Collapsible Section Component
function CollapsibleSection({
  title,
  badge,
  children,
  defaultOpen = false,
}: {
  title: string;
  badge?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Card className="mb-4">
      <CardHeader
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            {isOpen ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            {title}
          </span>
          {badge && <Badge variant="outline">{badge}</Badge>}
        </CardTitle>
      </CardHeader>
      {isOpen && <CardContent>{children}</CardContent>}
    </Card>
  );
}

// Checklist Item Component
function ChecklistItem({
  children,
  subItems,
}: {
  children: React.ReactNode;
  subItems?: string[];
}) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="mb-2">
      <div
        className="flex items-start gap-2 cursor-pointer"
        onClick={() => setChecked(!checked)}
      >
        {checked ? (
          <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
        ) : (
          <Circle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
        )}
        <span className={checked ? "line-through text-muted-foreground" : ""}>
          {children}
        </span>
      </div>
      {subItems && (
        <ul className="ml-7 mt-1 space-y-1">
          {subItems.map((item, i) => (
            <li key={i} className="text-sm text-muted-foreground">
              • {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-2 bg-primary">Admin Dashboard</Badge>
          <h1 className="text-3xl font-bold mb-2">ASOTCS Launch Guide</h1>
          <p className="text-muted-foreground">
            Hey Tonia! Everything you need to launch is right here. Work through each phase in order.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <DollarSign className="h-8 w-8 mx-auto text-primary mb-2" />
              <p className="text-2xl font-bold">$37</p>
              <p className="text-xs text-muted-foreground">Founding Price</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 mx-auto text-primary mb-2" />
              <p className="text-2xl font-bold">100</p>
              <p className="text-xs text-muted-foreground">Founding Spots</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Video className="h-8 w-8 mx-auto text-primary mb-2" />
              <p className="text-2xl font-bold">25+</p>
              <p className="text-xs text-muted-foreground">Video Scripts</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 mx-auto text-primary mb-2" />
              <p className="text-2xl font-bold">2-3</p>
              <p className="text-xs text-muted-foreground">Days to Launch</p>
            </CardContent>
          </Card>
        </div>

        {/* Phase 1: Skool Setup */}
        <CollapsibleSection title="Phase 1: Skool Setup" badge="Day 1" defaultOpen={true}>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                Create Your Skool Community
              </h4>
              <ChecklistItem>
                Go to skool.com and sign up/log in
              </ChecklistItem>
              <ChecklistItem>
                Click &quot;Create Community&quot;
              </ChecklistItem>
              <ChecklistItem subItems={[
                "Name: ASOTCS - A Seat on the Counselor's Sofa",
                "URL: skool.com/asotcs",
                "Tagline: Therapist-informed wellness for women who are done surviving and ready to thrive."
              ]}>
                Enter community details
              </ChecklistItem>
              <ChecklistItem>
                Upload cover image and logo
              </ChecklistItem>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                Set Up Access Levels
              </h4>
              <ChecklistItem>
                Free Tier &quot;Take a Seat&quot; - $0 (default)
              </ChecklistItem>
              <ChecklistItem subItems={[
                "Go to Settings → Memberships",
                "Create new level: Sofa Circle",
                "Price: $47/month (or $37 founding)",
                "Annual: $397/year"
              ]}>
                Create VIP Tier &quot;Sofa Circle&quot;
              </ChecklistItem>
              <ChecklistItem>
                Connect Stripe (Settings → Payments)
              </ChecklistItem>
              <ChecklistItem>
                Test payment flow
              </ChecklistItem>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                Create 15 Community Spaces
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm mb-3">
                <table className="w-full">
                  <thead>
                    <tr className="text-left">
                      <th className="pb-2">#</th>
                      <th className="pb-2">Space Name</th>
                      <th className="pb-2">Access</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-1">
                    <tr><td>1</td><td>Welcome Lounge</td><td>Free + VIP</td></tr>
                    <tr><td>2</td><td>Introductions</td><td>Free + VIP</td></tr>
                    <tr><td>3</td><td>Announcements</td><td>Free + VIP (view only)</td></tr>
                    <tr><td>4</td><td>Sofa Conversations</td><td>Free (view) + VIP (post)</td></tr>
                    <tr><td>5</td><td>Weekly Wins</td><td>VIP only</td></tr>
                    <tr><td>6</td><td>SOFA Check-Ins</td><td>VIP only</td></tr>
                    <tr><td>7</td><td>Wellness Circle</td><td>VIP only</td></tr>
                    <tr><td>8</td><td>Emotional Health Circle</td><td>VIP only</td></tr>
                    <tr><td>9</td><td>Relationships Circle</td><td>VIP only</td></tr>
                    <tr><td>10</td><td>Career Circle</td><td>VIP only</td></tr>
                    <tr><td>11</td><td>Finances Circle</td><td>VIP only</td></tr>
                    <tr><td>12</td><td>Challenges</td><td>VIP only</td></tr>
                    <tr><td>13</td><td>Resources</td><td>VIP only</td></tr>
                    <tr><td>14</td><td>Ask Tonia</td><td>VIP only</td></tr>
                    <tr><td>15</td><td>Member Wins Wall</td><td>VIP only</td></tr>
                  </tbody>
                </table>
              </div>
              <ChecklistItem>All 15 spaces created with correct access levels</ChecklistItem>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">4</span>
                Add Pinned Posts to Each Space
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Copy from the Community Posts section below and pin to each space.
              </p>
              <ChecklistItem>Welcome Lounge pinned post</ChecklistItem>
              <ChecklistItem>Introductions pinned post</ChecklistItem>
              <ChecklistItem>Announcements pinned post</ChecklistItem>
              <ChecklistItem>Sofa Conversations pinned post</ChecklistItem>
              <ChecklistItem>Weekly Wins pinned post</ChecklistItem>
              <ChecklistItem>SOFA Check-Ins pinned post</ChecklistItem>
              <ChecklistItem>All 5 Themed Circles pinned posts</ChecklistItem>
              <ChecklistItem>Challenges pinned post</ChecklistItem>
              <ChecklistItem>Resources pinned post</ChecklistItem>
              <ChecklistItem>Ask Tonia pinned post</ChecklistItem>
              <ChecklistItem>Member Wins Wall pinned post</ChecklistItem>
            </div>
          </div>
        </CollapsibleSection>

        {/* Phase 2: Classroom Setup */}
        <CollapsibleSection title="Phase 2: Classroom Setup" badge="Day 1-2">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">5</span>
                Create Classroom Sections
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm mb-3">
                <table className="w-full">
                  <thead>
                    <tr className="text-left">
                      <th className="pb-2">#</th>
                      <th className="pb-2">Section Name</th>
                      <th className="pb-2">Access</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td>Start Here</td><td>Free + VIP</td></tr>
                    <tr><td>2</td><td>Self-Reflection</td><td>VIP</td></tr>
                    <tr><td>3</td><td>Observation</td><td>VIP</td></tr>
                    <tr><td>4</td><td>Flow</td><td>VIP</td></tr>
                    <tr><td>5</td><td>Action</td><td>VIP</td></tr>
                    <tr><td>6</td><td>Integration</td><td>VIP</td></tr>
                    <tr><td>7</td><td>Resource Library</td><td>VIP</td></tr>
                    <tr><td>8</td><td>Bonus Content</td><td>VIP</td></tr>
                  </tbody>
                </table>
              </div>
              <ChecklistItem>All 8 sections created</ChecklistItem>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">6</span>
                Record Priority Videos (Minimum for Launch)
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Scripts are in the Classroom Modules section below. Record these first!
              </p>
              <div className="border-l-4 border-primary pl-4 mb-4">
                <p className="font-medium">Section 1: Start Here (Free + VIP)</p>
                <ChecklistItem>1.1 Welcome to ASOTCS (3-5 min)</ChecklistItem>
                <ChecklistItem>1.2 How to Use This Community (4-6 min)</ChecklistItem>
                <ChecklistItem>1.3 Meet Tonia (5-7 min)</ChecklistItem>
                <ChecklistItem>1.4 The SOFA Method Overview (8-10 min)</ChecklistItem>
                <ChecklistItem>1.5 Your First Week Guide (4-5 min)</ChecklistItem>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="font-medium">Section 2: Self-Reflection (VIP) - At least first 2</p>
                <ChecklistItem>2.1 Values Discovery (12-15 min)</ChecklistItem>
                <ChecklistItem>2.2 The Honest Assessment (10-12 min)</ChecklistItem>
              </div>
              <p className="text-sm text-muted-foreground mt-3 italic">
                You can add remaining videos week by week after launch.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">7</span>
                Upload Resource PDFs
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Convert templates from Resource Library section to PDFs (use Canva).
              </p>
              <ChecklistItem>Weekly Planning Template</ChecklistItem>
              <ChecklistItem>Habit Tracker</ChecklistItem>
              <ChecklistItem>Values Discovery Worksheet</ChecklistItem>
              <ChecklistItem>Pattern Recognition Log</ChecklistItem>
              <ChecklistItem>Trigger Map Template</ChecklistItem>
              <ChecklistItem>Energy Audit Tracker</ChecklistItem>
              <ChecklistItem>SOFA Protocol Designer</ChecklistItem>
              <ChecklistItem>Journaling Prompts Collection</ChecklistItem>
            </div>
          </div>
        </CollapsibleSection>

        {/* Phase 3: Content & Email */}
        <CollapsibleSection title="Phase 3: Content & Email Setup" badge="Day 2">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">8</span>
                Schedule Week 1 Posts
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm mb-3">
                <table className="w-full">
                  <thead>
                    <tr className="text-left">
                      <th className="pb-2">Day</th>
                      <th className="pb-2">Time</th>
                      <th className="pb-2">Space</th>
                      <th className="pb-2">Post Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Mon</td><td>8am</td><td>Sofa Conversations</td><td>Week Intention</td></tr>
                    <tr><td>Tue</td><td>8am</td><td>SOFA Check-Ins</td><td>Self-Reflection Prompt</td></tr>
                    <tr><td>Wed</td><td>8am</td><td>Sofa Conversations</td><td>Midweek Check-in</td></tr>
                    <tr><td>Thu</td><td>8am</td><td>Ask Tonia</td><td>Question Collection</td></tr>
                    <tr><td>Fri</td><td>8am</td><td>Weekly Wins</td><td>Win Thread</td></tr>
                    <tr><td>Sat</td><td>10am</td><td>Sofa Conversations</td><td>Weekend Reflection</td></tr>
                    <tr><td>Sun</td><td>6pm</td><td>Announcements</td><td>Sunday Reset</td></tr>
                  </tbody>
                </table>
              </div>
              <ChecklistItem>Week 1 posts scheduled or ready to post</ChecklistItem>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">9</span>
                Set Up 7-Day Challenge
              </h4>
              <ChecklistItem>Post Challenge welcome in Challenges space</ChecklistItem>
              <ChecklistItem>Days 1-7 posts ready (from Challenge Content section)</ChecklistItem>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">10</span>
                Email Platform Setup
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Use ConvertKit, Beehiiv, or your preferred platform.
              </p>
              <ChecklistItem>Create Welcome Sequence (5 emails - see Email section)</ChecklistItem>
              <ChecklistItem>Create Lead Magnet PDF (design the SOFA Reset Guide)</ChecklistItem>
              <ChecklistItem>Set up automation: form → deliver PDF → start sequence</ChecklistItem>
              <ChecklistItem>Connect form to website free-guide page</ChecklistItem>
            </div>
          </div>
        </CollapsibleSection>

        {/* Phase 4: Launch */}
        <CollapsibleSection title="Phase 4: Test & Launch" badge="Day 2-3">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">11</span>
                Test Everything
              </h4>
              <p className="font-medium mt-2 mb-2">Free Member Flow:</p>
              <ChecklistItem>Can access Welcome Lounge, Introductions, Announcements</ChecklistItem>
              <ChecklistItem>Can view Sofa Conversations but not post</ChecklistItem>
              <ChecklistItem>Can see Section 1 classroom only</ChecklistItem>
              <ChecklistItem>Cannot access VIP spaces</ChecklistItem>

              <p className="font-medium mt-4 mb-2">VIP Member Flow:</p>
              <ChecklistItem>Payment works correctly</ChecklistItem>
              <ChecklistItem>Can access all spaces</ChecklistItem>
              <ChecklistItem>Can see all classroom content</ChecklistItem>
              <ChecklistItem>Can download resources</ChecklistItem>

              <p className="font-medium mt-4 mb-2">Lead Magnet:</p>
              <ChecklistItem>Form submits correctly</ChecklistItem>
              <ChecklistItem>PDF delivered via email</ChecklistItem>
              <ChecklistItem>Welcome sequence starts</ChecklistItem>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">12</span>
                Launch Day Checklist
              </h4>
              <p className="font-medium mb-2">Morning:</p>
              <ChecklistItem>Make community public</ChecklistItem>
              <ChecklistItem>Post launch announcement</ChecklistItem>
              <ChecklistItem>Send launch email to list</ChecklistItem>
              <ChecklistItem>Post on Instagram</ChecklistItem>
              <ChecklistItem>Go live to announce</ChecklistItem>

              <p className="font-medium mt-4 mb-2">Throughout Day:</p>
              <ChecklistItem>Welcome every new member personally</ChecklistItem>
              <ChecklistItem>Respond to all intro posts</ChecklistItem>
              <ChecklistItem>Be VERY active</ChecklistItem>

              <p className="font-medium mt-4 mb-2">Week 1:</p>
              <ChecklistItem>Daily engagement</ChecklistItem>
              <ChecklistItem>Host first livestream</ChecklistItem>
              <ChecklistItem>Collect feedback</ChecklistItem>
            </div>
          </div>
        </CollapsibleSection>

        {/* Revenue Goals */}
        <Card className="mb-8 border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Revenue Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-lg font-bold">50</p>
                <p className="text-xs text-muted-foreground">members</p>
                <p className="font-semibold text-primary">$1,850/mo</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-lg font-bold">100</p>
                <p className="text-xs text-muted-foreground">members</p>
                <p className="font-semibold text-primary">$3,700/mo</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-lg font-bold">200</p>
                <p className="text-xs text-muted-foreground">members</p>
                <p className="font-semibold text-primary">$7,400/mo</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-lg font-bold">300</p>
                <p className="text-xs text-muted-foreground">members</p>
                <p className="font-semibold text-primary">$11,100/mo</p>
              </div>
              <div className="p-3 bg-muted rounded-lg border-2 border-primary">
                <p className="text-lg font-bold">500</p>
                <p className="text-xs text-muted-foreground">members</p>
                <p className="font-semibold text-primary">$18,500/mo</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Target: 270-540 VIP members for $10-20K/month | Recommended ad budget: $50-150/day
            </p>
          </CardContent>
        </Card>

        {/* Content Library */}
        <h2 className="text-2xl font-bold mb-4 mt-12">Content Library</h2>
        <p className="text-muted-foreground mb-6">Copy-paste ready content for your community.</p>

        {/* Pinned Posts */}
        <CollapsibleSection title="Pinned Posts for Each Space" badge="15 posts">
          <div className="space-y-8">
            {/* Welcome Lounge */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Welcome Lounge — Pinned Post
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`Hey, welcome to your seat on the counselor's sofa.

I'm Tonia, and I'm so glad you found your way here.

Before you dive in, here's everything you need to know:

**What is ASOTCS?**

ASOTCS (A Seat on the Counselor's Sofa) is a community for women who are done surviving and ready to thrive. We use the SOFA Method—a therapist-informed framework for sustainable transformation.

No toxic positivity. No unrealistic expectations. Just practical tools and real support.

**Community Guidelines**

1. Lead with kindness. We're all doing our best.
2. No judgment zone. This is a space to be real, not perfect.
3. Keep it supportive. Advice should be offered, not pushed.
4. Respect privacy. What's shared here stays here.
5. No promotion. This isn't the place for your MLM or business.
6. Not a crisis line. If you're in crisis, please seek professional help.

**Getting Started:**

1. Introduce yourself in the Introductions space
2. Watch the "Start Here" section in the classroom
3. Turn on notifications for Announcements
4. Explore the community spaces
5. Start engaging — comment on posts, share your thoughts

**Access Levels:**

• Free Members: Community access, Start Here classroom content, weekly prompts
• VIP Members: Full classroom, all challenges, resource library, livestreams, Ask Tonia

Ready to upgrade? Click here to join the Sofa Circle →

Welcome home.

— Tonia`}
              </div>
            </div>

            {/* Introductions */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Introductions — Pinned Post
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`Welcome to ASOTCS!

We want to get to know you. Use this template to introduce yourself:

---

Hey! I'm [Name]

I'm here because...

One thing I'm hoping to get from this community is...

Fun fact about me:

---

Tips:
• Share as much or as little as you want
• Don't overthink it — we just want to meet you!
• Feel free to share what brought you to ASOTCS
• Come back and comment on others' intros — let's connect!

Can't wait to meet you.

— Tonia`}
              </div>
            </div>

            {/* Sofa Conversations */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Sofa Conversations — Pinned Post
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`This is our main hangout space.

Think of it as the living room — where we gather, chat, share, and connect.

**What to post here:**

• Daily check-ins (how are you today?)
• Thoughts, reflections, realizations
• Things you're working through
• Questions for the community
• Random life updates
• Anything that doesn't fit elsewhere

**Weekly prompts:**

Every week, I drop a discussion prompt to get us talking. Look for posts tagged with "Weekly Prompt."

**Guidelines:**

• Be real (that's what we're here for)
• Support each other
• No advice unless asked
• This isn't a crisis line — if you're struggling, please seek professional help

Free members: You can view everything but posting is limited.
VIP members: Full posting access.

Let's talk.`}
              </div>
            </div>

            {/* Weekly Wins */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Weekly Wins — Pinned Post (VIP)
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`Every Friday, this is where we celebrate.

No win is too small:
• Got out of bed on a hard day? WIN.
• Kept one commitment to yourself? WIN.
• Had a hard conversation? WIN.
• Noticed a pattern? WIN.
• Did your minimum viable day? WIN.

**How to participate:**

Every Friday (or whenever you remember), drop your win from the week. One word, one sentence, one paragraph — whatever feels right.

**Why this matters:**

Celebrating wins rewires your brain. It reinforces progress. It builds momentum.

Plus, watching each other win is inspiring.

Let's celebrate together.`}
              </div>
            </div>

            {/* SOFA Check-Ins */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                SOFA Check-Ins — Pinned Post (VIP)
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`This space is for method-specific discussions organized by pillar.

**Self-Reflection shares:**
• Values discoveries
• Honest assessment insights
• Identity shifts
• Journaling reflections

**Observation insights:**
• Pattern recognition
• Trigger mapping
• Blind spots discovered
• Observer mindset wins

**Flow experiments:**
• Energy audit results
• Nervous system discoveries
• Rhythm adjustments
• Regulation wins

**Action accountability:**
• Goal progress
• Habit updates
• Momentum wins
• Comeback stories

**How to use this space:**

1. Start your post with the pillar tag: [Self-Reflection], [Observation], [Flow], or [Action]
2. Share what you're working on, learning, or struggling with
3. Ask questions — we're all learning together
4. Celebrate each other's insights

This is where the real work happens.`}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Challenges — Pinned Post (VIP)
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`Challenges are our group accountability experiences.

**Current Challenges:**
• 7-Day SOFA Reset (ongoing — start anytime)
• 30-Day Foundation Builder (monthly cohorts)

**How to participate:**

1. Join the current challenge thread
2. Commit to the daily/weekly actions
3. Check in with your progress
4. Support your fellow challengers
5. Celebrate at the finish line

**Challenge Guidelines:**
• Start when you're ready
• Done is better than perfect
• Missing a day doesn't disqualify you
• We're all in this together

Check Announcements for new challenge launches.

Let's build momentum together.`}
              </div>
            </div>

            {/* Ask Tonia */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Ask Tonia — Pinned Post (VIP)
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`This space is your direct line to me.

**How it works:**

• Drop your questions here anytime
• I answer questions weekly (usually Thursdays)
• Popular questions may become livestream topics
• You can ask about SOFA Method, the community, or general guidance

**Guidelines:**

• One question per post (helps me stay organized)
• Be specific — the clearer the question, the better the answer
• This isn't therapy — I can't provide clinical advice here
• For urgent matters, please seek professional help

**What you can ask:**

• How to apply the SOFA Method to specific situations
• Clarification on classroom content
• Community-related questions
• General life/mindset questions
• Suggestions for content or topics

I read everything. Looking forward to your questions.

— Tonia`}
              </div>
            </div>

          </div>
        </CollapsibleSection>

        {/* Weekly Posts */}
        <CollapsibleSection title="Weekly Scheduled Posts" badge="7 templates">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Monday — Week Intention (Sofa Conversations)</h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`Happy Monday, Sofa Circle.

New week, new opportunity to show up for yourself.

**This week, my intention is:**

(Drop yours below and let's hold each other accountable.)`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Tuesday — Self-Reflection Prompt (SOFA Check-Ins)</h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`[Self-Reflection Tuesday]

Journal prompt: What's something you've been avoiding that you know you need to face?

Don't have to share it here — just sit with it. Write it out. See what comes up.

If you want to process together, drop it below.`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Wednesday — Midweek Check-In (Sofa Conversations)</h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`Wednesday check-in.

We're halfway through. How's the week going so far?

• What's working?
• What's been hard?
• What do you need for the rest of the week?`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Thursday — Ask Tonia Day (Ask Tonia)</h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`It's Ask Tonia Thursday!

Drop your questions below — I'll be answering them later today.

What do you want to know about the SOFA Method, this community, or anything else I can help with?`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Friday — Weekly Wins (Weekly Wins)</h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`IT'S FRIDAY — WIN TIME!

What's your win from this week?

Big or small. Obvious or subtle. External or internal.

Drop it below. Let's celebrate together.`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Saturday — Weekend Reflection (Sofa Conversations)</h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`Saturday reflection:

As the week winds down, what's one insight you're taking with you?

Something you learned, noticed, or realized.`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Sunday — Sunday Reset (Announcements)</h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`SUNDAY RESET

Welcome to a new week ahead.

Before Monday hits, take a few minutes to:

1. Reflect on last week (what worked, what didn't)
2. Set your intention for this week
3. Review your non-negotiables
4. Check the classroom for any new content
5. Rest — you've earned it

See you in the community tomorrow.

— Tonia`}
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Video Scripts */}
        <CollapsibleSection title="Classroom Video Scripts" badge="Priority videos">
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
              <p className="text-sm"><strong>Recording Tips:</strong></p>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Use your phone or webcam (doesn&apos;t need to be fancy)</li>
                <li>• Natural lighting facing you</li>
                <li>• Speak conversationally — adapt scripts to your voice</li>
                <li>• Batch record multiple videos in one session</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Video className="h-4 w-4" />
                1.1 Welcome to ASOTCS (3-5 min)
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`Hey, welcome to ASOTCS—A Seat on the Counselor's Sofa.

I'm Tonia, and I'm so glad you're here.

If you're watching this, you probably found me because something isn't working. Maybe you're tired of starting over every Monday. Maybe you feel like you're functioning on the outside but falling apart on the inside. Maybe you've tried therapy, coaching, apps, books—and you still end up in the same place.

You're not broken. I promise.

You're just building on a shaky foundation.

That's what ASOTCS is here to fix. This community is built on the SOFA Method—a therapist-informed framework I created after watching hundreds of brilliant women struggle with the same patterns.

SOFA stands for Self-Reflection, Observation, Flow, and Action. Most approaches skip the first three and jump straight to action. We wonder why we can't stick to habits or follow through—it's because we haven't built the foundation first.

In this community, you'll find:
• A safe space to be real (no toxic positivity here)
• Practical tools that actually work
• Women who get it—because they're doing this work too
• And me, showing up consistently to guide you through

Take your time exploring. Introduce yourself in the Introductions space. And remember: there's no rush. Your transformation happens on your timeline.

Your seat is waiting.`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Video className="h-4 w-4" />
                1.4 The SOFA Method Overview (8-10 min)
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`Let's talk about the SOFA Method—the framework that everything in this community is built on.

SOFA stands for:
• S — Self-Reflection
• O — Observation
• F — Flow
• A — Action

Most personal development starts with action. "Wake up at 5am. Journal every day. Meditate for 20 minutes." And we wonder why nothing sticks.

The SOFA Method is different. It builds from the inside out.

**Self-Reflection (S)**

This is where we start. Before you can go anywhere, you need to know where you are.

Self-reflection is about getting honest with yourself. What do you actually value? Not what you were told to value—what YOU value. How aligned is your current life with those values? What lies are you telling yourself daily?

This pillar is uncomfortable. It requires honesty. But it's the foundation everything else is built on.

**Observation (O)**

Once you know yourself, you need to see yourself in action.

Observation is about pattern recognition. What triggers you? What are your automatic responses? What patterns keep showing up that you can't seem to break?

This isn't about judgment—it's about information. You can't change what you can't see.

**Flow (F)**

This pillar is about energy. What fills you up? What drains you? When do you feel most alive?

Flow is about working WITH your natural rhythms instead of against them. It's nervous system regulation. It's creating sustainable structures. It's understanding that willpower is limited, but systems are sustainable.

**Action (A)**

Only now do we get to action. But this isn't random action—it's informed action.

Because you've done the work in the first three pillars, you know:
• What you actually want (Self-Reflection)
• What patterns to watch for (Observation)
• How to structure your days for success (Flow)

Action becomes almost inevitable when the foundation is solid.

**Why This Works**

Most approaches fail because they skip the foundation. They give you the WHAT without the WHY.

The SOFA Method gives you both. And that's why it sticks.

In the following sections, we'll go deep into each pillar. Take your time. Do the exercises. Engage in the community.

Your transformation is waiting.`}
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Full scripts for all 25+ videos are available in the complete documentation. These are the priority scripts to record for launch.
            </p>
          </div>
        </CollapsibleSection>

        {/* Challenge Content */}
        <CollapsibleSection title="7-Day Challenge Posts" badge="8 posts">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Challenge Welcome Post</h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`Welcome to the 7-Day SOFA Reset!

Over the next week, you're going to:
• Get honest about where you are (Days 1-2)
• See patterns you've been missing (Days 3-4)
• Design days that work for you (Days 5-6)
• Take informed action (Day 7)

**How this challenge works:**

1. Each day, a new prompt will be posted here
2. Complete the daily exercise (15-20 minutes)
3. Share your insights in the comments (optional but encouraged)
4. Support your fellow challengers

**What you'll need:**
• A journal or notes app
• 15-20 minutes per day
• Willingness to be honest

**Important:**
• You can start anytime — this challenge is always open
• Progress, not perfection — missing a day doesn't disqualify you

Ready? Comment "I'M IN" below to commit.

Let's reset.

— Tonia`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Day 1: The Honest Assessment</h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`Day 1 is about seeing clearly.

Before we can go anywhere, we need to know where we're starting. Today's exercise requires brutal honesty — no "I'm fine" allowed.

**Today's Exercise (15-20 min):**

**Part 1: Rate yourself 1-10 in these areas:**
• Physical health (energy, fitness, sleep, nutrition): ___
• Emotional wellbeing (mood, mental health, inner peace): ___
• Relationships (quality of connections): ___
• Career/purpose (fulfillment, growth): ___
• Finances (security, freedom): ___
• Joy/fun (play, things that light you up): ___

**Part 2: Answer honestly:**
1. What's the biggest lie you tell yourself daily?
2. What are you tolerating that you shouldn't be?
3. Complete: "If I'm being real, what I actually need right now is..."

**Part 3: Reflection**
Look at your ratings. Where's the biggest gap between where you are and where you want to be?

**Share below:**
One insight from today's assessment. What surprised you?

See you tomorrow for Day 2.

— Tonia`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Day 2: The Values Audit</h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`Day 2 is about knowing what matters.

We often live by inherited values — things we were told to care about. Today, we discover what YOU actually value.

**Today's Exercise (20 min):**

**Part 1: Circle all values that resonate:**
Freedom, Security, Adventure, Stability, Connection, Independence, Creativity, Structure, Growth, Comfort, Achievement, Peace, Family, Career, Health, Wealth, Fun, Purpose, Authenticity, Recognition, Service, Self-care, Spirituality, Community, Learning, Rest, Impact, Balance

**Part 2: Narrow to your top 5 core values:**
1. ___
2. ___
3. ___
4. ___
5. ___

**Part 3: Rate alignment (1-10) for each:**
How aligned is your current life with each value?

**Part 4: Reflection**
Where's the biggest gap? That gap is where your frustration lives.

**Share below:**
Your top 3 values and how aligned you currently feel with one of them.

Tomorrow we move to Observation.

— Tonia`}
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Days 3-7 follow the same format. Full challenge content with all 7 days is available in the complete documentation.
            </p>
          </div>
        </CollapsibleSection>

        {/* Email Sequences */}
        <CollapsibleSection title="Email Sequences" badge="10 emails">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Welcome Email 1: Guide Delivery (Immediate)
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm">
                <p><strong>Subject:</strong> Your SOFA Reset Guide is here</p>
                <p><strong>Preview:</strong> Plus a quick note before you dive in...</p>
                <div className="mt-3 whitespace-pre-wrap">
{`Hey {first_name},

Your 7-Day SOFA Reset Guide is attached. (You can also [download it here] if the attachment doesn't load.)

Before you dive in, I want to share something:

This guide works. But only if you actually use it.

I know that sounds obvious—but I've watched thousands of women download guides, save posts, and screenshot tips... only to never look at them again.

So here's my ask: Block 15 minutes tomorrow morning to do Day 1.

That's it. Just Day 1. You can decide what to do after that.

The women who see real transformation aren't the ones who consume the most content. They're the ones who implement—even imperfectly.

I'm rooting for you.

— Tonia

P.S. If you want accountability and community while you work through the guide, join us in the free community. It's where the real magic happens.`}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Welcome Email 2: The Insight Email (Day 2)
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm">
                <p><strong>Subject:</strong> The real reason you feel stuck</p>
                <p><strong>Preview:</strong> It&apos;s not what you think...</p>
                <div className="mt-3 whitespace-pre-wrap">
{`Hey {first_name},

Can I tell you something most "self-help" won't?

The reason you feel stuck isn't because you don't know enough.

It's not because you lack motivation.

It's not because something is wrong with you.

The reason you feel stuck is because you're building on a shaky foundation.

You keep trying to add habits, goals, and routines on top of patterns you haven't even examined yet. It's like putting fresh paint on a cracked wall—it might look good for a minute, but the cracks always show through.

That's why the SOFA Method starts with Self-Reflection and Observation before we ever get to Action.

Most approaches have it backwards. They want you to DO more. I want you to SEE more first.

Have you started Day 1 of the guide yet?

If not, today's the day. It takes 15 minutes. And it might be the most honest conversation you've had with yourself in months.

[Open your guide and start Day 1 →]

— Tonia`}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Welcome Email 5: The Invitation (Day 7)
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm">
                <p><strong>Subject:</strong> Your next step (when you&apos;re ready)</p>
                <p><strong>Preview:</strong> This is what &quot;going deeper&quot; looks like</p>
                <div className="mt-3 whitespace-pre-wrap">
{`Hey {first_name},

You've had the guide for a week now.

Maybe you've worked through all 7 days. Maybe you're still on Day 1. Maybe you saved it to "read later" (no judgment—I have a folder of those too).

Wherever you are, I want you to know: there's no deadline on transformation.

But I also know that momentum matters. And right now, you're closer to change than you might realize.

So here's my invitation:

If you're ready to go deeper—with structure, accountability, and a community of women doing this work together—the Sofa Circle is waiting for you.

Here's what you get:
• Complete SOFA Method modules (way deeper than the guide)
• Weekly challenges to keep you moving forward
• A community that actually engages (not just another dead group)
• Live sessions with me + lifetime replays
• Resource library (journals, trackers, templates)
• Accountability that doesn't feel like pressure

Right now, we're accepting Founding Members at $37/month (locked in forever).

When we open to the public, the price goes to $47. Founding Members keep their rate forever.

[Become a Founding Member →]

Or if you're not ready for VIP, join the free community and start there. No pressure either way.

I'm just glad you're here.

— Tonia

P.S. Have questions? Just hit reply. I answer everything personally.`}
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Full 5-email welcome sequence + 5-email launch sequence available in complete documentation.
            </p>
          </div>
        </CollapsibleSection>

        {/* Ad Copy */}
        <CollapsibleSection title="Ad Copy for Meta Ads" badge="10 variations">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Video Script 1: The Pattern Interrupt (15-30 sec)</h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`[HOOK - First 3 seconds]
"Stop trying to fix yourself."

[PROBLEM - 3-12 seconds]
"You're not broken. You don't need another habit tracker or morning routine. What you need is a foundation."

[SOLUTION - 12-22 seconds]
"I'm a therapist, and I created the SOFA Method to help women stop surviving and start actually living. It's therapist-informed without the therapy prices."

[CTA - 22-30 seconds]
"Download the free guide to start your reset. Link in bio."`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Static Ad Copy 1: Problem-Focused</h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`If you're functioning on the outside but falling apart on the inside, you're not alone.

You don't need another productivity hack or "just push through" advice.

You need a foundation.

The SOFA Method is a therapist-informed framework for women who are tired of surviving and ready to actually thrive.

✓ No toxic positivity
✓ No unrealistic routines
✓ Just practical tools that actually work

Download the free 7-Day Reset Guide to get started. 👇

---
Headline: You're Not Broken. You Just Need a Foundation.
Description: Free therapist-created guide. No fluff.
CTA Button: Download`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Static Ad Copy 6: Urgency (Founding Member)</h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`🚨 Founding Member pricing closes soon

The Sofa Circle is officially open—and the first 100 members lock in $37/month FOREVER.

After that, the price goes to $47.

What you get:
→ Full SOFA Method curriculum
→ Weekly challenges + accountability
→ Live sessions + replays
→ Resource library
→ A community that actually shows up

Same membership. Lower price. Limited spots.

Don't wait and pay more later.

---
Headline: Lock In $37/month Forever (Before Price Increases)
Description: Only 100 founding spots available
CTA Button: Claim Your Spot`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Targeting Recommendations</h4>
              <div className="bg-muted p-4 rounded-lg text-sm">
                <p className="font-medium mb-2">Cold Audiences:</p>
                <ul className="space-y-1 mb-4">
                  <li>• Women 25-45, interests: self-improvement, mental health, wellness, mindfulness</li>
                  <li>• Women 25-45, interests: Brené Brown, therapy, Psychology Today</li>
                  <li>• Women 28-45, interests: burnout recovery, stress management, self-care</li>
                </ul>
                <p className="font-medium mb-2">Retargeting:</p>
                <ul className="space-y-1">
                  <li>• Instagram engagers (180 days)</li>
                  <li>• Website visitors (180 days)</li>
                  <li>• Video viewers (50%+, 75%+)</li>
                  <li>• Lead magnet downloaders</li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Resource Templates */}
        <CollapsibleSection title="Resource Templates (Convert to PDF)" badge="11 templates">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Download className="h-4 w-4" />
                Weekly Planning Template
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`SOFA-ALIGNED WEEKLY PLANNER

Week of: _______________

WEEKLY INTENTION
What's my ONE focus for this week?
_______________________________________

How does this align with my values?
_______________________________________

LIFE WHEEL QUICK CHECK (1-10)
Physical: ___  |  Emotional: ___  |  Relationships: ___
Career: ___   |  Finances: ___   |  Joy: ___

PATTERN I'M WATCHING FOR:
_______________________________________

TRIGGER I'M PREPARED FOR:
_______________________________________

MY RESPONSE PLAN:
_______________________________________

NON-NEGOTIABLES THIS WEEK:
           Mon  Tue  Wed  Thu  Fri  Sat  Sun
1. ___     [ ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]
2. ___     [ ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]
3. ___     [ ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]

MICRO-HABIT TRACKER:
Habit: _______________________
Trigger: After I ___, I will ___
Mon [ ]  Tue [ ]  Wed [ ]  Thu [ ]  Fri [ ]  Sat [ ]  Sun [ ]

END OF WEEK REFLECTION:
What went well? _______________
What did I learn? _______________
What will I do differently? _______________
This week's WIN: _______________`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Download className="h-4 w-4" />
                Trigger Map Template
              </h4>
              <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
{`TRIGGER MAP

TRIGGER 1: _______________
Physical sensation: _______________
Automatic thought: _______________
Emotional response: _______________
Behavioral response: _______________
Origin/source: _______________
Real or perceived threat?: _______________
Regulated response option: _______________

IF-THEN PLAN:
IF this trigger happens, THEN I will:
_______________________________________

TRIGGER 2: _______________
Physical sensation: _______________
Automatic thought: _______________
Emotional response: _______________
Behavioral response: _______________
Origin/source: _______________
Real or perceived threat?: _______________
Regulated response option: _______________

IF-THEN PLAN:
IF this trigger happens, THEN I will:
_______________________________________

[Repeat for Triggers 3-5]`}
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Use Canva to design these templates with your branding. Template suggestions: &quot;Workbook&quot; or &quot;Planner&quot; templates.
            </p>
          </div>
        </CollapsibleSection>

        {/* Footer */}
        <div className="mt-12 p-6 bg-primary/5 rounded-lg text-center">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Contact your consultant if you have questions or get stuck.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://asotcs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              View Live Site <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://skool.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              Go to Skool <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          This page is not linked from the main site. Bookmark this URL: /admin
        </p>
      </div>
    </div>
  );
}
