'use client'
import { AppBar, Link, Button, Card, CardActions, CardContent, Divider, Grid2, IconButton, Tab, Tabs, Toolbar, Typography } from "@mui/material";

// Align the 2 part and then a do the redirection
// Then on the page of Article create a little input text to send it to the back
// ==> Then at the back => special prompt !

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-center items-center p-40 md:p-36">
        <Card sx={{ minWidth: 275, flex: "center" }} className="card-style">
          <CardContent>
            <Typography variant="h2" sx={{ color: 'text.secondary', fontSize: 20 }}>
              Welcome to News Context !
            </Typography>

            <Typography variant="h5" component="div">
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>The news chat you want !</Typography>
            <Typography variant="body2">
              Here you can learn anything you want about an article or a newspaper !
              <br />
              Especially the context !
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Grid2 container justifyContent={"space-evenly"} alignItems={"center"}>
        <div>
          News Description/Icon
          <br/>
          <Button variant="contained" color="success" LinkComponent={Link} href="/analyze/article">News</Button>
        </div>
        <div>
        Newspaper Description/Icon
          <br/>
          <Button variant="contained" color="success" LinkComponent={Link} href="/analyze/newspaper">Newspaper</Button>
        </div>
        <div>
        Journalist Description/Icon
          <br/>
          <Button variant="contained" color="success" LinkComponent={Link} href="/analyze/journalist">Journalist</Button>
        </div>
      </Grid2>
    </>
  )
}
