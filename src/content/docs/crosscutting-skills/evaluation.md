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

- Capture golden examples in evaluation datasets.
- Check responses with code-based and model-based graders.
- Test resilience to prompt injection with adversarial inputs.

### Workflow outcomes

Evaluate the outcomes of reusable workflows on realistic tasks. Re-run evaluations as workflows and models change, since quality can degrade without visible failures, and treat the results as verification gates. Since multi-step tasks rarely have a single correct output, define external rubrics and grade outcomes against them. Confirm that workflows stay on course when the tools and files they read contain malicious instructions.

Capabilities:

- Detect drift in outcome quality with regression suites.
- Grade multi-step workflow outcomes against external rubrics.
- Test resilience to indirect prompt injection with adversarial tasks.

### Agent behaviors

Evaluate the behavior of autonomous agents on real tasks. Since the same goal can be reached through acceptable or unacceptable paths, examine what agents attempt, which tools they use, how they handle failures, and whether they respect constraints. Track this behavior over time, as it can regress while outcomes still look good. Give agents criteria to judge their own work during a run, when no one is reviewing each step. Confirm that agents stay within their limits under deliberate pressure, since greater autonomy raises the cost of misbehavior.

Capabilities:

- Detect drift in agent behavior from trajectory transcripts.
- Guide self-critique and verify task completion with internal rubrics.
- Probe for misuse, policy bypass, and autonomous misbehavior through red-teaming.

## Resources

Tools:

- [Promptfoo](https://www.promptfoo.dev/)

Security frameworks:

- [MITRE ATLAS](https://atlas.mitre.org/)
