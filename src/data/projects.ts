import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    name: '内测资格首发平台',
    description:
      '面向独立游戏社区的高并发抢码平台，重点优化库存一致性与系统稳定性',
    tags: ['Spring Boot', 'MySQL', 'Redis', 'RabbitMQ', 'Nginx'],
    coreProblems: [
      '高并发场景下库存超卖问题',
      '流量突发导致数据库压力过大',
      '缓存穿透与缓存击穿问题',
    ],
    highlights: [
      '基于 Redis + Lua 实现库存原子扣减，避免超卖（3000+ 并发压测验证）',
      '使用 RabbitMQ 异步下单实现削峰填谷，降低数据库瞬时压力',
      '设计缓存体系（逻辑过期 + 互斥锁 + 布隆过滤器）提升系统稳定性',
    ],
  },
  {
    id: '2',
    name: '分布式 RPC 框架',
    description:
      '基于 Netty + Zookeeper 的轻量级 RPC 框架，实现服务注册发现与高性能通信',
    tags: ['Java', 'Netty', 'Zookeeper', 'Spring', 'Protostuff'],
    coreProblems: [
      '服务调用依赖耦合高',
      '网络通信性能与可靠性问题',
      'Java 原生序列化性能较低',
    ],
    highlights: [
      '基于 Netty + 自定义协议（魔数 + 版本号）解决 TCP 粘包拆包问题',
      '使用 Zookeeper 实现服务注册与发现，支持客户端负载均衡（随机/轮询）',
      '基于动态代理 + 注解驱动，实现透明远程调用（类似本地方法）',
      '使用 Protostuff 替代 Java 序列化，提高吞吐性能',
    ],
  },
]
