---
title: "INTEL-43: Attackers Didn't Get Slower. We Did."
description: "Microsoft found a statistically significant increase in dwell time while the length of attacker activity stayed broadly stable: organizations are taking longer to notice intruders. Mandiant's median dwell time rose to 14 days from 11. The one action: don't wait for a breach to learn your dwell time. Test it with threat hunts and timed assume-breach exercises, and report detection coverage to leadership."
date: 2026-10-29
type: "intel"
intel_type: "TREND"
tags: ["Dwell Time", "Threat Detection", "Incident Response", "Cyber Resilience", "Threat Hunting", "Microsoft", "CISO", "Board Governance"]
---

## The INTEL

**Intruders are going unnoticed for longer, and it isn't because they're working more slowly. Comparing two years of its incident response engagements, Microsoft found "a statistically significant increase in dwell time," while "the overall length of threat actor activity remained broadly stable." Microsoft's reading: "organizations took longer to identify malicious activity following compromise."**

Dwell time is the gap between an intruder's first activity and its detection. If attackers were simply staying longer, both measures would rise together. Instead the attack lasted about as long, and the discovery came later. Microsoft adds that the increase was consistent "across multiple sectors," which points to "a broader operational trend" rather than a few bad cases. The sharpest rise was in industrials and manufacturing.

Microsoft shows the change in charts rather than putting a single number on it. Mandiant does give a number, from a different set of investigations: in M-Trends 2026, global median dwell time rose to 14 days from 11, the first increase since it began tracking in 2010. Two incident response teams, two datasets, same direction.

---

## Why It Matters

Most security budgets are weighted toward keeping attackers out. This year's data says the slippage is on the other side: noticing them once they're in. Every extra day undetected is another day to find data, move through systems and stage ransomware.

Microsoft lists dwell time among the six things leadership should see, alongside identity exposure, patch latency, agent permissions, critical dependencies and recovery readiness. But dwell time has a catch: it's only known after an intruder is found. Until then, security has nothing to report, and a quiet dashboard looks the same whether nobody is inside or nobody has noticed. That's why it needs forward-looking measures alongside it.

---

## What To Do — One Key Action

**Don't wait for an incident to learn your dwell time. Test it. Ask management to assume an attacker is already inside: run a threat hunt or compromise assessment to look for one, and an assume-breach exercise that times how long a simulated intruder goes unnoticed. Report the results to leadership alongside detection coverage: the share of critical systems and identities whose activity is logged and monitored.**

A quiet dashboard can mean nobody is inside, or that nobody is looking. These tests tell you which, and they turn dwell time from a number you learn after a breach into one you can improve before it. Microsoft's own priorities point the same way: "conduct assume-breach exercises," centralize logging and correlate signals "to detect intrusions earlier."

---

## MITRE ATT&CK

- **T1078 — Valid Accounts:** Intruders log in with real credentials and look like employees; Microsoft found valid accounts behind 13% of initial access.
- **T1562 — Impair Defenses:** Intruders disable or blind logging and security tools so their activity goes unseen.

---

## Learn More

- [Microsoft Digital Defense Report 2026: Decoding emergence (Microsoft, PDF)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2026-Microsoft-Digital-Defense-Report.pdf) — Primary source, "The threat landscape in 2026"
- [FIR Risk Tuesday E94 — MDDR 2026: A Shift in the Physics of Cyber Risk](/tuesday/e94-shift-in-the-physics-of-cyber-risk/) — Full analysis of the report
- [FIR Risk Tuesday E85 — M-Trends 2026](/tuesday/e85-responders-report/) — Mandiant's dwell-time data

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
