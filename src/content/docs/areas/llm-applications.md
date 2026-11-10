---
title: LLM applications
description: Build and run LLM-powered applications.
sidebar:
  order: 1
---

Build and run LLM-powered applications.

## Topics

### Context engineering

Assemble the context for model invocation.

- System instructions and examples to steer model behavior.
- Templates to assemble static and dynamic content.
- Retrieval to ground responses in relevant external data.
- Trust boundaries and guardrails to handle untrusted content.

### LLM platforms

Integrate applications with models.

- Conversation state to manage model interactions.
- Structured outputs to enable machine-to-machine integrations.
- Tool calling to trigger external actions and fetch live data.
- Error handling to manage refusals and malformed responses.

### Infrastructure

Run applications in production.

- Gateways to control access, budgets, and fallbacks across providers.
- Self-hosted models to meet data sovereignty and cost constraints.
- Vector stores to index and search data for retrieval.

Tools: [Ollama](https://ollama.com/).

## Exercises

- Build an LLM application that uses retrieval and custom tools.
- Route the application through a gateway to switch between hosted and local models.

## Resources

Platform APIs:

- [Anthropic Messages API](https://platform.claude.com/docs/en/build-with-claude/working-with-messages)
- [OpenAI Responses API](https://developers.openai.com/api/docs/quickstart)
- [Google Interactions API](https://aistudio.google.com/docs/interactions-overview)

Open standards:

- [Open Responses](https://openresponses.org/)

Security frameworks:

- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/)
