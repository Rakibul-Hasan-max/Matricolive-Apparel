import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import OurTeam from "../Components/OurTeam/OurTeam";

const About = () => {
  return (
    <Box sx={{ pt: "50px" }}>
      <img
        style={{ width: "100%", maxHeight: "400px" }}
        src="https://i.ibb.co/Y3kWSZv/pexels-fauxels-3183183.jpg"
        alt=""
      />
      <Box sx={{ my: 5 }}>
        <Box>
          <Typography variant="h6" sx={{ textAlign: "left", mx: "20%" }}>
            Welcome to Matricolive
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: "left", mx: "20%", my: 5, fontStyle: "italic" }}
          >
            "We connect millions of buyers and sellers around the world,
            empowering people & creating economic opportunity for all."
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "left", mx: "20%", my: 5, color: "#333333" }}
          >
            Within our markets, millions of people around the world connect,
            both online and offline, to make, sell and buy unique goods. We also
            offer a wide range of Seller Services and tools that help creative
            entrepreneurs start, manage and scale their businesses. Our mission
            is to reimagine commerce in ways that build a more fulfilling and
            lasting world, and we’re committed to using the power of business to
            strengthen communities and empower people.
          </Typography>
          <Box>
            <Typography
              variant="body2"
              sx={{ textAlign: "left", mx: "20%", color: "#333333" }}
            >
              Matricolive is a B2B and B2C e-commerce platform. Matricolive
              e-commerce is a company of Metricolive Group of Companies Limited.
              It was established in 2022.
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "left", mx: "20%", mt: 2, color: "#333333" }}
            >
              We are working to improve our sales experience and business
              quality. We strive to make global products available to customers
              very easily. We work for the benefit of the customers including
              improving their quality of life. Our only goal is to provide
              quality service to our customers.
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "left", mx: "20%", mt: 2, color: "#333333" }}
            >
              We have several other sister concerns that are working tirelessly
              to serve you. "Greenleaf Planner" is one of them. The company
              provides any kind of event management work. It also provides
              interior design and development services. Our other partner
              company is Epciln. It provides all kinds of tech-related
              services. You can get any kind of tech support here.
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "left", mx: "20%", mt: 2, color: "#333333" }}
            >
              Apart from this, Matricolive has its own clothing brand known as
              Matric Olive. Our main goal is to make your life easier.
            </Typography>
          </Box>
        </Box>
        {/* <Box sx={{ margin: "100px 0" }}>
          <Typography variant="h5" sx={{fontWeight: "500"}}>Meet Our Team</Typography>
          <OurTeam />
        </Box> */}
      </Box>
    </Box>
  );
};

export default About;
