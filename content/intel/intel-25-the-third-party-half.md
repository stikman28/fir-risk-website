---
title: "INTEL-25: The Third-Party Half"
description: "Breaches involving a third party rose 60% year over year and now sit behind 48% of all breaches in the 2026 Verizon DBIR — nearly half your attack surface is owned and operated by people who don't report to you. The fix isn't a once-a-year vendor questionnaire; it's a living, continuously reconciled inventory of every third party with access, contractual MFA requirements, and dependency reduction where the economics allow."
date: 2026-06-30
type: "intel"
intel_type: "SECTOR ALERT"
tags: ["Third-Party Risk", "Supply Chain Security", "Vendor Management", "Concentration Risk", "MFA", "Verizon DBIR", "CISO", "Board Governance", "MITRE ATT&CK", "Risk Management"]
---
## The INTEL

**Breaches involving a third party rose 60% year over year and now sit behind 48% of all breaches. Nearly half of every breach in the 2026 DBIR runs through someone else's access — which means half your attack surface is owned and operated by people who don't report to you.**

The 2026 DBIR makes the supply chain a first-class breach vector, not a footnote: third-party involvement jumped 60% in a single year, and it now factors into 48% of breaches. The same section surfaces the reason it keeps working — among third parties with cloud exposure, only a minority had remediated missing or improperly secured multi-factor authentication. The door is propped open at the vendor, and the attacker simply walks through it into you.

The year's marquee incidents are concentration risk made physical. The Jaguar Land Rover ransomware attack halted production for five weeks, caused roughly £1.9 billion in damages, rippled across some 5,000 downstream entities, and shaved about 0.1% off U.K. GDP — the costliest cyber event in U.K. history for the industrial sector. It was not an outlier so much as the clearest illustration of a pattern the report repeats.

---

## Why It Matters

The instinct is to read "48% of breaches involve a third party" as a vendor-management problem — tighten the questionnaire, add a clause, move on. That is the wrong altitude. When nearly half of breaches arrive through a partner's access, the boundary of your enterprise is no longer your network edge; it is the union of every vendor, platform, and supplier that touches your systems or your data. The third party's unremediated MFA gap is *your* unremediated MFA gap, because the attacker reaches you through it.

The 2026 incident roster shows how unevenly this lands and how far it travels. Marks & Spencer lost an estimated £300 million; the Co-op breach exposed 6.5 million members; a Qantas compromise exposed more than 5 million customers through a third-party platform. And a single Oracle E-Business Suite zero-day cascaded across both Education and Healthcare, one shared dependency becoming a breach in two sectors at once. The common thread is not a clever new technique. It is concentration: many organizations leaning on the same vendors, the same platforms, the same software, so that one compromise scales.

Some sectors carry this exposure structurally. Manufacturing records one of the highest third-party exposures in the report — 61% of its breaches — alongside an elevated espionage motive of 15%. A sector built on deep, interdependent supplier networks inherits the risk of every link in the chain. The lesson for every board is the same one E90 frames as the 2026 throughline: owning and governing your stack is itself a security control, and the discipline of doing it consistently is what separates the named victims from the names you never hear.

---

## What To Do — One Key Action

**Stand up — and then consistently maintain — a living inventory of every third party with access to your systems or data, with contractual MFA and security requirements and continuous reconciliation, and reduce dependency wherever the economics allow. Vendor governance is an ongoing discipline, not an annual checkbox.**

The inventory is the foundation, but the inventory alone is not the control — keeping it true is. The third parties in the DBIR's 48% were not unknown; they were known, onboarded, and then left unreconciled while their MFA posture quietly drifted. A vendor list reviewed once a year is a snapshot of a moving system, and the gap between snapshots is exactly where breaches like Jaguar Land Rover, Qantas, and the Co-op found their way in. Continuous reconciliation — not an annual attestation — is what closes that gap.

Three elements make this real. Make the inventory living: every vendor with access enters it on onboarding and is removed the day access ends, reconciled on a recurring cadence rather than at audit time. Put MFA and security requirements in the contract, not the SLA, so a partner's posture is a binding obligation you can verify, not a hope. And treat dependency reduction as a security decision, not just a procurement one — where the economics allow, fewer points of shared concentration mean fewer shared single points of failure. This is a CISO + Procurement + Board move: the same "stay consistent on the fundamentals" discipline E90 applies to patching, applied to the supply chain. The full plan is in [E90](/tuesday/e90-refinement-not-revolution/); owning and governing your stack is where it starts.

---

## MITRE ATT&CK

- **T1199 — Trusted Relationship:** Third-party access now drives 48% of breaches. The defender controls are a living vendor inventory, contractual MFA and security terms, and continuous (not annual) reconciliation — governing the trust relationship as an ongoing discipline rather than auditing it once a year.

---

## Learn More

- [FIR Risk Tuesday E90 — Refinement, Not Revolution](/tuesday/e90-refinement-not-revolution/) — The full 2026 DBIR breakdown and the stay-consistent-on-the-fundamentals thesis
- [2026 Verizon Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/) — Primary source

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
