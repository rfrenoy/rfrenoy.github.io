---
title: "Daily Feed — 2026-08-26"
date: "2026-08-26"
description: "38 articles from matduggan.com, Evan Hahn (dot com), Simon Willison's Weblog and 9 others, covering ai, llm, code-review and upgrade."
series: "Daily Feed"
---

## [In Purgatory Everyone Likes Crepes: My Time at a Greek All-Inclusive](https://matduggan.com/in-purgatory-everyone-likes-crepes-my-time-at-a-greek-all-inclusive/)

**Source**: matduggan.com | **Tags**: `apathy`, `greece`, `tourism` | **Published**: 2026-08-21 | **Novelty**: 39%

The author describes his experience on a Greek resort where he encounters various cultural and societal observations. Notably, he witnesses the apathetic response to an impending wildfire and reflects on the simplicity of life in an all-inclusive environment. The article also highlights the Mini Disco t-shirt incident as a pivotal moment and critiques the tourists' preoccupation with trivial purchases like t-shirts despite the larger issues at hand.

---

## [Vim's UserGettingBored autocmd](https://evanhahn.com/usergettingbored-vim/)

**Source**: Evan Hahn (dot com) | **Tags**: `autocmd`, `joke-feature`, `vim` | **Published**: 2026-08-22 | **Novelty**: 38%

Vim’s 'UserGettingBored' autocmd is a joke feature that first appeared in July 2000, intended to trigger when the user presses the same key 42 times. Although it has never actually functioned as described, developer Mike Smith created an unofficial plugin in 2022 to bring this whimsical idea to life by displaying Samuel L. Jackson’s picture after 42 consecutive keystrokes in Insert mode.

---

## [Stop Making TUIs](https://simonwillison.net/2026/Aug/21/stop-making-tuis/)

**Source**: Simon Willison's Weblog | **Tags**: `macos`, `native`, `tui`, `ui` | **Published**: 2026-08-21 | **Novelty**: 34%

Thomas Ptacek advocates for building native user interfaces instead of text-based user interfaces (TUIs) even for small tools, stating that the cost barrier has nearly disappeared. He uses his experience with vibe-coded macOS task bar apps as an example, emphasizing the potential to change thinking processes through this practice.

---

## [smolmachines / smolvm as a sandbox for untrusted Python &amp; JavaScript](https://simonwillison.net/2026/Aug/19/smolmachines-untrusted-sandbox/)

**Source**: Simon Willison's Weblog | **Tags**: `performance`, `sandbox`, `security`, `smolvm`, `untrusted-code` | **Published**: 2026-08-19 | **Novelty**: 34%

The article discusses using smolmachines / smolvm as a sandbox for untrusted Python and JavaScript code, leveraging hardware-isolated virtual machines to ensure security. The tests showed cold starts around 0.6–1.5 seconds and warm executions around 50 ms, with features like CPU/RAM limits and guest-enforced timeouts. A creative solution involved running the tests on GitHub Actions runners due to environmental limitations in Claude Code for web.

---

## [AgentHands: Generating interactive hand gestures for spatially grounded agent conversations in XR](https://research.google/blog/agenthands-generating-interactive-hand-gestures-for-spatially-grounded-agent-conversations-in-xr/)

**Source**: The latest research from Google | **Tags**: `ai-assistants`, `hand-gestures`, `spatial-awareness`, `xr` | **Published**: 2026-08-25 | **Novelty**: 33%

AgentHands is a research prototype that introduces co-speech gestures to extended reality (XR) environments, enhancing AI interactions by aligning verbal instructions with spatially accurate hand movements. This system, which includes an environment awareness module and a gesture event library, was tested in tasks like orchid care and 3D printer operation, showing significant improvements in spatial grounding and understanding of complex actions.

---

## [EVE Online: The Move to Python 3 Begins!](https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/)

**Source**: Simon Willison's Weblog | **Tags**: `code-review`, `game-development`, `python`, `upgrade` | **Published**: 2026-08-25 | **Novelty**: 33%

EVE Online is initiating a major upgrade to Python 3 from their long-used Stackless Python 2.7, involving the futurize script on over 2 million lines of code and meticulous manual review for handling differences in behavior between Python 2 and 3, such as integer division yielding different results. The company plans to replace Stackless Python in this process but has not detailed their strategy yet.

---

## [Your executable is a SQLite database](https://simonwillison.net/2026/Aug/24/your-executable-is-a-sqlite-database/)

**Source**: Simon Willison's Weblog | **Tags**: `binfmt_misc`, `elf`, `executable`, `sqlite` | **Published**: 2026-08-24 | **Novelty**: 31%

Farid Zakaria demonstrates a Linux trick where an SQLite database file is used as an executable binary by setting its application ID to 'SELF' and arranging ELF components into SQLite tables. The self-exec interpreter extracts and runs the necessary parts, and registration can be done using binfmt_misc for automatic execution.

---

## [How mobility gives language models a deeper understanding of place](https://research.google/blog/how-mobility-gives-language-models-a-deeper-understanding-of-place/)

**Source**: The latest research from Google | **Tags**: `ai`, `language-models`, `mobility`, `place-understanding` | **Published**: 2026-08-21 | **Novelty**: 31%

The article introduces Mobility-Embedded POIs (ME-POIs), a novel framework that enriches text-based place representations with mobility data, significantly improving predictions in tasks such as opening hours prediction, price-level classification, and busyness estimation. This approach uses aggregated and anonymized mobility patterns to create numerical vector representations of places, providing an 81.9% relative gain in predicting visit intent across unseen places compared to text-only models.

---

## [Quoting Matt Webb](https://simonwillison.net/2026/Aug/21/matt-webb/)

**Source**: Simon Willison's Weblog | **Tags**: `ai-education`, `augmented-reality`, `quaternions` | **Published**: 2026-08-21 | **Novelty**: 30%

Matt Webb used ChatGPT not just to generate code but as an educational tool, learning about quaternions enough to implement them in his app Galactic Compass 2, which now includes a new augmented reality mode. This approach highlights the role of AI as both a problem solver and an educational resource.

---

## [ChatGPT search now uses the site:operator at scale](https://simonwillison.net/2026/Aug/20/chatgpt-search-now-uses-the-siteoperator-at-scale/)

**Source**: Simon Willison's Weblog | **Tags**: `chatgpt`, `gpt`, `search`, `seo` | **Published**: 2026-08-20 | **Novelty**: 27%

Starting from August 8th, ChatGPT search began significantly utilizing the site: operator with a share of queries jumping to 16-17%, according to Promptwatch. This change coincides with the rollout of GPT-5.6 and suggests an increased focus on factual reliability and focused answers for Plus and Pro users.

---

## [Quoting Linus Torvalds](https://simonwillison.net/2026/Aug/22/linus-torvalds/)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `debugging`, `torvalds` | **Published**: 2026-08-22 | **Novelty**: 27%

Linus Torvalds recounts a debugging session where an AI repeatedly stated that the issue was unsolvable, but eventually contributed by adding debug code and analyzing it faithfully. The commit message is credited to the AI. This highlights the tension between human determination and AI pragmatism in solving complex technical problems.

---

## [Every Card Will Show · The earlier implementation, tests, audits, and accepted proofs said the algorithm was correct. None of them stated the whole problem.](https://christophermeiklejohn.com/ai/zabriskie/development/agents/2026/08/24/every-card-will-show.html)

**Source**: Christopher Meiklejohn | **Tags**: `algorithm`, `formal-verification`, `lean-theorem-proving`, `requirement-specification` | **Published**: 2026-08-24 | **Novelty**: 27%

The article details how formal verification using Lean theorem proving exposed a flaw in the implementation of a card scheduling algorithm, where the initial requirement was overly permissive. The proof uncovered that the original problem statement required minimizing the maximum number of supporting cards shown on any visit while ensuring each card is shown at least once over five visits. This example highlights the importance of defining clear, minimal requirements and using formal verification to catch implementation gaps early in the development process.

---

## [Practitioner Voice: The Writing Category Nobody has Named Yet](https://martinfowler.com/articles/practitioner-voice.html)

**Source**: Martin Fowler | **Tags**: `ai-writing`, `practitioner-voice`, `thought-leadership` | **Published**: 2026-08-19 | **Novelty**: 26%

The article introduces the concept of 'Practitioner Voice,' a new writing category that emphasizes personal judgment and experience over academic rigor or polished thought leadership. It highlights the work of Martin Fowler as an exemplar, proposing this approach as a way to differentiate genuine practitioner insights from AI-generated content like LLM Voice.

---

## [Quantization-Aware Healing: a compressed, 4-bit model that outperforms its full-precision original](https://huggingface.co/blog/MultiverseComputingCAI/quantization-aware-healing)

**Source**: Hugging Face - Blog | **Tags**: `compression`, `distillation`, `healing`, `quantization` | **Published**: 2026-08-25 | **Novelty**: 26%

The paper introduces Quantization-Aware Healing (QAH), a method that distills a compressed, 4-bit model directly from the original full-precision teacher rather than a recovered checkpoint. This approach allows the 4-bit model to outperform its bfloat16 recovery on 7 out of 9 benchmarks while being smaller and cheaper to run. The technique significantly reduces training time compared to quantization-aware training (QAT) and avoids the accuracy ceiling imposed by distilling from a degraded recovered model.

---

## [Quoting Paul Dix](https://simonwillison.net/2026/Aug/26/paul-dix/)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `programming`, `software` | **Published**: 2026-08-26 | **Novelty**: 26%

Paul Dix discusses the development of AI that wrote and refined a million lines of code to produce reliable software running on millions of machines, highlighting that the process involved more than just translation from one language to another. He emphasizes the capability of AI in building complex systems under proper guidance.

---

## [Anger, Anxiety and Agency](https://lucumr.pocoo.org/2026/8/24/anger-anxiety-agency/)

**Source**: Armin Ronacher's Thoughts and Writings | **Tags**: `ai`, `anxiety`, `curiosity` | **Published**: 2026-08-24 | **Novelty**: 25%

The article discusses the emotions of anxiety and curiosity as more constructive responses to technological advancements, particularly AI, than anger. It suggests that while it's understandable to feel anxious about the future due to uncertainty in one's profession and the world at large, focusing on curiosity can lead to valuable insights and opportunities for innovation. The author also highlights the complex societal and environmental impacts of these changes.

---

## [Anthropic’s best AI model struggles to attract users as cheaper tools thrive](https://simonwillison.net/2026/Aug/23/anthropics-best-ai-model-struggles-to-attract-users-as-cheaper-t/)

**Source**: Simon Willison's Weblog | **Tags**: `ai`, `model-popularity`, `revenue` | **Published**: 2026-08-23 | **Novelty**: 25%

Anthropic's 'Opus 5' model is less popular despite the company seeing significant revenue growth, with 'Fable' being less favored due to higher costs. The Ramp AI index shows that while Anthropic’s 'Opus 4.8' remains dominant at 28%, cheaper alternatives like 'Sonnet 4.6' are gaining traction. OpenAI's performance continues to outpace Anthropic, driven by the launch of GPT 5.6.

---

## [Granite 4.2 LLMs: How They're Built](https://huggingface.co/blog/ibm-granite/granite-4-2)

**Source**: Hugging Face - Blog | **Tags**: `granite`, `math`, `model`, `tool-calling`, `weather-api` | **Published**: 2026-08-25 | **Novelty**: 25%

The article details how the Granite model can be integrated into various agentic coding harnesses, such as OpenCode and Pi, to perform tasks like calculating mathematical expressions or checking weather conditions. Notably, it showcases a multi-turn conversation example with tool calling capabilities, where the model reasons through steps before executing an API call to get current weather data for Boston.

---

## [I have eliminated Microsoft from my life once and for all!](https://skuth.us/i-have-eliminated-microsoft/)

**Source**: §kuthus | **Tags**: `linux`, `microsoft`, `personal-stories`, `tech-adoption` | **Published**: 2026-08-24 | **Novelty**: 25%

The author details their journey to completely eliminate Microsoft products from their life over the past two years, starting with OneDrive and moving on to the Surface, Xbox, and ultimately Windows 10. They now use Linux and MacOS exclusively, finding them more reliable and secure than Microsoft alternatives. The author encourages others to make the switch if they are hesitant.

---

## [llm 0.33](https://simonwillison.net/2026/Aug/22/llm/)

**Source**: Simon Willison's Weblog | **Tags**: `embeddings`, `llm`, `openai`, `reasoning`, `templates` | **Published**: 2026-08-22 | **Novelty**: 24%

The article highlights several updates to the llm system, including upgrading to OpenAI Python library 3.x and introducing a key parameter in embedding models. It also introduces template repetition for combining model configurations and reasoning_summary options for API responses, specifically 'auto', 'concise', and 'detailed'. These features are implemented through specific pull requests (#1608, #1631, #757, #1620) and contribute to a more flexible and versatile system.

---

## [Advice to Young Developers](https://endler.dev/2026/advice-to-young-developers/)

**Source**: Matthias Endler | **Tags**: `coding`, `communication`, `learning`, `problem-solving`, `productivity` | **Published**: 2026-08-24 | **Novelty**: 24%

The article emphasizes the importance of problem-solving skills and a broader skill set beyond coding for young developers. It suggests focusing on learning how to build products, learn effectively, communicate ideas, and have multiple talents. The author recommends using CodeCrafters to develop these skills, offering a free trial with a 40% discount.

---

## [[RIDGELINE] Walking The Length of Manhattan](https://craigmod.com/ridgeline/232/)

**Source**: Craig Mod — Writer + Photographer | **Tags**: `gentrification`, `landscape`, `manhattan`, `urban`, `walk` | **Published**: 2026-08-21 | **Novelty**: 24%

Craig Mod and Michael George embarked on a 24.4-kilometer walk from Marble Hill to Battery Park, highlighting diverse urban landscapes in Manhattan including Highbridge Park, the Morris-Jumel Mansion, and Central Park. Their journey included unexpected encounters with meth communities and gentrification, emphasizing contrasts within the city's geography and socio-economic conditions.

---

## [A shot-scraper-style JSON API on Bun 1.4's new Bun.WebView](https://simonwillison.net/2026/Aug/20/bun-webview-json-api/)

**Source**: Simon Willison's Weblog | **Tags**: `bun`, `javascript`, `screenshot`, `typescript`, `webview` | **Published**: 2026-08-20 | **Novelty**: 24%

The article showcases a 150-line TypeScript service built on Bun 1.4's new `Bun.WebView` feature, demonstrating the ability to create shot-scraper-style JSON APIs for JavaScript evaluation and screenshot generation without relying on Puppeteer or Playwright. The implementation requires approximately 192MB-256MB of RAM when running a full Chrome against complex web pages.

---

## [Quoting Drew Breunig](https://simonwillison.net/2026/Aug/23/drew-breunig/)

**Source**: Simon Willison's Weblog | **Tags**: `claude-mythos-fable`, `llm-pricing`, `llms` | **Published**: 2026-08-23 | **Novelty**: 23%

Drew Breunig reflects on the impact of Fable's high cost, noting that prior to its release, teams often ignored optimizing coding harnesses due to frequent model updates. However, with Fable and similar models still performing adequately for most tasks (such as Opus, 5.6, K3, and GLM), developers are now reconsidering how work is distributed among different models based on their specific needs.

---

## [llm-anthropic 0.27](https://simonwillison.net/2026/Aug/24/llm-anthropic/)

**Source**: Simon Willison's Weblog | **Tags**: `anthropic`, `llm`, `migration`, `upgrade` | **Published**: 2026-08-24 | **Novelty**: 23%

This update for the Anthropic plugin for LLM aligns with anthropic v1.0.0, switching from httpx to httpx2 as OpenAI did in their v3.0.0 release. The upgrade process involves reading a specific migration guide and ensuring tests pass, as demonstrated by a pull request generated from Fable 5 in Claude Code.

---

## [Quoting Jeremy Morrell](https://simonwillison.net/2026/Aug/19/jeremy-morrell/)

**Source**: Simon Willison's Weblog | **Tags**: `extensibility`, `llms`, `sandboxing` | **Published**: 2026-08-19 | **Novelty**: 23%

Jeremy Morrell posits that large language models (LLMs) significantly reduce the cost of creating software extensions, enabling a more modular and extensible approach to web applications. He envisions building robust core applications and leveraging LLMs to fill in gaps, thereby empowering users with enhanced functionality without compromising security or accountability.

---

## [Up to 3.2x Faster Inference with LFM2.5-DSpark](https://huggingface.co/blog/LiquidAI/lfm25-dspark)

**Source**: Hugging Face - Blog | **Tags**: `draft-models`, `inference`, `llm`, `speculative-decoding` | **Published**: 2026-08-20 | **Novelty**: 23%

The article introduces DSpark draft models for LFM2.5 family models, which include LFM2.5-1.2B-Instruct, LFM2.5-2.6B, and LFM2.5-8B-A1B. These models incorporate speculative decoding to improve inference speed by up to 3.2 times on different hardware, with the DSpark approach combining a parallel backbone, a lightweight sequential head, and a confidence-scheduled verifier. The draft models are relatively small, each around ~300M parameters, and support both llama.cpp and SGLang for inference.

---

## [Citizens Build, Agents Execute, Experts Govern](https://martinfowler.com/rachels-ramblings/citizens-agents-experts.html)

**Source**: Martin Fowler | **Tags**: `ai`, `engineering`, `governance`, `software` | **Published**: 2026-08-19 | **Novelty**: 22%

The article discusses the shift from individuals building software over weekends to enterprises relying on experienced engineers to govern and ensure the safety of production systems. It emphasizes that while AI has democratized software creation, expertise in design, architecture, and governance remains crucial. The author introduces the concept 'citizens build, agents execute, experts govern' to illustrate this new dynamic.

---

## [How Hugging Face Inference Endpoints, Jobs, and Buckets Power Search on Papers with Code](https://huggingface.co/blog/pwc-search)

**Source**: Hugging Face - Blog | **Tags**: `ann`, `embedding`, `huggingface`, `hybrid`, `search` | **Published**: 2026-08-21 | **Novelty**: 21%

The article details a hybrid search system for Papers with Code that leverages Hugging Face Jobs, Buckets, and Inference Endpoints. Notably, it uses Qwen/Qwen3-Embedding-0.6B model with Matryoshka representation learning to generate 256-dimensional vectors for over 110,000 papers, achieving a 27% reduction in storage while maintaining ANN recall. The system employs an RRF algorithm to combine lexical and semantic search results, providing robust and reliable retrieval.

---

## [Conceptual integrity and counting lines of code](https://simonwillison.net/2026/Aug/19/conceptual-integrity-and-counting-lines-of-code/)

**Source**: Simon Willison's Weblog | **Tags**: `ai-assisted-development`, `conceptual-integrity`, `lines-of-code`, `productivity` | **Published**: 2026-08-19 | **Novelty**: 21%

The article discusses the use of lines of code as a productivity metric for coding agents, arguing that significant improvements can be made when agents produce high-quality, debugged code. The concept of conceptual integrity is highlighted using the analogy of the Winchester Mystery House, illustrating how easy it is to lose cohesion in software developed with AI assistance due to the rapid and frequent changes without proper oversight.

---

## [Fragments: August 24](https://martinfowler.com/fragments/2026-08-24.html)

**Source**: Martin Fowler | **Tags**: `ai`, `linkedin`, `nationalization`, `zalando` | **Published**: 2026-08-24 | **Novelty**: 20%

The article discusses the lack of human oversight and whistleblowing among AI agents at OpenAI, suggesting potential nationalization to maintain public interest. It also highlights a method for deciding when to skip LinkedIn posts by Kevlin Henney, and provides insights into agentic programming practices at Zalando, including automated pull-request risk assessment with language models.

---

## [More than just code review](https://simonwillison.net/2026/Aug/22/more-than-just-code-review/)

**Source**: Simon Willison's Weblog | **Tags**: `code-review`, `coding-agents`, `verification` | **Published**: 2026-08-22 | **Novelty**: 20%

Simon Willison emphasizes the importance of effective communication and verification methods when using coding agents, suggesting that a detailed line-by-line code review is not always necessary or efficient. He advocates for more strategic approaches to ensure software changes are correctly implemented.

---

## [Fast and Hard Code](https://lucumr.pocoo.org/2026/8/22/fast-hard-code/)

**Source**: Armin Ronacher's Thoughts and Writings | **Tags**: `ai`, `faster-software`, `llm`, `programming`, `zig` | **Published**: 2026-08-22 | **Novelty**: 20%

The article highlights how language choice has become less significant due to AI assistance, with a shift towards faster and smaller software. It mentions specific projects like Cloudflare's Artifacts service using Zig for a lightweight WebAssembly module (about 100 KB), and Vercel's fx, an AI-assisted Zig coding agent. The author notes that developers are now exploring 'harder' technologies such as DWARF files, eBPF, custom network drivers, and custom crypto, which were previously out of reach for many.

---

## [Human judgment doesn't leave the software factory. It relocates.](https://addyosmani.com/blog/human-judgment-doesnt-leave-the-software/)

**Source**: AddyOsmani.com | **Tags**: `human-autonomy`, `software-factories`, `verification-budgets` | **Published**: 2026-08-21 | **Novelty**: 20%

The article explores the concept of a 'verification budget' for software factories, comparing it to performance budgets. It emphasizes that while automation can handle many checks, humans must still own the final decision on what code ships and retain judgment in critical areas like problem selection, architecture, and quality bar setting. The author shares personal experiences integrating agents into their workflow and discusses metrics like cost per merged PR as comprehension debt indicators.

---

## [Wire It, Run It, Deploy It: AI Workflows in Gradio](https://huggingface.co/blog/gradio-workflow-guide)

**Source**: Hugging Face - Blog | **Tags**: `ai`, `gradio`, `huggingface`, `pipelines`, `workflow` | **Published**: 2026-08-25 | **Novelty**: 20%

Gradio's workflow feature allows users to create AI pipelines using a drag-and-drop interface, with nodes representing different steps that can be Python functions or model calls. Each pipeline is also exposed as an API, enabling direct code interactions and deployments through Hugging Face Spaces. Notable examples include the Image Editor Pipeline, AI Media Studio, Generative Art Lab, Data Detective, and ZeroGPU Animator.

---

## [llm-openrouter 0.7](https://simonwillison.net/2026/Aug/21/llm-openrouter/)

**Source**: Simon Willison's Weblog | **Tags**: `api`, `llm`, `openrouter`, `tools` | **Published**: 2026-08-21 | **Novelty**: 19%

llm-openrouter 0.7 now supports LLM 0.32 and integrates with OpenRouter's Responses API, offering new server-side tools such as Shell, WebFetch, and WebSearch which can be enabled via specific command-line options.

---

## [Measuring benchmark optimization in speech recognition](https://huggingface.co/blog/asr-benchmark-optimization)

**Source**: Hugging Face - Blog | **Tags**: `benchmark-optimization`, `model-evaluation`, `speech-recognition` | **Published**: 2026-08-21 | **Novelty**: 19%

The article introduces three new tests to measure benchmark optimization in speech recognition: reference disagreement, masked entity retrieval, and orthographic switching. These tests reveal that several high-scoring models reproduce erroneous references, recover silenced numbers at elevated rates, and switch spellings based on the expected dataset, suggesting they are optimizing for specific benchmarks rather than general transcription quality. Notable findings include six out of eleven models omitting 'Thank you' in a VoxPopuli reference transcript despite it being audible in the audio, with recovery rates varying between public benchmarks and newly collected data.

---

## [llm 0.32.1](https://simonwillison.net/2026/Aug/21/llm/)

**Source**: Simon Willison's Weblog | **Tags**: `httpx`, `llm`, `openai` | **Published**: 2026-08-21 | **Novelty**: 18%

LLM version 0.32.1 was released to address issues with fresh installs that stopped working due to the OpenAI Python library switching from httpx to httpx2, as LLM indirectly depended on it through a transitive openai dependency. For now, this version pins to openai&lt;3 to maintain compatibility.

---
