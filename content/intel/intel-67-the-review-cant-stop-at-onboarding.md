---
title: "INTEL-67: The Review Can't Stop at Onboarding"
seoTitle: "AI Supply Chain Rug Pulls: Keep Reviewing Vendors and AI Tools"
description: "MITRE ATLAS describes the rug pull: publish something legitimate, gain users, then push a malicious update. Put every vendor you rely on, AI tools and connectors included, in your third-party risk program with regular reassessments."
meta:
  description: "Attackers push malicious updates after the first review (MITRE ATLAS). Keep vendors and AI tools under regular third-party review. SIGNALS 2026."
date: 2026-12-04
type: "intel"
intel_type: "TECHNIQUE"
tags: ["SIGNALS", "Third-Party Risk", "Supply Chain", "AI Security", "MITRE ATT&CK", "MITRE ATLAS", "IBM X-Force", "Mandiant", "CISO", "Risk Management"]
---

## The INTEL

**MITRE describes an attack built to get past the first review: publish something legitimate, gain users, then push a malicious update. Vendors you rely on, including your AI tools, need checking after they are approved, not only before.**

What the sources show:

- **The update is the way in.** IBM X-Force: in open-source registries such as npm and PyPI, "a single compromised account can propagate malicious updates across thousands of projects." Attackers are "targeting the environments where software is built," including GitHub, GitLab and npm, "rather than traditional endpoints."
- **AI tools follow the same pattern.** MITRE ATLAS, its catalog of attacks on AI systems, calls it a rug pull: "More scrutiny is often placed on a supply chain dependency when it is first being considered," so a later malicious update "may allow adversaries to bypass these defenses." ATLAS also notes that "Adversaries have successfully used a poisoned MCP server to exfiltrate private user data."
- **Mandiant's prescription.** A third-party risk program "to vet SaaS vendors before onboarding and on an ongoing basis." Mandiant adds that organizations "often overlook SaaS applications in traditional asset management."

---

## Why It Matters

An AI assistant connected to your email, a connector that reads your files, or an agent tool that can run actions holds the same kind of access as a software vendor. ATLAS says compromising an agent tool can give attackers "broad accesses and permissions on the victim's system." These tools also change often, through updates you may not see.

If they sit outside your third-party program, nobody reassesses them when they change. If your vendor reviews happen only at the start, the risk that arrives later goes unexamined.

**Our read:** the SIGNALS decision for Signal 03 is a living list of who holds access to us. "Living" means reassessed, not just listed, and AI tools are on it.

---

## What To Do — One Key Action

**Make sure every vendor you rely on, including AI tools and connectors, is inside your third-party risk management program: assessed before onboarding, with risk assessments and vendor reviews updated on a regular schedule, not only at onboarding.**

---

## MITRE ATT&CK

- **T1195 — Supply Chain Compromise** (1.7% of Mandiant's 2025 investigations), including compromised software dependencies (T1195.001) and compromised software (T1195.002): a vendor's update used to reach you
- MITRE mitigations listed in SIGNALS: M1018 User Account Management · M1036 Account Use Policies · M1021 Restrict Web-Based Content

**MITRE ATLAS** (attacks on AI systems, v5.6)

- **AML.T0109 — AI Supply Chain Rug Pull:** attackers "publish legitimate AI components or software, gain user adoption, then push an update with a malicious variant"
- **AML.T0010.005 — AI Agent Tool:** compromising a tool can give "broad accesses and permissions," and in that environment "safeguards are often not in place"
- ATLAS mitigations: AML.M0023 AI Bill of Materials (a listing that helps "enable rapid response to reported vulnerabilities") · AML.M0014 Verify AI Artifacts ("Verify the cryptographic checksum of all AI artifacts")

---

## Learn More

- [FIR SIGNALS 2026](/reports/signals-2026/) — Signal 03, plus the MITRE ATT&CK appendix in the PDF
- [IBM X-Force Threat Intelligence Index 2026](https://www.ibm.com/reports/threat-intelligence) — Primary source
- [Mandiant M-Trends 2026](https://cloud.google.com/security/resources/m-trends) — Primary source
- [MITRE ATLAS](https://atlas.mitre.org/) — Adversarial threat landscape for AI systems
- [FIR Risk INTEL-54 — Your Technology Suppliers Now Call AI Agents Insiders](/intel/intel-54-agents-as-insiders/) — How suppliers describe agent risk

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
