---
title: "INTEL-62: The Call Is the Lure. The Remote Tool Is the Door."
seoTitle: "Teams Vishing: Limit Remote Tools to IT Staff"
description: "Malicious voice calls over Microsoft Teams rose 502% in a year. The call builds trust; a remote-control tool, often one built into the PC, hands the attacker the keyboard. Limit remote-assistance tools to IT staff only."
meta:
  description: "Teams vishing up 502%: callers look like colleagues, then a remote-control tool hands over the keyboard. Limit remote tools to IT. SIGNALS 2026."
date: 2026-11-24
type: "intel"
intel_type: "TECHNIQUE"
tags: ["SIGNALS", "Vishing", "Social Engineering", "Remote Access", "MITRE ATT&CK", "MITRE ATLAS", "Microsoft", "CrowdStrike", "CISO", "Risk Management"]
---

## The INTEL

**SIGNALS 2026 reported a 502% rise in malicious voice calls over Microsoft Teams. Behind the number is a simple pattern: the call builds trust, and a remote-control tool, often one already on the computer, hands the attacker the keyboard.**

What Microsoft and CrowdStrike saw in 2025–2026:

- **The callers look like colleagues now.** Fake "Help Desk" and "IT Support" names used to dominate. Now "a majority now use personal-looking usernames that either match or appear to match legitimate employee naming conventions" (Microsoft).
- **Warnings don't stop it.** "Despite red flags such as Teams' 'External' banners and call warnings, skilled attackers successfully persuade victims to comply, usually on workdays during business hours." 93% of attackers kept a target on the line for 20 seconds or longer at least once, the point where a script can begin (Microsoft).
- **Then the remote tool.** The attacker "convinces the victim to grant access through a remote monitoring and management (RMM) tool" and completes reconnaissance "in two minutes or less" (Microsoft). In one CrowdStrike case, an employee granted access through Quick Assist, the remote help tool built into Windows, and the attacker tried to move data out within four minutes.

---

## Why It Matters

Security teams can't hear a phone call. Microsoft notes that "the voice channel itself carries no link to intercept." Training helps, but this year's data shows trained people, with warning banners in front of them, still comply.

**Our read:** the call is the part you can't fully control. The remote-control tool is the part you can. If an employee can't hand over their keyboard to a stranger, a convincing call ends as a conversation, not an intrusion.

---

## What To Do — One Key Action

**Limit remote-control and remote-assistance tools, including the ones built into the operating system, to IT staff only, and confirm it with a test on an ordinary employee's laptop. This is Microsoft's own recommendation: "Limit remote assistance tools to IT-only groups."**

---

## MITRE ATT&CK

- **T1566.004 — Phishing: Spearphishing Voice:** 6.1% of Mandiant's 2025 investigations (SIGNALS appendix)
- **T1684.001 — Impersonation** (T1656 in M-Trends): the caller poses as a colleague or IT support
- **T1219 — Remote Access Tools:** the victim installs or opens a remote-control tool for the attacker
- MITRE mitigations listed in SIGNALS: M1017 User Training · M1036 Account Use Policies

**MITRE ATLAS** (attacks on AI systems, v5.6)

- **AML.T0052.001 — Deepfake-Assisted Phishing:** ATLAS notes that cloned voices "are used in vishing (voice phishing) attacks over telephone or VoIP." The Microsoft figures above don't say how many calls used AI voices; this is how AI can make the same call more convincing.
- **AML.T0073 — Impersonation:** posing as "a known sender such as an executive, colleague, or third-party vendor." ATLAS mitigation: AML.M0018 User Training ("how to identify deepfakes and phishing attempts")

---

## Learn More

- [FIR SIGNALS 2026](/reports/signals-2026/) — Signal 02, plus the MITRE ATT&CK appendix in the PDF
- [Microsoft Digital Defense Report 2026](https://www.microsoft.com/en-us/security/security-insider/threat-landscape/microsoft-digital-defense-report-2026) — Primary source
- [CrowdStrike 2026 Global Threat Report](https://www.crowdstrike.com/global-threat-report/) — Primary source
- [FIR Risk INTEL-8 — The Breach Starts With a Phone Call](/intel/intel-8-voice-phishing-surge/) — When attackers call your help desk

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
