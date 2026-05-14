---
title: "Daily Feed — 2026-05-14"
date: "2026-05-14"
description: "32 articles from §kuthus, Evan Hahn (dot com), Simon Willison's Weblog and 6 others, covering ai, llm, datasette and technology."
series: "Daily Feed"
---

## [Eliminating faith words](https://skuth.us/eliminating-faith-words/)

**Source**: §kuthus | **Tags**: `atheism`, `belief`, `language` | **Published**: 2026-05-12 | **Novelty**: 38%

The author is striving to remove 'faith words' such as belief, faith, luck, and miracles from their vocabulary. Instead, they opt for phrases like 'it would be wonderful if' or 'it is fortunate that,' emphasizing personal responsibility in shaping hopes and beliefs. This approach reflects an atheistic viewpoint and a preference for reason over unfounded hope.

---

## [Open Link in Unloaded Tab, a little Firefox extension](https://evanhahn.com/open-link-in-unloaded-tab-for-firefox/)

**Source**: Evan Hahn (dot com) | **Tags**: `extension`, `firefox`, `unloaded-tab` | **Published**: 2026-05-13 | **Novelty**: 37%

The article introduces Open Link in Unloaded Tab, a Firefox extension that adds an option to right-click context menus for opening links in unloaded tabs. The extension includes a purchased icon and is now available in the Firefox Add-ons directory. Users can download it from the provided link or access the source code.

---

## [Using LLM in the shebang line of a script](https://simonwillison.net/2026/May/11/llm-shebang/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `llm`, `scripting`, `shebang`, `yaml` | **Published**: 2026-05-11 | **Novelty**: 36%

The article discusses using Large Language Models (LLMs) in the shebang line of scripts, enabling execution of natural language commands. It showcases examples like generating an SVG or executing Python functions within YAML templates, demonstrating flexibility and creativity in script usage.

---

## [Quoting New York Times Editors’ Note](https://simonwillison.net/2026/May/10/new-york-times-editors-note/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `corrections`, `politics` | **Published**: 2026-05-10 | **Novelty**: 35%

The New York Times corrected an article by updating it to accurately quote Pierre Poilievre, the Conservative leader, from a speech he gave in April rather than using an AI-generated summary. The original article incorrectly attributed a term 'turncoats' to him regarding politicians who changed allegiances, which was not mentioned in his actual speech.

---

## [Start by turning everything off](https://skuth.us/start-by-turning-everything-off/)

**Source**: §kuthus | **Tags**: `digital`, `minimalism`, `notifications`, `setup` | **Published**: 2026-05-14 | **Novelty**: 35%

The article suggests that when setting up a new device, turning off all notifications and features initially provides a better understanding of their functionality. This approach helps in creating a less noisy environment, contributing to greater focus and sanity later on.

---

## [Async I/O in Zig 0.16, today](https://lalinsky.com/2026/05/11/async-io-in-zig-016-today.html)

**Source**: Lukáš Lalinský | **Tags**: `async-io`, `concurrency`, `performance`, `zig` | **Published**: 2026-05-11 | **Novelty**: 34%

The article highlights the introduction of std.Io in Zig 0.16, which offers a cross-platform interface for I/O and concurrency, enabling the use of various implementations like std.Io.Threaded (with thread pool overhead) or zio (which uses stackful coroutines and async OS-level APIs), achieving significant performance gains. The example demonstrates that 10,000 concurrent tasks using zio complete in about 10 seconds, whereas std.Io.Threaded takes around 20 seconds on the same machine.

---

## [Quoting Boris Mann](https://simonwillison.net/2026/May/13/boris-mann/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `communication`, `technology` | **Published**: 2026-05-13 | **Novelty**: 32%

Boris Mann argues that referring to '11 AI agents' is not as meaningful as saying 'I have 11 spreadsheets' or 'I have 11 browser tabs' for doing work, emphasizing the importance of clear and concrete language in communication about technology.

---

## [datasette-ip-rate-limit 0.1a0](https://simonwillison.net/2026/May/14/datasette-ip-rate-limit/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `crawlers`, `datasette`, `rate-limiting` | **Published**: 2026-05-14 | **Novelty**: 32%

The author developed a rate limiting plugin called datasette-ip-rate-limit to protect the datasette.io site from poorly-behaved crawlers. The production configuration limits IPs to no more than 60 requests per minute for specific paths, blocking them for 20 seconds if exceeded, with a total key limit of 10,000.

---

## [Quoting Luke Curley](https://simonwillison.net/2026/May/9/luke-curley/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `accuracy`, `latency`, `webrtc` | **Published**: 2026-05-09 | **Novelty**: 32%

Luke Curley from OpenAI explains that WebRTC is designed to degrade audio quality and drop packets for low latency, even during poor network conditions. He argues against this approach, stating that higher accuracy in prompts, even if it means a slight increase in latency, is more valuable for users paying for high-quality services.

---

## [CSP Allow-list Experiment](https://simonwillison.net/2026/May/13/csp-allow/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `allow-list`, `csp`, `fetch`, `iframe` | **Published**: 2026-05-13 | **Novelty**: 31%

The article describes an experiment demonstrating how to load an app in a Content Security Policy (CSP)-protected sandboxed iframe, with a custom fetch() that intercepts CSP errors and passes them up to the parent window. Users can then be prompted to add the domain to an allow-list and refresh the page. This was built using GPT-5.5 xhigh running in the Codex desktop app.

---

## [Quoting Mitchell Hashimoto](https://simonwillison.net/2026/May/12/mitchell-hashimoto/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `strategy`, `trends` | **Published**: 2026-05-12 | **Novelty**: 29%

Mitchell Hashimoto argues that most Technical Decision Makers prioritize avoiding job loss over innovative thinking, leading them to follow trends from analysts like Gartner and McKinsey. He advises buying 'Context Engine for AI Apps' as a defensible strategy based on these trends.

---

## [Bliki: Interrogatory LLM](https://martinfowler.com/bliki/InterrogatoryLLM.html)

**Source**: Martin Fowler | **Tags**: `ai-assisted-writing`, `context-gathering`, `interrogation`, `llm` | **Published**: 2026-05-14 | **Novelty**: 28%

The article introduces the concept of using a Language Learning Model (LLM) as an interrogatory tool, where it asks questions to gather context from humans for complex tasks. This technique is demonstrated through examples like creating detailed design documents and validating domain knowledge, potentially solving the issue of information loss due to poor writing or rushed processes. The author highlights how this method can make information extraction more accessible even for individuals who struggle with writing.

---

## [Quoting Andrew Quinn](https://simonwillison.net/2026/May/10/andrew-quinn/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `programming`, `reinvention`, `wheel-making` | **Published**: 2026-05-10 | **Novelty**: 27%

Andrew Quinn reflects on his early programming experiences and the fear of reinventing solutions that may already exist. He argues that one should not avoid creating simple tools, as each reinvention can lead to significant progress, noting that a programmer ideally needs to reinvent about four to twenty wheels in most domains.

---

## [Quoting James Shore](https://simonwillison.net/2026/May/11/james-shore/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `costs`, `maintenance`, `productivity` | **Published**: 2026-05-11 | **Novelty**: 26%

According to James Shore's quote, your AI coding agent must reduce maintenance costs by the inverse of the additional code it generates. Doubling output while maintaining current maintenance costs will still result in a doubling of overall costs; halving maintenance costs is necessary if productivity increases twofold.

---

## [Learning on the Shop floor](https://simonwillison.net/2026/May/11/learning-on-the-shop-floor/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `lehrwerkstatt`, `osmosis-learning`, `river`, `shopify` | **Published**: 2026-05-11 | **Novelty**: 26%

Shopify's internal coding agent tool River operates publicly on Slack, fostering a 'Lehrwerkstatt' environment where employees learn through visible work and collaboration. The tool encourages osmosis learning without formal training plans or managers, with over 100 people participating in Tobias Lütke’s channel #tobi_river.

---

## [Welcome to the Datasette blog](https://simonwillison.net/2026/May/13/welcome-to-the-datasette-blog/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `blog`, `datasette`, `openai-codex` | **Published**: 2026-05-13 | **Novelty**: 26%

This blog post by Simon Willison marks the official launch of the Datasette project's blog, highlighting future announcements and noting that it was created using OpenAI Codex Desktop with its Markdown session transcript export feature. The post also includes a recent article title about an xAI/Anthropic data center deal from May 7th, 2026.

---

## [Thoughts on GitLab's workforce reduction" and "structural and strategic decisions"](https://simonwillison.net/2026/May/11/gitlab-act-2/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `gitlab`, `organization-flattening`, `values-shift`, `workforce-reduction` | **Published**: 2026-05-11 | **Novelty**: 26%

GitLab plans to reduce the number of countries with small teams by up to 30%, flatten their organization by removing three management layers in some functions, and re-organize R&D into roughly 60 smaller, more empowered teams. They are also retiring their CREDIT values framework for a new one focused on speed with quality, ownership mindset, and customer outcomes, with diversity being replaced under the interpersonal excellence sub-bullet.

---

## [Your iPhone can be turned into a dumb phone](https://skuth.us/iphone-dumb-phone/)

**Source**: §kuthus | **Tags**: `appleconfigurator`, `ios`, `technology` | **Published**: 2026-05-10 | **Novelty**: 24%

The article suggests using Apple Configurator to create a managed iPhone with restricted features, such as disabling the App Store and essential apps like FaceTime, iMessage, and AirDrop. By doing this, users can turn their smartphones into 'dumb phones' for reduced distraction while retaining access to necessary apps through manual installation before applying restrictions.

---

## [Using Claude Code: The Unreasonable Effectiveness of HTML](https://simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `claude`, `gpt-5.5`, `html`, `interactive-explanations`, `markdown` | **Published**: 2026-05-08 | **Novelty**: 24%

The article advocates for using HTML as an output format from Claude instead of Markdown, highlighting its advantages such as the ability to include SVG diagrams, interactive widgets, and styled explanations. An example provided is a prompt that asked GPT-5.5 to explain a Linux security exploit in detailed, interactive HTML, showcasing how rich explanations can be created for complex subjects like code analysis.

---

## [Quoting Mo Bitar](https://simonwillison.net/2026/May/12/mo-bitar/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `career`, `manipulation` | **Published**: 2026-05-12 | **Novelty**: 24%

The article by Mo Bitar suggests a manipulative strategy for career advancement during potential AI layoffs, recommending that employees demonstrate an experimental concept called 'Ralph Loops' to their CEO in exchange for $18,000 worth of API credits. It also advises constantly talking about automation and publicly tagging colleagues like Gary in Slack messages to imply they have been automated out of the company, with the expectation of receiving a new title and equity bump.

---

## [Your AI Use Is Breaking My Brain](https://simonwillison.net/2026/May/11/zombie-internet/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `cyberculture`, `internet` | **Published**: 2026-05-11 | **Novelty**: 23%

The article discusses the proliferation of AI-generated content on the internet, describing it as a 'Zombie Internet' where both humans and bots interact through AI agents. This phenomenon is causing cognitive overload for users trying to filter genuine human contributions from automated ones, impacting writing styles and authenticity online.

---

## [llm 0.32a2](https://simonwillison.net/2026/May/12/llm/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `api-changes`, `llm`, `openai`, `reasoning` | **Published**: 2026-05-12 | **Novelty**: 20%

The release of llm 0.32a2 includes an update where most reasoning-capable OpenAI models now use the /v1/responses endpoint instead of /v1/chat/completions, enabling interleaved reasoning across tool calls for GPT-5 class models and allowing summarized reasoning tokens to be displayed in a different color. Users can hide this reasoning using the -R or --hide-reasoning flags.

---

## [datasette 1.0a29](https://simonwillison.net/2026/May/12/datasette/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `datasette`, `fixes`, `release` | **Published**: 2026-05-12 | **Novelty**: 20%

The release of datasette 1.0a29 includes a new utility method `TokenRestrictions.abbreviated()` for creating '_r' dictionaries, and fixes issues with table headers, column options visibility, mobile Safari display bugs, and a segfault bug in tests due to race conditions between Datasette.close() and Database.close().

---

## [How does AI impact data engineers?](https://vutr.substack.com/p/how-does-ai-impact-data-engineers)

**Source**: VuTrinh. | **Tags**: `ai`, `data-engineering`, `productivity`, `replacement`, `skills` | **Published**: 2026-05-12 | **Novelty**: 19%

The article discusses how AI impacts data engineers by focusing on the dual aspects of potential job replacement and productivity boosts. It emphasizes the importance of maintaining foundational skills, like decision-making and implementation, as key areas where humans still outshine AI. The author provides specific examples such as reviewing commit changes with extensive code diffs, highlighting that despite AI's potential to automate some tasks, thorough human oversight remains essential.

---

## [Granite Embedding Multilingual R2: Open Apache 2.0 Multilingual Embeddings with 32K Context — Best Sub-100M Retrieval Quality](https://huggingface.co/blog/ibm-granite/granite-embedding-multilingual-r2)

**Source**: Hugging Face - Blog | **Tags**: `embedding`, `modeling`, `multilingual`, `optimization` | **Published**: 2026-05-14

The article introduces two multilingual embedding models from IBM Granite, specifically the 97M and 311M parameter versions. Notable is their high performance across 200+ languages without requiring a task-specific instruction prefix, and the provision of optimized ONNX and OpenVINO weights for CPU inference. The code examples demonstrate how to use these models in various frameworks like LangChain, LlamaIndex, and Haystack.

---

## [I spent 12 Hours rebuilding my Junior year project: Part 1 - The Extract Load](https://vutr.substack.com/p/i-spent-12-hours-rebuilding-my-junior)

**Source**: VuTrinh. | **Tags**: `airflow`, `aws`, `pipeline`, `snowflake`, `terraform` | **Published**: 2026-05-14

The article details a comprehensive data ingestion pipeline using Airflow for scheduling and orchestrating tasks, Terraform for infrastructure management, and AWS services like S3 and Snowflake for storage and processing. Notably, it includes a two-pass setup to enable Snowflake's temporary credentials via STS AssumeRole after creating the IAM role, ensuring secure access without sharing secrets directly.

---

## [Unlocking asynchronicity in continuous batching](https://huggingface.co/blog/continuous_async)

**Source**: Hugging Face - Blog | **Tags**: `asynchronous`, `batching`, `generation`, `transformers` | **Published**: 2026-05-14

The article describes an async continuous batching method that increases generation speed by nearly 22% for a large model on long text sequences. Key innovations include using two memory slots and carry-over masks to prevent data corruption and enable overlapping CPU and GPU work. The full implementation is in the transformers library, with entry points like continuous_batching.py.

---

## [What is Code](https://martinfowler.com/articles/what-is-code.html)

**Source**: Martin Fowler | **Tags**: `abstraction`, `coding`, `domain-driven-design`, `llm`, `vocabulary` | **Published**: 2026-05-12

The article emphasizes that coding's future lies not just in writing instructions faster with LLMs, but in developing and refining conceptual models through explicit vocabulary. It highlights the importance of Domain-Driven Design's ubiquitous language and bounded contexts, and provides examples like a pseudo-formal spec for snapshot isolation to illustrate precise coding practices. The article also notes that well-designed code with clear abstractions can act as its own context and harness, providing reliable output even when using LLMs.

---

## [Building Blocks for Foundation Model Training and Inference on AWS](https://huggingface.co/blog/amazon/foundation-model-building-blocks)

**Source**: Hugging Face - Blog | **Tags**: `aws`, `gpu-health`, `ml-training`, `observability` | **Published**: 2026-05-11

The article introduces a four-layer architecture for building high-performance ML training and inference systems on AWS, focusing on key components such as EC2 P-instances, EFA networking, tiered storage, and specific observability tools like Prometheus and Grafana. It highlights the importance of proactive fault detection through GPU health monitoring and alerts, particularly emphasizing error patterns like ECC single-bit errors (SBE) and XID events.

---

## [On Being Mechanically Incompetent ](https://letters.blakeboles.com/p/on-being-mechanically-incompetent)

**Source**: The Adventures of Blake | **Tags**: `knowledge-work`, `mechanical-incompetence`, `outdoor-living` | **Published**: 2026-05-09

The article explores the author's lifelong struggle with mechanical incompetence despite a background in 'knowledge work' and academic achievements. It highlights the author’s journey through various roles, including working at Deer Crossing Camp and attending outdoor programs run by Dev Carey in rural western Colorado. The piece emphasizes the importance of community support and role models in developing basic mechanical skills for those raised in suburban environments.

---

## [EMO: Pretraining mixture of experts for emergent modularity](https://huggingface.co/blog/allenai/emo)

**Source**: Hugging Face - Blog | **Tags**: `document-boundary`, `mixture-of-experts`, `modularity`, `router` | **Published**: 2026-05-08

EMO is a mixture-of-experts model that pretrains with modularity as a first-class objective, enabling the use of only a small subset (12.5%) of its experts for specific tasks while maintaining near-full-model performance. The router in EMO learns to route tokens based on document boundaries, encouraging coherent expert usage and forming semantic clusters during training. This approach contrasts with standard MoEs that often fail to retain full model performance when using selective subsets.

---

## [Pushing Local Models With Focus And Polish](https://lucumr.pocoo.org/2026/5/8/local-models/)

**Source**: Armin Ronacher's Thoughts and Writings | **Tags**: `ds4.c`, `local-models`, `pi-ds4` | **Published**: 2026-05-08

The article focuses on improving the local model experience by using ds4.c as a specific example. It emphasizes the need for a polished, seamless experience akin to hosted providers, mentioning pi-ds4, which embeds ds4 into Pi for easier use with Macs. The author highlights tool parameter streaming and caching improvements as key areas for enhancement.

---
