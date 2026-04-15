# 大模型（LLM）
- 优点
- 缺点
    - 无状态：对话结束就忘记
    - 智能生成文字：不能执行
    - 上下文限制
    - 输出概率性：同样输入，可能不同输出

# Prompt
提示词

# Context
上下文

# MCP
- 全称:模型上下文协议

# RAG
- 中文全称：检索增强生成
- 大模型有时候会胡编乱造，有了RAG之后，会先去知识库查找

# Vibe Coding
- 自然语言指导AI写代码。(说想法→看结果→再调整)
- Andrej Karpathy于2025年2月首次提出

# Cpec Coding
- 规范驱动开发

# Harness Engineering
- 四层结构
    - 提示词工程（Prompt）
    - 上下文工程（Context）
    - 记忆层：解决无状态
    - 执行层：解决只能生成文字
    - 反馈层：解决输出不可靠
    - 编排层：解决复杂问题拆解问题

# Agent 软件
## 国内
- Qoder（阿里）
- OpenCode（微软）
- CodeBuddy（腾讯）
- Trae（字节）
- CodeGeeX（美团）
## 国外
- Cursor（Anysphere）
- Kiro（亚马逊）

# 工具生态
- 终端派：Claude Code、OpenClaw（强调终端工作流）
- 全能派：Cursor、GitHub Copilot（支持多范式切换）
- IDE派：JetBrains AI、通义灵码（深度集成开发环境）
- 开源派：OpenCode、Hermes Agent（提供自定义能力）
- 中国力量：Trae、Qoder、CodeBuddy（本土化解决方案）

# 选择策略
- 个人项目/快速原型：优先使用Vibe Coding，快速验证想法
- 企业级应用/团队协作：采用Spec Coding，确保代码质量与可维护性
- 复杂系统/长期维护：构建Harness Engineering体系，实现AI自主开发
- 标准化产品：探索ID Coding，实现"需求→部署"的无缝转化

# 演进关系
- Vibe → Spec：当原型验证有效、需求稳定后，用Spec固化规则，解决"看起来能用"到"真正能用"的鸿沟
- Spec → Harness：当系统复杂到需要多Agent协作、持续迭代时，用Harness构建自动化环境
- 现实应用：大型项目常混合使用——Vibe做探索、Spec做模块、Harness做整体工程化