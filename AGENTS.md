# AGENTS.md

This project is intentionally MVP-first.
Prefer shipping a polished simple version over adding features.

<br />

## Objectives

开发目标优先级：

1. 优先保证简洁、现代、有设计感的个人作品集网站体验
2. 保持代码清晰、组件可复用、结构易维护
3. 优先实现高质量 UI，而不是过度复杂功能
4. 避免过度工程化，优先简单方案

## Development Rules

### 组件开发

- 每个页面模块独立为组件（Hero、About、Projects、Contact 等）
- 项目卡片使用独立 ProjectCard 组件
- 优先复用已有组件，不重复实现相似逻辑

### 样式规范

- 样式优先使用 Tailwind CSS
- 保持统一设计风格（深色主题、统一 spacing、统一 typography）
- 动画仅做轻量增强，不影响性能或可读性

### 数据管理

- 项目和技能内容从 data 文件读取
- 不要将内容硬编码到组件中
- 数据结构保持易扩展

### 工程原则

- 优先最简单可行实现
- 尽量最小改动完成需求
- 不随意新增第三方依赖
- 引入新依赖前先说明理由

## Constraints

不要主动做以下事情：

- 不引入复杂状态管理
- 不增加后端、数据库或 API
- 不擅自加入 PRD 未提到的新功能
- 不添加炫技型复杂动画
- 不重构无关代码
- 不改变既定设计风格

## Workflow

每次处理任务遵循：

1. 先分析需求并给出实现计划
2. 再进行编码实现
3. 尽量小步迭代，不做大范围修改
4. 完成后说明：
   - 修改了什么
   - 为什么这样实现
   - 是否影响现有结构

## Code Quality

生成代码默认遵守：

- TypeScript 类型明确
- 组件职责单一
- 保持代码简洁可读
- 避免过度抽象
- 优先可维护性而不是炫技写法

## Decision Preference

多个方案存在时优先选择：

1. 简单 > 复杂
2. 可维护 > 炫技
3. 一致性 > 花样变化
4. 性能 > 过度动画

