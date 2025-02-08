import { Box, Divider, Stack, Typography } from "@mui/material";
import { ChatInfos } from "./types/ChatInfos";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SmartToyIcon from '@mui/icons-material/SmartToy';

interface IChatTextArea {
  chats: ChatInfos[],
}

export default function ChatTextArea({ chats }: IChatTextArea) {
  return (
    <Stack
      sx={{
        gap: 2,
        mb: 2,
        display: "flex",
        justifyItems: "center",
        maxHeight: "500px",
        minHeight: "500px",
        marginLeft: "15%",
        overflowY: "auto",
        padding: 2,
        border: "1px solid #ccc"
      }}
    >
      {chats.map((chat, index) => {
        const isMe = chat.person === "me"
        return (
          <Box
            key={`${chat.person}-${index}`}
            sx={{
              display: "flex",
              justifyContent: isMe ? "flex-end" : "flex-start",
              alignItems: "center",
              maxWidth: "100%",
              marginBottom: 2,
            }}
          >
            <Box
              sx={{
                minWidth: "150px",
                maxWidth: "100%",
                p: 2,
                border: 1,
                outlineColor: "green",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: isMe ? "#dcf8c6" : "#fff",
                borderRadius: "8px",
                marginRight: isMe ? "5%" : "",
                marginLeft: isMe ? "" : "5%",
                marginTop: "1%",
              }}>
              {isMe ? <AccountCircleIcon fontSize="large" /> : <SmartToyIcon fontSize="large" />}
              <Divider
                sx={{
                  marginTop: "2%",
                  marginBottom: "2%"
                }}
              />
              <Typography>
                {chat.text}
              </Typography>
            </Box>
          </Box>
        )
      })}
    </Stack>
  )
}
