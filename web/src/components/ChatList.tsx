import React from 'react'
import ChatMessage from './ChatMessage'
import type { Message } from './types/ChatTypes'

export interface ChatListProps {
  messages: Message[]
  onSelect: (msg: Message) => void
  messagesRef: React.RefObject<HTMLDivElement | null>
}

const ChatList: React.FC<ChatListProps> = ({ messages, onSelect, messagesRef }) => (
  <div ref={messagesRef as React.RefObject<HTMLDivElement>} className="flex-1 p-4 overflow-y-auto space-y-2 bg-[length:400px]" style={{ minHeight: 320 }}>
    {messages.map((m) => (
      <ChatMessage key={m.id} message={m} onSelect={onSelect} />
    ))}
  </div>
)

export default ChatList
