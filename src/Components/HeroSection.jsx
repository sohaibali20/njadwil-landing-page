import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { red } from "@mui/material/colors";
import Navbar from "./../Components/Navbar";
import "../index.css";
import videourl from "./../assets/video.mp4";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          background: "#F9F5FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Box
          sx={{ width: "80%", mt: 4, position: "fixed", top: 0, zIndex: 1000 }}
        >
          <Navbar />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 25,
          }}
        >
          <Box
            sx={{
              borderRadius: "16px",
              px: "10px",
              py: "5px",
              background: "#F9F5FF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #E9D7FE",
            }}
          >
            <Box
              sx={{
                borderRadius: "16px",
                px: "10px",
                background: "#F9F5FF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #E9D7FE",
              }}
            >
              <Typography
                className="ibm-plex-sans-arabic"
                color="#6941C6"
                sx={{ fontWeight: 500, fontSize: "14px" }}
              >
                ميزات جديدة
              </Typography>
            </Box>
          </Box>
          <Typography
            className="ibm-plex-sans-arabic"
            sx={{
              color: "#42307D",
              fontSize: "36px",
              fontWeight: 600,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            اكتشف أروع الفعاليات والعروض
            <span>الترفيهية في المملكة</span>
          </Typography>
          <Typography
            className="ibm-plex-sans-arabic"
            sx={{
              color: "#6941C6",
              fontSize: "20px",
              fontWeight: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              mt: 2,
            }}
          >
            استمتع بتجربة ترفيهية متكاملة، مع تذاكر الفعاليات المتنوعة في
            المملكة. تابع آخر الفعاليات
            <span>واحجز مكانك الآن</span>
          </Typography>
          <Box display={"flex"} gap={"8px"} py={1} mt={4}>
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
            <Button
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
              <PlayCircleOutlineOutlinedIcon
                sx={{ width: "24px", height: "24px", color: "#414651" }}
              />
              حمل التطبيق
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            // background:{sm:"white"},
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              top: { xs: -90, sm: -100, md: -125, lg: -150 },
              position: "relative",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="423"
                height="130"
                viewBox="0 0 423 130"
                fill="none"
              >
                <path
                  d="M0.777344 58.3522L467.444 0V71.1111L0.777344 129.463V58.3522Z"
                  fill="#D6BBFB"
                />
              </svg>
            </Box>
            <Box sx={{ top: -70, position: "relative" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="600"
                height="157"
                viewBox="0 0 600 157"
                fill="none"
              >
                <path
                  d="M0 85.7869L680 0.444336V71.5555L0 156.898V85.7869Z"
                  fill="#E9D7FE"
                />
              </svg>
            </Box>
            <Box sx={{ top: -196, position: "relative" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="131"
                viewBox="0 0 120 131"
                fill="none"
              >
                <path
                  d="M0 59.0055L466.667 0.65332V71.7644L0 130.117V59.0055Z"
                  fill="#F4EBFF"
                />
              </svg>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              top: { xs: -66, sm: -78, md: -80 },
              position: "relative",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="400"
                height="130"
                viewBox="0 0 387 130"
                fill="none"
              >
                <path
                  d="M-80 58.4625L386.667 0.110352V71.2215L-80 129.574V58.4625Z"
                  fill="#F4EBFF"
                />
              </svg>
            </Box>
            <Box
              sx={{
                top: { xs: -79, sm: -60, md: -54 },
                position: "relative",
                display: "flex",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="400"
                height="130"
                viewBox="0 0 218 130"
                fill="none"
              >
                <path
                  d="M-248.889 58.672L217.778 0.319824V71.4309L-248.889 129.783V58.672Z"
                  fill="#D6BBFB"
                />
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background:
            "linear-gradient(355deg,  rgba(255,255,255,1) 18%, rgba(249,245,255,1) 18%)",
          mt: { xs: -60, sm: -62 },
          mb: { xl: 10 },
          position: "relative",
          minHeight: "500px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            mx: "auto",
            maxWidth: { xs: "350px", sm: "600px", md: "900px", xl: "1150px" },
            overflow: "hidden",
            borderRadius: "16px",

            zIndex: 2,
          }}
        >
          <video
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "16px",
            }}
            src={videourl}
            muted
            playsInline // Allows autoplay within the webpage
            autoPlay
            loop
            preload="auto" // Preloads video for smoother autoplay
          >
            Your browser does not support the video tag.
          </video>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
