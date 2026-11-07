---
title: Agent capabilities
description: Develop reusable capabilities for applications and agents.
sidebar:
  order: 2
---

## Goals

Develop reusable capabilities for applications and agents:

- Develop reusable workflows via Skills.
- Expose external tools and data via MCP Servers.

## Focus areas

### Skills

- Know how to structure skills for progressive disclosure.
- Use common workflow and agentic patterns to implement skills.
- Use resources, templates, and scripts to compose skills.
- Use test cases and graders to evaluate skills.

### MCP Servers

- Use local servers to access an agent's environment.
- Use remote servers to access business capabilities.
- Use tools and resources to expose actions and data via servers.
- Know machine-to-machine and user-delegated authorization.

## Reflection questions

1. How does a model decide which agent skill or MCP tool to use?
   - Skill descriptions, tool descriptions.
2. What are the benefits of using agent skills?
   - Progressive disclosure, domain knowledge.
3. What agentic patterns can agent skills encode?
   - ReAct, Plan-and-Execute.
4. What are the benefits of using automation scripts in agent skills?
   - Deterministic execution, context efficiency.
5. How can you evaluate whether an agent skill performs as intended?
   - Deterministic graders, rubric-based inferential graders.
6. What concerns arise when mapping business capabilities to MCP tools?
   - Tool granularity, selection accuracy.
7. How can you enforce valid arguments for MCP tool calls?
   - Input schemas, server-side validation.
8. What should you guard against when designing agent skills and MCP servers?
   - Context rot, prompt injection.
9. What should you guard against when using external agent skills and MCP servers?
   - Toxic flows, tool poisoning.

## Practical exercises

1. Build an agent skill.
2. Build an MCP server, run it, and connect it to an agent.
