# OpenSpec是什么？
- SDD生态中最轻量的，对旧项目最友好的工具
- 与 spec kit 都是SDD的方案。不够灵活

# 安装
npm install -g @fission-ai/openspec@latest

# 检查版本
openspec --version

# 更新版本
openspec update

# 初始化项目
openspec init

# OpenSpec 的工作流
遵循“提案 -> 规范 -> 实现 -> 归档”的循环
proposal.md: 阐述变更的意图、范围和背景。
specs/: 包含增量规范（Delta Specs），详细描述新增、修改或删除的需求。
design.md: 记录技术设计方案和架构决策。
tasks.md: 一份待办事项清单，将功能拆解为 AI 可执行的具体步骤。

## 提案 (Propose)
目的是在与 AI 编码前，先明确“要做什么”和“为什么做”。

## 审查与完善 (Review & Refine)
AI 生成提案后，你需要审查这些文档。你可以手动编辑 proposal.md、design.md 等文件，让需求和设计更精确，确保 AI 完全理解你的意图。

##  实现 (Apply)
/openspec:apply add-task-priority

## 归档 (Archive)
/openspec:archive add-task-priority

## 命令
| 命令 | 作用 |
| :--- | :--- |
| `openspec init` | 在当前项目中初始化 OpenSpec |
| `openspec list` | 查看所有待实现的变更提案 |
| `openspec show <变更名>` | 查看指定变更的详细信息 |
| `openspec validate <变更名>` | 校验指定变更的规范格式是否正确 |
| `openspec update` | 刷新配置，确保 AI 斜杠命令为最新版本 |