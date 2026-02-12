---
title: "INTEL-3: 91,000 Sessions — Threat Actors Are Mapping Your AI Infrastructure"
description: "GreyNoise documented 91,000+ reconnaissance sessions against LLM deployments in January 2026. If your AI endpoints are reachable without authentication, assume they've been mapped."
date: 2026-02-11
type: "intel"
intel_type: "TREND"
thumbnail: "/images/intel/intel-3-llm-infrastructure-targeting.png"
tags: ["AI Security", "LLM", "MITRE ATT&CK", "MITRE ATLAS", "OWASP", "CISO"]
---

<img src="/images/intel/intel-3-llm-infrastructure-targeting.png" alt="FIR Risk INTEL-3 - LLM Infrastructure Targeting" class="img-fluid mb-4">

## The INTEL

GreyNoise documented two coordinated campaigns against global LLM deployments in January 2026. One exploited server-side request forgery (SSRF) vulnerabilities in inference APIs. The other conducted large-scale endpoint enumeration linked to a professional threat actor. Over **91,000 sessions** were recorded — systematic reconnaissance of AI services at scale.

The reconnaissance phase is over for many organizations. Attackers already know where your AI lives.

---

## Why It Matters

Every enterprise is deploying AI endpoints. Most aren't securing them like production infrastructure. But LLMs connected to internal systems — CRM, document stores, analytics — are lateral movement paths that traditional monitoring doesn't cover. One compromised inference API is a pivot point into your enterprise.

---

## What To Do

- **Audit every exposed AI endpoint** — If it's reachable from the internet without authentication, assume it's already been mapped. Enforce OAuth2, rate limiting, and scoped API keys on all inference APIs.
- **Segment AI infrastructure** — Isolate LLM servers from sensitive networks. An inference API should never be one hop from your production database.
- **Monitor for enumeration** — Watch for rapid API calls with varying payloads, SSRF indicators, and anomalous query volumes against model endpoints.

---

## MITRE ATT&CK

| Technique | Name | Relevance |
|-----------|------|-----------|
| T1595 | Active Scanning | 91,000+ sessions enumerating LLM endpoints |
| T1190 | Exploit Public-Facing Application | SSRF against inference APIs |
| T1059 | Command and Scripting Interpreter | Prompt injection to execute commands via LLM integrations |

---

## Learn More

- [CERT-EU Cyber Brief — January 2026](https://cert.europa.eu/publications/threat-intelligence/cb26-02/) (TLP:CLEAR)
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [MITRE ATLAS](https://atlas.mitre.org/) — Adversarial Threat Landscape for AI Systems
- [FIR Risk Intelligence](https://github.com/stikman28/fir-risk-intelligence) — Source prompts, methodology, and all published INTEL

---

*Powered by [FIR Risk Platform](/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
