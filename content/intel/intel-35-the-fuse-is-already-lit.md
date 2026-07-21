---
title: "INTEL-35: The Fuse Is Already Lit"
description: "Harvest-now-decrypt-later is operational and governments have set dated post-quantum migration mandates (US 2035, EU/UK 2030) — yet only 22% of executives rank quantum as game-changing. The one action: start the cryptographic inventory of your 10-year-plus data in 2026."
date: 2026-07-24
type: "intel"
intel_type: "REGULATORY"
tags: ["Quantum Computing", "Post-Quantum Cryptography", "Data Protection", "Regulatory", "Compliance", "CISO", "Risk Management"]
---

## The INTEL

**"Harvest now, decrypt later" is already operational — adversaries are stealing encrypted data today and warehousing it against the day quantum computing can open it — and governments have responded with specific, dated migration mandates: US federal systems to post-quantum cryptography by 2035 ($7.1B funded), EU and UK critical infrastructure by 2030 with full migration by 2035, India's National Quantum Mission 2026–28, South Korea standards finalized 2025 for deployment by 2035. Yet only 22% of executives rank quantum as the most game-changing technology, versus 66% for AI. The deadlines and the attention are pointed in opposite directions.**

The timeline pressure comes from a revised technical estimate: the long-standing consensus held that breaking RSA-2048 would require roughly 20 million qubits; newer research cited in the Microsoft/Accenture report (a Google researcher's analysis) suggests an advanced one-million-qubit system — achievable by ~2030 on current trajectories — could do it. Treat that date as a vendor-relayed industry projection, not settled fact: it rests on physical-qubit counts rather than error-corrected logical qubits, and independent academic estimates run wider and later. But the strategic conclusion doesn't depend on the date. Data with a 10–20 year confidentiality shelf life — health records, financial account data, PII, trade secrets — that is exfiltrated *today* is already on the fuse, whether decryption arrives in 2030 or 2040.

The replacement tooling exists: NIST's post-quantum standards (ML-KEM, ML-DSA) are finalized.

---

## Why It Matters

This is the cleanest current example of a risk class that boards systematically underprice: the long fuse. Budget processes naturally fund the risks that produced last quarter's incidents — ransomware has incident reports, so ransomware gets funded. Harvest-now-decrypt-later will never produce an incident report, because the harm detonates years after the theft, retroactively, all at once. By the time there is incident evidence, the window to act has been closed for a decade.

That's why the 66/22 attention gap is the statistic that matters more than any qubit count. It means most organizations will start their cryptographic migration when regulation forces them or when a decryption event makes headlines — which is to say, late, expensive, and simultaneously with everyone else. For regulated firms — financial services and healthcare above all, whose data carries the longest confidentiality obligations in the economy — the inversion is an arbitrage: crypto-inventory work started in 2026 is cheap, differentiating with regulators, and years ahead of the peer group.

The regulatory direction is unambiguous even where the science is uncertain. When the US commits $7.1B and a 2035 statutory deadline, and the EU/UK set 2030 for critical infrastructure, examiners' questions follow. "What is your post-quantum migration plan?" is on its way to joining "what is your ransomware playbook?" as a standard examination item.

---

## What To Do — One Key Action

**Start the cryptographic inventory this year. Catalogue where your long-lived sensitive data lives — anything that must stay confidential for 10+ years — and which encryption protects it in transit and at rest. Today's standard public-key cryptography (RSA/ECC) is the class at risk; the finalized NIST post-quantum standards (ML-KEM, ML-DSA) are the destination. The inventory, not the migration, is the 2026 deliverable — you cannot sequence a multi-year migration you haven't mapped.**

And apply the broader test this risk class teaches: in your next risk-appetite review, name one material risk with zero incident history but a fixed external deadline, and check whether it appears anywhere in your capital plan. If it doesn't, your funding model is driven by memory, not exposure — and harvest-now-decrypt-later is exactly the kind of risk it will miss.

---

## MITRE ATT&CK

- **T1020 — Automated Exfiltration · T1560 — Archive Collected Data:** The techniques behind the harvest. Nothing about harvest-now-decrypt-later requires new attacker tradecraft — the exfiltration looks like any other data theft. What changes is the victim's damage model: encrypted data that would once have been written off as unreadable must now be treated as compromised-on-delay.

---

## Learn More

- [FIR Risk Tuesday E92 — Time Is the Attack Surface](/tuesday/e92-time-is-the-attack-surface/) — The full three-clock analysis, including the evidentiary caveats on the quantum timeline
- [NIST Post-Quantum Cryptography Standards](https://csrc.nist.gov/projects/post-quantum-cryptography) — The finalized replacement standards (ML-KEM, ML-DSA)
- [CISA Post-Quantum Cryptography Initiative](https://www.cisa.gov/quantum) — US migration guidance
- [Securing Nations in the Intelligent Economy (Microsoft & Accenture)](https://wwps.microsoft.com/blog/securing-nations-ai-quantum-disruption) — Primary source for the deadline table and timeline estimates

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
