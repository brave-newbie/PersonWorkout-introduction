import { motion } from 'framer-motion'
import { skills } from '../data/skills'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const focusAreas = [
  {
    title: '后端工程',
    desc: '基于 Spring Boot 构建高可用后端服务，关注代码质量与系统稳定性。',
  },
  {
    title: '分布式实践',
    desc: '探索分布式场景下的缓存、消息队列与数据一致性方案。',
  },
  {
    title: 'AI 应用探索',
    desc: '将 AI 能力融入工程实践，探索智能化工具与效率提升方向。',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-4 scroll-mt-14">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="text-2xl font-bold text-white mb-12"
      >
        关于我
      </motion.h2>

      <div className="space-y-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-2xl"
        >
          <p className="text-gray-400 leading-relaxed text-base">
            关注后端系统设计与工程实践，主要使用 Java、Spring Boot、Redis 等技术栈，同时探索 AI 应用开发。
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">技术栈</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 text-sm text-gray-300 hover:border-gray-500 hover:text-white transition-colors cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">技术方向</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="border border-gray-800 rounded-lg p-5 bg-gray-900/50 hover:border-gray-700 transition-colors"
              >
                <h4 className="font-medium text-white text-base mb-2">{area.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
