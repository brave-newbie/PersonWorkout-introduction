export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  coreProblems: string[]
  highlights: string[]
  link?: string
}

export interface Skill {
  name: string
  category: string
}

export interface PersonalInfo {
  name: string
  title: string
  avatar: string
  bio: string
  email: string
  github: string
  socials?: { name: string; url: string }[]
}
