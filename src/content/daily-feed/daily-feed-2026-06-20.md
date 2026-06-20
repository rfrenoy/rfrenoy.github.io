---
title: "Daily Feed — 2026-06-20"
date: "2026-06-20"
description: "35 articles from Simon Willison's Weblog, The latest research from Google, §kuthus and 6 others, covering ai, datasette, agents and permissions."
series: "Daily Feed"
---

## [Cloudflare CAPTCHA on at least one ampersand](https://simonwillison.net/2026/Jun/16/captcha-on-at-least-one-ampersand/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `api`, `captcha`, `cloudflare`, `faceted-search`, `rule` | **Published**: 2026-06-16 | **Novelty**: 34%

The author implemented a specific Cloudflare rule to trigger the Managed Challenge (now called CAPTCHA) only when search URLs contain at least one ampersand, allowing simple ?q=term searches to pass without interruption. This solution was achieved using Claude Code and the Cloudflare API.

---

## [datasette-acl 0.6a0](https://simonwillison.net/2026/Jun/18/datasette-acl/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `acl`, `datasette`, `permissions` | **Published**: 2026-06-18 | **Novelty**: 30%

Alex Garcia has led the development of version 0.6a0 of datasette-acl, expanding its functionality to support fine-grained resource-sharing across multi-user Datasette instances beyond table-level permissions.

---

## [datasette-apps 0.1a3](https://simonwillison.net/2026/Jun/15/datasette-apps-2/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `bug-fix`, `datasette-apps`, `permissions` | **Published**: 2026-06-15 | **Novelty**: 30%

In version 0.1a3 of datasette-apps, two bugs were fixed: one allowed users without the 'create-app' permission to create apps, and another made it impossible to grant edit permissions to non-owners. The app's edit and delete rules now mirror its view rule—only the owner can modify a private app, while public apps follow Datasette's standard permission system (#27, #29).

---

## [Quoting Georgi Gerganov](https://simonwillison.net/2026/Jun/16/georgi-gerganov/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `coding`, `local-models` | **Published**: 2026-06-16 | **Novelty**: 29%

Georgi Gerganov, known for his work at ggml-org, has been using Qwen3.6-27B, a local model for coding tasks, daily over the past month and a half. He uses it primarily for minor maintenance tasks, finding it helpful despite spending most of his time reviewing pull requests. Gerganov configures the model with a lightweight harness (pi -nc --offline) and a short system prompt.

---

## [&lt;click-to-play&gt; — a still that plays](https://simonwillison.net/2026/Jun/17/click-to-play-component/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `datasette`, `gifs`, `load-time`, `web-component` | **Published**: 2026-06-17 | **Novelty**: 29%

The article introduces a new Web Component called &lt;click-to-play&gt;, which transforms an image into a clickable still frame that loads a GIF on demand. This feature is designed to reduce initial page load times by only loading large media files when the user wishes to view them, and it was developed for use in demonstrating row editing tools in Datasette.

---

## [Quoting Sean Lynch](https://simonwillison.net/2026/Jun/19/sean-lynch/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `api`, `authentication`, `mcp`, `sean-lynch` | **Published**: 2026-06-19 | **Novelty**: 27%

Sean Lynch suggests that the Most Valuable Property (MVP) of Model Context Protocol (MCP) lies in its ability to isolate authentication flows outside the agent’s context window, potentially making it an auth gateway for APIs. This capability is seen as a significant advantage over other methods like skills or CLI interfaces.

---

## [datasette-tailscale 0.1a0](https://simonwillison.net/2026/Jun/16/datasette-tailscale/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `datasette`, `experimental`, `plugin`, `tailscale` | **Published**: 2026-06-16 | **Novelty**: 26%

The article introduces datasette-tailscale 0.1a0, an experimental alpha plugin that enables running a Datasette instance on a Tailscale network with the command `datasette tailscale mydata.db --ts-authkey tskey-auth-xxxx --ts-hostname datasette-preview`. This setup uses Python bindings for the experimental tailscale-rs library and establishes a connection to your Tailnet, making http://datasette-preview/ accessible. The author has also raised an issue regarding the proxy mechanism setup.

---

## [From pixels to planning: Earth AI for nature restoration](https://research.google/blog/from-pixels-to-planning-earth-ai-for-nature-restoration/)

**Source**: The latest research from Google | **Tags**: `ai`, `ecology`, `gis`, `sustainability` | **Published**: 2026-06-16 | **Novelty**: 26%

The article introduces a high-resolution deep learning framework that converts raster maps into vector datasets for identifying fine-scale ecological features such as hedgerows and copses in England. Using Google Earth AI's Vision-Transformer (ViT) backbone pre-trained on global satellite images, the team developed a dual-layer labeling system with submeter imagery and 1-meter LiDAR data to resolve complex spatial topologies, and applied the Polsby–Popper compactness score for semantic classification. This allows for an actionable inventory of fine-scale features across large areas, supporting nature recovery without compromising food security.

---

## [The rot is deep at Microsoft](https://skuth.us/the-rot-is-deep-at-microsoft/)

**Source**: §kuthus | **Tags**: `microsoft`, `tech` | **Published**: 2026-06-20 | **Novelty**: 24%

The article criticizes Microsoft's new Windows Media Player for using 3.5 times more RAM than its predecessor and now charging users for third-party codecs, suggesting a deep issue within the company that could extend beyond just this product. The author questions whether the management is unaware of or actively approving these decisions, indicating potential systemic problems at Microsoft.

---

## [Agentic Resource Discovery: Let agents search](https://huggingface.co/blog/agentic-resource-discovery-launch)

**Source**: Hugging Face - Blog | **Tags**: `agents`, `ai`, `discovery`, `huggingface` | **Published**: 2026-06-17 | **Novelty**: 23%

Agentic Resource Discovery (ARD) is a new specification that enables agents to search for tools, skills, and other agents dynamically. The Hugging Face Discover Tool implements this by indexing thousands of Skills and ML applications through semantic search over the Hugging Face Hub, exposing these as ARD catalog entries accessible via REST API or MCP endpoint. This allows an agent to find capabilities without needing them pre-installed, shifting from static catalogs to intent-based search.

---

## [Quoting Julia Evans](https://simonwillison.net/2026/Jun/15/julia-evans/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `focus`, `inspiration`, `writing` | **Published**: 2026-06-15 | **Novelty**: 22%

The quote from Julia Evans emphasizes a specific writing technique where authors write for one person, often imagining it as their past self or a close friend. This approach can help maintain clarity and focus in the content.

---

## [datasette-apps 0.1a2](https://simonwillison.net/2026/Jun/15/datasette-apps/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `datasette`, `security`, `ui-improvements` | **Published**: 2026-06-15 | **Novelty**: 22%

datasette-apps 0.1a2 introduces a new 'apps-set-csp' permission and optional allowed_csp_origins plugin allow-list for custom network/CSP origins, with similar rules enforced by the Datasette Agent app creation tool (#24). Additionally, stored query picker supports keyboard navigation, shows three recent accessible queries when focused, and fragment links inside apps are no longer intercepted by external-link confirmation modal (#23), while link confirmation modal and logging panels in full-screen mode are fixed (#26).

---

## [Why AI hasn’t replaced software engineers, and won’t](https://simonwillison.net/2026/Jun/14/why-ai-hasnt-replaced-software-engineers/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `employment`, `software-engineering` | **Published**: 2026-06-14 | **Novelty**: 21%

The article argues that AI hasn't replaced software engineers and won't because the profession's real bottlenecks lie in deciding and specifying what to build, verifying and being accountable for delivered work, and the deep human understanding required. Notably, even with advanced AI assistance, these tasks remain fundamentally reliant on human expertise. In March 2025, New York became the first U.S. state to require an AI disclosure checkbox in WARN Act filings, which was never checked by any of the 160 companies that filed notices.

---

## [Quoting Charity Majors](https://simonwillison.net/2026/Jun/17/charity-majors/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `charity-majors`, `generative-ai` | **Published**: 2026-06-17 | **Novelty**: 21%

Charity Majors argues that the economics of code production shifted dramatically in 2025, making lines of code effectively free and instant. This change, she contends, requires increased engineering discipline rather than less. The quote highlights a significant shift in how software development is approached due to advancements in AI and generative technologies.

---

## [Optimism is good, actually](https://skuth.us/optimism-is-good-actually/)

**Source**: §kuthus | **Tags**: `action`, `change`, `optimism` | **Published**: 2026-06-17 | **Novelty**: 20%

The article advocates for optimism despite the world's current challenges. It encourages readers to actively work towards their vision of a better world, emphasizing that making something exist or improving it can significantly alter one's perspective. Notable is the call to action encouraging individuals to take initiative in creating positive change.

---

## [[RIDGELINE] Walking New York POPS](https://craigmod.com/ridgeline/230/)

**Source**: Craig Mod — Writer + Photographer | **Tags**: `newyorkcity`, `publicspaces`, `walks` | **Published**: 2026-06-18 | **Novelty**: 20%

The article explores privately owned public spaces (POPS) in Midtown Manhattan, highlighting their significance and variety. Key points include the legal framework that allows developers to create these spaces for added square footage, as well as examples of unique POPS such as Parkers, a cigar lounge turned seating area with an unexpected sleeping dog. The piece also mentions Alex Wolfe’s recent 50-mile walk from Manhattan to New Jersey during the World Cup and his ongoing project walking train lines in New York City.

---

## [GLM-5.2 is probably the most powerful text-only open weights LLM](https://simonwillison.net/2026/Jun/17/glm-52/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `animation`, `llm`, `model`, `svg` | **Published**: 2026-06-17 | **Novelty**: 20%

GLM-5.2, a 753B parameter model released by Z.ai, has taken the lead in the Artificial Analysis Intelligence Index with 51 points, surpassing models like MiniMax-M3 and DeepSeek V4 Pro. Notably, it excels in generating fully animated SVGs without issues such as broken animations, though its performance on specific tasks can vary significantly from previous versions of GLM. On OpenRouter, GLM-5.2 costs $1.40 per million input tokens and $4.40 per million output tokens.

---

## [datasette 1.0a34](https://simonwillison.net/2026/Jun/16/datasette/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `datasette`, `sql`, `ui` | **Published**: 2026-06-16 | **Novelty**: 20%

Datasette 1.0a34 introduces new tools for inserting, editing, and deleting rows directly within the Datasette interface, addressing a longstanding limitation first identified with Datasette Agent's chat interface that allowed SQL write operations but not through regular UI actions.

---

## [NetNewsWire Status](https://simonwillison.net/2026/Jun/17/netnewswire-status/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `brentsimmons`, `netnewswire`, `open-source`, `podcasts` | **Published**: 2026-06-17 | **Novelty**: 19%

Brent Simmons retired a year ago and is now focusing on making NetNewsWire, a podcast-like reading app released in 2002 and open-sourced in 2018, exceptionally good without commercial constraints. Simon Willison has been using the software for years and considers it indispensable.

---

## [datasette-agent 0.3a0](https://simonwillison.net/2026/Jun/15/datasette-agent/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `automation`, `chat-terminal`, `datasette`, `permissions`, `sql` | **Published**: 2026-06-15 | **Novelty**: 17%

datasette-agent 0.3a0 introduces the `execute_write_sql` tool, which requires user approval before writing to a database, and enhances chat terminal mode with options like --yes for auto-approval and --unsafe for bypassing permissions. The tool can now also provide plain text alternatives for display in the CLI.

---

## [9 software engineering skills a DE should have and how to learn them effectively.](https://vutr.substack.com/p/9-software-engineering-skills-a-de)

**Source**: VuTrinh. | **Tags**: `code-quality`, `data-engineering`, `software-engineering` | **Published**: 2026-06-16 | **Novelty**: 17%

The article emphasizes the importance of software engineering skills for data engineers, particularly focusing on writing understandable code. It suggests practical methods such as participating in coding reviews and contributing to open-source projects to improve this skill. Notably, it mentions access to over 200 deep-dive articles and practice problems for Spark SQL/DataFrame at a cost-effective rate of $7/month (billed annually).

---

## [The Fable 5 Export Controls Harm US Cyber Defense](https://simonwillison.net/2026/Jun/16/fable-5-export-controls/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `cybersecurity`, `export-controls` | **Published**: 2026-06-16 | **Novelty**: 16%

The article discusses how export controls on AI models like Fable 5 may harm US cyber defense capabilities. It cites Kate Moussouris, who explains that these models should be able to fix security bugs, which is crucial for defensive security measures such as the 'find, fix, and test' loop. The export control bans prevent this critical functionality.

---

## [&quot;They screwed us&quot;: Personality clashes sent Anthropic's models offline](https://simonwillison.net/2026/Jun/15/axios-clashes-anthropics/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `anthropic`, `export-controls`, `jailbreak` | **Published**: 2026-06-15 | **Novelty**: 16%

The article discusses the meeting between Anthropic representatives and the US Commerce Department regarding export controls on their models. It highlights potential solutions, such as making sure the models can't be jailbroken or ensuring everyone feels safe and secure, rather than addressing specific technical details. Notable figures include Logan Graham and Dave Orr, and Anthropic claims no universal jailbreak has been found against Claude Mythos.

---

## [Quoting Matteo Wong, The Atlantic](https://simonwillison.net/2026/Jun/16/matteo-wong-the-atlantic/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `cybersecurity`, `fable` | **Published**: 2026-06-16 | **Novelty**: 16%

Cybersecurity expert Katie Moussouris was shown a report on Anthropic's AI model, Fable, by the White House. When given insecure code, Fable initially refused to review it for security issues but accepted when asked to fix it. This behavior was deemed 'the model working as intended' for cyberdefense purposes.

---

## [Datasette Apps: Host custom HTML applications inside Datasette](https://simonwillison.net/2026/Jun/18/datasette-apps/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `datasette`, `html`, `security`, `sql` | **Published**: 2026-06-18

Datasette Apps introduce self-contained HTML+JavaScript applications that run within a constrained &lt;iframe&gt; sandbox on Datasette. They can execute SQL queries and provide an innovative approach using &lt;meta http-equiv=&quot;Content-Security-Policy&quot;&gt; headers to secure the app. Key security features include restricted access via CSP policies, postMessage() for inter-frame communication, and stored queries for write operations. This plugin enables users to build custom interfaces like search engines or timelines directly within Datasette.

---

## [MosaicLeaks: Can your research agent keep a secret?](https://huggingface.co/blog/ServiceNow/mosaicleaks)

**Source**: Hugging Face - Blog | **Tags**: `agents`, `benchmarks`, `privacy`, `research` | **Published**: 2026-06-18

MosaicLeaks introduces a new benchmark for evaluating privacy risks in deep-research agents, showing that training agents only for task performance can increase leakage by over 50%. The study proposes Privacy-Aware Deep Research (PA-DR), which combines situational rewards with learned privacy rewards to significantly reduce answer and full-information leakage while maintaining high strict chain success rates. Specifically, PA-DR reduces leakage from 34.0% to 9.9%, demonstrating that training for privacy can be more effective than prompting alone.

---

## [Is it agentic enough? Benchmarking open models on your own tooling](https://huggingface.co/blog/is-it-agentic-enough)

**Source**: Hugging Face - Blog | **Tags**: `agents`, `api-design`, `evaluation`, `models` | **Published**: 2026-06-18

The article introduces a coding-agent evaluation tool called agent-eval that measures the cost and path an agent takes to complete tasks across different models and library revisions. Key findings include that a new CLI + Skill commit helps larger models but hurts smaller ones, with Qwen3-14B's match rate dropping from 67% to 43%. The tool emphasizes the need for model-size considerations when designing APIs.

---

## [Beyond LoRA: Can you beat the most popular fine-tuning technique?](https://huggingface.co/blog/peft-beyond-lora)

**Source**: Hugging Face - Blog | **Tags**: `benchmarks`, `fine-tuning`, `lora`, `peft` | **Published**: 2026-06-18

The article discusses the limitations of using LoRA for parameter-efficient fine-tuning, presenting benchmarks comparing it to other PEFT techniques such as BEFT and OFT. It highlights that while LoRA works well, other methods can outperform it in specific metrics like test accuracy vs memory usage. The article provides code examples showing how easy it is to switch between different PEFT configurations using the PEFT library.

---

## [MolmoMotion: Language-guided 3D motion forecasting](https://huggingface.co/blog/allenai/molmomotion)

**Source**: Hugging Face - Blog | **Tags**: `3d`, `forecasting`, `motion`, `robotics`, `video-generation` | **Published**: 2026-06-17

MolmoMotion is a new motion forecasting model that predicts future 3D trajectories of object points given video frames, query points, and action descriptions. It outperforms existing methods on PointMotionBench and can be used for robotics planning and video generation tasks. The model uses Molmo2 as its backbone and comes with the MolmoMotion-1M dataset (containing 1.16 million videos) and a benchmark called PointMotionBench, which includes 2.7K video clips. It has eight query points per object during training, limiting its ability to handle complex deformable motion.

---

## [From the Hugging Face Hub to robot hardware with Strands Agents and LeRobot](https://huggingface.co/blog/amazon/strands-lerobot-hub-to-hardware)

**Source**: Hugging Face - Blog | **Tags**: `ai`, `huggingface`, `robots`, `sim2real` | **Published**: 2026-06-17

This article introduces a workflow for developing physical AI agents using Strands Robots and HuggingFace's LERobot framework. Key points include simulation-to-hardware deployment, security considerations like prompt injection prevention, and the use of natural language to control robots via AgentTools. Notable code snippets demonstrate end-to-end simulation with the Mock policy in `hub_to_hardware.py`. The integration leverages a common dataset format for sim and real data, enabling seamless fine-tuning across environments.

---

## [GLM-5.2: Built for Long-Horizon Tasks](https://huggingface.co/blog/zai-org/glm-52-blog)

**Source**: Hugging Face - Blog | **Tags**: `coding`, `glm`, `reasoning` | **Published**: 2026-06-17

GLM-5.2 introduces significant improvements in reasoning and coding capabilities, supported by unique techniques such as 1M context length for ZCode (Claude Code) and enhanced effort levels. Notable is the use of temperature=1.0 and top_p=0.95 for text generation during evaluation. GLM-5.2 outperforms previous models in SWE-bench Pro, NL2Repo, DeepSWE, and other benchmarks by substantial margins.

---

## [Building Reliable Agentic AI Systems](https://martinfowler.com/articles/reliable-llm-bayer.html)

**Source**: Martin Fowler | **Tags**: `agents`, `research`, `text-to-sql` | **Published**: 2026-06-16

The article introduces a multi-agent system for research tasks, focusing on the Query-Time RAG process with 7 steps and Text-to-SQL tool. It emphasizes specific reflection and validation mechanisms to ensure data sufficiency and answer synthesis accuracy. Notable is the iterative SQL query generation and execution process, limiting results to 50 records at a time.

---

## [The New Software Lifecycle](https://addyosmani.com/blog/new-sdlc-vibe-coding/)

**Source**: AddyOsmani.com | **Tags**: `agents-cli`, `ai`, `software-engineering` | **Published**: 2026-06-16

The article introduces the concept of 'vibe coding' versus agentic engineering, emphasizing that context and model routing are financial levers. It highlights how agents can produce production-ready code directly from prototypes, with Google's Agents CLI as an example. Key statistics include 85% of professional developers using AI coding agents regularly by early 2026, and the idea that implementation is shifting from writing to reviewing due to AI assistance.

---

## [AI demands more engineering discipline. Not less](https://charitydotwtf.substack.com/p/ai-demands-more-engineering-discipline)

**Source**: charity.wtf | **Tags**: `ai`, `code-review`, `engineering-discipline` | **Published**: 2026-06-15

The article discusses the shift from traditional software engineering to a new paradigm where AI-generated code is becoming increasingly viable, challenging the status quo of how code is developed and maintained. The author emphasizes that while AI can generate code quickly, rigorous engineering discipline remains crucial for ensuring reliability and maintainability. Key quotes include 'A materialized view of understanding that is useful while current, disposable when stale' from Chad Fowler's writings on Phoenix Architectures, which encapsulate the shift towards more transient and regenerable code. The piece argues that as AI becomes more adept at coding, traditional software engineers must focus on enhancing their engineering discipline to complement AI tools effectively.

---

## [Agentic Code Review](https://addyosmani.com/blog/agentic-code-review/)

**Source**: AddyOsmani.com | **Tags**: `agent-pr`, `coding`, `review` | **Published**: 2026-06-15

The article argues that the central challenge has shifted from writing code to understanding it, emphasizing a tiered review process with evidence requirements. It highlights Simon Willison's phrase 'your job is to deliver code you have proven to work' and mentions specific numbers such as agent PRs being 51% larger on average and requiring a statement of intent before review. The key point is that while writing has become cheaper, understanding remains expensive, making rigorous review critical.

---
