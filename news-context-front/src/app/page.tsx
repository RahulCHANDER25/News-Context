import { AppBar, Box, Button, Card, CardActions, CardContent, Divider, IconButton, Tab, Tabs, Toolbar, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="center-container">
      <Card sx={{ minWidth: 275, flex: "center" }} className="card-style">
        <CardContent>
          <Typography variant="h2" gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Welcome to News Context !
          </Typography>
          <Typography variant="h5" component="div">
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
