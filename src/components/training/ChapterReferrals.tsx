import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const bonusTable = [
  { country: "United States", currency: "USD ($)", amount: "$3,000" },
  { country: "United Kingdom", currency: "GBP (£)", amount: "£2,250" },
  { country: "India", currency: "INR (₹)", amount: "₹45,400" },
];

export function ChapterReferrals() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-fun-coral/10 text-fun-coral mb-3">
          Chapter 4
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Submitting a Referral
        </h1>
        <p className="mt-2 text-muted-foreground">
          How to refer candidates through Ashby — step by step.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Step-by-Step in Ashby</h2>
        <div className="space-y-3">
          {[
            { step: 1, title: "Log into Ashby", detail: "Go to app.ashbyhq.com and sign in with your Handshake credentials.", color: "bg-fun-sky" },
            { step: 2, title: "Navigate to Referrals", detail: "Find the Referrals section on your Home dashboard. You can also click \"+Add\" in the upper right corner and select \"+Referral\".", color: "bg-fun-violet" },
            { step: 3, title: "Select the Job", detail: "Choose the appropriate role from the drop-down menu.", color: "bg-fun-emerald" },
            { step: 4, title: "Fill in Candidate Details", detail: "Complete the referral form with all required candidate information, including email and phone number.", color: "bg-fun-amber" },
            { step: 5, title: "Add Your Relationship Context", detail: "Describe how you know this person and why they'd be a great fit. This helps recruiters prioritize and personalize outreach.", color: "bg-fun-coral" },
            { step: 6, title: "Submit & Track", detail: "Click submit. You can track your referral's status in the Referrals section of your main dashboard.", color: "bg-fun-indigo" },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${item.color} text-white text-sm font-bold`}>
                {item.step}
              </div>
              <div>
                <p className="font-bold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://www.notion.so/handshake/Referrals-and-Referral-Links"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
        >
          Full referral guide on Notion
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Best Practices</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { title: "Think Broadly", desc: "Refer people from different backgrounds and experiences to help build a stronger, more inclusive team.", color: "border-t-4 border-t-fun-sky" },
            { title: "Get Consent", desc: "Always get consent from your referral before submitting their information.", color: "border-t-4 border-t-fun-violet" },
            { title: "Social Media Shares", desc: "If sharing job posts on social media, ask interested people to DM you so you can submit them as referrals in Ashby.", color: "border-t-4 border-t-fun-amber" },
            { title: "Track in Ashby", desc: "You can check the status of all your referrals in the Ashby referrals dashboard at any time.", color: "border-t-4 border-t-fun-emerald" },
          ].map((item) => (
            <Card key={item.title} className={`${item.color} border-border/60`}>
              <CardContent className="pt-5">
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">💰 Referral Bonus</h2>
        <div className="rounded-xl bg-gradient-to-r from-fun-emerald/8 to-fun-amber/8 border border-fun-emerald/15 p-4">
          <p className="text-sm text-foreground leading-relaxed">
            If your referral is hired for a full-time position, you'll receive a bonus after they've completed <strong className="text-fun-emerald">90 days</strong> of employment.
          </p>
        </div>
        <Card className="border-border/60">
          <CardContent className="pt-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4 font-bold text-foreground">Country</th>
                    <th className="text-left py-2 pr-4 font-bold text-foreground">Currency</th>
                    <th className="text-left py-2 font-bold text-foreground">Bonus Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {bonusTable.map((row) => (
                    <tr key={row.country} className="border-b last:border-0">
                      <td className="py-2.5 pr-4 text-muted-foreground">{row.country}</td>
                      <td className="py-2.5 pr-4 text-muted-foreground">{row.currency}</td>
                      <td className="py-2.5 font-bold text-fun-emerald">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Eligibility & Fine Print</h2>
        <div className="rounded-xl border-2 border-dashed border-border p-5 space-y-2 text-sm text-muted-foreground">
          <p><span className="inline-block px-2 py-0.5 rounded-full bg-fun-emerald/10 text-fun-emerald text-xs font-bold mr-1">Eligible</span> All full-time employees.</p>
          <p><span className="inline-block px-2 py-0.5 rounded-full bg-fun-coral/10 text-fun-coral text-xs font-bold mr-1">Not eligible</span> Executive Team (Sr. Directors+), Recruiting Team, and HMs for their own roles.</p>
          <p>Only referrals submitted directly in Ashby qualify. Bonuses are subject to taxes and paid during regular payroll. First submission in Ashby gets the bonus. No cap on how many you can earn.</p>
          <p>Questions? Final decisions are made by <strong className="text-foreground">Talent Leadership</strong>.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">🔗 Pro Tip: Referral Links</h2>
        <div className="rounded-xl bg-fun-indigo/5 border border-fun-indigo/15 p-4">
          <p className="text-sm text-foreground leading-relaxed">
            Create a <strong className="text-fun-indigo">Referral Link</strong> in Ashby (Home → Referrals → Create Referral Link) to share with your network. 
            Optionally tie it to a specific job posting. Anyone who applies through your link is automatically tagged as your referral.
          </p>
        </div>
      </section>
    </div>
  );
}
