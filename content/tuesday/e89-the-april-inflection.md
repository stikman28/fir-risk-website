---
title: "E89 - The April Inflection"
description: "Twelve days ago Anthropic launched Project Glasswing with eleven coalition partners. Five days ago OpenAI launched GPT-5.5 and Trusted Access for Cyber. Two competing US frontier-model labs converged on the same architectural answer in seven days. Read against six months of FIR Risk corpus, this is the inflection the data has been pointing at: AI is finally good enough to be the defender's tool of choice, and the path of least resistance for attackers starts closing this quarter."
date: 2026-04-28
image: "/images/tuesday/e89-the-april-inflection.png"
thumbnail: "/images/tuesday/e89-the-april-inflection.png"
source: "Anthropic Project Glasswing & Claude Opus 4.7 + OpenAI GPT-5.5 & Trusted Access for Cyber, read against the FIR Risk corpus October 2025 – April 2026"
sourceUrl: "https://www.anthropic.com/glasswing"
tags: ["Anthropic", "Glasswing", "Claude Opus 4.7", "Mythos", "OpenAI", "GPT-5.5", "Trusted Access for Cyber", "AI Defense", "Vulnerability Discovery", "XBOW", "Defender Tailwind", "Operation Endgame", "Identity Security", "Vendor Risk", "MITRE ATT&CK", "Threat Intelligence", "Risk Management"]
---

## Bottom Line

Twelve days ago, Anthropic launched **Project Glasswing** alongside Claude Opus 4.7 and a coalition that includes AWS, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorgan Chase, the Linux Foundation, Microsoft, NVIDIA, and Palo Alto Networks. Five days ago, OpenAI launched **GPT-5.5** alongside its **Trusted Access for Cyber** program, scaling defensive deployment to "thousands of verified individual defenders and hundreds of teams responsible for defending critical software."

Two competing frontier-model labs converged on the same architectural answer in the same week. It is not surprising that US-based AI labs would lean defensive — that posture has been signaled for over a year. What is surprising is the *operational deployment vehicles* — verified-access programs, fine-tuned defender variants, deliberate offensive-capability differentiation in the consumer model — arriving simultaneously and at scale.

Read against the prior six months of FIR Risk corpus, this is the inflection point the data has been pointing at: **AI is finally good enough to be the defender's tool of choice.** Not in 24 months. Now.

The path of least resistance for attackers — exploit the technical debt vendors have been shipping for decades, faster than they can patch it — starts closing this quarter.

---

## The One Sentence Your Board Needs

> **"AI just became a defender's tool — and the path of least resistance for attackers starts closing this quarter."**

---

## The April 16–23 Window

Both labs did the same four things in seven days.

**Consumer model with reduced offensive cyber.** Anthropic's Claude Opus 4.7 was trained with explicit "efforts to differentially reduce these capabilities." OpenAI's GPT-5.5 is rated *"High capability in the Cybersecurity domain, but below Critical"* — explicitly unable to autonomously develop functional zero-days against hardened systems.

**Verified-access defensive program.** Anthropic launched the Cyber Verification Program for legitimate vulnerability research, penetration testing, and red-teaming. OpenAI launched Trusted Access for Cyber (TAC), scaling defensive deployment to *"thousands of verified individual defenders and hundreds of teams responsible for defending critical software."*

**Frontier defender variant.** Anthropic's defender-tier model is Claude Mythos Preview. OpenAI's is GPT-5.4-Cyber — explicitly *"fine-tuned to be cyber-permissive"* for verified defensive use.

**Scaled deployment vehicle.** Anthropic launched Project Glasswing with AWS, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorgan Chase, the Linux Foundation, Microsoft, NVIDIA, and Palo Alto Networks — backed by $100M in usage credits and $4M in donations to open-source security organizations. OpenAI's TAC program scales to thousands of verified individual defenders and hundreds of teams responsible for critical software defense.

The capability evidence is concrete — and ego-killing for the "AI is just hype" camp. **Mythos has already found thousands of high-severity vulnerabilities, including in every major operating system and web browser** — a 27-year-old OpenBSD remote-crash flaw, a 16-year-old FFmpeg vulnerability that automated tools missed across **5 million test iterations**, multiple Linux kernel chains. Benchmarks confirm the leap: **CyberGym 83.1% (Mythos) vs. 66.6% (Opus 4.6); SWE-bench Pro 77.8% vs. 53.4%; Terminal-Bench 2.0 82.0% vs. 65.4%.** Third-party validation: **XBOW autonomous penetration testing scored 98.5% vs. 54.5% for Opus 4.6** — a 1.8x defender uplift, measured.

Two labs. Same architecture. Same week. That is the inflection.

> **INTEL [GLOBAL] [DEFENDER TAILWIND]:** Two competing US frontier-model labs simultaneously launched verified-access defensive cyber programs in a seven-day window (Anthropic April 16, OpenAI April 23). Both pulled offensive cyber capability *out* of the consumer model and concentrated frontier defender capability into verified-access programs with companion fine-tuned variants. The asymmetry — discovery is now cheap, leaving issues unpatched is increasingly costly — closes the historical attacker advantage of exploiting decades-old technical debt faster than vendors can patch it.

---

## The Six Months That Set Up This Moment

The April inflection did not arrive in a vacuum. The prior six months of FIR Risk coverage — sixteen of the seventeen major industry reports, with Verizon DBIR still pending — documented four converging defender tailwinds that no individual report headlined.

**Disruption operations finally landed at scale.** Operation Endgame disrupted Rhadamanthys, VenomRAT, and the Elysium botnet in November 2025. Lumma infrastructure seized. BreachForums closed for good. **Initial-access-broker activity dropped ~27% year over year, and 81% of brokers operating in 2025 were new entrants** (Intel 471) — the criminal supply chain is rebuilding from scratch, not growing.

**The ransomware ecosystem is destabilizing itself.** Black Basta's internal Matrix chats leaked in February 2025. DragonForce executed hostile takeovers of rival programs. Anonymous vigilantes defaced leak sites. **Median ransom demand collapsed from $9.9M to $3M** (GuidePoint); **average ransom demand dropped 80.6% year over year** (CrowdStrike). Volume up, leverage down.

**Regulation moved from policy to economics.** Australia's mandatory ransomware-payment reporting has been live since May 2025; UK advancing. The legislative environment is tilting the pay/no-pay calculus in defenders' favor for the first time.

**The basics still work where applied.** MFA blocks 99% of account compromise (Microsoft, 100T signals/day). 90% of breaches were preventable with controls already on the market (Unit 42). 80% of small organizations added security controls solely to qualify for cyber insurance coverage (CLTC). Underwriting is now one of the most effective security levers in the market.

The April inflection lands into a defender market that was already winning at the margins, not losing. The AI uplift compounds the prior wins; it does not substitute for them.

---

## What Actually Changes for Defenders — Three Economic Shifts

**1. Software vendors finally have to fix what they shipped.** Mythos finding a 27-year-old OpenBSD flaw and a 16-year-old FFmpeg flaw automated tools couldn't find is a verdict on decades of carried technical debt. As frontier models — and their successors — make discovery cheap at scale, vendors that have been shipping known-fragile software face a flipped economic asymmetry: discovery is now cheap, leaving the issues unpatched is reputationally and legally expensive. The path of least resistance for attackers — exploit known-fragile software before vendors patch it — narrows when patch pressure goes industrial.

**2. AI is now the defender's primary tool, not a research curiosity.** XBOW 98.5% vs 54.5% on penetration testing. CodeRabbit +10% recall on bug detection. CyberGym 66.6% → 83.1%. These are shipped, measured, third-party-validated. The work for risk and security leaders is to integrate AI into the **core defense program** — identity management, vulnerability triage, log and alert analysis, code review, threat hunting — and **train cyber and risk teams to operate with AI as a peer**, not a novelty.

**3. The cyber vendor market is under continuous upgrade pressure.** Defenders just received a meaningful frontier-AI upgrade. More upgrades are almost certainly coming — on a cadence no one can predict. The next release could land in weeks. Or longer. The point is the cadence itself: cyber vendors selling multi-year contracts on the assumption today's differentiation will hold are pricing against an upgrade rhythm that no longer cooperates. For buyers, that strengthens the case for **shorter contract terms, capability-uplift commitments at every renewal, and exit clauses tied to defender-tool generations** — keeping leverage with the side that captures each new release.

> **INTEL [GLOBAL] [MARKET SHIFT]:** The April inflection is good news for defenders and structurally challenging for cyber vendors selling multi-year contracts on existing differentiation. Frontier defender-tool upgrades just arrived from both major US AI labs in a seven-day window — and more upgrades are almost certainly coming on a cadence no one can predict. Buyers structuring shorter contract terms, capability-uplift commitments at every renewal, and exit clauses tied to defender-tool generations capture the upgrade rhythm. Buyers locked into multi-year contracts on pre-inflection terms pay for capability the next release could supersede.

---

## What This Means If You're Not on the Launch List

Most enterprises will not be in the Glasswing coalition or in the TAC verified-access tier. Outsiders are still beneficiaries — through three downstream channels.

**1. The vendor channel.** Your existing security stack *is* the coalition. CrowdStrike, Microsoft, Palo Alto, Google, AWS, Cisco — all Glasswing partners. If you license Defender, Falcon, Cortex, Chronicle, Security Hub, or Cisco Security, you have already paid for seats at the table. The honest action is *press your security vendors on the timeline for Glasswing-derived AI defensive capability appearing in the products you already license.* That is a board-level vendor-management question, and it is the question vendors least want asked.

**2. The patch channel.** Mythos has found thousands of high-severity vulnerabilities — those flow through upstream patches in Linux, OpenBSD, FFmpeg, browsers, and operating systems. Every enterprise gets the fix. The bottleneck for outsiders is **patch deployment velocity** — coalition discovery is only an uplift if you actually deploy patches before adversaries weaponize them. Mean-time-to-patch is the work.

**3. The upgrade-cadence channel.** Frontier defender-tool capability just shipped — and the next release could land in weeks, or months, or longer. No one can predict the cadence. The outsider question is not "how do I get in" — it is *"am I building AI-fluent security operations now, so each new release is an uplift I can actually use?"* Organizations building AI-defender workflows from this week forward compound advantage with every release. Those waiting for "the right moment" find themselves catching up against peers who treated the upgrades as continuous from the start.

---

## The Counterweight: Recognition Is Not Action

The April inflection is acceleration, not absolution. The known defender gaps documented across the same corpus still close one at a time — Glasswing does not fix your cloud configuration, TAC does not govern your AI agents, GPT-5.5 does not replace your identity program.

- **56%** of CISOs say cloud security spend is insufficient *and aren't fixing it* (Wiz, [E77](/tuesday/e77-wiz-ciso-budget-survey/))
- **87%** of executives recognize AI as a top risk; **<1%** have operationalized AI governance (WEF, [E80](/tuesday/e80-wef-knowing-doing-gap/))
- **15%** of organizations are confident in non-human identity governance — even as **57%** deploy multi-stage AI agents with production credentials (Anthropic, [E87](/tuesday/e87-the-agents-have-keys/))
- **58%** of organizations run **25+ security tools** — the meta-risk is unmanaged sprawl, not underinvestment (Wiz, [E77](/tuesday/e77-wiz-ciso-budget-survey/))
- **60%** of attacks exploit **cloud misconfigurations** defenders already know about (Fortinet, [E75](/tuesday/e75-fortinet-predictions/))

The April inflection compounds with closure of these gaps. It gets wasted without it. The 850% year-over-year identity-attack surge (Red Canary) does not slow because frontier AI labs released defensive variants — it slows because defenders deploy AI *into* identity programs, machine-identity governance, and the cloud-config queue.

> **INTEL [GLOBAL] [GOVERNANCE]:** The April inflection raises the cost of leaving known defender gaps unclosed. Recognition without action is now visibly more expensive — peer organizations operating with AI-fluent security teams will close gaps faster than peers without. Boards that move identity management, AI governance, and AI-team training to top-quartile investment posture this quarter operate ahead of the inflection; boards that wait pay the differential at every renewal cycle.

---

## Three Questions for Your Next Board Meeting

**1. Are we sticking to the core defense program?** Identity management, AI for defense, and team training on AI fluency are the three investments the April inflection makes most leveraged. Identity is still the dominant attack vector across six independent reports. AI is now a deployable defender. Trained teams operate the combined stack. Are we investing in all three — or hoping a vendor will ship a feature that solves it for us?

**2. Are we capturing the downstream coalition uplift?** Vendor pressure (when does Glasswing-derived capability ship in our license?), patching velocity (mean-time-to-patch as a board metric), and AI-team fluency (how many security and risk staff are working with AI weekly?) — what's our 90-day plan on each?

**3. Are we structuring cyber-vendor contracts for an upgrade cadence we cannot predict?** Shorter contract terms, capability-uplift commitments at every renewal, AI-derived-capability roadmap, exit clauses tied to defender-tool generations — these are the levers buyers have *now,* and the levers that protect us when the next frontier release lands in weeks rather than months.

---

## What's Next: The FIR Risk 2026 Report

E89 plants the flag. The full work comes next.

Verizon DBIR — the seventeenth and last major industry report of the 2026 cycle — is expected within weeks. Once it lands, the **FIR Risk 2026 Report** will publish: a complete year-in-review drawing on every major source we tracked between April 2025 and the DBIR release, organized around three high-confidence convergences (where the corpus agrees), three sharp disagreements (where vendors fight), a predictions scorecard grading the major 2026 outlooks against what actually happened, and the April inflection developed in full — with the year of corpus that pointed at it.

Read independently. With no vendor relationship to any source. With no incentive to sell anyone fear.

Stay forward. Stay positive. Stay verified.

— The FIR Risk Intelligence team

---

## MITRE ATT&CK

**Defender techniques and the controls the April inflection accelerates:**

- **T1078 — Valid Accounts:** Identity remains the dominant 2025 attack vector across six reports; AI-assisted behavioral detection of post-authentication anomalies is the corresponding control most uplifted by the inflection
- **T1190 — Exploit Public-Facing Application:** Coalition vulnerability discovery (Mythos) directly compresses the window between disclosure and exploitation; patch deployment velocity is the corresponding defender control
- **T1199 — Trusted Relationship:** Supply-chain and SaaS vendor cascades remain the highest-blast-radius access path; AI-fluent vendor risk programs and quarterly trust-graph reconciliation are the corresponding controls
- **T1486 — Data Encrypted for Impact:** Down ~38% YoY (Picus) — the encryption-blast model is fading as recovery-denial replaces it
- **T1562 — Impair Defenses / T1490 — Inhibit System Recovery:** Recovery denial is the new ransomware operational model (Mandiant); rehearsed recovery against backup-destruction is the corresponding control
- **T1204.004 — User Execution: Malicious Copy and Paste:** ClickFix industrialized the user as the exploit; behavioral detection of clipboard→Run patterns is the corresponding control, and AI-assisted endpoint analytics is the operational uplift
- **T1566.004 — Phishing: Voice Phishing:** Voice channel rose to 23% in cloud breaches (Mandiant); out-of-band verification is the corresponding control
- **T1036 — Masquerading:** Synthetic-insider hiring; live identity verification at hire is the corresponding control

**Connection to the corpus:** The defensive techniques the April inflection most accelerates — behavior-based detection, identity governance, vulnerability triage, trust-graph reconciliation, code review — are not new. They are the controls every report has been recommending. What changes is *who can deploy them at what cost.* AI-fluent security operations close the deployment gap.

---

## Learn More

- [Anthropic — Project Glasswing](https://www.anthropic.com/glasswing) — Primary source
- [Anthropic — Introducing Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7) — Primary source
- [OpenAI — Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/) — Primary source
- [OpenAI — Trusted Access for Cyber Defense](https://openai.com/index/scaling-trusted-access-for-cyber-defense/) — Primary source
- [OpenAI — Accelerating the Cyber Defense Ecosystem](https://openai.com/index/accelerating-cyber-defense-ecosystem/) — Primary source
- [FIR Risk Tuesday E88 — The Trust Audit](/tuesday/e88-the-trust-audit/) — Intel 471 + Trend Micro
- [FIR Risk Tuesday E87 — The Agents Have Keys](/tuesday/e87-the-agents-have-keys/) — Anthropic + agent-identity governance
- [FIR Risk Tuesday E86 — Castles on Quicksand](/tuesday/e86-castles-on-quicksand/) — IBM X-Force + Red Canary convergence
- [FIR Risk Tuesday E85 — The Responder's Report](/tuesday/e85-responders-report/) — Mandiant M-Trends 2026
- [FIR Risk Intelligence](https://github.com/stikman28/fir-risk-intelligence) — Source prompts, methodology, all published INTEL

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
