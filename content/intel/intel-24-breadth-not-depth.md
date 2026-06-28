---
title: "INTEL-24: Breadth, Not Depth"
description: "The 2026 Verizon DBIR studied 793 threat actors using AI — and fewer than 1% reached a high or critical capability tier. Generative AI today is a breadth multiplier that scales known attacks, not a depth multiplier that unlocks novel ones. The takeaway for leaders: resource for the volume and velocity of known attacks and keep investing in the proven detections that already catch them — don't re-architect around hypothetical AI super-attacks."
date: 2026-06-29
type: "intel"
intel_type: "TREND"
tags: ["Artificial Intelligence", "AI Security", "Threat Intelligence", "Phishing", "Detection Engineering", "Verizon DBIR", "CISO", "MITRE ATT&CK", "Risk Management"]
---
## The INTEL

**Generative AI is not unlocking novel attacks. It is scaling the ones we already know. The 2026 DBIR studied 793 unique threat actors using AI — and fewer than 1% reached a high or critical capability tier. AI today is a breadth multiplier, not a depth multiplier.**

When Verizon, working with Anthropic, examined how attackers actually use AI, the picture was not the super-attacker of the hype cycle. The median attacker applied AI across roughly 15 well-documented techniques — some reached 40-50 — each backed by a median of 55 already-known malware examples. Fewer than 2.5% of the observed techniques were genuinely rare. The story is volume and velocity over well-trodden ground, not a leap into the unknown.

Verizon states it plainly: AI's impact today is "operational — automating and scaling techniques defenders already know how to detect." The clearest signal sits in the email data. AI-generated text in malicious emails doubled year over year — yet phishing as an initial-access vector "barely moved." More machine-written lures, the same success rate. That is breadth, not depth.

---

## Why It Matters

It is tempting to read the AI headlines and conclude the threat model has been rewritten — and to start re-architecting the security program around hypothetical "AI super-attacks." The data does not support that move. What the DBIR documents is an adversary using AI to do more of the same, faster: the same techniques, the same well-known malware families, at greater scale. The defensive corollary is the one that gets lost in the noise — these are precisely the attacks your existing detections are built to catch.

The hype is not baseless, and we are not dismissing it. The year-in-review names PromptLock ("the first AI-powered ransomware") and VoidLink ("written in six days by an AI agent… a point of no return for automated threat development"). The U.S. Secret Service appendix warns of the "autonomous adversary" — agentic AI that collapses the skill barrier so that "even unskilled criminals can launch sophisticated campaigns with just a few queries". These are real markers of where the trajectory points.

But a trajectory is not today's threat model. The skill barrier collapsing means *more* attackers running *known* techniques — a breadth problem, answered by capacity and consistency, not by re-engineering your stack around a depth problem that has not arrived. The risk to manage right now is letting AI-hype budgeting displace the fundamentals that are still doing the work.

---

## What To Do — One Key Action

**Resist re-architecting your security program around hypothetical "AI super-attacks." Resource it for the volume and velocity of the known attacks the data actually shows — and keep investing consistently in the proven detections and controls you already run, because those are exactly what catch AI-scaled, well-documented techniques.**

The fundamental holds: proven detection applied consistently beats chasing novelty. The DBIR's own framing — AI is "automating and scaling techniques defenders already know how to detect" — is a direct instruction to invest in detection coverage and throughput, not in a speculative new defensive paradigm. When the median AI-assisted attacker is running 15 documented techniques backed by known malware, the win condition is having those techniques covered and that coverage running every day without degrading.

The one question for your next review: not "what new AI defense do we need to buy?" but **"are our proven detections fully covered and consistently running at the volume and velocity the data now demands?"** The full plan for staying consistent on the fundamentals is in [E90](/tuesday/e90-refinement-not-revolution/); this is where it starts.

---

## MITRE ATT&CK

- **T1566 — Phishing:** AI-assisted lures doubled year over year while phishing success barely moved; control = the same proven phishing detection and user verification, applied consistently.

---

## Learn More

- [FIR Risk Tuesday E90 — Refinement, Not Revolution](/tuesday/e90-refinement-not-revolution/) — The full 2026 DBIR breakdown and the fundamentals plan
- [FIR Risk Tuesday E89 — The April Inflection](/tuesday/e89-the-april-inflection/) — AI-accelerated capability and the cadence shift
- [2026 Verizon Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/) — Primary source

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
