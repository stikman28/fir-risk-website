---
title: "INTEL-58: Secure Software Means Fewer Flaws to Manage"
seoTitle: "AI Vulnerability Discovery: Secure Software, Fewer Flaws"
description: "AI that finds software flaws at speed is gated to vetted organizations first, and the companies that write the software everyone depends on are best placed to use it. Every flaw fixed before release is one customers never patch. Ask critical vendors how they use AI to fix their own code."
meta:
  description: "AI flaw-finding is an access race. 2026 filings from Microsoft, Alphabet, Apple and Anthropic: expect vendors to fix flaws before release."
date: 2026-11-16
type: "intel"
intel_type: "TREND"
tags: ["Secure by Design", "Vulnerability Management", "Software Supply Chain", "AI Risk", "Microsoft", "CISO", "Risk Management"]
---

## The INTEL

**AI that finds software flaws at speed is now real, and access to the most capable models is limited to vetted organizations. The companies that write the software everyone depends on are best placed to use it, and their filings show they know the race is on. Every flaw fixed in the code before release is one their customers never have to patch. Customers should expect the leaders to do exactly that.**

What the filings say:

- **The capability is gated.** Anthropic first released its Mythos model in April 2026 "as a gated research preview through Project Glasswing, available to select organizations for cybersecurity applications," because of "its advanced capabilities in cyber vulnerability discovery." The Mythos models, most recently Mythos 5.2 in November, run "with safeguards calibrated for vetted organizations" through trusted-access programs. Anthropic expects similar models "whether developed by us or by other AI labs, will continue to emerge," and that they may be "subject to access constraints."
- **The builders see the race.** Microsoft: AI "is accelerating vulnerability discovery." Alphabet: AI "is accelerating timelines on which such vulnerabilities may be discovered and exploited by threat actors." Apple: AI is "identifying and exploiting vulnerabilities at a greater scale and at a highly accelerated pace." All three statements are new this year.
- **And name the answer.** Microsoft says its response includes "continuously engineering more secure products and services... including through the deployment of AI-based and automated defenses."

*Disclosure: FIR Risk uses AI models from several providers, including Anthropic.*

---

## Why It Matters

For years, the burden of software flaws has landed on customers: patch faster, monitor more, accept the risk. AI-powered flaw finding can shift that burden back to where it belongs. A flaw found and fixed by the company that wrote the code never becomes a vulnerability its customers have to manage.

**Our read:** this is an access race. The most capable flaw-finding models reach vetted organizations first, and the largest software makers are among those best placed to use them. Attackers will get similar capability eventually, so the advantage goes to whoever fixes their code first. The leaders should drive this.

The gap is everywhere else: smaller software vendors, older products, open-source components, and your own in-house code may not get the same scrutiny as quickly. That is where exposure will concentrate, and where patching effort should go.

---

## What To Do — One Key Action

**In reviews and renewals with critical software vendors, ask how they use AI to find and fix flaws in their own code before release, and what results they can show. Expect the leaders to answer with evidence. Where a vendor can't answer, focus your patching and compensating controls there.**

---

## MITRE ATT&CK

- **T1190 — Exploit Public-Facing Application:** fewer flaws in shipped code means fewer ways in
- **T1195.002 — Compromise Software Supply Chain:** flaws in the software you depend on, not just your own

---

## Learn More

- [Anthropic, PBC Form S-1/A, Amendment No. 2, November 10, 2026](https://www.sec.gov/Archives/edgar/data/2130357/000162828026072484/anthropicpbc-sx1ax2.htm) — Primary source
- [Microsoft Form 10-Q, quarter ended September 30, 2026](https://www.sec.gov/Archives/edgar/data/789019/000119312526436133/msft-20260930.htm) — Primary source
- [FIR Risk Tuesday E97 — The Capacity Race](/tuesday/e97-the-capacity-race/) — Full analysis (signal five)
- [FIR Risk INTEL-45 — Stop Counting Patches](/intel/intel-45-stop-counting-patches/) — Measuring exposure, not patch counts

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
