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

Hi! I am Chenming SHANG (尚辰铭).
I am currently a master student (2nd year) in [Intelligent Interaction Group (IIG)](https://sites.google.com/view/iigroup-thu/home), Tsinghua University, supervised by Prof. [Yujiu Yang](https://scholar.google.com/citations?user=4gH3sxsAAAAJ&hl=zh-CN). I received my bachelor's degree in Intelligent Science and Technology from Sun Yat-sen University in 2022, advised by Prof. [Zhi Jin](https://scholar.google.com/citations?user=v70dNBoAAAAJ&hl=zh-CN&oi=ao).

My research interests lie in cognitive science-inspired AI and trustworthy AI, including interpretability and generalization. The research topics I am currently interested in are compositional generalization, concept-based models, and causal inference. I hope to make AI spontaneously summarize concepts from data as human does, enabling the infinite combination of finite concepts to achieve generalization in unknown scenarios.

Now I am looking for an intern or a research assistant position, and I also have plans to pursue a Ph.D. position. If you are willing to offer cooperation opportunities, please feel free to contact me.


# 🎓 Education
<img class="svg" src="/images/tsinghua-logo.png" width="50pt"> Tsinghua University 
<br>
- *Aug. 2022 - Present*, Master's Degree in Electronic Information, Shenzhen International Graduate School, GPA 3.86 / 4.0

<!-- <div><br></div> -->
<!-- <br> -->

<img class="svg" src="/images/BLCU_logo.png" width="50pt"> Beijing Language and Culture University
<br>
- *Sept. 2018 - Jul. 2022*, Bachelor’s Degree in Language Intelligence and Technology, Computer Science School, GPA 3.9 / 4.0

<span class='anchor' id='-intern'></span>

# 💻 Interships
<img class="svg" src="/images/icall.png" width="60pt">Advanced Innovation Center for Language Resources, Beijing 
<br>
- *Mar. 2019 - Jul. 2022*, Research Assistant, working with [Liner Yang](https://yuyanziyuan.blcu.edu.cn/info/1032/2481.htm)



<img class="svg" src="/images/baidu.png" width="60pt">Baidu, Search Strategy Lab, Beijing
<br>
- *Mar. 2021 - Jul. 2021*, Engineering Intern, working with Ge Chen

<!-- <br> -->

<img class="svg" src="/images/xiaomi-logo.png" width="30pt"> Xiaomi, AI Lab, Beijing
<br>
- *Mar. 2022 - Sept. 2022*, Research Intern, working with [Yanran Li](https://www.aminer.cn/profile/Yanran%20Li/53f42c51dabfaee02ac50cf3)


<!-- <br> -->

<img class="svg" src="/images/tencent-logo.png" width="60pt"> Tencent, AI Lab, Shenzhen
<br>
- *Mar. 2023 - Jul. 2023*, Research Intern, working with [Wei Bi](https://scholar.google.com/citations?hl=zh-CN&user=aSJcgQMAAAAJ&view_op=list_works&sortby=pubdate)

<!-- <br> -->

<img class="svg" src="/images/sensetime.png" width="60pt">Sensetime, Research, Shenzhen
<br>
- *Aug. 2023 - Present*, Research Intern, working with [Fei Tan](https://scholar.google.com/citations?hl=zh-CN&user=IhYATC0AAAAJ&view_op=list_works&sortby=pubdate) and [Ziqing Yang]([text](https://scholar.google.com.hk/citations?user=cbYCaq4AAAAJ&hl=zh-CN))
<!-- <br> -->


<span class='anchor' id='-pub'></span>

# 📝 Publications
\* denotes equal contribution

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2023 Main Conference</div><img src='images/emnlp2023-character.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Multi-level Contrastive Learning for Script-based Character Understanding**

Dawei Li, `Hengyuan Zhang`, Yanran Li, Shiping Yang 

[[Paper]](https://arxiv.org/pdf/2310.13231v1.pdf) | [[Code]](https://github.com/David-Li0406/Script-based-Character-Understanding)
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
