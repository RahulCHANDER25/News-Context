'use client'
import { AppBar, Box, Divider, IconButton, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { JSX, useCallback, useState } from "react";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useRouter } from "next/navigation";

export default function Navbar(): JSX.Element {
  const { push } = useRouter();
  const [tab, setTab] = useState("/")

  const handleChange = useCallback((path: string) => {
    push(path)
    setTab(path)
  }, [push, setTab])

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }} onClick={() => handleChange("/")}>
            <NewspaperIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            News
          </Typography>
          <Divider flexItem orientation="vertical"></Divider>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >

            <Tabs value={tab} textColor="inherit" onChange={(_: React.SyntheticEvent, path: string) => handleChange(path)}>
              <Tab label="Home" value="/" />
              <Tab label="News" value="/analyze/article" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

