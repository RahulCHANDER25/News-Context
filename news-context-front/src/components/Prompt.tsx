'use client'
import ChatBox from "@/components/ChatBox";
import { Done } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { sendArticleRequest } from "@/api/sendPrompt"

interface ChatInfos {
  person: "me" | "bot",
  text: string
}

export default function Prompt() {
  const [input, setInput] = useState("")
  const [chatInfos, setChatInfos] = useState<ChatInfos[]>([])

  const submitNewsChat = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setChatInfos([...chatInfos, { person: "me", text: input }])
    sendArticleRequest(input)
      .then((datas) => {
        setChatInfos([...chatInfos, { person: "bot", text: datas.generated_text }])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>  
      {/* {chatInfos.map((infos) => { // Later on display the whole prompt !
        return <Box key={`${infos.person}-${infos.text}`}><Typography>{infos.person}-{infos.text}</Typography></Box>
      })} */}
      <Box
        component="form"
        className="flex justify-center items-center min-h-screen"
        onSubmit={submitNewsChat}
      >
        <ChatBox setInput={(newInput: string) => { setInput(newInput) }} />
        <IconButton color="secondary" type="submit">
          <Done />
        </IconButton>
      </Box>
    </>
  )
}
