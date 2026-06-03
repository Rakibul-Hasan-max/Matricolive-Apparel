import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  IconButton
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import WifiIcon from "@mui/icons-material/Wifi";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import whiteWatch from "../../images/white_smartwatch.png";
import blackWatch from "../../images/black_smartwatch.png";

const features = [
  {
    icon: <NotificationsActiveIcon sx={{ color: "#ffffff" }} />,
    title: "Notification Alert",
    desc: "Stay updated with real-time push alerts and messaging alerts instantly on your wrist."
  },
  {
    icon: <BluetoothIcon sx={{ color: "#ffffff" }} />,
    title: "Bluetooth Connection",
    desc: "Seamlessly pair with any Android or iOS smartphone using low-energy Bluetooth 5.0."
  },
  {
    icon: <WifiIcon sx={{ color: "#ffffff" }} />,
    title: "Support Wifi",
    desc: "Connect directly to local Wi-Fi networks for standalone cloud updates and app sync."
  },
  {
    icon: <GpsFixedIcon sx={{ color: "#ffffff" }} />,
    title: "GPS Tracking",
    desc: "Track your outdoor runs, cycle trips, and hikes with precise built-in GPS location."
  },
  {
    icon: <QuestionAnswerIcon sx={{ color: "#ffffff" }} />,
    title: "Live Chat Support",
    desc: "Access 24/7 client assistant and quick FAQs directly through the watch interface."
  },
  {
    icon: <CameraAltIcon sx={{ color: "#ffffff" }} />,
    title: "Remote Camera Control",
    desc: "Control your mobile camera shutter remotely to take perfect hands-free group photos."
  }
];

const products = [
  {
    id: 1,
    name: "Classic Chronograph Watch",
    price: "৳ 4,500",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80",
    rating: 4.8
  },
  {
    id: 2,
    name: "Elite Sport Smartwatch",
    price: "৳ 8,200",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=80",
    rating: 4.9
  },
  {
    id: 3,
    name: "Minimalist Leather Watch",
    price: "৳ 3,800",
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=80",
    rating: 4.7
  },
  {
    id: 4,
    name: "Rugged Outdoor Watch",
    price: "৳ 6,500",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=80",
    rating: 4.6
  }
];

const testimonials = [
  {
    text: "The watch is exceptionally premium. The battery life easily extends up to 10 days, and the notifications work flawlessly. Highly recommended!",
    name: "Almon Cuan",
    role: "Chief Executive",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    text: "Outstanding client service and beautiful design. The metallic black finish looks incredibly premium, and it fits perfectly on all outfits.",
    name: "Suze Lamil",
    role: "CEO of Lamil Co",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    text: "Very comfortable to wear for long hours. The fitness tracking data is highly accurate compared to other expensive smartwatches.",
    name: "John Doe",
    role: "Product Lead",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    text: "The display clarity is amazing even under bright sunlight. Very responsive UI and premium build. Will buy again for my family.",
    name: "Jane Smith",
    role: "Senior UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5
  }
];

const faqs = [
  {
    q: "How long does the battery last?",
    a: "Our smartwatches are equipped with optimized lithium-polymer batteries that last up to 10 days on a single charge with standard usage, and up to 30 days in standby power mode."
  },
  {
    q: "Is the smartwatch water-resistant?",
    a: "Yes, the watch features an IP68 dust and water resistance rating, allowing it to withstand sweat, rain, hand washing, and swimming up to 1.5 meters deep."
  },
  {
    q: "What devices are compatible with the watch?",
    a: "The watch is compatible with all Android devices running Android 6.0 or higher and iOS devices running iOS 9.0 or higher via our dedicated companion app."
  },
  {
    q: "Does it track heart rate and sleep?",
    a: "Yes, the smartwatch has advanced biometric sensors for 24/7 continuous heart rate monitoring, blood oxygen levels (SpO2), active sleep stage analysis, and daily step tracking."
  },
  {
    q: "Can I make calls directly from the watch?",
    a: "Yes, you can receive, reject, and place phone calls via Bluetooth calling directly when paired with your smartphone, utilizing the built-in speaker and microphone."
  },
  {
    q: "What is the warranty policy?",
    a: "We offer a 1-year official brand replacement warranty for any manufacturer defects or internal hardware issues from the date of purchase."
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % (testimonials.length - 1));
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + (testimonials.length - 1)) % (testimonials.length - 1)
    );
  };

  return (
    <Box sx={{ overflowX: "hidden", pt: "64px" }}>
      {/* 1. HERO SECTION */}
      <Box
        id="home"
        className="wave-container"
        sx={{
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          pt: { xs: 8, md: 12 },
          pb: { xs: 15, md: 20 }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Box
                sx={{
                  display: "inline-block",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "#ffffff",
                  px: 2,
                  py: 0.5,
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  mb: 3,
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}
              >
                Awesome Design & Quality
              </Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.2,
                  fontSize: { xs: "2.8rem", md: "3.8rem" },
                  mb: 3
                }}
              >
                Present your awesome product
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1.1rem",
                  mb: 4,
                  maxWidth: "500px",
                  mx: { xs: "auto", md: 0 }
                }}
              >
                Discover the ultimate smartwatch that matches your style and fulfills your daily connectivity needs with maximum precision and elegance.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#d32f2f",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 22px rgba(0,0,0,0.2)"
                  },
                  transition: "all 0.3s"
                }}
              >
                BUY WATCH
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src={whiteWatch}
                alt="White Smartwatch"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  width: { xs: "280px", md: "400px" },
                  filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.25))",
                  animation: "float 6s ease-in-out infinite",
                  "@keyframes float": {
                    "0%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-15px)" },
                    "100%": { transform: "translateY(0px)" }
                  }
                }}
              />
            </Grid>
          </Grid>
        </Container>

        <div className="wave-bottom">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: "100%", height: "100px" }}>
            <path
              className="shape-fill"
              d="M0,224L120,202.7C240,181,480,139,720,138.7C960,139,1200,181,1320,202.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </Box>

      {/* 2. ABOUT PRODUCT SECTION */}
      <Box id="about" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src={blackWatch}
                alt="Black Smartwatch"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  width: { xs: "280px", md: "400px" },
                  filter: "drop-shadow(0px 15px 25px rgba(0,0,0,0.15))"
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "inline-block",
                  backgroundColor: "rgba(211, 47, 47, 0.1)",
                  color: "#d32f2f",
                  px: 2,
                  py: 0.5,
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  mb: 2,
                  textTransform: "uppercase"
                }}
              >
                About Product
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: "#222222", mb: 3, lineHeight: 1.3 }}
              >
                Awesome digital watch can make your life easier
              </Typography>
              <Typography variant="body1" sx={{ color: "#666666", mb: 4, lineHeight: 1.7 }}>
                Stay organized, track your fitness, and manage your schedule effortlessly. This premium timepiece combines classical elegance with revolutionary smart technology to complement your active lifestyle.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  "Premium metallic chassis with hypoallergenic silicone band.",
                  "24/7 SpO2 levels and continuous automatic heart rate checking.",
                  "Up to 10 days of battery life with magnetic quick charging.",
                  "Smart phone alerts, music management, and offline alarms."
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: "#d32f2f", mt: 0.3 }} />
                    <Typography variant="body1" sx={{ color: "#444444" }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. FEATURES SECTION */}
      <Box id="features" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "rgba(211, 47, 47, 0.1)",
                color: "#d32f2f",
                px: 2,
                py: 0.5,
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: 600,
                mb: 2,
                textTransform: "uppercase"
              }}
            >
              Key Features
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: "#222222" }}>
              Explore What's Inside The Box
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: "15px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.03)",
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 25px rgba(0,0,0,0.08)"
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <Box
                      sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "#d32f2f",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 3,
                        boxShadow: "0 5px 15px rgba(211,47,47,0.3)"
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "#222222", mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666666", lineHeight: 1.6 }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. PRODUCTS SECTION */}
      <Box id="products" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "rgba(211, 47, 47, 0.1)",
                color: "#d32f2f",
                px: 2,
                py: 0.5,
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: 600,
                mb: 2,
                textTransform: "uppercase"
              }}
            >
              Shop Collection
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: "#222222" }}>
              Our Premium Smartwatch Products
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: "15px",
                    overflow: "hidden",
                    border: "1px solid #e0e0e0",
                    boxShadow: "none",
                    transition: "all 0.3s",
                    "&:hover": {
                      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                      "& img": {
                        transform: "scale(1.05)"
                      }
                    }
                  }}
                >
                  <Box sx={{ height: "220px", overflow: "hidden", position: "relative" }}>
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease"
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, color: "#222222", mb: 1, minHeight: "48px" }}
                    >
                      {product.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Rating value={product.rating} precision={0.1} readOnly size="small" />
                      <Typography variant="caption" sx={{ ml: 1, color: "#666666", fontWeight: 600 }}>
                        {product.rating}
                      </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ color: "#d32f2f", fontWeight: 800 }}>
                      {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. TESTIMONIALS SECTION */}
      <Box
        id="testimonial"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: "#d32f2f",
          color: "#ffffff"
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                px: 2,
                py: 0.5,
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: 600,
                mb: 2,
                textTransform: "uppercase"
              }}
            >
              Testimonials
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              Our Satisfied Customer Feedback
            </Typography>
          </Box>

          {/* Testimonial Cards Layout */}
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {/* Slide Index represents starting testimonial */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "15px",
                  backgroundColor: "#ffffff",
                  color: "#222222",
                  p: 3,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                }}
              >
                <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                  <Box>
                    <Rating value={testimonials[activeTestimonial].rating} readOnly sx={{ mb: 2 }} />
                    <Typography variant="body1" sx={{ fontStyle: "italic", mb: 3, color: "#555555", lineHeight: 1.6 }}>
                      "{testimonials[activeTestimonial].text}"
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      sx={{ width: "50px", height: "50px" }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {testimonials[activeTestimonial].name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#d32f2f", fontWeight: 600 }}>
                        {testimonials[activeTestimonial].role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Desktop second card */}
            <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "15px",
                  backgroundColor: "#ffffff",
                  color: "#222222",
                  p: 3,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                }}
              >
                <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                  <Box>
                    <Rating value={testimonials[(activeTestimonial + 1) % testimonials.length].rating} readOnly sx={{ mb: 2 }} />
                    <Typography variant="body1" sx={{ fontStyle: "italic", mb: 3, color: "#555555", lineHeight: 1.6 }}>
                      "{testimonials[(activeTestimonial + 1) % testimonials.length].text}"
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src={testimonials[(activeTestimonial + 1) % testimonials.length].avatar}
                      alt={testimonials[(activeTestimonial + 1) % testimonials.length].name}
                      sx={{ width: "50px", height: "50px" }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {testimonials[(activeTestimonial + 1) % testimonials.length].name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#d32f2f", fontWeight: 600 }}>
                        {testimonials[(activeTestimonial + 1) % testimonials.length].role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Slider Buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 5 }}>
            <IconButton
              onClick={handlePrevTestimonial}
              sx={{
                backgroundColor: "#ffffff",
                color: "#d32f2f",
                "&:hover": { backgroundColor: "#f5f5f5" }
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={handleNextTestimonial}
              sx={{
                backgroundColor: "#ffffff",
                color: "#d32f2f",
                "&:hover": { backgroundColor: "#f5f5f5" }
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* 6. FAQ SECTION */}
      <Box id="faq" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "rgba(211, 47, 47, 0.1)",
                color: "#d32f2f",
                px: 2,
                py: 0.5,
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: 600,
                mb: 2,
                textTransform: "uppercase"
              }}
            >
              FAQ
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: "#222222" }}>
              Frequently Asked Questions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              {faqs.slice(0, 3).map((item, index) => (
                <Accordion
                  key={index}
                  sx={{
                    mb: 2,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    "&:before": { display: "none" },
                    borderRadius: "10px !important",
                    overflow: "hidden",
                    border: "1px solid #e0e0e0"
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#d32f2f" }} />}>
                    <Typography sx={{ fontWeight: 700, color: "#222222" }}>{item.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "#666666", lineHeight: 1.6 }}>{item.a}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              {faqs.slice(3, 6).map((item, index) => (
                <Accordion
                  key={index}
                  sx={{
                    mb: 2,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    "&:before": { display: "none" },
                    borderRadius: "10px !important",
                    overflow: "hidden",
                    border: "1px solid #e0e0e0"
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#d32f2f" }} />}>
                    <Typography sx={{ fontWeight: 700, color: "#222222" }}>{item.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "#666666", lineHeight: 1.6 }}>{item.a}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 7. CONTACT US SECTION */}
      <Box id="contact" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "rgba(211, 47, 47, 0.1)",
                color: "#d32f2f",
                px: 2,
                py: 0.5,
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: 600,
                mb: 2,
                textTransform: "uppercase"
              }}
            >
              Contact Us
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: "#222222" }}>
              Get In Touch With Us
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  backgroundColor: "#ffffff",
                  p: 4,
                  borderRadius: "15px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.02)"
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Full Name" variant="outlined" required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Your Email" type="email" variant="outlined" required />
                  </Grid>
                </Grid>
                <TextField fullWidth label="Subject" variant="outlined" required />
                <TextField fullWidth label="Message" multiline rows={4} variant="outlined" required />
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Message sent successfully!");
                  }}
                  sx={{
                    backgroundColor: "#d32f2f",
                    color: "#ffffff",
                    fontWeight: "bold",
                    py: 1.5,
                    borderRadius: "8px",
                    "&:hover": { backgroundColor: "#b71c1c" }
                  }}
                >
                  SEND MESSAGE
                </Button>
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(211, 47, 47, 0.1)",
                      color: "#d32f2f",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <LocationOnIcon />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#222222" }}>
                      Office Address
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666666" }}>
                      88, Royal Park Road, New York, NY 10001
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(211, 47, 47, 0.1)",
                      color: "#d32f2f",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <MailIcon />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#222222" }}>
                      Email Support
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666666" }}>
                      support@matricolive.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(211, 47, 47, 0.1)",
                      color: "#d32f2f",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#222222" }}>
                      Call Helpline
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666666" }}>
                      +1 (234) 567-890, +1 (987) 654-321
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
