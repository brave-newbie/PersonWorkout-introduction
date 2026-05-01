import { personalInfo } from '../data/personal'

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/60">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-14 px-4">
        <span className="font-semibold text-white tracking-tight">{personalInfo.name}</span>
        <ul className="flex gap-6 text-sm text-gray-400">
          <li><a href="#about" className="hover:text-white transition-colors">关于</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">项目</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">联系</a></li>
        </ul>
      </nav>
    </header>
  )
}
