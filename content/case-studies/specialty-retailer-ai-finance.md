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
    <li><strong>Before:</strong> five SaaS subscriptions on fixed contracts with rising costs: <strong>NetSuite</strong> for accounting, <strong>Rithum</strong> for marketplace channel management, <strong>NetStock</strong> for inventory planning, <strong>OZ WMS</strong> for the warehouse, and a SaaS point-of-sale system for the store.</li>
    <li><strong>After:</strong> one data foundation and custom business platform on Microsoft Fabric, built with Claude Code, that runs the business end to end.</li>
    <li><strong>Today:</strong> automatic posting to the books, a one-day month-end close, and leadership seeing sales, inventory, and cash as they happen.</li>
  </ul>
</div>

## Five Subscriptions, One Business

Five logins. Five renewal notices a year. Five sets of numbers that never quite matched.

The company got there the way most growing retailers do. Each time it hit a new problem, it bought a subscription: an ERP for accounting, a channel manager to list products and pull in marketplace orders, an inventory-planning tool, a warehouse management system, and a point-of-sale system for the store. Every one of those purchases made sense at the time.

Together, they became the problem. Each contract renewed at a higher price. Data was copied from one system to the next, and the systems rarely agreed. Month-end numbers showed up weeks after the month ended, so decisions about purchasing, pricing, and cash were always made on last month's information.

Underneath all of it, **the company didn't really control its own data.** Each vendor held a piece. Working with it directly meant exports and workarounds, and connecting it across five systems wasn't realistic. When the company asked for more, the answer was usually another paid tier, often whatever "AI-enabled" feature that vendor was selling that year.

The CEO wanted current numbers, fewer subscriptions, and the company's data back in its own hands. The choice came down to buying a sixth system to stitch the other five together, or building one platform the company would own.

## We Built It Once, Around the Business

We built it. One data foundation the company owns, and a business platform on top of it, designed around the way this company actually operates.

Two people did the building, with the CEO setting direction. I designed and built the data foundation, the database, the infrastructure, and the accounting and integration platform, using Claude Code. The company's own developer took on the other half of the job, the warehouse, and made it his.

We were strict about the order of the work. Nothing went live until it had been proven against the old systems.

### 1. The data foundation (two months)

First came the foundation: a warehouse and lakehouse on Microsoft Fabric holding the company's orders, inventory, purchasing, and financial history in one place. Everything else was built on top of it.

### 2. Migrate, then prove it

We moved all of the NetSuite history into the new platform. Then we ran the new system **side by side with NetSuite for three monthly closes** and tied out the first four months of the year between the two, account by account. Nobody relied on the new numbers until they matched.

### 3. Build the platform

During those parallel months, the core platform came together: the general ledger, warehouse management, shipping, and connections to every sales channel and bank. The old warehouse software was replaced by a custom warehouse management system built on open-source software, designed and coded by the company's developer. The channel manager was replaced by direct connections to the web store, Amazon, and eBay. The point-of-sale subscription was replaced by a custom point-of-sale system for the store.

### 4. Go live in mid-May

With the numbers proven, the platform went live in mid-May.

### 5. Make it the team's own (four months)

The first two months after go-live went to fine-tuning, building out screens and features, and checking, again, that every transaction was complete and accurate.

The next two months were for the people who use the system every day. The team, leadership included, was used to how the old systems worked and wanted those workflows kept. So we kept what worked and improved the rest. Today the team has more capabilities, cleaner flows, and better screens than the five systems gave them.

### 6. Automate

We waited until September, when the platform was stable and the team trusted it, to automate. Transactions now post to the books on their own, the month-end close is down to one day, and the marketplace connections keep getting better.

## The Developer Who Stepped Up

Every project like this needs someone inside the company who decides to own it. Here, that was the company's developer.

While I built the data foundation, the infrastructure, and the accounting platform, he took on the warehouse. He chose open-source software as the starting point, led the design, and wrote the code for a warehouse management system that fits how this company receives, stores, picks, and ships. For years that work had belonged to an outside vendor's product. I helped with infrastructure, database design, and an extra pair of hands when he wanted one, but the warehouse system was his.

Then he kept going. As the rest of the platform came together, he learned how every piece connects, from the data foundation to the integrations to the accounting, and he became the person the whole team turns to.

Once the new system was live, tested, and working, the company promoted him to **Director of Operations**. He runs the entire platform day to day under the CEO's direction, and I'm on call when he needs me. Of everything this project produced, I'm proudest of that.

## What the Business Runs On Now

- **Real-time books.** Sales from every channel, purchase receipts, returns, Amazon fulfillment activity, store sales, and phone orders with customer deposits post to a double-entry general ledger as they happen.
- **One connected operation.** Orders, fees, payouts, inventory movements, and bank activity flow in automatically, and inventory levels flow back out to the marketplaces.
- **Inventory valued every morning** at weighted average cost, so margins stay current.
- **Inventory planning on the company's own sales history,** with AI support, in place of a separate planning subscription.
- **AI-assisted payables.** An AI assistant reads vendor invoices, enters them, and lines each one up against its purchase order and receipt. It never approves or pays a bill. People do.
- **A morning outlook for the CEO,** published automatically every day with month-to-date sales, margin, and a forecast for the month.

## How It Stays Controlled

Fast is only useful if the numbers can be trusted.

- **Proven first.** Three parallel closes and a four-month tie-out against NetSuite before go-live.
- **A person approves every release,** and every release has a rollback ready.
- **Automation turned on one area at a time,** only after dry runs came back clean and in balance.
- **Exceptions go to a person.** Bank activity the rules don't recognize lands in a review queue. Nothing gets forced into an account.
- **A completeness check before every close** confirms that every source transaction has posted.
- **Reconciled at the quarter.** At the third-quarter close, every balance-sheet account was reconciled or tied to a named open item.
- **Close to a thousand automated tests** check the platform's logic.

## Results

- **Five SaaS subscriptions retired:** NetSuite, Rithum, NetStock, OZ WMS, and the point-of-sale system, replaced by one platform the company owns.
- **A one-day month-end close.** One of the early closes on the new platform took about 28 hours of digging. That close became a written checklist, automated checks, and automatic posting.
- **Current numbers.** Leadership sees today's sales, inventory, and cash, not last month's.
- **A promotion, not a layoff.** The developer who built the warehouse system is now Director of Operations and runs the whole platform. What the company knows about its own systems stays inside the company.
- **The company owns its data,** all of it, connected across every process, along with the platform that runs on it. Today we host it in a dedicated environment on the company's behalf, with a move to the company's own Microsoft tenant planned.
- **Changes in days.** When the business needed something new, like a customer-deposit flow for phone orders or real-time posting from the store, it shipped in days. The platform has had more than 150 updates since go-live.

## AI as a Daily Partner

The change people notice most is in how the team works.

Claude is part of the business now. It sits alongside the critical workflows, reading vendor invoices, preparing the morning outlook, and supporting the close. The team uses it every day to work through ideas, clean up and manage data, dig into what's happening in the business, and look for ways to run it better and more profitably.

That only works because of the data foundation. Claude is connected to the company's own data, so its answers come from the company's actual numbers. **Owning the data is what makes the AI useful.**

A year ago, AI was something the team read about. Now it's a tool they rely on and a partner they work with, one that helps them get more done and be more thorough.

## What's Next

Next come AI agents that work with each part of the business:

- **Customers:** a shopping assistant that helps people find the right products and get answers any time.
- **The warehouse:** help with receiving, stock exceptions, and replenishment.
- **Customer service:** order status, returns, and first drafts of replies, with a person reviewing.
- **Purchasing:** reorder suggestions based on the company's sales history and vendor lead times.
- **Marketing and the marketplaces:** listings, pricing, and performance across every channel.
- **Accounting:** more of the routine close and reconciliation work, with people approving the steps that matter.

All of them will run on the same foundation: one set of data the company owns, and AI the team already trusts.

## Lessons for CEOs

1. **Own your data. Nothing else on this list matters as much.** When a software vendor holds your data, you can't work with it directly, you can't connect it across systems, and you pay their price to get at it. A data foundation you own is what makes the rest possible, AI included, even if someone else hosts it for now.
2. **Add up your subscriptions.** Five tools that each made sense can cost more, in fees and in disconnected data, than one platform built around your business.
3. **Prove it before you trust it.** Run the new system alongside the old one until the numbers tie.
4. **Start where the data is.** Finance runs on rules and produces measurable results, which makes it a good first place to put AI to work.
5. **Keep people on the decisions that matter, and invest in them.** Let AI do the reading, entering, and matching. Let people approve, pay, and sign off. The person who learns the new platform becomes more valuable to you, not less.

<div class="hero-section text-center py-4 mt-4">
  <h2 id="what-could-ai-do-for-your-company" class="mb-3">What Could AI Do for Your Company?</h2>
  <p class="lead mb-4">Let's talk about where AI and your data would pay off first in your business.</p>
  <a href="/contact/" class="btn btn-primary btn-lg px-5">Talk to Bruce</a>
</div>
