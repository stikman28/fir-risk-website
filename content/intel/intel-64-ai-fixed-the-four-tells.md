---
title: "INTEL-64: AI Fixed the Four Tells"
seoTitle: "Deepfake Impersonation: Verify on a Channel You Start"
description: "Microsoft lists four tells that used to expose impersonation fraud and says \"AI fixes all four simultaneously.\" Stop asking people to judge: confirm resets, payment-detail changes and new-hire identity on a channel your company starts."
meta:
  description: "Microsoft 2026: AI fixes all four tells of impersonation fraud. Verify resets, payment changes and new hires by call-back. SIGNALS 2026."
date: 2026-11-28
type: "intel"
intel_type: "TREND"
tags: ["SIGNALS", "Deepfakes", "Fraud", "Social Engineering", "MITRE ATT&CK", "MITRE ATLAS", "Microsoft", "Verizon DBIR", "CISO", "Risk Management"]
---

## The INTEL

**Fraud by impersonation used to give itself away. Microsoft lists four tells: poor forged documents, non-native language, accents that didn't match during interviews, and a thin online presence. Its 2026 report says "AI fixes all four simultaneously."**

What the reports say:

- **The tells are gone.** Microsoft: AI can improve photos in forged documents so they "pass standard visual inspection," write "grammatically flawless" résumés and emails, mask accents with "real-time voice modulation during video calls and phone interviews," and build a believable online history. The result: "all conversations over unauthenticated or poorly-vetted channels (including email) become easy targets."
- **The attacks are live conversations.** Verizon added pretexting, an attacker "on the other side of the phone, text message conversation or email thread," to its initial access tracking this year, after "a significant number of high-profile ransomware breaches" began that way.
- **And they work better than email.** In the simulations Verizon collected, phone-based campaigns drew a median response of about 2%, against 1.4% for email: "an increase of 40%." The phone sample is small (35 data points), and Verizon says so.

---

## Why It Matters

Most verification still depends on someone judging whether a person looks and sounds right: the help desk agent resetting a password, the clerk changing a supplier's bank details, the recruiter on a video interview. Those checks relied on the tells, and AI has removed them.

Verizon puts the hard part plainly: training help desks and support agents "to not be helpful and supportive" when someone is manipulating them "is not as simple" as spotting a suspicious email.

**Our read:** stop asking people to judge. Verification has to come from a channel the company controls, not from how convincing the request is. This is the decision SIGNALS asks leaders to make: help desk resets, payment-detail changes and new-hire identity checks are security controls, not admin.

---

## What To Do — One Key Action

**For three requests (password or MFA resets, changes to payment details, and identity checks for new hires), require confirmation through a channel your company starts: a call back to a number already on file, or an in-person or manager check. Never use contact details supplied in the request itself.**

---

## MITRE ATT&CK

- **T1684.001 — Impersonation** (T1656 in M-Trends): posing as an employee, executive, supplier or candidate
- **T1566.004 — Phishing: Spearphishing Voice:** the live-conversation route, 6.1% of Mandiant's 2025 investigations
- MITRE mitigations listed in SIGNALS: M1017 User Training · M1036 Account Use Policies · M1032 Multi-factor Authentication

**MITRE ATLAS** (attacks on AI systems, v5.6)

- **AML.T0088 — Generate Deepfakes:** ATLAS notes GenAI "reduces the skill and level of effort required" and "makes real-time manipulations feasible," including to "evade AI applications such as biometric identity verification systems"
- **AML.T0052.001 — Deepfake-Assisted Phishing:** fake voice or video "to impersonate trusted individuals, executives, or organizations." ATLAS mitigation: AML.M0034 Deepfake Detection, recommended "especially in impactful applications such as biometric verification." Detection helps; a call back on a known number doesn't depend on it.

---

## Learn More

- [FIR SIGNALS 2026](/reports/signals-2026/) — Signal 02, plus the MITRE ATT&CK appendix in the PDF
- [Microsoft Digital Defense Report 2026](https://www.microsoft.com/en-us/security/security-insider/threat-landscape/microsoft-digital-defense-report-2026) — Primary source
- [Verizon 2026 Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/) — Primary source
- [FIR Risk INTEL-44 — The Basics Are Working](/intel/intel-44-the-basics-are-working/) — Account recovery and onboarding as side doors

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
