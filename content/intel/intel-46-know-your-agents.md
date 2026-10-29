---
title: "INTEL-46: Know Your Agents"
description: "Before a board can ask who owns an AI agent or whether it could be stopped, someone has to know how many agents the company runs. OpenAI's enterprise security guide puts \"Know your agents\" first on its CISO checklist, followed by assessing each agent's blast radius. A good starting point: an inventory of every AI agent with its owner, purpose, reach and actions, and a risk assessment that shows where controls matter most."
date: 2026-11-01
type: "intel"
intel_type: "TREND"
tags: ["AI Governance", "Agentic AI", "AI Security", "OpenAI", "Google", "CISO", "Board Governance", "Risk Management"]
---

## The INTEL

**Before a board can ask who owns an AI agent, or whether it could be stopped, someone has to be able to answer a simpler question: how many agents do we run? OpenAI's enterprise security guide puts it first on its checklist for CISOs: "Know your agents. Maintain an inventory of pilot and production agent deployments that records the accountable owner, business purpose, systems and data each can reach and actions each can take."**

The second item on the same checklist is what turns a list into a decision: "Prioritize by potential impact. Assess each deployment's effective blast radius: what it can affect, which actions can complete without another decision point and how difficult those effects are to reverse." OpenAI's closing advice follows the same order: begin by "identifying existing agent deployments, assigning accountable owners, and assessing their potential impact."

Google reaches the same starting point from a different direction. The first of its three principles for secure AI agents: "Agents must have well-defined human controllers."

---

## Why It Matters

Agents don't only arrive through a formal project. They come switched on inside software the company already pays for, as pilots nobody retired, and as tools a team connected to get work done faster. An agent missing from the inventory has no owner, no limits anyone set on purpose and no one watching for it to go wrong.

The inventory is also what makes control affordable. Not every agent needs the same scrutiny. One that summarizes public documents is a different risk from one that can pay invoices or change customer records. A risk assessment of the inventory tells you where tight control is needed and where a lighter touch will do.

---

## What To Do — One Key Action

**A good starting point is an inventory of every AI agent in pilot or production, recording its owner, purpose, the systems and data it can reach and the actions it can take. A risk assessment of each one, by what it can affect, what it can do without a person deciding, and how hard its actions are to undo, then shows where controls matter most.**

An agent that nobody is willing to own deserves a hard look: give it an owner, or consider switching it off. The board question that follows is the one from [E95](/tuesday/e95-the-labs-agree/): do we know every AI agent we run, and for each one, who owns it, what can it do on its own, and could we stop it if it were tricked?

---

## MITRE ATT&CK

- **T1078 — Valid Accounts (closest analog):** Agents act with real credentials and real access. An agent no one has inventoried is a set of valid credentials no one is watching.

---

## Learn More

- [Agent security in the enterprise (OpenAI, PDF)](https://cdn.openai.com/pdf/6546a5a6-170a-41e8-bf2f-979ff3484db1/agent-security-enterprise.pdf) — Primary source, including the CISO first-actions checklist
- [Google's Approach for Secure AI Agents (Google)](https://research.google/pubs/an-introduction-to-googles-approach-for-secure-ai-agents/) — The three principles
- [FIR Risk Tuesday E95 — The Labs Agree: Govern What Goes In, Limit What Comes Out](/tuesday/e95-the-labs-agree/) — Full analysis

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
