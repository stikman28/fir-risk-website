---
title: "SIGNALS 2026"
seoTitle: "SIGNALS 2026: Five Cyber Risk Signals for CEOs and Boards"
description: "FIR Risk's annual report for CEOs and boards. We read two years of threat reports, checked every number at the source, and kept five signals that independent sources agree on, each with one question for your next board meeting."
meta:
  description: "SIGNALS 2026: five cyber risk signals that held up across two years of threat reports, 43 figures checked at the source, and five board questions."
date: 2026-11-17
type: "report"
pdf: "/reports/FIR-SIGNALS-2026.pdf"
tags: ["SIGNALS", "Board Oversight", "CEO", "Third-Party Risk", "AI Governance", "Ransomware", "Risk Management"]
---

**Five signals that cut through the noise.**

*Published November 2026 · For CEOs and boards · 18-page PDF · Narrated edition (10 min) · Free*

Every vendor report says its problem is the biggest. We read two years of them, checked every number against the source, and kept only what independent sources agree on, what has lasted, and what changes a board decision.

<div class="card p-4 my-4">
  <h2 id="listen" class="h5 mt-0">Listen to SIGNALS 2026</h2>
  <p class="mb-3">The narrated edition, read by Bruce Bird. About 10 minutes.</p>
  <audio controls preload="metadata" style="width:100%">
    <source src="/audio/FIR-SIGNALS-2026-narrated.m4a" type="audio/mp4">
    Your browser can't play this audio. <a href="/audio/FIR-SIGNALS-2026-narrated.m4a">Download the narrated edition</a>.
  </audio>
  <p class="mt-3 mb-0"><a href="/reports/FIR-SIGNALS-2026.pdf" class="fw-semibold">Download the PDF →</a> &nbsp;·&nbsp; <a href="#transcript">Read the transcript</a></p>
</div>

---

## Why SIGNALS

Most of what you read about cyber risk this year was noise. This report is what's left.

Every year the security industry publishes hundreds of reports. Most are careful work, and each one makes the case that its problem is the biggest. For a CEO or a board, the result is noise.

Over the past two years, FIR Risk has published 100 editions analyzing the major reports, from Verizon, Microsoft, Mandiant, CrowdStrike, IBM, Anthropic and many others. This year we asked a different question: what survives when you put them all side by side?

SIGNALS is the answer: five findings that independent sources agree on, that have held for more than a year, and that matter to the decisions leaders make about priorities, funding and oversight. We went back to the original reports and checked every number. What didn't pass, we left out.

Each signal ends with one question for your next board meeting. They are not mandates. They are the questions we would want answered if it were our company.

---

## How we filtered

**100 FIR Risk editions → 26 primary reports re-read → 19 cited → 43 figures checked at the source page → 5 signals.**

A finding had to pass four tests:

1. **Agreement.** At least three independent sources, using different data, reach the same finding.
2. **Persistence.** It held across more than one year of data, not a single season's headline.
3. **Direction.** The trend is clear: we can say which way it is moving, and how fast.
4. **Decision value.** It matters to decisions a CEO or board makes: priorities, funding or oversight.

Long-fuse risks like quantum can't pass a persistence test until it's too late, so we track them separately under [weak signals to watch](#watch).

---

## The five signals

### 01 · The window is gone. Expose less.

Attackers now move faster than any patch cycle. The lever left to you is how much you expose.

- Average eCrime breakout time, from first access to moving through the network, fell from **84 minutes in 2022 to 29 minutes in 2025**. The fastest was **27 seconds**. *(CrowdStrike Global Threat Report, 2024–2026)*
- **31%** of breaches now start with an exploited vulnerability, the #1 way in, up from 20%. *(Verizon DBIR 2026)*
- **29%** of exploited flaws were attacked on or before the day they were published. *(VulnCheck 2026)*
- Only **26%** of critical known-exploited flaws were fully fixed in 2025, down from 38%. *(Verizon DBIR 2026)*
- Also agree: Mandiant (exploits the #1 way in, 32%), IBM X-Force (application exploits up 44%), Microsoft (weaponized in under 24 hours).

You can't out-patch the window. Shrink what you expose, starting with internet-facing systems and open-source packages.

> **Ask:** Do we know every system we expose to the internet and every open-source package we depend on, and is that footprint getting smaller?

FIR reading: [INTEL-30 The Pre-Disclosure Window](/intel/intel-30-the-pre-disclosure-window/) · [INTEL-32 When the Sellers Agree](/intel/intel-32-when-the-sellers-agree/) · [INTEL-45 Stop Counting Patches](/intel/intel-45-stop-counting-patches/) · [E91 The Window Closed](/tuesday/e91-the-window-closed/) · [E94 MDDR 2026](/tuesday/e94-shift-in-the-physics-of-cyber-risk/)

### 02 · Inside, they look like you.

Logins are harder to break, so attackers talk their way in, then act like real users.

- **82%** of the intrusions CrowdStrike detected in 2025 used no malware: stolen logins, real tools, normal-looking activity. In 2022 it was 71%, and it has risen every year. *(CrowdStrike Global Threat Report, 2024–2026)*
- Voice phishing is now the **#2** way in. Email phishing fell from 14% to 6%. *(Mandiant M-Trends 2026)*
- Malicious voice calls over Microsoft Teams rose **502%** in a year. *(Microsoft Digital Defense Report 2026)*
- **83%** of privilege escalation used no exploit, only permissions that already existed. *(Verizon DBIR 2026)*
- Also agree: Unit 42 (identity a factor in about 90% of cases), Microsoft (password attacks down 26%).

A valid login is the best disguise. Know who has access, and notice when they act out of character.

> **Ask:** If an attacker were logged in as one of our employees today, would we know?

FIR reading: [INTEL-8 The Breach Starts With a Phone Call](/intel/intel-8-voice-phishing-surge/) · [INTEL-23 The Permission Problem](/intel/intel-23-the-permission-problem/) · [INTEL-42 The First Email Asks for Nothing](/intel/intel-42-the-first-email-asks-for-nothing/) · [E85 The Responder's Report](/tuesday/e85-responders-report/) · [E94 MDDR 2026](/tuesday/e94-shift-in-the-physics-of-cyber-risk/)

### 03 · Half of breaches now involve a third party.

**48%** of breaches involved a vendor, partner or supplier, up from **9%** three editions ago. *(Verizon DBIR, 2023–2026 editions)*

- Only **23%** of third parties fully fixed missing MFA on their cloud accounts. *(Verizon DBIR 2026)*
- Major supply-chain and third-party breaches rose about **4×** over five years. *(IBM X-Force 2026)*
- About **200** customers' data was taken after one SaaS provider was breached, and one stolen token reached cloud admin in about **three hours**. *(Anthropic, September 2026)*
- Trusted relationships were the way in for **20%** of extreme cyber events but **65%** of their losses. *(Cyentia IRIS Xtreme 2026)*
- Also agree: Mandiant (unmonitored OAuth grants and broad API permissions).

That 48% is an average. Your number depends on which vendors hold your keys, so find out.

> **Ask:** How many vendors do we rely on, and how many of the critical ones have a current risk assessment?

FIR reading: [INTEL-25 The Third-Party Half](/intel/intel-25-the-third-party-half/) · [INTEL-31 Access Is a Product](/intel/intel-31-access-is-a-product/) · [INTEL-38 Three Hours to Admin](/intel/intel-38-three-hours-to-admin/) · [E90 Refinement, Not Revolution](/tuesday/e90-refinement-not-revolution/) · [E93 The Economics Changed](/tuesday/e93-the-economics-changed/)

### 04 · Recovery time sets the bill.

Fewer victims pay, so attackers go after your ability to recover. The cost is now set by how long you're down.

- **69%** of ransomware victims refused to pay, up from about half in 2022. *(Verizon DBIR 2025 and 2026)*
- Yet data-extortion events rose **63%** in 2025. Fewer payments haven't meant fewer attacks. *(Intel 471, 2026 Outlook)*
- Jaguar Land Rover: a five-week production stoppage, about **£1.9 billion**, the UK's costliest cyberattack. *(Verizon DBIR 2026)*
- Loss grows much faster than downtime. In one economic model, restoring within a week cost 1.4% of a month's national output; taking almost two weeks cost 13.7%. About **10×** the damage. *(Microsoft / Accenture, Securing Nations in the Intelligent Economy, 2026)*
- Also agree: Mandiant (backups, identity and hypervisors hit first), Verizon (ransomware in 48% of breaches), Cyentia (disruption in 43% of extreme events, 8% of all).

Paying is no longer the big decision. Recovery speed is.

> **Ask:** How quickly could we really restore core operations, and have we tested it?

FIR reading: [INTEL-17 The Ecosystem Is Eating Itself](/intel/intel-17-ecosystem-eating-itself/) · [INTEL-28 The Ransom Bluff](/intel/intel-28-the-ransom-bluff/) · [INTEL-33 The Cost of Week Two](/intel/intel-33-the-cost-of-week-two/) · [E85 The Responder's Report](/tuesday/e85-responders-report/) · [E90 Refinement, Not Revolution](/tuesday/e90-refinement-not-revolution/) · [E92 Time Is the Attack Surface](/tuesday/e92-time-is-the-attack-surface/)

### 05 · Your own AI is the risk you control.

Attackers' AI makes old attacks cheaper. Your own AI use tripled in a year, much of it on personal accounts. That part you control.

- **Fewer than 1%** of 793 threat actors caught using AI were rated high or critical risk. AI changed cost and speed (in one espionage campaign, AI did 80–90% of the work), not phishing success. *(Verizon DBIR 2026, with Anthropic data; Anthropic, November 2025)*
- **45%** of employees now use AI regularly at work, up from 15% a year earlier, and **67%** of AI users sign in with personal accounts. *(Verizon DBIR 2026)*
- Fake AI browser extensions that harvested chat histories reached **20,000+** enterprise tenants. *(Microsoft Digital Defense Report 2026)*
- Unsanctioned AI added about **$670,000** to a breach's cost. *(IBM Cost of a Data Breach 2025)*
- **None** of the three leading AI labs expects prompt injection to be fully solved. *(OpenAI, Anthropic, Google, 2026)*
- Also agree: Microsoft, Alphabet and Apple now list their own AI agents as a risk in their SEC filings (Q3 2026).

Watch the attackers' AI. Govern your own.

> **Ask:** Which AI tools and agents are in use across our company, approved or not, and who owns each one?
>
> A good answer names an owner who can say what each agent can read, and what it is allowed to do.

FIR reading: [INTEL-24 Breadth, Not Depth](/intel/intel-24-breadth-not-depth/) · [INTEL-26 The Convenient Insider](/intel/intel-26-the-convenient-insider/) · [INTEL-41 The Browser Reads Your AI Chats](/intel/intel-41-the-browser-reads-your-ai-chats/) · [INTEL-46 Know Your Agents](/intel/intel-46-know-your-agents/) · [E93 The Economics Changed](/tuesday/e93-the-economics-changed/) · [E95 The Labs Agree](/tuesday/e95-the-labs-agree/)

---

## The good news: the basics are working

The controls everyone already knows still stop most attacks, and defenders are catching more on their own.

- MFA blocks **more than 99%** of unauthorized sign-in attempts. *(Microsoft Digital Defense Report 2025)*
- The share of breaches organizations found themselves rose from **43% to 52%** in a year. *(Mandiant M-Trends 2026)*
- Password attacks fell **26%** in a year, as MFA and passkeys force attackers elsewhere. *(Microsoft Digital Defense Report 2026)*
- **More than 90%** of breaches were enabled by gaps that were preventable. The fixes are known. *(Unit 42 Incident Response Report 2026)*

The fundamentals still decide most outcomes. Keep funding them, consistently.

> **Before all five:** Which basics are we not funding yet?

FIR reading: [INTEL-12 The Defender's Window](/intel/intel-12-defenders-window/) · [INTEL-36 The Alarm Is Yours](/intel/intel-36-the-alarm-is-yours/) · [INTEL-44 The Basics Are Working](/intel/intel-44-the-basics-are-working/) · [E85 The Responder's Report](/tuesday/e85-responders-report/) · [E94 MDDR 2026](/tuesday/e94-shift-in-the-physics-of-cyber-risk/)

---

## The noise we filtered out

These claims were loud this year. Each failed at least one of our tests.

- **"AI super-attacks are here."** Fewer than 1% of 793 threat actors caught using AI were rated high or critical risk, and phishing's success hasn't moved. AI made attacks cheaper and faster; it hasn't made them land more often. *(Verizon DBIR 2026, with Anthropic data)*
- **"Just patch faster."** 29% of vulnerabilities known to be exploited in 2025 were attacked on or before the day they were published. Speed can't win that race; reducing what you expose can. *(VulnCheck 2026 · Microsoft Digital Defense Report 2026)*
- **"The leak site lists who paid."** For a typical ransomware group, only about 9% of the victims it names publicly ever paid. The list is a pressure tactic, not a scoreboard. *(Verizon DBIR 2026)*
- **"Ransomware is fading."** Payments are fading: 69% of victims didn't pay. Attacks are not. Ransomware appeared in 48% of breaches, and data-extortion events rose about 63%. *(Verizon DBIR 2026 · Intel 471, 2026 Outlook)*
- **"Billions of attacks blocked."** Volume counts measure how much a vendor can see, not how much risk you carry. We left them out. *(FIR view)*
- **"A breach costs $4.44M."** An average hides the tail. In the costliest 5% of events, the median loss was $100M, and the most common outcome was disruption, not stolen data. *(Cyentia IRIS Xtreme 2026 · IBM Cost of a Data Breach 2025)*

---

## How our past calls held up

We graded the threats we named in our [2024](/reports/fir-2024/) and [2025](/reports/fir-2025/) reports against this year's evidence: **4 held, 1 changed shape, 1 partly right.**

- **Business email fraud** (2024 report): **Held.** 46 million+ business-impersonation attempts in 12 months, and the first message now rarely asks for money. *(Microsoft 2026)*
- **Ransomware and extortion** (2025 report, #1): **Changed shape.** Payments fell (69% refused) while extortion events rose 63%. Attackers now go after recovery. *(Verizon DBIR 2026 · Intel 471)*
- **Infostealers and stolen credentials** (2025, #2): **Held.** 82% of intrusions used no malware. *(CrowdStrike 2026)*
- **Cloud compromise** (2025, #3): **Held.** The route now runs through vendors and tokens: one stolen token reached cloud admin in about three hours. *(Anthropic 2026)*
- **AI-powered attacks** (2025, #4): **Partly right.** AI made attacks cheaper and faster, but fewer than 1% of AI-using actors were rated high risk. *(Verizon DBIR 2026)*
- **Insiders and fake IT workers** (2025, #5): **Held.** Fake remote IT workers drew on an estimated 15,000 stolen identities. *(Verizon DBIR 2026)*

---

## Weak signals to watch in 2027 {#watch}

Real, but not yet proven across sources or years. Any of these could be next year's signal.

- **Attacks run by AI agents.** In one espionage campaign, AI did 80–90% of the work, with people stepping in at a handful of decision points. *Not yet a signal: one documented case.* (Anthropic, November 2025)
- **AI on the defender's side.** AI labs and security vendors have formed coalitions to find and fix vulnerabilities with frontier models. *Not yet a signal: too early to show up in breach data.* (Anthropic Project Glasswing, April 2026)
- **Post-quantum deadlines.** US federal systems are to move to post-quantum encryption by 2035; EU and UK critical infrastructure by 2030. *Not yet a signal: the deadlines are set; the threat date isn't.* (Microsoft / Accenture, 2026)
- **Intruders staying unseen longer.** Median time to detection rose from 11 to 14 days. *Not yet a signal: partly driven by long-running espionage cases.* (Mandiant M-Trends 2026 · Microsoft 2026)
- **Prompt injection.** Practitioners rank it the top risk for AI applications, and none of the three leading AI labs expects it to be fully solved. *Not yet a signal: it barely appears in incident data so far.* (OWASP · CrowdStrike 2026 · Microsoft Digital Defense Report 2026)

We'll tell you when these cross the line. Follow along weekly in [FIR Risk Tuesday](/tuesday/) and [FIR Risk INTEL](/intel/).

---

## Five questions for your next board meeting

1. **The window is gone. Expose less.** Do we know every system we expose to the internet and every open-source package we depend on, and is that footprint getting smaller?
2. **Inside, they look like you.** If an attacker were logged in as one of our employees today, would we know?
3. **Half of breaches now involve a third party.** How many vendors do we rely on, and how many of the critical ones have a current risk assessment?
4. **Recovery time sets the bill.** How quickly could we really restore core operations, and have we tested it?
5. **Your own AI is the risk you control.** Which AI tools and agents are in use across our company, approved or not, and who owns each one?

**And before all five:** Which basics are we not funding yet?

The PDF also includes a two-page appendix for your security team that maps each signal to MITRE ATT&CK and ATLAS techniques and mitigations.

**[Download the full report (PDF) →](/reports/FIR-SIGNALS-2026.pdf)**

*No registration required.*

---

## Every number, checked {#numbers}

All 43 figures in the report, each traced to the page of the primary report it comes from. Page numbers are PDF pages; "web" means checked against the publisher's web page. Edition years cover the prior year's data. Figures from different reports are not compared directly.

**Signal 01 · The window is gone**

- **84 → 29 min:** average eCrime breakout time, 2022 → 2025. CrowdStrike GTR 2024 p10; 2026 p9
- **2m07s → 27s:** fastest breakout, 2023 → 2025. CrowdStrike GTR 2024 p10; 2026 p9
- **31%:** breaches starting with an exploited vulnerability, from 20%. Verizon DBIR 2026 p10
- **29%:** exploited flaws attacked on or before publication day. VulnCheck 2026 p15
- **26%:** critical known-exploited flaws fully fixed in 2025, from 38%. Verizon DBIR 2026 p10
- **32%:** exploits, the #1 initial infection vector. M-Trends 2026 p11
- **+44%:** exploitation of public-facing applications. IBM X-Force 2026 p4
- **<24 h:** vulnerability discovery to weaponization. Microsoft MDDR 2026 p14

**Signal 02 · Inside, they look like you**

- **71% → 82%:** malware-free detections, 2022 → 2025. CrowdStrike GTR 2024 p11; 2025 p9; 2026 p9
- **#2:** voice phishing as a way in; email phishing 14% → 6%. M-Trends 2025 p10; 2026 p10–11
- **+502%:** malicious voice calls over Teams in a year. Microsoft MDDR 2026 p46
- **83%:** privilege escalation with no exploit. Verizon DBIR 2026 p70
- **−26%:** password attacks in a year. Microsoft MDDR 2026 p64
- **~90%:** cases where identity played a material role. Unit 42 IR Report 2026, web

**Signal 03 · Third parties**

- **9% → 48%:** breaches involving a third party, four editions. Verizon DBIR 2024 p13; 2025 p11; 2026 p11
- **23%:** third parties that fully fixed missing cloud MFA. Verizon DBIR 2026 p11
- **~4×:** major supply-chain and third-party breaches, five years. IBM X-Force 2026 p5
- **~200:** customers' data taken through one SaaS provider. Anthropic, Sept 2026 p13
- **~3 h:** stolen token to cloud admin. Anthropic, Sept 2026 p14
- **20% · 65%:** trusted relationships, share of extreme events and of their losses. Cyentia IRIS Xtreme 2026 p29

**Signal 04 · Recovery time**

- **~10×:** loss at ~2 weeks to restore vs under one (1.4% → 13.7% of monthly GDP). Microsoft / Accenture 2026 p20
- **~50% → 69%:** ransomware victims who didn't pay, 2022 → 2025. Verizon DBIR 2025 p10; 2026 p11
- **48%:** breaches involving ransomware. Verizon DBIR 2026 p11
- **£1.9B:** Jaguar Land Rover, five-week stoppage. Verizon DBIR 2026 p105
- **+63%:** data-extortion events in 2025. Intel 471, 2026 Outlook p6
- **~9%:** named leak-site victims who paid (median per group). Verizon DBIR 2026 p42
- **$100M:** median loss in the costliest 5% of events, 2020–2025. Cyentia IRIS Xtreme 2026 p6
- **8% → 43%:** disruption as main outcome, all incidents vs extreme events. Cyentia IRIS Xtreme 2026 p15

**Signal 05 · AI**

- **<1%:** of 793 AI-using threat actors rated high or critical risk. Verizon DBIR 2026 p26
- **80–90%:** of one espionage campaign's work done by AI. Anthropic, Nov 2025 p3
- **15% → 45%:** employees using AI regularly at work. Verizon DBIR 2026 p13
- **67%:** AI users signing in with personal accounts. Verizon DBIR 2026 p13
- **20,000+:** enterprise tenants reached by fake AI extensions. Microsoft MDDR 2026 p27
- **+$670K:** added to breach cost by unsanctioned AI. IBM Cost of a Data Breach 2025 p4
- **0 of 3:** leading AI labs expecting prompt injection to be solved. OpenAI, Anthropic, Google guidance, web

**Good news, scorecard and watch list**

- **>99%:** unauthorized sign-ins blocked by MFA. Microsoft MDDR 2025 p9
- **43% → 52%:** compromises organizations detected themselves. M-Trends 2026 p16
- **>90%:** breaches enabled by preventable gaps. Unit 42 IR Report 2026, web
- **$4.44M:** average cost of a data breach. IBM Cost of a Data Breach 2025 p3
- **46M+:** business-impersonation attacks in 12 months. Microsoft MDDR 2026 p50
- **15,000:** stolen identities behind fake IT workers. Verizon DBIR 2026 p74
- **11 → 14 days:** median dwell time, driven by espionage cases. M-Trends 2026 p5
- **2030 · 2035:** post-quantum migration deadlines. Microsoft / Accenture 2026 p17

---

## Sources

- **Anthropic:** AI-orchestrated espionage campaign (Nov 2025) · Detecting and countering misuse of AI (Sept 2026) · Project Glasswing (Apr 2026)
- **CrowdStrike:** Global Threat Report, 2024–2026 editions
- **Cyentia Institute:** IRIS Xtreme 2026
- **IBM:** Cost of a Data Breach Report 2025
- **IBM X-Force:** Threat Intelligence Index 2026
- **Intel 471:** Cyber Threat Trends & Outlook 2026
- **Mandiant (Google Cloud):** M-Trends 2025 and 2026
- **Microsoft:** Digital Defense Report 2025 and 2026
- **Microsoft & Accenture:** Securing Nations in the Intelligent Economy (2026)
- **Microsoft, Alphabet, Apple:** Q3 2026 10-Q and 10-K filings (SEC)
- **OpenAI, Anthropic, Google:** AI agent security guidance (2026)
- **OWASP:** Top 10 for LLM Applications 2026 · Top 10 for Agentic Applications
- **Palo Alto Networks Unit 42:** Global Incident Response Report 2026
- **Verizon:** Data Breach Investigations Report, 2023–2026 editions
- **VulnCheck:** Exploit Intelligence Report 2026

Also re-read, as useful context (no figure in this report depends on them): Red Canary Threat Detection Report 2026 · Rapid7 Global Threat Landscape Report 2026 · Picus Red Report 2026 · GuidePoint GRIT 2026 Ransomware and Cyber Threat Report · Zscaler ThreatLabz 2026 AI Security Report · Anthropic 2026 Agentic Coding Trends Report and 2026 State of AI Agents Report.

**How to read the numbers.** Each figure is quoted as its source reports it, for the year its data covers. Sources use different datasets and definitions, so figures from different reports are not added or compared directly.

**About this report.** SIGNALS is general risk intelligence for leaders. It is not legal, compliance or security advice for a specific organization. FIR Risk uses AI models from several providers, including Anthropic.

---

## Transcript {#transcript}

<details>
<summary>Read the narrated edition transcript</summary>

**Cold open**

Twenty-seven seconds.

That is how long it took one attacker last year to get from the first foothold inside a company to moving freely through its network. Not twenty-seven minutes. Seconds.

By the time anyone could have opened the alert, it was already over.

This is SIGNALS 2026, from FIR Risk Advisory.

**What we're going to tell you**

Every year, the security industry publishes hundreds of reports. Most of them are careful, serious work. And almost every one of them makes the same argument: *our* problem is the biggest one.

If you sit on a board or run a company, the result is noise.

So we tried something different. Over two years, we've read, researched and distilled those reports in one hundred FIR Risk editions, and counting. This year we put them side by side and asked one question: what survives?

We kept a finding only if independent sources agreed on it, if it held for more than a year, and if it matters to decisions a board actually makes.

Five findings passed. We call them signals.

One: the window is gone, so expose less.\
Two: inside your company, attackers look like you.\
Three: half of breaches now involve a third party.\
Four: recovery time sets the bill.\
And five: your own AI is the risk you control.

Each one ends with a single question for your next board meeting. Let's take them one at a time.

**Signal one — The window is gone**

**Signal one. The window is gone.**

There used to be a window. A flaw was discovered, a fix was published, and you had weeks, sometimes months, to patch before attackers caught up.

That window has closed.

CrowdStrike measures something it calls breakout time: how long an attacker needs to move from the first machine they compromise to the rest of the network. In 2022 the average was eighty-four minutes. By 2025 it was twenty-nine. The fastest was the twenty-seven seconds you heard at the start.

And attackers aren't waiting for you to learn about the flaw. Nearly three in ten of the vulnerabilities exploited in 2025 were attacked on or before the day they were made public.

You cannot patch your way out of a race that starts before the starting gun. What you *can* control is how much of your company is exposed in the first place: every system facing the internet, every open-source package you depend on.

So the question for your board is this:

**Do we know every system we expose to the internet and every open-source package we depend on, and is that footprint getting smaller?**

**Signal two — Inside, they look like you**

**Signal two. Inside, they look like you.**

Picture a phone call to your help desk. The caller is friendly, a little stressed, knows the right names. They've lost their phone and need their login reset before a meeting.

Nothing about that call sets off an alarm. That's the point.

Logins are getting harder to break, because more companies use multi-factor authentication. So attackers have stopped breaking in. They talk their way in. Mandiant now ranks voice phishing as the second most common way attackers get through the door.

And once they're inside, they don't bring malware. In 2025, eighty-two percent of the intrusions CrowdStrike detected used no malware at all: just stolen logins and the same tools your own staff use every day.

To your security tools, the attacker looks exactly like an employee having a busy day.

**If an attacker were logged in as one of our employees today, would we know?**

**Signal three — Half of breaches now involve a third party**

**Signal three. Half of breaches now involve a third party.**

Your company doesn't stop at your own walls. Your payroll provider, your cloud software, your outsourced IT, your marketing agency: every one of them holds some kind of key to your business.

Three editions ago, Verizon's breach report found a third party involved in nine percent of breaches. This year it was forty-eight percent. Close to half.

The keys are often small and invisible: a digital token that lets one system talk to another. In one case Anthropic documented this year, a single stolen token reached full administrative control of a company's cloud in about three hours.

And when it goes wrong, it goes badly wrong. In Cyentia's study of the most extreme cyber events, a trusted relationship was the way in for about one event in five, but those events accounted for nearly two-thirds of the losses.

Forty-eight percent is an average, though. Nobody can tell you your number. It depends on which vendors hold your keys, and you only learn it by looking.

**How many vendors do we rely on, and how many of the critical ones have a current risk assessment?**

**Signal four — Recovery time sets the bill**

**Signal four. Recovery time sets the bill.**

In 2025, a cyberattack stopped production at Jaguar Land Rover. The lines stayed down for five weeks. Verizon calls it the most economically damaging cyberattack in British history: about one point nine billion pounds.

Here's what's changed. Fewer victims pay ransoms now: sixty-nine percent refused in the latest Verizon data, up from about half in 2022. That's good news. But the attacks didn't stop. Data-extortion events rose sixty-three percent. Attackers adapted. Now they go after your ability to recover: your backups, your identity systems, the tools you'd use to rebuild.

So the cost of an attack is no longer set by the ransom. It's set by how long you're down.

And that cost doesn't grow in a straight line. In one economic model from Microsoft and Accenture, restoring operations within a week cost one point four percent of a month's national output. Taking almost two weeks cost thirteen point seven percent. One extra week, roughly ten times the damage.

**How quickly could we really restore core operations, and have we tested it?**

**Signal five — Your own AI is the risk you control**

**Signal five. Your own AI is the risk you control.**

You've heard the headlines about AI super-attacks. Here is what the evidence actually shows.

Attackers are using AI, without question. In one espionage campaign Anthropic disrupted, AI did eighty to ninety percent of the work. But across the threat actors Verizon studied, fewer than one percent of those caught using AI were rated high or critical risk. AI has made familiar attacks cheaper and faster. It hasn't made them land more often.

Now look inside your own company.

A year ago, fifteen percent of employees used AI regularly at work. Now it's forty-five percent. Two-thirds of them sign in with personal accounts that your company doesn't control. When unsanctioned AI was involved in a breach, IBM found it added about six hundred and seventy thousand dollars to the cost.

You can't control the attackers' AI. You can control your own.

**Which AI tools and agents are in use across our company, approved or not, and who owns each one?**

**The good news**

Not everything this year was bad news.

The basics work. Multi-factor authentication blocks more than ninety-nine percent of unauthorized sign-ins. Companies are catching more attacks themselves: Mandiant found that the share of breaches organizations detected on their own rose from forty-three percent to fifty-two percent in a year. And Unit 42 found that in more than ninety percent of breaches, the gap that let the attacker in was preventable. The fixes are known.

We also left out the loud claims that didn't pass our tests. You'll find them in the report.

**Weak signals to watch in 2027**

Finally, four things we're watching. They're real, but they haven't passed our tests yet. Any one of them could be a signal next year.

AI on the defender's side. AI labs and security firms are teaming up to find and fix flaws before attackers do. It's too early to show up in breach data.

Prompt injection: hiding instructions that trick an AI system into doing something it shouldn't. Practitioners rank it the top risk for AI applications, and none of the three leading AI labs expects it to be fully solved.

Intruders staying unseen longer. The median time to detect one rose from eleven days to fourteen, partly because of long-running espionage cases.

And quantum. Governments have set dates to move to new encryption: 2030 for critical infrastructure in Europe and the UK, 2035 for US federal systems. The deadlines are set. The threat date isn't.

**What we told you**

Five signals. Five questions.

Question one. The window is gone. Do we know everything we expose, and is it getting smaller?

Question two. Inside, they look like you. If an attacker were logged in as one of our employees today, would we know?

Question three. Half of breaches involve a third party. How many of our critical vendors have a current risk assessment?

Question four. Recovery time sets the bill. How quickly could we really restore, and have we tested it?

Question five. Your own AI is the risk you control. Which AI tools and agents are in use, approved or not, and who owns each one?

And one more, to ask before all five:

**Which basics are we not funding yet?**

These aren't mandates. They are the questions we would want answered if it were our company.

Twenty-seven seconds. That's how fast it moves now. The good news is that the questions that matter most take only a moment to ask.

This was SIGNALS 2026, from FIR Risk Advisory. The full report, with every number and its source, is at firrisk.ai.

</details>

---

*SIGNALS 2026 is the third annual report from FIR Risk Advisory, after the [2024](/reports/fir-2024/) and [2025](/reports/fir-2025/) Fraud Intelligence Reports. Thank you for reading FIR Risk this year. — Bruce Bird*
