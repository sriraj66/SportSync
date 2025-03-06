import { AppBar, Toolbar, Typography, Button, Container, Paper, Box, Grid } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {  SportsCricketOutlined, SkipNextOutlined } from "@mui/icons-material";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const features = [
    { icon: <SportsCricketOutlined fontSize="large" color="primary" />, title: "Create new Stream", description: "Create an new Stream" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f4f6f8" }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: "white", boxShadow: 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* <img src="/logo.svg" alt="SportSync Logo" style={{ width: 40, height: 40, marginRight: 8 }} /> */}
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.main" }}>
              SportSync
            </Typography>
            <SkipNextOutlined fontSize="large" color="primary" />,
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography sx={{ color: "text.secondary", fontWeight: 500 }}>{user?.email}</Typography>
            <Button variant="outlined" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "text.primary", textAlign: "center", mb: 4 }}>
        Welcome to <Typography variant="small"sx={{ fontWeight: "bold", color: "primary.main" }} >{user?.email || "User"} !!</Typography>
      </Typography>

        {/* Feature Cards */}
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 2,
                  transition: "all 0.3s",
                  "&:hover": { boxShadow: 6, transform: "translateY(-5px)" },
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  {feature.icon}
                  <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;
