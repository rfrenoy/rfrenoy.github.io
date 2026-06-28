---
title: "Daily Feed — 2026-06-28"
date: "2026-06-28"
description: "34 articles from Haskell for all, The Adventures of Blake, Simon Willison's Weblog and 7 others, covering ai, security, datasette and sqlite."
series: "Daily Feed"
---

## [Record type inference for dummies](https://haskellforall.com/2026/06/record-type-inference-for-dummies)

**Source**: Haskell for all | **Tags**: `haskell`, `nix`, `row-polymorphism`, `type-inference` | **Published**: 2026-06-23 | **Novelty**: 41%

The article introduces row polymorphism and its application in type inference for records with optional fields, emphasizing the use of named ellipses to handle extra record fields. It provides a Haskell implementation that includes syntax for records, field access, and let bindings, showcasing how these constructs can be used to infer types in Nix-like languages. Notable is the emphasis on row polymorphism as a superior approach compared to subtyping when dealing with optional or extended record fields.

---

## [Let's Play a Game](https://letters.blakeboles.com/p/lets-play-a-game)

**Source**: The Adventures of Blake | **Tags**: `ethics`, `finance`, `games` | **Published**: 2026-06-21 | **Novelty**: 35%

The author decided to use his capital gains from a financial experiment to create a year-long fellowship for himself, focusing on organizing and sharing favorite connection games. He plans to pay himself $1000/month with the proceeds of this 'experiment,' which grew his initial investment of $20,000 to $44,000 over four years. The author explores ethical considerations around capital gains, self-serving motivations, and the value of group games in fostering connection.

---

## [simonw/browser-compat-db](https://simonwillison.net/2026/Jun/24/browser-compat-db/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `compatibility`, `datasette`, `github`, `sqlite` | **Published**: 2026-06-24 | **Novelty**: 34%

The article describes converting Mozilla's mdn/browser-compat-data repository into a 66MB SQLite database using a Claude Code script. The database is hosted on GitHub with open CORS headers and can be explored via Datasette Lite, thanks to an automated GitHub Actions workflow that builds and deploys the database.

---

## [Optimizing cloud economics with linear elastic caching](https://research.google/blog/optimizing-cloud-economics-with-linear-elastic-caching/)

**Source**: The latest research from Google | **Tags**: `caching`, `cloud-economics`, `elasticity`, `machine-learning`, `spanner` | **Published**: 2026-06-25 | **Novelty**: 33%

Linear elastic caching optimizes cache management by dynamically adjusting the cache size based on real-time workloads, similar to a ski rental model. This approach reduces total cost of ownership (TCO) by up to 5% without compromising performance, as demonstrated through extensive testing with Spanner production workloads and public traces. The system uses lightweight machine learning models and decision trees to determine the optimal time-to-live (TTL) for each cached page.

---

## [OPFS + Pyodide test harness](https://simonwillison.net/2026/Jun/23/opfs-pyodide/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `browser`, `datasette`, `opfs`, `pyodide`, `sqlite` | **Published**: 2026-06-23 | **Novelty**: 33%

The author has created a test harness using OPFS (Origin Private File System) and Pyodide to enable the Python Datasette application to run entirely in the browser. This setup aims to explore the possibility of editing persistent SQLite files stored on the user's computer, showcasing an innovative approach to web-based database management.

---

## [Run a vLLM Server on HF Jobs in One Command](https://huggingface.co/blog/vllm-jobs)

**Source**: Hugging Face - Blog | **Tags**: `chatbot`, `coding-agent`, `huggingface`, `openai`, `vllm` | **Published**: 2026-06-26 | **Novelty**: 32%

This article details how to deploy vLLM servers on Hugging Face infrastructure with a single command, allowing for quick model testing and evaluation. Key points include using the `hf jobs run` command to launch a server, exposing specific ports for public access, and setting up various flags for different models. Notable pieces of code demonstrate querying the API via curl or Python's OpenAI client, as well as running an interactive chat interface with Gradio.

---

## [Prompt Injection as Role Confusion](https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `llm`, `prompt-injection`, `role-confusion`, `security` | **Published**: 2026-06-22 | **Novelty**: 31%

The article discusses 'role confusion' as a mechanism where large language models (LLMs) misinterpret their own role tags due to the style of untrusted user input, leading to prompt injection vulnerabilities. The study shows that destyling text by rewriting it slightly can significantly reduce model compliance with role expectations, changing success rates from 61% to just 10%. This research highlights a critical challenge in securing LLMs against malicious inputs.

---

## [Quoting Tom MacWright](https://simonwillison.net/2026/Jun/24/tom-macwright/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `authenticity`, `job-applications` | **Published**: 2026-06-24 | **Novelty**: 30%

Tom MacWright criticizes job applications and portfolios that appear to be entirely generated by large language models (LLMs), noting the lack of personal insight or authenticity. He highlights how such applications are generic, impersonal, and reveal little about the applicant other than their tool usage.

---

## [Experimenting with the proposed Cross-Origin Storage API in Transformers.js](https://huggingface.co/blog/cross-origin-storage)

**Source**: Hugging Face - Blog | **Tags**: `cos`, `storage`, `transformersjs`, `web` | **Published**: 2026-06-23 | **Novelty**: 29%

The article introduces the Cross-Origin Storage (COS) API, which enables apps to share large model weights and other resources across different origins without re-downloading them. This is demonstrated using Transformers.js, where enabling COS reduces duplicate downloads by storing model weights in a shared cache and verifying their integrity on write. The code example shown involves setting `env.experimental_useCrossOriginStorage = true` before initializing the pipeline.

---

## [Porting the Moebius 0.2B image inpainting model to run in the browser with Claude Code](https://simonwillison.net/2026/Jun/22/porting-moebius/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `browser`, `inpainting`, `model-porting`, `onnx`, `webgpu` | **Published**: 2026-06-22 | **Novelty**: 29%

The article describes the process of porting Moebius, a lightweight image inpainting model originally written for PyTorch and NVIDIA CUDA, to run in the browser using WebGPU. This was achieved by converting the model to ONNX format and utilizing the ONNX Runtime Web library. The project demonstrates how modern browsers can handle large model weights through caching mechanisms, enabling real-time image editing capabilities without server dependencies. The demo is available at simonw.github.io/moebius-web/.

---

## [PP-OCRv6 on Hugging Face: 50-Language OCR from 1.5M to 34.5M Parameters](https://huggingface.co/blog/PaddlePaddle/pp-ocrv6)

**Source**: Hugging Face - Blog | **Tags**: `multilingual`, `ocr`, `paddleocr`, `transformers` | **Published**: 2026-06-22 | **Novelty**: 29%

PP-OCRv6 introduces a new model family with three tiers ranging from 1.5M to 34.5M parameters, supporting up to 50 languages and achieving improved detection (86.2%) and recognition accuracy over PP-OCRv5_server (+4.6% and +5.1%, respectively). Notable features include the use of PPLCNetV4 for both text detection and recognition, as well as the RepLKFPN detector and EncoderWithLightSVTR recognizer. Users can integrate it with various inference backends like Paddle Inference, ONNX Runtime, or Transformers from Hugging Face.

---

## [Vulnerability Reports Are Not Special Anymore](https://words.filippo.io/vuln-reports/)

**Source**: Filippo Valsorda | **Tags**: `llms`, `open-source`, `security`, `vulnerabilities` | **Published**: 2026-06-23 | **Novelty**: 29%

The article discusses how the landscape of vulnerability reports has changed due to advancements in LLMs, making them less special than previously thought. It emphasizes the need for better triage and classification of reports to distinguish between significant vulnerabilities and noise. The author also highlights his work with Geomys, an organization funded by tech companies that supports open-source maintenance, including security issues in projects like Go.

---

## [Accelerating Transformers Fine-Tuning with NVIDIA NeMo AutoModel](https://huggingface.co/blog/nvidia/accelerating-fine-tuning-nvidia-nemo-automodel)

**Source**: Hugging Face - Blog | **Tags**: `expert-parallelism`, `mixture-of-experts`, `nvidia`, `performance`, `transformers` | **Published**: 2026-06-24 | **Novelty**: 29%

NVIDIA NeMo AutoModel significantly boosts performance for Mixture-of-Experts (MoE) models, achieving up to 3.7x higher training throughput and reducing GPU memory usage by 29-32% compared to Transformers v5 on models like Qwen3-30B-A3B and Nemotron 3 Nano 30B A3B. The key innovations include Expert Parallelism (EP), DeepEP fused all-to-all dispatch, and TransformerEngine kernels, allowing for seamless integration with HuggingFace's API. For instance, EP shards expert weights across GPUs, making training feasible even on large models like Nemotron 3 Ultra.

---

## [Introducing the FFASR Leaderboard: Benchmarking ASR in the Real World](https://huggingface.co/blog/ffasr-leaderboard)

**Source**: Hugging Face - Blog | **Tags**: `acoustic`, `asr`, `benchmark`, `evaluation`, `far-field` | **Published**: 2026-06-24 | **Novelty**: 28%

The FFASR Leaderboard introduces a new benchmark for evaluating ASR models under realistic far-field acoustic conditions, including reverberation and low SNR. It uses simulated data from fourteen rooms to measure performance across various conditions, with the goal of encouraging models that are robust in real-world environments. The leaderboard reports both near-field (dry) and far-field WER side by side, making it clear how well a model performs under different acoustic conditions.

---

## [Temporary Cloudflare Accounts for AI agents](https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `cloudflare`, `deployment`, `temporary`, `workers` | **Published**: 2026-06-21 | **Novelty**: 28%

Cloudflare now allows the creation of temporary Workers projects for AI agents and other users via the command `npx wrangler deploy --temporary`, which deploys applications for 60 minutes before expiring. The deployment URL can be extended by claiming the project after it has been created.

---

## [Quoting Dean W. Ball](https://simonwillison.net/2026/Jun/26/dean-w-ball/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `economics`, `infrastructure` | **Published**: 2026-06-26 | **Novelty**: 27%

Dean W. Ball discusses the economic challenges faced by organizations deploying frontier AI models, noting that after a brief period of high profitability, margins rapidly decrease due to competition. He also highlights David Sacks' view on the critical importance of global access for US AI services infrastructure, implying potential limitations in exclusive government-approved access to advanced models.

---

## [Which tokens does a hybrid model predict better?](https://huggingface.co/blog/allenai/hybrid-token-prediction)

**Source**: Hugging Face - Blog | **Tags**: `hybrid-models`, `language-modeling`, `transformers` | **Published**: 2026-06-25 | **Novelty**: 27%

The study found that hybrid models perform better than transformers on predicting meaningful tokens such as nouns, verbs, and adjectives, with a loss gap of around 0.04 compared to 0.02 for function words. However, the advantage nearly disappears when the next token is a simple repeat of something already in the input. The research also suggests that filtered token losses can reveal fine-grained differences between architectures during pretraining.

---

## [Build real agentic apps using CUGA: two dozen working examples on a lightweight harness](https://huggingface.co/blog/ibm-research/cuga-apps)

**Source**: Hugging Face - Blog | **Tags**: `agents`, `cuga`, `governance`, `ml-agents`, `open-source` | **Published**: 2026-06-23 | **Novelty**: 26%

CUGA is an agentic framework that emphasizes governance and model-agnosticism from the outset, allowing agents to be deployed unchanged from development. Key features include a minimal agent library with runtime policies, open-source CUGA-agent for easy deployment on various models including gpt-oss-120b, and capability extensions like multi-agent supervisors and ALTK-Evolve. A notable piece of code is the `create_llm` function which enables model switching without changing the agent definition, demonstrated in the IBM Cloud Advisor example.

---

## [Thinking to recall: How reasoning unlocks parametric knowledge in LLMs](https://research.google/blog/thinking-to-recall-how-reasoning-unlocks-parametric-knowledge-in-llms/)

**Source**: The latest research from Google | **Tags**: `hallucination`, `language-models`, `parametric-knowledge`, `reasoning` | **Published**: 2026-06-24 | **Novelty**: 26%

The study reveals that reasoning traces in large language models (LLMs) can significantly enhance recall of parametric knowledge, even for simple factual questions. This is attributed to two mechanisms: a computational buffer effect where additional reasoning tokens provide more time for internal processing, and factual priming, where related facts are generated to prime the network for correct answer retrieval. The research also highlights that hallucinated intermediate facts can severely impact accuracy, suggesting strategies to improve model reliability through process rewards for factually supported steps.

---

## [What happened after 2,000 people tried to hack my AI assistant](https://simonwillison.net/2026/Jun/26/hack-my-ai-assistant/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `hacking`, `openclaw`, `security` | **Published**: 2026-06-26 | **Novelty**: 26%

Fernando Irarrázaval conducted a challenge on hackmyclaw.com to test if OpenClaw, an AI assistant based on Opus 4.6, could be hacked through email injection attacks. Despite 6,000 attempts and $500 in token spend, no secret was leaked, highlighting the effectiveness of anti-prompt-injection rules in preventing such attacks.

---

## [sqlite-utils 4.0rc1 adds migrations and nested transactions](https://simonwillison.net/2026/Jun/21/sqlite-utils-40rc1/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `migrations`, `sqlite`, `transactions` | **Published**: 2026-06-21 | **Novelty**: 25%

sqlite-utils 4.0rc1 introduces migrations and nested transactions. Migrations are defined using the `Migrations` class, with examples including table creation and column addition. The new `atomic()` context manager supports nested transactions for more complex database operations. Both features provide powerful tools for database management and maintenance without requiring extensive changes to existing codebases.

---

## [A couple of months ago in Miami, I sat down and dumped my brains. Here's the interview...](https://ghuntley.com/miami/)

**Source**: Geoffrey Huntley | **Tags**: `ai`, `career-advice`, `curiosity`, `software-engineering`, `transformative-technology` | **Published**: 2026-06-26 | **Novelty**: 25%

The article presents a series of provocative statements from an AI engineer in Miami. Key points include the distinction between coding and software engineering, the importance of curiosity for career survival, the shift towards AI-native teams, and the view that software development is becoming commoditized with token costs lower than human labor. Notable quotes suggest AI should be treated like a musical instrument, requiring deliberate practice to master its nuances.

---

## [AI and Liability](https://simonwillison.net/2026/Jun/25/ai-and-liability/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `liability`, `schneier` | **Published**: 2026-06-25 | **Novelty**: 25%

Bruce Schneier discusses a recent German ruling that Google is held liable for errors introduced by their AI. He argues that companies using AI should be treated the same as if they hired human writers, making them responsible for inaccuracies. This stance aims to prevent companies from using faulty AI as an excuse for avoiding liability.

---

## [Quoting Timothy B. Lee](https://simonwillison.net/2026/Jun/26/timothy-b-lee/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `llms` | **Published**: 2026-06-26 | **Novelty**: 25%

Timothy B. Lee criticizes the notion that language learning models (LLMs) require no skill and have no learning curve, comparing it to the idea that managing employees is effortless because they will follow any instruction given. This viewpoint challenges the belief that LLMs are a plug-and-play solution with minimal effort required from their users.

---

## [Incident Report: CVE-2026-LGTM](https://simonwillison.net/2026/Jun/26/incident-report/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `disagreement`, `finance`, `security` | **Published**: 2026-06-26 | **Novelty**: 24%

In a hypothetical incident on June 26, 2026, two AI review agents from competing vendors argued over the potential malice of the foxhole-lz4 package for 340 comments and $41,255 in inference costs. The disagreement led to API key revocation by Finance, with one vendor's marketing team attributing a significant stock market response to advancements in adversarial multi-agent security reasoning.

---

## [We got local models to triage the OpenClaw repo for FREE!*](https://huggingface.co/blog/local-models-pr-triage)

**Source**: Hugging Face - Blog | **Tags**: `agentic-classification`, `classification`, `local-models`, `triage` | **Published**: 2026-06-22 | **Novelty**: 24%

The article introduces agentic classification using medium-sized local models like gemma-4-26b-a4b and qwen3.6-35b-a3b for real-time issue/PR triage in open source contributions, comparing their performance to a SOTA cloud model. It details a specific recipe involving a restricted shell and final_json to securely run these models, and discusses applying this approach to other domains such as news categorization or customer support ticket triaging.

---

## [Accelerating Gemini Nano models on Pixel with frozen Multi-Token Prediction](https://research.google/blog/accelerating-gemini-nano-models-on-pixel-with-frozen-multi-token-prediction/)

**Source**: The latest research from Google | **Tags**: `gemini-nano`, `mobile-ai`, `mtp` | **Published**: 2026-06-26 | **Novelty**: 24%

The article introduces a new architecture called Multi-Token Prediction (MTP) that retrofits onto existing Gemini Nano v3 models, enabling faster text generation on mobile devices. The MTP head is appended to the final layers of the main model, leveraging its computations to predict multiple tokens at once and reducing memory overhead by directly querying the backbone’s frozen key-value cache without duplication. This results in a 50% speedup on Pixel 9 devices for certain tasks compared to standalone drafters with comparable parameter counts.

---

## [The Coming Loop](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)

**Source**: Armin Ronacher's Thoughts and Writings | **Tags**: `ai`, `loops`, `pi` | **Published**: 2026-06-23 | **Novelty**: 24%

Boris Cherny discusses the rise of 'harness loops'—machines handling coding tasks beyond the agent loop, where models produce code that is often too complex and defensive. He contrasts this with the need for lasting software that requires human understanding, advocating for a balanced approach to harnessing AI while retaining engineering principles. Concrete examples include the use of Claude Code and Pi for automation in porting and performance exploration.

---

## [Quoting OpenAI](https://simonwillison.net/2026/Jun/26/openai/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `gpt`, `openai` | **Published**: 2026-06-26 | **Novelty**: 23%

OpenAI has launched a limited preview of the GPT-5.6 series, including Sol (flagship model), Terra (balanced model at $2.50 input / $15 output), and Luna (fast &amp; affordable model at $1 input / $6 output). The models offer competitive performance with more predictable prompt caching, where cache writes are billed at 1.25x the uncached rate for GPT-5.6 and later models.

---

## [Shipping huggingface_hub every week with AI, open tools, and a human in the loop](https://huggingface.co/blog/huggingface-hub-release-ci)

**Source**: Hugging Face - Blog | **Tags**: `ai`, `automation`, `github-actions`, `release-management` | **Published**: 2026-06-23 | **Novelty**: 22%

The article introduces an automated release workflow for huggingface_hub that leverages AI-generated draft notes, verifies them with deterministic scripts, and involves a human reviewer to ensure accuracy. Notable pieces of code include the use of OIDC Trusted Publishing for secure PyPI releases and the trust-but-verify loop where a Python script checks PRs against the model's drafts before final approval.

---

## [I spent 12 Hours rebuilding my Junior year project: Part 2 - The Transformation Layer](https://vutr.substack.com/p/i-spent-12-hours-rebuilding-my-junior-26f)

**Source**: VuTrinh. | **Tags**: `airflow`, `ci-cd`, `dbt`, `snowflake`, `terraform` | **Published**: 2026-06-25 | **Novelty**: 22%

This project showcases a fully integrated data transformation pipeline from raw web scraping to production-grade star schema using Snowflake and dbt. Key features include per-user development schemas, incremental continuous deployment via Terraform-managed infrastructure, and auto-hosted dbt documentation on CloudFront. Notably, it uses an OIDC-based authentication mechanism for AWS, ensuring no static credentials are stored.

---

## [DuckDB at a high level](https://vutr.substack.com/p/duckdb-at-a-high-level)

**Source**: VuTrinh. | **Tags**: `analytics`, `data-engineering`, `duckdb`, `embedded-database` | **Published**: 2026-06-23 | **Novelty**: 20%

DuckDB is a unique OLAP system introduced in 2019 that challenges traditional database design by operating as an embedded SQL interface, inspired by SQLite. It aims to simplify data processing and analytics, requiring only $7/month for access to extensive learning materials, including articles and practice problems, making it accessible for junior-to-senior Data Engineers. Notable features include its single-node simplicity, columnar storage, vectorized operations, and parallel processing capabilities.

---

## [Make AI Boring Again](https://charitydotwtf.substack.com/p/make-ai-boring-again)

**Source**: charity.wtf | **Published**: 2026-06-24 | **Novelty**: 19%

No summary available.

---

## [datasette 1.0a35](https://simonwillison.net/2026/Jun/23/datasette/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `api`, `datasette`, `documentation`, `tables` | **Published**: 2026-06-23 | **Novelty**: 16%

Datasette 1.0a35 introduces a new 'Create table' interface with an accompanying /&lt;database&gt;/-/create JSON API, allowing for column definition and foreign keys, alongside an 'Alter table' feature through the /&lt;database&gt;/&lt;table&gt;/-/alter API for modifying existing tables. These features are supported by comprehensive template context documentation generated from dataclass definitions, ensuring stability until Datasette 2.0.

---
