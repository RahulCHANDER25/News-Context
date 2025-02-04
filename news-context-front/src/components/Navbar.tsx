'use client'
import { AppBar, Box, Divider, IconButton, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { JSX } from "react";
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Navbar = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
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

          <Tabs textColor="inherit">
            <Tab label="News" value="News"/>
            <Tab label="Newspaper" value="Newspaper" />
            <Tab label="Journalist" value="Journalist" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
