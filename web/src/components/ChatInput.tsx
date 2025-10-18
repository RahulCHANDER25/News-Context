import React from 'react'
import { Button, TextField, InputAdornment } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

interface ChatInputProps {
  input: string
  setInput: (v: string) => void
  contextInput: string
  setContextInput: (v: string) => void
  onSend: () => void
}

const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, contextInput, setContextInput, onSend }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSend()
    }
  }

  return (
    <div className="p-4 border-t flex flex-col gap-2 bg-gray-50">
      <TextField
        label="Add context (optional)"
        variant="outlined"
        size="small"
        value={contextInput}
        onChange={e => setContextInput(e.target.value)}
        className="mb-1"
        fullWidth
      />
      <TextField
        label="Type your message"
        variant="outlined"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                color="primary"
                onClick={onSend}
                disabled={!input.trim()}
                sx={{ minWidth: 0, padding: 1 }}
              >
                <SendIcon />
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </div>
  )
}

export default ChatInput
