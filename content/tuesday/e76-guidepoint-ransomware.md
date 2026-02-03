---
title: "E76 - Ransomware's Profit Problem (And Why That Makes It Worse)"
description: "GuidePoint 2026 Ransomware Report: When profits shrink, attackers don't quit. They industrialize. 7,515 organizations were publicly posted as ransomware victims in 2025."
date: 2026-01-30
image: "/images/tuesday/e76-guidepoint-ransomware.png"
source: "GuidePoint 2026 Ransomware and Cyber Threat Report"
sourceUrl: "https://www.guidepointsecurity.com/resources/grit-2026-ransomware-and-cyber-threat-report/"
tags: ["Ransomware", "Law Firms", "Third-Party Risk", "MITRE ATT&CK"]
---

<img src="/images/tuesday/e76-guidepoint-ransomware.png" alt="FIR Risk E76 - GuidePoint Ransomware Annual Report 2026" class="img-fluid mb-4">

## The Counterintuitive Truth About Ransomware in 2026

Ransomware payments dropped 35% last year. Median ransom demands collapsed from $9.9 million to under $3 million. Sixty-four percent of victims refused to pay—up from 50% just two years ago.

Sounds like progress, right?

Here's the problem: **7,515 organizations were publicly posted as ransomware victims in 2025.** That's 20.6 victims per day. 124 ransomware groups are now active—more than ever.

When profits shrink, attackers don't quit. They industrialize.

---

## The Economics of Desperation

GuidePoint's 2026 report reveals a "free market pressure" effect reshaping the ransomware ecosystem:

| Metric | 2023 | 2024-25 | Trend |
|--------|------|---------|-------|
| Median ransom demand | $9.9M | <$3M | -70% |
| Victim refusal rate | ~50% | 64% | +14% |
| Blockchain payments | Baseline | -35% | Down |
| Daily victims | — | 20.6 | Up |
| Active groups | — | 124 | Up |

The math is brutal: if each attack yields less, you need more attacks. Enter AI.

> **INTEL [THREAT EVOLUTION]:** Ransomware groups are adopting AI/LLMs to automate reconnaissance, phishing, and lateral movement—enabling 10x faster attack cycles. Ransom demands now arrive within hours, not days.

---

## AI Turns Ransomware Into an Assembly Line

The 2026 playbook isn't about sophistication. It's about throughput.

GuidePoint documents the industrialization of ransomware operations:

- **Specialized roles**: Initial access brokers, negotiators, and "cashiers" operate like a corporate division
- **LLM target prioritization**: AI analyzes stolen data in minutes to identify who will pay the most
- **Double Extortion 2.0**: Personalized ransom notes generated from victim financial profiles
- **Polymorphic malware**: AI-generated, fileless payloads that evade signature-based detection

This isn't evolution. It's mass production.

> **INTEL [ATTACK TECHNIQUE]:** AI-augmented ransomware groups can now execute end-to-end attacks—from initial access to ransom demand—with minimal human intervention. The attack lifecycle that took weeks now takes hours.

---

## One Breach, Thousands of Victims

The highest-ROI attack in 2026? Compromise a third-party provider.

Ransomware groups have learned that MSPs, managed file transfer platforms, and SaaS providers are force multipliers. One vulnerability, one breach, hundreds of downstream victims.

The playbook is proven:
- **Kaseya (2021)**: REvil encrypted 1,500+ client networks through a single RMM compromise. Demanded $70 million.
- **MOVEit (2023)**: CVE-2023-34362 led to 1,000+ organizations breached—universities, healthcare, Fortune 500.

| Target Type | Why Attackers Love Them |
|-------------|------------------------|
| MSPs | Centralized access to client networks |
| MFT Platforms | Handle bulk sensitive data transfers |
| SaaS Providers | Credential harvesting at scale |
| Cloud Infrastructure | Overprivileged accounts everywhere |

> **INTEL [CRITICAL VULNERABILITY]:** Organizations with weak segmentation between client environments or inconsistent patch management are primary targets. Your vendor's security posture is now your security posture.

**MITRE ATT&CK Mapping:**
- **T1133** (External Remote Services): Exploiting MSP tools like Kaseya
- **T1190** (Exploit Public-Facing Application): Zero-days in MFT platforms like MOVEit

---

## New Target: Law Firms

GuidePoint flags legal services as an emerging high-value vertical—and the numbers back it up.

**2025 by the numbers:**
- **217 law firm breaches** (12% of all ransomware incidents)
- **41% payment rate**—far above the 36% cross-sector average
- **$1.2M average ransom demand** (up 60% from 2024)
- **98% involved double extortion** (encryption + data leak threats)

Why are law firms so attractive? They're the perfect extortion target:

| Factor | Why It Matters |
|--------|---------------|
| **Sensitive data** | M&A deals, litigation strategy, client PII |
| **Third-party gateway** | Compromising one firm exposes multiple corporate clients |
| **Reputation pressure** | Disclosure destroys client trust |
| **Higher payment rate** | 41% pay vs. 36% average—attackers know the math |

> **INTEL [SECTOR ALERT]:** Law firms paid ransoms at a 41% rate in 2025—about 14% more often than the cross-sector average. With average demands up 60% year-over-year, legal services are now a premium target.

---

## What Organizations Should Do Now

GuidePoint's findings point to three defensive priorities:

**1. Treat third-party risk as primary risk.**
Your vendors are your attack surface. Enforce zero trust and least privilege for every third-party connection. Audit their security posture regularly—not annually, continuously.

**2. Match AI with AI.**
If attackers use LLMs to find you, you need AI to find them first. Deploy AI-augmented threat detection, behavioral analytics, and automated response playbooks. SOAR platforms should handle routine isolation and credential resets in seconds.

**3. Assume you'll be hit—plan for speed.**
With 20+ victims per day, the question isn't if but when. Your recovery playbooks need to execute faster than attackers can escalate. Tabletop exercises should include AI-driven attack scenarios.

**For law firms specifically:**
- Segment client data with zero-trust architecture
- Audit case management and e-discovery vendors quarterly
- Implement immutable, offline backups (per NIST SP 800-53)
- Run legal-themed phishing simulations (fake court filings, client requests)

---

## What We're Watching

**State-sponsored overlap.** GuidePoint notes increasing convergence between ransomware groups and nation-state actors. Ransomware is becoming a deniable disruption tool—expect more attacks on critical infrastructure with murky attribution.

**The law firm domino.** 217 breaches in 2025, and attackers now know legal pays 50% more often than average. If a major firm gets hit publicly in 2026, expect a feeding frenzy.

*Sandra Joyce, VP of Google Threat Intelligence, summarized it plainly: "We expect to see more ransomware and extortion. This problem is going to continue and increase in 2026."*
