---
title: Resources
description: Vendor resources, open standards, security frameworks, hands-on books, and baseline tools.
---

## Vendor resources

Model APIs for integrating models into applications:

- [Anthropic Platform Docs](https://platform.claude.com/docs/en/build-with-claude/overview) — Messages API for Claude models.
- [OpenAI Platform Docs](https://developers.openai.com/api/docs) — Responses API for GPT models.
- [Google Platform Docs](https://aistudio.google.com/docs) — Interactions API for Gemini models.

Agent SDKs for building custom agents:

- [Anthropic Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview) — batteries-included library to run agents.
- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) — lightweight library to compose agents.
- [Google ADK](https://adk.dev/get-started/) — multi-language framework for multi-agent systems.

Essential essays about agents from Anthropic's [Engineering](https://www.anthropic.com/engineering) blog:

- [Effective context engineering for AI agents](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) — managing agent context.
- [Writing effective tools for AI agents](https://www.anthropic.com/research/writing-tools-for-agents) — designing agent actions.
- [Equipping agents for the real world with Agent Skills](https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills) — packaging agent expertise.
- [Demystifying evals for AI agents](https://www.anthropic.com/research/demystifying-evals-for-ai-agents) — assessing agent behavior.

## Open standards

Vendor-neutral formats and protocols:

- [AGENTS.md](https://agents.md/) ([Radar](https://www.thoughtworks.com/radar/techniques/agents-md)) — README with operational rules for coding agents.
- [Agent Skills](https://agentskills.io/) ([Radar](https://www.thoughtworks.com/radar/techniques/agent-skills)) — format for packaging reusable workflows.
- [MCP](https://modelcontextprotocol.io/) ([Radar](https://www.thoughtworks.com/radar/platforms/model-context-protocol-mcp)) — protocol for connecting external tools and data.
- [Agent Plugins](https://agent-plugin.org/) ([Radar](https://www.thoughtworks.com/radar/platforms/agent-plugins)) — standard for packaging skills and MCP servers.
- [A2A](https://a2a-protocol.org/latest/) ([Radar](https://www.thoughtworks.com/radar/platforms/agent-to-agent-a2a-protocol)) — protocol for connecting remote agents.

Most of these standards are hosted by the [Agentic AI Foundation](https://aaif.io/projects), alongside other open agent projects.

## Security frameworks

Community-maintained references for threat modeling:

- [OWASP Top 10 for Agentic Applications](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) — prioritizing agent-specific risks.
- [MITRE ATLAS](https://atlas.mitre.org/) — cataloging attacks on AI systems.

## Hands-on books

Starter guides for the coding agent you use:

- [Claude Code: Up and Running](https://learning.oreilly.com/library/view/claude-code-up/0642572388782/) — working with Anthropic's coding agent.
- [Agentic Coding with OpenAI Codex CLI](https://learning.oreilly.com/library/view/agentic-coding-with/9781808348891/) — working with OpenAI's coding agent.

Practice guides for engineering with agents:

- [AI-Native Software Engineering](https://learning.oreilly.com/library/view/ai-native-software-engineering/0642572352530/) — moving toward an agent-native SDLC with specs in hand.
- [AI Agents with MCP](https://learning.oreilly.com/library/view/ai-agents-with/9798341639546/) — going deeper on building MCP servers and using MCP clients.

## Baseline tools

A minimal setup for building and testing with agents:

- [VS Code](https://code.visualstudio.com/) — code editor with agent integrations.
- [Claude Code](https://claude.com/product/claude-code) — Anthropic's coding agent.
- [OpenAI Codex](https://openai.com/codex/) — OpenAI's coding agent.
- [Google Antigravity](https://antigravity.google/product/antigravity-cli) — Google's coding agent.
- [Promptfoo](https://www.promptfoo.dev/) — evaluation and red-teaming tool.
- [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector) — testing tool for MCP servers.
