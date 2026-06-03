import { Button, Container, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import logo2 from "../../../../images/logo2.png";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  if (
    !location?.pathname?.includes("dashboard") &&
    !location?.pathname?.includes("login") &&
    !location?.pathname?.includes("register")
  )
    return (
      <Box
        className="footer"
        sx={{
          backgroundColor: "#d32f2f",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <Box>
                <Box>
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src={logo2}
                    alt="logo"
                  />
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#fff", textAlign: "left" }}
                  >
                    Connect with our social network
                  </Typography>
                  <Box sx={{ display: "flex", mt: 2, color: "#fff" }}>
                    <Link
                      href="https://www.facebook.com/matricolive"
                      color="inherit"
                      target="_blank"
                    >
                      <Box className="footer-icon">
                        <FaFacebookF />
                      </Box>
                    </Link>
                    <Link
                      href="https://www.instagram.com/matricolive/"
                      color="inherit"
                      target="_blank"
                    >
                      <Box className="footer-icon">
                        <FaInstagram />
                      </Box>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/matricolive/"
                      color="inherit"
                      target="_blank"
                    >
                      <Box className="footer-icon">
                        <FaLinkedin />
                      </Box>
                    </Link>
                    <Link
                      href="https://www.youtube.com/@matricolive"
                      color="inherit"
                      target="_blank"
                    >
                      <Box className="footer-icon">
                        <FaYoutube />
                      </Box>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} sx={{ color: "#fff" }}>
              <Typography variant="h6" sx={{ fontSize: 25, textAlign: "left" }}>
                About Us
              </Typography>
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="body2" sx={{ my: 3, fontSize: 12 }}>
                  Matricolive is a B2B and B2C e-commerce platform. Here we are
                  ready to provide you with the best quality product from our
                  own production and sources.
                </Typography>
                <Button
                  variant="contained"
                  href="/about"
                  sx={{
                    background: "#333333 !important",
                    borderRadius: "0 !important",
                    py: 1,
                    px: 3,
                  }}
                >
                  More About Us
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ color: "#fff" }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography variant="h6" sx={{ fontSize: 25 }}>
                      Quick Link
                    </Typography>
                    <ul style={{ marginTop: "24px" }}>
                      <Link
                        href="/home"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <li>
                          <Typography variant="caption">Home</Typography>
                        </li>
                      </Link>
                      <Link
                        href="/shop"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <li>
                          <Typography variant="caption">Shop</Typography>
                        </li>
                      </Link>
                      <Link
                        href="/privacy-policy"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <li>
                          <Typography variant="caption">
                            Privacy Policy
                          </Typography>
                        </li>
                      </Link>
                      <Link
                        href="/terms-conditions"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <li>
                          <Typography variant="caption">
                            Terms & Conditions
                          </Typography>
                        </li>
                      </Link>
                      <Link
                        href="/contact"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <li>
                          <Typography variant="caption">Contact Us</Typography>
                        </li>
                      </Link>
                    </ul>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography variant="h6" sx={{ fontSize: 25 }}>
                      Careers
                    </Typography>
                    <ul style={{ marginTop: "24px" }}>
                      <li>
                        <Link
                          href="https://forms.gle/Gk1PP1VYCWNUqbWq8"
                          style={{ textDecoration: "none", color: "#fff" }}
                          target="_blank"
                        >
                          <Typography variant="caption">
                            Content Writer
                          </Typography>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://forms.gle/Gk1PP1VYCWNUqbWq8"
                          style={{ textDecoration: "none", color: "#fff" }}
                          target="_blank"
                        >
                          <Typography variant="caption">
                            Video Editor
                          </Typography>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://forms.gle/Gk1PP1VYCWNUqbWq8"
                          style={{ textDecoration: "none", color: "#fff" }}
                          target="_blank"
                        >
                          <Typography variant="caption">
                            Digital Marketer
                          </Typography>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://forms.gle/Gk1PP1VYCWNUqbWq8"
                          style={{ textDecoration: "none", color: "#fff" }}
                          target="_blank"
                        >
                          <Typography variant="caption">
                            Graphic Designer
                          </Typography>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://forms.gle/Gk1PP1VYCWNUqbWq8"
                          style={{ textDecoration: "none", color: "#fff" }}
                          target="_blank"
                        >
                          <Typography variant="caption">IT Expert</Typography>
                        </Link>
                      </li>
                    </ul>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography variant="h6" sx={{ fontSize: 25 }}>
                      Our Service
                    </Typography>
                    <ul style={{ marginTop: "24px" }}>
                      <li>
                        <Typography variant="caption">E-Commerce</Typography>
                      </li>
                      <li>
                        <Typography variant="caption">Production</Typography>
                      </li>
                      <li>
                        <Typography variant="caption">Home Delivery</Typography>
                      </li>
                      <li>
                        <Typography variant="caption">
                          Company Outlet
                        </Typography>
                      </li>
                      <li>
                        <Link
                          href="https://devcalltech.com/"
                          style={{ textDecoration: "none", color: "#fff" }}
                          target="_blank"
                        >
                          <Typography variant="caption">IT Service</Typography>
                        </Link>
                      </li>
                    </ul>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ mt: 5, textAlign: "left" }}>
            <hr />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="caption" sx={{ color: "#fff" }}>
                {"Copyright © "} {new Date().getFullYear()} Matricolive, All
                rights reserved
                {"."}
              </Typography>
              <Typography variant="caption" sx={{ color: "#fff" }}>
                Powered By{" "}
                <Link
                  href="https://devcalltech.com/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Devcalltech
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    );
};

export default Footer;
