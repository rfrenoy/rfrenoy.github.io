---
title: "Daily Feed — 2026-04-25"
date: "2026-04-25"
description: "19 articles from Armin Ronacher's Thoughts and Writings, Simon Willison's Weblog, Hugging Face - Blog and 1 other, covering ai, gpt, model and api."
series: "Daily Feed"
---

## [Equity for Europeans](https://lucumr.pocoo.org/2026/4/23/equity-for-europeans/)

**Source**: Armin Ronacher's Thoughts and Writings | **Tags**: `equity`, `europe`, `finance`, `ownership` | **Published**: 2026-04-23 | **Novelty**: 41%

The article discusses how the concept of 'equity' in finance and ownership differs between American English usage and German-speaking European contexts. It highlights that while 'equity' in English combines legal, financial, and cultural dimensions into one term, German lacks a single word to convey this full meaning, leading to differing perspectives on concepts like wealth creation and employee participation. The author argues for the normalization of equity discourse in Europe to promote clearer thinking about ownership and agency.

---

## [russellromney/honker](https://simonwillison.net/2026/Apr/24/honker/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `queues`, `rust`, `sqlite`, `streams`, `transactions` | **Published**: 2026-04-24 | **Novelty**: 37%

The article introduces 'honker', a Rust SQLite extension that implements Postgres NOTIFY/LISTEN semantics for use with SQLite, enabling the creation of Python code for queues and Kafka-style durable streams. It includes custom SQL functions like `notify` and `honker_stream_read_since`, and supports transactional outbox patterns to ensure queuing only occurs on successful transaction commits. Notable code snippets demonstrate enqueueing jobs (`emails.enqueue`) and publishing stream events (`stream.publish`).

---

## [An update on recent Claude Code quality reports](https://simonwillison.net/2026/Apr/24/recent-claude-code-quality-reports/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `bug`, `session-management` | **Published**: 2026-04-24 | **Novelty**: 33%

The article highlights a significant bug in Claude Code's session management that caused the AI to appear forgetful and repetitive, impacting user sessions left idle for over an hour. This issue affected numerous long-running sessions, leading users to spend more time interacting with stale sessions than new ones.

---

## [Quoting Romain Huet](https://simonwillison.net/2026/Apr/25/romain-huet/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `gpt`, `model` | **Published**: 2026-04-25 | **Novelty**: 30%

Romain Huet confirmed that OpenAI will not release a GPT-5.5-Codex model, following the unification of Codex and the main model into a single system with GPT-5.4, which saw significant advancements in agentic coding, computer use, and other tasks involving computers.

---

## [Serving the For You feed](https://simonwillison.net/2026/Apr/24/serving-the-for-you-feed/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `algorithm`, `bluesky`, `database` | **Published**: 2026-04-24 | **Novelty**: 29%

spacecowboy runs a custom For You feed for around 72,000 users using a Go process on a gaming PC with 16 cores, 96GB of RAM, and 4TB NVMe storage. The system stores the last 90 days of relevant data (419GB) based on user likes and is currently served by a $7/month VPS. spacecowboy estimates this setup could handle up to 1 million daily active Bluesky users with the cheapest algorithm they've found.

---

## [The people do not yearn for automation](https://simonwillison.net/2026/Apr/24/the-people-do-not-yearn-for-automation/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `automation`, `human-experience` | **Published**: 2026-04-24 | **Novelty**: 29%

The article argues that people are not inherently drawn to automation, despite the widespread adoption of AI tools like ChatGPT. Author Nilay Patel suggests that those with a 'software brain' mindset—viewing everything as an opportunity for automation—are becoming detached from the general public's perspective. Regular individuals do not see opportunities in writing code and find that automation flattens their experience by reducing it to data and information flows.

---

## [GPT-5.5 prompting guide](https://simonwillison.net/2026/Apr/25/gpt-5-5-prompting-guide/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `api`, `coding`, `gpt`, `migration` | **Published**: 2026-04-25 | **Novelty**: 28%

The article highlights OpenAI's recommendations for using GPT-5.5, suggesting a short user-visible update before long tasks and providing specific coding advice like migrating projects with the command $openai-docs migrate this project to gpt-5.5. It also cautions against carrying over old instructions, recommending a fresh baseline approach instead. Notable is OpenAI’s explicit recommendation to start from scratch when using GPT-5.5 for optimal results.

---

## [llm 0.31](https://simonwillison.net/2026/Apr/24/llm/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `command-line`, `models`, `openai` | **Published**: 2026-04-24 | **Novelty**: 27%

llm 0.31 introduces the GPT-5.5 model and allows setting text verbosity levels and image detail for OpenAI models via command-line options. The update also registers additional models as asynchronous.

---

## [Quoting Maggie Appleton](https://simonwillison.net/2026/Apr/23/maggie-appleton/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `digital-gardening`, `maggie-appleton`, `public-learning` | **Published**: 2026-04-23 | **Novelty**: 27%

Maggie Appleton suggests that publicly demonstrating learning through digital mediums such as gardening, podcasting, or streaming can lead to unexpected invitations to exclusive events where attendees are perceived as more competent than they actually are. This phenomenon is seen as a positive side effect of being visible in one's field.

---

## [DeepSeek V4 - almost on the frontier, a fraction of the price](https://simonwillison.net/2026/Apr/24/deepseek-v4/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `model`, `performance`, `pricing` | **Published**: 2026-04-24 | **Novelty**: 25%

DeepSeek has released V4-Pro and Flash models with 1 million token context, Mixture of Experts architecture. The V4-Pro model boasts 1.6T total parameters and 49B active parameters, while the V4-Flash has 284B total parameters and 13B active parameters. Pricing is significantly lower at $0.14/million tokens input and $0.28/million tokens output for Flash, compared to competitors like OpenAI's GPT-5.4 Nano which costs $0.20/million tokens input and $1.25/million tokens output.

---

## [Millisecond Converter](https://simonwillison.net/2026/Apr/24/milliseconds/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `llm`, `milliseconds`, `tool` | **Published**: 2026-04-24 | **Novelty**: 24%

This article by Simon Willison discusses a tool for converting milliseconds. While the specific details of the tool are not provided, it is part of a broader monthly briefing on significant developments in language models (LLMs).

---

## [A pelican for GPT-5.5 via the semi-official Codex backdoor API](https://simonwillison.net/2026/Apr/23/gpt-5-5/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `api`, `gpt`, `plugin` | **Published**: 2026-04-23 | **Novelty**: 24%

The article introduces llm-openai-via-codex, a plugin that allows users to leverage their existing OpenAI Codex subscription with GPT-5.5 through the LLM tool. Notable features include generating an SVG of a pelican riding a bicycle using GPT-5.5's advanced capabilities and the pricing for GPT-5.5 at $5 per 1M input tokens and $30 per 1M output tokens, making it twice as expensive as GPT-5.4.

---

## [It's a big one](https://simonwillison.net/2026/Apr/24/weekly/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `animals`, `bicycles`, `engineering` | **Published**: 2026-04-24 | **Novelty**: 23%

This newsletter highlights unusual and engaging content such as 4 pelicans riding bicycles, a possum on an e-scooter, and up to 5 raccoons with ham radios. It also includes 5 blog posts, 8 links, 3 quotes, and a new chapter of the Agentic Engineering Patterns guide.

---

## [llm-openai-via-codex 0.1a0](https://simonwillison.net/2026/Apr/23/llm-openai-via-codex/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `codex-cli`, `llm`, `openai` | **Published**: 2026-04-23 | **Novelty**: 22%

This article by Simon Willison introduces a new version of Codex-CLI, labeled as llm-openai-via-codex 0.1a0, which appears to be an updated tool for interacting with OpenAI's language models through command-line interface commands. The post also mentions the availability of a sponsored email digest service for updates on Large Language Model (LLM) developments.

---

## [WHY ARE YOU LIKE THIS](https://simonwillison.net/2026/Apr/25/why-are-you-like-this/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `generative-ai`, `pelican-riding-a-bicycle`, `slop`, `text-to-image` | **Published**: 2026-04-25 | **Novelty**: 19%

Simon Willison noted on April 25, 2026, that the AI generated an image of a chaotic scene with a horse riding an astronaut, who in turn is riding a pelican on a bicycle. This scenario was initially requested as a test case for stacking benchmarks but later became part of a tweet referencing the AI's tendency to produce unexpected or whimsical outputs despite structured prompts.

---

## [DeepSeek-V4: a million-token context that agents can actually use](https://huggingface.co/blog/deepseekv4)

**Source**: Hugging Face - Blog | **Tags**: `agents`, `attention`, `ml` | **Published**: 2026-04-24

DeepSeek-V4 introduces CSA and HCA hybrid attention mechanisms to reduce the inference FLOPs and KV cache size by 27% and 10% respectively, allowing a 1M-token context window. It also features interleaved thinking across tool calls and a sandbox built for RL rollouts called DSec. The model supports three reasoning modes: Non-think, Think High, and Think Max, with the latter requiring at least 384K tokens of context.

---

## [Extract PDF text in your browser with LiteParse for the web](https://simonwillison.net/2026/Apr/23/liteparse-for-the-web/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `liteparse`, `ocr`, `pdf`, `web-dev` | **Published**: 2026-04-23

The article describes how LiteParse, originally a Node.js CLI tool for extracting text from PDFs, was adapted into a web application using Claude Code and GitHub Actions. This version leverages PDF.js and Tesseract.js to run entirely in the browser, offering OCR options without requiring users to install any additional software.

---

## [[ESSAYS] MacBook Neo and How the iPad Could Be](https://craigmod.com/essays/ipad_neo/)

**Source**: Craig Mod — Writer + Photographer | **Tags**: `ipad`, `macbook`, `touch-computing` | **Published**: 2026-04-23

The article proposes radical changes to iPad and MacBook designs, advocating for touch-only iPads with unique apps designed for multitouch computing joy. It envisions a simplified MacBook lineup focused on keyboard-first productivity, emphasizing clear tool specificity between the two devices. Specific recommendations include getting rid of keyboards on half of the iPad lineup and rebuilding iPadOS around touch fluidity.

---

## [How to Use Transformers.js in a Chrome Extension](https://huggingface.co/blog/transformersjs-chrome-extension)

**Source**: Hugging Face - Blog | **Tags**: `chrome-extension`, `manifest-v3`, `transformers-js` | **Published**: 2026-04-23

This article details how to integrate Transformers.js into a Chrome extension under Manifest V3 constraints, focusing on the background service worker as the model orchestrator. Notable points include using Gemma-4-style templates for tool calls and the split of conversation state between background memory and UI-facing chat messages.

---
