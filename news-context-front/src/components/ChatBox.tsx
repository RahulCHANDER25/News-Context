'use client'
import { Chat } from "@mui/icons-material";
import { JSX } from "react";
import TextField from '@mui/material/TextField';

interface ChatBoxInput {
  setInput: (newInput: string) => void
}

const ChatBox = ( { setInput }: ChatBoxInput): JSX.Element => {
  return (
    <>
      <Chat sx={{ fontSize: 128 }} ></Chat>
      <TextField
        required
        variant="outlined"
        label="Give us some article to analyze !"
        sx={{
          width: "800px"
        }}
        onChange={(e) => { setInput(e.currentTarget.value) }}
      />
    </>
  )
}

export default ChatBox