---
title: "INTEL-65: Cyber Monday: Check the Seller"
seoTitle: "Third-Party Breaches: 9% to 48% in Four DBIR Editions"
description: "Cyber Monday: you check the seller before you buy. Breaches involving a third party rose every DBIR edition, from 9% to 48%. Rank your vendors by what they can reach, not what they cost."
meta:
  description: "Third-party breaches rose from 9% to 48% across four Verizon DBIR editions. Re-rank your top 20 vendors by access, not spend. SIGNALS 2026."
date: 2026-11-30
type: "intel"
intel_type: "TREND"
tags: ["SIGNALS", "Third-Party Risk", "Supply Chain", "Cyber Monday", "MITRE ATT&CK", "MITRE ATLAS", "Verizon DBIR", "IBM X-Force", "CISO", "Risk Management"]
---

## The INTEL

**Happy Cyber Monday. Before you buy anything today, you'll probably check the seller. Your vendors deserve the same look: across four editions of Verizon's DBIR, the share of breaches involving a third party rose every time, from 9% to 48%.**

Breaches with a third party involved, by DBIR edition:

- **2023: 9% · 2024: 15% · 2025: 30% · 2026: 48%.** More than five times the share in three editions.
- **One caveat, stated plainly.** Verizon widened its definition in 2024 to include flaws in third-party software, and said that year's rise was "mostly fueled by the use of zero-day exploits for Ransomware and Extortion attacks." The climb didn't stop there: the share doubled the next year, then rose another 60%.
- **A second dataset agrees.** IBM X-Force counts "a nearly 4-fold increase in major supply chain or third-party compromises over the last 5 years," and notes that "a single breach at a trusted supplier spread to many downstream customers." Techniques "once largely confined to nation-state actors" are now used by criminal groups.

---

## Why It Matters

Most companies give their biggest suppliers the closest look, because that's where the money goes. Attackers rank vendors differently: by what each one can reach. A small vendor that holds an admin login to your systems, a copy of your customer data, or a live connection between its software and yours can be worth more to an attacker than your largest supplier.

**Our read:** on Cyber Monday you check the seller before you pay. For vendors, the check that matters is not what they cost but what they can reach. That is where the SIGNALS decision starts: a living list of who holds access to us.

---

## What To Do — One Key Action

**Re-rank your top 20 vendors by what they can reach, not by what they cost: admin rights in your systems, copies of your data, and live tokens or integrations. Start your third-party reviews at the top of that list, even where the contract is small.**

---

## MITRE ATT&CK

- **T1199 — Trusted Relationship** (0.5% of Mandiant's 2025 investigations) and **T1195 — Supply Chain Compromise** (1.7%): a vendor's access or software used to reach you. Rare as techniques in Mandiant's cases, yet present in 48% of DBIR breaches: Mandiant counts techniques, Verizon counts breaches
- MITRE mitigations listed in SIGNALS: M1018 User Account Management · M1032 Multi-factor Authentication · M1036 Account Use Policies

**MITRE ATLAS** (attacks on AI systems, v5.6)

- **AML.T0010 — AI Supply Chain Compromise:** attackers "compromising the unique portions of the AI supply chain," including the data, the AI software stack or "the Model itself." AI providers belong on the same ranked list. ATLAS mitigation: AML.M0023 AI Bill of Materials, "a full listing of artifacts and resources that were used in building the AI," which helps "enable rapid response to reported vulnerabilities"

---

## Learn More

- [FIR SIGNALS 2026](/reports/signals-2026/) — Signal 03, plus the MITRE ATT&CK appendix in the PDF
- [Verizon 2026 Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/) — Primary source
- [IBM X-Force Threat Intelligence Index 2026](https://www.ibm.com/reports/threat-intelligence) — Primary source
- [FIR Risk INTEL-25 — The Third-Party Half](/intel/intel-25-the-third-party-half/) — The 2026 jump and the living inventory

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
