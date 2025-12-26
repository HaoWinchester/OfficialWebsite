import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/News.module.css';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "发布新一代大模型安全检测平台",
      date: "2025年10月15日",
      category: "产品发布",
      excerpt: "全新平台支持多模态大模型的安全评估，提供更全面的防护能力...",
      image: "/images/news1.jpg"
    },
    {
      id: 2,
      title: "研究成果被顶级会议接收",
      date: "2025年9月28日",
      category: "学术成果",
      excerpt: "关于大模型后门检测的论文被NeurIPS接收，标志着我们在AI安全领域的技术实力...",
      image: "/images/news2.jpg"
    },
    {
      id: 3,
      title: "与知名高校建立联合实验室",
      date: "2025年9月10日",
      category: "合作动态",
      excerpt: "深化产学研合作，推动AI安全技术创新，培养下一代安全专家...",
      image: "/images/news3.jpg"
    },
    {
      id: 4,
      title: "获得ISO 27001信息安全认证",
      date: "2025年8月22日",
      category: "公司动态",
      excerpt: "通过国际权威认证，彰显我们在信息安全领域的专业水准...",
      image: "/images/news4.jpg"
    },
    {
      id: 5,
      title: "推出AI安全培训课程",
      date: "2025年8月5日",
      category: "产品发布",
      excerpt: "为企业安全团队提供系统化的AI安全知识培训，提升防护能力...",
      image: "/images/news5.jpg"
    },
    {
      id: 6,
      title: "参与制定行业安全标准",
      date: "2025年7月18日",
      category: "行业影响",
      excerpt: "作为核心成员参与国家AI安全标准制定工作，推动行业健康发展...",
      image: "/images/news6.jpg"
    }
  ];

  const categories = ["全部", "产品发布", "学术成果", "合作动态", "公司动态", "行业影响"];

  return (
    <div className={styles.container}>
      <Head>
        <title>AI安全官网 | 新闻动态</title>
        <meta name="description" content="了解AI安全公司的最新动态、产品发布和行业资讯" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>新闻动态</h1>
          <p className={styles.subtitle}>及时了解我们的最新进展和行业洞察</p>
        </section>

        <section className={styles.content}>
          <div className={styles.sidebar}>
            <div className={styles.categories}>
              <h3>新闻分类</h3>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className={index === 0 ? styles.active : ''}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.popular}>
              <h3>热门新闻</h3>
              <ul>
                <li>
                  <a href="#">发布新一代大模型安全检测平台</a>
                </li>
                <li>
                  <a href="#">研究成果被顶级会议接收</a>
                </li>
                <li>
                  <a href="#">获得ISO 27001信息安全认证</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.newsList}>
            {newsItems.map((news) => (
              <article key={news.id} className={styles.newsItem}>
                <div className={styles.image}>
                  <div className={styles.placeholder}>新闻图片</div>
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{news.category}</span>
                    <span className={styles.date}>{news.date}</span>
                  </div>
                  <h2 className={styles.title}>{news.title}</h2>
                  <p className={styles.excerpt}>{news.excerpt}</p>
                  <Link href={`/details/${news.id}`} className={styles.readMore}>查看详情 →</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.pagination}>
          <button className={styles.pageButton}>上一页</button>
          <span className={styles.pageInfo}>1 / 3</span>
          <button className={styles.pageButton}>下一页</button>
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