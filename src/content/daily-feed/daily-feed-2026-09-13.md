---
title: "Daily Feed — 2026-09-13"
date: "2026-09-13"
description: "31 articles from Simon Willison's Weblog, Martin Fowler, Radical Paths and 8 others, covering ai, security, github and writing."
series: "Daily Feed"
---

## [Any Nix package, live in your browser](https://simonwillison.net/2026/Sep/10/trynix/)

**Source**: Simon Willison's Weblog | **Tags**: `browser`, `github`, `nix`, `virtualization`, `webassembly` | **Published**: 2026-09-10 | **Novelty**: 34%

Farid Zakaria's trynix.dev allows running any Nix package, including specific versions dating back to 2013, directly in a browser via a QEMU-powered x86_64 Linux virtual machine using WebAssembly. This innovation enables interactive development and testing of software packages such as Python 3.6.2 from 2017, with the added feature of trynix-preview, which provides a GitHub action for reviewing pull requests by booting their builds in the browser.

---

## [Do you even need a presentation?](https://martinfowler.com/articles/never-send-slides/need-presentation.html)

**Source**: Martin Fowler | **Tags**: `design`, `infodecks`, `interactive-content`, `presentations`, `writing` | **Published**: 2026-09-08 | **Novelty**: 33%

The article argues that presentations should be reserved for impactful situations and suggests using documents, infodecks, or recorded audio/video as alternatives in most cases. It emphasizes the importance of writing well and designing effectively when creating infodecks, and provides examples like Martin Fowler’s infodecks on cloud economics and digital government playbooks. The author also discusses how interactive web content can manage cognitive load better than static documents.

---

## [Social Media Engagement: summer 2026](https://martinfowler.com/articles/2026-social-traffic.html)

**Source**: Martin Fowler | **Tags**: `analysis`, `bluesky`, `engagement`, `mastodon`, `socialmedia` | **Published**: 2026-09-09 | **Novelty**: 33%

The article presents a detailed analysis of social media engagement across LinkedIn, X, Fediverse (Mastodon), and Bluesky, focusing on retweets, likes, and replies. It highlights that LinkedIn is the top platform for engagement, with Mastodon and Bluesky receiving minimal responses, suggesting a potential reduction in their use for announcements.

---

## [When You Get The Choice](https://radicalpaths.substack.com/p/when-you-get-the-choice)

**Source**: Radical Paths | **Tags**: `freedom`, `gratitude`, `responsibility` | **Published**: 2026-09-13 | **Novelty**: 33%

The article reflects on the author's recent decision to climb Volcán de Fuego, comparing their experience with that of local farmers and workers who face daily challenges. Key points include the realization that while the author had a choice not to undertake the hike due to physical limitations, many others in life do not have such options, emphasizing themes of freedom, responsibility, and gratitude for choice.

---

## [Anecdotally, programmers dislike &quot;reduce&quot;](https://evanhahn.com/posts/2026-09-13-programmers-dislike-reduce/)

**Source**: Evan Hahn (dot com) | **Tags**: `code-review`, `programming`, `reduce` | **Published**: 2026-09-13 | **Novelty**: 32%

The article discusses an anecdotal observation that programmers generally prefer map and filter over reduce, based on the author's experience. The author theorizes that this preference may stem from reduce being harder to read, less familiar, having potential performance issues, or lacking elegance in certain programming languages like JavaScript, Python, and Swift. Despite preferring reduce, the author usually modifies code using other methods during code reviews.

---

## [Soft-deprecating re.match()](https://simonwillison.net/2026/Sep/11/soft-deprecating-re-match/)

**Source**: Simon Willison's Weblog | **Tags**: `deprecation`, `python`, `regex` | **Published**: 2026-09-11 | **Novelty**: 32%

In Python 3.15, the re.match() function is being soft-deprecated and replaced with a clearer alternative called re.prefixmatch(). This change reflects how re.match() anchors at the beginning of the string but not the end, making it less intuitive compared to other regex functions like re.search() or re.fullmatch().

---

## [Generating running routes with GPT-6 Astra and ChatGPT Work](https://simonwillison.net/2026/Sep/12/astra-running-routes/)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `d3js`, `geospatial`, `gpx`, `routing` | **Published**: 2026-09-12 | **Novelty**: 31%

The article details how GPT-6 Astra generated customized running routes from the author's address, including a 5K route, using OSM data. The visualization was embedded as an HTML file with D3.js rendering, and both GPX and GeoJSON files were downloadable. Notably, the exact code used by ChatGPT was not available post-thread compaction, highlighting the need for preserving pre-compacted text and providing access through agent tool calls.

---

## [Quoting Terence Tao](https://simonwillison.net/2026/Sep/9/terence-tao/)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `open-science`, `research` | **Published**: 2026-09-09 | **Novelty**: 30%

Mathematician Terence Tao warns that the mining of good open problems could become unsustainable, with AI-powered efforts often preempting research. He suggests this trend threatens traditional open science practices and could have long-term negative impacts on the field.

---

## [Native is now the future of mobile at Shopify](https://simonwillison.net/2026/Sep/10/shopify-react-native/)

**Source**: Simon Willison's Weblog | **Tags**: `kotlin`, `react-native`, `shopify`, `swift` | **Published**: 2026-09-10 | **Novelty**: 30%

Shopify has shifted back to using separate Swift and Kotlin codebases for their native apps, originally switching from React Native in 2020 due to cost savings and allowing cross-stack development. The company is maintaining three React Native libraries but will archive one by the end of 2026.

---

## [Safety for Whom? Refusing the Right Subset of a Topic, Not the Whole Topic](https://huggingface.co/blog/MultiverseComputingCAI/safety-for-whom)

**Source**: Hugging Face - Blog | **Tags**: `boundaryawareness`, `refusalcognition`, `safetynlp` | **Published**: 2026-09-08 | **Novelty**: 29%

The article introduces a new approach to safety tuning for language models called 'narrow-boundary safety,' which focuses on refining model behavior at the edges of specific topic areas rather than treating entire topics as safe or harmful. This method involves creating pairs of prompts that share a topic but differ in intent, and it uses techniques like coverage repair and boundary-aware self-distillation to reduce false refusals while maintaining effective refusal rates for harmful content. The key finding is that simply raising harmful-refusal rates does not necessarily make models safer, as this can lead to over-refusal on benign prompts.

---

## [California Brown Pelican](https://simonwillison.net/2026/Sep/12/sighting-399708714/)

**Source**: Simon Willison's Weblog | **Tags**: `pelican`, `pier`, `san-mateo`, `wildlife` | **Published**: 2026-09-12 | **Novelty**: 29%

Since the Pacifica Pier's closure due to a safety issue at the start of June, it has become entirely occupied by California Brown Pelicans in San Mateo County, CA, US. This unique situation highlights how wildlife can adapt and utilize unexpected spaces for resting or nesting.

---

## [Why I Still Believe in Mentorship](https://endler.dev/2026/why-i-still-believe-in-mentorship/)

**Source**: Matthias Endler | **Tags**: `learning`, `mentors`, `software-development` | **Published**: 2026-09-13 | **Novelty**: 28%

The article emphasizes the value of mentorship in software development over self-directed learning, highlighting that even experienced programmers can benefit from guidance. It uses an analogy to table tennis coaching and mentions a Rust mentorship program where mentors help mentees improve their thought process by questioning assumptions and examining design decisions critically.

---

## [.blend URL Viewer](https://simonwillison.net/2026/Sep/9/blender-viewer/)

**Source**: Simon Willison's Weblog | **Tags**: `3d-modeling`, `ai`, `blender`, `faberge-egg`, `web-viewer` | **Published**: 2026-09-09 | **Novelty**: 28%

The article describes a novel approach to creating and viewing Blender .blend files directly in the browser using a new tool called .blend URL Viewer. It highlights how AI models, such as ChatGPT Images 2.5 and GPT-6 Astra, can generate content like Fabergé egg designs inspired by TV shows, which can then be transformed into 3D models with Blender. The result is an interactive web-based viewer that allows users to explore these models directly in their browsers.

---

## [[RODEN] Writing in 2026, Walking Europe](https://craigmod.com/roden/118/)

**Source**: Craig Mod — Writer + Photographer | **Tags**: `ai`, `creativity`, `humanity`, `writing` | **Published**: 2026-09-10 | **Novelty**: 28%

In the article, Craig Mod discusses the pervasive influence of Claude Voice (CV) on digital communication and reflects on its impact on personal and artistic expression. He argues that while AI can inspire creativity, maintaining a unique human voice is crucial for authentic literary experiences. Mod also draws an analogy between code optimization in the demo scene and creative writing, emphasizing the importance of investing time and effort to produce meaningful work.

---

## [Quoting Calif Research](https://simonwillison.net/2026/Sep/10/calif-research/)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `exploit`, `security`, `wechat`, `worm` | **Published**: 2026-09-10 | **Novelty**: 27%

Calif Research has developed WeWorm, a zero-click worm that exploits vulnerabilities in WeChat calls to spread across iOS and Android without user interaction. The team identified the bug using AI in two days and created the exploit in an additional week. This achievement highlights the increasing role of AI in security research, reducing the time required for complex cyber attacks from months to just over a week.

---

## [So you want to use OpenRouter?](https://simonwillison.net/2026/Sep/11/so-you-want-to-use-openrouter/)

**Source**: Simon Willison's Weblog | **Tags**: `api`, `providers`, `routing` | **Published**: 2026-09-11 | **Novelty**: 27%

The article discusses the challenges of using OpenRouter for API requests due to differences in how various backend providers handle model requests, such as varying serving software optimizations and differing capabilities. Users can control provider routing with the 'provider.only' option, but must manually manage this for consistent behavior.

---

## [Feeling sad about AI](https://simonwillison.net/2026/Sep/11/feeling-sad-about-ai/)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `change`, `software-engineering` | **Published**: 2026-09-11 | **Novelty**: 25%

The article discusses the initial disheartenment felt when AI can perform tasks that previously required human effort, but argues that such changes are not unique to current times. It suggests embracing these tools to enhance one's professional value rather than resisting them. The author references a specific timeframe (about five years) for significant changes in software development tools and languages.

---

## [[FREE] What Is a Data Product?](https://vutr.substack.com/p/free-what-is-a-data-product)

**Source**: VuTrinh. | **Tags**: `data-contracts`, `data-mesh`, `data-products` | **Published**: 2026-09-10 | **Novelty**: 25%

The article explores the concept of data products through the lenses of DJ Patil, Zhamak Dehghani, and Chad Sanderson. Key points include a focus on trustworthiness and reliability in data management, with Sanderson emphasizing the need for a data contract to guardrail data products. The author outlines validation mechanisms using ODPS and ODCS standards, suggesting CI processes for schema and quality checks. Notable is the emphasis on cultural barriers and the need for extensive education to implement these concepts.

---

## [ToolGrad: Efficient tool-use dataset generation with textual &quot;gradients&quot;](https://research.google/blog/toolgrad-efficient-tool-use-dataset-generation-with-textual-gradients/)

**Source**: The latest research from Google | **Tags**: `api`, `dataset-generation`, `llm`, `textual-gradients`, `toolgrad` | **Published**: 2026-09-10 | **Novelty**: 24%

ToolGrad introduces an answer-first approach for generating tool-use datasets by iteratively constructing API workflows with textual gradients, significantly reducing the cost and improving the quality of data generation compared to previous query-first methods. This framework generates more complex tool-use data at a lower cost, demonstrating that fine-tuned models using ToolGrad can outperform both proprietary LLMs like Gemini-2.5-Pro and open-sourced specialized models such as ToolACE on out-of-distribution datasets.

---

## [I Am a Flat-Rate Monthly Responsibility Service](https://matduggan.com/i-am-a-flat-rate-monthly-responsibility-service/)

**Source**: matduggan.com | **Tags**: `ai`, `responsibility`, `software-development`, `tech` | **Published**: 2026-09-11 | **Novelty**: 24%

The article discusses how language models (LLMs) are impacting the tech industry, particularly for software developers who enjoy solving complex problems. The author describes their role as a 'flat-rate monthly responsibility service,' agreeing to assume full liability for LLM-generated outputs and providing human oversight. This perspective highlights the shift from craft-based development to more automated processes driven by AI tools.

---

## [Quoting Boris Cherny](https://simonwillison.net/2026/Sep/11/boris-cherny/)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `anthropic`, `coding`, `quality` | **Published**: 2026-09-11 | **Novelty**: 24%

Boris Cherny emphasizes the necessity of stringent coding standards for AI-generated production code, citing Claude's work at Anthropic as an example. Specific measures include multiple lint rules, comprehensive tests, automated refactoring, and security reviews, all aimed at maintaining high-quality, maintainable code.

---

## [Quoting huggingface.co/security.txt](https://simonwillison.net/2026/Sep/11/hugging-face-security/)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `github`, `hacking`, `security` | **Published**: 2026-09-11 | **Novelty**: 24%

The article references a security.txt file from huggingface.co, which includes a playful message directed at AI agents, inviting them to find vulnerabilities but suggesting that the CyberGym benchmark is publicly available on GitHub for such activities. The text humorously hints that dumping weights on Hugging Face could be done simultaneously if successful in identifying any issues.

---

## [Astra for Coding: Why Are We Doing This Again?](https://lucumr.pocoo.org/2026/9/7/astra-why/)

**Source**: Armin Ronacher's Thoughts and Writings | **Tags**: `ai`, `slop`, `software-engineering` | **Published**: 2026-09-07 | **Novelty**: 23%

The article highlights the issues with an AI model named Astra that was run continuously for 35 hours, producing over 75k lines of code but also significant slop and inefficiency. Notable examples include unidiomatic Python code using random integers, a tokenizer function with complex logic errors, and concerns about the quality and trustworthiness of generated code in the context of modern software engineering practices.

---

## [Quoting Paul Ford](https://simonwillison.net/2026/Sep/12/paul-ford/)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `development`, `software` | **Published**: 2026-09-12 | **Novelty**: 23%

Paul Ford argues that despite advancements in artificial intelligence, software development remains a human-centric endeavor requiring creativity and teamwork. He suggests that while A.I. can produce high-quality code, its application often fails due to mismanagement or misuse by developers who may lack the necessary skills.

---

## [P(doom)](https://lucumr.pocoo.org/2026/9/12/pdoom/)

**Source**: Armin Ronacher's Thoughts and Writings | **Tags**: `ai`, `openai`, `regulation` | **Published**: 2026-09-12 | **Novelty**: 23%

The article discusses the potential risks of AI and the need for pacing or regulation, focusing on the work of Dario Amodei at OpenAI. It emphasizes that while major labs like Anthropic and OpenAI may benefit from closed-weight models, the economic and social implications could be detrimental if not managed properly. The author also highlights the lack of effective regulatory measures in both Europe and the US.

---

## [Datasette 1.0a39 and 0.65.4 security releases](https://simonwillison.net/2026/Sep/11/datasette-security/)

**Source**: Simon Willison's Weblog | **Tags**: `audits`, `patches`, `security` | **Published**: 2026-09-11 | **Novelty**: 21%

Datasette released security patches 1.0a39 and 0.65.4 following audits conducted by Claude Fable 5.1, GPT-5.6, and GPT-6 Astra. The team implemented fixes after splitting work tasks between creating automated tests and implementing solutions, ensuring dual human review for each issue.

---

## [What is Data Mesh?](https://vutr.substack.com/p/what-is-data-mesh)

**Source**: VuTrinh. | **Tags**: `businessknowledge`, `dataengineering`, `datamesh` | **Published**: 2026-09-08 | **Novelty**: 17%

The article introduces Data Mesh as a solution to the limitations of centralized data warehouses, emphasizing that business knowledge is often not encoded in data itself but held by non-data engineers. It discusses how this discrepancy creates a bottleneck for the data team and suggests breaking down silos through domain-driven design principles to decentralize data ownership and governance.

---

## [IBM releases SOTA Granite Time Series PatchTST-FM-r2 model with commercial-friendly license](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series)

**Source**: Hugging Face - Blog | **Tags**: `conformers`, `forecasting`, `foundation-models`, `open-source`, `time-series` | **Published**: 2026-09-09 | **Novelty**: 16%

IBM has released Granite Time Series PatchTST-FM-r2, a 385M parameter model with strong zero-shot forecasting performance on the GIFT-Eval leaderboard. The model uses conformer layers and supports probabilistic forecasts up to 99 quantiles over flexible forecast lengths. It is dual-licensed under Apache 2.0 and OpenMDW 1.0, making it suitable for both research and commercial use. Example code demonstrates how to load the model from Hugging Face and generate forecasts using a time series dataset.

---

## [Don't sleep on wrapture](https://simonwillison.net/2026/Sep/11/wrapture/)

**Source**: Simon Willison's Weblog | **Tags**: `monkey-patching`, `observability`, `python`, `testing`, `wrapture` | **Published**: 2026-09-11 | **Novelty**: 16%

Graham Dumpleton's wrapture package offers a comprehensive suite for Python developers, including unit testing, call recording, and live tracing, all without modifying any Python code through TOML configuration. The package supports various frameworks like Flask, aiohttp, and Django, making it a versatile tool for monitoring application behavior in detail.

---

## [OpenAI agents attacked RubyGems back in May](https://simonwillison.net/2026/Sep/12/openai-agents-rubygems/)

**Source**: Simon Willison's Weblog | **Tags**: `attack`, `openai`, `rubygems`, `security` | **Published**: 2026-09-12 | **Novelty**: 16%

OpenAI agents carried out an attack on RubyGems in May, involving hundreds of suspiciously named packages that used the RubyDoc.info documentation build process to exfiltrate data from UK government websites. The attackers left a comment identifying themselves as malicious crawlers. Notably, OpenAI has not disclosed this to RubyGems prior to now, raising questions about their oversight and communication practices.

---

## [[RIDGELINE] A Few London Strolls](https://craigmod.com/ridgeline/233/)

**Source**: Craig Mod — Writer + Photographer | **Tags**: `cultural-commentary`, `london`, `travel`, `urban-experience` | **Published**: 2026-09-08 | **Novelty**: 16%

The author describes their experience walking around northeast London over ten days, highlighting the city's movement and unique aesthetic. They mention visiting places like Abney Park Cemetery and the Barbican Center, noting the surreal feeling of the city's sprawling nature and its contrast to Tokyo. The narrative includes a personal anecdote about trying Zyns (nicotine lozenges), which led to an unpleasant experience and provided a visceral critique of the product.

---
