---
title: "INTEL-23: The Permission Problem"
description: "The 2026 Verizon DBIR settles a long-running argument: privilege escalation is an identity-and-permissions problem, not a patching one. 83% of escalation incidents involved no vulnerability exploit at all — attackers used the permissions already there. The fix isn't a faster patch cycle; it's a standing privileged-access inventory you shrink every cycle."
date: 2026-06-25
type: "intel"
intel_type: "TECHNIQUE"
tags: ["Privilege Escalation", "Identity Security", "Active Directory", "Privileged Access", "Least Privilege", "Verizon DBIR", "CISO", "MITRE ATT&CK", "Risk Management"]
---
## The INTEL

**The 2026 DBIR settles a long-running argument: privilege escalation is an identity-and-permissions problem, not a patching one. 83% of escalation incidents involved no vulnerability exploit at all — attackers used the permissions that were already there.**

Most security budgets treat escalation as something you patch your way out of. The data says otherwise. Only about 10% of escalation techniques are mitigated by patching; 65% are mitigated by privilege management. The single most common technique in real breaches isn't an exploit — it's **"valid accounts": logging in with legitimate credentials, at 39%.** Attackers aren't breaking in. They're signing in, then walking the permissions they find.

The clearest picture of why is in the assessment data: in 16% of organizations, any initial foothold gave roughly an 80% chance of reaching a key administrative account — not through exploits, but by chaining together existing Active Directory permissions until the path to domain-admin opened up.

---

## Why It Matters

It's tempting to read "escalation is everywhere" as "we need to patch faster." That's the wrong lesson — and the 83% proves it. When five out of six escalations involve no exploit at all, patch velocity isn't the lever. The permission structure underneath is.

This is a fundamentals problem, and the assessment data shows the fundamentals are slipping. 97% of assessed devices failed the failed-login-lockout configuration check; 90% failed the 15-character minimum password-length check. These aren't exotic gaps — they're the boring, maintainable controls that make valid-account abuse and credential-chaining harder. They degrade quietly when no one is watching them.

There's a sharper warning underneath the numbers, too. Red teams over-index on flashy identity attacks — cracking service-account passwords, forging authentication tokens — that barely register in real incident data. The lesson: defend against what's actually happening in breaches, not against the most cinematic move in the pentest report. The unglamorous work — least privilege, dormant-account cleanup, Active Directory hygiene — is where the real exposure lives.

---

## What To Do — One Key Action

**Pull a report of standing privileged access and the permission paths that lead to your Tier-0 and domain-admin accounts — then systematically right-size and remove them, and keep doing it on a cadence that never lapses.**

Privilege management, not patching, stops the large majority of escalations — 65% versus roughly 10%. So the work isn't a faster scanner; it's a standing privilege inventory and an Active Directory permission map. Find the accounts that carry admin rights they don't need. Find the chains where an ordinary foothold can walk, hop by hop, into a Tier-0 account. Cut them. Then treat least-privilege and AD hygiene the way you'd treat any fundamental — a control that's maintained consistently, not a project that's done once and left to drift back into 97%-fail territory.

The one question for your next review: not "are we patching fast enough?" but **"do we know every standing privileged-access path to our crown-jewel accounts — and are we shrinking it every cycle?"** The full plan is in [E90](/tuesday/e90-refinement-not-revolution/); staying consistent on this fundamental is where it starts.

---

## MITRE ATT&CK

- **T1078 — Valid Accounts:** The #1 technique in real breaches — attackers log in rather than break in. Controls = least privilege, MFA, and disciplined dormant-account disablement.
- **T1098 / T1484 — Account & Permission Manipulation:** The Active Directory permission-chaining behind the ~80% escalation exposure. Control = privileged access management plus Tier-0 isolation.

---

## Learn More

- [FIR Risk Tuesday E90 — Refinement, Not Revolution](/tuesday/e90-refinement-not-revolution/) — The full 2026 DBIR breakdown and prioritization plan
- [2026 Verizon Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/) — Primary source
- [CIS Critical Security Controls](https://www.cisecurity.org/controls) — The least-privilege and account-management fundamentals at the center of the finding

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
