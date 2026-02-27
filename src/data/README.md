# Content Data Layer

All frequently-changing content lives in this folder as TypeScript data files. This decouples content from React components, making updates straightforward without touching UI code.

## Files

| File | Purpose |
|---|---|
| `training-content.ts` | Chapter metadata, marketplace data, HAI teams, Handshake values, speed targets, tech stack tools, EPD org structure, resource links |
| `mock-headcount.ts` | Static demo data for the headcount tracker mockup |

## How to Update Content

1. Edit the relevant data in `training-content.ts`
2. Push to GitHub (Lovable auto-deploys from the connected repo)
3. Changes go live immediately — no component code changes needed

## Content Freshness

Each chapter in `training-content.ts` has a `lastUpdated` field. Update this date whenever you refresh that chapter's content. The Admin Dashboard tracks these dates for staleness alerts.

## Future: Notion Sync

The long-term plan is to build a build-time script that pulls content from Notion pages and writes it into these data files. This would enable non-technical content owners to update the hub by editing Notion pages, with changes flowing automatically on deploy.

Pattern: `Notion API → Build Script → training-content.ts → Lovable Deploy`
