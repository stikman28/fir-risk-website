---
title: "Enterprise Frontier Safeguards: Readiness Guide"
description: "A free readiness guide for Anthropic's Enterprise Frontier Safeguards (EFS): what it is, where availability stands, and what risk and compliance leaders should do now."
seoTitle: "Anthropic Enterprise Frontier Safeguards (EFS) Readiness Guide"
date: 2026-10-11
lastmod: 2026-10-11
tags: ["ai-governance", "anthropic", "agentic-ai", "third-party-risk"]
---

<div class="hero-section text-center py-4 mb-4">
  <h2 id="hero-headline" class="hero-title display-5 fw-bold mb-3">Get Ready Before the Alarm Is Yours</h2>
  <p class="lead">Anthropic is giving enterprises a new way to detect misuse of frontier AI while keeping their data in their own cloud. Here's what it is, where availability stands, and what to do now so you're ready when access opens.</p>
  <p class="small text-body-secondary mb-0">Status as of October 11, 2026 · For enterprise risk, security and compliance leaders · Free to read and share</p>
</div>

## Where Availability Stands

<div class="table-responsive my-3">
<table class="table">
  <tbody>
    <tr><th scope="row">Announced</th><td>September 1, 2026, by Anthropic.</td></tr>
    <tr><th scope="row">Status</th><td>Rolling out in phases to <strong>eligible</strong> customers, with the goal of broad availability this fall. We have found no general-availability announcement as of October 11, 2026.</td></tr>
    <tr><th scope="row">Eligibility</th><td>Anthropic confirms eligibility and has not published the criteria. Submitting the access form does not guarantee access.</td></tr>
    <tr><th scope="row">Interim option</th><td>Eligible customers on Fable 5 and Fable 5.1 can request zero data retention (ZDR) until EFS reaches them.</td></tr>
    <tr><th scope="row">Platforms</th><td>Claude Code, Claude Enterprise, the Claude Platform, Amazon Bedrock, Claude Platform on AWS, Google's Agent Platform and Microsoft Foundry.</td></tr>
    <tr><th scope="row">Cost</th><td>No Anthropic fee for EFS. Your cloud provider bills storage, reads, writes and egress as usual. Budget for your own team's time to review alerts.</td></tr>
  </tbody>
</table>
</div>

**Do this week:** submit Anthropic's [EFS eligibility form](https://claude.com/form/enterprise-frontier-safeguards) and ask your Anthropic or cloud account team where you are in the rollout.

## What EFS Is, in Plain Terms

Detecting serious AI misuse, like an attacker using stolen credentials or a multi-step cyber operation, means looking at activity across many sessions and accounts over time. That requires keeping data for a while. Starting with Fable 5, Anthropic began retaining data for 30 days for this reason, and many regulated organizations couldn't accept that.

EFS is the compromise. It pairs the privacy of zero data retention with Anthropic's automated misuse detection by changing *where the data lives* and *who reviews it*:

- **Your storage.** Activity data used for monitoring sits in your own cloud account (Amazon S3, Azure Blob Storage or Google Cloud Storage), not Anthropic's.
- **Your keys and policies.** You can use your own encryption keys, access policies and audit logging.
- **Automated detection.** Anthropic's systems scan a rolling window of activity for signs of serious misuse, including offensive cyber activity, biological misuse, and stolen or leaked credentials.
- **Your reviewers.** Flags go directly to you. No Anthropic employee needs to review them.
- **Opt-in controls.** Customer-owned storage, customer-managed keys and fully automated review are each optional. None change model behavior, pricing or rate limits.

<div class="hero-section text-center py-4 my-4">
  <h2 id="key-point" class="mb-3">EFS hands you the alarm. You own the response.</h2>
  <p class="lead mb-0">Because Anthropic doesn't review flags under EFS, a flag no one acts on is no control at all. Readiness is mostly about people and process, not technology.</p>
</div>

## Who Does What

<div class="table-responsive my-3">
<table class="table">
  <thead><tr><th scope="col">Party</th><th scope="col">Responsibilities</th></tr></thead>
  <tbody>
    <tr><th scope="row">Anthropic</th><td>Automated misuse detection across sessions and accounts; account enforcement; intelligence sharing with industry and government; ongoing safeguard updates.</td></tr>
    <tr><th scope="row">Your organization</th><td>Custody of the monitoring data; encryption keys and access policies; reviewing and responding to every flag; deciding who may see sensitive content.</td></tr>
    <tr><th scope="row">Your cloud provider</th><td>Hosting the storage under your existing agreement and controls.</td></tr>
  </tbody>
</table>
</div>

## Readiness Checklist

Pick the track that matches your situation.

### Track A: Already Using Fable 5 or 5.1 Under an Enterprise Agreement

- [ ] Decide this quarter between default 30-day retention, interim ZDR (if eligible) and EFS.
- [ ] Submit the EFS eligibility form now. The rollout is phased, so get in the queue early.
- [ ] Confirm with your account team which of your platforms and workloads EFS will cover first.
- [ ] Complete the Track B items below before EFS reaches you.

### Track B: Preparing for Frontier AI in the Next 6–12 Months

**Data and infrastructure**

- [ ] Create a dedicated storage bucket in your existing cloud for AI activity data.
- [ ] Set up customer-managed encryption keys and least-privilege access policies.
- [ ] Turn on audit logging for every access to that bucket.
- [ ] Budget for storage, reads, writes and egress charges from your cloud provider.

**Security operations**

- [ ] Name an owner for EFS flags, with a backup.
- [ ] Write a triage playbook covering credential compromise, offensive-cyber signals and biological-misuse signals.
- [ ] Route flags into your SIEM and incident response process, with response-time targets.
- [ ] Run a tabletop exercise: a flag shows a stolen AI key being used at 2 a.m. Who acts, and how fast?

**Legal and compliance**

- [ ] Decide who is cleared to review flagged content that may include privileged, non-public or regulated data.
- [ ] Set and document a retention period for the monitoring data.
- [ ] Update data maps, records schedules and, where needed, privacy notices.
- [ ] Consider how retained AI activity logs would be handled in litigation holds and regulatory requests.

**Governance**

- [ ] Add AI-agent monitoring to your insider-risk program.
- [ ] Report EFS flag volume and time-to-response to leadership as key risk indicators.
- [ ] Re-score AI misuse and credential-theft risks in your risk register.

### Track C: Smaller Organizations and Anyone Not Eligible for EFS

EFS targets eligible enterprise customers. If it doesn't reach you, these compensating controls do the same job on a smaller scale.

- [ ] Treat AI API keys and agent integrations like production credentials: inventory, vault, scope and rotate them. Never share keys in chat or plain-text files.
- [ ] Avoid unvetted AI resellers and model routers. Anthropic has documented fraudulent resellers harvesting account credentials.
- [ ] Log your own organization's AI usage: who uses which tools, with what data.
- [ ] Ask each AI vendor what misuse monitoring it runs, who sees the alerts, and how fast you'll be told.
- [ ] Shorten patch timelines for internet-facing systems. AI lets attackers find and exploit known weaknesses at machine speed.

## Why This Matters Now

Anthropic's [September 2026 threat intelligence report](https://www.anthropic.com/threat-intelligence-report-september-2026) shows attackers using AI agents to run large parts of intrusions on their own: reconnaissance, exploitation, tool development and data processing, at machine speed and in parallel. The techniques are familiar: stolen credentials, unpatched edge devices, exposed services, phishing. What's changed is the cost. Work that once required a well-funded team is now cheap, which puts far more organizations, including smaller ones, in range.

The report also shows that access to AI itself has become a target: criminal groups treat compromised API keys, session tokens and devices as a primary objective and sell that access through brokers, and one fake reseller harvested buyers' account credentials. EFS is one of the first serious answers to that problem, and it works best for organizations that prepare before it arrives.

## What's Still Unknown

EFS is new and evolving. Watch for Anthropic to clarify:

- Published eligibility criteria and the rollout schedule by platform
- The retention window and the thresholds for raising a flag
- What information, if any, goes to Anthropic during detection
- Independent evidence of detection performance, including false-positive rates
- Whether other AI labs offer comparable controls

We'll update this guide as Anthropic publishes more.

## Sources

- [Anthropic: Developing Enterprise Frontier Safeguards with our customers](https://www.anthropic.com/news/enterprise-frontier-safeguards) (September 1, 2026)
- [Anthropic: Enterprise Frontier Safeguards eligibility form](https://claude.com/form/enterprise-frontier-safeguards)
- [Anthropic: Detecting and countering misuse of AI, September 2026](https://www.anthropic.com/threat-intelligence-report-september-2026) (September 10, 2026)

<p class="small text-body-secondary mt-4">This guide is provided by FIR Risk Advisory for general information only. It is not legal, compliance or security advice, and FIR Risk Advisory is not affiliated with Anthropic. Product details are based on Anthropic's public statements as of October 11, 2026 and may change; confirm current terms with Anthropic or your cloud provider.</p>

<div class="hero-section text-center py-4 mt-4">
  <h2 id="talk-it-through" class="mb-3">Want Help Getting Ready?</h2>
  <p class="lead mb-4">We help teams turn AI governance into controls that actually run. Tell us where you are and we'll point you to the next step.</p>
  <a href="/contact/" class="btn btn-primary btn-lg px-5">Let's Talk</a>
</div>
