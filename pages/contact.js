import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI安全官网 | 联系我们</title>
        <meta name="description" content="联系我们获取AI安全解决方案和支持服务" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>联系我们</h1>
          <p className={styles.subtitle}>我们期待与您合作，共同提升AI系统的安全性</p>
        </section>

        <section className={styles.content}>
          <div className={styles.contactInfo}>
            <h2>联系信息</h2>
            <div className={styles.infoItem}>
              <h3>办公地址</h3>
              <p>北京市海淀区中关村大街1号</p>
              <p>AI安全大厦 100080</p>
            </div>
            <div className={styles.infoItem}>
              <h3>联系电话</h3>
              <p>销售咨询: 400-123-4567</p>
              <p>技术支持: 400-123-4568</p>
              <p>媒体合作: 400-123-4569</p>
            </div>
            <div className={styles.infoItem}>
              <h3>电子邮箱</h3>
              <p>销售咨询: sales@aisecurity.com</p>
              <p>技术支持: support@aisecurity.com</p>
              <p>媒体合作: pr@aisecurity.com</p>
            </div>
            <div className={styles.infoItem}>
              <h3>办公时间</h3>
              <p>周一至周五: 9:00 - 18:00</p>
              <p>周六: 9:00 - 12:00</p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2>发送消息</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">姓名 *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">邮箱 *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">电话</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="company">公司</label>
                <input type="text" id="company" name="company" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">主题 *</label>
                <select id="subject" name="subject" required>
                  <option value="">请选择</option>
                  <option value="sales">销售咨询</option>
                  <option value="support">技术支持</option>
                  <option value="partnership">合作伙伴</option>
                  <option value="career">职业机会</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">消息 *</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>发送消息</button>
            </form>
          </div>
        </section>

        <section className={styles.mapSection}>
          <h2>我们的位置</h2>
          <div className={styles.map}>
            <div className={styles.mapPlaceholder}>
              <p>地图位置</p>
            </div>
          </div>
        </section>

        <section className={styles.social}>
          <h2>关注我们</h2>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>微博</a>
            <a href="#" className={styles.socialLink}>微信</a>
            <a href="#" className={styles.socialLink}>LinkedIn</a>
            <a href="#" className={styles.socialLink}>GitHub</a>
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