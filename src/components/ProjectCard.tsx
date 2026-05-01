import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-gray-800 rounded-lg p-6 bg-gray-900/50 hover:border-gray-700 transition-colors flex flex-col gap-5">
      <div>
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <p className="text-sm text-gray-400 mt-1 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
          技术栈
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full border border-gray-700 bg-gray-800/60 text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
          解决的问题
        </p>
        <ul className="space-y-1.5">
          {project.coreProblems.map((problem, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 shrink-0" />
              {problem}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
          关键实现
        </p>
        <ul className="space-y-1.5">
          {project.highlights.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500/70 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
