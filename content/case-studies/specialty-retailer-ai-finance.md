---
title: "How a Specialty Retailer Replaced Five Software Subscriptions with One AI-Native Platform"
description: "A multichannel retailer replaced five SaaS subscriptions, including NetSuite, with one AI-native platform it owns: real-time books, connected operations, real controls."
seoTitle: "Retailer Replaces NetSuite and 4 More SaaS Tools with AI"
date: 2026-10-10
---

<div class="card p-4 mb-4">
  <h2 id="at-a-glance" class="h5 mb-3">At a Glance</h2>
  <ul class="mb-0">
    <li><strong>Client:</strong> a specialty online retailer selling through its own web store, Amazon (including Fulfillment by Amazon), eBay, phone orders, and a retail store.</li>
    <li><strong>Challenge:</strong> five separate annual software subscriptions that didn't talk to each other, and month-end numbers that arrived weeks late.</li>
    <li><strong>What we built:</strong> one AI-native platform on Microsoft Fabric, built with Claude Code, that replaced <strong>NetSuite</strong> (accounting), <strong>Rithum</strong> (marketplace channel management), <strong>NetStock</strong> (inventory planning), <strong>OZ WMS</strong> (warehouse management), and its SaaS point-of-sale system — integrated across every process, from the warehouse floor to the general ledger.</li>
    <li><strong>Result:</strong> leadership sees sales, inventory, and cash as they happen, and the company owns its software and its data.</li>
  </ul>
</div>

## The Business Problem

The company had outgrown the way it ran its operations. Sales came in through five channels, each with its own fees, timing, and quirks. The business paid every year for five separate software subscriptions — accounting, marketplace channel management, inventory planning, warehouse management, and point of sale — that didn't share data cleanly and couldn't easily be changed. Month-end was a long manual exercise, so leadership was always looking at last month — and making today's decisions on purchasing, pricing, and cash without current information.

The CEO wanted three things: **current numbers, fewer software subscriptions, and control over the company's own data.**

## What We Built

Rather than switching to another packaged system, we built the company its own platform, designed around how the business actually works. One advisor built it with Claude Code, in close partnership with the company's leadership and its warehouse-systems developer.

- **The whole operation, connected.** Automated accounting only works if every system feeds it. In place of the old warehouse software, we integrated a customized open-source warehouse management system (inventory by location, receiving, picking, and shipping). In place of the channel-management subscription, we connected every sales channel directly — the web store, Amazon, eBay, phone orders, and the retail store, where a custom point-of-sale system replaced the old subscription — and the company's bank and card accounts. Orders, fees, payouts, inventory movements, and bank activity all flow in automatically, and inventory levels flow back out to the marketplaces.

- **A real-time general ledger.** Sales from every channel, purchase-order receipts, returns, Amazon fulfillment activity, retail-store sales, and phone orders with customer deposits post to a proper double-entry ledger automatically, as they happen — not at month-end.
- **Inventory valued every day.** Each morning the platform revalues inventory at weighted average cost from the prior day's receipts, so cost of goods sold and margins stay current.
- **AI-driven inventory planning.** In place of the inventory-planning subscription, the platform classifies products by sales value and demand predictability and supports purchasing decisions from the company's own sales history.
- **Bank activity flowing in.** Bank transactions are pulled automatically and matched by rule. Anything the rules don't recognize goes to a review queue for a person — never to a guess.
- **AI-assisted payables.** An AI assistant reads vendor invoices, enters headers and line detail, and prepares the three-way match against the purchase order and receipt. **It never approves or pays a bill.** People do.
- **A daily outlook for the CEO.** Every morning a refreshed month-to-date outlook is published automatically, so leadership starts the day with current sales, margin, and a forecast for the month.

## How It Stays Controlled

Moving fast with AI is only valuable if the numbers can be trusted. The platform was built the way an auditor would want it:

- **Nothing goes live without human approval.** Every production release is approved explicitly and ships with a named rollback.
- **Automation is switched on deliberately.** Automatic posting for each area was enabled only after dry runs showed clean, balanced results.
- **Unknowns stop at a person.** Unrecognized bank activity and exceptions go to review queues instead of being forced into an account.
- **A completeness check before every close.** Before reconciliations begin, a standard check confirms that every source transaction has posted to the ledger.
- **Reconciled at the quarter.** At the third-quarter close, every balance-sheet account was reconciled or tied to a named open item, and the inventory roll-forward tied.
- **Tested.** Nearly a thousand automated tests check the platform's logic.

## Results

- **Real-time books.** Sales, inventory movements, and cash post daily rather than waiting for month-end.
- **A faster, repeatable close.** An early close took about 28 hours of reconstruction. That experience became a written close checklist and automated gates, so each month is repeatable instead of rediscovered.
- **Five subscriptions retired.** NetSuite, Rithum, NetStock, OZ WMS, and the SaaS point-of-sale system were replaced by one platform the company owns.
- **Ownership.** The company owns its data and its platform, rather than renting a system it can't change. The data sits in a dedicated environment FIR manages on the company's behalf, with a planned move to the company's own Microsoft tenant.
- **Live in about seven weeks.** Work on the accounting platform began in late March, and it went live in May.
- **Speed of change.** When the business needed something new — a customer-deposit flow for phone orders, real-time retail-store posting — it shipped in days. The platform has shipped more than 150 updates since going live.

## What It Took

About seven weeks from start to go-live, then continuous improvement: one experienced advisor using Claude Code, in close collaboration with the company's leadership. Not a large implementation team, and not a multi-year ERP project.

## Lessons for CEOs

1. **Start where the data is.** Finance is rule-based and measurable, which makes it the best first place to put AI to work.
2. **Keep humans on the decisions that matter.** AI does the reading, entering, and matching. People approve, pay, and sign off.
3. **Make failures loud.** The most expensive problems were silent ones — a process that "ran" but wrote nothing. Build checks that shout.
4. **Own your data.** Your data foundation should belong to you, not to a vendor — even if someone else hosts it for now.

<div class="hero-section text-center py-4 mt-4">
  <h2 id="what-could-ai-do-for-your-company" class="mb-3">What Could AI Do for Your Company?</h2>
  <p class="lead mb-4">Start with a conversation about where AI and data would pay off first in your business.</p>
  <a href="/contact/" class="btn btn-primary btn-lg px-5">Talk to Bruce</a>
</div>
