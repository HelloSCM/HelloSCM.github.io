---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi! I am Chenming SHANG (尚辰铭). I am currently a master student (3rd year) in [Intelligent Interaction Group (IIG)](https://sites.google.com/view/iigroup-thu/home), Tsinghua University, supervised by Prof. [Yujiu Yang](https://scholar.google.com/citations?user=4gH3sxsAAAAJ&hl=zh-CN). I received my bachelor's degree in Intelligent Science and Technology from Sun Yat-sen University in 2022, advised by Prof. [Zhi Jin](https://scholar.google.com/citations?user=v70dNBoAAAAJ&hl=zh-CN&oi=ao).

My research interests lie in **cognitive science-inspired AI** and **trustworthy AI** in **multimodal models**, including **interpretability** and **generalization**. The research topics I am currently interested in are concept-based models, compositional generalization, and human‑computer interaction. I hope to make AI spontaneously summarize concepts from data as human does, enabling the infinite combination of finite concepts to achieve generalization in unknown scenarios. Meanwhile, I believe that in the current era of enhanced general AI capabilities, AI interaction with humans and human‑centered AI can create more value.

Now I am looking for an intern or a research assistant position, and I also have plans to pursue a Ph.D. position on **2025 fall**. If you are willing to offer cooperation opportunities, please feel free to contact me.

<span class='anchor' id='-edu'></span>

# 🎓 Education
<img class="svg" src="/images/logo-thu.svg" width="50pt"> Tsinghua University 
<br>
- *Aug. 2022 - Present*, Master's Degree in Electronic and Information Engineering, GPA 3.93 / 4.00 (Top 5% of School)

<!-- <div><br></div> -->
<!-- <br> -->

<img class="svg" src="/images/logo-sysu.png" width="50pt"> Sun Yat-sen University
<br>
- *Sept. 2018 - Jul. 2022*, Bachelor’s Degree in Intelligent Science and Technology, GPA 4.1 / 5.0 (Top 5% of Major)


<span class='anchor' id='-intern'></span>

# 💻 Interships
<img class="svg" src="/images/logo-msra.png" width="60pt"> Microsoft Research, AI4Science, Beijing 
<br>
- *June 2024 - Present*, Algorithm Research Intern, AI for Biology and Out-of-Distribution Generalization

<!-- <br> -->

<img class="svg" src="/images/logo-bytedance.svg" width="60pt"> ByteDance, TikTok, Beijing 
<br>
- *Jan. 2024 - June 2024*, Algorithm Engineering Intern, Causal Inference and Recommendation System

<!-- <br> -->

<img class="svg" src="/images/logo-pjlab.png" width="60pt"> Shanghai Artificial Intelligence Laboratory, Beijing
<br>
- *June 2023 - Dec. 2023*, Algorithm Research Intern, Model Interpretability and Compositional Generalization

<!-- <br> -->

<img class="svg" src="/images/logo-baai.png" width="60pt"> Beijing Academy of Artificial Intelligence, Beijing
<br>
- *Jan. 2023 - June 2023*, Algorithm Research Intern, Data-Centric AI and Model Interpretability

<!-- <br> -->

<img class="svg" src="/images/logo-sourcecode.jpg" width="60pt"> Source Code Capital, Shenzhen
<br>
- *Dec. 2021 - May 2022*, Investment Analysis Intern, Artificial Intelligence

<!-- <br> -->

<img class="svg" src="/images/logo-huatai.png" width="60pt"> Huatai Securities, Shenzhen
<br>
- *Aug. 2021 - Dec. 2021*, Algorithm Research Intern, Time Series

<!-- <br> -->


<span class='anchor' id='-pub'></span>

# 📝 Projects

    
## *Papers on **Computer Vision**:*

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024</div><img src='images/paper-rescbm.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Incremental Residual Concept Bottleneck Models**

`Chenming Shang`, Shiji Zhou, Hengyuan Zhang, Xinzhe Ni, Yujiu Yang, Yuwang Wang 

[[Paper]](https://arxiv.org/abs/2404.08978) | [[Code]](https://github.com/HelloSCM/Res-CBM)
- Our work primarily addresses the challenges of completeness, purity and precision in previous methods.
- We utilize the multimodal model CLIP to extract and discover concepts, and design interpretable classification model to enhance the interpretability and few-shot generalization ability of the algorithm.
- We propose the Incremental Residual Concept Bottleneck Models (Res-CBM) to address the challenge of concept completeness and the Concept Utilization Efficiency (CUE) metric to measure the descriptive efficiency of CBMs.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CogSci 2024</div><img src='images/paper-csm.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Understanding Multimodal Deep Neural Networks: A Concept Selection View**

`Chenming Shang`, Hengyuan Zhang, Hao Wen, Yujiu Yang

[[Paper]](https://arxiv.org/abs/2404.08964) | [[Code]](https://github.com/HelloSCM/Concept_Selection)
- We observe the long-tail distribution of concepts, based on which we propose a two-stage Concept Selection Model (CSM) to mine core concepts without introducing any human priors.
- The concept greedy rough selection algorithm is applied to extract head concepts, and then the concept mask fine selection method performs the extraction of core concepts.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">under review</div><img src='images/paper-ps.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Compositional Generalization through Brain-inspired Geometric Constraints on Representation Structure**

`Chenming Shang`, Shiji Zhou, Hengyuan Zhang, Xinchen Zhang, Lei Ke, Yuwang Wang, Yujiu Yang

- We establish a quantitative relationship between Parallelism Score (PS) in cognitive neuroscience and the compositional generalization (CG) ability of model representations.
- To optimize the CG performance theoretically, we propose the incorporation of two regularization techniques, Parallelism Score Maximization and Distance Variance Minimization, to enhance the model CG ability.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">under review</div><img src='images/paper-hermesflow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**HermesFlow: Seamlessly Closing the Gap in Multimodal Understanding and Generation**

Ling Yang, Xinchen Zhang, Ye Tian, `Chenming Shang`, Minghao Xu, Wentao Zhang, Bin Cui

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">under review</div><img src='images/paper-anycharv.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**AnyCharV: Bootstrap Controllable Character Video Generation with Fine-to-Coarse Guidance**

Zhao Wang, Hao Wen, Lingting Zhu, `Chenming Shang`, Yujiu Yang, Qi Dou

[[Paper]](https://www.arxiv.org/abs/2502.08189) | [[Code]](https://github.com/AnyCharV/AnyCharV)
</div>
</div>

    
## *Papers on **Nature Language Processing**:*

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2025</div><img src='images/paper-multilingual.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**ShifCon: Enhancing Non‑Dominant Language Capabilities with a Shift‑based Contrastive Framework**

Hengyuan Zhang\*, `Chenming Shang`\*, Sizhe Wang, Dongdong Zhang, Feng Yao, Renliang Sun, Yiyao Yu, Yujiu Yang, Furu Wei *(\* denotes equal contribution)*

[[Paper]](https://arxiv.org/abs/2410.19453) | [[Code]](https://github.com/rattlesnakey/ShifCon)
- Based on the singular value decomposition, we define the language subspace.
- We then transfer the non‑dominant language space to the dominant language space through shift projection and leverage contrastive learning to further alignment.
- The non‑dominant language can access richer information from the parameters of LLMs and improve comprehension capability.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2023 BEA Workshop</div><img src='images/paper-aclworkshop.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Assisting Language Learners: Automated Trans-Lingual Definition Generation via Contrastive Prompt Learning**

Hengyuan Zhang, Dawei Li, Yanran Li, `Chenming Shang`, Chufan Shi, Yong Jiang

[[Paper]](https://arxiv.org/abs/2306.06058)
</div>
</div>

    
## *Papers on **Human‑Computer Interaction**:*

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">SYSU Bachelor's Thesis, Rank 1st</div><img src='images/paper-thesis.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Back-door Intervention based Causal Machine Learning Algorithm for Confounders**

`Chenming Shang`, Zhi Jin
- I complete my bachelor's thesis under the guidance of Prof. Jin Zhi, and get 95 points, ranking 1st in the major.
- Based on the back-door intervention formula in causal inference, I propose a causal machine learning algorithm for confounders, applying in the recommendation system to solve the problems of popularity bias and conformity bias.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TKDD 2024, JCR Q1</div><img src='images/paper-edu.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**A Question-centric Multi-experts Contrastive Learning Framework for Improving the Accuracy and Interpretability of Deep Sequential Knowledge Tracing Models**

Hengyuan Zhang, Zitao Liu, `Chenming Shang`, Dawei Li, Yong Jiang

[[Paper]](https://dl.acm.org/doi/10.1145/3674840) | [[Code]](https://github.com/rattlesnakey/Q-MCKT)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICME 2021</div><img src='images/paper-bmi.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Seeing Health with Eyes: Feature Combination for Image-Based Human BMI Estimation**

Junjia Huang\*, `Chenming Shang`\*, Aolin Xiong, Yuxian Pang, Zhi Jin *(\* denotes equal contribution)*

[[Paper]](https://ieeexplore.ieee.org/document/9428234) | [[Code]](https://github.com/FVL2020/Features_for_BMI_estimation)
</div>
</div>
    
## *Papers on **Interdisciplinary Science**:*

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Frontiers in Immunology, JCR Q1</div><img src='images/paper-med.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Peripheral PD-1+NK Cells Could Predict the 28-day Mortality in Sepsis Patients**

Jia Tang, `Chenming Shang`, Yue Chang, Wei Jiang, Jun Xu, Leidan Zhang, Lianfeng Lu, Ling Chen, Xiaosheng Liu, Qingjia Zeng , Wei Cao, Taisheng Li

[[Paper]](https://pmc.ncbi.nlm.nih.gov/articles/PMC11215063/)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Cell Symposia</div><img src='images/paper-med-3.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Machine Learning-Based Metabolic Phenotyping of Stroke Rehabilitation**

Qingjia Zeng\*, `Chenming Shang`\*, Hongpu Hu *(\* denotes equal contribution)*
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">under review</div><img src='images/paper-med-2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Establishment of a Differential Diagnosis Method for AOSD and Lymphoma based on Random Forest Algorithm**

Jia Tang\*, `Chenming Shang`\*, Yue Chang, Wei Jiang, Jun Xu, Leidan Zhang, Lianfeng Lu, Ling Chen, Xiaosheng Liu, Qingjia Zeng , Wei Cao, Taisheng Li *(\* denotes equal contribution)*
</div>
</div>

<br>
<span class='anchor' id='-honor'></span>

# 🏅 Honors and Awards
- National Scholarship
- Samsung Scholarship
- Tsinghua University Comprehensive First-Class Scholarship
- Sun Yat-Sen University Outstanding Student First-Class Scholarship
- Sun Yat-Sen University Academic Innovation Scholarship
- Sun Yat-sen University Innovative Smart Medical Interdisciplinary Talent Training Fund Scholarship
- ECCV 2022 NICO Hybrid Context Generalization Challenge, Finalist
- CVPR 2020 NTIRE Perceptual Extreme Super-Resolution, the 7th
- PCIC 2022 Causal Inference and Transfer Learning, the 9th
- China RPA+AI Developer Competition, 1st Prize
- College Student Intelligent Technology Application Competition, 1st Prize
- Pricewaterhouse Coopers' STEM Challenge, the 2nd
- Contemporary Undergraduate Mathematical Contest in Modeling, 2nd Prize


<span class='anchor' id='-leader'></span>
# 📌 Leaderships
- World Institute of Politics, Economy and Technology, Youth Researcher
- Research Center for Chinese Global Youth Summit, Youth Researcher
- Young Sustainable Impact, Member
- National Supercomputer Center in Guangzhou, Popular Science Narrator
- THU-SIGS Global Governance and International Organization Development Association, Vice President
- Tsinghua University SIGS Career Development Center, Student Assistant
- SYSU School of Intelligent Systems Engineering Men's Football Team, Captain
- Sun Yat-sen University English Debate Team, Member
