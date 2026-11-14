---
title: "Use FIR in Your AI"
seoTitle: "FIR Risk MCP Connector for Claude, ChatGPT and Copilot"
description: "Add FIR Risk Advisory's verified risk intelligence library to Claude, ChatGPT or Copilot in two minutes, free. Then put the FIR Agent to work on your own risk assessment."
meta:
  description: "Free MCP connector: add FIR's verified risk intelligence to Claude, ChatGPT or Copilot. Every answer cites its source. Then try the FIR Agent on real work."
---

<div class="hero-section text-center py-4 mb-4">
  <h2 id="hero-headline" class="hero-title display-5 fw-bold mb-3">Use FIR in Your AI</h2>
  <p class="lead">Verified risk intelligence, inside the assistant you already use. Free, no sign-up.</p>
</div>

Your AI assistant can answer risk questions. The problem is where its answers come from. The FIR Risk connector gives Claude, ChatGPT or Copilot direct access to the FIR library: about 100 FIR Risk Tuesday editions and INTEL briefs, each checked against its primary source. Ask a question, and the answer cites the FIR piece it came from, with a link.

## What you can ask

- "What does the evidence say about third-party risk for a mid-sized company?"
- "Summarize the 2026 Verizon DBIR for my CFO, with the three actions that matter."
- "What changed in ransomware between 2025 and 2026?"
- "What board questions should we be asking about AI agents?"
- "What's new in FIR Risk intelligence in the last 30 days?"

## Connect in two minutes

**Connector URL:** `https://mcp.firrisk.ai/mcp`

No account, no sign-in, no cost. The connector is read-only: it searches and reads FIR's published library and nothing else.

### Claude (web, desktop or mobile)

1. Open **Settings → Connectors** and choose **Add custom connector**.
2. Name it **FIR Risk** and paste the connector URL.
3. Leave authentication empty and click **Add**.

On Claude Team and Enterprise plans, an organization owner adds the connector first; members then switch it on in their own settings.

### Claude Code

Run one command in your terminal:

```bash
claude mcp add --transport http fir-risk https://mcp.firrisk.ai/mcp
```

Then ask Claude Code a risk question, or type `/mcp` to confirm FIR Risk is connected.

### ChatGPT

1. Custom connectors need a paid ChatGPT plan with **Developer mode** turned on (under **Settings → Apps & Connectors → Advanced**).
2. In **Settings → Apps & Connectors**, choose **Create**.
3. Name it **FIR Risk**, paste the connector URL, set authentication to **None** and save.

### Microsoft Copilot

The free Copilot app can't add connectors. In **Copilot Studio**, open your agent, go to **Tools → Add a tool → Model Context Protocol**, paste the connector URL with no authentication, and publish the agent to Microsoft 365 Copilot or Teams.

*Menu names in these apps change often. If a step looks different, search the app's help for "custom connector" or "MCP".*

## Want more than the library? Work with the FIR Agent.

The connector gives your AI FIR's published research. The **FIR Agent** goes further: it works on your material. It draws on the full FIR knowledge base, including thousands of threat patterns, frameworks and research documents, and can:

- **Review your risk assessment** against the evidence and tell you what's missing or out of date
- **Analyze a company's SEC filings** and risk disclosures
- **Prepare a board brief** on a risk topic, with every figure cited
- **Help with the work in front of you**, from a vendor review to an incident plan

The FIR Agent is in early access. Trials are set up one by one, so each one starts with a real task.

<div class="text-center py-4">
  <a href="/contact/?interest=agent-trial" class="btn btn-primary btn-lg px-5">Request an FIR Agent trial</a>
</div>

## Good to know

- **Verified content only.** The connector serves what's published on firrisk.ai. See [how we verify](/how-we-verify/) every figure.
- **Nothing to install.** It's a standard remote MCP server, the open protocol AI assistants use to connect to outside tools.
- **General intelligence, not advice.** Answers draw on published research and are not legal, compliance or security advice for a specific organization.

{{< section-nav prev="/platform/" prev-label="Platform" next="/contact/" next-label="Contact" >}}
