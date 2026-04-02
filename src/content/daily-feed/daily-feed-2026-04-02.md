---
title: "Daily Feed — 2026-04-02"
date: "2026-04-02"
description: "12 articles from The latest research from Google, evilsocket, §kuthus and 3 others, covering creativity, cryptocurrencies, post-quantum-cryptography and quantum."
series: "Daily Feed"
---

## [Safeguarding cryptocurrency by disclosing quantum vulnerabilities responsibly](https://research.google/blog/safeguarding-cryptocurrency-by-disclosing-quantum-vulnerabilities-responsibly/)

**Source**: The latest research from Google | **Tags**: `cryptocurrencies`, `post-quantum-cryptography`, `quantum` | **Published**: 2026-03-31 | **Novelty**: 45%

Google Research's new whitepaper reveals that future quantum computers may break 256-bit elliptic curve cryptography with fewer than 1,450 logical qubits and 70 million Toffoli gates, impacting cryptocurrencies like Bitcoin. The paper recommends transitioning blockchains to post-quantum cryptography (PQC) before the advent of large-scale cryptographically relevant quantum computers (CRQCs), while responsibly disclosing these vulnerabilities using zero-knowledge proofs to avoid providing a roadmap for bad actors.

---

## [Mongoose: Preauth RCE and mTLS Bypass on Millions of Devices](https://www.evilsocket.net/2026/04/02/Mongoose-Preauth-Remote-Code-Execution-and-mTLS-Bypass/)

**Source**: evilsocket | **Tags**: `heap-overflow`, `mbedtls`, `mdns`, `mtls` | **Published**: 2026-04-01 | **Novelty**: 42%

The article details three critical vulnerabilities found in Mongoose v7.20: a complete bypass of mTLS authentication, a remote code execution vulnerability via heap overflow during the TLS handshake, and a preauth RCE through an mDNS stack buffer overflow. The latter two require no authentication, making them particularly dangerous for unhardened embedded devices.

---

## [A.D.D. is a fuck](https://skuth.us/add-is-a-fuck/)

**Source**: §kuthus | **Tags**: `add`, `mental-health`, `personal-challenge`, `productivity` | **Published**: 2026-04-01 | **Novelty**: 41%

The author describes the significant impact of A.D.D. on their daily life and productivity, noting that even taking breaks for vacations can be challenging due to restlessness and difficulty in re-acclimating. They express a strong negative sentiment towards the condition, despite managing it well most of the time.

---

## [Focus on the art, not the hustle](https://skuth.us/art-not-hustle/)

**Source**: §kuthus | **Tags**: `creativity`, `photography`, `self-fulfillment` | **Published**: 2026-03-30 | **Novelty**: 40%

The article discusses the idea of practicing photography for personal fulfillment rather than financial gain, emphasizing that focusing on the creative process itself leads to better results. It warns against a consumer mindset driven by social media goals and popularity metrics.

---

## [We don't need more RAM, we need better software](https://skuth.us/we-dont-need-more-ram-we-need-better-software/)

**Source**: §kuthus | **Tags**: `memory-management`, `ram`, `software-efficiency` | **Published**: 2026-03-27 | **Novelty**: 36%

The article argues that the high cost of RAM is due to inefficient software rather than a true need for more memory. Specific examples include Chrome's poor memory management, Windows' idle consumption of 6GB of RAM, and Apple applications requiring 8GB for smooth operation. The author suggests software companies should prioritize reducing their resource demands to make their products more accessible.

---

## [Fragments: April  2](https://martinfowler.com/fragments/2026-04-02.html)

**Source**: Martin Fowler | **Tags**: `intent-debt`, `tri-system-cognition`, `verification` | **Published**: 2026-04-02 | **Novelty**: 35%

The article introduces the concept of 'intent debt' as a new layer to understand system health, alongside technical and cognitive debt. It also discusses a tri-system model of cognition, where AI is seen as System 3, potentially leading to cognitive surrender if not managed carefully. Additionally, it explores how verification will become more critical than coding itself in an era of agentic programming, with teams shifting focus from building features to validating outcomes.

---

## [The future is bad because you aren't betting on it](https://skuth.us/the-future-is-bad-because-you-arent-betting-on-it/)

**Source**: §kuthus | **Tags**: `engagement`, `future`, `optimism` | **Published**: 2026-03-28 | **Novelty**: 34%

The article emphasizes the importance of actively contributing to positive change rather than succumbing to doomism. The author encourages readers to find a passion and work towards making it better, promising to do the same themselves. This perspective challenges current pessimistic trends by advocating for personal engagement in improving the future.

---

## [Welcome Gemma 4: Frontier multimodal intelligence on device](https://huggingface.co/blog/gemma4)

**Source**: Hugging Face - Blog | **Tags**: `ai-platform`, `benchmark`, `fine-tuning`, `integration`, `open-source` | **Published**: 2026-04-02 | **Novelty**: 32%

Gemma 4 models demonstrate exceptional performance across various benchmarks, including reasoning, coding, vision, and long-context tasks. The article highlights support for fine-tuning with TRL, Unsloth Studio, and other tools, showcasing how Gemma 4 can be integrated into different ecosystems such as Vertex AI and local UIs. Notably, the integration of Gemma 4 with transformers and various open-source projects like mistral.rs and Llama.cpp enhances its versatility.

---

## [Holo3: Breaking the Computer Use Frontier](https://huggingface.co/blog/Hcompany/holo3)

**Source**: Hugging Face - Blog | **Tags**: `agentic-learning-flywheel`, `holo3`, `synthetic-environment-factory` | **Published**: 2026-04-01 | **Novelty**: 32%

Holo3 is a new model that scores 78.85% on the OSWorld-Verified benchmark, outperforming competitors with fewer parameters (10B active vs GPT 5.4's 122B total). It excels through its agentic learning flywheel, which uses synthetic navigation data and out-of-domain augmentation to train agents for real-world tasks across various enterprise environments. The Synthetic Environment Factory produces verifiable tasks that test the model’s ability to handle complex workflows involving multiple applications.

---

## [Building better AI benchmarks: How many raters are enough?](https://research.google/blog/building-better-ai-benchmarks-how-many-raters-are-enough/)

**Source**: The latest research from Google | **Tags**: `ai-benchmarking`, `machine-learning`, `reproducibility` | **Published**: 2026-03-31 | **Novelty**: 30%

The study investigates the optimal balance between the number of items being rated and the number of raters per item, challenging the common practice of using only 3-5 raters. Using a simulator based on real-world datasets, it shows that more than 10 raters are needed to achieve reliable results for nuanced evaluations, while fewer items with more raters can suffice when accuracy is the metric. The research also provides insights into how data skew and category richness affect this balance.

---

## [Harness engineering for coding agent users](https://martinfowler.com/articles/harness-engineering.html)

**Source**: Martin Fowler | **Tags**: `agents`, `coding`, `controls`, `harness`, `quality` | **Published**: 2026-04-02 | **Novelty**: 29%

The article introduces the concept of a 'harness' for coding agents, which includes both computational and inferential controls. It discusses how to strategically design a system of guides and sensors that increases confidence in agent-generated code quality, while also reducing supervision and improving maintainability. Notable examples include using structural tests and LLM-informed custom linters.

---

## [From Homo Faber to Homo Fictor](https://www.newcartographies.com/p/from-homo-faber-to-homo-fictor)

**Source**: New Cartographies | **Tags**: `ai`, `artificial-intelligence`, `creativity`, `homo-faber`, `shame` | **Published**: 2026-03-30 | **Novelty**: 23%

The article explores the concept of 'homo fictor' as a new phase beyond Arendt's 'homo faber,' where artificial intelligence undermines human pride in creation, leading to 'Promethean shame.' This shift is noted through the lens of Günther Anders' work and exemplified by how AI impacts writing and other forms of art. The author suggests that even those who avoid using AI are subject to this pervasive sense of shame.

---
