---
title: "E82 - Blending In"
description: "Cloudflare processes 20% of global internet traffic and blocks 230 billion threats daily. Their inaugural threat report reveals attackers have stopped breaking in — they're blending in. 94% of login attempts are bots. 63% of human logins use compromised credentials. Living off XaaS is the new attack model."
date: 2026-03-09
image: "/images/tuesday/e82-cloudflare-threat-landscape.png"
thumbnail: "/images/tuesday/e82-cloudflare-threat-landscape.png"
source: "2026 Cloudflare Threat Report — March 3, 2026"
sourceUrl: "https://www.cloudflare.com/lp/threat-report-2026/"
tags: ["Cloudflare", "Identity Security", "DDoS", "Supply Chain", "SaaS Security", "Nation-State", "North Korea", "Infostealers", "MITRE ATT&CK", "Risk Management"]
---

## What You Need to Know

Cloudflare processes over 20% of global internet traffic. They block 230 billion threats daily. Their inaugural threat report isn't based on surveys or projections — it's based on what they actually see hitting the wire.

**The core finding: Attackers have stopped breaking in. They're blending in.** They weaponize your cloud services, your SaaS integrations, your legitimate credentials. Traditional perimeter security is defending against an attack model that no longer exists.

This is Cloudflare's view from the front lines. Here's what matters.

> **INTEL [GLOBAL] [TREND]:** The 2026 threat landscape is defined by three converging shifts — the weaponization of identity, the industrialization of SaaS supply chain exploitation, and hyper-volumetric DDoS strikes that outpace human response.

---

## Living off Your Cloud

Cloudflare introduces **Living off XaaS (LotX)** — the evolution of "living off the land" for cloud environments. Attackers no longer need malware. They use your infrastructure.

- **Paste site dead drops** — C2 coordination through public platforms like teletype.in and rentry.co
- **SaaS-hosted phishing** — Credential harvesting hosted on Azure Web Apps, trusted by default
- **PaaS-ing the perimeter** — Payloads delivered via Google Drive, Dropbox, GitHub
- **Encrypted tunneling** — Developer tools weaponized to bypass egress filtering

The result: malicious activity that looks identical to normal business operations. Your security tools trust these services. So does your firewall. So do your employees.

**When attackers operate as authorized users within your own platforms, the threat isn't external anymore. It's architectural.**

> **INTEL [GLOBAL] [TECHNIQUE]:** Living off XaaS (LotX) transforms cloud infrastructure from attack target to attack platform. Threat actors weaponize trusted SaaS services for C2, phishing, and data exfiltration — invisible to traditional perimeter defenses.

---

## One Integration, Hundreds of Victims

The **GRUB1 campaign** is this report's case study in SaaS supply chain exploitation. The attack chain:

1. Automated credential scanning using TruffleHog against code repositories
2. AI-assisted navigation — LLMs used in real-time to explore unfamiliar SaaS environments
3. Pivot from Salesloft Drift into Salesforce through a trusted integration
4. One compromised connection → hundreds of corporate tenants exposed

This isn't a sophisticated nation-state operation. GRUB1 actors were relatively unsophisticated. They didn't need to be. Over-privileged SaaS integrations did the work for them.

**Your security is now defined by your weakest third-party integration, not your perimeter.**

> **INTEL [GLOBAL] [THREAT ALERT]:** GRUB1 campaign demonstrates AI-assisted SaaS supply chain exploitation at scale. Single compromised integration cascaded through hundreds of downstream tenants via legitimate connection channels.

---

## The Insider Factory

North Korea has industrialized insider placement. Not espionage. Employment.

**The operation:**
- AI-generated deepfakes to pass video interviews
- US-based "laptop farms" with facilitators hosting corporate hardware
- Remote access via RMM software — working from abroad while appearing domestic
- Fabricated LinkedIn and GitHub profiles to establish credibility
- Rented credentials from complicit US citizens for identity verification

**The detection signatures:**
- Impossible travel alerts (US login followed by foreign IP)
- Mouse-jiggling software maintaining session activity
- Video metadata artifacts from real-time deepfake rendering

The goal isn't intelligence collection. It's revenue — hundreds of millions funneled to the North Korean regime through legitimate paychecks.

Cloudflare's conclusion: **Accounting for human risk is now just as vital as patching software vulnerabilities.**

> **INTEL [GLOBAL] [THREAT ALERT]:** North Korean IT worker infiltration represents industrialized insider threat at nation-state scale. AI deepfakes, laptop farm infrastructure, and fabricated digital identities enable persistent access through legitimate employment channels.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| DDoS attacks in 2025 | **47.1 million** (doubled YoY) |
| Largest DDoS attack ever | **31.4 Tbps** (6x the 2024 record) |
| World record DDoS attacks in 2025 | **19** |
| DDoS attacks mitigated per hour | **5,376** |
| Bot traffic share of all HTTP | **30%** |
| Login attempts from bots | **94%** |
| Human logins using compromised credentials | **63%** |
| BEC attempts intercepted | **$123 million** |
| Mean BEC theft per attempt | **$49,225** |
| Emails failing SPF | **43%** |
| Emails lacking DKIM | **44%** |
| Emails failing DMARC | **46%** |
| Ransomware cases traced to infostealers | **54%** |
| PhaaS kit cost | **$355/month** |

Three numbers tell the whole story: **30% of traffic is bots. 94% of login attempts are bots. 63% of human logins use already-compromised credentials.** Traditional authentication is operating on borrowed time.

> **INTEL [GLOBAL] [BENCHMARK]:** Credential integrity has collapsed — 94% of login attempts are automated, and 63% of human logins involve previously compromised credentials. Organizations relying on password-based authentication face systemic exposure.

---

## Nation-State Landscape

Cloudflare uses an **adjective + animal** naming convention that maps to nation-state origin:

| Nation | Animal | Key Actors |
|--------|--------|------------|
| **Russia** | Shrew / Duck | NastyShrew, SleezyShrew (APT29), CallowDuck (Scattered Spider) |
| **China** | Toad | DazedToad (Volt Typhoon), FrumpyToad (APT41), ClumsyToad (Mustang Panda) |
| **North Korea** | Slug | PutridSlug, PatheticSlug (Kimsuky), FoolishSlug |
| **Iran** | Krill | MuddyKrill (MuddyWater), CloyingKrill (APT33), CrustyKrill |

**What's shifted:**
- **Russia** — Cyber operations integrated with kinetic military campaigns. Wiper malware and hacktivism as force multipliers.
- **China** — DazedToad (Volt Typhoon) pre-positioning in US critical infrastructure. Not stealing data — preparing for disruption.
- **North Korea** — AI-enhanced social engineering targeting policy cycles. Industrial-scale financial theft via crypto and IT worker placement.
- **Iran** — Cyber reconnaissance coordinated with kinetic operations. Targeting aerospace, defense, and energy sectors.

The Americas remain the most targeted region globally. Manufacturing and critical infrastructure account for over 50% of targeted attacks.

---

## What Risk Leaders Must Do

**1. Move past MFA to identity-first zero trust.**
Infostealers like LummaC2 harvest session tokens after MFA completes. Deploy FIDO2/passkeys. Implement continuous session monitoring. Invalidate sessions on impossible travel or suspicious device fingerprints.

**2. Audit every SaaS integration this week.**
GRUB1 proved that one over-privileged API connection can expose your entire tenant ecosystem. Apply least privilege to every integration. Focus on Salesforce, Slack, and GitHub — the tools with the broadest blast radius.

**3. Secure AI usage before it secures your exit.**
Employees using generative AI tools create data leakage vectors your DLP wasn't designed for. Deploy browser isolation for AI tools. Monitor AI prompts for sensitive data. This is the new insider threat — accidental, constant, and invisible.

**4. Accept that humans can't respond fast enough.**
Most 2025 DDoS attacks lasted under 10 minutes. The 31.4 Tbps record was a UDP flood. Deploy autonomous, edge-based mitigation. Legacy scrubbing centers are too slow for multi-terabit attacks that peak and conclude before a human picks up the phone.

---

## What This Means for You

**If you're a CEO or Board Director:** Cloudflare's data confirms the threat landscape has industrialized. Ask two questions: *How fast can we contain a credential compromise?* and *Do we know every SaaS integration with admin access?* If nobody can answer both, your risk posture has blind spots at the architectural level.

**If you're a CISO:** The LotX framework changes your detection model. You can't block Google Drive or Azure Web Apps — your business runs on them. Shift investment from perimeter tools to behavioral analytics that distinguish normal usage from weaponization. And audit your SaaS integrations before GRUB1's successors do it for you.

**If you lead a SOC team:** The bot traffic statistics are your new baseline reality. When 94% of login attempts are automated, your alert queue is mostly noise. Invest in credential intelligence feeds and session anomaly detection. Focus on the 63% of human logins using compromised credentials — that's where the real intrusions hide.

**If you're in risk or compliance:** The email authentication stats (43-46% failure rates across SPF/DKIM/DMARC) are a governance gap, not just a technical one. If nearly half your inbound email lacks basic authentication, your phishing exposure is structural. Add email authentication posture to your next board risk report.

---

## What We're Watching

**SaaS supply chain regulation.** GRUB1 will accelerate demand for integration audit standards. Expect frameworks requiring continuous monitoring of third-party API permissions, not just annual vendor assessments.

**Infostealer-to-ransomware pipeline.** 54% of ransomware traced to infostealers confirms this is now the primary attack chain. Organizations that block infostealers at the browser and endpoint will materially reduce ransomware exposure.

**DDoS democratization.** With botnets like Aisiru controlling 1-4 million hosts, multi-terabit attacks are no longer nation-state exclusive. Mid-tier threat actors now have the firepower that was once reserved for state-sponsored campaigns.

**North Korean IT worker detection.** Biometric verification, hardware geofencing, and deepfake detection in hiring workflows will become standard. The laptop farm model is too effective to remain niche.

---

## The Bottom Line

Cloudflare sees 20% of the internet. What they're telling us is that the fundamental model of cybersecurity — build walls, detect intrusions, respond to alerts — is being outrun by attackers who don't intrude at all. They log in. They use your tools. They look like you.

The organizations that navigate this shift won't be the ones with the highest walls. They'll be the ones that can tell the difference between a legitimate user and an attacker who looks exactly like one.

The threat isn't at the gate anymore. It's already inside, wearing a badge.

---

Find all editions: [FIR Risk Tuesday](https://firrisk.ai/tuesday/)

Source: [GitHub - FIR Risk Intelligence](https://github.com/stikman28/fir-risk-intelligence)
