import { Container, Grid, Link, Typography } from "@mui/material";
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
    location?.pathname?.includes("dashboard") ||
    location?.pathname?.includes("login") ||
    location?.pathname?.includes("register")
  ) {
    return null;
  }

  return (
    <Box
      className="footer"
      sx={{
        backgroundColor: "#1a1a1a",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Logo & Social */}
          <Grid item xs={12} md={4}>
            <Box>
              <Box sx={{ maxWidth: "180px" }}>
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={logo2}
                  alt="Matricolive"
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  textAlign: "left",
                  mt: 3,
                  lineHeight: 1.7,
                  fontSize: "0.85rem",
                }}
              >
                Matricolive is a premium B2B and B2C e-commerce platform
                delivering high-quality smartwatches and accessories directly
                from our own production line.
              </Typography>
              <Box sx={{ display: "flex", mt: 3, gap: 1.5 }}>
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
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mb: 3, fontSize: "1rem" }}
              >
                Quick Links
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                {[
                  { label: "Home", href: "/" },
                  { label: "Shop", href: "/shop" },
                  { label: "About Us", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "color 0.2s",
                      "&:hover": { color: "#ffffff" },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Support */}
          <Grid item xs={6} sm={4} md={3}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mb: 3, fontSize: "1rem" }}
              >
                Support
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                {[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms & Conditions", href: "/terms-conditions" },
                  { label: "FAQ", href: "/#faq" },
                  { label: "Customer Service", href: "/customer-service" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "color 0.2s",
                      "&:hover": { color: "#ffffff" },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={4} md={3}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mb: 3, fontSize: "1rem" }}
              >
                Contact Info
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontSize: "0.7rem",
                    }}
                  >
                    Email
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}
                  >
                    support@matricolive.com
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontSize: "0.7rem",
                    }}
                  >
                    Phone
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}
                  >
                    +1 (234) 567-890
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontSize: "0.7rem",
                    }}
                  >
                    Address
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}
                  >
                    88, Royal Park Road, NY 10001
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            pb: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}
          >
            © {new Date().getFullYear()} Matricolive. All rights reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}
          >
            Powered by{" "}
            <Link
              href="https://epciln.com/"
              sx={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                "&:hover": { color: "#ffffff" },
              }}
              target="_blank"
            >
              Epciln
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
