---
title: Environment
description: Set up runtimes and tools that agents know best.
---

Set up runtimes and tools that agents know best.

Coding agents act through the shell, so the tools installed on the host define what they can do. Prefer widely adopted runtimes and tools: agents already know them from training data, use them without extra instructions, and run commands that humans can read and rerun.

## Runtimes

Run commands, scripts, tools, and services.

- [Bash](https://www.gnu.org/software/bash/manual/) to run commands in the shell syntax agents know best.
- [Python](https://docs.python.org/3/) and [uv](https://docs.astral.sh/uv/) to run Python scripts and tools from PyPI.
- [Node.js](https://nodejs.org/learn) and [npm](https://docs.npmjs.com/) to run JavaScript scripts and tools from npm.
- [Docker](https://docs.docker.com/get-started/) to run self-hosted infrastructure in isolated containers.

## CLI tools

Work with code and data.

- [Git](https://git-scm.com/doc) to checkpoint agent changes and review them as diffs.
- [ripgrep](https://github.com/BurntSushi/ripgrep) to search code and find files fast.
- [jq](https://jqlang.org/manual/) and [yq](https://mikefarah.gitbook.io/yq/) to extract only the needed fields from JSON and YAML.
