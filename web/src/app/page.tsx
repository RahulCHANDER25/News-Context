'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Typography } from '@mui/material'

import ContextCard from '../components/ContextCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatInput from '../components/ChatInput'
import ChatList from '../components/ChatList'
import type { Message, ContextData } from '../components/types/ChatTypes'
import { sendArticleRequest } from '../api/sendPrompt'

// Initial intro messages and contexts (outside component)
import type { Role } from '../components/types/ChatTypes'

const INTRO_MESSAGES = [
  {
    id: 'm1',
    role: 'bot' as Role,
    text: 'Welcome to News Context — ask about any article or paste a link!',
  },
  {
    id: 'm2',
    role: 'user' as Role,
    text: 'Tell me about the recent climate summit',
  },
]

const Home: React.FC = () => {
  // Start with empty, set initial messages with real time after mount
  const [messages, setMessages] = useState<Message[]>([])
  // Set initial messages with current time after mount (client only)
  useEffect(() => {
    if (messages.length === 0) {
      const now = new Date()
      setMessages([
        { ...INTRO_MESSAGES[0], time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
        { ...INTRO_MESSAGES[1], time: new Date(now.getTime()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // contexts keyed by message id, can be empty
  const [contexts, setContexts] = useState<Record<string, ContextData>>({
    m1: {
      id: 'm1',
      title: 'News Context — Welcome',
      summary: 'This app helps you understand news articles by providing background, summary and key points.',
      author: 'News Context Team',
      date: '2025-10-18',
      source: 'Local',
      links: [],
      keyPoints: ['Context-aware answers', 'Article breakdowns', 'Responsive chat UI'],
    },
    m2: {
      id: 'm2',
      title: 'Climate Summit Overview',
      summary:
        'The climate summit brought world leaders together to discuss actionable commitments on emissions, finance and adaptation measures.',
      author: 'Global News Service',
      date: '2025-10-01',
      source: 'GNS',
      links: ['https://example.com/climate-summit'],
      keyPoints: ['New finance pledges', 'Projected emissions targets', 'Adaptation funding gap'],
    },
  })

  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(messages[messages.length - 1]?.id)
  const [input, setInput] = useState('')
  const [contextInput, setContextInput] = useState('')
  const [showContextMobile, setShowContextMobile] = useState(false)
  const [selectedContext, setSelectedContext] = useState<ContextData | null>(null)

  const messagesRef = useRef<HTMLDivElement | null>(null)

  // Scroll to bottom on new message
  useEffect(() => {
    const el = messagesRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  // Update selected message and context when messages or selection changes
  useEffect(() => {
    const lastId = messages[messages.length - 1]?.id ?? null
    setSelectedMessageId(lastId)
  }, [messages])

  useEffect(() => {
    if (selectedMessageId) {
      setSelectedContext(contexts[selectedMessageId] || null)
    } else {
      setSelectedContext(null)
    }
  }, [selectedMessageId, contexts])

  async function sendMessage() {
    if (!input.trim()) return
    const id = `m${Date.now()}`
    // Only generate time on client
    const time = typeof window !== 'undefined'
      ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      : ''
    const userMsg: Message = { id, role: 'user', text: input.trim(), time }
    setMessages((s) => [...s, userMsg])
    setInput('')

    // If contextInput is provided, add context for this message
    if (contextInput.trim()) {
      setContexts((prev) => ({
        ...prev,
        [id]: {
          id,
          title: contextInput.trim(),
          summary: 'User provided context.',
          author: 'User',
          date: new Date().toISOString().slice(0, 10),
          source: 'User',
          links: [],
          keyPoints: [],
        },
      }))
      setContextInput('')
    }

    // Use API for bot response
    try {
      const res = await sendArticleRequest(userMsg.text)
      const botId = `m${Date.now() + 1}`
      const botTime = typeof window !== 'undefined'
        ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : ''
      const botMsg: Message = {
        id: botId,
        role: 'bot',
        text: res.data.generated_text || 'No response from API.',
        time: botTime,
      }
      setMessages((s) => [...s, botMsg])
    } catch (err) {
      const botId = `m${Date.now() + 1}`
      const botTime = typeof window !== 'undefined'
        ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : ''
      const botMsg: Message = {
        id: botId,
        role: 'bot',
        text: 'Error: Could not get response from API.',
        time: botTime,
      }
      console.error(err)
      setMessages((s) => [...s, botMsg])
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: 'linear-gradient(180deg,#fffdf6,#fbf7ee)',
        backgroundImage:
          "radial-gradient(circle at 10% 10%, rgba(0,0,0,0.02) 0,#fff 12%), radial-gradient(circle at 90% 90%, rgba(0,0,0,0.015) 0,#fff 15%)",
      }}
    >
      {/* Header */}
      <Header title="News Context" subtitle="Context-aware news chat" />

      {/* Main */}
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left column (chat) */}
            <section className="md:w-[70%] w-full flex flex-col bg-white rounded-xl shadow-sm overflow-hidden" style={{ boxShadow: '0 6px 24px rgba(15,23,42,0.06)' }}>
              <div className="p-4 border-b">
                <Typography variant="h6" className="font-semibold">
                  Chat
                </Typography>
                <Typography variant="caption" className="text-gray-500">
                  Ask questions about an article or paste text/links.
                </Typography>
              </div>

              <ChatList messages={messages} onSelect={(msg) => setSelectedMessageId(msg.id)} messagesRef={messagesRef} />
              <ChatInput input={input} setInput={setInput} contextInput={contextInput} setContextInput={setContextInput} onSend={sendMessage} />
            </section>

            {/* Right column (context) */}
            <aside className="md:w-[30%] w-full flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <Typography variant="subtitle1" className="font-semibold">
                  Context
                </Typography>
                <div className="md:hidden">
                  <Button size="small" variant="outlined" onClick={() => setShowContextMobile((s) => !s)}>
                    {showContextMobile ? 'Hide' : 'Show'}
                  </Button>
                </div>
              </div>

              <div className={`flex-1 overflow-auto transition-all ${!showContextMobile ? 'max-h-[70vh]' : ''}`}>
                <ContextCard ctx={selectedContext} />
                {/* optional extras: list of related articles */}
                <div className="mt-4 space-y-2">
                  <Typography variant="subtitle2" className="text-gray-600">
                    Related articles
                  </Typography>
                  {[1, 2, 3].map((n) => (
                    <Card key={n} className="p-3 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => alert('Open related article')}>
                      <div className="flex items-center justify-between">
                        <div>
                          <Typography className="font-medium">Related article {n}</Typography>
                          <Typography className="text-xs text-gray-500">Source — 2025-09-{10 + n}</Typography>
                        </div>
                        <Button size="small" variant="outlined" onClick={(e) => { e.stopPropagation(); alert('Open link') }}>
                          Open
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
