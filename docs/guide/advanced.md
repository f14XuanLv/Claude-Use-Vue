# Claude进阶功能

## 上下文重塑（目前只有下文能重塑）

上下文重塑是一个强大的功能，允许用户：
- 删除**低质量**或者**错误的、不符合要求的**下文信息
- 保留有价值的上文信息
- 优化对话流程和效率，**节省成本**

### 一个例子

<img :src="$withBase('/images/context-reshaping01.png')" alt="上下文重塑功能展示" class="doc-image" style="width: 500px;">

本来打算从 1 2 3 逐步开始提问，但是不小心跳过了 3 先输入了 4，这时候可以通过上下文重塑功能将这条对话的输入改为 3。

<img :src="$withBase('/images/context-reshaping02.png')" alt="上下文重塑功能展示" class="doc-image" style="width: 500px;">

修改之后点击 **Save** 即可。

<img :src="$withBase('/images/context-reshaping03.png')" alt="上下文重塑功能展示" class="doc-image" style="width: 500px;">

## Project 功能（目前只有pro账号可以使用）
Project 功能支持更复杂的任务管理：
- 对**多文件项目支持**更好
- 上传至 Project knowledge 里的内容不会消耗token，**节省成本**
- 上传至 Project knowledge 的 PDF 内的图片无法被识别
- 对于格式是图片但是内容是文字的文件，可以转换为文本再上传
- 在对话过程中也可以额外附上图片，这是可以被模型直接识别的

### 创建 Project

左上角展开侧栏，点击 **Project** 按钮

<img :src="$withBase('/images/project-demo01.png')" alt="Project功能展示" class="doc-image" style="width: 800px;">

然后右上角点击 **Create Project** 按钮

<img :src="$withBase('/images/project-demo02.png')" alt="Project功能展示" class="doc-image" style="width: 800px;">

输入项目名称和目标，点击 **Create Project** 按钮

<img :src="$withBase('/images/project-demo03.png')" alt="Project功能展示" class="doc-image" style="width: 400px;">

所有说明都在里面了，自己尝试一下吧

<img :src="$withBase('/images/project-demo04.png')" alt="Project功能展示" class="doc-image" style="width: 800px;">

## Artifacts 功能

Artifacts是Claude的一项核心功能,用于生成和管理独立的内容块,如代码、文档、图表等。

### 支持的内容类型

- 代码 (application/vnd.ant.code)
- Markdown文档 (text/markdown) 
- HTML页面 (text/html+css+js)
- SVG图形 (image/svg+xml)
- Mermaid图表 (application/vnd.ant.mermaid)
- React组件 (application/vnd.ant.react)

### 使用场景

- 完整的多文件代码实现
- 长篇文档/报告
- 数据/算法/工作流等可视化

### 如何引导模型使用Artifacts

- 直接告诉模型要使用Artifacts，具体一点**可以指定内容类型**
- 在**需要生成多文件代码**的时候，用**强烈语气**明确告诉模型**要生成多个Artifacts实例**：

<img :src="$withBase('/images/artifacts-demo01.png')" alt="Artifacts功能展示" class="doc-image" style="width: 800px;">

- 也可以结合具体的文件结构：

```
📂 project/
├── 📂 src/
│   ├── 📄 index.js
│   ├── 📄 styles.css
│   └── 📂 components/
│       ├── 📄 Header.js
│       └── 📄 Footer.js
└── 📄 README.md
```

## MCP（模型上下文协议）
模型上下文协议（Model Context Protocol）是一个重要的概念：
- 定义了模型如何理解和处理上下文
- 确保对话的连贯性和准确性
- 优化上下文利用效率
- 提供更精准的响应