---
title: "INTEL-41: The Browser Reads Your AI Chats"
description: "Microsoft's 2026 Digital Defense Report found malicious browser extensions posing as AI assistants with about 900,000 installs, active in more than 20,000 enterprise tenants, harvesting AI chat histories. Microsoft calls AI browsers a material enterprise risk. The one action: enforce an approved list of AI browsers and extensions, block the rest, and treat AI chat histories as sensitive business data."
date: 2026-10-27
type: "intel"
intel_type: "TREND"
tags: ["AI Security", "AI Governance", "Browser Security", "Data Protection", "Microsoft", "Shadow AI", "CISO", "Risk Management"]
---

## The INTEL

**Malicious browser extensions posing as AI assistants reached about 900,000 installs and was active inside more than 20,000 enterprise tenants, quietly collecting AI chat histories, prompts and responses from platforms such as ChatGPT and DeepSeek. Microsoft says that exposed "proprietary code, business strategies, and other sensitive information."**

The finding comes from Microsoft's 2026 Digital Defense Report, which calls AI browsers "a material enterprise risk" because they combine three conditions security leaders rarely face at the same time: "broad adoption, high-trust access, and limited security visibility." Microsoft sees AI browsers in daily use at more than 40% of organizations in its dataset. Attackers have noticed: in a May 2026 analysis, Microsoft found AI browsers were the initial infection vector in incidents involving 57 distinct malware families.

The disguise is getting better. Microsoft describes malicious "AI productivity" apps with professional branding and valid code-signing certificates that install a backdoor stealing credentials, payment data and files, and an extension impersonating Perplexity AI that recorded users' searches while showing them normal results.

---

## Why It Matters

Employees now paste contracts, financials, source code and strategy into AI chats every day. The browser that holds those chats can also read untrusted web pages and act inside live business sessions with the user's own access. When something goes wrong, Microsoft notes, it "may present as ordinary software-as-a-service (SaaS) usage rather than malware execution," so it doesn't look like an attack.

Most organizations govern which AI tools are approved. Far fewer govern the browser extensions sitting on top of them. That gap is where this campaign lived.

---

## What To Do — One Key Action

**Decide which AI browsers and browser extensions are approved, enforce that list through your browser management, and block the rest. Then treat AI chat histories as sensitive business data, covered by the same data-protection rules as the documents people paste into them.**

That's Microsoft's own third priority for organizations: "maintain visibility into approved AI tools, services, and agentic capabilities while monitoring for unauthorized or unmanaged use."

---

## MITRE ATT&CK

- **T1176 — Browser Extensions:** Malicious extensions disguised as AI assistants harvest chat histories, page content and session material from inside the browser.

---

## Learn More

- [Microsoft Digital Defense Report 2026: Decoding emergence (Microsoft, PDF)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2026-Microsoft-Digital-Defense-Report.pdf) — Primary source, "AI as the new attack surface"
- [FIR Risk Tuesday E94 — MDDR 2026: A Shift in the Physics of Cyber Risk](/tuesday/e94-shift-in-the-physics-of-cyber-risk/) — Full analysis of the report
- [FIR Risk INTEL-39 — Your Prompts Went Somewhere Else](/intel/intel-39-your-prompts-went-somewhere-else/) — Another route for AI conversations to leak

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
