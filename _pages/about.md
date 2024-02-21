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

Hi! I am Chenming SHANG (尚辰铭). I am currently a master student (2nd year) in [Intelligent Interaction Group (IIG)](https://sites.google.com/view/iigroup-thu/home), Tsinghua University, supervised by Prof. [Yujiu Yang](https://scholar.google.com/citations?user=4gH3sxsAAAAJ&hl=zh-CN). I received my bachelor's degree in Intelligent Science and Technology from Sun Yat-sen University in 2022, advised by Prof. [Zhi Jin](https://scholar.google.com/citations?user=v70dNBoAAAAJ&hl=zh-CN&oi=ao).

My research interests lie in **cognitive science-inspired AI** and **trustworthy AI**, including **interpretability** and **generalization**. The research topics I am currently interested in are compositional generalization, concept-based models, and causal inference. I hope to make AI spontaneously summarize concepts from data as human does, enabling the infinite combination of finite concepts to achieve generalization in unknown scenarios.

Now I am looking for an intern or a research assistant position, and I also have plans to pursue a Ph.D. position. If you are willing to offer cooperation opportunities, please feel free to contact me.


# 🎓 Education
<img class="svg" src="/images/logo-thu.svg" width="50pt"> Tsinghua University 
<br>
- *Aug. 2022 - Present*, Master's Degree in Electronic and Information Engineering, GPA 3.93 / 4.0 (Top 7% of School)

<!-- <div><br></div> -->
<!-- <br> -->

<img class="svg" src="/images/logo-sysu.png" width="50pt"> Sun Yat-sen University
<br>
- *Sept. 2018 - Jul. 2022*, Bachelor’s Degree in Intelligent Science and Technology, GPA 4.1 / 5.0 (Top 5% of Major)


<span class='anchor' id='-intern'></span>

# 💻 Interships
<img class="svg" src="/images/logo-bytedance.svg" width="60pt"> ByteDance, TikTok, Beijing 
<br>
- *Jan. 2024 - Present*, Algorithm Engineering Intern, Causal Inference and Recommendation System

<!-- <br> -->

<img class="svg" src="/images/logo-lingjun.png" width="60pt"> Lingjun Invest, Beijing
<br>
- *Oct. 2023 - Jan. 2024*, Algorithm Research Intern, Out-of-Distribution Generalization and Time Series

<!-- <br> -->

<img class="svg" src="/images/logo-pjlab.png" width="60pt"> Shanghai Artificial Intelligence Laboratory, Beijing
<br>
- *Apr. 2023 - Oct. 2023*, Algorithm Research Intern, Model Interpretability and Compositional Generalization

<!-- <br> -->

<img class="svg" src="/images/logo-baai.png" width="60pt"> Beijing Academy of Artificial Intelligence, Beijing
<br>
- *Jan. 2023 - Apr. 2023*, Algorithm Research Intern, Data-Centric AI and Model Interpretability

<!-- <br> -->

<img class="svg" src="/images/logo-sourcecode.jpg" width="60pt"> Source Code Capital, Shenzhen
<br>
- *Dec. 2021 - Apr. 2022*, Investment Analysis Intern, Artificial Intelligence

<!-- <br> -->

<img class="svg" src="/images/logo-huatai.png" width="60pt"> Huatai Securities, Shenzhen
<br>
- *Sep. 2021 - Dec. 2021*, Algorithm Research Intern, Time Series

<!-- <br> -->


<span class='anchor' id='-pub'></span>

# 📝 Projects
\* denotes equal contribution

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Nature Machine Intelligence</div><img src='images/paper-ps.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Brain-inspired Geometry Constraint on Representation for Compositional Generalization** *(Ongoing)*

`Chenming Shang`, Shiji Zhou, Yujiu Yang, Yuwang Wang 
- We establish a quantitative relationship between Parallelism Score (PS) in cognitive neuroscience and the compositional generalization (CG) ability of model representations.
- To optimize the CG performance theoretically, we propose the incorporation of two regularization techniques, Parallelism Score Constraint and Minimal Distance Variance, to enhance the model CG ability.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AACL 2022 Oral</div><img src='images/def-gen-contrast.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Fine-grained Contrastive Learning for Definition Generation**

`Hengyuan Zhang`\*, Dawei Li\*, Shiping Yang, Yanran Li

[[Paper]](https://arxiv.org/abs/2210.00543) | [[Code]](https://github.com/rattlesnakey/Definition-Gneration-Contrastive)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2023 BEA Workshop</div><img src='images/prompt-contrast-def-gen.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Assisting Language Learners: Automated Trans-Lingual Definition Generation via Contrastive Prompt Learning**

`Hengyuan Zhang`, Dawei Li, Yanran Li, Chenming Shang, Chufan Shi, Yong Jiang

[[Paper]](https://arxiv.org/abs/2306.06058)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2022 Main Conference</div><img src='images/multitask-def-gen.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Multitasking Framework for Unsupervised Simple Definition Generation**

Cunliang Kong, Yun Chen, `Hengyuan Zhang`, Liner Yang, Erhong Yang

[[Paper]](https://arxiv.org/abs/2203.12926) | [[Code]](https://github.com/blcuicall/SimpDefiner)
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NAACL 2022 SemEval</div><img src='images/semeval.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**BLCU-ICALL at SemEval-2022 Task 1: Cross-Attention Multitasking Framework for Definition Modeling**

Cunliang Kong, Yujie Wang, Ruining Chong, Liner Yang, `Hengyuan Zhang`, Erhong Yang

[[Paper]](https://arxiv.org/abs/2204.07701) | [[Code]](https://github.com/blcuicall/SemEval2022-Task1-DM)
</div>
</div>


<br>
<span class='anchor' id='-honor'></span>

# 🏅 Honors and Awards
👉  Tsinghua University College Comprehensive First Class Scholarship (`院综合一等奖学金`), *2023*

👉  National Scholarship (`国家奖学金`), *2019*, *2020*, *2021*

👉  Outstanding Graduate Student of Beijing (`北京市优秀毕业生`), *2021*

👉  Excellent League Member of Beijing (`北京市优秀团员`), *2021*

👉  Merit Student of Beijing (`北京市三好学生`), *2021*

👉  Meritorious Winner, Interdisciplinary Contest in Modeling (ICM), *2021*

👉  Computer Design Competition National- Second Prize, *2020*

👉  CUMCM-Beijing Area First Prize, *2020*     

👉  Xiaomi Third Hacker Marathon Excellence, *2022*

👉  Excellent Volunteer in BLCU, *2020*


<span class='anchor' id='miscellaneous'></span>
# 📌 Miscellaneous
- I am actually a person with a strong desire to share. In my spare time, I like writing blogs and sharing experiences on Redbook, [Wechat Official account](https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0NTI3ODI2OQ==&scene=124#wechat_redirect) and [bilibili](https://space.bilibili.com/14709944?spm_id_from=333.1007.0.0) (阿源的NLP碎碎念).
- I used to be a guitarist 🎸 in a band when I was in high school. Also, I love playing badminton 🏸, table tennis 🏓 and soccer ⚽️. During holidays, I will also seize any opportunity to travel around the world  ⛳️

<div style="display: flex;">
  <img src="images/life1.png" alt="Image 1" width="50%" />
  <img src="images/life3.png" alt="Image 2" width="50%" />
</div>

<br>

<div style="display: flex;">
  <img src="images/life2.png" alt="Image 1" width="50%" />
  <img src="images/life4.png" alt="Image 2" width="50%" />
</div>
