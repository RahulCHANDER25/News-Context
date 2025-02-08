'use client'
import ChatBox from "@/components/ChatBox";
import { Done } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { FormEvent, useCallback, useState } from "react";
import { sendArticleRequest } from "@/api/sendPrompt"
import ChatTextArea from "./ChatTextArea";
import { ChatInfos } from "./types/ChatInfos";


export default function Prompt() {
  const [input, setInput] = useState("")
  const [chatInfos, setChatInfos] = useState<ChatInfos[]>([])

  const submitNewsChat = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setChatInfos((prev) => [...prev, { person: "me", text: input }])
    sendArticleRequest(input)
      .then((res) => {
        console.log(res.data, chatInfos.length)
        setChatInfos((prev) => [...prev, { person: "bot", text: res.data.generated_text }])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [chatInfos, input])

  return (
    <>
      <ChatTextArea chats={chatInfos}/>
      <Box
        component="form"
        className="flex justify-center items-center"
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
