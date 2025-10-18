export type Role = 'user' | 'bot'

export type Message = {
  id: string
  role: Role
  text: string
  time: string
}

export type ContextData = {
  id: string
  title: string
  summary: string
  author?: string
  date?: string
  source?: string
  links?: string[]
  keyPoints?: string[]
}
