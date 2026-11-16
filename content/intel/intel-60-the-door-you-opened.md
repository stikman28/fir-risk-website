---
title: "INTEL-60: The Door You Opened on Purpose"
seoTitle: "Remote Access Risk: VPNs as Common as Exploits"
description: "Attackers used remote-access services like VPNs and remote desktop almost as often as they exploited flaws in Mandiant's 2025 investigations. Remote access is exposure you chose: list every path in, including AI service API keys, close what nobody owns, and require phishing-resistant MFA."
meta:
  description: "Mandiant 2025: remote-access services (T1133) in 23.8% of cases vs exploited apps (T1190) 27.7%. Remote access is exposure you chose. SIGNALS 2026."
date: 2026-11-20
type: "intel"
intel_type: "TECHNIQUE"
tags: ["SIGNALS", "Remote Access", "MFA", "MITRE ATT&CK", "MITRE ATLAS", "Mandiant", "CISO", "Risk Management"]
---

## The INTEL

**When leaders hear "exposure," they think of unpatched software. But in Mandiant's 2025 investigations, attackers used remote-access services almost as often as they exploited flaws: VPNs, remote desktop and similar ways in that companies open on purpose.**

From the SIGNALS 2026 appendix for security teams, using Mandiant's M-Trends 2026 technique data:

- **T1190 — Exploit Public-Facing Application:** seen in **27.7%** of investigations.
- **T1133 — External Remote Services:** seen in **23.8%**. Both made Mandiant's top 10 techniques of the year.

Mandiant's case notes show how it works. One ransomware group got in "through the use of either stolen or brute-forced virtual private network (VPN) credentials." Another, using the ransomware Mandiant saw most often in 2025, got in by exploiting "known vulnerabilities in network edge devices," the same kind of equipment that runs VPNs.

---

## Why It Matters

Remote access is exposure you chose. Every VPN, remote desktop gateway and remote support tool was opened for a business reason, and most were never closed when the reason ended. A patch fixes a flaw. It does nothing about a door that works exactly as designed for anyone holding a stolen password.

**Our read:** this is the half of Signal 01 that leaders can act on fastest, because it needs decisions, not patches. Close what isn't needed. Put strong sign-in on what remains. Know who uses each one.

---

## What To Do — One Key Action

**Ask for a list of every way someone can reach the company's systems remotely, including the API keys for its AI services, with a business owner for each. Close the ones nobody owns, and require phishing-resistant multi-factor authentication on the rest.**

---

## MITRE ATT&CK

- **T1133 — External Remote Services:** 23.8% of Mandiant's 2025 investigations
- **T1190 — Exploit Public-Facing Application:** 27.7%, including flaws in the edge devices that run remote access
- **T1078 — Valid Accounts:** stolen or guessed VPN credentials turn a remote-access service into a way in
- MITRE mitigations listed in SIGNALS: M1035 Limit Access to Resource Over Network · M1042 Disable or Remove Feature or Program · M1030 Network Segmentation · M1032 Multi-factor Authentication

**MITRE ATLAS** (attacks on AI systems, v5.6)

- **AML.T0012 — Valid Accounts:** in ATLAS, the credentials include "API keys that provide access to various AI resources and services": an AI service key is a remote-access credential too
- **AML.T0040 — AI Model Inference API Access:** access to an AI model through its API, the AI version of a remote-access service. ATLAS mitigations: AML.M0019 Control Access to AI Models and Data in Production · AML.M0024 AI Telemetry Logging

---

## Learn More

- [FIR SIGNALS 2026](/reports/signals-2026/) — Signal 01, plus the MITRE ATT&CK appendix in the PDF
- [Mandiant M-Trends 2026](https://cloud.google.com/security/resources/m-trends) — Primary source
- [FIR Risk INTEL-59 — Six Years at the Top](/intel/intel-59-six-years-at-the-top/) — Why exposure is a signal this year

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
