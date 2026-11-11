---
title: Agentic systems
description: Build and run agentic systems.
sidebar:
  order: 3
---

Build and run agentic systems.

## Topics

### Agents

Build and control autonomous agents.

- Agent loop and stop conditions to drive tasks to completion.
- Built-in tools and custom capabilities to let agents act.
- Compaction and memory to sustain long-running work.
- Hooks and human approvals to bound agent autonomy.

### Orchestration

Compose and coordinate agents on complex tasks.

- Subagents and handoffs to delegate work with focused context.
- Remote agents to collaborate across systems and vendors.
- Shared state to coordinate work across agents.
- Budgets and limits to cap cost and runtime.

### Infrastructure

Run and monitor agents in production.

- Sandboxes to isolate agent execution from hosts and networks.
- Durable execution to resume long-running agents after failures.
- Tracing to record agent trajectories for monitoring and audit.

## Exercises

- Build an agent with custom capabilities and run it in a sandbox.
- Coordinate two agents on a task and trace their trajectories.

## Resources

Agent SDKs:

- [Anthropic Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)
- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/)
- [Google ADK](https://adk.dev/)

Infrastructure tools:

- [OpenSandbox](https://open-sandbox.ai/)
- [Temporal](https://temporal.io/)
- [Phoenix](https://arize.com/docs/phoenix)

Open standards:

- [Agent2Agent](https://a2a-protocol.org/latest/)

Security frameworks:

- [OWASP Top 10 for Agentic Applications](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
