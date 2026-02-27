import {
  BookOpen,
  FileText,
  Users,
  Send,
  Cpu,
  UserCheck,
  Building2,
  LinkIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ChapterMeta {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  lastUpdated: string;
}

export const chapters: ChapterMeta[] = [
  {
    id: "how-recruiting-works",
    title: "How Recruiting Works",
    icon: BookOpen,
    description: "Philosophy, team structure, Careers marketplace & Handshake AI",
    color: "sky",
    lastUpdated: "2026-02-27",
  },
  {
    id: "headcount-request",
    title: "Submitting a Headcount Request",
    icon: FileText,
    description: "Web form, Slack flow, approval stages, and notifications",
    color: "violet",
    lastUpdated: "2026-02-27",
  },
  {
    id: "intake-meeting",
    title: "The Intake Meeting",
    icon: Users,
    description: "Prep, agenda, values, speed targets, and post-meeting deliverables",
    color: "emerald",
    lastUpdated: "2026-02-27",
  },
  {
    id: "referrals",
    title: "Submitting a Referral",
    icon: Send,
    description: "Ashby referral flow, best practices, and bonus details",
    color: "coral",
    lastUpdated: "2026-02-27",
  },
  {
    id: "tech-stack",
    title: "Our Tech Stack",
    icon: Cpu,
    description: "Ashby, BrightHire, CodeSignal, Noon.ai, LinkedIn Recruiter",
    color: "indigo",
    lastUpdated: "2026-02-27",
  },
  {
    id: "hiring-manager-role",
    title: "Your Role as Hiring Manager",
    icon: UserCheck,
    description: "Feedback, debriefs, offers, and LinkedIn Recruiter seats",
    color: "amber",
    lastUpdated: "2026-02-27",
  },
  {
    id: "epd-teams",
    title: "EPD Teams & Squads",
    icon: Building2,
    description: "HAI, Careers, Data, and Infra org structure",
    color: "teal",
    lastUpdated: "2026-02-27",
  },
  {
    id: "resources",
    title: "People OS — Resources",
    icon: LinkIcon,
    description: "Quick links to recruiting, interviewing, and people resources",
    color: "rose",
    lastUpdated: "2026-02-27",
  },
];

// --- Chapter 1: Marketplace sides ---

export interface MarketplaceSide {
  side: string;
  stat: string;
  statLabel: string;
  desc: string;
  color: string;
  badge: string;
}

export const marketplaceSides: MarketplaceSide[] = [
  {
    side: "Students & Early Talent",
    stat: "20M+",
    statLabel: "knowledge workers",
    desc: "Career discovery, job matching, upskilling, and professional networking for the next generation of the workforce.",
    color: "border-t-4 border-t-fun-sky",
    badge: "bg-fun-sky/10 text-fun-sky",
  },
  {
    side: "Educational Institutions",
    stat: "1,600+",
    statLabel: "universities",
    desc: "Career centers powering student outcomes. 92% of US four-year universities use Handshake to connect students with opportunity.",
    color: "border-t-4 border-t-fun-emerald",
    badge: "bg-fun-emerald/10 text-fun-emerald",
  },
  {
    side: "Employers",
    stat: "1M+",
    statLabel: "employers",
    desc: "Early talent recruiting platform trusted by 100% of the Fortune 50. From campus recruiting to employer branding.",
    color: "border-t-4 border-t-fun-violet",
    badge: "bg-fun-violet/10 text-fun-violet",
  },
];

// --- Chapter 1: HAI teams ---

export interface HaiTeam {
  team: string;
  desc: string;
  color: string;
}

export const haiTeams: HaiTeam[] = [
  { team: "Operations", desc: "Delivery pods (SPLs, Delivery Leads, Pod Leads) managing end-to-end project execution for lab partners", color: "border-t-4 border-t-fun-coral" },
  { team: "Growth", desc: "Fellow acquisition, onboarding, and marketplace scaling to build the supply side", color: "border-t-4 border-t-fun-amber" },
  { team: "Engineering", desc: "Annotation tooling, operator experience, and fellow experience products", color: "border-t-4 border-t-fun-sky" },
  { team: "Research (HART)", desc: "Data quality, evaluation benchmarks, and data value research", color: "border-t-4 border-t-fun-violet" },
  { team: "Engagement Mgmt", desc: "Customer relationships and partnerships with AI labs", color: "border-t-4 border-t-fun-emerald" },
];

// --- Chapter 3: Handshake values ---

export interface HandshakeValue {
  value: string;
  anchor: string;
  color: string;
}

export const handshakeValues: HandshakeValue[] = [
  { value: "Students First", anchor: "Mission-driven, user-first thinking", color: "border-l-4 border-l-fun-sky" },
  { value: "Olympic Pace", anchor: "Speed, urgency, and energy in execution", color: "border-l-4 border-l-fun-coral" },
  { value: "Own the Outcome", anchor: "End-to-end accountability for results", color: "border-l-4 border-l-fun-emerald" },
  { value: "Invent and Reinvent", anchor: "Challenge assumptions, bring new ideas", color: "border-l-4 border-l-fun-violet" },
  { value: "Leave Nothing to Chance", anchor: "Thorough, polished, risk-aware execution", color: "border-l-4 border-l-fun-amber" },
];

// --- Chapter 3: Speed targets ---

export interface SpeedTarget {
  stage: string;
  target: string;
  color: string;
}

export const speedTargets: SpeedTarget[] = [
  { stage: "Application → Recruiter Screen", target: "48 hours", color: "bg-fun-sky" },
  { stage: "Recruiter Screen → HM Screen", target: "3 business days", color: "bg-fun-violet" },
  { stage: "HM Screen → Onsite", target: "5 business days", color: "bg-fun-emerald" },
  { stage: "Onsite → Debrief", target: "< 24 hours", color: "bg-fun-amber" },
  { stage: "Application → Offer", target: "14–21 days total", color: "bg-fun-coral" },
];

// --- Chapter 5: Tools ---

export interface RecruitingTool {
  name: string;
  category: string;
  color: string;
  description: string;
  youllUseItFor: string;
  learnMore?: { label: string; url: string };
  tips?: string[];
}

export const recruitingTools: RecruitingTool[] = [
  {
    name: "Ashby",
    category: "ATS",
    color: "bg-fun-indigo/10 text-fun-indigo",
    description: "Our applicant tracking system. Manages job postings, candidate pipeline, interview scheduling, scorecards, and offers.",
    youllUseItFor: "Reviewing candidates in your pipeline, submitting referrals from the Home page, completing interview scorecards, and tracking role progress on the Jobs Dashboard.",
    learnMore: { label: "Ashby Hiring Manager Guide", url: "https://docs.ashbyhq.com/getting-started-for-hiring-managers" },
    tips: [
      "Bookmark the Jobs Dashboard (Jobs → Dashboard) for a quick overview of all your active roles",
      "Use Application Review to bulk-review and advance or archive candidates",
      "Set up your notification preferences in Personal Settings so you never miss a candidate update",
    ],
  },
  {
    name: "BrightHire",
    category: "Interview Intelligence",
    color: "bg-fun-emerald/10 text-fun-emerald",
    description: "Records and transcribes interviews. Provides structured interview guides and AI-powered question analysis.",
    youllUseItFor: "Intake meetings (recorded via BrightHire), structured interview guides for your panels, and reviewing interview clips.",
  },
  {
    name: "CodeSignal",
    category: "Technical Assessments",
    color: "bg-fun-violet/10 text-fun-violet",
    description: "Standardized technical assessments used in ~44% of roles. CodeSignal offers validated \"Frameworks\" — pre-built assessments maintained by their expert team covering coding, data analytics, system design, ML, and more.",
    youllUseItFor: "Your recruiter selects the appropriate assessment. You'll review results (scores + coding reports) in the candidate's Ashby profile. For AI/ML roles, Cosmo — CodeSignal's AI assistant — can be enabled to evaluate how candidates leverage AI tools while coding.",
    learnMore: { label: "What are CodeSignal Frameworks?", url: "https://support.codesignal.com/hc/en-us/articles/4413651969431-What-are-Frameworks" },
    tips: [
      "Scoring is benchmarked against both Handshake and other CodeSignal customers for objective evaluation",
      "Questions are rotated and adjusted to prevent test answers from being shared online",
      "Cosmo (AI copilot) can be enabled to see how candidates use AI tools — the full conversation is logged for your review",
    ],
  },
  {
    name: "Noon.ai",
    category: "AI Sourcing",
    color: "bg-fun-amber/10 text-fun-amber",
    description: "AI-powered candidate sourcing that identifies and engages passive candidates matching your role's ICP.",
    youllUseItFor: "No direct interaction needed — your recruiter manages Noon.ai sourcing. You may see candidates tagged as 'Noon.ai sourced' in Ashby.",
  },
  {
    name: "LinkedIn Recruiter",
    category: "Sourcing",
    color: "bg-fun-sky/10 text-fun-sky",
    description: "Primary channel for sourcing passive candidates. Provides InMail, advanced search, and pipeline management.",
    youllUseItFor: "You can request a LinkedIn Recruiter seat to help source candidates for your roles. See Chapter 6 for how to request one.",
  },
];

// --- Chapter 7: EPD business units ---

export interface EpdSquad {
  name: string;
  product: string;
  design: string;
  eng: string;
  squads: string[];
}

export interface EpdBusinessUnit {
  name: string;
  badge: string;
  accent: string;
  squadColor: string;
  teams: EpdSquad[];
}

export const epdBusinessUnits: EpdBusinessUnit[] = [
  {
    name: "Handshake AI (HAI)",
    badge: "bg-fun-indigo/10 text-fun-indigo",
    accent: "border-t-4 border-t-fun-indigo",
    squadColor: "bg-fun-indigo/8 text-fun-indigo",
    teams: [
      { name: "Model Enablement", product: "Product Lead", design: "Design Lead", eng: "Eng Lead", squads: ["Annotations & Delivery Ops", "Forward Deployed Engineering", "Reinforcement Learning Environment", "Coding", "Quality"] },
      { name: "Fellow Experience", product: "Product Lead", design: "Design Lead", eng: "Eng Lead", squads: ["Conversion to HAI", "Allocation", "Fellow Development", "Pay"] },
      { name: "Research", product: "—", design: "—", eng: "Eng Lead", squads: ["Benchmarks", "Post Training"] },
    ],
  },
  {
    name: "Careers",
    badge: "bg-fun-emerald/10 text-fun-emerald",
    accent: "border-t-4 border-t-fun-emerald",
    squadColor: "bg-fun-emerald/8 text-fun-emerald",
    teams: [
      { name: "Network", product: "Product Lead", design: "Design Lead", eng: "Eng Lead", squads: ["Acquisition & Identity", "Consumer Experience", "iOS", "Android", "Notifications", "EDU"] },
      { name: "Recruiting", product: "Product Lead", design: "Open HC", eng: "Eng Lead", squads: ["Employer", "Promotions"] },
    ],
  },
  {
    name: "Data",
    badge: "bg-fun-amber/10 text-fun-amber",
    accent: "border-t-4 border-t-fun-amber",
    squadColor: "bg-fun-amber/8 text-fun-amber",
    teams: [
      { name: "Data", product: "—", design: "—", eng: "Eng Lead", squads: ["Data & ML Platform", "Data Science & Analytics Eng", "Network & Core ML", "Recruiting ML", "HAI Marketplace Optimization"] },
    ],
  },
  {
    name: "Infra & Platform",
    badge: "bg-fun-violet/10 text-fun-violet",
    accent: "border-t-4 border-t-fun-violet",
    squadColor: "bg-fun-violet/8 text-fun-violet",
    teams: [
      { name: "Infra & Platform", product: "—", design: "—", eng: "Eng Lead", squads: ["Backend Platform (BEP)", "Frontend Platform (FEP)", "Cloud Engineering", "Cloud Security"] },
    ],
  },
];

// --- Chapter 8: Resource links ---

export interface ResourceLink {
  label: string;
  desc: string;
  url: string;
}

export interface ResourceSection {
  title: string;
  color: string;
  dot: string;
  items: ResourceLink[];
}

export const resourceSections: ResourceSection[] = [
  {
    title: "Recruiting Resources",
    color: "text-fun-sky",
    dot: "bg-fun-sky",
    items: [
      { label: "Hiring Manager Resources", desc: "Your one-stop hub for all HM resources", url: "https://www.notion.so/handshake/2a8a2996f6d6814d91ced25f2e0e07d4" },
      { label: "How to Submit a Headcount Request", desc: "Step-by-step guide for requesting new headcount", url: "https://www.notion.so/handshake/2caa2996f6d68088a3ecf17233404a44" },
      { label: "Opening a Role", desc: "Step-by-step guide to opening a new role", url: "https://www.notion.so/handshake/2b3a2996f6d6814ba83fd854939d5faa" },
      { label: "Referral Program", desc: "How to submit referrals and program details", url: "https://www.notion.so/handshake/Referrals-and-Referral-Links" },
    ],
  },
  {
    title: "Interviewer Resources",
    color: "text-fun-violet",
    dot: "bg-fun-violet",
    items: [
      { label: "Intake Meetings", desc: "What to expect and how to prepare for intake meetings", url: "https://www.notion.so/handshake/2b3a2996f6d681bdb47fe2b7d6436c13" },
      { label: "Interview Guidelines", desc: "Handshake's official interview guidelines and policies", url: "https://www.notion.so/handshake/2b3a2996f6d681c3b496c42d8512a702" },
      { label: "BrightHire Guide", desc: "How to use BrightHire for recorded, structured interviews", url: "https://support.brighthire.ai/en/" },
    ],
  },
  {
    title: "Hiring Manager Resources",
    color: "text-fun-emerald",
    dot: "bg-fun-emerald",
    items: [
      { label: "Ashby HM Guide", desc: "Getting started with Ashby as a hiring manager", url: "https://docs.ashbyhq.com/getting-started-for-hiring-managers" },
      { label: "Going to Offer", desc: "The offer process and what to prepare", url: "https://www.notion.so/handshake/2b3a2996f6d6814ba83fd854939d5faa" },
      { label: "Ashby Job Dashboard", desc: "Real-time pipeline data for each of your jobs", url: "https://docs.ashbyhq.com/job-dashboard" },
    ],
  },
  {
    title: "People Resources",
    color: "text-fun-rose",
    dot: "bg-fun-rose",
    items: [
      { label: "Handshake Careers", desc: "See all open roles at Handshake", url: "https://joinhandshake.com/careers/" },
      { label: "Handshake Blog", desc: "Company news, culture, and insights", url: "https://joinhandshake.com/blog/" },
    ],
  },
];
