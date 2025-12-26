import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Resources.module.css';

export default function Resources() {
  const resourceCategories = [
    {
      id: 1,
      title: "技术白皮书",
      description: "深入了解大模型安全技术原理和应用实践",
      count: 12,
      icon: "📄"
    },
    {
      id: 2,
      title: "行业报告",
      description: "获取AI安全领域的最新趋势和市场分析",
      count: 8,
      icon: "📊"
    },
    {
      id: 3,
      title: "开源工具",
      description: "免费使用的AI安全检测和防护工具",
      count: 15,
      icon: "🛠️"
    },
    {
      id: 4,
      title: "技术博客",
      description: "团队专家分享的技术见解和实践经验",
      count: 24,
      icon: "📝"
    },
    {
      id: 5,
      title: "培训课程",
      description: "系统化的AI安全知识学习路径",
      count: 6,
      icon: "🎓"
    },
    {
      id: 6,
      title: "合规指南",
      description: "满足各类法规要求的实施建议",
      count: 9,
      icon: "📋"
    }
  ];

  const featuredResources = [
    {
      id: 1,
      title: "大模型安全防护白皮书",
      type: "白皮书",
      date: "2025年10月",
      description: "全面介绍大模型面临的安全威胁和防护策略",
      link: "#"
    },
    {
      id: 2,
      title: "AI安全工具包使用指南",
      type: "工具",
      date: "2025年9月",
      description: "详细介绍如何使用我们的开源安全工具进行模型检测",
      link: "#"
    },
    {
      id: 3,
      title: "隐私保护技术在LLM中的应用",
      type: "博客",
      date: "2025年8月",
      description: "探讨在大语言模型中实现隐私保护的最新技术",
      link: "#"
    },
    {
      id: 4,
      title: "2025年AI安全市场分析报告",
      type: "报告",
      date: "2025年7月",
      description: "分析全球AI安全市场的发展趋势和机遇",
      link: "#"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>AI安全官网 | 资源中心</title>
        <meta name="description" content="获取AI安全领域的技术文档、白皮书、工具和培训资源" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>资源中心</h1>
          <p className={styles.subtitle}>丰富的学习材料和实用工具，助您提升AI安全能力</p>
        </section>

        <section className={styles.categories}>
          <h2 className={styles.sectionTitle}>资源分类</h2>
          <div className={styles.categoriesGrid}>
            {resourceCategories.map((category) => (
              <div key={category.id} className={styles.categoryCard}>
                <div className={styles.icon}>{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className={styles.resourceCount}>{category.count} 个资源</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.featured}>
          <h2 className={styles.sectionTitle}>推荐资源</h2>
          <div className={styles.resourcesList}>
            {featuredResources.map((resource) => (
              <div key={resource.id} className={styles.resourceCard}>
                <div className={styles.resourceType}>{resource.type}</div>
                <h3>{resource.title}</h3>
                <p className={styles.date}>{resource.date}</p>
                <p className={styles.description}>{resource.description}</p>
                <a href={resource.link} className={styles.download}>查看详情</a>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.searchSection}>
          <h2>查找更多资源</h2>
          <div className={styles.searchBox}>
            <input type="text" placeholder="搜索资源..." className={styles.searchInput} />
            <button className={styles.searchButton}>搜索</button>
          </div>
          <div className={styles.filters}>
            <select className={styles.filterSelect}>
              <option>所有类型</option>
              <option>白皮书</option>
              <option>报告</option>
              <option>工具</option>
              <option>博客</option>
            </select>
            <select className={styles.filterSelect}>
              <option>所有主题</option>
              <option>对抗攻击</option>
              <option>隐私保护</option>
              <option>模型验证</option>
              <option>合规性</option>
            </select>
          </div>
        </section>

        <section className={styles.newsletter}>
          <h2>订阅我们的技术通讯</h2>
          <p>定期获取最新的AI安全研究进展和行业动态</p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="您的邮箱地址" className={styles.emailInput} />
            <button className={styles.subscribeButton}>订阅</button>
          </div>
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
          上海幻谱信息科技有限公司 © {new Date().getFullYear()} 保留所有权利
        </div>
        <div className={styles.icp}>
          沪ICP备2025155378号-1
        </div>
      </footer>
    </div>
  );
}