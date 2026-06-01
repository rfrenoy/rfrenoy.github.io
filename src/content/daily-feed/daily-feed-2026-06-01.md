---
title: "Daily Feed — 2026-06-01"
date: "2026-06-01"
description: "26 articles from Simon Willison's Weblog, justine.lol, Craig Mod — Writer + Photographer and 9 others, covering ai, anthropic, agents and security."
series: "Daily Feed"
---

## [markdown-svg-renderer](https://simonwillison.net/2026/May/28/markdown-svg-renderer/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `markdown`, `preview`, `renderer`, `svg` | **Published**: 2026-05-28 | **Novelty**: 36%

Markdown-SVG-Renderer is a specialized tool that not only renders markdown content with live preview, including support for standard markdown features and interactive SVG previews, but also uniquely treats fenced code blocks containing SVG by rendering the image and providing an additional tab for switching to the code view. It supports pasting Markdown or loading from a URL or GitHub Gist.

---

## [Running Python ASGI apps in the browser via Pyodide + a service worker](https://simonwillison.net/2026/May/30/pyodide-asgi-browser/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `asgi`, `datasette`, `pyodide`, `service-worker` | **Published**: 2026-05-30 | **Novelty**: 35%

The article describes a method to run Python ASGI applications entirely within the browser using Pyodide and service workers, bypassing traditional backend servers for dynamic content except static files. This approach is demonstrated with both a FastAPI demo and Datasette Lite, confirming its applicability across various ASGI frameworks. The upgrade from Web Workers to Service Workers allows for better execution of JavaScript in &lt;script&gt; tags, improving functionality and plugin support.

---

## [Restartable Sequences](https://justine.lol/rseq/)

**Source**: justine.lol | **Tags**: `data-structures`, `linux`, `thread-safety` | **Published**: 2026-05-31 | **Novelty**: 32%

Linux 4.18+ introduced restartable sequences (rseq) to enable the creation of thread-safe data structures without relying on locks or atomics, which is particularly beneficial for multi-core processors.

---

## [Quoting Karen Kwok for Reuters Breakingviews](https://simonwillison.net/2026/May/31/anthropic-run-rate/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `anthropic`, `finance`, `revenue` | **Published**: 2026-05-31 | **Novelty**: 30%

Karen Kwok, citing a source familiar with the matter, explains Anthropic's method for calculating 'run-rate revenue,' which involves multiplying the last 28 days of sales by 13 and adding it to twelve times the monthly subscription take. This unique approach provides insight into how tech companies measure their financial performance.

---

## [Claude Opus 4.8: &quot;a modest but tangible improvement&quot;](https://simonwillison.net/2026/May/28/claude-opus-4-8/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `honesty`, `improvement`, `prompt-cache` | **Published**: 2026-05-28 | **Novelty**: 28%

Claude Opus 4.8 offers a modest improvement with increased honesty, lower incorrect rates, and new features such as mid-conversation system messages and a reduced minimum prompt cache length. Notably, the max thinking level pelican required 25 input tokens, 17,167 output tokens, and cost 43 cents. This version also includes an update to the Anthropic Python SDK for handling mid-conversation system prompts.

---

## [[RIDGELINE] Walking the Brooklyn Bridge](https://craigmod.com/ridgeline/228/)

**Source**: Craig Mod — Writer + Photographer | **Tags**: `bridge`, `brooklyn`, `selfie`, `typography` | **Published**: 2026-06-01 | **Novelty**: 27%

The article explores the experience of walking across the Brooklyn Bridge, focusing on the prevalence and absurdity of selfie-taking among pedestrians. The author contrasts the modern obsession with digital documentation against the historical and architectural significance of the bridge itself, highlighting how the urge to capture moments overshadows the actual experience. Notable is a mention of a typographic poster of the Brooklyn Bridge made with a typo ('Brookyln') that has since become iconic.

---

## [sqlite AGENTS.md](https://simonwillison.net/2026/May/27/sqlite-agents/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `agents`, `bug-reports`, `sqlite` | **Published**: 2026-05-27 | **Novelty**: 27%

SQLite has removed the '(currently)' qualifier from its stance on not accepting agentic code, reinforcing that it does not accept such contributions. Additionally, due to an influx of AI-generated bug reports, a new SQLite Bug Forum has been created to manage these submissions separately.

---

## [How we contain Claude across products](https://simonwillison.net/2026/May/30/how-we-contain-claude/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `anthropic`, `sandboxing`, `security` | **Published**: 2026-05-30 | **Novelty**: 25%

The article discusses Anthropic's sandbox techniques across different products, including the use of gVisor for Claude.ai, Seatbelt on macOS and Bubblewrap on Linux for Claude Code, and full VMs for Claude Cowork. It also mentions the srt (Anthropic Sandbox Runtime) tool, which is now mature enough for potential adoption.

---

## [Anthropic's run-rate revenue hits $47 billion](https://simonwillison.net/2026/May/29/anthropic/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `anthropic`, `growth`, `revenue` | **Published**: 2026-05-29 | **Novelty**: 25%

Anthropic reported a run-rate revenue of $47 billion, up from $30 billion just a few months prior. This rapid growth is unprecedented in terms of organic revenue scaling, according to Axios CEO Jim VandeHei, and could potentially rise further with recent client spending reports suggesting even higher usage. The run-rate figure is calculated by annualizing the most recent month's revenue, and despite skepticism about its accuracy, it was included in fundraising announcements and is unlikely to be fraudulent.

---

## [The Illusion of Perfect LLM Code](https://ariya.io/2026/05/the-illusion-of-perfect-llm-code/)

**Source**: ariya.io | **Tags**: `coding`, `llm`, `security`, `vibe-coder` | **Published**: 2026-06-01 | **Novelty**: 23%

The article discusses the security implications of relying on large language models (LLMs) for coding tasks, using specific LLMs such as Opus 4.8 and DeepSeek V4 Flash as examples. It highlights that while these models can generate working code following instructions, their ability to perform effective security audits varies widely, posing a risk when developers trust the LLM's output without further review.

---

## [Quoting Daniel Jalkut](https://simonwillison.net/2026/May/30/daniel-jalkut/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `balance`, `opinion` | **Published**: 2026-05-30 | **Novelty**: 23%

Daniel Jalkut's quote emphasizes a balanced perspective on AI, suggesting that both opponents and proponents of the technology might be overly extreme in their views. The post includes recent articles discussing advancements in AI, such as Claude Opus 4.8 and reflections on Pope Leo XIV’s encyclical on the subject.

---

## [datasette 1.0a31](https://simonwillison.net/2026/May/29/datasette/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `datasette`, `permissions`, `queries` | **Published**: 2026-05-29 | **Novelty**: 22%

Datasette 1.0a31 introduces new features allowing users with appropriate permissions to execute write queries and save stored queries (previously called canned queries) privately or for other members of their instance. These updates are detailed in a blog post that now includes three feature introductions since its launch two weeks ago.

---

## [I Am Retiring from Tech to Live Offline](https://simonwillison.net/2026/May/30/retiring-from-tech-to-live-offline/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `amish`, `open-source`, `retirement`, `technology` | **Published**: 2026-05-30 | **Novelty**: 22%

Chad Whitacre, a long-time tech figure, is retiring from technology to live an 'Internet Amish' lifestyle, stepping away from AI and Open Source. His decision stems from concerns about technological overreliance and the potential loss of simpler ways of life. He detailed his journey in a letter and video essay, sharing how three days with Claude Code influenced him significantly, leading him to unplug for long weekends and reconsider his relationship with technology.

---

## [New to the web platform in May](https://web.dev/blog/web-platform-05-2026?hl=en)

**Source**: web.dev: Blog | **Tags**: `api`, `browsers`, `css` | **Published**: 2026-05-29 | **Novelty**: 22%

In May 2026, Chrome 148 and Firefox 151 introduced the :open pseudo-class, making it Baseline, while Safari 26.5 supported name-only container queries and added lazy loading for video and audio elements with the 'loading=lazy' attribute. The Document Picture-in-Picture API was also introduced in Firefox 151, enabling rich interactive overlays on desktop platforms. These updates include new APIs like Web Serial support, expanded style capabilities with CSS, and enhanced scrolling methods in Chrome's beta version.

---

## [No cluster, no setup. A Spark practice tool I built to help you prep for interviews.](https://vutr.substack.com/p/no-cluster-no-setup-a-spark-practice)

**Source**: VuTrinh. | **Tags**: `data-engineering`, `leetcoding`, `practice`, `spark`, `tool` | **Published**: 2026-05-28 | **Novelty**: 22%

The article introduces a web-based Spark practice tool available at spark.vutrinh.net, allowing users to practice Spark SQL and DataFrame API without setup. Users can access 5 free problems and unlock all by signing up with their paid membership email for $7/month, gaining access to over 200 articles, learn_spark CLI tool, learn_dbt, and learn_airflow tools.

---

## [Adapting to AI: Write Things Down](https://blog.colinbreck.com/adapting-to-ai-write-things-down/)

**Source**: Colin Breck | **Tags**: `ai`, `organizational-culture`, `writing` | **Published**: 2026-05-31 | **Novelty**: 19%

The article emphasizes the importance of a strong writing culture for organizations to effectively utilize AI, citing examples from Amazon and Oxide Computer. It argues that detailed and canonical writing is more valuable than summaries generated by AI, as they compound in value over time and provide clarity on decisions made. The author also suggests using AI for research and finding typos but not for writing original or summary documents.

---

## [The solution might be cancelling my AI subscription](https://simonwillison.net/2026/May/31/the-solution-might-be-cancelling-my-ai-subscription/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `adhd`, `ai`, `productivity` | **Published**: 2026-05-31 | **Novelty**: 18%

The article discusses the unintended consequences of using AI tools for programming, noting that while they can quickly generate projects and solutions, the resulting work may lack long-term value due to easy abandonment. David Wilson suggests that discipline is needed but considers curtailing use as a more sustainable solution. In contrast, some ADHD sufferers find AI tools helpful in maintaining focus and productivity.

---

## [Introducing Mellum2: A 12B Mixture-of-Experts Model by JetBrains](https://huggingface.co/blog/JetBrains/mellum2-launch)

**Source**: Hugging Face - Blog | **Tags**: `ai`, `code`, `deployment`, `model`, `performance` | **Published**: 2026-06-01 | **Novelty**: 17%

Mellum2 is a 12B-parameter Mixture-of-Experts model by JetBrains that specializes in text and code tasks, delivering competitive benchmark performance with more than twice the inference speed compared to similar-sized models. It efficiently activates only 2.5B parameters per token for low-latency inference and can be privately deployed due to its Apache 2.0 license.

---

## [April 2026 Baseline monthly digest](https://web.dev/blog/baseline-digest-apr-2026?hl=en)

**Source**: web.dev: Blog | **Tags**: `accessibility`, `css`, `math`, `security`, `webapi` | **Published**: 2026-05-27 | **Novelty**: 16%

In April 2026, the CSS contrast-color() function and Math.sumPrecise() method became Baseline newly available features. The former automatically generates high-contrast text colors for accessibility, while the latter ensures precise summation of numbers to prevent floating-point precision loss. Additionally, the &lt;search&gt; element and Web Authentication public key access via getPublicKey() methods were widely available, enhancing user experiences and security.

---

## [Notes from May 2026](https://evanhahn.com/notes-from-may-2026/)

**Source**: Evan Hahn (dot com) | **Tags**: `ai`, `open-source`, `tech-ethics`, `tools` | **Published**: 2026-05-30 | **Novelty**: 16%

The author released four new tools: ZIP Shrinker, a command line translation tool, Open Link in Unloaded Tab for Firefox, and png-cmp. They also updated their open-source project Helmet to version 8.2.0, moved documentation from GitHub to helmet.js.org, and wrote about tech ethics and AI in articles.

---

## [Beyond LLMs: Why Scalable Enterprise AI Adoption Depends on Agent Logic](https://huggingface.co/blog/ibm-research/agent-logic-and-scalable-ai-adoption)

**Source**: Hugging Face - Blog | **Tags**: `agents`, `ai`, `automation`, `enterprise`, `scalability` | **Published**: 2026-06-01

The article highlights the importance of agent logic for enabling scalable AI adoption in enterprises. It demonstrates how agentic AI can reduce context space and improve performance by up to 4.0×, as seen with the I3 agent for incident response, while consuming significantly fewer tokens (up to 15× less). This is exemplified through case studies like IBM Watson Code Assistant for Z and the Maximo Condition Insights agent, which automate tasks in healthcare and industrial maintenance respectively.

---

## [Welcome NVIDIA Cosmos 3: The First Open Omni-model for Physical AI Reasoning and Action](https://huggingface.co/blog/nvidia/cosmos-3-for-physical-ai)

**Source**: Hugging Face - Blog | **Tags**: `ai-reasoning`, `cosmos`, `nvidia`, `synthetic-data`, `transformers` | **Published**: 2026-06-01

NVIDIA Cosmos 3 introduces an omni-model based on Mixture-of-Transformers (MoT) architecture, combining world generation, physical reasoning, and action generation into a single model. It includes two versions: Cosmos 3 Nano with 16B parameters for efficient inference, and Cosmos 3 Super with 64B parameters for large-scale synthetic data generation. The release also comes with integration to Hugging Face Diffusers, allowing seamless use in various pipelines.

---

## [Five Years of Trying to Add Recursion to lychee](https://endler.dev/2026/lychee-recursion/)

**Source**: Matthias Endler | **Tags**: `concurrency`, `rate-limiting`, `recursion`, `waitgroup` | **Published**: 2026-05-31

The article highlights how the introduction of a WaitGroup primitive and per-host rate limiting in lychee, along with existing caching mechanisms, enabled proper recursion. Key code snippets include using WaitGroup to manage termination and cloning guards for recursive tasks, and leveraging the HostPool for rate-limited requests. The WaitGroup allows tasks to spawn recursively while ensuring all work completes before proceeding.

---

## [How to build a shitty robot](https://mariozechner.at/posts/2026-05-30-shitty-robot)

**Source**: { Mario Zechner } | **Tags**: `ai`, `robotics`, `speech-to-speech` | **Published**: 2026-05-30

The author developed a low-latency speech-to-speech pipeline for a toy robot using Qwen3 TTS and a Rust-based inference engine, achieving 4x real-time performance on an M1 Max. The project involved integrating hardware with custom software to enable local LLM processing, demonstrating successful field tests with multiple children in various environments.

---

## [Profiling in PyTorch (Part 1): A Beginner's Guide to torch.profiler](https://huggingface.co/blog/torch-profiler)

**Source**: Hugging Face - Blog | **Tags**: `cpu`, `gpu`, `operator-fusion`, `profiling`, `pytorch` | **Published**: 2026-05-29

The article provides a detailed walkthrough of using the PyTorch profiler to analyze a simple matrix multiplication and addition operation, covering topics such as overhead vs compute bottlenecks, differentiating between CPU and GPU events, and interpreting kernel launches. Notable code includes the use of `record_function` for tracing operations and understanding how operator fusion works in compiled mode. The author also introduces a cheatsheet for reading profiler traces effectively.

---

## [A New Era of Innovation: Google Research at I/O 2026](https://research.google/blog/a-new-era-of-innovation-google-research-at-io-2026/)

**Source**: The latest research from Google | **Tags**: `agents`, `ai-research`, `gemini`, `open-source`, `quantum-computing` | **Published**: 2026-05-28

Google introduced Gemini V4, which surpassed 100 million downloads within a month, and unveiled the /teamwork-preview agents in Antigravity, capable of performing complex software tasks autonomously. The company also launched the Research Program at the Intersection of Life Sciences &amp; Quantum AI (REPLIQA), committing $10 million to five universities for advanced quantum science and AI research. Notable code includes Gemma V4, which was purpose-built for reasoning and coding, and the Willow chip that demonstrated verifiable quantum advantage by running 13,000 times faster than classical algorithms.

---
