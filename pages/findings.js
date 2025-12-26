import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Findings.module.css';

export default function Findings() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI安全官网 | 研究发现</title>
        <meta name="description" content="深入了解AI安全领域的前沿研究发现和技术分析" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>研究发现</h1>
          <p className={styles.subtitle}>探索AI安全领域的前沿技术与深度分析</p>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.contentContainer}>
            <div className={styles.findingCard}>
              <h2 className={styles.findingTitle}>大模型安全的重要性与防护策略</h2>
              <div className={styles.findingContent}>
                <h3>概述</h3>
                <p>随着人工智能技术的飞速发展，大模型已成为各行业数字化转型的核心驱动力。然而，大模型的广泛应用也带来了前所未有的安全挑战。本文档基于最新技术分析，全面介绍大模型安全的重要性、潜在安全问题、主要痛点以及防护策略。</p>
                <p><Link href="/details/1">查看详情 →</Link></p>

                <h3>大模型安全的重要性</h3>
                <ul>
                  <li><strong>价值驱动</strong>：大模型承载着企业的核心业务逻辑和敏感数据</li>
                  <li><strong>风险控制</strong>：保护AI系统免受恶意攻击和滥用</li>
                  <li><strong>技术发展</strong>：确保AI技术的健康发展</li>
                </ul>

                <h3>大模型面临的主要安全问题</h3>
                <h4>传统安全威胁持续存在</h4>
                <ul>
                  <li>数据投毒与模型窃取</li>
                  <li>提示注入与推理攻击</li>
                  <li>隐私与偏见</li>
                  <li>影子人工智能与供应链漏洞</li>
                </ul>

                <h4>新型链式组合攻击</h4>
                <p>链式组合攻击采用"单点无害，组合致命"的核心理念，包含三个关键环节：</p>
                <ol>
                  <li>提示词攻击绕过护栏</li>
                  <li>工具污染/非预期调用</li>
                  <li>结合业务逻辑漏洞</li>
                </ol>

                <h4>对抗性攻击持续升级</h4>
                <ul>
                  <li>攻击技术多样化（白盒攻击、黑盒攻击、物理世界攻击）</li>
                  <li>攻击场景复杂化（多模态攻击、跨场景迁移、持续性攻击）</li>
                </ul>

                <h3>大模型安全防护策略</h3>
                <h4>技术防护措施</h4>
                <ul>
                  <li>多层次防护体系（输入层、模型层、工具层、应用层）</li>
                  <li>智能化安全架构（Agentic RAG框架、动态上下文构建）</li>
                  <li>先进技术应用（多模态处理能力、自适应防御）</li>
                </ul>

                <h4>管理防护策略</h4>
                <ul>
                  <li>建立AI安全治理框架</li>
                  <li>实施全生命周期管理</li>
                  <li>建立应急响应机制</li>
                </ul>
              </div>
            </div>

            <div className={styles.findingCard}>
              <h2 className={styles.findingTitle}>大模型时代下的离线对抗技术架构分析</h2>
              <div className={styles.findingContent}>
                <h3>概述</h3>
                <p>本文档分析了在APSARA云栖大会上展示的"大模型时代下的离线对抗"技术架构。该架构展示了一个AI驱动的人脸案件审核系统，旨在处理对抗性场景（如人脸识别攻击），强调可扩展性、可运营性和可泛化性。</p>
                <p><Link href="/details/1">查看详情 →</Link></p>

                <h3>架构总览</h3>
                <p>该技术架构分为三个主要部分：</p>
                <ul>
                  <li><strong>左侧</strong>：数据输入与核心工作流</li>
                  <li><strong>中间</strong>：模型与动态上下文</li>
                  <li><strong>右侧</strong>：管理与验证</li>
                </ul>

                <h3>关键技术特点</h3>
                <ul>
                  <li><strong>Agentic RAG框架</strong>：结合智能体（Agent）的决策能力与RAG的检索优势</li>
                  <li><strong>多模态处理能力</strong>：支持文档、图像、网页等多种数据源</li>
                  <li><strong>混合知识存储</strong>：结合知识图谱和向量数据库的优势</li>
                  <li><strong>智能检索策略</strong>：自动识别查询类型和复杂度</li>
                </ul>

                <h3>应用价值</h3>
                <p>该架构为企业知识库建设提供了一个先进的技术方案，特别适用于需要强语义理解和复杂推理能力的应用场景。</p>
              </div>
            </div>

            <div className={styles.findingCard}>
              <h2 className={styles.findingTitle}>基于Agentic RAG构建阿里云蓝军知识库技术架构分析</h2>
              <div className={styles.findingContent}>
                <h3>概述</h3>
                <p>本文档分析了阿里云在2023年云栖大会上展示的"基于Agentic RAG构建阿里云蓝军知识库"技术架构。该架构通过智能体（Agent）驱动的检索增强生成（RAG）框架，实现了知识库的高效构建与精准检索。</p>
                <p><Link href="/details/1">查看详情 →</Link></p>

                <h3>架构核心模块</h3>
                <ol>
                  <li><strong>文件初始化流水线</strong>：负责将原始文件转化为可处理的文本块与元数据</li>
                  <li><strong>知识存储基座</strong>：负责存储与管理结构化与非结构化知识</li>
                  <li><strong>检索代理工作流</strong>：负责根据用户查询智能匹配知识</li>
                </ol>

                <h3>技术优势</h3>
                <ul>
                  <li><strong>高效性</strong>：自动化处理流程，减少人工干预</li>
                  <li><strong>准确性</strong>：多源信息验证，提升答案准确性</li>
                  <li><strong>可扩展性</strong>：模块化设计，易于功能扩展</li>
                  <li><strong>智能化</strong>：Agent驱动的主动检索和推理</li>
                </ul>
              </div>
            </div>

            <div className={styles.findingCard}>
              <h2 className={styles.findingTitle}>企业资产自动化信息收集Agent技术架构分析</h2>
              <div className={styles.findingContent}>
                <h3>概述</h3>
                <p>本文档分析了在APSARA云栖大会上展示的"企业资产自动化信息收集Agent"技术架构。该架构通过智能化的信息收集和处理流程，实现了企业资产信息的高效自动化采集。</p>
                <p><Link href="/details/1">查看详情 →</Link></p>

                <h3>架构核心组件</h3>
                <ul>
                  <li><strong>中央核心：信息收集Agent</strong>：协调整个信息收集流程</li>
                  <li><strong>Playwright MCP</strong>：负责Web数据收集</li>
                  <li><strong>OCR MCP</strong>：负责视觉/文本数据处理</li>
                </ul>

                <h3>技术特点</h3>
                <ul>
                  <li><strong>模块化设计</strong>：各模块功能独立，易于维护和扩展</li>
                  <li><strong>智能化处理</strong>：能够处理不同类型的网站和数据格式</li>
                  <li><strong>数据质量控制</strong>：多重验证机制确保数据准确性</li>
                </ul>

                <h3>应用场景</h3>
                <ul>
                  <li>企业资产管理</li>
                  <li>市场调研</li>
                  <li>风险评估</li>
                </ul>
              </div>
            </div>

            <div className={styles.findingCard}>
              <h2 className={styles.findingTitle}>AI安全前沿攻防技术分析</h2>
              <div className={styles.findingContent}>
                <h3>概述</h3>
                <p>本文档基于云栖大会AI安全前沿攻防技术分享的幻灯片内容，详细分析了大模型安全领域的攻击技术、防御策略以及未来发展趋势。</p>
                <p><Link href="/details/1">查看详情 →</Link></p>

                <h3>主要攻击方法</h3>
                <ol>
                  <li><strong>加密混淆绕过</strong>：多重编码 + 零宽字符混淆 + 特殊输出格式</li>
                  <li><strong>LRM机制绕过</strong>：机制绕过 + 对抗输入 + 对抗意识</li>
                  <li><strong>自适应攻击</strong>：通用攻击prompt + 恶意query分类 + 自适应攻击</li>
                </ol>

                <h3>主要防御方法</h3>
                <ol>
                  <li><strong>FewShot逻辑COT</strong>：特殊token清洗 + 逻辑COT</li>
                  <li><strong>数据去毒</strong>：关键词检测 + 逆归溯 + 安全后端</li>
                  <li><strong>意图识别</strong>：意图识别 + 风险分级 + 内容改写</li>
                </ol>

                <h3>链式组合攻击</h3>
                <p>链式组合攻击是新兴的攻击技术，强调"单点无害，组合致命"的核心理念：</p>
                <ol>
                  <li><strong>第一环</strong>：提示词攻击绕过护栏</li>
                  <li><strong>第二环</strong>：工具污染/非预期调用</li>
                  <li><strong>第三环</strong>：结合业务逻辑漏洞</li>
                </ol>
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