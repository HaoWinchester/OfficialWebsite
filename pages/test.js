import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Test.module.css';

export default function Test() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI安全官网 | 测试页面</title>
        <meta name="description" content="测试详情页面功能" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>测试页面</h1>
          <p className={styles.subtitle}>测试详情页面功能</p>
        </section>

        <section className={styles.content}>
          <div className={styles.testLinks}>
            <h2>测试链接</h2>
            <ul>
              <li><Link href="/details/1">详情页面 1</Link></li>
              <li><Link href="/details/2">详情页面 2</Link></li>
              <li><Link href="/details/3">详情页面 3</Link></li>
              <li><Link href="/details/4">详情页面 4 (不存在)</Link></li>
            </ul>
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