---
title: Agentic systems
description: Build autonomous agentic systems.
sidebar:
  order: 3
---

## Goals

Build autonomous agentic systems:

- Build and control autonomous agents via Agents.
- Coordinate agents on complex tasks via Orchestration.

## Focus areas

### Agents

- Know the agent definition and execution models.
- Use custom tools, skills, and MCP servers to extend agent capabilities.
- Use deterministic hooks and human approvals to bound agent autonomy.
- Use sandboxes and access controls for agents and tools.

### Orchestration

- Use coordination, delegation, and escalation to route work among agents.
- Use budgets and limits to bound agent execution.
- Use proxies to invoke remote agents.
- Use shared context to synchronize state across agents.

## Reflection questions

1. What makes an agent stop execution?
   - Task completion, turn limits.
2. How does an agent evaluate that a task is completed?
   - Embedded rubrics, LLM-as-judge.
3. Why does a long-running agent degrade?
   - Context accumulation, attention dilution.
4. How can an agent ground its reasoning?
   - Web search, attached resources.
5. Why is limiting an agent's tools a good strategy?
   - Selection accuracy, blast radius.
6. What sandboxes does an agent system rely on?
   - Agent runtime, tool execution.
7. What do you control at each sandbox boundary?
   - Network policies, filesystem access.
8. Why may a subagent do a task better than its parent?
   - Focused instructions, context isolation.
9. How can you enforce guarantees on agent actions?
   - Tool hooks, human approvals.
10. How can you improve agent work over time?
    - Trajectory evaluation, learned memory.

## Practical exercises

1. Build an agent with built-in tools and custom capabilities.
2. Coordinate two agents to complete a task together.
