import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI安全官网 | 关于我们</title>
        <meta name="description" content="了解AI安全公司的使命、愿景和团队" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>关于我们</h1>
          <p className={styles.subtitle}>致力于成为全球领先的大模型安全解决方案提供商</p>
        </section>

        <section className={styles.content}>
          <div className={styles.section}>
            <h2>公司简介</h2>
            <p>
              AI安全公司成立于2020年，专注于大模型安全技术的研究与应用。我们的使命是保护人工智能系统的安全，
              防范各种潜在威胁，确保AI技术的健康发展。公司汇聚了来自顶尖高校和研究机构的安全专家，
              在对抗攻击、隐私保护、模型验证等领域拥有多项核心技术和专利。
            </p>
          </div>

          <div className={styles.section}>
            <h2>发展历程</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2020</div>
                <div className={styles.timelineContent}>
                  <h3>公司成立</h3>
                  <p>由清华大学AI安全实验室核心团队创立</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2021</div>
                <div className={styles.timelineContent}>
                  <h3>首款产品发布</h3>
                  <p>推出大模型对抗攻击检测工具</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2022</div>
                <div className={styles.timelineContent}>
                  <h3>完成A轮融资</h3>
                  <p>获得红杉资本等知名机构投资</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2023</div>
                <div className={styles.timelineContent}>
                  <h3>技术突破</h3>
                  <p>发布基于形式化验证的模型安全检测平台</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2024</div>
                <div className={styles.timelineContent}>
                  <h3>国际合作</h3>
                  <p>与MIT、斯坦福等国际顶尖研究机构建立合作关系</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>2025</div>
                <div className={styles.timelineContent}>
                  <h3>行业领先</h3>
                  <p>服务客户超过500家，覆盖金融、医疗、自动驾驶等多个领域</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>核心团队</h2>
            <div className={styles.team}>
              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <div className={styles.placeholder}>头像</div>
                </div>
                <h3>张伟</h3>
                <p className={styles.role}>创始人兼CEO</p>
                <p>清华大学计算机系博士，曾任Google AI研究员</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <div className={styles.placeholder}>头像</div>
                </div>
                <h3>李娜</h3>
                <p className={styles.role}>首席科学家</p>
                <p>MIT博士，IEEE Fellow，在AI安全领域发表论文50余篇</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <div className={styles.placeholder}>头像</div>
                </div>
                <h3>王强</h3>
                <p className={styles.role}>技术副总裁</p>
                <p>卡内基梅隆大学博士，前微软Azure AI安全负责人</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>企业文化</h2>
            <div className={styles.values}>
              <div className={styles.value}>
                <h3>创新</h3>
                <p>持续探索AI安全前沿技术，推动行业进步</p>
              </div>
              <div className={styles.value}>
                <h3>责任</h3>
                <p>以保护用户AI系统安全为己任，严守职业道德</p>
              </div>
              <div className={styles.value}>
                <h3>协作</h3>
                <p>鼓励团队合作，发挥集体智慧</p>
              </div>
              <div className={styles.value}>
                <h3>卓越</h3>
                <p>追求技术卓越，提供业界领先的产品和服务</p>
              </div>
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
          上海幻谱信息科技有限公司 © {new Date().getFullYear()} 保留所有权利
        </div>
        <div className={styles.icp}>
          沪ICP备2025155378号-1
        </div>
      </footer>
    </div>
  );
}