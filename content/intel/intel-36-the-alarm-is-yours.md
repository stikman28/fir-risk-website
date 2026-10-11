---
title: "INTEL-36: The Alarm Is Yours"
description: "Anthropic's Enterprise Frontier Safeguards moves AI misuse monitoring into the customer's own cloud, under the customer's keys, with flags routed to the customer's own reviewers. No Anthropic fee, phased rollout to eligible customers this fall. The one action: name the owner of every AI misuse flag before access opens."
date: 2026-10-14
type: "intel"
intel_type: "DEFENDER TAILWIND"
tags: ["AI Security", "Agentic AI", "AI Governance", "Anthropic", "Enterprise Frontier Safeguards", "Insider Risk", "Data Protection", "CISO", "Risk Management"]
---

## The INTEL

**Anthropic has announced Enterprise Frontier Safeguards (EFS), a new control model for its most capable models that splits AI misuse defense between the lab and the customer. Anthropic runs automated detection across sessions and accounts, looking for offensive cyber activity, biological misuse, and stolen or leaked credentials. The customer keeps the monitoring data in its own cloud account (Amazon S3, Azure Blob Storage or Google Cloud Storage), under its own encryption keys, and receives every flag directly. No Anthropic employee reviews the flags. There is no Anthropic fee. It was designed with more than 100 enterprises, including the CISOs of the largest US banks through the Analysis and Resilience Center for Systemic Risk.**

The reason it exists: Anthropic says the most sophisticated misuse is spread across many sessions and accounts, so analyzing each interaction alone and then discarding it isn't enough. Starting with Fable 5, it began retaining data for 30 days to correlate activity over time. Regulated customers pushed back. EFS is the compromise: the correlation Anthropic needs, with the custody regulated firms require.

Status as of October 11, 2026: EFS is rolling out in phases to *eligible* customers, with broad availability targeted for this fall. Anthropic confirms eligibility and hasn't published the criteria. Eligible Fable 5 and 5.1 customers can request zero data retention in the meantime. It will be supported on Claude Code, Claude Enterprise, the Claude Platform, Amazon Bedrock, Claude Platform on AWS, Google's Agent Platform and Microsoft Foundry.

**What's a "flag"?** An alert that one of your AI accounts or keys may be in the wrong hands or being used for harm: a stolen key in use, or activity that looks like attack tooling. EFS is one source of these alerts. Your own monitoring of AI usage, spend and logs is the other, and you don't need EFS for that.

---

## Why It Matters

This is the first time a frontier lab has handed misuse monitoring to the customer as an operating responsibility. That's a genuine tailwind: regulated firms can now run frontier models with the data, keys and reviewers they already trust. But it also moves accountability. Under EFS, a flag that arrives at 2 a.m. has no Anthropic analyst behind it. It's your team, your playbook and your clock. A flag nobody acts on is no control at all.

The timing lines up with the threat picture. Anthropic's September 2026 threat report documents access to AI (compromised API keys, session tokens and devices) becoming the sole objective of multiple criminal groups, attackers using customers' stolen API keys, and a fake reseller harvesting account credentials. EFS is the vendor-side answer to the credential problem. But Anthropic only sees activity on its own platform: if your organization uses several AI providers, only you can see all of your own AI usage.

Three caveats belong in any board briefing. Anthropic has not yet published detection-performance data, flag thresholds or eligibility rules, so treat EFS as a promising control whose effectiveness is still unproven. Anthropic also has a commercial interest: EFS is its product, launched days before its threat report. And smaller organizations may never be eligible, which leaves them running frontier AI without this layer at all.

---

## What To Do — One Key Action

**Name the owner of every AI misuse flag before EFS reaches you. Pick a primary and a backup, write a triage playbook for the three signal types Anthropic monitors (credential compromise, offensive cyber, biological misuse), route flags into your SIEM and incident response process, and decide in advance who is cleared to look at flagged content that may include privileged or regulated data. Then submit Anthropic's eligibility form so you're in the queue.**

The storage bucket and encryption keys take a day. The people and process take a quarter. Start with the part that takes longer. Our free [EFS Readiness Guide](/efs-readiness/) has the full checklist, including compensating controls for organizations that aren't eligible.

---

## MITRE ATT&CK

- **T1078 — Valid Accounts · T1552 — Unsecured Credentials:** The techniques EFS's credential signals are aimed at. Stolen or leaked AI API keys and enterprise accounts let an attacker run frontier models under your name, and keys left in shared files or chat are the easiest way in. Treat AI keys and agent integrations like production credentials: inventory, vault, scope and rotate them.

---

## Learn More

- [FIR Risk EFS Readiness Guide](/efs-readiness/) — Free availability status and readiness checklist
- [Developing Enterprise Frontier Safeguards with our customers (Anthropic)](https://www.anthropic.com/news/enterprise-frontier-safeguards) — Primary announcement
- [Enterprise Frontier Safeguards eligibility form (Anthropic)](https://claude.com/form/enterprise-frontier-safeguards) — Request access
- [Detecting and countering misuse of AI: September 2026 (Anthropic)](https://www.anthropic.com/threat-intelligence-report-september-2026) — The threat picture EFS responds to
- [FIR Risk Tuesday E93 — The Attacks Aren't New. The Economics Are.](/tuesday/e93-the-economics-changed/) — Full analysis of the September 2026 report
- [FIR Risk Tuesday E87 — The Agents Have Keys](/tuesday/e87-the-agents-have-keys/) — When agentic AI got production access

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
