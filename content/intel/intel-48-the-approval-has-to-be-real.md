---
title: "INTEL-48: The Approval Has to Be Real"
description: "\"Keep a human in the loop\" can fail without anyone noticing. OWASP's Top 10 for Agentic Applications, drawn from the lived experience of early adopters, reports that confident, polished explanations misled human operators into approving harmful actions. What makes an approval real: reviewers see the exact action, approvals stay rare enough to scrutinize, and those responsible for oversight test that they work."
date: 2026-11-03
type: "intel"
intel_type: "TECHNIQUE"
tags: ["AI Governance", "Agentic AI", "Human in the Loop", "Internal Controls", "OWASP", "OpenAI", "CISO", "Risk Management"]
---

## The INTEL

**"Keep a human in the loop" is the most common answer to AI agent risk, and it can fail without anyone noticing. OWASP's Top 10 for Agentic Applications lists it among the risks drawn from "the lived experience of the first generation of agentic adopters": "Confident, polished explanations misled human operators into approving harmful actions." It names the risk Human-Agent Trust Exploitation.**

That experience is still early, and it will change as the technology matures and gives its users more configurable controls. For now, OWASP's own example scenarios read like familiar fraud with a new messenger. In one, a poisoned vendor invoice is ingested by a finance copilot, the agent suggests an urgent payment to the attacker's bank details, and the finance manager approves it.

OWASP's 2026 Top 10 for LLM Applications explains why the approval step is weaker than it looks. Reviewers should see "the exact rendered action rather than a summary," because what an agent displays can differ from what it executes, and "approval fatigue degrades reviewer judgment at volume." Underneath both is a habit OWASP calls overreliance: "Humans and systems often treat fluent, confident, or well-structured outputs as authoritative. In agentic architectures, this overreliance is frequently embedded in system design."

The labs still want the human there. OpenAI's CISO checklist calls for "an independent check before actions such as sending funds, changing records or contacting customers." The point is that the check has to be designed to work.

---

## Why It Matters

An approval step that people click through can be worse than none, because it looks like a control in every audit and every board report. It also carries more weight than it seems: under OWASP's Rule of Two in [INTEL-47](/intel/intel-47-the-rule-of-two/), an agent that reads outside content, reaches sensitive data and can act or send information out relies on a person approving each action. If that approval isn't real, neither is the protection. Agents make this easier to fall into: they produce clear, confident explanations of why an action is fine, and they can ask for approval dozens of times a day. By the fortieth request, the reviewer is approving the summary, not checking the action.

We made the same point about payments in [INTEL-42](/intel/intel-42-the-first-email-asks-for-nothing/): a callback is a habit, but a control has an owner, applies every time, leaves evidence and is tested. Human approval of agent actions is a control, and it needs the same design. It also needs two kinds of people:

- **The people who own and run the agent** approve its actions. Seeing the exact action, and few enough requests to look at each one, is what makes their approval real.
- **The people responsible for oversight** of AI across the organization check that the approval step works, rather than assuming it does.

---

## What To Do — One Key Action

**Treat agent approvals as a real control. That means showing reviewers the exact action (the amount, the recipient, the record being changed), not the agent's summary of it, and reserving approval for actions that are consequential or hard to reverse, so the volume stays low enough for real scrutiny. It's also worth testing: for those responsible for oversight, periodically checking a sample of approved actions shows whether reviewers would have caught a bad one.**

If reviewers are approving so many requests that they can't look at each one, that isn't human oversight. It's a sign the agent has too much authority for the approval step to carry.

---

## MITRE ATT&CK

- **T1204 — User Execution (closest analog):** The harmful action only happens because a person approves it. Here the persuasion comes from the agent's own confident explanation rather than a phishing email.

---

## Learn More

- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) — Primary source, ASI09 Human-Agent Trust Exploitation (pp. 33–35)
- [OWASP Agentic Top 10 release announcement](https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/) — "The lived experience of the first generation of agentic adopters"
- [OWASP Top 10 for LLM Applications 2026](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) — Rendered actions, approval fatigue and overreliance
- [Agent security in the enterprise (OpenAI, PDF)](https://cdn.openai.com/pdf/6546a5a6-170a-41e8-bf2f-979ff3484db1/agent-security-enterprise.pdf) — The CISO checklist
- [FIR Risk Tuesday E95 — The Labs Agree: Govern What Goes In, Limit What Comes Out](/tuesday/e95-the-labs-agree/) — Full analysis
- [FIR Risk INTEL-47 — The Rule of Two](/intel/intel-47-the-rule-of-two/) — Why some agents rely on per-action approval
- [FIR Risk INTEL-42 — The First Email Asks for Nothing](/intel/intel-42-the-first-email-asks-for-nothing/) — What makes a control a control

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
