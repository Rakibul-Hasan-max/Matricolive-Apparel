import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { Button, Grid, Input, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import Swal from "sweetalert2";

const Newsletter = () => {

  const location = useLocation();
  if (!location?.pathname?.includes("dashboard") && !location?.pathname?.includes("login") && !location?.pathname?.includes("register"))

  var handleClick = () => {
    alert('Your Subscription is Successful!')
  }

  return (
    <Box sx={{ backgroundColor: "#d32f2f", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: "80px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            p: "20px",
            alignItems: "center",
            gap: "10px",
          }}
          xs={12}
          md={6}
        >
          <MailOutlinedIcon sx={{ color: "white", fontSize: "43px" }} />
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h6" sx={{ color: "white", fontSize: "14px" }}>
              SUBSCRIBE TO OUR NEWSLETTER
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", fontSize: "12px" }}
            >
              Get all the latest information on Events, Sales and Offers.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            p: "20px",
            alignItems: "center",
            gap: "10px",
          }}
          xs={12}
          md={6}
        >
          <Input
            placeholder="Enter your email:"
            sx={{
              backgroundColor: "white",
              maxWidth: "100%",
              padding: "3px 10px",
              borderRadius: "3px",
            }}
          />
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{
              backgroundColor: "#333333",
              fontSize: "12px",
              padding: "8px 20px",
            }}
          >
            SUBSCRIBE
            <ArrowForwardIcon sx={{ fontSize: "15px", marginLeft: "5px" }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Newsletter;