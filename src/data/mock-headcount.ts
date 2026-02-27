export type HeadcountStatus = "Triage" | "Finance Review" | "Approved" | "Opened in Ashby" | "Hired" | "Canceled";

export interface HeadcountRequest {
  id: string;
  title: string;
  department: string;
  level: string;
  status: HeadcountStatus;
  recruiter: string;
  dateSubmitted: string;
  finId: string;
  location: string;
}

export const PIPELINE_STAGES: HeadcountStatus[] = [
  "Triage",
  "Finance Review",
  "Approved",
  "Opened in Ashby",
  "Hired",
];

export const stageColors: Record<HeadcountStatus, { bg: string; text: string; dot: string }> = {
  "Triage": { bg: "bg-fun-sky/10", text: "text-fun-sky", dot: "bg-fun-sky" },
  "Finance Review": { bg: "bg-fun-amber/10", text: "text-fun-amber", dot: "bg-fun-amber" },
  "Approved": { bg: "bg-fun-emerald/10", text: "text-fun-emerald", dot: "bg-fun-emerald" },
  "Opened in Ashby": { bg: "bg-fun-violet/10", text: "text-fun-violet", dot: "bg-fun-violet" },
  "Hired": { bg: "bg-fun-coral/10", text: "text-fun-coral", dot: "bg-fun-coral" },
  "Canceled": { bg: "bg-muted", text: "text-muted-foreground", dot: "bg-muted-foreground" },
};

export const mockHeadcount: HeadcountRequest[] = [
  {
    id: "HC-001",
    title: "Senior Software Engineer",
    department: "Engineering — Network",
    level: "L5",
    status: "Opened in Ashby",
    recruiter: "Technical Recruiter",
    dateSubmitted: "2026-01-15",
    finId: "FY26NET102",
    location: "San Francisco / Remote",
  },
  {
    id: "HC-002",
    title: "Staff ML Engineer",
    department: "Data — Recruiting ML",
    level: "L6",
    status: "Approved",
    recruiter: "Technical Recruiter",
    dateSubmitted: "2026-02-01",
    finId: "FY26DAT045",
    location: "San Francisco",
  },
  {
    id: "HC-003",
    title: "Product Manager",
    department: "Product — Fellow Experience",
    level: "L5",
    status: "Finance Review",
    recruiter: "Business Recruiter",
    dateSubmitted: "2026-02-10",
    finId: "FY26HAI088",
    location: "San Francisco / Remote",
  },
  {
    id: "HC-004",
    title: "Strategic Projects Lead",
    department: "Handshake AI — Operations",
    level: "L4",
    status: "Hired",
    recruiter: "Operations Recruiter",
    dateSubmitted: "2025-12-05",
    finId: "FY26HAI031",
    location: "Remote",
  },
  {
    id: "HC-005",
    title: "Account Executive",
    department: "Employer Revenue — Sales",
    level: "L4",
    status: "Triage",
    recruiter: "GTM Recruiter",
    dateSubmitted: "2026-02-20",
    finId: "FY26GTM112",
    location: "New York / Chicago",
  },
  {
    id: "HC-006",
    title: "Senior Product Designer",
    department: "Design — Network",
    level: "L5",
    status: "Opened in Ashby",
    recruiter: "Business Recruiter",
    dateSubmitted: "2026-01-28",
    finId: "FY26DES019",
    location: "San Francisco",
  },
  {
    id: "HC-007",
    title: "Education Success Manager",
    department: "Education — Partnerships",
    level: "L4",
    status: "Canceled",
    recruiter: "GTM Recruiter",
    dateSubmitted: "2026-01-10",
    finId: "FY26EDU007",
    location: "Remote",
  },
];
