---
title: "INTEL-27: You Are the Bullseye"
description: "The 'we're too small to be a target' assumption is dead. The 2026 Verizon DBIR puts ransomware in 83% of breaches at small and mid-sized businesses, and 96% of all ransomware victims are SMBs. The single highest-leverage move for a resource-constrained business: tested, isolated, OFFLINE backups with a rehearsed restore — the reason 69% of victims can refuse to pay."
date: 2026-07-02
type: "intel"
intel_type: "SECTOR ALERT"
tags: ["Small Business", "SMB", "Ransomware", "Backups", "Cyber Resilience", "Third-Party Risk", "Verizon DBIR", "CISO", "MITRE ATT&CK", "Risk Management"]
---
## The INTEL

**The "we're too small to be a target" assumption is dead. The 2026 DBIR puts ransomware in 83% of breaches at small and mid-sized businesses — and finds that 96% of all ransomware victims are SMBs. Attackers aren't choosing between you and the enterprise. They're choosing you.**

The numbers behind the headline are unambiguous. Ransomware is present in 83% of SMB breaches, and 96% of all ransomware victims are small and mid-sized businesses. The threat is not a scaled-down version of the enterprise problem — it is the same enterprise-grade threat, aimed at the organizations with the fewest people, smallest budgets, and least margin for error.

And the way attackers get in is mundane, not exotic. For SMBs, the leading initial-access routes are exploitation of vulnerabilities (26%), credential abuse (13%), and phishing (9%) — the same fundamentals the DBIR flags across every organization size. Third-party involvement appears in 55% of SMB breaches: more than half of the time, the way in runs through a vendor, supplier, or service provider you don't directly control.

---

## Why It Matters

It's tempting for an SMB leader to read enterprise-scale breach coverage and conclude none of it applies. The 96% figure closes that door. When nearly every ransomware victim is a small or mid-sized business, "too small to be a target" stops being a defensible posture and becomes a planning error. The attacker economics favor you: enterprise-grade tooling, automated at scale, pointed at the organizations least likely to have a tested response.

The resource asymmetry is the whole problem. SMBs face the same exploitation, credential abuse, and phishing that enterprises do — but with a fraction of the staff, tooling, and budget to absorb it. That is exactly why the answer cannot be "build an enterprise security program." It has to be a small number of fundamentals, executed consistently, that change the outcome when — not if — an attacker gets in.

Here is the number that should reframe the whole conversation: 69% of ransomware victims did not pay. The majority refuse the ransom, and the single thing that most often lets them refuse is the ability to restore without the attacker's key. The breach is the bad day; the inability to recover is the business-ending event. The two are separable — and what separates them is preparation you can do before anything happens.

---

## What To Do — One Key Action

**Build and rehearse tested, isolated, OFFLINE backups with a practiced restore — and then prove the restore actually works. For a resource-constrained SMB, this is the single highest-leverage move: it is the reason most ransomware victims can refuse to pay, and it turns ransomware — present in 83% of SMB breaches — from a business-ending crisis into a bad day.**

The discipline matters more than the product. A backup that has never been restored is a hope, not a control. Offline and isolated means the backup is not reachable from the systems an attacker would encrypt — so it survives the same event it's meant to protect you from. Rehearsed means someone on your team has actually run the restore, timed it, and knows it produces working systems, not a folder full of files nobody can use under pressure.

This is the fundamental that lets the 69% who don't pay walk away. With a clean, isolated copy and a restore you've already practiced, ransomware stops being a negotiation and becomes a recovery — you rebuild on your own timeline, not the attacker's. It does not require an enterprise budget; it requires consistency and a calendar reminder to test.

The one question for your next leadership review: not "do we have backups?" but **"when did we last restore from them — offline — and how long did it take?"** Staying consistent on the fundamentals is the whole thesis of [E90](/tuesday/e90-refinement-not-revolution/) — and the full SMB plan is there.

---

## MITRE ATT&CK

- **T1486 — Data Encrypted for Impact:** Ransomware encrypts systems to force payment. The control is tested, isolated, offline backups plus a rehearsed recovery — the reason most victims can refuse to pay.

---

## Learn More

- [FIR Risk Tuesday E90 — Refinement, Not Revolution](/tuesday/e90-refinement-not-revolution/) — The full 2026 DBIR breakdown and SMB plan
- [2026 Verizon Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/) — Primary source

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
