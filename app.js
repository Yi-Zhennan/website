/* =========================================================
   zhennan. — content lives in the DATA section below.
   To add news / papers / posts, just edit these arrays.
   ========================================================= */

/* ---------------- DATA ---------------- */

const NEWS = [
  { date: "2026-03-16", en: "Presenting a paper and a poster at HRI in Edinburgh, UK!", zh: "将在英国爱丁堡的 HRI 会议上展示一篇论文和一张海报！" },
  { date: "2026-03-05", en: "Attended the CRA-WP workshop in Seattle — gave a 3-min lightning talk and led a Birds-of-a-Feather session.", zh: "参加了西雅图的 CRA-WP workshop，做了 3 分钟闪电演讲，并主持了一场 Birds-of-a-Feather 讨论。" },
  { date: "2025-12-02", en: "One paper accepted to HRI.", zh: "一篇论文被 HRI 接收。" },
  { date: "2025-06-08", en: "My first paper in HRI got accepted to RO-MAN.", zh: "我在 HRI 领域的第一篇论文被 RO-MAN 接收。" },
  { date: "2025-05-08", en: "My first-authored paper (from my undergrad days!) was accepted to DIS'25.", zh: "我本科时期的一作论文被 DIS'25 接收！" },
  { date: "2024-04-26", en: "Our paper won the Best Paper Award at CHI'24.", zh: "我们的论文获得 CHI'24 最佳论文奖。" },
];

const PROJECTS = [
  {
    id: "story-robot",
    name: { en: "The Story Carrier", zh: "带故事的机器人" },
    short: { en: "A robot that carries children's stories between faraway places", zh: "一个在远方之间传递孩子们故事的机器人" },
    title: "The Robot Who Carries Stories: Asynchronous Storytelling across Distant Places",
    role: { en: "Lead Researcher", zh: "主要研究者" },
    time: "Jan 2024 – now",
    tags: ["Storytelling", "Intercultural Communication", "Group HRI"],
    body: {
      en: "We explore robots as mediators in asynchronous storytelling across distant places. By designing robot-mediated storytelling activities, this work examines how robots can create unique relational spaces for narrative construction, social sharing, and cross-cultural creative expression.",
      zh: "我们探索机器人作为异地异步讲故事的中介。通过设计以机器人为媒介的讲故事活动，研究机器人如何为叙事构建、社交分享和跨文化创意表达创造独特的关系空间。",
    },
    images: ["assets/storytelling2.png"],
  },
  {
    id: "family-workbook",
    name: { en: "Robots at Home", zh: "家里的机器人" },
    short: { en: "Workbook probes that get families talking about AI robots in their homes", zh: "用工作手册引导家庭聊聊 AI 机器人进入家里的样子" },
    title: "Probing Family AI Robot Use: Designing Workbook Probes for Families",
    role: { en: "Lead Researcher & Designer", zh: "主要研究者 & 设计者" },
    time: "Aug 2024 – Dec 2024",
    tags: ["Family", "Child-Robot Interaction", "Workbook", "Research through Design"],
    body: {
      en: "We study family–robot interaction through a workbook-based probe that invites families to reflect on future uses of AI robots at home. Workbooks serve as a design research method to elicit conversations about values, expectations, and tensions around living with AI technologies.",
      zh: "我们通过基于工作手册的设计探针研究家庭与机器人的互动，邀请家庭反思未来 AI 机器人在家中的用途。工作手册作为一种设计研究方法，引出关于价值观、期待以及与 AI 共同生活时的张力的讨论。",
    },
    images: ["assets/family-comic.jpg"],
  },
  {
    id: "teacher-robot",
    name: { en: "Classroom Buddy", zh: "教室小伙伴" },
    short: { en: "A lightweight, 3D-printed robot teachers can program themselves, for kids' soft skills", zh: "一个老师自己就能编排活动的轻量 3D 打印机器人，帮助孩子发展软技能" },
    title: "Design and Development of a Teacher-Friendly Robot to Support Children's Soft Skills Development",
    role: { en: "Interaction Designer", zh: "交互设计师" },
    time: "Aug 2024 – Dec 2024",
    tags: ["Group HRI", "Lightweight Robot", "Soft Skills", "Classroom", "3D Printing"],
    body: {
      en: "We design and develop a teacher-friendly educational robot that lets teachers easily create classroom activities through AI-supported tools. The project investigates how lightweight, 3D-printed robots can be integrated into real classrooms to support children's soft skills development.",
      zh: "我们设计并开发了一个对老师友好的教育机器人，老师可以借助 AI 工具轻松创建课堂活动。这个项目探索轻量的 3D 打印机器人如何真正融入课堂，支持孩子的软技能发展。",
    },
    images: ["assets/classroom-robot.jpg"],
  },
  {
    id: "dementia",
    name: { en: "Remembering Together", zh: "一起回忆" },
    short: { en: "Technologies and GenAI reminiscence for people living with dementia", zh: "为失智症人群设计的技术与 GenAI 回忆疗法" },
    title: "Technology-Mediated Interventions for People with Dementia",
    role: { en: "Co-author", zh: "合作者" },
    time: "2023 – now",
    tags: ["Dementia", "Older Adults", "GenAI", "CSCW"],
    body: {
      en: "Beyond child–robot interaction, I'm interested in designing technologies for older adults, especially those living with dementia. With collaborators, we have studied professional, personalized, multi-stakeholder non-pharmacological interventions (CHI 2024 Best Paper) and the situated use of GenAI-powered reminiscence interventions (CSCW 2026).",
      zh: "除了儿童-机器人互动，我也关注为老年人、尤其是失智症人群设计技术。我们和合作者研究了专业化、个性化、多方协作的非药物干预（CHI 2024 最佳论文），以及 GenAI 驱动的回忆干预在真实场景中的使用（CSCW 2026）。",
    },
    images: ["assets/dementia.jpg"],
  },
];

const ME = "Zhennan Yi";
const PAPERS = [
  { year: 2026, venue: "DIS 2026", status: "accepted", title: "Rethinking Pedagogical Relationships in the Presence of Social Robots",
    authors: "Zhennan Yi, Lingyun Chen, Paulina Maria Zguda, Randy Gomez, Selma Šabanović",
    links: [["PDF", "https://drive.google.com/file/d/1gOKP5IY1hucMgX28IICpb3wl2p-GHClJ/view?usp=sharing"]] },
  { year: 2026, venue: "CSCW 2026", status: "accepted", title: "Situated Use and Negotiated Effectiveness: Critical Considerations of GenAI-Powered Reminiscence Intervention for People with Dementia",
    authors: "Yuling Sun, Zhennan Yi, Junyan Mao, Minglong Tang, Xiaojuan Ma, Ruiqi Chen, Zhifan Guo, Xin Tong, Ning Gu", links: [] },
  { year: 2026, venue: "HRI 2026", title: "Adding More Value Than Work: Practical Guidelines for Integrating Robots into Intercultural Competence Learning",
    authors: "Zhennan Yi, Sophia Sakakibara Capello, Randy Gomez, Selma Šabanović",
    links: [["PDF", "https://drive.google.com/file/d/1Gl9ErviPjGO6ayhgjz7hAHIIhVnqD6SZ/view?usp=sharing"]] },
  { year: 2025, venue: "DIS 2025", title: "Smiles, Frowns, and Everything In Between: Understanding User Experiences with Emotion Tracking in Daily Life through Facial Expression Recognition",
    authors: "Zhennan Yi, Xianghua (Sharon) Ding, Chenyang You, Xingchen Zhou",
    links: [["DOI", "https://doi.org/10.1145/3715336.3735822"]] },
  { year: 2025, venue: "RO-MAN 2025", title: "Building Friendships Across Borders: The Role of Social Robot Haru in Children Group Communication and Connection Development",
    authors: "Zhennan Yi, Leigh Levinson, Diego Delgado-Chaves, Jose Manuel Perez-Moleron, Nabil Bougria, Antonia Krummheuer, Matthias Rehm, Anders Kalsgaard Møller, Katrine Kielsholm Ramsgaard, Selma Auala, Heike Winschiers-Theophilus, Edward Nepolo, David Calero, Devis Dal Moro, Daniel Serrano, Magí Dalmau-Moreno, Randy Gomez, Luis Merino, Selma Šabanović",
    links: [["DOI", "https://doi.org/10.1109/RO-MAN63969.2025.11217827"]] },
  { year: 2024, venue: "CHI 2024", award: true, title: "Technology-Mediated Non-pharmacological Interventions for Dementia: Needs for and Challenges in Professional, Personalized and Multi-Stakeholder Collaborative Interventions",
    authors: "Yuling Sun, Zhennan Yi, Xiaojuan Ma, Junyan Mao, Xin Tong",
    links: [["DOI", "https://doi.org/10.1145/3613904.3641977"]] },
];

const POSTS = [
  {
    id: "reading-list", date: "2025-12-20",
    title: { en: "My Reading List", zh: "我的书单" },
    render: () => `
      <p>${t({ en: "Some books I read recently…", zh: "最近读的一些书……" })}</p>
      <div class="book">
        <img src="assets/bigbook.png" alt="Cover of The Big Book of Storysharing">
        <div>
          <h3>The Big Book of Storysharing</h3>
          <p>This book provides both a fundamental and a practical introduction to storytelling and storysharing. It draws on research and practice into personal storytelling. Although it is mainly for children and young people with communication issues, many suggestions apply to a general audience too.</p>
        </div>
      </div>
      <div class="book">
        <img src="assets/designrobot.png" alt="Cover of Designing Interactions with Robots">
        <div>
          <h3>Designing Interactions with Robots</h3>
          <p>Full of vivid examples and crucial guidance on how to design interactions with robots. It maps the HRI research landscape and is really helpful for students (like me) who are interested in but new to HRI research!</p>
        </div>
      </div>`,
  },
];

const CONTACT = [
  { k: "Email", label: "yizh@iu.edu", href: "mailto:yizh@iu.edu" },
  { k: "Scholar", label: "Google Scholar", href: "https://scholar.google.com/citations?user=RE3GEEsAAAAJ&hl" },
  { k: "LinkedIn", label: "zhennan-yi", href: "https://www.linkedin.com/in/zhennan-yi" },
  { k: "X", label: "@nan08879", href: "https://x.com/nan08879" },
];

/* ---------------- i18n ---------------- */

// The site is English-only.
const LANG = "en";
const t = (o) => (typeof o === "string" ? o : o[LANG] ?? o.en);

const NAV = [
  { path: "", en: "About", zh: "关于" },
  { path: "research", en: "Research", zh: "研究" },
  { path: "papers", en: "Papers", zh: "论文" },
  { path: "cv", en: "CV", zh: "简历" },
  { path: "contact", en: "Contact", zh: "联系" },
];

/* ---------------- CAT LINES ---------------- */
// what the cat on the top line says on hover, per page
const MEOW = {
  "":       "I'm the real PI here. Meow~",
  research: "I supervise the robots",
  papers:   "Acknowledgements: me. Obviously.",
  cv:       "She forgot to list me under “Awards”",
  contact:  "Please don't send dogs",
};

/* ---------------- VIEWS ---------------- */


const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function about() {
  return `
  <div class="lines">
    ${LANG === "zh" ? `
      <p class="hi">你好，我是易振南 <button class="say" type="button" data-say>听发音 ↗</button></p>
      <p>印第安纳大学伯明顿分校（IUB）信息学博士二年级</p>
      <p>本科在北京师范大学读心理学</p>
      <p>我设计和开发<span class="mark">帮助孩子学习、创造和建立联结的社交机器人</span></p>
      <p>研究在人工智能、机器人和心理学的交叉处：通过设计研究和参与式方法，做出可以互动的东西，去理解机器人怎样才能真正融入孩子们日常的社交环境——教室、家里，以及所有陪伴孩子成长的人身边</p>
      <p>我也关心为老年人、尤其是失智症人群设计技术</p>
      <p>研究之外：攀岩、编舞、钩针</p>
    ` : `
      <p class="hi">Hi, I'm Zhennan (易振南) <span class="say-wrap"><button class="say" type="button" data-say-toggle aria-expanded="false">How to pronounce?</button>
        <span class="say-card" role="dialog" aria-label="How to pronounce my name">
          <span class="say-head">How to pronounce? <button class="say-play" type="button" data-say aria-label="Play pronunciation">▶</button></span>
          <span class="say-row"><b>Family:</b> 易 (yì) — like "easy"</span>
          <span class="say-row"><b>Given:</b> 振南 (zhèn nán)</span>
          <span class="say-row">Feel free to call me <span class="mark">Jane-Nan</span> if that's easier!</span>
        </span></span></p>
      <p>3rd-year Informatics PhD student at Indiana University Bloomington</p>
      <p>B.S. in Psychology from Beijing Normal University</p>
      <p>I design and build <span class="mark">social robots that help children learn, create, and connect</span></p>
      <p>My work sits between AI, robotics, and psychology — I study how robots can fit into the everyday worlds of children and the people who care for them, from family homes to pediatric settings</p>
      <p>I also care about designing for older adults, especially people living with dementia</p>
      <p>Off the clock: route climbing, choreography, crochet</p>
    `}
  </div>
  <ul class="tags">
    <li>Child-Robot Interaction</li><li>Group HRI</li><li>Social-Emotional Development</li><li>Healthcare</li><li>Research through Design</li><li>Participatory Design</li>
  </ul>

  <h2 class="hand">${t({ en: "Lately", zh: "近况" })}</h2>
  <ul class="news">
    ${NEWS.map((n, i) => `<li${i >= 4 ? ' class="old"' : ""}><time>${n.date}</time><span>${t(n)}</span></li>`).join("")}
  </ul>
  ${NEWS.length > 4 ? `<button class="more" type="button" data-more>${t({ en: "Older news ↓", zh: "更早 ↓" })}</button>` : ""}
  `;
}

function research() {
  return `
  <div class="works">
    ${PROJECTS.map((p) => `
      <a class="work" href="#/research/${p.id}">
        <div class="thumb">${p.images[0]
          ? `<img src="${p.images[0]}" alt="" loading="lazy">`
          : `<span>${t(p.name)}</span>`}</div>
        <h3>${t(p.name)}</h3>
        <p>${t(p.short)}</p>
        <p class="work-meta"><span>~</span> ${t(p.role)}</p>
      </a>`).join("")}
  </div>`;
}

function project(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return notFound();
  return `
  <a class="back" href="#/research">← ${t({ en: "All research", zh: "全部研究" })}</a>
  <h1 class="hand">${t(p.name)}</h1>
  <p style="margin:0 0 8px;font-weight:500">${esc(p.title)}</p>
  <p class="meta"><span>${t(p.role)}</span></p>
  <p>${t(p.body)}</p>
  ${p.images.map((src) => `<img class="figure" src="${src}" alt="${esc(p.title)}" loading="lazy">`).join("")}
  <ul class="tags" style="margin-top:20px">${p.tags.map((x) => `<li>${x}</li>`).join("")}</ul>`;
}

function papers() {
  const years = [...new Set(PAPERS.map((p) => p.year))];
  return `
  <p class="muted small" style="margin-top:0">${t({ en: "Selected publications. For the full list, see", zh: "部分发表论文，完整列表见" })} <a href="https://scholar.google.com/citations?user=RE3GEEsAAAAJ&hl" target="_blank" rel="noopener">Google Scholar</a>.</p>
  ${years.map((y) => `
    <div class="year">${y}</div>
    ${PAPERS.filter((p) => p.year === y).map((p) => `
      <div class="paper">
        <p class="t">${esc(p.title)}</p>
        <p class="a">${esc(p.authors).replace(ME, `<b>${ME}</b>`)}</p>
        <p class="v">
          <em>${p.venue}</em>
          ${p.status ? `<span class="muted">${t({ en: "Accepted", zh: "已接收" })}</span>` : ""}
          ${p.award ? `<span class="award">🏆 ${t({ en: "Best Paper", zh: "最佳论文" })}</span>` : ""}
          ${p.links.map(([l, h]) => `<a href="${h}" target="_blank" rel="noopener">${l}</a>`).join("")}
        </p>
      </div>`).join("")}
  `).join("")}`;
}

function writing() {
  return `
  <ul class="post-list">
    ${POSTS.map((p) => `<li><a href="#/writing/${p.id}"><time>${p.date}</time><span>${t(p.title)}</span></a></li>`).join("")}
  </ul>`;
}

function post(id) {
  const p = POSTS.find((x) => x.id === id);
  if (!p) return notFound();
  return `
  <a class="back" href="#/writing">← ${t({ en: "All writing", zh: "全部随笔" })}</a>
  <h1 class="hand">${t(p.title)}</h1>
  <p class="meta">${p.date}</p>
  <div class="prose">${p.render()}</div>`;
}

const CV = {
  education: [
    { what: "Indiana University Bloomington", where: "Bloomington, IN, USA", items: [
      ["PhD in Informatics (Intelligent & Interactive Systems), advised by Dr. Selma Šabanović", "Expected 2029"],
      ["M.S. in Informatics", "2026"],
    ] },
    { what: "Beijing Normal University", where: "Beijing, China", items: [["B.S. in Psychology", "2024"]] },
    { what: "University of Glasgow", where: "Glasgow, UK", items: [["Visiting Student, School of Computing Science", "2023"]] },
    { what: "University of Manchester", where: "Manchester, UK", items: [["Exchange Program", "2022–2023"]] },
  ],
  honors: [
    ["CRA-WP Graduate Cohort", "Computing Research Association", "2026"],
    ["Special Recognition for Outstanding Reviews", "HRI 2026, C&C 2026", "2026"],
    ["Top Cited Article in Developmental Science", "Wiley", "2025"],
    ["Top Cited Article in Child Development", "Wiley", "2025"],
    ["Summer Fellowship ($10,000)", "Indiana University Bloomington", "2024"],
    ["Best Paper Award", "CHI 2024", "2024"],
    ["Best Design Award", "6th Global Competition on Design for Future Education", "2023"],
    ["Social Work Award", "Beijing Normal University", "2022"],
    ["First-Class Academic Scholarship", "Beijing Normal University", "2021 & 2022"],
  ],
  talks: [
    ["“Designing for Teacher-Robot Partnerships”", "University of British Columbia, Canada", "Mar 2026"],
  ],
  service: [
    ["Associate Chair", "DIS 2026 PWiP Track"],
    ["Reviewer", "CHI 2026, HRI 2026, DIS 2026, C&C 2026"],
    ["Volunteer", "DIS 2025"],
    ["Instructor", "Designed and led a robotics workshop for girls (grades 6–12) — designing, building, and programming robots to spark STEM interest. 2025 Robotics Program by Girl Scouts and WonderLab."],
  ],
};

function cv() {
  const row = (title, sub, year) => `
    <li class="cv-row"><div><p class="cv-t">${title}</p>${sub ? `<p class="cv-s">${sub}</p>` : ""}</div>${year ? `<span class="cv-y">${year}</span>` : ""}</li>`;
  return `
  <h2 class="hand cv-h" style="margin-top:0">${t({ en: "Education", zh: "教育经历" })}</h2>
  ${CV.education.map((e) => `
    <div class="cv-school">
      <p class="cv-org">${e.what} <span>${e.where}</span></p>
      <ul class="cv-list">${e.items.map(([d, y]) => row(d, "", y)).join("")}</ul>
    </div>`).join("")}

  <h2 class="hand cv-h">${t({ en: "Honors & Awards", zh: "荣誉与奖项" })}</h2>
  <ul class="cv-list">${CV.honors.map(([a, b, y]) => row(a, b, y)).join("")}</ul>

  <h2 class="hand cv-h">${t({ en: "Invited Talks", zh: "受邀报告" })}</h2>
  <ul class="cv-list">${CV.talks.map(([a, b, y]) => row(a, b, y)).join("")}</ul>

  <h2 class="hand cv-h">${t({ en: "Service", zh: "学术服务" })}</h2>
  <ul class="cv-list">${CV.service.map(([role, d]) => `<li class="cv-row cv-svc"><span class="cv-role">${role}</span><p class="cv-s">${d}</p></li>`).join("")}</ul>`;
}

function contact() {
  return `
  <p style="margin-top:0">${t({ en: "Always happy to chat about robots, research, or climbing routes :)", zh: "随时欢迎来聊机器人、孩子、研究，或者攀岩线路 :)" })}</p>
  <ul class="contact" style="margin-top:28px">
    ${CONTACT.map((c) => `<li><span class="k">${c.k}</span><a href="${c.href}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${c.label}</a></li>`).join("")}
  </ul>`;
}

function notFound() {
  return `<p>${t({ en: "Hmm, nothing here.", zh: "嗯……这里什么都没有。" })} <a href="#/">${t({ en: "Go home", zh: "回首页" })}</a></p>`;
}

/* ---------------- ROUTER ---------------- */

const $ = (s) => document.querySelector(s);

function route() {
  const raw = location.hash.replace(/^#\/?/, "").split("?")[0];
  const [section = "", sub] = raw.split("/");
  const views = { "": about, research, papers, cv, contact };
  let html;
  if (section === "research" && sub) html = project(sub);
  else html = (views[section] || notFound)();

  document.documentElement.lang = LANG;
  $("#main").innerHTML = `<div class="fade">${html}</div>`;
  $(".meow").textContent = MEOW[section] || MEOW[""];
  $("#nav").innerHTML = NAV.map((n) => {
    const on = n.path === section;
    return `<a href="#/${n.path}" class="${on ? "on" : ""}" ${on ? 'aria-current="page"' : ""}>${t(n)}</a>`;
  }).join("");
  $("#year").textContent = `© ${new Date().getFullYear()} Zhennan Yi`;
  const label = NAV.find((n) => n.path === section);
  document.title = section && label ? `${t(label)} · Zhennan Yi` : "Zhennan Yi";
}

document.addEventListener("click", (e) => {
  const more = e.target.closest("[data-more]");
  if (more) {
    // expand / collapse older news in place — no re-render, no scroll jump
    const open = document.querySelector(".news").classList.toggle("open");
    more.textContent = open ? t({ en: "Show less ↑", zh: "收起 ↑" }) : t({ en: "Older news ↓", zh: "更早 ↓" });
  }
  // pronunciation note: toggle on the button, close on any click outside it
  const toggle = e.target.closest("[data-say-toggle]");
  const wrap = document.querySelector(".say-wrap");
  if (toggle) {
    const open = wrap.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  } else if (wrap && !e.target.closest(".say-card")) {
    wrap.classList.remove("open");
    wrap.querySelector("[data-say-toggle]").setAttribute("aria-expanded", "false");
  }
  if (e.target.closest("[data-say]")) {
    const a = $("#say"); a.currentTime = 0; a.play().catch(() => {});
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") document.querySelector(".say-wrap")?.classList.remove("open");
});

window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });
route();
