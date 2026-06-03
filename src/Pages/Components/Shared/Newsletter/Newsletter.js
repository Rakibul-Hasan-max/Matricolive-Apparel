import SendIcon from "@mui/icons-material/Send";
import { Button, Container, InputBase, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const location = useLocation();
  if (
    location?.pathname?.includes("dashboard") ||
    location?.pathname?.includes("login") ||
    location?.pathname?.includes("register")
  ) {
    return null;
  }

  const handleSubscribe = () => {
    if (!email) return;
    alert("Subscription successful! Thank you for joining us.");
    setEmail("");
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        overflow: "hidden",
        textAlign: "center",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(211, 47, 47, 0.82)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        {/* Label */}
        <Box
          sx={{
            display: "inline-block",
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "#ffffff",
            px: 2.5,
            py: 1,
            borderRadius: "10px",
            fontSize: "0.78rem",
            fontWeight: 700,
            mb: 2,
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Newsletter
        </Box>

        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            color: "#ffffff",
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "2.8rem" },
            mb: 5,
            lineHeight: 1.2,
          }}
        >
          Subscribe To Get Updates
        </Typography>

        {/* Input + Button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderRadius: "50px",
            maxWidth: "620px",
            mx: "auto",
            px: 1,
            py: 0.8,
            boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          }}
        >
          <InputBase
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Mail"
            type="email"
            sx={{
              flex: 1,
              pl: 2.5,
              fontSize: "1rem",
              color: "#444444",
              "& input::placeholder": { color: "#999999" },
            }}
          />
          <Button
            onClick={handleSubscribe}
            variant="contained"
            endIcon={<SendIcon sx={{ fontSize: "16px" }} />}
            sx={{
              backgroundColor: "#d32f2f",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "0.9rem",
              px: 3.5,
              py: 1.5,
              borderRadius: "40px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              boxShadow: "none",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "#b71c1c",
                boxShadow: "none",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;