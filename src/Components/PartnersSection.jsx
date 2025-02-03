import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Grid v2
import { motion } from "framer-motion"; // Import Framer Motion
import "../index.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import partner1 from "../assets/partner1.svg";
import partner2 from "../assets/partner2.svg";
import partner3 from "../assets/partner3.svg";
import partner4 from "../assets/partner4.svg";
import partner5 from "../assets/partner5.svg";

const partners = [
  {
    id: 1,
    logo: partner1,
    width: "190px",
    height: "53px",
  },
  {
    id: 2,
    logo: partner2,
    width: "190px",
    height: "67.166px",
  },
  {
    id: 3,
    logo: partner3,
    width: "190px",
    height: "33.081px",
  },
  {
    id: 4,
    logo: partner4,
    width: "250px",
    height: "156px",
  },
  {
    id: 5,
    logo: partner5,
    width: "110px",
    height: "110px",
  },
];

function PartnersSection() {
  return (
    <Box
      id="partners"
      sx={{
        position: "relative",
        mt: { xs: -30, sm: -10, md: 20 },
        pt: "96px",
        backgroundColor: "#F7F7F7", // Light background
        textAlign: "center",
        direction: "rtl", // RTL for Arabic layout
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start hidden and below the viewport
        whileInView={{ opacity: 1, y: 0 }} // Trigger fade-in and move upward
        viewport={{ once: false, amount: 0.3 }} // Trigger every time the component is visible
        transition={{ duration: 0.9 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            width: "100%",
            px: { xs: 0, md: 18 },
          }}
        >
          <Typography
            order={{ xs: 2, md: 1 }}
            className="ibm-plex-sans-arabic"
            sx={{
              direction: "ltr",
              fontWeight: 400,
              color: "#303440",
              mb: 3,
              fontSize: "24px",
              maxWidth: "800px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            نؤمن بأن التعاون هو الأساس لبناء مستقبل مستدام. شركاؤنا ومستثمرونا
            هم القوة الدافعة لتحقيق رؤيتنا والمضي قدمًا في مهمتنا.
          </Typography>
          <Typography
            order={{ xs: 1, md: 2 }}
            className="ibm-plex-sans-arabic"
            sx={{
              fontWeight: 500,
              color: "black",
              mb: 3,
              fontSize: "32px",
            }}
          >
            شركاء النجاح
          </Typography>
        </Box>
      </motion.div>

      {/* Partners Logos */}

      {/* Wrapper Box for logos */}
      <Box
        sx={{
          backgroundColor: "rgba(244, 235, 255, 0.4)",
          borderRadius: "30px",
          p: 4,
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            animation: "scroll 1600s linear infinite", // Infinite scroll animation
          }}
        >
          {/* Repeat logos enough times to ensure seamless scrolling */}
          {[...Array(70)] // Repeat the partner array 3 times
            .fill(partners)
            .flat()
            .map((partner, index) => (
              <Box
                key={index}
                component="img"
                src={partner.logo}
                alt={`Icon logo for partner ${partner.id}`}
                sx={{
                  width: partner.width,
                  height: partner.height,
                  flexShrink: 0, // Prevent logos from shrinking
                  marginRight: "40px", // Add spacing between logos
                  marginLeft: "40px",
                }}
              />
            ))}
        </Box>

        {/* Keyframes for seamless animation */}
        <style>
          {`
      @keyframes scroll {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-100%);
        }
      }
    `}
        </style>
      </Box>
    </Box>
  );
}

export default PartnersSection;
