---
title: "E94 - MDDR 2026: A Shift in the Physics of Cyber Risk"
description: "Microsoft says AI is \"changing the physics of cybersecurity\": it is reducing the time, expertise and cost required to find and exploit weaknesses. Its 2026 Digital Defense Report shows the result, an exposure window opening at both ends. Attackers turn new flaws into working exploits faster than most organizations can patch, and once inside they are staying hidden longer before anyone notices. In the middle sits a new kind of actor, the AI agent, which often has access but no owner. The answer for boards isn't another tool or a stricter deadline. It's direction on two things: the clock, meaning whether defenses are resourced and automated to keep pace with machine-speed attackers, and the owner, meaning a named person who answers for every AI agent and every exposed system."
date: 2026-10-20
image: "/images/tuesday/e94-shift-in-the-physics-of-cyber-risk.jpg"
thumbnail: "/images/tuesday/e94-shift-in-the-physics-of-cyber-risk.jpg"
source: "Microsoft — Microsoft Digital Defense Report 2026: Decoding emergence"
sourceUrl: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2026-Microsoft-Digital-Defense-Report.pdf"
tags: ["Microsoft Digital Defense Report", "Threat Intelligence", "Agentic AI", "AI Governance", "Patch Management", "Vulnerability Management", "Dwell Time", "Business Email Compromise", "Voice Phishing", "Ransomware", "SMB", "Board Governance", "CFO", "CISO", "Risk Management"]
---

## A year on, Microsoft asks the board question itself

Last November, in [E73](/tuesday/e73-mddr-2025-summary/), we summarized the 2025 edition of Microsoft's Digital Defense Report with one line: treat cyber risk as business risk. The 2026 edition, "Decoding emergence," covers July 2025 through June 2026 and goes further. Its first takeaway is that "AI is changing the physics of cybersecurity," which Microsoft defines as AI "reducing the time, expertise, and cost required to discover and exploit weaknesses." Those three things used to slow attackers down. Its first priority for organizations is to "govern cyber risk at leadership level," and it frames the defining question for boards as "not whether disruption will occur, but whether the organization can continue operating, contain harm, recover quickly, and maintain trust when it does."

That is the question we've been asking since [E92](/tuesday/e92-time-is-the-attack-surface/), and it's a welcome one to see from the company with the largest sensor network in security. This edition pulls out what matters for CEOs, CFOs and risk leaders, compares it with the last two editions of the report, and runs our usual check on what the data can and can't tell you.

— Bruce, FIR Risk Advisory

---

## Bottom Line

The window an attacker can use is widening at both ends. At the front end, flaws are being weaponized faster than ordinary patch cycles can absorb. At the back end, intruders are going unnoticed for longer. And AI agents are arriving in the enterprise faster than anyone is assigning them owners.

**Attackers now work on a machine clock. Defense has to be resourced, prioritized and automated to keep up, and every agent needs a human who answers for it.**

---

## The One Sentence Your Board Needs

> AI has cut the time, skill and cost of attacking us. Are we resourcing and automating our defenses to keep pace, and does every AI agent we run have a named employee who answers for it?

Boards don't set patch deadlines; they set direction and priority. Microsoft's own report says reporting should move "from number of patches deployed to exposure reduced, detection coverage increased, and time-to-mitigate compressed." The board's job is to ask whether management is funding that shift, not to manage the patch queue.

---

## 1. The front end: weaponization outruns patch cycles

Microsoft's starkest number: "The median time from vulnerability discovery in the wild to weaponization has now collapsed to well below 24 hours." Vulnerabilities are on track for a record, an estimated 72,000 CVEs for 2026 (a projection, not a count).

Patching hasn't changed pace. Microsoft says median enterprise remediation for critical external vulnerabilities "can take 30–60 days," against the 7 to 14 days US federal agencies are required to meet for known-exploited flaws. For internet-exposed services, mass scanning "often starts within hours." Attackers also often get in before anyone knows there is a flaw: the Interlock ransomware group exploited a maximum-severity Cisco Secure FMC flaw for about 30 days before it was disclosed, and Microsoft says pre-disclosure windows of 30 days or more "are now routine."

The small-business angle is direct. In September 2025, Microsoft tracked a four-week surge in Akira ransomware across more than 50 organizations, mostly small and medium-sized businesses, all tied to one SonicWall VPN flaw.

Microsoft's conclusion is the right one, and it isn't "patch faster at all costs." It's that "the issue is no longer simply whether a patch exists, but whether organizations can identify exposed assets, prioritize the highest-risk flaws, and remediate them before attackers operationalize them." For internet-facing, identity and management systems, it says, "traditional monthly patch cycles may no longer be fast enough."

**What it means for you:** patching is hard, resource-hungry work, and a deadline from the boardroom doesn't make it faster. What does is knowing what you have exposed, ranking it by risk, and automating the routine fixes so people can focus on the hard ones. That's a funding and priority decision, which makes it a board-level one. Speed alone can't close the gap anyway: Verizon's 2026 DBIR found 29% of known-exploited vulnerabilities were attacked before they were even publicly disclosed ([E90](/tuesday/e90-refinement-not-revolution/)). That's why Microsoft pairs fast fixes with two moves that cover what patching can't: removing or isolating exposure you don't need, and looking back 90 days for signs of earlier exploitation.

---

## 2. The back end: intruders are staying longer

The second clock runs after the break-in. Comparing two years of its incident response engagements, Microsoft found "a statistically significant increase in dwell time" (the time from an intruder's first activity to its detection), while the overall length of attacker activity stayed broadly stable. In plain terms, attackers weren't staying longer because they wanted to. Organizations were taking longer to notice. The biggest increase was in industrials and manufacturing.

Microsoft doesn't put a number on it, but Mandiant does, from a different set of investigations. M-Trends 2026 reported that global median dwell time rose to 14 days from 11 in 2025, the first increase since Mandiant began tracking in 2010 ([E85](/tuesday/e85-responders-report/)). Two incident response teams, two datasets, same direction.

**What it means for you:** prevention gets the budget, but detection is where this year's data is slipping. How long an intruder could go unnoticed is a resilience measure, and it belongs in the same conversation as recovery readiness.

---

## 3. How they get in: the conversation, not the link

The report's year-over-year view of initial access in its incident response findings shows a sharp turn. Phishing rose from 7% to 23% of incidents, and exploitation of public-facing applications from 15% to 24%.

Two newer patterns matter most for finance teams:

- **Teams voice phishing.** Weekly confirmed malicious voice phishing over cross-tenant Microsoft Teams calls is up 502% from a year earlier. In the attacks Microsoft studied, 93% of attackers succeeded at least once in keeping a target on the line for 20 seconds or longer, and 30% of calls lasted beyond a minute. Once a call succeeds, attackers typically talk the victim into installing a remote-access tool and complete reconnaissance "in two minutes or less."
- **Business contact impersonation (BCI).** Microsoft is retiring the catch-all "BEC" label for impersonation scams and calling them BCI. It detected more than 46 million BCI attacks in 12 months. The share of first messages that asked for money or documents fell from 17% in October 2025 to 3% by June 2026. In Microsoft's words, "BCI is, overwhelmingly, a conversation starter. The fraud comes later." Payroll diversion attempts cluster at the start of the week: 51% land on a Monday or Tuesday.

**What it means for you:** the first email asks for nothing, so inbox filters have nothing to catch. The control has to sit where the money moves: at the bank-detail change, the payroll change and the remote-access request.

---

## 4. The new actor: agents without owners

In Microsoft's telemetry from AI workloads on Azure over a 90-day window, four techniques accounted for roughly 90% of observed attack activity: malicious link injection through model and tool outputs (52%), jailbreak and safety-bypass attempts (16%), tool and agent abuse (12%) and identity and credential abuse (10%).

The report names three risks as organizations adopt agents: ungoverned proliferation, where agent identities multiply faster than anyone tracks them; overprivileged access that is rarely revoked; and no human accountability. Its rule is the clearest sentence in the report: "No environment should ever have an agent without a human to answer for it."

This is the same conclusion Anthropic reached from the other side of the table in [E93](/tuesday/e93-the-economics-changed/) and [INTEL-36](/intel/intel-36-the-alarm-is-yours/): the AI vendor can raise the alarm, but accountability stays with you.

**What it means for you:** the board question is simple and answerable: do we have a named employee owner for 100% of our AI agents? If management can't say yes, or can't say how many agents there are, that's the finding.

---

## 5. Microsoft isn't the only one seeing this

We put the Microsoft findings next to the three other major reports we've covered this year: Verizon's 2026 DBIR ([E90](/tuesday/e90-refinement-not-revolution/)), Mandiant's M-Trends 2026 ([E85](/tuesday/e85-responders-report/)) and Anthropic's September 2026 threat report ([E93](/tuesday/e93-the-economics-changed/)).

**Where they agree:**

- **Exploited flaws are the main way in.** Verizon ranks vulnerability exploitation first for the first time (31% of breaches with a known entry point). Mandiant has had exploits at #1 for six straight years (32%). Microsoft's incident response data shows public-facing exploitation rising from 15% to 24%.
- **Fixing isn't keeping up.** Verizon found organizations fully remediated only 26% of critical known-exploited vulnerabilities, down from 38%, with a median of 43 days to resolve one. Microsoft says enterprise remediation can take 30 to 60 days.
- **The same flaw serves spies and extortionists.** Microsoft and Mandiant both document the July 2025 on-premises SharePoint attacks being used for state espionage and, within days, for Warlock ransomware. One unpatched server can become either a data-theft disclosure or a business shutdown, and you won't know in advance which.
- **The phone is the new inbox.** Mandiant found voice phishing was the #2 way in (11%), while Microsoft's Teams voice phishing rose 502%.
- **AI is an accelerant, not a new weapon.** Verizon found fewer than 1% of 793 AI-using threat actors reached high or critical capability. Anthropic found that the attacks are familiar and the economics changed. Microsoft's new contribution is the governance gap: agents with access and no owner.

---

## 6. What changed in a year

Microsoft now compares each edition with the last, so these are like-for-like. Beyond the Teams and dwell-time shifts above:

- **ClickFix came back.** These fake "verify you are human" attacks were 47% of observed initial access last year (our [E73](/tuesday/e73-mddr-2025-summary/) lead). Their share fell to 12.8%, but volume grew roughly 23x between December and May.
- **Ransomware grew.** Attacks reaching the ransom stage against enterprises rose 15.8%.
- **The basics work.** Password attacks fell 26%, which Microsoft calls "strong evidence" that MFA and passkeys are forcing attackers elsewhere.

Last year we summarized Microsoft's message as treating cyber risk as business risk. This year it asks leaders to govern it directly, with dwell time and agent permissions added to what they see.

---

## The test we ran before we believed any of it

- **Whose data it is.** Microsoft's own customers and telemetry, and organizations that called it for incident response. An enormous view, not a representative sample.
- **Datasets and definitions differ.** Public-facing exploitation is 24% of incident response findings but 4.8% of intrusions in wider telemetry. Exploit timing is "well below 24 hours" to weaponization, "single-digit days" from disclosure, and "about five days" in outside research the report cites. Phishing rose to 23% in Microsoft's data while Mandiant has email phishing at 6%, partly because "social engineering" and "none identified" are counted separately. We quote each figure with its own definition.
- **Dwell time has no headline number.** Microsoft shows box plots and a statistically significant increase, not a median. The 14-day figure is Mandiant's.
- **Projections and interests.** 72,000 CVEs is a full-year estimate, and Microsoft sells the integrated defense it recommends. It also deserves credit for candor: it names its own SharePoint Server as the most frequently exploited product in its data.

What holds regardless: how well patching is resourced, how long intruders go unnoticed and who owns each agent can all be measured inside your own organization, whoever's data you trust.

---

## So What Should Organizations Actually Do?

Most organizations already do some version of each of these. What changes is the priority and the resourcing.

**Now: do these immediately**

1. **Answer the ownership question.** Inventory your AI agents and name an employee sponsor for each one. When a sponsor changes roles, ownership transfers, and agents with no owner are switched off.
2. **Protect the payment change, not just the inbox.** Require a call back to a known number for any change to bank details or payroll deposits, with extra care early in the week.
3. **Close the Teams side door.** Limit external Teams calling to approved partners, keep the "External" warnings on, and restrict remote-access tools to IT.

**Next: plan these over the next few quarters, in order of priority**

4. **Fund and automate patch management.** Give the CISO the resources to know what's exposed, rank it by risk (internet-facing, identity and management systems first) and automate routine fixes. That starts with a complete inventory of internet-facing systems, remote-management tools and older devices, and isolating what can't be patched. Microsoft's own technical guidance is to fix newly identified vulnerabilities on internet-facing or identity systems within 72 hours, and to review the previous 90 days for signs of earlier exploitation. That's a target for the security team to work toward, not a board mandate.
5. **Change what gets reported.** Move from patches deployed to exposure reduced, detection coverage and time to contain, and add dwell time and agent permissions to the leadership view.
6. **Govern AI browsers and extensions.** Decide which are approved and block the rest. Microsoft found malicious AI-assistant extensions in more than 20,000 enterprise tenants, harvesting AI chat histories.

**Future: prepare now, act when you can**

7. **Rehearse the bad day.** Run an assume-breach exercise that includes an AI agent acting outside its purpose, and test whether you can contain it, recover and keep operating.
8. **Start the long-horizon inventory.** Microsoft's tenth priority is a cryptographic inventory and post-quantum planning alongside AI governance. It isn't urgent this quarter, but it's cheaper to start than to rush.

Microsoft frames the goal as engineering "for endurance." We'd put it in a board's terms: accept that the attacker's clock is now a machine's, fund the defenses that can keep pace, and make sure every agent acting on your behalf has a person behind it.

---

## Learn More

- [Microsoft Digital Defense Report 2026: Decoding emergence (Microsoft)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2026-Microsoft-Digital-Defense-Report.pdf) — Primary source
- [FIR Risk Tuesday E73 — MDDR 2025 Summary](/tuesday/e73-mddr-2025-summary/) — Last year's edition
- [FIR Risk Best of E24 — Microsoft Digital Defense Report 2024](/tuesday/best-of-e24-microsoft-digital-defense-report-2024/) — The 2024 edition
- [FIR Risk Tuesday E93 — The Attacks Aren't New. The Economics Are.](/tuesday/e93-the-economics-changed/) — Anthropic's view of AI-enabled attacks
- [FIR Risk INTEL-36 — The Alarm Is Yours](/intel/intel-36-the-alarm-is-yours/) — Accountability stays with you
- [FIR Risk Tuesday E92 — Time Is the Attack Surface](/tuesday/e92-time-is-the-attack-surface/) — The three-clocks thesis

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
