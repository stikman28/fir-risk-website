---
title: "INTEL-47: The Rule of Two"
description: "An AI agent that reads outside content, reaches sensitive data and can act or send information out has everything a prompt injection attack needs. OWASP's 2026 Top 10 for LLM Applications calls its floor the Rule of Two: an agent with all three needs human approval for each action. The same three capabilities are a useful lens for any agent risk assessment, and the first one, what goes in, is where governance starts."
date: 2026-11-02
type: "intel"
intel_type: "TECHNIQUE"
tags: ["AI Governance", "Agentic AI", "Prompt Injection", "OWASP", "OpenAI", "AI Security", "CISO", "Risk Management"]
---

## The INTEL

**Hidden instructions in an email, a web page or a shared document can steer an AI agent. That is prompt injection, and none of the AI labs expects it to be fully solved. OWASP's 2026 Top 10 for LLM Applications offers a floor for limiting the damage, which it calls the Rule of Two, credited to Meta AI. It looks at three capabilities an agent can have: (A) untrusted input, (B) sensitive data, and (C) "state change or external communication." OWASP's guidance: "any [A,B,C] agent needs per-action human approval," and an agent that reads untrusted input and has one of the other two needs "an explicit residual-risk assessment."**

The logic is simple. Each capability is ordinary on its own. An email assistant that reads inbound mail is fine. Access to the inbox is fine. Being able to send replies is fine. Together, they mean a stranger's email can instruct the agent to forward your confidential messages to the stranger. OpenAI's security engineers describe the same pattern: "an attacker needs both a source, or a way to influence the system, and a sink, or a capability that becomes dangerous in the wrong context." The attack they see most often is an attempt to convince the assistant "it should take some secret information from a conversation and transmit it to a malicious third-party." That is A, B and C in one sentence.

OWASP notes that NIST and joint guidance from CISA, the FBI, the NSA and Australia's ACSC endorse the rule. It also says the rule is a floor, not the whole answer.

---

## Why It Matters

OWASP lists the Rule of Two as a prompt-injection defense, and that is where it started. The same three capabilities are also a useful lens for governing AI agents in general. Together they describe how far an agent can be misled, how much it can see, and how much it can do without a person involved.

Capability A is where governance starts, because it is the one an organization can shape before anything goes wrong. That is why [E95](/tuesday/e95-the-labs-agree/) put governing what goes into an agent first. A control over agent inputs can take two forms, and many organizations will want both:

- **A clear policy** on the kinds of content users may give their agents: which sources, which documents, which data, and what stays out.
- **Monitoring** of what agents are actually reading and acting on, so the policy can be checked rather than assumed.

That choice changes the risk itself. A company that allows its agents to read only what a user gives them directly, or content from approved sources, has narrowed capability A on purpose. A company with no rules on what its agents can read has left A wide open, and every agent with sensitive data and the ability to act inherits that exposure. Two agents with identical permissions can carry very different risk, depending on what they are allowed to read.

The third piece is people. The Rule of Two works because a human sits between the agent and a consequential action, and that takes two kinds of human involvement:

- **The people who own and run the agent**, who approve its actions and notice when it behaves unexpectedly.
- **The people responsible for oversight** of AI use across the organization, who need to know which agents hold all three capabilities and whether the controls around them are working.

---

## What To Do — One Key Action

**Consider adding the three capabilities to your AI agent risk assessment. For each agent, ask: does it read content from outside the organization, can it reach sensitive data, and can it change records or send information out?**

Agents with all three are where OWASP recommends human approval for each action. Agents with two are worth a closer look at whether they need every capability they have. For all of them, the answers point to where a control over inputs, and a named person watching, will do the most good.

---

## MITRE ATT&CK

- **T1567 — Exfiltration Over Web Service (closest analog):** The most common attack OpenAI describes tricks an agent into sending secret information to an outside party through the agent's own legitimate channels.

---

## Learn More

- [OWASP Top 10 for LLM Applications 2026](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) — Primary source, LLM01 Prompt Injection, mitigation 8
- [Designing AI agents to resist prompt injection (OpenAI)](https://openai.com/index/designing-agents-to-resist-prompt-injection/) — Source and sink
- [FIR Risk Tuesday E95 — The Labs Agree: Govern What Goes In, Limit What Comes Out](/tuesday/e95-the-labs-agree/) — Full analysis
- [FIR Risk INTEL-46 — Know Your Agents](/intel/intel-46-know-your-agents/) — Build the inventory first

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
