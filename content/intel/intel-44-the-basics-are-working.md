---
title: "INTEL-44: The Basics Are Working"
description: "Password attacks fell 26% year over year, which Microsoft calls strong evidence that MFA and passkeys are forcing attackers elsewhere: to new-hire onboarding and account recovery, which still rely on SMS and email codes. The one action: hold account recovery and onboarding to the same standard as login."
date: 2026-10-30
type: "intel"
intel_type: "TREND"
tags: ["Identity Security", "MFA", "Passkeys", "Passwordless", "Account Recovery", "Microsoft", "CISO", "Risk Management"]
---

## The INTEL

**Some good news from Microsoft's 2026 Digital Defense Report: password attacks are down 26% year over year. Microsoft calls it "strong evidence that security measures such as MFA and passkeys are forcing attackers to pivot to other approaches to achieve access to high-value targets."**

The controls work, so attackers are going around them. Microsoft names where they're going: "new-hire onboarding and account recovery," the side doors that "rely on weaker credentials like SMS or email-based one-time passcode (OTP)." It also saw the share of adversary-in-the-middle phishing and token theft, techniques built to get past MFA, more than double in the first six months of 2026. That share is still comparatively small, Microsoft notes, but "it shows the direction of travel."

Microsoft's answer is passkeys, which "only work on the website or app for which they were created," so a passkey won't work on a lookalike phishing site. The next step, it says, is to "remove all phishable credentials from an account," making not just the login but the account itself phishing-resistant.

---

## Why It Matters

The money spent on MFA and passkeys is paying off, and that's worth telling the board. But an account is only as strong as its weakest way in. If the front door needs a passkey and the recovery flow accepts a text message, attackers will use the recovery flow, and the help desk reset and the new starter's first login become the targets.

---

## What To Do — One Key Action

**Hold account recovery and new-hire onboarding to the same standard as login: no SMS or email codes as the fallback for accounts that matter, and phishing-resistant credentials from day one.**

---

## MITRE ATT&CK

- **T1110 — Brute Force:** Password guessing and spraying, the attacks MFA and passkeys are driving down.
- **T1557 — Adversary-in-the-Middle:** Phishing that relays the login to steal session tokens and get past MFA, now growing as a share of attacks.

---

## Learn More

- [Microsoft Digital Defense Report 2026: Decoding emergence (Microsoft, PDF)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2026-Microsoft-Digital-Defense-Report.pdf) — Primary source, "Identity is at the center of modern cyber risk"
- [FIR Risk Tuesday E94 — MDDR 2026: A Shift in the Physics of Cyber Risk](/tuesday/e94-shift-in-the-physics-of-cyber-risk/) — Full analysis of the report

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
