---
title: "E93 - The Attacks Aren't New. The Economics Are."
description: "Anthropic's September 2026 threat intelligence report documents eight months of disrupted AI misuse, and its central finding is not a new technique. It's a new cost structure: the reconnaissance, exploitation, tooling and data processing that once set elite operations apart now run as AI agents, at machine speed and in parallel. You don't need exotic new controls. You need the familiar ones to run at the attacker's speed, and your likelihood scores and your assumption that you're too small to target need to change."
date: 2026-10-13
source: "Anthropic — Detecting and countering misuse of AI: September 2026"
sourceUrl: "https://www.anthropic.com/threat-intelligence-report-september-2026"
tags: ["AI Security", "Agentic AI", "Threat Intelligence", "Anthropic", "Enterprise Frontier Safeguards", "AI Governance", "Credential Theft", "Third-Party Risk", "Patch Management", "SMB", "Board Governance", "CISO", "Risk Management"]
---

## What a frontier lab can see that you can't

Last November, Anthropic disclosed GTG-1002, the first documented campaign in which AI ran most of an espionage operation on its own. We covered how quickly that case became mainstream doctrine in [E92](/tuesday/e92-time-is-the-attack-surface/) and [INTEL-34](/intel/intel-34-doctrine-at-machine-speed/). Anthropic's new report, "Detecting and countering misuse of AI: September 2026," covers what came next: operations its Threat Intelligence team disrupted between December 2025 and August 2026, across seven harm areas from cyber operations and fraud to influence operations, surveillance and illicit model distillation.

Why read a vendor's report about its own platform? Because a frontier lab sees attacks at a stage no one else can: while they're being *built*. Breach reports tell you what happened after an intrusion. This one shows how intrusions are being assembled. That's an early-warning signal you can't get from your own telemetry, and Anthropic deserves credit for publishing it. This edition extracts what matters for risk and compliance leaders, and runs our usual check on what the report can't prove.

— Bruce, FIR Risk Advisory

---

## Bottom Line

In June we argued, from the Verizon DBIR, that AI was a *breadth* multiplier, not a *depth* multiplier ([E90](/tuesday/e90-refinement-not-revolution/)). Anthropic's report confirms the first half and escalates it. The techniques are still old: stolen credentials, unpatched edge devices, exposed services, SQL injection, phishing. What's new is that breadth now covers the expensive work. The reconnaissance, exploitation, tool development and data processing that once required a well-funded team are delegated to AI agents running at machine speed and in parallel.

**Same playbook, new cost structure: attacks on known, fixable weaknesses get more frequent, while damage per incident stays the same.**

---

## The One Sentence Your Board Needs

> Attackers aren't using new techniques; they're using AI to run familiar ones faster and more often, so the measure that matters now is how quickly we close known gaps.

A control that works on a 30-day cycle is not the same control when the attacker moves in hours. The question for the board isn't whether we have the right controls on paper. It's whether they operate fast enough to matter.

---

## 1. The labor that set elite attackers apart is now automated

The report's core finding, in its own words: "The attacks themselves are familiar." None of the operations depended on a technique defenders had never seen. What changed is who does the work.

The clearest example is a Russia state-nexus espionage actor Anthropic tracks as GTG-20006, whose attribution Anthropic says is consistent with public reporting on Midnight Blizzard. It hit more than 20 organizations, mostly in Ukraine and Europe: government ministries, defense and intelligence bodies, embassies, think tanks and defense companies. AI-driven workflows researched and registered phishing domains, sent the emails and monitored command-and-control channels. When security products detected its malware, monitoring agents modified and rebuilt the code to evade those detections. The human operators mostly adjusted the Claude Code skills that drove the workflows.

Criminal groups showed the same pattern. In one case involving operators Anthropic suspects are affiliates of the ShinyHunters collective, a single stolen developer token became full administrative control of a victim's cloud environment in roughly three hours, and one affiliate took data from roughly 200 of a SaaS company's downstream customer organizations.

**What it means for you:** in risk-register terms, *likelihood* rises for every known, fixable weakness you carry (stolen passwords, unpatched internet-facing devices, exposed services, phishing), because each attempt costs the attacker far less. *Severity* doesn't change; the report itself notes that potential payoffs are largely unchanged. That's a concrete reason to re-score this quarter, not a vague worry about AI.

---

## 2. AI access is now the thing being stolen

New in 2026: attackers are going after AI itself. Anthropic reports that criminal groups now treat access to AI (compromised API keys, session tokens and devices) as a primary objective, often selling it on through brokers.

Two cases show how. GTG-50020 used production AI API keys stolen from customers' environments, then attacked roughly thirty AI companies in about four days trying to reach a pre-release Claude model. Every attempt failed, and Anthropic says its own systems were not compromised. GTG-50021 ran a fake reseller offering cheap Claude access that was neither cheap nor actually Claude: it quietly routed buyers to another model and harvested their Anthropic account credentials for resale.

Anthropic's own advice to organizations is blunt: treat AI keys and agent integrations as seriously as production credentials, and buy AI access only through authorized channels.

**What it means for you:** your AI keys are now a target in their own right, and so is your AI supply chain. Ask every third-party AI tool, router and reseller where your traffic actually goes.

---

## 3. Marginal targets are now worth attacking

When reconnaissance and exploitation were expensive, it made sense for attackers to concentrate on high-value targets. Anthropic's report says AI autonomy makes previously marginal targets viable and encourages higher-volume, lower-touch operations. Our reading: an unpatched VPN appliance at a 200-person company is now an economic target, not an afterthought.

**What it means for you:** if your security budget rests on the assumption that you aren't interesting enough to attack, that assumption no longer holds. Your patch metrics need to show the worst-case exposure on internet-facing systems, not just the average, at every size of organization.

---

## 4. The lab's answer: checks and balances, if you hold up your end

Nine days before the threat report, Anthropic announced Enterprise Frontier Safeguards (EFS). It's the control model that matches the threat picture: Anthropic runs automated detection across sessions and accounts for offensive cyber activity, biological misuse, and stolen or leaked credentials, while the customer keeps the monitoring data in its own cloud, under its own keys, and reviews every flag with its own people. There's no Anthropic fee. Rollout is phased to eligible customers, with broad availability targeted for this fall.

It was shaped by more than 100 enterprises and the CISOs of the largest US banks, and in our view it addresses the right problem. Whether it works is not yet demonstrated: Anthropic hasn't published detection performance, flag thresholds or eligibility rules. And it moves accountability rather than removing it: there's no Anthropic analyst behind an EFS alert. We cover it in [INTEL-36](/intel/intel-36-the-alarm-is-yours/), and our free [EFS Readiness Guide](/efs-readiness/) has the full checklist, including compensating controls for organizations that aren't eligible.

---

## The test we ran before we believed any of it

- **It's self-reported.** Anthropic is both the reporter and the platform, and some critics argue claims like these can't be independently verified. We weigh it accordingly: the patterns match what Google's GTIG ([E79](/tuesday/e79-gtig-ai-threat-tracker/)) and Verizon's DBIR ([E90](/tuesday/e90-refinement-not-revolution/)) have reported, and the techniques described are well established.
- **Anthropic has an interest.** EFS is Anthropic's product, launched nine days before this report, and press coverage notes the company is preparing a public offering. A report showing serious threats and a launch offering the safeguard serve it commercially. That doesn't make the findings wrong, but readers should weigh it.
- **It's the extreme end.** Anthropic stresses that these cases are the most notable and novel activity it found, not typical misuse. Read it as a view of where the frontier of attacker capability is, not of what the median attacker does today.
- **It's one provider's view.** Anthropic only sees what happens on its own platform. Attackers can and do use other models, so no single lab sees the whole picture, which is the strongest argument for every lab publishing at this level.
- **Defenses did work.** Not every case was a success for the attacker. GTG-50020 never reached the pre-release model it was after, and every operation in the report was eventually detected and disrupted.

None of that weakens the core finding. If anything, the fact that the techniques are old makes it more credible: nothing here requires believing in exotic new capabilities.

---

## So What Should Organizations Actually Do?

None of these are brand-new ideas. Most organizations already do some version of each. What changes is the speed and scope they need to run at. We've grouped them by when you can realistically act.

**Now: do these immediately**

1. **Find and lock down your AI keys.** Inventory every AI API key and account, move them into the vault you already use for production credentials, and rotate any you find in code, chat or shared files. Buy AI only through authorized channels.
2. **Re-score likelihood for known, fixable weaknesses.** These are stolen passwords, unpatched internet-facing devices like VPN gateways and firewalls, exposed services, and phishing. Raise their likelihood in your risk register. Impact stays roughly the same, since the report finds attackers' payoffs largely unchanged.
3. **Decide who owns AI alerts.** Before you have any monitoring in place, name who responds if your AI vendor tells you a key or account is being misused. If you're eligible, submit Anthropic's Enterprise Frontier Safeguards form so you're in the queue.

**Next: plan these over the next few quarters, in order of priority**

4. **Watch your own AI use.** You already monitor endpoints, identity and cloud. Add AI usage, spend and logs to that monitoring, with a triage playbook for misuse alerts, and review where third-party AI tools and resellers send your traffic.
5. **Shrink the worst-case exposure window.** You already track average patch time. Also report the *longest* exposure on internet-facing systems and known-exploited vulnerabilities, with a target in days, because an average can hide one device that's been open for two months.
6. **Enforce secure development, internally and with vendors.** You have the policies and contract clauses already. Add AI-assisted code review before release, and ask vendors for evidence, not attestation.

**Future: prepare now, act when you can**

7. **Adopt vendor-side safeguards as they arrive.** EFS isn't broadly available yet, and other AI vendors may follow with their own versions. Get your cloud storage, encryption keys and cleared reviewers ready, and ask every AI vendor what misuse alerts it can send you.
8. **Defend at machine speed.** The labor that's now cheap for attackers will be cheap for defenders too. Watch for AI tools that map your own attack surface and triage findings continuously, and for threat-sharing that moves at the same pace through your ISAC.

<!-- VERIFY: confirm this closing passage (defenders using AI, sharing threat intel, faster patching, less tolerance for insecure code) appears in the report's conclusion. Our fetch of the report page was cut off before the end. -->
Anthropic closes its report on cautious optimism: capable AI should ultimately help defenders more than attackers, by finding bugs before code ships and hardening the systems we depend on. That payoff isn't automatic. The transition will be hardest for organizations that wait, and the advantage goes to those who treat this moment as urgent.

---

## Learn More

- [Detecting and countering misuse of AI: September 2026 (Anthropic)](https://www.anthropic.com/threat-intelligence-report-september-2026) — Primary source
- [Developing Enterprise Frontier Safeguards with our customers (Anthropic)](https://www.anthropic.com/news/enterprise-frontier-safeguards) — The EFS announcement
- [FIR Risk EFS Readiness Guide](/efs-readiness/) — Free availability status and readiness checklist
- [FIR Risk INTEL-36 — The Alarm Is Yours](/intel/intel-36-the-alarm-is-yours/) — The one action on EFS
- [Disrupting the first reported AI-orchestrated cyber espionage campaign (Anthropic)](https://www-cdn.anthropic.com/d7dd50dd1185f59be051b307150d877f2b82bd2c.pdf) — The November 2025 GTG-1002 disclosure
- [FIR Risk Tuesday E92 — Time Is the Attack Surface](/tuesday/e92-time-is-the-attack-surface/) — How GTG-1002 became doctrine
- [FIR Risk Tuesday E90 — Refinement, Not Revolution](/tuesday/e90-refinement-not-revolution/) — AI as a breadth multiplier, from the DBIR
- [FIR Risk Tuesday E87 — The Agents Have Keys](/tuesday/e87-the-agents-have-keys/) — When agentic AI got production access

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
