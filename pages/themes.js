import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Themes.module.css';

export default function Themes() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI安全官网 | 主题展示</title>
        <meta name="description" content="查看AI安全官网的不同主题效果" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>主题展示</h1>
          <p className={styles.subtitle}>体验AI安全官网的深色和浅色主题</p>
        </section>

        <section className={styles.content}>
          <div className={styles.themeContainer}>
            <div className={styles.themeCard}>
              <h2 className={styles.themeTitle}>深色主题</h2>
              <div className={styles.themePreview} data-theme="dark">
                <div className={styles.previewContent}>
                  <h3>深色主题示例</h3>
                  <p>这是深色主题的展示效果，适合在光线较暗的环境中使用。</p>
                  <div className={styles.previewButtons}>
                    <button className={styles.primaryButton}>主要按钮</button>
                    <button className={styles.secondaryButton}>次要按钮</button>
                  </div>
                </div>
              </div>
              <p className={styles.themeDescription}>
                深色主题采用深蓝色渐变背景，减少眼部疲劳，适合夜间使用。
              </p>
            </div>

            <div className={styles.themeCard}>
              <h2 className={styles.themeTitle}>浅色主题</h2>
              <div className={styles.themePreview} data-theme="light">
                <div className={styles.previewContent}>
                  <h3>浅色主题示例</h3>
                  <p>这是浅色主题的展示效果，适合在光线充足的环境中使用。</p>
                  <div className={styles.previewButtons}>
                    <button className={styles.primaryButton}>主要按钮</button>
                    <button className={styles.secondaryButton}>次要按钮</button>
                  </div>
                </div>
              </div>
              <p className={styles.themeDescription}>
                浅色主题采用浅蓝色渐变背景，清新明亮，适合日间使用。
              </p>
            </div>
          </div>

          <div className={styles.instructions}>
            <h2>如何切换主题</h2>
            <p>点击页面右上角的主题切换按钮，即可在深色和浅色主题之间切换。</p>
            <div className={styles.toggleButtonDemo}>
              <span>主题切换按钮示例：</span>
              <button className={styles.demoToggle}>
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6c1.012 0 1.97.255 2.805.705.835.45 1.537 1.11 2.045 1.91.508.8.75 1.73.75 2.705 0 3.309-2.691 6-6 6zm0-11c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"/>
                  <path d="M12 22c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .552-.448 1-1 1zM12 4c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .552.448 1 1 1zM22 12c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1zM4 12c0 .552.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1H5c-.552 0-1 .448-1 1zM18.364 7.636c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0zM5.636 18.364c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414zM19.78 17.78c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0zM4.22 6.22c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0z"/>
                </svg>
              </button>
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