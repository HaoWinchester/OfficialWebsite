import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI安全官网 | 首页</title>
        <meta name="description" content="专注于大模型安全的领先解决方案提供商" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            大模型安全防护专家
          </h1>
          <p className={styles.description}>
            为企业和研究机构提供全方位的大模型安全解决方案，保护AI系统的完整性、保密性和可用性
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>查看解决方案</button>
            <button className={styles.secondaryButton}>联系我们</button>
          </div>
        </section>

        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>我们的核心能力</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>对抗攻击防护</h3>
              <p>抵御针对大模型的对抗样本攻击，保障模型推理准确性</p>
            </div>
            <div className={styles.featureCard}>
              <h3>数据隐私保护</h3>
              <p>防止模型训练数据泄露，确保用户隐私安全</p>
            </div>
            <div className={styles.featureCard}>
              <h3>模型可信验证</h3>
              <p>检测模型完整性，防范恶意篡改和后门植入</p>
            </div>
            <div className={styles.featureCard}>
              <h3>合规性支持</h3>
              <p>满足GDPR、网络安全法等法规要求</p>
            </div>
          </div>
        </section>

        <section className={styles.news}>
          <h2 className={styles.sectionTitle}>最新动态</h2>
          <div className={styles.newsGrid}>
            <div className={styles.newsCard}>
              <h3>发布新一代大模型安全检测平台</h3>
              <p className={styles.date}>2025年10月15日</p>
              <p>全新平台支持多模态大模型的安全评估... <Link href="/details/3">查看详情 →</Link></p>
            </div>
            <div className={styles.newsCard}>
              <h3>研究成果被顶级会议接收</h3>
              <p className={styles.date}>2025年9月28日</p>
              <p>关于大模型后门检测的论文被NeurIPS接收... <Link href="/details/2">查看详情 →</Link></p>
            </div>
            <div className={styles.newsCard}>
              <h3>与知名高校建立联合实验室</h3>
              <p className={styles.date}>2025年9月10日</p>
              <p>深化产学研合作，推动AI安全技术创新...</p>
            </div>
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
          AI安全 © {new Date().getFullYear()} 保留所有权利
        </div>
      </footer>
    </div>
  );
}