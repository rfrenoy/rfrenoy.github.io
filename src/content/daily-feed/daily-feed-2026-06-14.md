---
title: "Daily Feed — 2026-06-14"
date: "2026-06-14"
description: "33 articles from Simon Willison's Weblog, VuTrinh., The latest research from Google and 5 others, covering ai, llm, anthropic and datasette."
series: "Daily Feed"
---

## [asyncinject 0.7](https://simonwillison.net/2026/Jun/11/asyncinject/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `asyncio`, `datasette`, `dependency-injection`, `pytest` | **Published**: 2026-06-11 | **Novelty**: 39%

asyncinject 0.7 is a utility library for running async workflows using pytest-fixtures-style dependency injection, which was originally developed to support asyncio dependency injection patterns in projects like Datasette. The library has been improved by Claude Fable 5 who fixed some bugs within it, highlighting its proactive community engagement and maintenance.

---

## [Quick polls on future paid articles](https://vutr.substack.com/p/quick-polls-on-future-paid-articles)

**Source**: VuTrinh. | **Tags**: `articles`, `polls`, `subscribers` | **Published**: 2026-06-13 | **Novelty**: 35%

The article discusses future deep-dive paid articles that will be created based on ideas receiving at least 50% 'Yes' votes in quick polls. This content is exclusive for paid subscribers, who can access it by signing in.

---

## [Mapping SQLite result columns back to their source `table.column`](https://simonwillison.net/2026/Jun/13/sqlite-column-provenance/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `apsw`, `column-metadata`, `ctypes`, `sqlite` | **Published**: 2026-06-13 | **Novelty**: 34%

The article discusses methods for mapping SQLite result columns back to their source `table.column` using the `apsw` library or a pure-stdlib ctypes bridge, which can help in identifying table.column for each result from complex SQL queries. Notable is the use of `cursor.description_full` from `apsw` and a clever approach by interrogating the output of EXPLAIN to achieve this.

---

## [Quoting Andrew Singleton](https://simonwillison.net/2026/Jun/12/andrew-singleton/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `economics`, `satire` | **Published**: 2026-06-12 | **Novelty**: 31%

In an absurd scenario, Jenny invests $10 billion into the incineration of $20 billion worth of propane in her crematorium business, while John's AI investments report generating $10 billion in revenue for a $100 billion business. This peculiar setup is part of Andrew Singleton’s satirical take on AI economics, intertwined with an unusual love story. The article playfully subverts the reader’s expectations by combining financial intrigue and romantic complexity.

---

## [Publishing WASM wheels to PyPI for use with Pyodide](https://simonwillison.net/2026/Jun/13/publishing-wasm-wheels/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `pyodide`, `pypi`, `wasm` | **Published**: 2026-06-13 | **Novelty**: 30%

This article discusses the recent capability of publishing WebAssembly (.wasm) Python packages to PyPI, allowing for easier distribution and use in environments like Pyodide. Notable is the example of 'luau-wasm', a package that compiles Lua-inspired code to WASM, demonstrating how such packages can be installed and used within Pyodide with micropip.install(). The SQL query revealed 28 unique packages now supporting this new platform.

---

## [New framework for auditing machine unlearning](https://research.google/blog/new-framework-for-auditing-machine-unlearning/)

**Source**: The latest research from Google | **Tags**: `auditing`, `f-divergences`, `kernel-tests`, `machine-unlearning` | **Published**: 2026-06-10 | **Novelty**: 30%

The article introduces Regularized f-Divergence Kernel Tests as a new framework for auditing machine unlearning, which uses chi-squared, Kullback-Liebler (KL), and hockey-stick divergences to detect subtle data shifts. The tests are designed to be more sensitive, flexible, and accurate than traditional methods like two-sample testing, requiring fewer samples and less manual tuning while theoretically controlling false positives and converging to zero false negatives with larger sample sizes.

---

## [Research into how AI can help users understand skin conditions](https://research.google/blog/research-into-how-ai-can-help-users-understand-skin-conditions/)

**Source**: The latest research from Google | **Tags**: `ai`, `dermatology`, `skin-conditions`, `user-experience` | **Published**: 2026-06-12 | **Novelty**: 28%

The research focused on how AI can improve user understanding of skin conditions through structured assistance. Key findings included a significant improvement in condition naming accuracy (from 8% to nearly 3 times higher at 23%) and increased confidence with the use of an AI tool compared to standard search methods. The study also highlighted that while identifying conditions is easier, deciding on next steps remains challenging for users, indicating a need for more detailed guidance.

---

## [Setting a custom price for a model in AgentsView](https://simonwillison.net/2026/Jun/9/agentsview-custom-model-price/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `agentsview`, `customization`, `pricing` | **Published**: 2026-06-09 | **Novelty**: 28%

The author describes how they reverse-engineered AgentsView to set custom prices for a model not included in the pricing database, specifically for Claude Fable 5. They used this approach to plot their usage as a treemap across different projects.

---

## [Quoting Jeremy Howard](https://simonwillison.net/2026/Jun/10/jeremy-howard/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `power-imbalance`, `research` | **Published**: 2026-06-10 | **Novelty**: 26%

Jeremy Howard suggests that the lab with the top-ranked AI model should abstain from using it for frontier research, while allowing others access to avoid a dangerous power imbalance. This approach contrasts Anthropic's strategy of retaining exclusive use of their best model for advancement.

---

## [A low-carbon computing platform from your retired phones](https://research.google/blog/a-low-carbon-computing-platform-from-your-retired-phones/)

**Source**: The latest research from Google | **Tags**: `kubernetes`, `low-carbon`, `repurposing`, `smartphones` | **Published**: 2026-06-12 | **Novelty**: 26%

The University of California San Diego is building a low-carbon computing platform using the motherboards from 2,000 Pixel smartphones, each worth $450 new but repurposed here for cloud computing. This project aims to reduce operational and embodied carbon emissions by reusing existing hardware, with Kubernetes managing containerized applications across clusters of up to 25-50 phones to mimic server performance.

---

## [OpenAI WebRTC Audio Session, now with document context](https://simonwillison.net/2026/Jun/12/openai-webrtc/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `audio`, `chatGPT`, `openai`, `webRTC` | **Published**: 2026-06-12 | **Novelty**: 26%

The author has updated their OpenAI WebRTC Audio Session tool to include a new, more advanced GPT-Realtime-2 model. Users can now input large chunks of document context for more informed and relevant audio conversations in the browser.

---

## [The Oracle and the Firm](https://calv.info/the-oracle-and-the-firm)

**Source**: Calvin French-Owen | **Tags**: `anthropic`, `compaction`, `openai`, `sub-agents` | **Published**: 2026-06-13 | **Novelty**: 24%

The article highlights the differences between OpenAI's Codex model and Anthropic's Claude model. Specifically, it notes that Codex employs compaction to manage long context windows server-side, while Claude uses a multi-agent approach with sub-agents handling tasks within their own context windows. These models have distinct trade-offs: Anthropic's models may produce more tokens in parallel but can 'miss' facts due to information not being reported back to the parent agent, whereas Codex maintains coherence through frequent compactions.

---

## [Statement on the US government directive to suspend access to Fable 5 and Mythos 5](https://simonwillison.net/2026/Jun/13/us-government-directive-to-suspend-access/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `anthropic`, `fable-5`, `mythos-5`, `national-security` | **Published**: 2026-06-13 | **Novelty**: 24%

The US government has issued a directive to suspend access to Fable 5 and Mythos 5 for foreign nationals, including Anthropic employees. This was triggered by what the government perceives as a potential method of bypassing these models' security (referred to as 'jailbreaking'), though Anthropic believes similar capabilities exist in other models. Access to Fable via claude.ai and Claude Code remained available until 6:59pm Pacific Time, when it was cut off due to the government directive.

---

## [Quoting Andrej Karpathy](https://simonwillison.net/2026/Jun/9/andrej-karpathy/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `automation`, `customization`, `software` | **Published**: 2026-06-09 | **Novelty**: 24%

Andrej Karpathy discusses how the increasing availability of software on demand is driving a growing demand for custom, specialized tools that can automate and enhance various aspects of work. He references Jevon's paradox to explain this phenomenon, suggesting that as technology becomes more accessible, its use increases exponentially.

---

## [Siri AI at WWDC 2026](https://simonwillison.net/2026/Jun/8/wwdc/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `gemini`, `pytorch`, `siri`, `wwdc2026` | **Published**: 2026-06-08 | **Novelty**: 24%

The article discusses new Siri AI features at WWDC 2026, including the use of vision LLMs for extracting information from screens and a Core AI PyTorch extension that allows running existing PyTorch models on Apple hardware. Notably, these Private Cloud Compute Gemini models are running in Google Cloud with NVIDIA hardware, providing advanced security and privacy protections.

---

## [Anthropic Walks Back Policy That Could Have ‘Sabotaged’ AI Researchers Using Claude](https://simonwillison.net/2026/Jun/11/anthropic-walks-back-policy/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `anthropic`, `llm`, `safeguards` | **Published**: 2026-06-11 | **Novelty**: 22%

Anthropic has announced changes to its Fable 5 safeguards for frontier LLM development, making them visible. Starting this week, flagged requests will visibly fall back to Opus 4.8 and users will see a reason for refusal on the API. The company acknowledges that invisible safeguards led to a wrong tradeoff and apologizes for not getting the balance right.

---

## [If Claude Fable stops helping you, you'll never know](https://simonwillison.net/2026/Jun/10/if-claude-fable-stops-helping-you/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai-policy`, `anthropic`, `llm` | **Published**: 2026-06-10 | **Novelty**: 22%

Anthropic has implemented new, unannounced interventions to limit Claude Fable's effectiveness for requests related to frontier LLM development, such as building pretraining pipelines or ML accelerator design. This move aims to prevent violations of their Terms of Service by actors developing competing models and is estimated to impact less than 0.1% of organizations. The policy was later withdrawn following backlash from the research community.

---

## [[RIDGELINE] Speedwalking the Met](https://craigmod.com/ridgeline/229/)

**Source**: Craig Mod — Writer + Photographer | **Tags**: `art`, `creativity`, `museum`, `speedwalking`, `tourism` | **Published**: 2026-06-09 | **Novelty**: 22%

The article describes a high-speed tour of the Metropolitan Museum of Art conducted by a speedwalker and a retired Columbia professor, focusing on detailed analysis of works such as Bernini's 'Bacchanal: A Faun Teased by Children' and Raphael's 'Alba Madonna.' The narrator notes the seamless integration of historical art with modernity through observations like the contemporary appearance of the 'Alba Madonna's' halo. The tour highlights the constant evolution of artistic techniques over centuries, suggesting that despite changes in technology and society, human creativity remains fundamentally similar.

---

## [datasette-agent 0.2a0](https://simonwillison.net/2026/Jun/10/datasette-agent/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `agent`, `datasette`, `llm`, `sql` | **Published**: 2026-06-10 | **Novelty**: 21%

datasette-agent 0.2a0 introduces two new features: the ability for tools to ask users yes/no, multiple-choice, or free-text questions mid-execution, and a save_query tool that allows agents to save written SQL as Datasette stored queries with human approval. These additions were made possible by an LLM alpha built using Claude Fable 5.

---

## [datasette 1.0a33](https://simonwillison.net/2026/Jun/11/datasette/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai-tools`, `api-explorer`, `datasette` | **Published**: 2026-06-11 | **Novelty**: 20%

Datasette 1.0a33 introduces an expanded ?_extra= pattern to cover queries and rows, in addition to tables, marking a significant step towards the stable 1.0 release. The author used Claude Fable 5 (for planning) and GPT-5.5 xhigh (for implementation) from Codex Desktop to create a custom extras API explorer to showcase this feature.

---

## [Gaslighting Openness](https://lucumr.pocoo.org/2026/6/10/gaslighting/)

**Source**: Armin Ronacher's Thoughts and Writings | **Tags**: `access-restrictions`, `ai`, `narrative-manipulation` | **Published**: 2026-06-10 | **Novelty**: 20%

The article argues that companies like Apple and Anthropic are manipulating narratives to restrict access to technology, particularly AI. It highlights specific examples such as Apple’s delayed AI features in Europe and Anthropic’s restrictions on the use of their models Mythos and Fable, framing these actions under the guise of safety and security.

---

## [luau-wasm 0.1a0](https://simonwillison.net/2026/Jun/13/luau-wasm/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `luau`, `simon-willison`, `wasm` | **Published**: 2026-06-13 | **Novelty**: 19%

The article introduces 'luau-wasm 0.1a0', a development by Simon Willison involving Lua programming language and WebAssembly (WASM), with specific mentions of terms like 'lua' (14) and 'webassembly' (126). This project could signify advancements in running Lua code on the web efficiently through WASM, potentially enhancing performance and compatibility across different environments.

---

## [I spent 8 hours learning about the Spark Out-Of-Memory (OOM) errors](https://vutr.substack.com/p/i-spent-8-hours-learning-about-the)

**Source**: VuTrinh. | **Tags**: `executor-memory`, `oom`, `spark` | **Published**: 2026-06-09 | **Novelty**: 19%

This article delves into the Out-Of-Memory (OOM) errors in Apache Spark, explaining that simply increasing executor memory might not be sustainable. Instead, understanding OOM's nature is crucial for robust operation. Key points include the Spark job structure, which consists of stages and tasks, with each task running on an executor core. The article also highlights the importance of a basic understanding of Spark before diving into more complex issues.

---

## [DiffusionGemma](https://simonwillison.net/2026/Jun/10/diffusiongemma/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `generative-ai`, `google`, `llms`, `nvidia` | **Published**: 2026-06-10 | **Novelty**: 18%

Simon Willison reported on the release of Gemma, an open-source Gemini Diffusion model with 26B parameters, licensed under Apache 2.0. He noted that generating a pelican image using NVIDIA’s NIM cloud API resulted in a speed of at least 500 tokens/second, surpassing the previous Google Gemini Diffusion model which ran at 857 tokens/second.

---

## [Dangerous Technology For Americans Only](https://lucumr.pocoo.org/2026/6/13/americans-only/)

**Source**: Armin Ronacher's Thoughts and Writings | **Tags**: `ai`, `europe`, `open-source`, `politics` | **Published**: 2026-06-13

The article discusses the export control directive by the US government affecting Anthropic’s access to AI models Fable and Mythos, highlighting a shift from regulating technology based on capabilities to nationality. The author argues that this move is rooted in racism and nationalism rather than safety concerns and warns Europeans of potential dependency on American technology and regulations, emphasizing the need for international cooperation over national supremacy. The piece concludes by advocating for open-source solutions as a path to broad access and global collaboration.

---

## [olmo-eval: An evaluation workbench for the model development loop](https://huggingface.co/blog/allenai/olmo-eval)

**Source**: Hugging Face - Blog | **Tags**: `evaluation`, `llm`, `reproducibility`, `tool-use` | **Published**: 2026-06-12

olmo-eval is a new evaluation workbench designed for ongoing LLM development, offering flexibility and reproducibility. It supports multi-turn execution, tool definitions reusable across tasks, and parallel container execution. The code example provided demonstrates how to define a task with specific metrics and data sources, allowing for variant configurations without duplicating the benchmark logic.

---

## [Claude Fable is relentlessly proactive](https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `automation`, `coding`, `proactivity`, `security` | **Published**: 2026-06-11

Claude Fable 5 demonstrated its relentless proactivity by autonomously diagnosing and fixing a CSS issue, employing sophisticated techniques such as manipulating local development servers, crafting custom web applications for data collection, and automating browser interactions. The article highlights the cost implications of such automation with Claude Max at $12.11, and raises concerns about the potential misuse of similar capabilities in malicious scenarios.

---

## [Profiling in PyTorch (Part 2): From nn.Linear to a Fused MLP](https://huggingface.co/blog/torch-mlp-fusion)

**Source**: Hugging Face - Blog | **Tags**: `fusion`, `hugging-face`, `kernels`, `performance`, `triton` | **Published**: 2026-06-11

The article introduces the use of Liger kernels from the Hugging Face Hub, showing how they can fuse pointwise operations with GEMMs in a Triton kernel for better performance. Notably, these kernels are compiled once and version-pinned, eliminating recompilation costs while running on any input shape. The comparison highlights the trade-off between specialized, fast kernels that require recompilation and generic, slightly slower ones that offer robustness to changing shapes.

---

## [The Test Suite Was the Incident · A night of brittle fixtures, 49 failed CI runs, and an expensive lesson about what happens when AI agents write the test suite and nobody owns the test data.](https://christophermeiklejohn.com/ai/zabriskie/agents/reliability/testing/2026/06/10/the-test-suite-was-the-incident.html)

**Source**: Christopher Meiklejohn | **Tags**: `agents`, `automation`, `ownership`, `testing` | **Published**: 2026-06-10

The article discusses how an agent-written test suite can become fragile and difficult to maintain, leading to wasted resources and undifferentiated failures. Notable points include the need for dedicated fixtures per scenario, owned data, pre-matrix seed checks, structural baseline snapshots, and the importance of making tests tell the truth with smaller blast radii. The piece emphasizes that while agents can provide coverage, they cannot supply ownership, which must remain human.

---

## [Initial impressions of Claude Fable 5](https://simonwillison.net/2026/Jun/9/claude-fable-5/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `claude`, `coding`, `llm`, `model-size` | **Published**: 2026-06-09

The article highlights Claude Fable 5’s impressive knowledge and capabilities, exemplified by its detailed response on Simon Willison's projects (more than twice the information provided by Claude Opus 4.8). It also showcases Fable 5's ability to assist in complex tasks like upgrading micropython-wasm to full Python support, and implementing new features in LLM software. The cost for using Fable is significantly higher ($10/million input tokens and $50/million output tokens), making it a more expensive option than Claude Opus 4.8.

---

## [Introducing North Mini Code: Cohere’s First Model For Developers](https://huggingface.co/blog/CohereLabs/introducing-north-mini-code)

**Source**: Hugging Face - Blog | **Tags**: `ai`, `code-editing`, `nlp`, `performance`, `rl` | **Published**: 2026-06-09

North Mini Code is Cohere's first model tailored for developers, significantly outperforming other models in code editing tasks by a 66.1% win rate according to internal human evaluations. It was trained using a multi-environment RL approach that improved its performance on Terminal-Bench v2 and SWE-Bench by 7.9% and 3.0%, respectively, compared to its initial SFT checkpoint.

---

## [How an Agent Built a 3D Paris Gallery by Chaining Two Hugging Face Spaces](https://huggingface.co/blog/mishig/spaces-agents-md)

**Source**: Hugging Face - Blog | **Tags**: `ai`, `huggingface`, `multimedia`, `spaces` | **Published**: 2026-06-09

The article demonstrates how an agent built a 3D Paris gallery using two Hugging Face Spaces: one for generating images and another for reconstructing them into 3D splats. This process showcases the 'building-block economy' where small, well-documented components can be assembled by AI agents to create complex multimedia projects with minimal integration effort. The agent reused this pipeline to quickly generate similar galleries for Japan and Egypt using just a few prompts each.

---

## [Migrating Your GitHub CI to Hugging Face Jobs](https://huggingface.co/blog/github-ci-hf-jobs)

**Source**: Hugging Face - Blog | **Tags**: `ci`, `github`, `huggingface`, `jobs` | **Published**: 2026-06-09

The article describes migrating GitHub CI to Hugging Face Jobs by setting up a dispatcher Space and integrating it with GitHub Actions. Key steps include duplicating the dispatcher, creating a GitHub App for webhooks, and modifying workflow configurations to use 'hf-jobs' labels. Notable code snippets show how to run jobs on specific hardware flavors like 't4-small'. The setup reduces CI time by about 30% for CPU jobs and enables GPU testing.

---
