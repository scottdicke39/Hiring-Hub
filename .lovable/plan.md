

## Hiring Manager Portal & Documentation Command Center

A Handshake-branded web app that serves three purposes: (1) train new hiring managers on current recruiting processes, (2) give them a live view of their headcount requests, and (3) help you (Scott) keep documentation current and consistent.

---

### 🎓 Section 1: Hiring Manager Training Guide

A clean, scrollable guide organized into chapters — sourced exclusively from your post-June 2025 Notion documentation. This becomes the **canonical version** managers are pointed to, eliminating confusion from old Confluence docs or archived Notion pages.

**Chapters:**

1. **How Recruiting Works at Handshake** — Your recruiting philosophy (clarity, speed, evidence), team structure (Scott, Ramiro, Jamie), and how Core vs. HAI recruiting works

2. **Submitting a Headcount Request** — The web form (recommended) and Slack `/request-headcount` flow, stages (Triage → Finance Review → Approved → Opened in Ashby → Hired), CFO Friday review cycle, FIN ID fast-track, and notification settings

3. **The Intake Meeting** — Pre-meeting prep (competencies bank, intake form, BrightHire module), the meeting agenda (business context, success milestones, ICP, interview design), and post-meeting deliverables (Ashby interview plan, playbook)

4. **Submitting a Referral** — Step-by-step Ashby referral flow with the current screenshots, best practices, and what happens after submission

5. **Our Tech Stack** — Quick reference cards for Ashby, BrightHire, CodeSignal, Noon.ai, LinkedIn Recruiter — what each does and when you'll interact with it

6. **Your Role as Hiring Manager** — Key responsibilities: timely feedback (24hrs), debrief participation, offer collaboration, and how to request a LinkedIn Recruiter seat

---

### 📊 Section 2: My Headcount Tracker

Personalized dashboard where hiring managers log in with **Google SSO** and see their open roles pulled live from the **Linear API** (Domain Recruiting team).

**Features:**
- **Google SSO Login** — Authenticate with Handshake Google Workspace email
- **My Open Roles** — Cards showing each headcount request with status (Triage → Finance Review → Approved → Opened in Ashby → Hired), role title, department, recruiter assigned
- **Status Timeline** — Visual progress bar showing where each request sits
- **Role Details** — Click into a role for full details: Ashby link, Linear link, FIN ID, coordinator, hiring manager
- **Filtering** — Filter by status (active, completed, canceled)

---

### 📋 Section 3: Documentation Health Dashboard (Admin Only)

A lightweight admin view for you to track which docs are current, which need updating, and spot inconsistencies. This addresses the documentation drift problem you identified.

**Features:**
- **Content Registry** — List of all training topics with their source Notion page, last updated date, and a "needs review" flag
- **Staleness Alerts** — Highlight any content that hasn't been reviewed in 90+ days
- **Confluence Retirement Checklist** — Track which old Confluence docs have been fully replaced by Notion equivalents (using the 7 docs you uploaded as the starting list)
- **Consistency Notes** — A simple notes field per topic where you can flag things that seem out of sync (e.g., "Intake form link in Notion differs from what's in the web form")

---

### 🎨 Design & Branding

- Handshake coral/red color palette
- Clean, modern layout with Handshake logo
- Mobile-friendly for checking headcount status on the go
- Top navigation: **Training Guide** | **My Headcount** | **Admin** (admin only)

---

### 🔧 What's Needed

- **Supabase** for Google SSO authentication and edge functions
- **Linear API integration** (via Supabase edge function) for live headcount data
- **No database tables initially** — headcount data from Linear, training content hardcoded from your current Notion docs, doc health registry stored in a simple Supabase table
- Content will be sourced exclusively from your post-June 2025 Notion documentation

