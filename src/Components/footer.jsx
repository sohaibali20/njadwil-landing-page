import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import { Icon } from "@iconify/react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Divider from "@mui/material/Divider";
import "../index.css";
import logo from "../assets/njadwil-footer-logo.svg";

function Footer() {
  const pages = [
    "الرئيسية",
    "من نحن",
    "الميزات",
    "شركائنا",
    "انضم الينا كصاحب فعالية",
    "تواصل معنا",
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#53389E", // Footer background color
        color: "#fff",
        py: 6,
        px: { xs: 0, md: 16 },
        direction: "rtl", // RTL layout
      }}
    >
      <Grid container display={"flex"} flexDirection={"column"} spacing={4}>
        <Grid item size={{ xs: 12 }} mb={{ xs: 4, md: 0 }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              className="ibm-plex-sans-arabic"
              sx={{ fontWeight: 600, mb: 2, fontSize: "30px", color: "#fff" }}
            >
              تمتع بتجربة فريدة
            </Typography>
            <Typography
              className="ibm-plex-sans-arabic"
              sx={{
                mb: 4,
                color: "#E9D7FE",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              ابدأ تجربتك معنا و استمتع بأفضل الفعاليات
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                endIcon={<PlayCircleOutlineOutlinedIcon />}
                className="ibm-plex-sans-arabic"
                variant="outlined"
                sx={{
                  color: "#414651",
                  gap: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  border:
                    "1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #D5D7DA)",
                  background:
                    "var(--Component-colors-Components-Buttons-Secondary-button-secondary-bg, #FFF)",
                  boxShadow:
                    "0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(10, 13, 18, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(10, 13, 18, 0.05)) inset, 0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05))",
                  fontSize: "18px",
                  fontWeight: "600",
                  py: "12px",
                }}
              >
                حمل التطبيق
              </Button>
              <Button
                className="ibm-plex-sans-arabic"
                variant="contained"
                sx={{
                  background:
                    "var(--Component-colors-Components-Buttons-Primary-button-primary-bg, #7F56D9)",
                  color: "white",
                  border: "2px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "var(--radius-lg, 10px)",
                  fontSize: "18px",
                  fontWeight: "600",
                  py: "12px",
                }}
              >
                تسجيل الدخول
              </Button>
            </Box>
          </Box>
        </Grid>

        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={{ xs: 5, md: 0 }}
          sx={{ borderTop: "1px solid #7F56D9", py: 5 }}
          width={"100%"}
        >
          <Grid
            item
            size={{ xs: 12, sm: 3, md: 3 }} // Adjust column size on medium and larger screens
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" }, // Align center on small screens and right on larger screens
              justifyContent: "center",
              gap: 2, // Spacing between elements
              // mt:5
            }}
          >
            {/* Section Title */}
            <Box
              display={"flex"}
              alignItems={{ xs: "center", md: "flex-end" }}
              gap={1}
              flexDirection={"column"}
            >
              <Typography
                className="ibm-plex-sans-arabic"
                sx={{
                  textAlign: { xs: "center", md: "left" }, // Text alignment for responsiveness
                  fontWeight: 500,
                  color: "#fff",
                  fontSize: "16px",
                  // marginBottom: 2,
                }}
              >
                احصل على التطبيق
              </Typography>
              {/* App Store Button */}
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
                  width: { xs: "200px", sm: "169px" }, // Button width adjusts for smaller screens
                  justifyContent: "flex-start",
                  // padding: "10px 16px",
                  fontWeight: "bold",
                  fontSize: "14px",
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
              {/* Google Play Button */}
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
                  width: { xs: "200px", sm: "169px" }, // Button width adjusts for smaller screens
                  justifyContent: "flex-start",
                  // padding: "5px 8px",
                  fontWeight: "bold",
                  fontSize: "14px",
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
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 10, md: 7 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-end" },
              }}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={2}
                justifyContent={"center"}
                mb={2}
              >
                <Typography
                  className="ibm-plex-sans-arabic"
                  sx={{ fontWeight: 700, fontSize: "26px" }}
                >
                  نجدول
                </Typography>
                <img src={logo} alt="Logo" width={"41px"} height={"41.191px"} />
              </Box>
              {/* <Typography
                className="ibm-plex-sans-arabic"
                sx={{
                  fontWeight: 400,
                  mb: 2,
                  fontSize: "16px",
                  maxWidth: "900px",
                  direction: "ltr",
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى
              </Typography> */}
              <Box
                width={"100%"}
                display={"flex"}
                gap={{ xs: 0, md: 2, lg: 2 }}
                px={{ xs: 2, md: 0 }}
                justifyContent={{ xs: "center", md: "flex-start" }}
                textAlign={"left"}
              >
                {pages.map((page) => (
                  <Grid
                    item
                    size={{ xs: 6 }}
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-end" },
                    }}
                  >
                    <Button
                      className="ibm-plex-sans-arabic"
                      key={page}
                      sx={{
                        my: 2,
                        color: "#E9D7FE",
                        // display: "block",
                        fontSize: { xs: "12px", md: "16px" },
                        fontWeight: 600,
                        textAlign: "left",
                        padding: { xs: "10px", md: 0 },
                      }}
                    >
                      {page}
                    </Button>
                  </Grid>
                ))}
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
      {/* Bottom Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #7F56D9",
          pt: 2,
          px: { xs: 2, md: 0 },
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href="https://twitter.com/Njadwil" color="inherit">
            <XIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/company/njadwil/"
            color="inherit"
          >
            <LinkedInIcon />
          </Link>
          <Link href="#" color="inherit">
            <FacebookRoundedIcon />
          </Link>
        </Box>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © 2024 Njadwil. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
