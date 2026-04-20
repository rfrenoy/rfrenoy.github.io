---
title: "Daily Feed — 2026-04-20"
date: "2026-04-20"
description: "9 articles from Simon Willison's Weblog, Drew DeVault's blog, §kuthus and 2 others, covering claude, model-comparison, token-counter and blog."
series: "Daily Feed"
---

## [Claude Token Counter, now with model comparisons](https://simonwillison.net/2026/Apr/20/claude-token-counts/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `claude`, `model-comparison`, `token-counter` | **Published**: 2026-04-20 | **Novelty**: 47%

The article highlights the new capabilities of Claude Token Counter, which now supports model comparisons between Opus 4.7 and other notable models such as Sonnet 4.6 and Haiku 4.5. It found that Opus 4.7 uses approximately 1.46 times more tokens than Opus 4.6 for text input and about 3 times more tokens for high-resolution images, impacting costs despite the same pricing structure.

---

## [Rewrote my blog with Zine](https://drewdevault.com/blog/Rewrite-with-zine/)

**Source**: Drew DeVault's blog | **Tags**: `blog`, `rewriting`, `static-site-generator`, `zine` | **Published**: 2026-04-19 | **Novelty**: 40%

The author rewrote their blog using Zine, a static site generator, after being frustrated with Hugo. They also cleaned up the code, updated posts for bitrot, and imported old content from Blogspot. The choice of Zine was due to its promising approach with SuperHTML as a templating engine, despite some limitations in Scripty and design choices.

---

## [SQL functions in Google Sheets to fetch data from Datasette](https://simonwillison.net/2026/Apr/20/datasette-sql/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `api-integration`, `datasette`, `google-sheets`, `sql-functions` | **Published**: 2026-04-20 | **Novelty**: 33%

The article details three methods for fetching data from a Datasette instance into Google Sheets: using the importdata() function, creating a 'named function' that wraps it, and employing Google Apps Script to handle HTTP header tokens. The author provides an example sheet showcasing these techniques.

---

## [When work drags you underwater](https://skuth.us/when-work-drags-you-underwater/)

**Source**: §kuthus | **Tags**: `stress`, `work-life-balance` | **Published**: 2026-04-19 | **Novelty**: 31%

The author describes a period of intense work pressure that has significantly impacted their personal life, including free time and sleep. They mention being in a 'two-week tunnel' but are optimistic about emerging from it soon.

---

## [Changes in the system prompt between Claude Opus 4.6 and 4.7](https://simonwillison.net/2026/Apr/18/opus-system-prompt/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `claude`, `system-prompt`, `tools`, `updates` | **Published**: 2026-04-18 | **Novelty**: 30%

Claude Opus 4.7 introduced several new features and updates to its system prompt, including the renaming of 'developer platform' to 'Claude Platform', adding tools like 'Claude in Chrome', and expanding the child safety section with a new <critical_child_safety_instructions> tag. The update also includes a focus on being less verbose and more tool-centric for resolving ambiguities, as well as new sections addressing disordered eating and guarding against screenshot attacks.

---

## [Claude system prompts as a git timeline](https://simonwillison.net/2026/Apr/18/extract-system-prompts/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `git`, `prompts`, `research` | **Published**: 2026-04-18 | **Novelty**: 29%

The article describes transforming Anthropic's published system prompt history for Claude into a git-based exploration tool. Each model and family of prompts is broken down into separate files with fake commit dates, allowing researchers to use `git log`, `diff`, and `blame` commands to trace the evolution of prompts, compare differences, and attribute changes to specific dates.

---

## [Headless everything for personal AI](https://simonwillison.net/2026/Apr/19/headless-everything/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `api`, `personalai`, `sas` | **Published**: 2026-04-19 | **Novelty**: 27%

Matt Webb and Marc Benioff advocate for the increased use of headless services, which allow personal AI assistants to access data and perform tasks directly via APIs rather than graphical user interfaces. This shift is expected to disrupt traditional SaaS pricing models and potentially alter market dynamics by making API availability a key competitive factor.

---

## [Agent Harness Engineering](https://addyosmani.com/blog/agent-harness-engineering/)

**Source**: AddyOsmani.com | **Tags**: `agents`, `co-training`, `harness`, `llm`, `orchestration` | **Published**: 2026-04-19 | **Novelty**: 27%

The article introduces the concept of Harness-as-a-Service and highlights the importance of well-designed harnesses for building functional agents, emphasizing that models co-train with their specific harnesses. Notable examples include Viv's Top 30 to Top 5 jump in Terminal Bench performance using Claude Code, which showcases how different harness designs can significantly impact model behavior. The article also discusses key components like AGENTS.md rules, Ralph Loops for long-horizon execution, and hooks as enforcement layers.

---

## [Quantum Computers Are Not a Threat to 128-bit Symmetric Keys](https://words.filippo.io/128-bits/)

**Source**: Filippo Valsorda | **Tags**: `cryptography`, `quantum`, `security` | **Published**: 2026-04-20 | **Novelty**: 21%

The article delves into the specific security considerations of symmetric encryption post-quantum computing, arguing that 128-bit keys (like AES-128) remain secure while larger keys are unnecessary. It cites extensive calculations and comparisons with various cryptographic experts to conclude that transitioning to longer keys for symmetric cryptography would be wasteful. The author uses concrete examples such as the difficulty of parallelizing Grover’s algorithm and the practical resource estimates required, concluding that AES-128 is sufficient.

---
