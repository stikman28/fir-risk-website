---
title: "E78 - Three Flags, One Target"
description: "CERT-EU's January 2026 Cyber Brief: China, Russia, and North Korea converged on Western critical infrastructure simultaneously. Salt Typhoon, Sandworm, Contagious Interview, 6 zero-days, and LLM targeting."
date: 2026-02-10
image: "/images/tuesday/e78-cert-eu-cyber-brief.png"
thumbnail: "/images/tuesday/e78-cert-eu-cyber-brief.png"
source: "CERT-EU Cyber Brief — January 2026"
sourceUrl: "https://cert.europa.eu/publications/threat-intelligence/cb26-02/"
tags: ["Nation-State", "Salt Typhoon", "Sandworm", "Critical Infrastructure", "Zero-Day", "CERT-EU", "MITRE ATT&CK"]
---

<img src="/images/tuesday/e78-cert-eu-cyber-brief.png" alt="FIR Risk E78 - CERT-EU Cyber Brief January 2026" class="img-fluid mb-4">

## What You Need to Know

CERT-EU analyzed 268 open-source reports for their January 2026 Cyber Brief. One pattern jumps off the page: **China, Russia, and North Korea all hit Western critical infrastructure in the same month.**

China-linked Salt Typhoon infiltrated UK telecom networks reaching Downing Street. Russia-linked Sandworm deployed a data wiper against Polish energy operators. North Korea-linked Contagious Interview weaponized Visual Studio Code to compromise developers worldwide.

Three nations. Three sectors. One month. And they brought six actively exploited zero-days with them.

This isn't a forecast. This already happened.

---

## Salt Typhoon: Two Governments, One Campaign

Salt Typhoon had the most consequential January of any threat actor — running parallel espionage operations against two Western governments simultaneously.

**United Kingdom:** Salt Typhoon allegedly compromised phones of senior Downing Street aides through UK telecom network infiltration — an operation running since 2021. The intrusion exposed sensitive communications and metadata involving figures around former prime ministers. Intelligence sources described it as reaching "the heart of government."

**United States:** Separately, Salt Typhoon compromised email systems of US congressional committee staff. Attributed to China's Ministry of State Security, the operation enabled access to sensitive legislative communications including calls and messages.

And Salt Typhoon wasn't alone. China-linked UAT-8837 was targeting US and Canadian critical infrastructure through zero-day exploitation, while HoneyMyte (Mustang Panda) expanded CoolClient backdoor operations across six countries. January saw at least four distinct Chinese cyber operations running concurrently.

**FIR Risk Platform MITRE ATT&CK Analysis — Salt Typhoon:**
- Initial Access: T1133 (External Remote Services), T1204 (User Execution)
- Persistence: T1098 (Account Manipulation), T1219 (Remote Access Software)
- Exfiltration: T1041 (Exfiltration Over C2 Channel)

> **INTEL [THREAT ALERT]:** Salt Typhoon's simultaneous operations against UK telecoms and US congressional systems confirm a persistent, multi-year campaign targeting Western government communications at the infrastructure level. Telecom and government entities should assume compromise and conduct retroactive threat hunts for indicators dating back to 2021.

---

## Sandworm Returns to the Grid

On December 29, Russia-linked Sandworm targeted Polish renewable energy operators with a new data wiper dubbed DynoWiper by ESET. The attack hit two combined heat and power plants and a renewable energy management system. The national energy supply was not disrupted — but the targeting was unmistakable: energy infrastructure in a NATO member state supporting Ukraine.

If the name Sandworm makes you uneasy, it should. This is the same group behind three of the most consequential cyberattacks in history:

| Year | Operation | Impact |
|------|-----------|--------|
| **2015** | Ukraine power grid (BlackEnergy) | First-ever cyberattack causing a power outage |
| **2016** | Ukraine power grid (Industroyer) | Remote substation shutdowns via ICS protocol exploitation |
| **2017** | NotPetya | $10B+ in global damages (Maersk, Merck, UK NHS) |
| **2025** | DynoWiper — Poland renewables | Data wiper targeting NATO-allied energy infrastructure |

DynoWiper represents an evolution. Unlike Industroyer, which directly manipulated industrial control systems, DynoWiper targets the IT systems supporting energy operations — management platforms, not turbines. The destruction is administrative, not physical. But the message is the same.

**FIR Risk Platform MITRE ATT&CK Analysis — Sandworm:**
- Initial Access: T1190 (Exploit Public-Facing Application)
- Execution: T1059 (Command and Scripting Interpreter)
- Lateral Movement: T1021 (Remote Services)
- Impact: T1485 (Data Destruction)

> **INTEL [THREAT ALERT]:** Sandworm's DynoWiper continues a decade-long pattern of targeting energy infrastructure with destructive malware. European energy operators — especially in Eastern Europe — should validate OT/IT network segmentation, deploy air-gapped backups, and run incident response exercises specifically for wiper scenarios.

---

## The Developer as Attack Surface

North Korea took a different path: target the people who build the software.

The Contagious Interview campaign exploits Visual Studio Code task files to deliver malware during fake recruitment exercises. A developer opens a project, clicks "Trust," and the malicious task file executes silently. No suspicious downloads. No flagged executables. Just a coding exercise that isn't one.

It's social engineering meets supply chain. By compromising developers, attackers can harvest credentials, poison code, and access the systems those developers build for.

The technique works because VS Code tasks are a legitimate feature developers use daily, coding exercises are normal in tech hiring, and the attack requires only that the developer open the project. It's frictionless.

> **INTEL [TECHNIQUE]:** Contagious Interview weaponizes developer workflow tools through fake recruitment pipelines. Development teams should enforce VS Code workspace trust policies, restrict task auto-execution, and treat unsolicited coding exercise projects from unknown sources as hostile.

---

## January's Zero-Day Cluster

The state-sponsored campaigns came with a wave of actively exploited vulnerabilities:

| CVE | Target | Severity | Status |
|-----|--------|----------|--------|
| **CVE-2026-20045** | Cisco Unified Communications / Webex | Critical RCE — root access | Exploited; CISA KEV deadline Feb 11 |
| **CVE-2026-21509** | Microsoft Office (multiple versions) | High — security bypass | Exploited; patches pending for 2016/2019 |
| **CVE-2026-1281** | Ivanti EPMM | Critical | Exploited in the wild |
| **CVE-2025-8088** | WinRAR | Critical | Exploited by Russia AND China actors |
| **CVE-2025-64155** | Fortinet FortiSIEM | Critical — command injection | Exploit code publicly released |
| **CVE-2025-53690** | SiteCore (ViewState deserialization) | Critical | Exploited by UAT-8837 (China) |

Two patterns stand out. First, state actors are exploiting the same vulnerabilities simultaneously — Google documented both Russia- and China-linked groups burning CVE-2025-8088 in WinRAR. Second, Horizon3.ai publicly released exploit code for Fortinet FortiSIEM, and Fortinet is historically one of the most targeted vendors in the wild.

Meanwhile, "PackageGate" disclosed six zero-day flaws in JavaScript package managers (npm, pnpm, vlt, Bun) that bypass supply chain protections. Most vendors patched. **npm declined to fix, telling users to vet packages manually.**

> **INTEL [VULNERABILITY]:** The January zero-day cluster represents an elevated exploitation tempo by both state and criminal actors. Cisco CVE-2026-20045 has a Feb 11 CISA deadline. Fortinet FortiSIEM exploit code is public. Microsoft Office patches are pending for older versions. Prioritize accordingly.

---

## LLM Infrastructure Is Now a Target

One finding in the CERT-EU brief deserves its own spotlight: **threat actors are actively targeting AI infrastructure.**

GreyNoise documented two coordinated campaigns against global LLM deployments in January. One exploited server-side request forgery (SSRF) vulnerabilities. The other conducted large-scale endpoint enumeration linked to a professional threat actor. Over **91,000 sessions** were recorded — systematic reconnaissance of AI services at scale.

This isn't theoretical. It's happening now. As enterprises race to deploy AI endpoints, attackers are mapping them.

> **INTEL [TREND]:** LLM infrastructure is now an active target for reconnaissance and exploitation. Organizations deploying AI services should audit model endpoint exposure, enforce authentication on all inference APIs, and monitor for anomalous SSRF patterns. This attack surface will expand throughout 2026.

---

## Policy Moves Worth Watching

Governments didn't sit idle in January:

- **EU Cybersecurity Package (Jan 20):** Strengthens ICT supply chain security, expands ENISA's role, simplifies NIS2 compliance. Member States get one year to implement after approval.
- **France Cyber Strategy 2026-2030 (Jan 29):** Five pillars — talent, resilience, deterrence, sovereignty, international cooperation.
- **China's Revised Cybersecurity Law (Jan 1):** Expanded extraterritorial reach — Chinese authorities can now penalize foreign entities whose activities abroad threaten China's national security.
- **Law Enforcement:** Microsoft, Europol, and national authorities took down RedVDS, a global cybercrime-as-a-service platform. Spain arrested 34 Black Axe-linked BEC suspects.

The EU and France are building defensive frameworks. China is extending its legal reach internationally. Both sides are preparing for a more contested cyberspace.

---

## What This Means for You

**Telecom and government:** Salt Typhoon has operated since 2021. Retroactive threat hunts aren't optional — they're overdue. Focus on metadata access patterns and lateral movement in core network infrastructure.

**Energy sector:** Sandworm's decade-long track record speaks for itself. Validate OT/IT segmentation. Test wiper-specific incident response. Eastern European operators face elevated risk.

**Development teams:** Lock down VS Code workspace trust settings. Establish policies for evaluating external coding projects. Make hiring teams aware that recruitment pipelines are an active attack vector.

**Everyone:** Cisco CVE-2026-20045 has a February 11 deadline. Fortinet exploit code is public. Microsoft Office patches are pending. Patch now.

---

## What We're Watching

**Salt Typhoon scope.** Two simultaneous government-level operations suggest additional undisclosed compromises. Telecom infrastructure remains the primary vector.

**Wiper proliferation.** Sandworm's DynoWiper targeting NATO-allied energy could be a template for similar operations during periods of geopolitical tension.

**LLM exploitation.** 91,000+ reconnaissance sessions in January. The next phase moves from enumeration to weaponization.

**Kimwolf botnet.** Over two million infected devices — Android TV boxes, digital photo frames, residential proxies — and still growing. The consumer IoT attack surface remains largely undefended.

---

## The Bottom Line

January delivered 268 reports' worth of evidence that we've entered a new phase. Three nation-states targeted Western critical infrastructure simultaneously. Six major vulnerabilities were actively exploited. AI infrastructure became a documented target at scale for the first time.

The question for security leaders isn't whether your sector is targeted. After January, the answer is obvious.

The question is whether you've adapted faster than the threat actors.

---

Find all editions: [FIR Risk Tuesday](/tuesday/)

All 2026 newsletters and source materials: [FIR Risk Intelligence on GitHub](https://github.com/stikman28/fir-risk-intelligence)
