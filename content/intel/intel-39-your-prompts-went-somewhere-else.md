---
title: "INTEL-39: Your Prompts Went Somewhere Else"
description: "Anthropic's September 2026 threat report alleges that AI labs and third-party model routers silently relayed user prompts, including names, company data and live credentials, to another provider's model without telling users. The one action: inventory the AI tools your employees use and approve only those whose data path you can see."
date: 2026-10-19
type: "intel"
intel_type: "REGULATORY"
tags: ["Data Protection", "Privacy", "Shadow AI", "Third-Party Risk", "AI Governance", "Compliance", "Anthropic", "Risk Management"]
---

## The INTEL

**The AI tool your employee chose may not be the AI that answers them. Anthropic's September 2026 threat report alleges that several China-based AI labs silently forwarded their own customers' requests to Claude, served Claude's answers back as their own, and kept the exchanges to train their models. In one case, Moonshot AI relayed almost 300,000 customer requests in ten days. The report says users "had no way of knowing" where their prompts actually went.**

The data in those prompts was sensitive. Anthropic reports that many of the relayed exchanges came from users of third-party model routing services "commonly used by users in the United States and Europe," and that the sessions contained names, email addresses, company data and other sensitive information from hundreds of end users in at least a dozen languages. Its redacted examples include a pharmaceutical company's internal capital expenditure forecasts and a developer's live access credentials. Anthropic says these practices are "likely inconsistent with privacy laws."

A caution on independence: Anthropic competes with the labs it names, and these are its allegations, based on its own platform data. The compliance lesson holds either way.

---

## Why It Matters

This is a data-protection problem, not just a security one. When an employee pastes customer data or a financial model into an AI tool, your organization is responsible for where it goes. If the tool quietly passes it to an undisclosed third party, you may have an unreported sub-processor, a cross-border transfer you never approved, and possibly a notifiable disclosure.

Model routers and low-cost coding assistants are attractive precisely because they're cheap and flexible. That's also why they rarely go through procurement, and why their data path is often invisible.

---

## What To Do — One Key Action

**Inventory the AI tools your employees actually use, including model routers, browser extensions and coding assistants, and approve only those whose data path you can see in writing: who processes the prompt, where, under what terms, and whether it's retained or used for training. Block the rest, and add AI sub-processors to your privacy and vendor-risk reviews.**

Anthropic's report makes the same point from the other side: buy AI access only through authorized channels, because a discount that routes your traffic through an unknown intermediary "introduces tremendous risk to user data and systems."

---

## MITRE ATT&CK

- **T1557 — Adversary-in-the-Middle (closest analog):** The relays sat between users and the model they thought they were using, seeing and keeping every exchange. It isn't a classic network attack, but the risk to your data is the same: a middle party you never approved.

---

## Learn More

- [Detecting and countering misuse of AI: September 2026 (Anthropic)](https://www.anthropic.com/threat-intelligence-report-september-2026) — Primary source, section on illicit distillation (cases GTG-16001 and GTG-16002)
- [FIR Risk Tuesday E93 — The Attacks Aren't New. The Economics Are.](/tuesday/e93-the-economics-changed/) — Full analysis of the report
- [FIR Risk INTEL-37 — Loot, Compute, Cover](/intel/intel-37-loot-compute-cover/) — The criminal market for AI access

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
