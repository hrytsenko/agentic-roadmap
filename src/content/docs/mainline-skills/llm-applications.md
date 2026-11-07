---
title: LLM applications
description: Build LLM-powered applications with platform APIs.
sidebar:
  order: 1
---

## Goals

Build LLM-powered applications with platform APIs:

- Engineer prompts and context to guide model behavior via Prompting.
- Send prompts and handle model responses in code via LLM APIs.

## Focus areas

### Prompting

- Use system instructions to steer model behavior.
- Use templates and delimiters to separate dynamic content.
- Use examples to clarify expected behavior and edge cases.
- Use output formats to specify expected response structure.

### LLM APIs

- Use messages and conversation state to manage model interactions.
- Use structured outputs to enable machine-to-machine integrations.
- Use tool calling to define, invoke, and handle external actions.
- Use error handling to manage refusals and malformed responses.

## Reflection questions

1. What should you consider when choosing a model for a task?
   - Task type, quality vs. cost and latency.
2. How can you control model request cost?
   - Model selection, prompt caching.
3. What are common ways to reduce context size?
   - Context compaction, history truncation.
4. How can you protect prompts that include untrusted content?
   - Input isolation, output validation.
5. How can you improve model behavior on multi-step tasks?
   - System instructions, reasoning effort.
6. How can you ground a model's answer?
   - File retrieval, web search.
7. How can you help a model discover and select tools?
   - Tool definitions, tool search.
8. How can you extend a model with new capabilities?
   - Custom tools, MCP servers.
9. Why might a model not complete a response?
   - Output limits, safety refusals.

## Practical exercises

1. Build an LLM-powered application that uses custom tools.
