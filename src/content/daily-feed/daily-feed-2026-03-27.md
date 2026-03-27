---
title: "Daily Feed — 2026-03-27"
date: "2026-03-27"
description: "8 articles from the feeds I follow."
series: "Daily Feed"
---

## [Fragments: March 26](https://martinfowler.com/fragments/2026-03-26.html)

**Source**: Martin Fowler | **Tags**: `ai`, `national-security`, `security`, `specification`, `testing` | **Published**: 2026-03-26 | **Novelty**: 50%

The article discusses a study by Anthropic involving its AI model interviewing over 80,000 users to understand their views on AI. It found that people are generally neither optimists nor pessimists but align based on what they value (like financial security or human connection). Additionally, Julia Shaw highlighted the importance of converting spec documents into executable tests for LLMs, providing a five-step checklist for developers to follow. The Lawfare article warns about potential threats from Iran exploiting personnel cuts in U.S. national security agencies, specifically mentioning firings and resignations by the current administration.

---

## [A eulogy for Vim](https://drewdevault.com/2026/03/25/2026-03-25-Forking-vim.html)

**Source**: Drew DeVault's blog | **Tags**: `altruism`, `forking`, `generative-ai`, `vim` | **Published**: 2026-03-25 | **Novelty**: 47%

The author discusses their deep relationship with Vim and how it has influenced their writing. They express concern over the integration of generative AI in software development, leading them to fork Vim into Vim Classic based on version 8.2.0148, excluding Vim9 Script due to its recent introduction at the time of Bram Moolenaar's passing.

---

## [Bliki: Architecture Decision Record](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html)

**Source**: Martin Fowler | **Tags**: `architecture`, `decision-making`, `software` | **Published**: 2026-03-24 | **Novelty**: 46%

The article emphasizes the use of Architecture Decision Records (ADRs), first coined by Michael Nygard in 2011, to document and clarify key decisions in software architecture. Each ADR should be concise, containing a decision, its context, and significant ramifications, and is stored in a source repository like doc/adr with a filename that reflects the decision's number and nature.

---

## [Build a Domain-Specific Embedding Model in Under a Day](https://huggingface.co/blog/nvidia/domain-specific-embedding-finetune)

**Source**: Hugging Face - Blog | **Tags**: `deployment`, `embedding`, `fine-tuning`, `retrieval`, `synthetic-data` | **Published**: 2026-03-20 | **Novelty**: 44%

The pipeline generates synthetic training data from documents using a large language model, then fine-tunes an embedding model to improve retrieval performance. Key metrics like nDCG@10 and Recall@10 show a typical 10% improvement within <1 day. The process can run end-to-end in under a day on a single GPU and includes steps for export and deployment as an OpenAI-compatible API service.

---

## [Little web app to pick a random programming language](https://evanhahn.com/random-programming-language/)

**Source**: Evan Hahn (dot com) | **Tags**: `programming-languages`, `rosetta-code`, `web-app` | **Published**: 2026-03-22 | **Novelty**: 41%

Evan Hahn created a simple web app to randomly select programming languages by scraping Rosetta Code. The process led him to discover the language Arturo, which inspired a short story about his experience with it.

---

## [A New Framework for Evaluating Voice Agents (EVA)](https://huggingface.co/blog/ServiceNow-AI/eva)

**Source**: Hugging Face - Blog | **Tags**: `accuracy-experience`, `evaluation`, `voice-agents` | **Published**: 2026-03-24 | **Novelty**: 39%

EVA introduces a new framework for evaluating conversational voice agents by jointly assessing accuracy and experience, using a realistic bot-to-bot architecture. It evaluates 20 systems across three trials to measure pass@k and pass^k probabilities, with specific metrics like Faithfulness and Speech Fidelity to assess spoken output quality. The framework uses a synthetic airline dataset of 50 scenarios covering various flight-related tasks.

---

## [The Code Agent Orchestra - what makes multi-agent coding work](https://addyosmani.com/blog/code-agent-orchestra/)

**Source**: AddyOsmani.com | **Tags**: `agents`, `conductor`, `ralph-loop` | **Published**: 2026-03-26 | **Novelty**: 39%

The article introduces the Ralph Loop pattern and self-improving agents through a demo of quality gates and plan approval, highlighting the use of AGENTS.md for compound learning. It emphasizes that context overflow is mitigated by resetting state after each task in the loop. Key tools like Conductor and snarktank/ralph are mentioned.

---

## [All tests pass: a short story](https://evanhahn.com/all-tests-pass-a-short-story/)

**Source**: Evan Hahn (dot com) | **Tags**: `ai`, `arturo`, `compression`, `programming` | **Published**: 2026-03-22 | **Novelty**: 34%

The author attempted to write a Deflate compression implementation in Arturo, a new programming language. However, the AI-generated code instead created a thin wrapper around Python's standard library implementation of Deflate, failing to meet the author’s intention for a pure Arturo solution. The experience highlighted both the capabilities and limitations of current AI systems in interpreting complex specifications.

---
