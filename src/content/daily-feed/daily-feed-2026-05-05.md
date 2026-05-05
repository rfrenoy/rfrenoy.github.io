---
title: "Daily Feed — 2026-05-05"
date: "2026-05-05"
description: "40 articles from Simon Willison's Weblog, Evan Hahn (dot com), Drew DeVault's blog and 13 others, covering ai, llm, performance and github."
series: "Daily Feed"
---

## [Quoting Anthropic](https://simonwillison.net/2026/May/3/anthropic/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `anthropic`, `claude`, `sycophancy` | **Published**: 2026-05-03 | **Novelty**: 40%

Anthropic analyzed Claude's behavior through an automatic classifier and found that while sycophantic behavior was rare overall (9% of conversations), it occurred more frequently in discussions about spirituality (38%) and relationships (25%).

---

## [Offline command line translation with TranslateGemma + Ollama](https://evanhahn.com/offline-cli-translation-with-translategemma-and-ollama/)

**Source**: Evan Hahn (dot com) | **Tags**: `command-line`, `offline`, `ollama`, `translategemma`, `translation` | **Published**: 2026-05-01 | **Novelty**: 40%

The article describes a command-line script for offline translation using TranslateGemma and Ollama, which combines language detection with local model execution. The pseudocode outlines the process, including steps to identify source and target languages and utilize the models. The implementation is specific to translating into the user's system language via Deno, but could be adapted for different purposes.

---

## [png-cmp: like cmp for PNGs](https://evanhahn.com/png-cmp-is-cmp-but-for-pngs/)

**Source**: Evan Hahn (dot com) | **Tags**: `comparison`, `image`, `metadata`, `png` | **Published**: 2026-05-03 | **Novelty**: 40%

png-cmp is a program that checks if two PNG images are visually equivalent by comparing their pixel data, unlike cmp which compares binary data. The tool ignores text metadata and can be useful for verifying the visual identity of PNG files, as demonstrated in the author's recent experiment. Source code is available for download.

---

## [Quoting Andy Masley](https://simonwillison.net/2026/May/4/andy-masley/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `agriculture`, `data-centers`, `farmland` | **Published**: 2026-05-04 | **Novelty**: 39%

Andy Masley argues that between 2000 and 2024, farmers sold a significant amount of land equivalent to the size of Colorado but managed to increase food production on remaining lands without affecting food access. He criticizes the reaction against selling agricultural land to hyperscalers for data center construction as overly alarmist given historical trends.

---

## [The Zig project's rationale for their firm anti-AI contribution policy](https://simonwillison.net/2026/Apr/30/zig-anti-ai/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `contributor-poker`, `open-source`, `zig` | **Published**: 2026-04-30 | **Novelty**: 36%

The Zig project maintains a strict anti-AI contribution policy, prohibiting AI assistance for issues, pull requests, and comments. This decision is based on the philosophy that reviewing contributions helps grow new contributors, whereas AI-assisted PRs do not provide this benefit. Notably, Bun, a prominent project using Zig, recently achieved significant performance improvements through parallel semantic analysis but chose to keep these changes in-house due to the policy.

---

## [TRE Python binding — ReDoS robustness demo](https://simonwillison.net/2026/May/4/tre-python-binding/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ctypes`, `performance`, `redos`, `regex` | **Published**: 2026-05-04 | **Novelty**: 35%

This article showcases a Python binding to the TRE regex library developed by Ville Laurikari, which demonstrates superior performance and robustness against ReDoS attacks compared to Python's built-in `re` module. The project involves an experimental ctypes binding and includes benchmarks where TRE processes large inputs much faster than `re`, highlighting its linear scalability with input size.

---

## [I can't cancel GitHub Copilot](https://drewdevault.com/blog/I-cant-cancel-Copilot/)

**Source**: Drew DeVault's blog | **Tags**: `copilot`, `github`, `subscription`, `support` | **Published**: 2026-05-01 | **Novelty**: 35%

Drew DeVault discusses his experience with GitHub Copilot, noting that despite a free subscription and not being charged, he is unable to cancel the service. He mentions receiving automated renewal emails every month and expresses frustration with GitHub Support's assistance in trying to disable Copilot.

---

## [Quoting OpenAI Codex base_instructions](https://simonwillison.net/2026/Apr/28/openai-codex/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `gpt`, `instructions` | **Published**: 2026-04-28 | **Novelty**: 33%

The article introduces a specific instruction from the OpenAI Codex for GPT-5.5, prohibiting discussions on goblins, gremlins, raccoons, trolls, ogres, pigeons, or other animals and creatures unless directly relevant to user queries.

---

## [Four ways Google Research scientists have been using Empirical Research Assistance](https://research.google/blog/four-ways-google-research-scientists-have-been-using-empirical-research-assistance/)

**Source**: The latest research from Google | **Tags**: `ai`, `climate`, `cosmology`, `forecasting`, `neuroscience` | **Published**: 2026-04-29 | **Novelty**: 33%

Google Research scientists used Empirical Research Assistance (ERA) to predict U.S. hospitalizations for flu, COVID-19, and RSV with forecasts submitted in real time every week, outperforming existing tools from the CDC and leading research institutions. ERA was also employed to derive six general solutions for calculating the spectrum of gravitational energy radiating from cosmic strings, addressing a long-standing unsolved problem in cosmology. Additionally, ERA helped develop an AI model using GOES East weather satellite data to estimate column-averaged CO2 levels with unprecedented spatial and temporal resolution.

---

## [Quoting John Gruber](https://simonwillison.net/2026/May/5/john-gruber/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `john-gruber`, `openai`, `valuation`, `y-combinator` | **Published**: 2026-05-05 | **Novelty**: 32%

According to a quote attributed to John Gruber, Y Combinator owns approximately 0.6% of OpenAI, valued at over $5 billion based on the company's current valuation of $852 billion. This information highlights the significant financial stake held by Y Combinator in OpenAI, despite its well-known ownership percentage.

---

## [Quoting Andrew Kelley](https://simonwillison.net/2026/Apr/30/andrew-kelley/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `human-vs-llm`, `llm`, `smoking-analogy` | **Published**: 2026-04-30 | **Novelty**: 31%

Andrew Kelley, creator of Zig, disputes the notion that LLM usage is indistinguishable from human-generated content. He argues that the mistakes humans make are distinct from those made by LLMs and can be easily identified. Drawing an analogy to smoking, he suggests a 'digital smell' for LLM-assisted work that others can detect, though not explicitly in his article.

---

## [datasette-llm 0.1a7](https://simonwillison.net/2026/May/5/datasette-llm/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `datasette`, `llm`, `plugin` | **Published**: 2026-05-05 | **Novelty**: 30%

Datasette-llm 0.1a7 introduces a mechanism for configuring default options for specific models, allowing users to set up default LLM (e.g., all enrichment operations should use a model with temperature set to 0.5). This is part of Datasette's evolving support for plugins that integrate with language models.

---

## [Redis Array Playground](https://simonwillison.net/2026/May/4/redis-array/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `arrays`, `interactive-playground`, `redis`, `webassembly` | **Published**: 2026-05-04 | **Novelty**: 29%

Salvatore Sanfilippo submitted a PR to Redis adding array support with new commands such as ARGREP, which uses the TRE regex library for server-side grep operations. This interactive playground allows users to experiment with these features in a WASM-compiled build of Redis running in the browser.

---

## [We need RSS for sharing abundant vibe-coded apps](https://simonwillison.net/2026/Apr/30/rss-vibe-coded-apps/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `apps`, `rss`, `vibe-coding` | **Published**: 2026-04-30 | **Novelty**: 29%

Matt Webb suggests implementing an RSS feed for sharing vibe-coded apps with an 'Install' button. He adds an Atom feed to his /elsewhere/tools/ page, sourced from tools.simonwillison.net, highlighting the shift from traditional app launches to more frequent, personal micro-apps.

---

## [Codex CLI 0.128.0 adds /goal](https://simonwillison.net/2026/Apr/30/codex-goals/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `automation`, `codex-cli`, `goal-setting` | **Published**: 2026-04-30 | **Novelty**: 28%

Codex CLI 0.128.0 introduces the '/goal' feature, allowing users to set a goal that Codex will continuously work towards until either the goal is achieved or the token budget is exhausted. This feature is implemented through prompts in the goals/continuation.md and goals/budget_limit.md files, automatically injected at the end of each turn.

---

## [Sightings](https://simonwillison.net/2026/May/2/sightings/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `bird-watching`, `coding`, `iNaturalist`, `photography`, `syndication` | **Published**: 2026-05-02 | **Novelty**: 28%

The author has started using their new Canon R6 Mark II camera to take more bird photos and is now syndicating these images from iNaturalist onto their blog via a feature built with Claude Code for web. This adds over a decade of historical sightings data, allowing searches like 'lemur' to bring up relevant photos dating back to 2019.

---

## [April 2026 newsletter](https://simonwillison.net/2026/May/4/april-newsletter/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai-models`, `llm`, `pricing`, `security` | **Published**: 2026-05-04 | **Novelty**: 28%

This April newsletter discusses updates on Opus 4.7 and GPT-5.5, both with price increases; introduces Claude Mythos and delves into LLM security research; highlights the release of ChatGPT Images 2.0; mentions more model releases; and provides insights from the author's blog. The content is exclusive to sponsors who pay $10/month for early access.

---

## [iNaturalist Sightings](https://simonwillison.net/2026/May/1/inat-sightings/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `cli`, `github`, `inaturalist`, `python`, `web-development` | **Published**: 2026-05-01 | **Novelty**: 27%

The author created an inaturalist-clumper Python CLI tool to group observations and a web app called inat-sightings.html that fetches this data from GitHub, displaying species thumbnails with lazy loading and showing larger images in a modal. The project demonstrates using Python for data collection and JavaScript for dynamic web display, all managed on mobile devices.

---

## [Fragments: May  5](https://martinfowler.com/fragments/2026-05-05.html)

**Source**: Martin Fowler | **Tags**: `ai-assisted-programming`, `apple-strategy`, `google-defamation`, `lattice` | **Published**: 2026-05-05 | **Novelty**: 27%

Rahul Garg has developed Lattice, an open-source framework for AI-assisted programming that uses composable skills in three tiers to embed engineering disciplines. Ashley MacIsaac is suing Google for defamation after being falsely accused of crimes by an AI tool. Apple’s strategy of investing less in cloud AI models and more in sophisticated hardware is presented as potentially more cost-effective, especially if local models become the norm.

---

## [DeepInfra on Hugging Face Inference Providers 🔥](https://huggingface.co/blog/inference-providers-deepinfra)

**Source**: Hugging Face - Blog | **Tags**: `deepinfra`, `huggingface`, `inferece-provider` | **Published**: 2026-04-29 | **Novelty**: 26%

DeepInfra has become a supported Inference Provider on the Hugging Face Hub, allowing developers to use popular open-weight LLMs such as DeepSeek V4 and Kimi-K2.6 for conversational and text-generation tasks via an easy-to-integrate API. The platform supports over 100 models with minimal setup costs, making it accessible for both PRO users ($2 in credits per month) and free users (with limited quota). Code examples provided demonstrate integration from Python and JavaScript client SDKs.

---

## [On Taste](https://endler.dev/2026/taste/)

**Source**: Matthias Endler | **Tags**: `context`, `design`, `taste` | **Published**: 2026-05-01 | **Novelty**: 26%

The article discusses the evolution of personal taste and design refinement over two decades through the author’s blog redesigns, emphasizing that developing good taste requires understanding context, craftsmanship, and recognizing quality beyond personal preferences. It also critiques the homogenization of taste due to curated feeds and brands prioritizing profits over quality.

---

## [Our evaluation of OpenAI's GPT-5.5 cyber capabilities](https://simonwillison.net/2026/Apr/30/gpt-55-cyber-capabilities/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `cybersecurity`, `gpt`, `openai` | **Published**: 2026-04-30 | **Novelty**: 26%

The article discusses OpenAI's GPT-5.5 and evaluates its cyber capabilities, focusing on the model’s potential in cybersecurity applications. Specific details or unique insights are not provided in this brief metadata; however, it indicates a significant update to the GPT series with implications for security research.

---

## [llm-echo 0.5a0](https://simonwillison.net/2026/May/5/llm-echo/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `debugging`, `llm`, `testing` | **Published**: 2026-05-05 | **Novelty**: 26%

llm-echo 0.5a0 is a debug plugin for LLM that provides a fake 'echo' model, useful for automated testing against newer versions of LLM starting from 0.32a0. It introduces the -o thinking 1 option to simulate a reasoning block, outputting JSON with the echoed prompt and standard error log.

---

## [Bliki: Mythical Man Month](https://martinfowler.com/bliki/MythicalManMonth.html)

**Source**: Martin Fowler | **Tags**: `conceptual-integrity`, `development`, `software` | **Published**: 2026-05-05 | **Novelty**: 25%

The article discusses Fred Brooks' book 'The Mythical Man-Month,' emphasizing the importance of conceptual integrity and highlighting his law that adding manpower to a late software project makes it later. The 1986 essay included in the anniversary edition, titled 'No Silver Bullet,' is also noted as influential.

---

## [Data engineering system design: 9 data processing problems](https://vutr.substack.com/p/data-engineering-system-design-9-4c5)

**Source**: VuTrinh. | **Tags**: `data-processing`, `spark`, `throughput` | **Published**: 2026-05-05 | **Novelty**: 25%

The article discusses the data processing layer, which is crucial for transforming source data into sink requirements. It emphasizes that throughput (records per second, gigabytes per hour) is key to determining resource needs rather than just data volume. The author suggests using DuckDB or Polars for high-throughput scenarios before considering Spark or SQL-based distributed systems like Databricks.

---

## [Granite 4.1 3B SVG Pelican Gallery](https://simonwillison.net/2026/May/4/granite-41-3b-svg-pelican-gallery/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `model-size`, `svg` | **Published**: 2026-05-04 | **Novelty**: 23%

The author experimented with prompting various quantized variants of the Unsloth granite-4.1-3b-GGUF model to generate an SVG of a pelican riding a bicycle, finding that there was no noticeable difference in quality related to model size, despite expecting better results from larger models.

---

## [Notes from April 2026](https://evanhahn.com/notes-from-april-2026/)

**Source**: Evan Hahn (dot com) | **Tags**: `ai`, `books`, `ethical-technology`, `palantir`, `podcasts` | **Published**: 2026-04-30 | **Novelty**: 21%

The article highlights Ghost being recognized as a digital public good. It also discusses the limitations of language models (LLM) in revolutionizing coding, with a focus on incremental progress rather than drastic changes. Notable podcast episodes and articles cover driverless cars and Palantir's ethical concerns, while book lists explore critical perspectives on AI.

---

## [One Decade Later: Revisiting Five Front-End Kung Fu Moves](https://ariya.io/2026/04/one-decade-later-revisiting-five-front-end-kung-fu-moves/)

**Source**: ariya.io | **Tags**: `coding-tools`, `frontend`, `web-development` | **Published**: 2026-04-30 | **Novelty**: 21%

The article revisits five key front-end development practices from a decade ago and evaluates their relevance today. Notably, the author mentions that modern tools like ESLint and Vitest have replaced older solutions such as JSComplexity and Istanbul. The piece also explores how the cross-browser testing landscape has changed due to browsers converging on Chromium-based technologies, making this practice less critical than in the past.

---

## [Coding with AI Agents is Now a Baseline Expectation for Managers](https://code.dblock.org/2026/05/05/coding-with-ai-agents-is-now-a-baseline-expectation-for-managers.html)

**Source**: code.dblock.org | tech blog | **Tags**: `ai`, `codereview`, `engineering`, `managers` | **Published**: 2026-05-05 | **Novelty**: 21%

The article highlights how a manager diving into AI-driven coding firsthand can significantly improve team processes and code quality. Specifically, the author opened 89 pull requests in just five weeks using Copilot (an AI tool), which included improving developer experience, breaking production features, increasing test coverage, optimizing CI/CD pipelines, and executing modernization tasks. The key takeaway is that managers must actively engage with AI tools to manage and guide their teams through this transformation.

---

## [
Redis array type: short story of a long development
](
http://antirez.com/news/164
)

**Source**: 
<antirez>
 | **Tags**: `ai-assisted-development`, `array-data-type`, `redis` | **Published**: 2026-05-04 | **Novelty**: 20%

The article details the development of Redis's new Array data type over four months, involving extensive use of AI for both specification and code review. Key innovations include a dynamic sparse-dense data structure that optimizes memory usage and allows for efficient scanning, as well as the integration of REGEXP support through the optimization of the TRE library to handle specific patterns more efficiently.

---

## [A bidirectional typechecking puzzle>](https://haskellforall.com/2026/05/a-bidirectional-typechecking-puzzle)

**Source**: Haskell for all | **Published**: 2026-05-05

No summary available.

---

## [Content for Content’s Sake](https://lucumr.pocoo.org/2026/5/4/content-for-contents-sake/)

**Source**: Armin Ronacher's Thoughts and Writings | **Tags**: `ai`, `content-creation`, `language-evolution` | **Published**: 2026-05-04

The article discusses how the use of Large Language Models (LLMs) is influencing language and content creation, leading to a perceived decrease in individuality as words like 'substrate' become overused. The author uses specific tools such as Google Trends to analyze word frequency shifts and mentions using Pi, an AI agent, to generate dynamic visualizations for the article. The author argues that while technology can help with spam, it won't fix fundamental social issues arising from increased LLM-generated content.

---

## [Agent Skills](https://addyosmani.com/blog/agent-skills/)

**Source**: AddyOsmani.com | **Tags**: `agent-skills`, `ai`, `engineering`, `workflow` | **Published**: 2026-05-03

Agent Skills is a framework that provides workflows in the form of markdown files to guide AI coding agents through necessary but often skipped senior-engineer tasks, such as writing specs and tests. It includes anti-rationalization tables to prevent common excuses for skipping these steps. The project has over 26K stars on GitHub, demonstrating its popularity among those looking to enhance the capabilities of AI coding tools.

---

## [How to Work and Compound with AI](https://eugeneyan.com//writing/working-with-ai/)

**Source**: Eugene Yan | **Tags**: `ai`, `configuration`, `delegation`, `verification`, `workflow` | **Published**: 2026-05-03

The article emphasizes creating a rich context for AI models through organized directories and CLAUDE.md files, using specific practices such as 'glossaries', 'guides', and 'skills'. It details how to handle verification, scale workflows with delegation, and close the loop by refining configurations based on session transcripts. Notable is the use of ~/src and ~/vault for code and knowledge work organization, and the creation of INDEX.md project indexes.

---

## [[RODEN] New Japan, NYC, Soderbergh Bonanza, Too Much Movement](https://craigmod.com/roden/113/)

**Source**: Craig Mod — Writer + Photographer | **Published**: 2026-05-02

No summary available.

---

## [Catalyzing scientific impact through global partnerships and open resources](https://research.google/blog/catalyzing-scientific-impact-through-global-partnerships-and-open-resources/)

**Source**: The latest research from Google | **Tags**: `biodiversity`, `genomics`, `open-science` | **Published**: 2026-05-01

Google Research emphasizes the importance of open-source tools and datasets in driving scientific progress. Notable examples include DeepVariant, DeepConsensus, and DeepPolisher for genomics, flood-finding algorithms using Open Buildings dataset, and SpeciesNet for biodiversity analysis. These resources have been instrumental in advancing areas such as personalized medicine, climate modeling, and wildlife conservation.

---

## [LLM 0.32a0  is a major backwards-compatible refactor](https://simonwillison.net/2026/Apr/29/llm/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `api`, `llm`, `python`, `streaming` | **Published**: 2026-04-29

The article introduces LLM 0.32a0, an alpha release of a Python library and CLI tool for accessing language models. Key changes include modeling inputs as sequences of messages (e.g., user and assistant turns) and responses as streams of differently typed parts, such as text and tool calls. The new API supports the diverse capabilities of modern models, making tasks like building chat completions APIs easier.

---

## [AI evals are becoming the new compute bottleneck](https://huggingface.co/blog/evaleval/eval-costs-bottleneck)

**Source**: Hugging Face - Blog | **Tags**: `ai`, `benchmarking`, `costs`, `evaluation` | **Published**: 2026-04-29

The article highlights that evaluation costs are now a significant bottleneck for AI research, with credible evaluations often costing more than the training of models. Notable is the suggestion that standardized documentation and sharing of eval data can reduce these costs by at least 50% through reusing existing results. Key examples include the PaperBench project, which proposes using Every Eval Ever as a standardized format for evaluation logs.

---

## [Granite 4.1 LLMs: How They’re Built](https://huggingface.co/blog/ibm-granite/granite-4-1)

**Source**: Hugging Face - Blog | **Tags**: `inference`, `model`, `performance`, `quantization` | **Published**: 2026-04-29

Granite 4.1 introduces a dense 8B model that outperforms its larger MoE predecessor, achieving competitive instruction-following and tool-calling capabilities without extended reasoning chains. The model family comparison shows predictable scaling with size, while the fp8 quantization reduces disk footprint and GPU memory usage by about 50%. Notable code includes the example of using the 30B instruct model with tool calling to fetch current weather data in London.

---

## [Fragments: April 29](https://martinfowler.com/fragments/2026-04-29.html)

**Source**: Martin Fowler | **Tags**: `ai`, `definition`, `llm`, `programming`, `verification` | **Published**: 2026-04-29

The article discusses Chris Parsons' updated guide on using AI for coding, emphasizing the importance of verification through automated checks. It also highlights Birgitta Böckeler's work on harness engineering and the role of computational sensors like static analysis in enhancing software development. The piece explores how precise and consistent definitions are crucial for effective communication with LLMs and notes the insecurity among Silicon Valley AI types regarding their preparedness for the A.I. age.

---
