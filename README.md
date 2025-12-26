# AI安全官网

这是一个基于Next.js的大模型安全官网项目，展示了公司在AI安全领域的解决方案、研究成果和资源。

## 项目结构

```
ai-security-website/
├── components/          # 可复用的React组件
├── pages/               # Next.js页面路由
├── styles/              # CSS样式文件
├── assets/              # 静态资源文件
├── utils/               # 工具函数
├── contexts/            # React Context
├── hooks/               # 自定义React Hooks
└── config/              # 配置文件
```

## 页面说明

- `index.js` - 首页
- `about.js` - 关于我们页面
- `solutions.js` - 解决方案页面
- `research.js` - 研究成果页面
- `resources.js` - 资源中心页面
- `news.js` - 新闻动态页面
- `contact.js` - 联系我们页面

## 技术栈

- React.js
- Next.js
- CSS Modules

## 安装和运行

1. 安装依赖：
   ```bash
   npm install
   ```

2. 开发模式运行：
   ```bash
   npm run dev
   ```

3. 构建生产版本：
   ```bash
   npm run build
   ```

4. 启动生产服务器：
   ```bash
   npm start
   ```

## 开发指南

### 添加新页面
1. 在`pages/`目录下创建新的页面文件
2. 使用CSS Modules创建对应的样式文件
3. 在`components/Header.js`中添加导航链接

### 添加新组件
1. 在`components/`目录下创建组件文件
2. 创建对应的CSS Module样式文件
3. 在需要的页面中导入并使用组件

## 部署

项目可以通过多种方式部署：
- Vercel (推荐)
- Netlify
- 自定义Node.js服务器

## 许可证

版权所有 © 2025 AI幻谱科技有限公司