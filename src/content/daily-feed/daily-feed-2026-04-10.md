---
title: "Daily Feed — 2026-04-10"
date: "2026-04-10"
description: "23 articles from Simon Willison's Weblog, Hugging Face - Blog, Evan Hahn (dot com) and 1 other, covering ai, datasette, security and python."
series: "Daily Feed"
---

## [asgi-gzip 0.3](https://simonwillison.net/2026/Apr/9/asgi-gzip/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `asgi`, `datasette`, `gzip`, `sse`, `starlette` | **Published**: 2026-04-09 | **Novelty**: 49%

The article details how a production Datasette instance using asgi-gzip faced issues with text/event-stream responses due to incorrect compression, which was later fixed by manually running a GitHub Actions workflow and integrating the fix from Starlette. This highlights the importance of staying updated with dependency libraries and addressing bugs promptly.

---

## [Waypoint-1.5: Higher-Fidelity Interactive Worlds for Everyday GPUs](https://huggingface.co/blog/waypoint-1-5)

**Source**: Hugging Face - Blog | **Tags**: `ai-entertainment`, `consumer-hardware`, `interactive-games`, `world-models` | **Published**: 2026-04-09 | **Novelty**: 47%

Waypoint-1.5 introduces two model tiers: a 720p version for high-performance hardware and a 360p version optimized for broader deployment, with significant improvements in training data (nearly 100x more than Waypoint-1) and efficiency to ensure real-time interactivity on consumer GPUs like RTX 3090 through 5090. This release emphasizes accessibility and responsiveness over visual fidelity alone, aiming to make interactive generative worlds usable on everyday hardware.

---

## [scan-for-secrets 0.3](https://simonwillison.net/2026/Apr/6/scan-for-secrets/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `file-handling`, `python`, `redaction`, `security` | **Published**: 2026-04-06 | **Novelty**: 47%

Version 0.3 of scan-for-secrets introduces a new -r/--redact option that displays matches, prompts for confirmation, and replaces them with 'REDACTED', considering escaping rules. It also includes a Python function named redact_file which performs file redaction based on provided secrets list and a replacement string defaulting to 'REDACTED'.

---

## [Cleanup Claude Code Paste](https://simonwillison.net/2026/Apr/6/cleanup-claude-code-paste/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `claude`, `cleanup`, `code-terminal` | **Published**: 2026-04-06 | **Novelty**: 43%

The tool 'Cleanup Claude Code Paste' addresses the issue of unusual whitespace and formatting in text copied from the Claude Code terminal app, specifically by removing the ❯ prompt character, fixing line wrapping issues, and joining broken lines to create clean, readable paragraphs. Users can paste their terminal output into this tool for automatic cleanup before copying it elsewhere.

---

## [Kākāpō parrots](https://simonwillison.net/2026/Apr/10/kakapo/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai-technology`, `conservation`, `kakapo` | **Published**: 2026-04-10 | **Novelty**: 43%

The article by Simon Willison from April 10, 2026, introduces a note about kākāpō parrots, focusing on the urgent conservation efforts and unique survival strategies of these critically endangered birds. Notably, it highlights recent advancements in using AI to monitor and predict the breeding cycles of kākāpōs, aiming for more effective protection measures.

---

## [SQLite WAL Mode Across Docker Containers Sharing a Volume](https://simonwillison.net/2026/Apr/7/sqlite-wal-docker-containers/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `concurrency`, `docker`, `sqlite`, `volumes`, `wlmode` | **Published**: 2026-04-07 | **Novelty**: 41%

The article discusses how SQLite's WAL mode functions effectively when two Docker containers share a volume on the same host, as demonstrated through an experiment using Docker Desktop for macOS and a named volume. The `.db-shm` file was monitored to show real-time propagation of database changes and effective memory-mapped file sharing.

---

## [GLM-5.1: Towards Long-Horizon Tasks](https://simonwillison.net/2026/Apr/7/glm-51/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `animation`, `html`, `model`, `svg` | **Published**: 2026-04-07 | **Novelty**: 40%

The article describes GLM-5.1's ability to generate an SVG of a pelican on a bicycle and, upon receiving feedback about the animation issues, fix them by explaining the problem with CSS transforms overriding SVG positioning attributes and providing updated HTML code. The article also showcases specific SVG comments detailing animations, such as the wobble effect on the pelican’s beak.

---

## [Anthropic's Project Glasswing - restricting Claude Mythos to security researchers - sounds necessary to me](https://simonwillison.net/2026/Apr/7/project-glasswing/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai-security`, `anthropic`, `claudemythos`, `vulnerability-research` | **Published**: 2026-04-07 | **Novelty**: 40%

Anthropic has released Claude Mythos Preview under Project Glasswing to a restricted set of security researchers for the purpose of vulnerability detection and fixing. The model, which is more capable than previous versions like Claude Opus 4.6 in autonomous exploit development, has already discovered thousands of high-severity vulnerabilities, including those in major operating systems and web browsers. Anthropic plans to invest $100M in usage credits and $4M in direct donations towards open-source security organizations as part of the project.

---

## [datasette-ports 0.2](https://simonwillison.net/2026/Apr/6/datasette-ports-2/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `datasette`, `plugin`, `ports` | **Published**: 2026-04-06 | **Novelty**: 40%

datasette-ports 0.2 now supports running without Datasette, making it more versatile. It lists all currently running Datasette instances and their ports, both as a standalone tool and as a plugin command.

---

## [Google AI Edge Gallery](https://simonwillison.net/2026/Apr/6/google-ai-edge-gallery/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `gemma-models`, `google`, `mobile-app` | **Published**: 2026-04-06 | **Novelty**: 38%

The article highlights Google's official app for running Gemma 4 models (E2B and E4B sizes, plus some Gemma 3 members) directly on iPhone. It mentions the E2B model at 2.54GB, noting its speed and usefulness. The app also features image questioning and audio transcription capabilities with smaller Gemma 4 models, including a 'skills' demo with eight interactive widgets (interactive-map, kitchen-adventure, etc.), though it encountered technical issues during testing.

---

## [Syntaqlite Playground](https://simonwillison.net/2026/Apr/5/syntaqlite/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `playground`, `sql`, `webassembly` | **Published**: 2026-04-05 | **Novelty**: 35%

Lalit Maganti's syntaqlite, which was recently discussed on Hacker News, has inspired a new playground that allows users to format, parse, validate, and tokenize SQLite SQL queries using the Python library compiled to WebAssembly for browser execution. Notably, syntaqlite also features its own dedicated WebAssembly playground accessible from the README.

---

## [In defense of GitHub's poor uptime](https://evanhahn.com/in-defense-of-githubs-poor-uptime/)

**Source**: Evan Hahn (dot com) | **Tags**: `aggregation`, `github`, `mathematics`, `uptime` | **Published**: 2026-04-10 | **Novelty**: 35%

The article argues that GitHub's reported uptime is misleading due to how outages are calculated and aggregated. It uses mathematical examples, such as Service A having 90% uptime with one day of downtime over ten days, and Service B having 80% uptime with two days of downtime, leading to a combined 70% uptime when the outages don't overlap. The author suggests that individual service uptimes are better indicators than aggregated numbers, noting core Git operations have had 98.98% uptime over 90 days, despite overall reported downtimes being higher.

---

## [ChatGPT voice mode is a weaker model](https://simonwillison.net/2026/Apr/10/voice-mode-is-weaker/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `gpt`, `openai` | **Published**: 2026-04-10 | **Novelty**: 33%

The article highlights that OpenAI's voice mode operates on a weaker model from the GPT-4o era, with a knowledge cutoff date of April 2024. It contrasts this with higher-tier models like Codex, which are better suited for specific tasks and have seen significant advancements due to explicit reward functions in verifiable domains.

---

## [Quoting Giles Turnbull](https://simonwillison.net/2026/Apr/8/giles-turnbull/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai-ethics`, `giles-turnbull`, `professionalism` | **Published**: 2026-04-08 | **Novelty**: 28%

Giles Turnbull expresses his observation that people are more inclined to use AI tools for professions other than their own. This quote was posted on April 8, 2026, and is part of a collection by Simon Willison. The post does not include any specific codes but touches on the ethical considerations and usage norms around AI technologies.

---

## [Meta's new model is Muse Spark, and meta.ai chat has some interesting tools](https://simonwillison.net/2026/Apr/8/muse-spark/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai-tools`, `meta`, `muse-spark` | **Published**: 2026-04-08 | **Novelty**: 28%

Meta announced Muse Spark, a new model with competitive benchmarks against Opus 4.6, Gemini 3.1 Pro, and GPT 5.4, though it lags behind on Terminal-Bench 2.0. The model features two modes ('Instant' and 'Thinking'), with the latter offering longer reasoning time and advanced tools like image generation, Python code execution, and visual grounding for object detection. Notably, Meta plans to open-source future versions of their models, potentially returning to the frontier model game.

---

## [Eight years of wanting, three months of building with AI](https://simonwillison.net/2026/Apr/5/building-with-ai/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `design`, `engineering`, `prototyping` | **Published**: 2026-04-05 | **Novelty**: 27%

Lalit Maganti spent eight years conceptualizing and three months building syntaqlite, a parser, formatter, and verifier for SQLite queries with the help of AI. Despite AI's assistance in generating low-level code, it struggled with high-level design decisions, leading to more human-in-the-loop decision making in the second iteration which resulted in a robust library.

---

## [scan-for-secrets 0.1](https://simonwillison.net/2026/Apr/5/scan-for-secrets-3/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `cli`, `python`, `secrets`, `tdd`, `tool` | **Published**: 2026-04-05 | **Novelty**: 25%

The article describes a Python tool named 'scan-for-secrets' which can be used to scan for specific secrets (API keys, etc.) in log files. It supports common encodings of the secrets and can read from a configuration file to define frequently protected secrets. The tool was developed using README-driven-development, ensuring its functionality matches detailed specifications.

---

## [scan-for-secrets 0.2](https://simonwillison.net/2026/Apr/5/scan-for-secrets/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `api`, `cli`, `security` | **Published**: 2026-04-05 | **Novelty**: 25%

The scan-for-secrets 0.2 CLI tool now streams results as they are found, making it more efficient for large directories. Notable features include the ability to use the -d/--directory option multiple times (to scan multiple directories), a new -f/--file option for individual files, and Python API functions such as scan_directory_iter(), scan_file(), and scan_file_iter(). The -v/--verbose option displays each scanned directory.

---

## [GitHub Repo Size](https://simonwillison.net/2026/Apr/9/github-repo-size/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `github`, `repository`, `size`, `sponsorship` | **Published**: 2026-04-09 | **Novelty**: 25%

Simon Willison's post on April 9, 2026, lists the sizes of two GitHub repositories: 'github' with 184 MB and 'cors' with 27 MB. The article invites readers to sponsor him for $10/month in exchange for a curated email digest of significant developments in language models each month.

---

## [ConvApparel: Measuring and bridging the realism gap in user simulators](https://research.google/blog/convapparel-measuring-and-bridging-the-realism-gap-in-user-simulators/)

**Source**: The latest research from Google | **Tags**: `conversationalai`, `evaluations`, `simulation` | **Published**: 2026-04-09 | **Novelty**: 24%

The article introduces ConvApparel, a dataset of over 4,000 human-AI conversations in the apparel shopping domain, designed to evaluate and improve LLM-based user simulators. It employs a dual-agent data collection protocol with 'Good' and 'Bad' agents and proposes a three-pillar validation framework: population-level statistical alignment, human-likeness score, and counterfactual validation, demonstrating that data-driven methods outperform prompt-based ones but still exhibit a realism gap.

---

## [datasette-ports 0.1](https://simonwillison.net/2026/Apr/6/datasette-ports/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `datasette`, `plugins`, `ports` | **Published**: 2026-04-06 | **Novelty**: 19%

The article introduces datasette-ports 0.1, a tool for finding and listing all currently running Datasette instances along with their ports and plugins. It can be installed via 'datasette install datasette-ports' and then used by running 'datasette ports', which outputs a list of running instances, such as http://127.0.0.1:8333/ - v1.0a26 with Databases: data and Plugins: datasette-enrichments, datasette-enrichments-llm, datasette-llm, datasette-secrets.

---

## [Quoting Chengpeng Mou](https://simonwillison.net/2026/Apr/5/chengpeng-mou/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `chatgpt`, `healthcare`, `hospital-deserts` | **Published**: 2026-04-05 | **Novelty**: 18%

According to Chengpeng Mou, Head of Business Finance at OpenAI, anonymized U.S. ChatGPT data shows that there are approximately 2 million weekly messages related to health insurance and around 600,000 weekly messages from individuals living in 'hospital deserts,' with 70% of these messages occurring outside clinic hours. This highlights the significant unmet healthcare needs in certain regions.

---

## [scan-for-secrets 0.1.1](https://simonwillison.net/2026/Apr/5/scan-for-secrets-2/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `coding`, `secrets`, `security` | **Published**: 2026-04-05 | **Novelty**: 18%

This article by Simon Willison introduces 'scan-for-secrets' version 0.1.1, a tool designed to help developers find and manage secret keys in their codebase more effectively. The new version includes enhanced security features to prevent unauthorized access.

---
