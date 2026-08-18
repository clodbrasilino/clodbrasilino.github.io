/* ============================================================
   Clodoaldo Brasilino Leite Neto — Curriculum
   Trilingual content (EN / PT / ZH-CN) + rendering
   Sources: Lattes CV + LinkedIn profile export
   ============================================================ */

/* ---------- Trilingual content ---------- */
const I18N = {
  en: {
    brand: "Clodoaldo B. L. Neto",
    nav: { about: "About", experience: "Experience", education: "Education", skills: "Skills", projects: "Projects", publications: "Publications", contact: "Contact" },
    hero: {
      kicker: "Curriculum Vitae",
      title: "Professor · Computer Scientist · Researcher · Practitioner",
      tagline: "Cyberspace Security · Distributed Systems · Educational Technologies",
      ctaContact: "Get in touch",
      ctaPrint: "Print / PDF",
    },
    about: {
      title: "About",
      body: [
        "Professor at the Federal Institute of Piauí (IFPI) and a PhD candidate in Cyberspace Security at Zhejiang University (浙江大学), 2022–present. Currently teaches computer networks, information security, and relational databases (SQL / MySQL). Also works as a Software Engineer at GeoRanker (2022–2026), developing in Python and Java.",
        "Former BI systems developer at DATAPREV and the Court of Justice of Paraíba (TJPB), with experience in Data Warehousing and Business Intelligence. Holds B.Sc. and M.Sc. degrees from the Federal University of Paraíba (UFPB). Research interests span Cyberspace Security, Distributed Systems, and Educational Technologies.",
      ],
      stats: [
        { num: "11+", label: "Teaching experience (Years)" },
        { num: "20+", label: "Professional experience (Years)" },
        { num: "4", label: "Languages" },
        { num: "5", label: "Publications" },
      ],
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          role: "Professor",
          org: "Federal Institute of Piauí (IFPI)",
          period: "2014 — Present",
          loc: "Parnaíba, PI",
          highlights: [
            "Coordinator of Technical IT Courses (2019–2021) and of Research & Innovation (2016–2017).",
            "Currently teaches computer networks, information security and relational databases (SQL / MySQL).",
            "Also taught Software Engineering, Web Programming, Data Structures and Special Topics in Software Development.",
          ],
        },
        {
          role: "Software Engineer",
          org: "GeoRanker",
          period: "2022 — 2026",
          loc: "",
          highlights: ["Python and Java developer."],
        },
        {
          role: "Huawei Academy Instructor",
          org: "Huawei ICT Academy",
          period: "2021 — Present",
          loc: "",
          highlights: ["Teaches 5G, Security and Networking classes as a Huawei Certified Academy Instructor (HCAI)."],
        },
        {
          role: "Instructor & Academy Manager",
          org: "Cisco Networking Academy",
          period: "2016 — Present",
          loc: "Parnaíba",
          highlights: [
            "Teaches Hardware (IT Essentials / CompTIA A+), Networking (CCNA R&S), IoT (Arduino / Raspberry Pi) and Security.",
            "Manages the Academy, driving infrastructure and staff growth.",
          ],
        },
        {
          role: "Founder",
          org: "Ion Dev & Solar",
          period: "2018 — Present",
          loc: "",
          highlights: ["Computer software outsourcing and photovoltaic (solar) energy system installation and maintenance."],
        },
        {
          role: "Judiciary Analyst — BI Systems Developer",
          org: "Court of Justice of Paraíba (TJPB)",
          period: "2013 — 2014",
          loc: "Paraíba",
          highlights: ["Business analyst; OLAP systems developer and maintainer."],
        },
        {
          role: "IT Analyst — BI Systems Developer",
          org: "DATAPREV",
          period: "2012 — 2013",
          loc: "João Pessoa",
          highlights: ["OLAP systems and customized data reports — developer and maintainer."],
        },
        {
          role: "Tutor",
          org: "PROUCA / OLPC (UFPB)",
          period: "2010 — 2011",
          loc: "Paraíba",
          highlights: ["Teacher training on digital inclusion for the One Laptop per Child program (UCA)."],
        },
        {
          role: "Intern",
          org: "LAViD · UFPB · GIGA",
          period: "2006 — 2010",
          loc: "Paraíba",
          highlights: [
            "LAViD: R&D on Software Product Lines; supported the Arthron video-collaboration tool.",
            "UFPB IT center: WebPOSGRAD & SCA systems support; coached students for the Brazilian Informatics Olympiad.",
            "GIGA Internet: web-hosting customer support.",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "PhD Candidate in Cyberspace Security",
          org: "Zhejiang University (浙江大学)",
          period: "2022 — present",
          detail: "PhD candidate in Cyberspace Security at Zhejiang University (浙江大学), Hangzhou, China. Research in progress.",
        },
        {
          degree: "M.Sc. in Informatics",
          org: "Federal University of Paraíba (UFPB)",
          period: "2011 — 2014",
          detail: "Thesis: <em>Fault Management in Cloud Computing — A Systematic Mapping of Literature</em>. Advisor: Alexandre Nóbrega Duarte. CNPq scholarship.",
        },
        {
          degree: "B.Sc. in Computer Science",
          org: "Federal University of Paraíba (UFPB)",
          period: "2006 — 2010",
          detail: "Thesis: <em>GINGAINSTANCING — A tool for generating derived products from the middleware of the Brazilian Digital Television System</em>. Advisor: Tatiana Aires Tavares.",
        },
        {
          degree: "B.Tech. in Computer Software Technology",
          org: "CEFET-PB",
          period: "2005 — 2006",
          detail: "Bachelor of Technology in Computer Software Technology (interrupted).",
        },
      ],
    },
    skills: {
      title: "Areas of Expertise",
      langs: "Languages",
      certs: "Certifications & Training",
      list: [
        { icon: "🛡️", name: "Cybersecurity" },
        { icon: "🤖", name: "Large Language Models (LLM)" },
        { icon: "🐍", name: "Python" },
        { icon: "🌐", name: "Distributed Systems" },
        { icon: "🗄️", name: "Databases (SQL)" },
        { icon: "⚙️", name: "Software Engineering" },
        { icon: "🎓", name: "Educational Technologies" },
        { icon: "📊", name: "Data Warehousing & BI" },
        { icon: "📡", name: "Computer Networks" },
        { icon: "💻", name: "Web Development" },
      ],
      languages: [
        { name: "Portuguese", level: "Native / Bilingual", dots: 5 },
        { name: "English", level: "Professional Working", dots: 4 },
        { name: "Chinese", level: "Limited Working", dots: 2 },
        { name: "Spanish", level: "Limited Working", dots: 2 },
      ],
      certifications: [
        { year: "2021", text: "Huawei Certified Academy Instructor (HCAI)" },
        { year: "—", text: "DevOps Essentials Professional Certificate (DEPC)" },
        { year: "2009", text: "Sun Certified Java Programmer (Java SE 6) — Sun Microsystems" },
        { year: "2010", text: "Information Security Management (NBR 27001/27002)" },
        { year: "2017", text: "CCNA Introduction to Networks — Cisco Networking Academy" },
        { year: "2017", text: "Introduction to the Internet of Everything — Cisco" },
        { year: "2021", text: "5G Network — IFPI / Huawei" },
      ],
    },
    projects: {
      title: "Research Projects",
      items: [
        {
          period: "2017 — 2018",
          title: "IoT Infrastructure for Identifying Situations of Interest",
          role: "Principal Investigator",
          desc: "Developed infrastructure to identify situations of interest on the Internet of Things. Funded by IFPI.",
        },
        {
          period: "2015 — 2016",
          title: "Energy Efficiency",
          role: "Project Coordinator",
          desc: "Maximized efficient use of electricity through consumption monitoring and room-occupancy sensing — detecting empty rooms with appliances still on (lights, air conditioning, etc.).",
        },
      ],
    },
    publications: {
      title: "Publications",
      items: [
        { authors: "FILHO, P. C.; BRASILINO, C.; DUARTE, A.", title: "Ten Years of Research on Fault Management in Grid Computing: A Systematic Mapping Study", venue: "PDCAT 2013 — Taipei" },
        { authors: "NETO, C. B. L.; FILHO, P. B. C.; DUARTE, A. N.", title: "A Systematic Mapping Study on Fault Management in Cloud Computing", venue: "PDCAT 2013 — Taipei" },
        { authors: "SOUSA, J. L. T.; SAMPAIO, L. I. S.; SANTOS, K. P.; LEITE NETO, C. B.", title: "SENSOR OPEN SOURCE DE BAIXO CUSTO PARA MONITORAMENTO SISTEMAS DE CONDICIONAMENTO DE AR", venue: "XI Week of Mathematics and Physics, 2015" },
        { authors: "PEREIRA NETO, G. M. M.; FONTENELE, L. N.; LEITE NETO, C. B.", title: "Uma proposta de sistema de aumento da eficiência energética baseado no monitoramento de desperdício de energia elétrica", venue: "CONNEPI 2016" },
        { authors: "SILVA, C. V. A. P.; LEITE NETO, C. B.; PETRUCCI", title: "Hipermídias educativas: a aplicabilidade de objetos de aprendizagem em planos de aula nos espaços virtuais", venue: "IV National Meeting of Hypertext & Educational Technologies, 2011" },
      ],
    },
    contact: {
      title: "Contact",
      lead: "Open to collaboration, research, and working opportunities.",
      items: [
        { icon: "✉️", label: "Email", value: "clodbrasilino@gmail.com", href: "mailto:clodbrasilino@gmail.com" },
        { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/clodbrasilino", href: "https://www.linkedin.com/in/clodbrasilino" },
        { icon: "📄", label: "Lattes CV", value: "lattes.cnpq.br/6844886638833184", href: "http://lattes.cnpq.br/6844886638833184" },
      ],
    },
    footer: { rights: "All rights reserved." },
  },

  pt: {
    brand: "Clodoaldo B. L. Neto",
    nav: { about: "Sobre", experience: "Experiência", education: "Formação", skills: "Áreas", projects: "Projetos", publications: "Publicações", contact: "Contato" },
    hero: {
      kicker: "Currículo",
      title: "Professor · Cientista da Computação · Pesquisador · Profissional",
      tagline: "Segurança Cibernética · Sistemas Distribuídos · Tecnologias Educacionais",
      ctaContact: "Entrar em contato",
      ctaPrint: "Imprimir / PDF",
    },
    about: {
      title: "Sobre",
      body: [
        "Professor do Instituto Federal do Piauí (IFPI) e doutorando em Segurança Cibernética pela Universidade de Zhejiang (浙江大学), 2022–atualmente. Atualmente leciona redes de computadores, segurança da informação e banco de dados relacional (SQL / MySQL). Também atua como Engenheiro de Software na GeoRanker (2022–2026), desenvolvendo em Python e Java.",
        "Foi desenvolvedor de sistemas de BI na DATAPREV e no Tribunal de Justiça da Paraíba (TJPB), com experiência em Data Warehousing e Business Intelligence. Possui bacharelado e mestrado pela Universidade Federal da Paraíba (UFPB). Atua em Segurança Cibernética, Sistemas Distribuídos e Tecnologias Educacionais.",
      ],
      stats: [
        { num: "11+", label: "Experiência docente (anos)" },
        { num: "20+", label: "Experiência profissional (anos)" },
        { num: "4", label: "Idiomas" },
        { num: "5", label: "Publicações" },
      ],
    },
    experience: {
      title: "Atuação Profissional",
      items: [
        {
          role: "Professor",
          org: "Instituto Federal do Piauí (IFPI)",
          period: "2014 — Atual",
          loc: "Parnaíba, PI",
          highlights: [
            "Coordenador dos Cursos Técnicos em Informática (2019–2021) e de Pesquisa e Inovação (2016–2017).",
            "Atualmente leciona redes de computadores, segurança da informação e banco de dados relacional (SQL / MySQL).",
            "Também lecionou Engenharia de Software, Programação Web, Estruturas de Dados e Tópicos Especiais em Desenvolvimento de Software.",
          ],
        },
        {
          role: "Engenheiro de Software",
          org: "GeoRanker",
          period: "2022 — 2026",
          loc: "",
          highlights: ["Desenvolvedor Python e Java."],
        },
        {
          role: "Instrutor da Academia Huawei",
          org: "Huawei ICT Academy",
          period: "2021 — Atual",
          loc: "",
          highlights: ["Ministra aulas de 5G, Segurança e Redes como Huawei Certified Academy Instructor (HCAI)."],
        },
        {
          role: "Instrutor e Gestor da Academia",
          org: "Cisco Networking Academy",
          period: "2016 — Atual",
          loc: "Parnaíba",
          highlights: [
            "Leciona Hardware (IT Essentials / CompTIA A+), Redes (CCNA R&S), IoT (Arduino / Raspberry Pi) e Segurança.",
            "Gerencia a Academia, visando o crescimento de infraestrutura e equipe.",
          ],
        },
        {
          role: "Fundador",
          org: "Ion Dev & Solar",
          period: "2018 — Atual",
          loc: "",
          highlights: ["Terceirização de software e instalação/manutenção de sistemas de energia fotovoltaica (solar)."],
        },
        {
          role: "Analista Judiciário — Desenvolvedor de BI",
          org: "Tribunal de Justiça da Paraíba (TJPB)",
          period: "2013 — 2014",
          loc: "Paraíba",
          highlights: ["Analista de negócios; desenvolvedor e mantenedor de sistemas OLAP."],
        },
        {
          role: "Analista de TI — Desenvolvedor de BI",
          org: "DATAPREV",
          period: "2012 — 2013",
          loc: "João Pessoa",
          highlights: ["Desenvolvedor e mantenedor de sistemas OLAP e relatórios de dados personalizados."],
        },
        {
          role: "Tutor",
          org: "PROUCA / OLPC (UFPB)",
          period: "2010 — 2011",
          loc: "Paraíba",
          highlights: ["Formação de professores em inclusão digital no programa Um Computador por Aluno (UCA)."],
        },
        {
          role: "Estagiário",
          org: "LAViD · UFPB · GIGA",
          period: "2006 — 2010",
          loc: "Paraíba",
          highlights: [
            "LAViD: P&D em Linhas de Produtos de Software; suporte à ferramenta de colaboração em vídeo Arthron.",
            "NTI da UFPB: suporte aos sistemas WebPOSGRAD e SCA; preparação de alunos para a Olimpíada Brasileira de Informática.",
            "GIGA Internet: suporte ao cliente de hospedagem web.",
          ],
        },
      ],
    },
    education: {
      title: "Formação Acadêmica",
      items: [
        {
          degree: "Doutorando em Segurança Cibernética",
          org: "Universidade de Zhejiang (浙江大学)",
          period: "2022 — atual",
          detail: "Doutorando em Segurança Cibernética na Universidade de Zhejiang (浙江大学), Hangzhou, China. Pesquisa em andamento.",
        },
        {
          degree: "Mestrado em Informática",
          org: "Universidade Federal da Paraíba (UFPB)",
          period: "2011 — 2014",
          detail: "Dissertação: <em>Gerenciamento de Faltas em Computação em Nuvem: Um Mapeamento Sistemático de Literatura</em>. Orientador: Alexandre Nóbrega Duarte. Bolsista CNPq.",
        },
        {
          degree: "Bacharelado em Ciências da Computação",
          org: "Universidade Federal da Paraíba (UFPB)",
          period: "2006 — 2010",
          detail: "TCC: <em>GINGAINSTANCING: Uma ferramenta para geração de produtos derivados do middleware do Sistema Brasileiro de Televisão Digital</em>. Orientadora: Tatiana Aires Tavares.",
        },
        {
          degree: "Bacharelado Tecnológico em Software",
          org: "CEFET-PB",
          period: "2005 — 2006",
          detail: "Bacharelado Tecnológico em Software de Computação (interrompido).",
        },
      ],
    },
    skills: {
      title: "Áreas de Atuação",
      langs: "Idiomas",
      certs: "Certificações e Formação",
      list: [
        { icon: "🛡️", name: "Segurança Cibernética" },
        { icon: "🤖", name: "Grandes Modelos de Linguagem (LLM)" },
        { icon: "🐍", name: "Python" },
        { icon: "🌐", name: "Sistemas Distribuídos" },
        { icon: "🗄️", name: "Banco de Dados (SQL)" },
        { icon: "⚙️", name: "Engenharia de Software" },
        { icon: "🎓", name: "Tecnologias Educacionais" },
        { icon: "📊", name: "Data Warehousing e BI" },
        { icon: "📡", name: "Redes de Computadores" },
        { icon: "💻", name: "Desenvolvimento Web" },
      ],
      languages: [
        { name: "Português", level: "Nativo / Bilíngue", dots: 5 },
        { name: "Inglês", level: "Profissional", dots: 4 },
        { name: "Chinês", level: "Limitado", dots: 2 },
        { name: "Espanhol", level: "Limitado", dots: 2 },
      ],
      certifications: [
        { year: "2021", text: "Huawei Certified Academy Instructor (HCAI)" },
        { year: "—", text: "DevOps Essentials Professional Certificate (DEPC)" },
        { year: "2009", text: "Sun Certified Java Programmer (Java SE 6) — Sun Microsystems" },
        { year: "2010", text: "Gestão da Segurança da Informação (NBR 27001/27002)" },
        { year: "2017", text: "CCNA Introduction to Networks — Cisco Networking Academy" },
        { year: "2017", text: "Introdução à Internet de Todas as Coisas — Cisco" },
        { year: "2021", text: "Rede 5G — IFPI / Huawei" },
      ],
    },
    projects: {
      title: "Projetos de Pesquisa",
      items: [
        {
          period: "2017 — 2018",
          title: "Infraestrutura para Identificação de Situações de Interesse na Internet das Coisas",
          role: "Coordenador",
          desc: "Desenvolvimento de infraestrutura para identificação de situações de interesse na Internet das Coisas. Financiado pelo IFPI.",
        },
        {
          period: "2015 — 2016",
          title: "Eficiência Energética",
          role: "Coordenador",
          desc: "Maximização do uso eficiente da energia elétrica por meio do monitoramento de consumo e sensoriamento de presença em salas — identificando salas vazias com aparelhos ligados (lâmpadas, ar-condicionado, etc.).",
        },
      ],
    },
    publications: {
      title: "Produções",
      items: [
        { authors: "FILHO, P. C.; BRASILINO, C.; DUARTE, A.", title: "Ten Years of Research on Fault Management in Grid Computing: A Systematic Mapping Study", venue: "PDCAT 2013 — Taipei" },
        { authors: "NETO, C. B. L.; FILHO, P. B. C.; DUARTE, A. N.", title: "A Systematic Mapping Study on Fault Management in Cloud Computing", venue: "PDCAT 2013 — Taipei" },
        { authors: "SOUSA, J. L. T.; SAMPAIO, L. I. S.; SANTOS, K. P.; LEITE NETO, C. B.", title: "SENSOR OPEN SOURCE DE BAIXO CUSTO PARA MONITORAMENTO SISTEMAS DE CONDICIONAMENTO DE AR", venue: "XI Semana de Matemática e Física, 2015" },
        { authors: "PEREIRA NETO, G. M. M.; FONTENELE, L. N.; LEITE NETO, C. B.", title: "Uma proposta de sistema de aumento da eficiência energética baseado no monitoramento de desperdício de energia elétrica", venue: "CONNEPI 2016" },
        { authors: "SILVA, C. V. A. P.; LEITE NETO, C. B.; PETRUCCI", title: "Hipermídias educativas: a aplicabilidade de objetos de aprendizagem em planos de aula nos espaços virtuais", venue: "IV Encontro Nacional de Hipertexto e Tecnologias Educacionais, 2011" },
      ],
    },
    contact: {
      title: "Contato",
      lead: "Aberto a colaborações, pesquisa e oportunidades de trabalho.",
      items: [
        { icon: "✉️", label: "E-mail", value: "clodbrasilino@gmail.com", href: "mailto:clodbrasilino@gmail.com" },
        { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/clodbrasilino", href: "https://www.linkedin.com/in/clodbrasilino" },
        { icon: "📄", label: "Currículo Lattes", value: "lattes.cnpq.br/6844886638833184", href: "http://lattes.cnpq.br/6844886638833184" },
      ],
    },
    footer: { rights: "Todos os direitos reservados." },
  },

  zh: {
    brand: "Clodoaldo B. L. Neto",
    nav: { about: "简介", experience: "工作经历", education: "教育背景", skills: "专业领域", projects: "科研项目", publications: "学术成果", contact: "联系方式" },
    hero: {
      kicker: "个人简历",
      title: "教授 · 计算机科学家 · 研究员 · 实践者",
      tagline: "网络空间安全 · 分布式系统 · 教育技术",
      ctaContact: "联系我",
      ctaPrint: "打印 / 导出 PDF",
    },
    about: {
      title: "简介",
      body: [
        "巴西皮奥伊联邦学院（IFPI）教授，浙江大学（浙江大学）网络空间安全博士在读（2022年至今）。现讲授计算机网络、信息安全与关系型数据库（SQL / MySQL）课程。同时在 GeoRanker 担任软件工程师（2022–2026），从事 Python 与 Java 开发工作。",
        "曾任 DATAPREV 与帕拉伊巴州法院（TJPB）BI系统开发人员，具备数据仓库与商业智能经验。获帕拉伊巴联邦大学（UFPB）计算机科学学士与信息学硕士学位。研究领域涵盖网络空间安全、分布式系统与教育技术。",
      ],
      stats: [
        { num: "11+", label: "教学经验（年）" },
        { num: "20+", label: "职业经验（年）" },
        { num: "4", label: "门语言" },
        { num: "5", label: "篇学术成果" },
      ],
    },
    experience: {
      title: "工作经历",
      items: [
        {
          role: "教授",
          org: "皮奥伊联邦学院（IFPI）",
          period: "2014 — 至今",
          loc: "帕尔纳伊巴，皮奥伊州",
          highlights: [
            "曾任技术类计算机课程协调员（2019–2021）及科研与创新协调员（2016–2017）。",
            "现讲授计算机网络、信息安全与关系型数据库（SQL / MySQL）课程。",
            "亦曾讲授软件工程、Web程序设计、数据结构与软件开发专题。",
          ],
        },
        {
          role: "软件工程师",
          org: "GeoRanker",
          period: "2022 — 2026",
          loc: "",
          highlights: ["Python 与 Java 开发工程师。"],
        },
        {
          role: "华为学院讲师",
          org: "华为ICT学院",
          period: "2021 — 至今",
          loc: "",
          highlights: ["作为华为认证学院讲师（HCAI）讲授5G、安全与网络课程。"],
        },
        {
          role: "讲师与学院负责人",
          org: "思科网络学院",
          period: "2016 — 至今",
          loc: "帕尔纳伊巴",
          highlights: [
            "讲授硬件（IT Essentials / CompTIA A+）、网络（CCNA R&S）、物联网（Arduino / 树莓派）与安全课程。",
            "负责学院管理，推动基础设施与团队发展。",
          ],
        },
        {
          role: "创始人",
          org: "Ion Dev & Solar",
          period: "2018 — 至今",
          loc: "",
          highlights: ["计算机软件外包，以及光伏（太阳能）系统的安装与维护。"],
        },
        {
          role: "司法分析师 — BI系统开发",
          org: "帕拉伊巴州法院（TJPB）",
          period: "2013 — 2014",
          loc: "帕拉伊巴州",
          highlights: ["业务分析师；OLAP系统开发与维护。"],
        },
        {
          role: "IT分析师 — BI系统开发",
          org: "DATAPREV",
          period: "2012 — 2013",
          loc: "若昂佩索阿",
          highlights: ["OLAP系统与定制数据报表的开发与维护。"],
        },
        {
          role: "导师",
          org: "PROUCA / OLPC（UFPB）",
          period: "2010 — 2011",
          loc: "帕拉伊巴州",
          highlights: ["“每名学生一台电脑”（UCA/OLPC）计划数字包容教师培训。"],
        },
        {
          role: "实习生",
          org: "LAViD · UFPB · GIGA",
          period: "2006 — 2010",
          loc: "帕拉伊巴州",
          highlights: [
            "LAViD：软件产品线研发；支持 Arthron 视频协作工具。",
            "UFPB信息技术中心：WebPOSGRAD 与 SCA 系统支持；辅导学生参加巴西信息学奥林匹克。",
            "GIGA Internet：虚拟主机客户支持。",
          ],
        },
      ],
    },
    education: {
      title: "教育背景",
      items: [
        {
          degree: "网络空间安全博士在读",
          org: "浙江大学（浙江大学）",
          period: "2022 — 至今",
          detail: "浙江大学（杭州）网络空间安全博士在读，研究进行中。",
        },
        {
          degree: "信息学硕士",
          org: "帕拉伊巴联邦大学（UFPB）",
          period: "2011 — 2014",
          detail: "学位论文：《云计算中的故障管理：一项系统性文献综述》。导师：Alexandre Nóbrega Duarte。获巴西国家科技发展委员会（CNPq）奖学金。",
        },
        {
          degree: "计算机科学学士",
          org: "帕拉伊巴联邦大学（UFPB）",
          period: "2006 — 2010",
          detail: "毕业论文：《GINGAINSTANCING：一种用于生成巴西数字电视系统中衍生产品的中间件工具》。导师：Tatiana Aires Tavares。",
        },
        {
          degree: "计算机软件技术本科",
          org: "帕拉伊巴联邦教育科技中心（CEFET-PB）",
          period: "2005 — 2006",
          detail: "计算机软件技术技术学士（肄业）。",
        },
      ],
    },
    skills: {
      title: "专业领域",
      langs: "语言能力",
      certs: "认证与培训",
      list: [
        { icon: "🛡️", name: "网络空间安全" },
        { icon: "🤖", name: "大语言模型（LLM）" },
        { icon: "🐍", name: "Python" },
        { icon: "🌐", name: "分布式系统" },
        { icon: "🗄️", name: "数据库（SQL）" },
        { icon: "⚙️", name: "软件工程" },
        { icon: "🎓", name: "教育技术" },
        { icon: "📊", name: "数据仓库与商业智能" },
        { icon: "📡", name: "计算机网络" },
        { icon: "💻", name: "Web开发" },
      ],
      languages: [
        { name: "葡萄牙语", level: "母语 / 双语", dots: 5 },
        { name: "英语", level: "职业工作级", dots: 4 },
        { name: "中文", level: "有限工作级", dots: 2 },
        { name: "西班牙语", level: "有限工作级", dots: 2 },
      ],
      certifications: [
        { year: "2021", text: "华为认证学院讲师（HCAI）" },
        { year: "—", text: "DevOps基础专业认证（DEPC）" },
        { year: "2009", text: "Sun认证Java程序员（Java SE 6）— Sun Microsystems" },
        { year: "2010", text: "信息安全管理（NBR 27001/27002）" },
        { year: "2017", text: "CCNA网络入门 — 思科网络学院" },
        { year: "2017", text: "万物互联导论 — 思科" },
        { year: "2021", text: "5G网络 — IFPI / 华为" },
      ],
    },
    projects: {
      title: "科研项目",
      items: [
        {
          period: "2017 — 2018",
          title: "物联网中识别关注情境的基础设施",
          role: "项目负责人",
          desc: "开发用于识别物联网中关注情境的基础设施。由IFPI资助。",
        },
        {
          period: "2015 — 2016",
          title: "能效优化",
          role: "项目负责人",
          desc: "通过电力消耗监测与人员在场传感，识别空置房间中仍在运行的电器（灯具、空调等），以实现节能最大化。",
        },
      ],
    },
    publications: {
      title: "学术成果",
      items: [
        { authors: "FILHO, P. C.; BRASILINO, C.; DUARTE, A.", title: "Ten Years of Research on Fault Management in Grid Computing: A Systematic Mapping Study", venue: "PDCAT 2013 — 台北" },
        { authors: "NETO, C. B. L.; FILHO, P. B. C.; DUARTE, A. N.", title: "A Systematic Mapping Study on Fault Management in Cloud Computing", venue: "PDCAT 2013 — 台北" },
        { authors: "SOUSA, J. L. T.; SAMPAIO, L. I. S.; SANTOS, K. P.; LEITE NETO, C. B.", title: "SENSOR OPEN SOURCE DE BAIXO CUSTO PARA MONITORAMENTO SISTEMAS DE CONDICIONAMENTO DE AR", venue: "第十一届数学与物理周，2015" },
        { authors: "PEREIRA NETO, G. M. M.; FONTENELE, L. N.; LEITE NETO, C. B.", title: "Uma proposta de sistema de aumento da eficiência energética baseado no monitoramento de desperdício de energia elétrica", venue: "CONNEPI 2016" },
        { authors: "SILVA, C. V. A. P.; LEITE NETO, C. B.; PETRUCCI", title: "Hipermídias educativas: a aplicabilidade de objetos de aprendizagem em planos de aula nos espaços virtuais", venue: "第四届超文本与教育技术全国会议，2011" },
      ],
    },
    contact: {
      title: "联系方式",
      lead: "欢迎合作、科研与工作机会。",
      items: [
        { icon: "✉️", label: "邮箱", value: "clodbrasilino@gmail.com", href: "mailto:clodbrasilino@gmail.com" },
        { icon: "🔗", label: "领英 LinkedIn", value: "linkedin.com/in/clodbrasilino", href: "https://www.linkedin.com/in/clodbrasilino" },
        { icon: "📄", label: "Lattes简历", value: "lattes.cnpq.br/6844886638833184", href: "http://lattes.cnpq.br/6844886638833184" },
      ],
    },
    footer: { rights: "保留所有权利。" },
  },
};

/* ---------- Helpers ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* dots HTML */
function dotsHTML(n) {
  let out = '<span class="dots" aria-hidden="true">';
  for (let i = 0; i < 5; i++) out += `<span class="dot${i < n ? " on" : ""}"></span>`;
  return out + "</span>";
}

/* ---------- Renderers ---------- */
function renderStatic(t) {
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = key.split(".").reduce((o, k) => (o ? o[k] : undefined), t);
    if (typeof val === "string") el.innerHTML = val;
  });
  document.documentElement.lang = cur === "zh" ? "zh-CN" : cur === "pt" ? "pt-BR" : "en";
}

function renderAbout(t) {
  $("#aboutBody").innerHTML = t.about.body.map((p) => `<p>${p}</p>`).join("");
  $("#aboutStats").innerHTML = t.about.stats
    .map((s) => `<div class="stat"><div class="stat__num">${s.num}</div><div class="stat__label">${s.label}</div></div>`)
    .join("");
}

function renderExperience(t) {
  $("#experienceList").innerHTML = t.experience.items
    .map(
      (it) => `
      <li class="tl-item">
        <div class="tl-item__head">
          <h3 class="tl-item__role">${esc(it.role)}</h3>
          <span class="tl-item__period">${esc(it.period)}</span>
          ${it.loc ? `<span class="tl-item__loc">${esc(it.loc)}</span>` : ""}
        </div>
        <div class="tl-item__org">${esc(it.org)}</div>
        <ul class="tl-item__highlights">${it.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
      </li>`
    )
    .join("");
}

function renderEducation(t) {
  $("#educationList").innerHTML = t.education.items
    .map(
      (it) => `
      <li class="tl-item">
        <div class="tl-item__head">
          <h3 class="tl-item__role">${esc(it.degree)}</h3>
          <span class="tl-item__period">${esc(it.period)}</span>
        </div>
        <div class="tl-item__org">${esc(it.org)}</div>
        <p class="edu-detail">${it.detail}</p>
      </li>`
    )
    .join("");
}

function renderSkills(t) {
  $("#skillsList").innerHTML = t.skills.list
    .map((s) => `<div class="skill"><span class="skill__icon">${s.icon}</span><span class="skill__name">${esc(s.name)}</span></div>`)
    .join("");
  $("#langsList").innerHTML = t.skills.languages
    .map((l) => `<div class="lang-pill"><span class="lang-pill__name">${esc(l.name)}</span>${dotsHTML(l.dots)}<span class="lang-pill__level">${esc(l.level)}</span></div>`)
    .join("");
  $("#certsList").innerHTML = t.skills.certifications
    .map((c) => `<li><span class="cert__year">${esc(c.year)}</span><span>${esc(c.text)}</span></li>`)
    .join("");
}

function renderProjects(t) {
  $("#projectsList").innerHTML = t.projects.items
    .map(
      (p) => `
      <div class="card">
        <div class="card__period">${esc(p.period)}</div>
        <h3 class="card__title">${esc(p.title)}</h3>
        <div class="card__role">${esc(p.role)}</div>
        <p class="card__desc">${esc(p.desc)}</p>
      </div>`
    )
    .join("");
}

function renderPublications(t) {
  $("#publicationsList").innerHTML = t.publications.items
    .map(
      (p) => `
      <li>
        <div class="pub__authors">${esc(p.authors)}</div>
        <div class="pub__title">${esc(p.title)}</div>
        <div class="pub__venue">${esc(p.venue)}</div>
      </li>`
    )
    .join("");
}

function renderContact(t) {
  $("#contactList").innerHTML = t.contact.items
    .map((c) => {
      const val = c.href ? `<a href="${c.href}" target="_blank" rel="noopener">${esc(c.value)}</a>` : esc(c.value);
      return `<div class="contact__item"><span class="contact__icon">${c.icon}</span><div class="contact__body"><div class="contact__label">${esc(c.label)}</div><div class="contact__value">${val}</div></div></div>`;
    })
    .join("");
}

function renderAll() {
  const t = I18N[cur];
  renderStatic(t);
  renderAbout(t);
  renderExperience(t);
  renderEducation(t);
  renderSkills(t);
  renderProjects(t);
  renderPublications(t);
  renderContact(t);
  $$(".lang__btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === cur));
  observeReveal();
}

/* ---------- Language switching ---------- */
let cur = localStorage.getItem("cv-lang") || detectLang();

function detectLang() {
  const l = (navigator.language || "en").toLowerCase();
  if (l.startsWith("zh")) return "zh";
  if (l.startsWith("pt")) return "pt";
  return "en";
}

function setLang(l) {
  cur = l;
  localStorage.setItem("cv-lang", l);
  renderAll();
  $("#navLinks").classList.remove("open");
  $("#navToggle").classList.remove("open");
}

/* ---------- Reveal on scroll ---------- */
let io;
function observeReveal() {
  if (io) io.disconnect();
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  $$(".section, .hero__inner, .stat, .skill, .card, .publist li, .contact__item")
    .forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
}

/* ---------- Nav interactions ---------- */
function initNav() {
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => {
    if (e.target.matches(".nav__link")) {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // active link on scroll
  const sections = $$("main section[id]");
  const navLinks = $$(".nav__link");
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.id;
          navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + id));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  $$(".lang__btn").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  $("#printBtn").addEventListener("click", () => window.print());
  initNav();
  renderAll();
});
