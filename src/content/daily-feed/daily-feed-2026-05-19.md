---
title: "Daily Feed — 2026-05-19"
date: "2026-05-19"
description: "26 articles from Drew DeVault's blog, Geoffrey Huntley, Evan Hahn (dot com) and 7 others, covering llm, ai, programming and open-source."
series: "Daily Feed"
---

## [Add an LLM policy for rust-lang/rust](https://drewdevault.com/blog/LLM-policy-for-Rust/)

**Source**: Drew DeVault's blog | **Tags**: `llm`, `policy`, `rust-lang` | **Published**: 2026-05-15 | **Novelty**: 38%

The rust-lang/rust project has added a new LLM (Large Language Model) policy, which restricts discussions on the long-term social or economic impact of LLMs, their environmental impact, copyright issues related to LLM output, and moral judgements about people who use LLMs. The enforcement will be assisted by the moderation team.

---

## [the aussie gov just screwed startup founders. my musings.](https://ghuntley.com/livid/)

**Source**: Geoffrey Huntley | **Tags**: `activism`, `government`, `policies`, `startup` | **Published**: 2026-05-18 | **Novelty**: 37%

The article by Geoffrey Huntley discusses the negative impact of recent Australian government policies on startup founders. Huntley highlights specific measures that he believes are detrimental, suggesting a call to action for affected individuals to respond. The post is framed as activism and offers an exclusive free subscription deal to its readership.

---

## [Make ZIP files smaller with ZIP Shrinker](https://evanhahn.com/make-zip-files-smaller-with-zip-shrinker/)

**Source**: Evan Hahn (dot com) | **Tags**: `compression`, `tool`, `webassembly`, `zip` | **Published**: 2026-05-16 | **Novelty**: 35%

The article introduces ZIP Shrinker, a browser tool that re-compresses files with libdeflate for better compression, removes metadata and unnecessary directories to reduce file size. The tool supports various formats like APK, EPUB, JAR, and more. Key details include the use of libdeflate.js (a WebAssembly wrapper) and specific savings examples such as a 15.8 MiB reduction in Linux v6.19 source files.

---

## [Glaucous-winged Gull, Brown Pelican, Snowy Egret, Canada Goose](https://simonwillison.net/2026/May/18/sighting-362781627/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `birdwatching`, `los-angeles-river`, `pelican` | **Published**: 2026-05-18 | **Novelty**: 33%

The author spotted a Brown Pelican during an early morning walk by the Los Angeles River, along with other birds such as Glaucous-winged Gulls, Snowy Egrets, and Canada Geese. Notable was the observation of goslings near a swan boat lake despite not capturing a good photo of the pelican.

---

## [GDS weighs in on the NHS's decision to retreat from Open Source](https://simonwillison.net/2026/May/17/gds-weighs-in/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `govtech`, `nhs`, `open-source` | **Published**: 2026-05-17 | **Novelty**: 29%

The Government Digital Service (GDS) has issued a recommendation to keep digital resources open by default, citing increased costs and reduced reuse as reasons against closing repositories. This stance is seen as a significant escalation in the ongoing debate over the NHS's decision to retreat from open source following Project Glasswing vulnerabilities.

---

## [Warelay -> OpenClaw](https://simonwillison.net/2026/May/16/openclaw-names/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `git`, `github`, `history`, `names` | **Published**: 2026-05-16 | **Novelty**: 28%

The project OpenClaw has undergone several name changes since its initial commit as Warelay, including CLAWDIS, CLAWDBOT, Clawdbot, and Moltbot. The tool first_line_history.py was used to trace these changes through the Git history of the README file, revealing a total of six distinct names over 8 months.

---

## [Not so locked in any more](https://simonwillison.net/2026/May/14/not-so-locked-in/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `languages`, `lock-in`, `programming` | **Published**: 2026-05-14 | **Novelty**: 28%

Mitchell Hashimoto's statement about Bun migrating from Zig to Rust highlights the decreasing importance of language lock-in. The article author recalls a conversation with someone who recently rewrote legacy iPhone and Android apps using React Native, citing improved support as justification, and mentioning the flexibility to revert to native development if needed.

---

## [
Alternatives for the EDIT tool of LLM agents
](
http://antirez.com/news/166
)

**Source**: 
<antirez>
 | **Tags**: `ds4-project`, `edit-tool`, `llm`, `optimization`, `token-poor` | **Published**: 2026-05-19 | **Novelty**: 27%

The article discusses the development of a tag-based EDIT tool for LLM agents, which improves upon the existing CAS (check and set) model by using line numbers and tags. This design aims to reduce token usage while maintaining reliability in local inference environments where token scarcity is a concern. The tool returns lines with checksums as tags, allowing the LLM to efficiently edit code without reissuing previous edits.

---

## [How to learn dbt cheap and fast?](https://vutr.substack.com/p/how-to-learn-dbt-cheap-and-fast)

**Source**: VuTrinh. | **Tags**: `cli-tool`, `data-engineering`, `dbt`, `learning` | **Published**: 2026-05-15 | **Novelty**: 26%

Learn_dbt is a CLI tool offering 49 hands-on exercises and lessons for learning dbt, priced at $7 per month. It includes access to over 200 data engineering articles and other learning tools like learn_spark. The platform supports students with education email discounts and offers additional discounts to Vietnamese users due to payment issues.

---

## [QR code generator](https://simonwillison.net/2026/May/15/qr-code-generator/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `customization`, `qr-code`, `tools`, `wi-fi` | **Published**: 2026-05-15 | **Novelty**: 26%

The article introduces a QR code generator tool created by Claude for generating both text/URL and WiFi network QR codes. The tool offers customization options including multiple design styles, adjustable sizes, custom colors, borders, and the ability to download as PNG files or copy directly to the clipboard. Notably, it supports various design patterns such as square and liquid shapes.

---

## [datasette-llm-limits 0.1a0](https://simonwillison.net/2026/May/15/datasette-llm-limits/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `datasette`, `limits`, `llm`, `spending` | **Published**: 2026-05-15 | **Novelty**: 26%

The article introduces datasette-llm-limits 0.1a0, a plugin for Datasette that, when used with datasette-llm and datasette-llm-accountant, allows setting per-user or global spending limits on LLM usage within the platform. An example configuration shows limiting users to $1.00 of LLM usage daily based on their identity (actor) in a rolling 24-hour window.

---

## [
A few words on DS4
](
http://antirez.com/news/165
)

**Source**: 
<antirez>
 | **Tags**: `ai`, `inference`, `local-ai`, `quantization` | **Published**: 2026-05-14 | **Novelty**: 25%

The article discusses the rapid rise and future prospects of DwarfStar 4 (DS4), a local AI model that leverages an efficient quantization technique. The author, antirez, mentions potential future developments including better-tuned versions for specific tasks like coding, legal, or medical fields. He also highlights the importance of quality benchmarks, distributed inference, and hardware setup for long-term maintenance.

---

## [The last six months in LLMs in five minutes](https://simonwillison.net/2026/May/19/5-minute-llms/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `ai-models`, `coding-agents`, `llms` | **Published**: 2026-05-19 | **Novelty**: 24%

The article highlights significant advancements in large language models (LLMs) over the past six months, particularly focusing on improved coding capabilities of models such as Claude Opus 4.5 and Gemini 3.1 Pro, which demonstrated better performance than previously released versions. Notably, the GLM-5.1 model from a Chinese AI lab was introduced as an open-weight 1.5TB monster, despite its hardware requirements. The author uses a pelican riding a bicycle test to compare the models' drawing abilities, showcasing the progression in generating detailed and coherent images.

---

## [PaddleOCR 3.5: Running OCR and Document Parsing Tasks with a Transformers Backend](https://huggingface.co/blog/PaddlePaddle/paddleocr-transformers)

**Source**: Hugging Face - Blog | **Tags**: `document-parsing`, `integration`, `ocr`, `transformers` | **Published**: 2026-05-18 | **Novelty**: 24%

PaddleOCR 3.5 introduces the option to run its OCR and document parsing models with Hugging Face Transformers as an inference backend by setting engine='transformers'. This allows for tighter integration with Hugging Face-centered workflows, including RAG, Document AI, search, analytics, or agent applications, while maintaining support for Paddle static and dynamic graph backends. The demo can be accessed via https://huggingface.co/spaces/PaddlePaddle/paddleocr-3.5-transformers-demo.

---

## [OlmoEarth v1.1: A more efficient family of models](https://huggingface.co/blog/allenai/olmoearth-v1-1)

**Source**: Hugging Face - Blog | **Tags**: `machine-learning`, `remote-sensing`, `satellite-imaging`, `transformers` | **Published**: 2026-05-19 | **Novelty**: 23%

OlmoEarth v1.1 is a new family of transformer-based models that decreases sequence lengths by up to 3x, making them three times cheaper than the original OlmoEarth v1 while maintaining similar performance on research benchmarks and tasks. The key innovation lies in how tokens are designed: each patch of Sentinel-2 imagery generates three tokens instead of one per resolution, reducing token counts significantly. This approach allows for substantial savings across pretraining, fine-tuning, and inference without compromising model efficiency.

---

## [inaturalist-clumper 0.1](https://simonwillison.net/2026/May/15/inaturalist-clumper/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `blogging`, `inaturalist`, `release` | **Published**: 2026-05-15 | **Novelty**: 23%

The article describes the release of inaturalist-clumper 0.1, a tool used for publishing iNaturalist sightings on a personal blog. The JSON output from this tool can be viewed as an example, indicating its functionality and current state after several weeks of production use.

---

## [Quoting Julia Evans](https://simonwillison.net/2026/May/16/julia-evans/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `css`, `frontend`, `web-development` | **Published**: 2026-05-16 | **Novelty**: 22%

Julia Evans reflects on her journey with CSS, noting that mastering the technology has resolved many of her previous frustrations and shown that 'centering' is more complex than initially thought. She emphasizes that CSS's complexity arises from its challenge in solving intricate layout problems.

---

## [Western Gull, Rock Pigeon](https://simonwillison.net/2026/May/15/sighting-361818285/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `bird`, `los-angeles`, `seagull`, `starbucks` | **Published**: 2026-05-15 | **Novelty**: 22%

The observation noted a Western Gull feeding on Starbucks food, an interesting detail as it highlights the interaction between wildlife and urban environments. The sighting took place in Los Angeles at 7:42 AM, providing specific timing for context.

---

## [Quoting Mitchell Hashimoto](https://simonwillison.net/2026/May/14/mitchell-hashimoto/#atom-everything)

**Source**: Simon Willison's Weblog | **Tags**: `bun`, `languages`, `programming`, `rust` | **Published**: 2026-05-14 | **Novelty**: 18%

Mitchell Hashimoto discusses the flexibility of programming languages, specifically citing Bun's rapid transition from Zig to Rust as an example. He suggests that programming languages like Rust can be easily discarded and replaced when they become unnecessary or outdated, highlighting the fungibility of modern programming languages in just a week or two.

---

## [Don't Outsource the Learning](https://addyosmani.com/blog/dont-outsource-learning/)

**Source**: AddyOsmani.com | **Tags**: `ai`, `cognitive-debt`, `engineering`, `learning` | **Published**: 2026-05-16 | **Novelty**: 16%

The article argues against relying solely on AI for code generation, emphasizing the importance of actively learning. It highlights a study by Anthropic where engineers who used AI assistance scored lower on comprehension quizzes compared to those who did not. The key takeaway is that using AI should be balanced with intentional learning, such as writing down hypotheses before asking for help or re-deriving code from scratch. For example, the article suggests using 'Learning Mode' features like Claude's Socratic questioning.

---

## [Maintainability sensors for coding agents](https://martinfowler.com/articles/sensors-for-coding-agents.html)

**Source**: Martin Fowler | **Tags**: `ai`, `coding`, `eslint`, `maintainability`, `static-analysis` | **Published**: 2026-05-19

The article introduces the use of maintainability sensors during coding sessions and in CI pipelines to enhance code quality for AI-generated codebases. Notable points include customizing ESLint messages for better self-correction, such as allowing exceptions for cyclomatic complexity thresholds, and identifying trade-offs between rules like max-lines and max-lines-per-function. The author shares observations on managing warnings and the potential for a false sense of security with static analysis tools.

---

## [Type out the code>](https://haskellforall.com/2026/05/type-out-the-code)

**Source**: Haskell for all | **Tags**: `coding`, `programming`, `syntax`, `types` | **Published**: 2026-05-19

The article emphasizes the importance of typing out code from memory to improve comprehension and fluency, citing 'generation effect' in cognitive psychology. It advocates for frequent practice with syntax, types, and names, arguing that such exercises lead to broader programming excellence. The author provides concrete examples like correct use of TypeScript's type annotations over verbose natural language descriptions and highlights the importance of familiarizing oneself with prior art to avoid reinventing the wheel.

---

## [Introducing the Ettin Reranker Family](https://huggingface.co/blog/ettin-reranker)

**Source**: Hugging Face - Blog | **Tags**: `distillation`, `multinode-training`, `reranking` | **Published**: 2026-05-19

The article introduces the Ettin Reranker family of models, trained from 17M to 1B parameters using a single simple recipe for pointwise MSE distillation from a strong teacher model. Notable is that every released size outperforms smaller models like ms-marco-MiniLM-L*, with cross-encoder/ettin-reranker-400m-v1 nearly matching the 1.54B parameter teacher's performance on MTEB and NanoBEIR.

---

## [Fine-Tuning NVIDIA Cosmos Predict 2.5 with LoRA/DoRA for Robot Video Generation](https://huggingface.co/blog/nvidia/cosmos-fine-tuning-for-robot-video-generation)

**Source**: Hugging Face - Blog | **Tags**: `cosmos`, `dora`, `lora`, `videogeneration` | **Published**: 2026-05-18

The article introduces the use of LoRA and DoRA for fine-tuning a pre-trained Cosmos model to generate more physically plausible and task-consistent videos. It details a specific workflow with 100 epochs of training, achieving better results at rank 8 than at rank 32 for instruction following but similar performance across ranks for geometric consistency and physical plausibility. Notable code snippets include the use of `arch_invariant_rand` for reproducible initial latent noise generation.

---

## [The Open Agent Leaderboard](https://huggingface.co/blog/ibm-research/open-agent-leaderboard)

**Source**: Hugging Face - Blog | **Tags**: `ai`, `benchmarks`, `evaluation`, `generalization`, `open-source` | **Published**: 2026-05-18

The article introduces the Open Agent Leaderboard, an open evaluation framework that measures full agent systems across six diverse benchmarks: SWE-Bench Verified, BrowseComp+, AppWorld, tau2-Bench Airline & Retail, and tau2-Bench Telecom. This approach assesses both quality and cost to determine how general-purpose AI agents perform in various settings, revealing that general agents can match or outperform specialized ones without benchmark-specific tuning. The framework is designed to be open-source from day one, encouraging community contribution and transparency.

---

## [Fragments: May 14](https://martinfowler.com/fragments/2026-05-14.html)

**Source**: Martin Fowler | **Tags**: `agentic-programming`, `legacy-systems`, `llm` | **Published**: 2026-05-14

The article discusses a day at The Orchard Retreat where participants explored the future of software development with agentic programming. Key points include using large language models (LLMs) for behavioral cloning and code porting, the concept of 'Interrogatory LLM' for reviewing complex specifications, and the debate over 'Lift and Shift' vs. modernizing legacy systems. Notable examples include a Rust clone of GNU Cobol in 3 days and discussions on how LLMs can help with data transformation and chaos engineering.

---
