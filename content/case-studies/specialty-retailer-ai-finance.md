---
title: "It Started with the Accounting System. It Ended with Five SaaS Subscriptions Gone."
description: "A multichannel retailer replaced five SaaS tools, including NetSuite, with one AI-native platform it owns: real-time books, connected operations, real controls."
seoTitle: "Retailer Replaces NetSuite and 4 More SaaS Tools with AI"
date: 2026-10-10
---

<div class="card p-4 mb-4">
  <h2 id="at-a-glance" class="h5 mb-3">At a Glance</h2>
  <ul class="mb-0">
    <li><strong>Client:</strong> a specialty online retailer selling through its own web store, Amazon (including Fulfillment by Amazon), eBay, phone orders, and a retail store.</li>
    <li><strong>Before:</strong> five separate SaaS subscriptions — <strong>NetSuite</strong> (accounting), <strong>Rithum</strong> (marketplace channel management), <strong>NetStock</strong> (inventory planning), <strong>OZ WMS</strong> (warehouse management), and a SaaS point-of-sale system — on fixed contracts with rising costs.</li>
    <li><strong>After:</strong> one AI-native data foundation and custom business platform on Microsoft Fabric, built with Claude Code, running the business end to end.</li>
    <li><strong>Today:</strong> automated posting, a one-day month-end close, and leadership seeing sales, inventory, and cash as they happen.</li>
  </ul>
</div>

## Five Subscriptions, One Business

The company did what growing retailers do: every time it hit a new problem, it bought a subscription. An ERP for accounting. A channel manager to list products and pull orders from the marketplaces. An inventory-planning tool. A warehouse management system. A point-of-sale system for the store.

Each made sense when it was bought. Together, they became the problem. Five vendors, five fixed annual contracts, five price increases. Data copied between systems that didn't agree with each other. Month-end numbers that arrived weeks late, so leadership was always making today's decisions about purchasing, pricing, and cash with last month's information.

The CEO wanted current numbers, fewer subscriptions, and control over the company's own data. The question was whether to buy a sixth system to tie the other five together — or to build something the company would actually own.

## Build It Once, Around the Business

We chose to build: a single data foundation, and a custom business platform on top of it, designed around how this business actually works. One experienced advisor did the building with Claude Code, in close partnership with the company's leadership and its warehouse-systems developer.

The key decision was the order of the work. Nothing went live until it had been proven against the old systems.

### 1. The data foundation (two months)

First, a proper data foundation on Microsoft Fabric: a warehouse and lakehouse holding the company's orders, inventory, purchasing, and financial history in one place. Everything after this was built on it.

### 2. Migrate, then prove it

All of the NetSuite history moved into the new platform first. Then the new system ran **in parallel with NetSuite through three monthly closes**, and the first four months of the year were tied out between the two, account by account, to prove the new numbers were complete and accurate before anyone relied on them.

### 3. Build the platform

While the parallel runs were happening, the core of the business platform came together: the general ledger, warehouse management, shipping, and the integrations with every sales channel and bank. In place of the old warehouse software, a customized open-source warehouse management system. In place of the channel manager, direct connections to the web store, Amazon, and eBay. In place of the point-of-sale subscription, a custom point-of-sale system for the store.

### 4. Go live — May 12

The platform went live in May, after the numbers had been proven.

### 5. Make it the team's own (four months)

Going live was the start, not the finish. The first two months went to fine-tuning, building out the user interface and features, and continuing to validate completeness and accuracy. The next two went to the people who use it every day. The team — leadership included — was used to the way the old systems worked and wanted those workflows preserved. So we kept what worked and made it better: more capabilities, cleaner flows, and a better interface than the systems it replaced.

### 6. Automate

Only in September, with the platform stable and trusted, did we turn to automation: automatic posting to the books as transactions happen, a faster month-end close, and further improvements to the marketplace integrations.

## What the Business Runs On Now

- **Real-time books.** Sales from every channel, purchase receipts, returns, Amazon fulfillment activity, store sales, and phone orders with customer deposits post to a double-entry general ledger as they happen.
- **One connected operation.** Orders, fees, payouts, inventory movements, and bank activity flow in automatically; inventory levels flow back out to the marketplaces.
- **Inventory valued every day,** at weighted average cost, so margins stay current.
- **AI-driven inventory planning,** using the company's own sales history in place of a separate planning subscription.
- **AI-assisted payables.** An AI assistant reads vendor invoices, enters them, and prepares the three-way match against the purchase order and receipt. It never approves or pays a bill — people do.
- **A daily outlook for the CEO,** published automatically every morning: month-to-date sales, margin, and a forecast for the month.

## How It Stays Controlled

Speed only matters if the numbers can be trusted:

- **Proven before it was trusted.** Three parallel closes and a four-month tie-out against NetSuite before go-live.
- **Human approval for every release,** each with a named rollback.
- **Automation switched on deliberately,** one area at a time, after dry runs came back clean and balanced.
- **Unknowns stop at a person.** Unrecognized bank activity and exceptions go to review queues instead of being forced into an account.
- **A completeness check before every close,** confirming every source transaction has posted.
- **Reconciled at the quarter.** At the third-quarter close, every balance-sheet account was reconciled or tied to a named open item.
- **Nearly a thousand automated tests** check the platform's logic.

## Results

- **Five SaaS subscriptions retired.** NetSuite, Rithum, NetStock, OZ WMS, and the point-of-sale subscription — replaced by one platform the company owns.
- **A one-day month-end close.** An early close on the new platform took about 28 hours of reconstruction; that experience became a written checklist, automated gates, and automatic posting.
- **Numbers leadership can use today,** not weeks later.
- **Ownership.** The company owns its data and its platform. The data sits in a dedicated environment FIR manages on the company's behalf, with a planned move to the company's own Microsoft tenant.
- **Speed of change.** New needs — a customer-deposit flow for phone orders, real-time store posting — ship in days. The platform has shipped more than 150 updates since going live.

## What's Next

With every process running on one data foundation, the company is positioned for what comes next: AI agents that take on more of the day-to-day operating work — reordering, exception handling, reconciliations, and daily performance reviews — so leadership spends its time on decisions, not data.

## Lessons for CEOs

1. **Add up your subscriptions.** Five tools that each made sense can cost more — in fees and in disconnected data — than one platform built around your business.
2. **Prove it before you trust it.** Run the new system alongside the old one until the numbers tie.
3. **Start where the data is.** Finance is rule-based and measurable, which makes it the best first place to put AI to work.
4. **Keep humans on the decisions that matter.** AI does the reading, entering, and matching. People approve, pay, and sign off.
5. **Own your data.** Your data foundation should belong to you, not to a vendor — even if someone else hosts it for now.

<div class="hero-section text-center py-4 mt-4">
  <h2 id="what-could-ai-do-for-your-company" class="mb-3">What Could AI Do for Your Company?</h2>
  <p class="lead mb-4">Start with a conversation about where AI and data would pay off first in your business.</p>
  <a href="/contact/" class="btn btn-primary btn-lg px-5">Talk to Bruce</a>
</div>
