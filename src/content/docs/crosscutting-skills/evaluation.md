---
title: Evaluation
description: Use evaluations to ensure quality, from prompt outputs to agent behaviors.
sidebar:
  order: 2
---

Use evaluations to ensure quality, from prompt outputs to agent behaviors.

## Levels

### Prompt outputs

Evaluate the outputs of single-turn prompts. Define what good output looks like and build representative evaluation datasets. Check whether responses meet expectations using code-based graders for deterministic checks and model-based graders for semantic checks. Use the results to compare models. Confirm that prompts hold up when untrusted content tries to override their instructions.

Capabilities:

- Use evaluation datasets to capture golden examples.
- Use code-based and model-based graders to check responses.
- Use adversarial inputs to test resilience to prompt injection.

### Workflow outcomes

Evaluate the outcomes of reusable workflows on realistic tasks. Re-run evaluations as workflows and models change, since quality can degrade without visible failures, and treat the results as verification gates. Since multi-step tasks rarely have a single correct output, define external rubrics and grade outcomes against them. Confirm that workflows stay on course when the tools and files they read contain malicious instructions.

Capabilities:

- Use regression suites to detect quality drift in outcomes.
- Use external rubrics to grade multi-step workflow outcomes.
- Use adversarial tasks to test resilience to indirect prompt injection.

### Agent behaviors

Evaluate the behavior of autonomous agents on real tasks. Since the same goal can be reached through acceptable or unacceptable paths, examine what agents attempt, which tools they use, how they handle failures, and whether they respect constraints. Track this behavior over time, as it can regress while outcomes still look good. Give agents criteria to judge their own work during a run, when no one is reviewing each step. Confirm that agents stay within their limits under deliberate pressure, since greater autonomy raises the cost of misbehavior.

Capabilities:

- Use trajectory transcripts to detect drift in behavior.
- Use internal rubrics to guide self-critique and verify task completion.
- Use red-teaming to probe for misuse, policy bypass, and autonomous misbehavior.

## Resources

Tools:

- [Promptfoo](https://www.promptfoo.dev/)

Security frameworks:

- [MITRE ATLAS](https://atlas.mitre.org/)
