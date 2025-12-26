import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Solutions.module.css';

export default function Solutions() {
  const solutions = [
    {
      id: 1,
      title: "对抗攻击防护",
      description: "检测并防御针对大模型的对抗样本攻击，保障模型推理准确性",
      features: [
        "实时攻击检测",
        "自适应防护机制",
        "可视化攻击分析",
        "API集成支持"
      ],
      icon: "🛡️"
    },
    {
      id: 2,
      title: "数据隐私保护",
      description: "防止模型训练数据泄露，确保用户隐私安全",
      features: [
        "差分隐私保护",
        "联邦学习支持",
        "数据脱敏处理",
        "合规性验证"
      ],
      icon: "🔒"
    },
    {
      id: 3,
      title: "模型可信验证",
      description: "检测模型完整性，防范恶意篡改和后门植入",
      features: [
        "形式化验证",
        "模型指纹识别",
        "异常行为检测",
        "安全审计报告"
      ],
      icon: "🔍"
    },
    {
      id: 4,
      title: "合规性支持",
      description: "满足GDPR、网络安全法等法规要求",
      features: [
        "合规性评估",
        "隐私影响分析",
        "数据治理框架",
        "监管报告生成"
      ],
      icon: "📋"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>AI安全官网 | 解决方案</title>
        <meta name="description" content="了解我们为大模型安全提供的全方位解决方案" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>解决方案</h1>
          <p className={styles.subtitle}>为企业提供全方位的大模型安全防护</p>
        </section>

        <section className={styles.solutionsGrid}>
          {solutions.map((solution) => (
            <div key={solution.id} className={styles.solutionCard}>
              <div className={styles.icon}>{solution.icon}</div>
              <h2>{solution.title}</h2>
              <p className={styles.description}>{solution.description}</p>
              <ul className={styles.features}>
                {solution.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link href="/details/1" className={styles.learnMore}>了解更多</Link>
            </div>
          ))}
        </section>

        <section className={styles.process}>
          <h2 className={styles.sectionTitle}>我们的安全防护流程</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>风险评估</h3>
              <p>全面分析大模型面临的安全威胁和潜在风险</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>定制方案</h3>
              <p>根据业务需求制定个性化的安全防护方案</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>部署实施</h3>
              <p>快速部署安全组件，最小化业务影响</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>持续监控</h3>
              <p>7×24小时监控安全状态，及时响应威胁</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>准备好提升您的AI安全防护能力了吗？</h2>
          <p>联系我们获取免费的安全评估</p>
          <button className={styles.contactButton}>立即咨询</button>
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