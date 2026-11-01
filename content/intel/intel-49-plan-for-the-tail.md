---
title: "INTEL-49: Plan for the Tail, Not the Average"
description: "Averages are a poor guide to cyber loss planning. For a company under $100 million in revenue, the median cyber incident costs about $357,000, but the 95th-percentile loss is $9.1 million, about 25 times higher, and the gap holds at every size. The Cyentia Institute's loss data by revenue band gives every organization a defensible starting point for its worst case, its insurance limits and its reserves."
date: 2026-11-04
type: "intel"
intel_type: "TREND"
tags: ["Cyber Risk Quantification", "Cyber Loss Data", "Cyentia Institute", "IRIS", "Cyber Insurance", "Risk Assessment", "CFO", "Risk Management"]
---

## The INTEL

**Averages are a poor guide to cyber loss planning. For a company under $100 million in revenue, the median cyber incident costs about $357,000, but the 95th-percentile loss, the one-in-twenty bad outcome, is $9.1 million: about 25 times higher. The gap holds at every size, according to the Cyentia Institute's loss data.**

Cyentia's IRIS Xtreme 2026 breaks loss planning down by revenue band, drawing on its IRIS 2025 study of all publicly reported incidents. The median and the 95th percentile for each band:

- **Under $100M:** $357,000 median, $9.1 million at the 95th percentile
- **$100M to $1B:** $466,700 median, $12.3 million
- **$1B to $10B:** $1.8 million median, $61.8 million
- **Over $10B:** $2.2 million median, $266.2 million

Losses don't scale with company size. A $9 million loss is nearly 20% of revenue for a $50 million company; $266 million is about 0.5% for a $50 billion one.

The common shortcut doesn't help either. Many loss estimates multiply records stolen by a cost per record. Across the costliest 5% of cyber events in the study, the number of records stolen told you almost nothing about the loss: Cyentia's regression line is nearly flat, predicting the same cost for a thousand records as for a billion.

---

## Why It Matters

Most organizations experience cyber incidents as a steady run of manageable costs, and plan that way. But Cyentia's simulations show that for most organizations, it takes about seven years of those smaller incidents to add up to a single extreme one. A plan built on the typical case leaves the expensive tail unfunded.

The figures also err on the low side. They count publicly reported, mostly direct losses, so Cyentia treats them as a conservative lower bound. And they keep rising: the 95th-percentile loss across all incidents has grown 19 times since 2008, adjusted for inflation.

The useful part is that this gives every organization a defensible starting point. Cyentia's own test: if your worst-case scenario is a few million dollars and you're a multi-billion-dollar company, you're probably off by an order of magnitude. If every scenario on your risk register is a billion-dollar catastrophe, you're probably overstating it. Either way, insurance limits, cash reserves and security investment end up sized to the wrong number.

---

## What To Do — One Key Action

**Check your worst-case cyber loss estimate against the 95th-percentile figure for your revenue band, and set an upper and lower bound you can defend with evidence. Then use that range for the decisions that depend on it: insurance limits, cash reserves, and how much goes to resilience as well as prevention.**

If the estimate today is a single number from a vendor report or the last headline, the revenue-band range is a better place to start.

---

## MITRE ATT&CK

- **Not technique-specific.** This INTEL is about loss sizing. For scenarios at the tail, E96 covers the technique most tied to extreme losses: T1078 Valid Accounts, present in events accounting for 91% of extreme losses.

---

## Learn More

- [IRIS Xtreme 2026 (Cyentia Institute)](https://www.cyentia.com/iris) — Primary source; Table 1 loss statistics by revenue band (p5), cost per record (Figure 11, pp16–17)
- [FIR Risk Tuesday E96 — The Costliest 5%: What Confirmed Losses Teach Us About Planning](/tuesday/e96-the-costliest-five-percent/) — Full analysis
- [FIR Risk Tuesday E59 — 150,000 Incidents Prove Time Is the Variable That Matters](/tuesday/e59-iris-2025-risk-insights/) — The all-incident study behind the revenue bands

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
