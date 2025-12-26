import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Research.module.css';

export default function Research() {
  const researchAreas = [
    {
      id: 1,
      title: "对抗攻击与防御",
      description: "研究大模型面临的各种对抗攻击方法及其防御机制",
      papers: 12,
      icon: "⚔️"
    },
    {
      id: 2,
      title: "隐私保护技术",
      description: "探索在保护训练数据隐私的同时保持模型性能的方法",
      papers: 8,
      icon: "🔐"
    },
    {
      id: 3,
      title: "模型可信验证",
      description: "开发验证大模型完整性和可信度的形式化方法",
      papers: 15,
      icon: "🔍"
    },
    {
      id: 4,
      title: "AI伦理与安全",
      description: "研究AI系统中的伦理问题和安全治理框架",
      papers: 6,
      icon: "⚖️"
    }
  ];

  const recentPapers = [
    {
      id: 1,
      title: "基于形式化验证的大模型后门检测方法",
      authors: "张伟, 李娜, 王强",
      conference: "NeurIPS 2025",
      abstract: "本文提出了一种基于形式化验证的大模型后门检测方法，能够在不访问训练数据的情况下检测模型中的后门...",
      link: "#"
    },
    {
      id: 2,
      title: "差分隐私在大语言模型训练中的应用",
      authors: "李娜, 赵敏, 刘洋",
      conference: "ICML 2025",
      abstract: "本研究探索了差分隐私技术在大语言模型训练中的应用，实现了在保护隐私的同时保持模型性能...",
      link: "#"
    },
    {
      id: 3,
      title: "多模态大模型的对抗攻击与防御",
      authors: "王强, 陈晨, 孙磊",
      conference: "CVPR 2025",
      abstract: "本文首次系统研究了多模态大模型面临的对抗攻击威胁，并提出了相应的防御机制...",
      link: "#"
    }
  ];

  const openSourceProjects = [
    {
      id: 1,
      name: "AISec Toolkit",
      description: "大模型安全评估工具包，包含多种攻击和防御方法的实现",
      stars: 1200,
      link: "#"
    },
    {
      id: 2,
      name: "ModelGuard",
      description: "模型完整性验证工具，支持多种大模型格式",
      stars: 800,
      link: "#"
    },
    {
      id: 3,
      name: "PrivacyLens",
      description: "隐私泄露检测工具，帮助识别模型中的敏感信息",
      stars: 650,
      link: "#"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>AI安全官网 | 研究成果</title>
        <meta name="description" content="了解我们在AI安全领域的最新研究成果和开源项目" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>研究成果</h1>
          <p className={styles.subtitle}>推动AI安全技术前沿，引领行业发展</p>
        </section>

        <section className={styles.researchAreas}>
          <h2 className={styles.sectionTitle}>研究领域</h2>
          <div className={styles.areasGrid}>
            {researchAreas.map((area) => (
              <div key={area.id} className={styles.areaCard}>
                <div className={styles.icon}>{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className={styles.paperCount}>{area.papers} 篇论文</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.recentPapers}>
          <h2 className={styles.sectionTitle}>最新论文</h2>
          <div className={styles.papersList}>
            {recentPapers.map((paper) => (
              <div key={paper.id} className={styles.paperCard}>
                <h3>{paper.title}</h3>
                <p className={styles.authors}>{paper.authors}</p>
                <p className={styles.conference}>{paper.conference}</p>
                <p className={styles.abstract}>{paper.abstract}</p>
                <Link href={`/details/${paper.id}`} className={styles.readMore}>查看详情 →</Link>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.openSource}>
          <h2 className={styles.sectionTitle}>开源项目</h2>
          <div className={styles.projectsGrid}>
            {openSourceProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={styles.projectStats}>
                  <span className={styles.stars}>⭐ {project.stars}</span>
                  <a href={project.link} className={styles.projectLink}>查看项目</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.collaboration}>
          <h2>学术合作</h2>
          <p>我们与全球顶尖的学术机构和研究团队保持密切合作，共同推动AI安全技术的发展。</p>
          <div className={styles.institutions}>
            <div className={styles.institution}>MIT</div>
            <div className={styles.institution}>斯坦福大学</div>
            <div className={styles.institution}>清华大学</div>
            <div className={styles.institution}>北京大学</div>
            <div className={styles.institution}>CMU</div>
            <div className={styles.institution}>ETH Zurich</div>
          </div>
        </section>

        <section className={styles.moreResearch}>
          <h2>更多研究发现</h2>
          <p>了解更多关于AI安全的深度技术分析和研究成果</p>
          <Link href="/findings" className={styles.researchLink}>
            查看详细研究发现 →
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>产品与服务</h3>
            <ul>
              <li>安全评估平台</li>
              <li>防护解决方案</li>
              <li>咨询服务</li>
              <li>培训课程</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>资源中心</h3>
            <ul>
              <li>技术白皮书</li>
              <li>行业报告</li>
              <li>开源工具</li>
              <li>技术博客</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>关于我们</h3>
            <ul>
              <li>公司简介</li>
              <li>团队介绍</li>
              <li>发展历程</li>
              <li>加入我们</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>联系我们</h3>
            <ul>
              <li>电话: 400-xxx-xxxx</li>
              <li>邮箱: contact@aisecurity.com</li>
              <li>地址: 北京市海淀区xx路xx号</li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          AI安全 © {new Date().getFullYear()} 保留所有权利
        </div>
      </footer>
    </div>
  );
}