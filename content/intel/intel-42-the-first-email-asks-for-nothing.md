---
title: "INTEL-42: The First Email Asks for Nothing"
description: "Microsoft detected more than 46 million business impersonation attacks in 12 months, and by June 2026 only 3% of first messages asked for money or documents. The fraud comes later, and 51% of payroll diversion attempts land on a Monday or Tuesday. The one action: put every change to vendor bank details or employee direct deposit under a formal internal control that is designed, audited and verified to work."
date: 2026-10-28
type: "intel"
intel_type: "TECHNIQUE"
tags: ["Business Email Compromise", "Fraud Prevention", "Internal Controls", "Payroll", "Social Engineering", "Microsoft", "CFO", "Risk Management"]
---

## The INTEL

**Microsoft detected more than 46 million business impersonation attacks in 12 months, and almost none of them opened by asking for money. By June 2026, just 3% of first messages contained a financial or document request, down from 17% in October 2025. The rest said things like "Are you at your desk?" or "Do you have a moment?"**

Microsoft's 2026 Digital Defense Report is retiring the catch-all "BEC" label for these scams and calling them business contact impersonation (BCI): an attacker poses as an executive, employee, vendor or partner and starts a conversation. In Microsoft's words, "BCI is, overwhelmingly, a conversation starter. The fraud comes later, in follow-up messages, once the attacker has established rapport and confirmed the target is engaged." The first email is "deliberately bland," built to slip past content-based filters "precisely because it contains nothing overtly malicious to detect."

The scams also keep office hours. Payroll diversion attempts, where the attacker tries to redirect an employee's direct deposit, peak on Monday, decline through the week and go "nearly silent on weekends." 51% land on a Monday or Tuesday, when payroll and HR staff are working through the prior week's requests and, Microsoft says, are "most likely to action a quick ask without much scrutiny."

---

## Why It Matters

Email security is built to catch the ask: the invoice, the wire instruction, the bank change. When the opening message asks for nothing, there's nothing to catch, and by the time the request arrives it comes inside a conversation that already feels trusted. Volume isn't easing either: monthly attacks surged 121% in April 2026, more than double any previous month in the year.

The defense has to move from the inbox to the moment money moves.

---

## What To Do — One Key Action

**Put every change to vendor bank details or employee direct deposit under a formal internal control that the organization designs, documents, audits and verifies is working. At a minimum, the control should require verification by calling back a known number (never one supplied in the request), approval by a second person before the change takes effect, and regular review of every change made.**

A callback on its own is a good habit. A control is different: it has an owner, it applies to every change with no exceptions for urgency or seniority, it leaves evidence, and it's tested. The test is simple: can you show your auditors that every bank-detail and payroll change last quarter went through it? Then make sure payroll and HR know that Monday and Tuesday are when these requests peak.

---

## MITRE ATT&CK

- **T1656 — Impersonation:** The attacker poses as a trusted business contact and builds rapport before making the fraudulent request.

---

## Learn More

- [Microsoft Digital Defense Report 2026: Decoding emergence (Microsoft, PDF)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2026-Microsoft-Digital-Defense-Report.pdf) — Primary source, "How modern intrusions begin"
- [FIR Risk Tuesday E94 — MDDR 2026: A Shift in the Physics of Cyber Risk](/tuesday/e94-shift-in-the-physics-of-cyber-risk/) — Full analysis of the report
- [FBI Internet Crime Complaint Center (IC3)](https://www.ic3.gov/) — Report business email compromise and payroll diversion

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
