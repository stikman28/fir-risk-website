---
title: "INTEL-4: Your Cloud APIs Are the Attack Infrastructure"
description: "Muddled Libra doesn't bring malware. They call your help desk, reset a password, and use Microsoft Graph API to own your cloud from the inside. Unit 42's 2026 report flags them across aerospace, finance, tech, and telecom."
date: 2026-03-04
type: "intel"
intel_type: "THREAT ALERT"
thumbnail: "/images/intel/intel-4-muddled-libra-cloud-api-abuse.png"
tags: ["Muddled Libra", "Scattered Spider", "Cloud Security", "Microsoft Graph API", "Identity Security", "MITRE ATT&CK", "Unit 42", "Ransomware"]
---
## The INTEL

**Muddled Libra** (Scattered Spider / UNC3944) doesn't bring malware. They call your help desk, reset a password, and use Microsoft Graph API to own your entire cloud environment from the inside.

Unit 42's 2026 Incident Response Report flags this group as a top threat across aerospace, financial services, high technology, and telecommunications. Their playbook: social-engineer initial access, then pivot to cloud infrastructure using **your own APIs and admin consoles** as attack tools.

They don't need exploits. They need credentials.

---

## Why It Matters

Traditional detection looks for malicious binaries, anomalous network traffic, and known indicators. Muddled Libra generates none of these. Every action they take — Azure resource enumeration, M365 data access, role escalation — uses legitimate cloud services doing exactly what they were designed to do.

Your SIEM won't flag it. Your EDR won't catch it. Your firewall never sees it.

The group partners with **DragonForce RaaS** for ransomware operations, making them a dual threat: data exfiltration through Graph API, followed by encryption through ransomware-as-a-service.

---

## What To Do

- **Monitor Microsoft Graph API usage patterns** — Baseline normal API call volumes and flag anomalies: bulk resource enumeration, cross-region queries, and M365 storage exfiltration sequences.
- **Harden help desk identity verification** — Muddled Libra's primary entry point is impersonating employees for password resets. Require multi-factor verification for all credential changes. No exceptions.
- **Audit cloud role assignments weekly** — Watch for T1098.003 (Additional Cloud Roles). Any new admin role assignment outside change management should trigger an immediate investigation.
- **Alert on cloud cost/usage API queries** — Attackers use cost APIs to map your highest-value assets. Unusual queries to Azure Cost Management or usage APIs are a reconnaissance indicator.

---

## MITRE ATT&CK

| Technique | Name | Relevance |
|-----------|------|-----------|
| T1526 | Cloud Service Discovery | Graph API used to map Azure resources at scale |
| T1538 | Cloud Service Dashboard | Admin consoles weaponized for lateral movement |
| T1580 | Cloud Infrastructure Discovery | Cross-region enumeration of architecture |
| T1098.003 | Additional Cloud Roles | Privilege escalation through role manipulation |
| T1078 | Valid Accounts | Social-engineered credentials bypass all perimeter controls |

---

## Learn More

- [Unit 42 Global Incident Response Report 2026](https://www.paloaltonetworks.com/resources/research/unit-42-incident-response-report) — Primary source
- [FIR Risk Tuesday E81 — 72 Minutes](/tuesday/e81-unit42-incident-response-debrief/) — Full debrief of the Unit 42 report
- [MITRE ATT&CK — Muddled Libra](https://attack.mitre.org/groups/) — Threat actor profile
- [FIR Risk Intelligence](https://github.com/stikman28/fir-risk-intelligence) — Source prompts, methodology, and all published INTEL

---

*Powered by [FIR Risk Platform](/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
