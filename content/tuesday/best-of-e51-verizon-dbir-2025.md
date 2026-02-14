---
title: "Best of E51 - 12,000 Breaches and the Year Everything Doubled"
description: "Verizon 2025 DBIR: 12,000+ breaches analyzed. Third-party risk doubled, ransomware surged 37%, zero-day edge exploitation up 800%, and SMBs face 88% ransomware rate. The most-cited cybersecurity report of the year."
date: 2025-04-23
image: "/images/tuesday/best-of-e51-verizon-dbir-2025.png"
thumbnail: "/images/tuesday/best-of-e51-verizon-dbir-2025.png"
source: "Verizon 2025 Data Breach Investigations Report (DBIR)"
sourceUrl: "https://www.verizon.com/business/resources/reports/dbir/"
tags: ["Verizon DBIR", "Data Breaches", "Ransomware", "SMB", "Third-Party Risk", "Zero-Day", "MITRE ATT&CK", "Best Of"]
---

<img src="/images/tuesday/best-of-e51-verizon-dbir-2025.png" alt="FIR Risk Best of E51 - Verizon DBIR 2025" class="img-fluid mb-4">

*Originally published April 23, 2025 | Consolidated from E51 + E53*

## What You Need to Know

The 18th annual Verizon Data Breach Investigations Report analyzed **over 12,000 confirmed breaches** — the largest dataset in DBIR history — spanning November 2023 through October 2024 using the VERIS framework.

The headline isn't any single finding. It's that nearly every major threat vector got worse at the same time. Third-party breaches doubled. Ransomware surged 37%. Vulnerability exploitation hit 20% of all initial access. GenAI-powered phishing emails doubled. And the organizations least equipped to handle it — small and medium-sized businesses — are absorbing the worst of it.

This is the report CISOs, boards, and regulators reference more than any other. Here's what it says about where we are.

---

## The Doubles: Everything Moved at Once

The 2025 DBIR's most striking pattern is the simultaneous acceleration across multiple threat vectors:

| Metric | Change | Current |
|--------|--------|---------|
| **Third-party breaches** | Doubled YoY | 15% → 30% of all breaches |
| **GenAI malicious emails** | Doubled YoY | Synthetically generated at scale |
| **Ransomware in breaches** | +37% YoY | Present in 44% of breaches |
| **Vulnerability exploitation** | Surged | 20% of initial access |
| **Zero-day exploits (edge devices)** | +800% | VPNs and edge appliances targeted |
| **Espionage-motivated breaches** | Rose to 17% | State actors using vulns 70% of the time |

The third-party risk finding deserves special attention. **30% of breaches now involve a third party** — double the prior year — with a median remediation time of **94 days** for leaked credentials and secrets. That's three months of exposed access before organizations even begin to respond.

Meanwhile, **15% of employees regularly access GenAI tools on corporate devices**, most without adequate security guardrails. The attack surface isn't just expanding externally — it's growing from within.

> **INTEL [GLOBAL THREAT]:** The simultaneous doubling of third-party breaches and GenAI-generated phishing emails signals a compounding effect. Attackers are exploiting the supply chain while using AI to scale social engineering. Organizations managing vendor risk with annual questionnaires are operating on a timeline that no longer exists.

---

## Ransomware's SMB Crisis

Ransomware appeared in **44% of all breaches** — a 37% increase from the prior year. But the aggregate number masks a devastating disparity:

| Metric | SMBs | Large Orgs |
|--------|------|------------|
| **Ransomware in breaches** | 88% | 39% |
| **Attack source** | 98% external | 75% external / 25% internal |
| **Relative victim count** | 4x more victims | Baseline |

Small and medium-sized businesses face a threat landscape **increasingly indistinguishable from that of large enterprises** — but without the security budgets, dedicated teams, or incident response capabilities to match. When 88% of attacks on your segment involve ransomware, it's not a risk — it's a near-certainty.

The economics tell both sides of the story. The median ransom payment declined to **$115,000**, and **64% of victim organizations refused to pay**. Attackers are collecting less per hit — but they're hitting far more targets, and SMBs are the path of least resistance.

> **INTEL [INDUSTRY PATTERN]:** SMBs account for 4x the cyberattack victims compared to large organizations, with ransomware present in 88% of incidents. The gap between enterprise-grade threat actors and SMB-grade defenses is the defining asymmetry in the current landscape. This is where the breach volume lives.

---

## The National Public Data Wake-Up Call

The 2024 National Public Data breach exposed **2.9 billion records** spanning the United States, Canada, and the United Kingdom. The source? A small data aggregation company most people had never heard of.

This is the SMB risk story distilled to its essence. A company with a modest security posture held data at a scale that turned a single breach into a multi-country incident affecting billions. The attack came from financially motivated external actors — the same profile behind the vast majority of SMB compromises.

It's a case study in why third-party risk management can't stop at Tier 1 vendors.

---

## The Vulnerability Surge

Vulnerability exploitation accounted for **20% of initial access** — a significant jump that reflects a shift in attacker strategy. The DBIR documented an **eightfold increase** in zero-day exploits targeting edge devices: VPN appliances, firewalls, and remote access gateways.

These aren't application-layer vulnerabilities requiring user interaction. They're infrastructure-layer exploits against the devices that sit at the network perimeter — often internet-facing, often running outdated firmware, and often the last line of defense for organizations that haven't invested in zero-trust architecture.

**Espionage-motivated breaches rose to 17%** of all incidents, with state-sponsored actors exploiting vulnerabilities in **70% of their operations**. The line between criminal and nation-state tradecraft continues to blur — they're using the same entry points.

**FIR Risk Platform MITRE ATT&CK Analysis:**
- Initial Access: T1190 (Exploit Public-Facing Application), T1133 (External Remote Services)
- Initial Access: T1566 (Phishing) — now AI-generated at scale
- Credential Access: T1078 (Valid Accounts) — credential abuse remains dominant
- Impact: T1486 (Data Encrypted for Impact) — ransomware
- Initial Access: T1195 (Supply Chain Compromise) — third-party vector

> **INTEL [EMERGING RISK]:** The eightfold increase in zero-day exploitation of edge devices signals that perimeter infrastructure is now the primary battlefield. Organizations running unpatched VPN concentrators, firewalls, or remote access appliances should treat these as the highest-priority remediation targets — above application vulnerabilities.

---

## What Organizations Should Actually Do

The DBIR data points to five priorities that cut across both enterprise and SMB:

1. **Accelerate third-party risk management** — Annual vendor assessments don't match a 94-day median remediation window. Implement continuous monitoring for credential leaks and exposed secrets across your supply chain.

2. **Deploy enterprise-grade defenses regardless of size** — MFA, endpoint protection, and network segmentation aren't optional for SMBs anymore. The threat actors targeting you are the same ones targeting Fortune 500s.

3. **Patch edge infrastructure first** — VPNs, firewalls, and remote access appliances are the new front door. Prioritize these over application-layer patches when both compete for the same maintenance window.

4. **Build ransomware resilience, not just prevention** — Tested backups, segmented networks, and an incident response plan you've actually rehearsed. 64% of victims refused to pay — you need to be able to survive without paying.

5. **Govern GenAI usage** — 15% of employees are already using GenAI on corporate devices. Establish acceptable use policies, monitor for data leakage, and evaluate whether your DLP controls cover AI-assisted workflows.

And for boards: **the DBIR is the closest thing cybersecurity has to an annual financial audit of the threat landscape.** If your security team hasn't briefed you on it, ask them to.

---

## What We're Watching

**Third-party cascades.** With 30% of breaches involving third parties and 94-day remediation windows, the next SolarWinds-scale supply chain event is a matter of when, not if.

**SMB ransomware economics.** Declining payments but increasing volume. Attackers may shift to pure data extortion — steal and threaten to publish — to reduce the operational cost of encryption.

**Edge device exploitation.** The 8x increase in zero-days targeting VPNs and firewalls will accelerate as more exploit code becomes public.

**GenAI-powered social engineering.** Doubled in one year. The next DBIR will show whether this is a plateau or just the beginning of the curve.

---

## The Bottom Line

The 2025 Verizon DBIR tells a story about compounding risk. Third-party breaches doubled. Ransomware surged. Vulnerability exploitation is at a historic high. GenAI is fueling both sides of the fight. And the organizations absorbing the most damage — SMBs — are the least resourced to respond.

Twelve thousand breaches. One message: the threat landscape isn't evolving incrementally. It's accelerating.

The question for every organization — from a 50-person firm to a Fortune 100 — is whether your defenses are accelerating with it.

---

Find all editions: [FIR Risk Tuesday](/tuesday/)

All newsletters and source materials: [FIR Risk Intelligence on GitHub](https://github.com/stikman28/fir-risk-intelligence)
