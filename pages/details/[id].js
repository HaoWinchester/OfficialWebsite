import Head from 'next/head';
import Header from '../../components/Header';
import styles from '../../styles/Details.module.css';

// 模拟数据 - 在实际应用中，这些数据应该从API或数据库获取
const detailsData = {
  1: {
    title: "大模型安全的重要性与防护策略",
    category: "研究发现",
    date: "2025年10月25日",
    content: `
      <h2>概述</h2>
      <p>随着人工智能技术的飞速发展，大模型已成为各行业数字化转型的核心驱动力。然而，大模型的广泛应用也带来了前所未有的安全挑战。本文档基于最新技术分析，全面介绍大模型安全的重要性、潜在安全问题、主要痛点以及防护策略。</p>

      <h2>大模型安全的重要性</h2>
      <ul>
        <li><strong>价值驱动</strong>：大模型承载着企业的核心业务逻辑和敏感数据</li>
        <li><strong>风险控制</strong>：保护AI系统免受恶意攻击和滥用</li>
        <li><strong>技术发展</strong>：确保AI技术的健康发展</li>
      </ul>

      <h2>大模型面临的主要安全问题</h2>
      <h3>传统安全威胁持续存在</h3>
      <ul>
        <li>数据投毒与模型窃取</li>
        <li>提示注入与推理攻击</li>
        <li>隐私与偏见</li>
        <li>影子人工智能与供应链漏洞</li>
      </ul>

      <h3>新型链式组合攻击</h3>
      <p>链式组合攻击采用"单点无害，组合致命"的核心理念，包含三个关键环节：</p>
      <ol>
        <li>提示词攻击绕过护栏</li>
        <li>工具污染/非预期调用</li>
        <li>结合业务逻辑漏洞</li>
      </ol>

      <h3>对抗性攻击持续升级</h3>
      <ul>
        <li>攻击技术多样化（白盒攻击、黑盒攻击、物理世界攻击）</li>
        <li>攻击场景复杂化（多模态攻击、跨场景迁移、持续性攻击）</li>
      </ul>

      <h2>大模型安全防护策略</h2>
      <h3>技术防护措施</h3>
      <ul>
        <li>多层次防护体系（输入层、模型层、工具层、应用层）</li>
        <li>智能化安全架构（Agentic RAG框架、动态上下文构建）</li>
        <li>先进技术应用（多模态处理能力、自适应防御）</li>
      </ul>

      <h3>管理防护策略</h3>
      <ul>
        <li>建立AI安全治理框架</li>
        <li>实施全生命周期管理</li>
        <li>建立应急响应机制</li>
      </ul>
    `
  },
  2: {
    title: "基于形式化验证的大模型后门检测方法",
    category: "研究成果",
    date: "2025年9月28日",
    content: `
      <h2>研究概述</h2>
      <p>本文提出了一种基于形式化验证的大模型后门检测方法，能够在不访问训练数据的情况下检测模型中的后门。</p>

      <h2>技术原理</h2>
      <p>通过形式化验证技术，我们可以数学上证明模型在特定输入下的行为，从而检测是否存在异常响应模式。</p>

      <h2>实验结果</h2>
      <p>在多个大模型上的测试表明，该方法能够有效检测出90%以上的后门植入，误报率低于5%。</p>

      <h2>应用前景</h2>
      <p>该技术可广泛应用于模型安全评估、第三方模型验证等场景。</p>
    `
  },
  3: {
    title: "发布新一代大模型安全检测平台",
    category: "新闻动态",
    date: "2025年10月15日",
    content: `
      <h2>产品发布</h2>
      <p>我们很高兴地宣布发布新一代大模型安全检测平台，该平台支持多模态大模型的安全评估，提供更全面的防护能力。</p>

      <h2>核心功能</h2>
      <ul>
        <li>多模态安全检测</li>
        <li>实时威胁监控</li>
        <li>自动化安全评估</li>
        <li>可视化报告生成</li>
      </ul>

      <h2>技术优势</h2>
      <p>新平台采用了最新的AI安全技术，能够检测传统方法难以发现的复杂攻击模式。</p>
    `
  }
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const detail = detailsData[parseInt(id)] || {
    title: "内容未找到",
    category: "未知",
    date: "未知",
    content: "<p>抱歉，未找到您请求的内容。</p>"
  };

  return {
    props: {
      detail
    }
  };
}

export default function Details({ detail }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI安全官网 | {detail.title}</title>
        <meta name="description" content={detail.title} />
      </Head>

      <Header />

      <main className={styles.main}>
        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <h1 className={styles.title}>{detail.title}</h1>
            <div className={styles.meta}>
              <span className={styles.category}>{detail.category}</span>
              <span className={styles.date}>{detail.date}</span>
            </div>
          </header>

          <div className={styles.content} dangerouslySetInnerHTML={{ __html: detail.content }} />
        </article>
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