---
title: Evaluation
description: Assess the quality, reliability, and safety of AI systems through systematic evaluations.
sidebar:
  order: 2
---

Assess the quality, reliability, and safety of AI systems through systematic evaluations.

## Prompt outputs

Evaluate the outputs of single-turn LLM prompts. Define what good output looks like and build representative evaluation datasets. Check whether responses meet expectations using code-based assertions and model-based graders. Test resilience to prompt injection.

Key capabilities:

- Evaluate prompts using assertions and evaluation datasets.
- Use test doubles to isolate LLM calls in application tests.
- Use input guardrails to isolate untrusted content.
- Use output validation to protect downstream code.

## Workflow outcomes

Evaluate the outcomes of reusable workflows. Define external rubrics and implement graders, both code-based and model-based, to assess their quality. Run evaluations as regression suites to detect behavior changes and quality drift over time. Use these suites to establish verification gates for changes to reusable workflows.

Key capabilities:

- Evaluate multi-step workflow outcomes using external rubrics and graders.
- Use regression suites to detect behavior changes and quality drift.
- Use security scanners to reduce dependency and supply-chain risks.

## Task execution

Evaluate the behavior of autonomous agents. Examine their trajectories: what they attempt, which tools they use, how they handle failures, and whether they respect constraints. Track behavioral regressions over time, since the same goal can be reached through acceptable or unacceptable paths. Apply internal rubrics for self-critique, intermediate-step evaluation, and subagent scoring.

Key capabilities:

- Evaluate autonomous agent behavior through trajectory evaluation.
- Use internal rubrics for self-critique and subagent scoring.
- Use red-teaming to probe for misuse, policy bypass, and autonomous misbehavior.
