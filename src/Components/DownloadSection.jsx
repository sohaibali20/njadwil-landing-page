import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2"; // MUI Grid v2
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple"; // Icon for App Store
import GoogleIcon from "@mui/icons-material/Google"; // Icon for Google Play
import { Icon } from "@iconify/react";
import "./../Fonts/IBM Plex Sans Arabic.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const DownloadSection = () => {

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, threshold: 0.1 });

  const fadeIn = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const slidefromLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
const slideFromTop = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 }, // Start smaller
  visible: {
    opacity: 1,
    scale: [0.8, 1.15, 1], // Subtle overshoot (1.15) and settle back to 1
    transition: {
      duration: 0.5, // Slightly longer duration for smoother transitions
      ease: [0.42, 0, 0.58, 1], // Smooth ease-in-out curve
      // times: [0, 0.6, 1], // Fine-tune the timing of each scale step
    },
  },
};


  return (
    <Box ref={containerRef} width={"100%"} sx={{ px: { sm: 18, md: 18 }, mb: 8, mt: 8 }}>
  <motion.div
    whileHover={{
      scale: 1.03, // Slightly scales up the box
      y: -5, // Moves it slightly upwards to give an elevated effect
      transition: { duration: 0.3, ease: "easeOut" }, // Smooth transition
    }}
  >
    <Box
      sx={{
        pt: 8,
        px: { xs: 2, md: 8, lg: 18 },
        bgcolor: "#53389E",
        color: "#fff",
        borderRadius: 4,
        boxShadow: 3, // Shadow effect for elevation
        overflow: "hidden", // Prevent content from spilling
      }}
    >
      <Grid container alignItems="center" spacing={4}>
        {/* Right Section: Text and Buttons */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideFromTop}
          >
            <Typography
              className="ibm-plex-sans-arabic"
              sx={{
                fontSize: "36px",
                fontWeight: "600",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              ابدأ تجربتك مجانا
            </Typography>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Typography
              className="ibm-plex-sans-arabic"
              sx={{
                fontSize: "20px",
                fontWeight: "400",
                mb: 4,
                color: "#E9D7FE",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              حمل التطبيق و استمتع بتجربة فريدة
            </Typography>
          </motion.div>

          {/* Download Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {/* App Store Button */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideFromRight}
            >
              <Button
                variant="outlined"
                href="#"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  border: "2px solid #fff",
                  borderRadius: "12px",
                  color: "#fff",
                  textTransform: "none",
                  width: { xs: "200px", sm: "169px" },
                  justifyContent: "flex-start",
                  fontWeight: "bold",
                  fontSize: "14px",
                  direction: "rtl",
                }}
              >
                <AppleIcon style={{ fontSize: "30px" }} />
                <Box>
                  <Typography
                    className="ibm-plex-sans-arabic"
                    variant="body2"
                    sx={{ fontSize: "10px" }}
                  >
                    Download on the
                  </Typography>
                  <Typography
                    className="ibm-plex-sans-arabic"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    App Store
                  </Typography>
                </Box>
              </Button>
            </motion.div>

            {/* Google Play Button */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slidefromLeft}
            >
              <Button
                variant="outlined"
                href="#"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  border: "2px solid #fff",
                  borderRadius: "12px",
                  color: "#fff",
                  textTransform: "none",
                  width: { xs: "200px", sm: "169px" },
                  justifyContent: "flex-start",
                  fontWeight: "bold",
                  fontSize: "14px",
                  direction: "rtl",
                }}
              >
                <Icon icon="mdi:google-play" style={{ fontSize: "30px" }} />
                <Box>
                  <Typography
                    className="ibm-plex-sans-arabic"
                    variant="body2"
                    sx={{ fontSize: "10px" }}
                  >
                    GET IT ON
                  </Typography>
                  <Typography
                    className="ibm-plex-sans-arabic"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    Google Play
                  </Typography>
                </Box>
              </Button>
            </motion.div>
          </Box>
        </Grid>
        {/* Left Section: Mobile Mockup */}
        <Grid
          item
          size={{ xs: 12, md: 6 }}
          position={"relative"}
          height={{ md: 230, lg: 330, xl: 370 }}
          overflow={"hidden"}
        >
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
                flexWrap: "wrap",
                background: "none",
              }}
            >
              <Box
                component="img"
                src="/src/assets/image.png"
                alt="Mobile Mockup"
                sx={{
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                  maxWidth: "auto",
                  height: "auto",
                  position: "relative",
                }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  </motion.div>
</Box>

  );
};

export default DownloadSection;
