import React from 'react'
import { Typography } from '@mui/material'
import { Message } from './types/ChatTypes'

export default function ChatMessage({ message, onSelect }: { message: Message; onSelect?: (m: Message) => void }) {
  const isUser = message.role === 'user'
  return (
    <div
      onClick={() => onSelect?.(message)}
      className={`flex w-full mb-3 ${isUser ? 'justify-end' : 'justify-start'} cursor-pointer`}
      title={isUser ? 'You' : 'Bot'}
    >
      <div className={`max-w-[80%] ${isUser ? 'text-right' : 'text-left'}`}>
        <div
          className={`inline-block p-3 rounded-xl shadow-sm transition-transform transform hover:scale-[1.01] ${
            isUser
              ? 'bg-gradient-to-r from-[#081A51] to-[#0f4c81] text-white rounded-br-none'
              : 'bg-[#f3f3f3] text-gray-900 rounded-bl-none'
          }`}
        >
          <Typography variant="body2">{message.text}</Typography>
        </div>
        <div className={`text-xs text-gray-400 mt-1 ${isUser ? 'mr-2' : 'ml-2'}`}>{message.time}</div>
      </div>
    </div>
  )
}
