import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2"; // Grid v2
import Typography from "@mui/material/Typography";
import "./../Fonts/IBM Plex Sans Arabic.css";
import AboutUs from "../assets/Aboutus.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@mui/material";


const Aboutus = () => {

    const [ref, inView] = useInView({
        triggerOnce: false, // Ensures the animation runs every time the component becomes visible
        threshold: 0.15, // Trigger when 25% of the component is visible
      });
    
      // Detect screen size
      const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    
      const slideFromRight = {
        hidden: { opacity: 0, x: 200 }, // Smaller translation on mobile
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
      };
      const slidefromLeft = {
        hidden: { opacity: 0, x: -200 }, // Smaller translation on mobile
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
      };

  return (
    <Box
    ref={ref}
      sx={{
        py: 6,
        pr: { xs: 2, sm: 18,md:18, lg: 0 },
        pl: { xs: 2, sm: 18, md: 0 },
        bgcolor: "#fff",
      }}
    >
      <Grid container spacing={10} alignItems="center">
        {/* Left Content (Images) */}
        <Grid item order={{xs:2, md:1}} size={{ xs: 12, md: 6 }}>
        <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slidefromLeft}
          >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              flexWrap: "wrap",
              background: "none",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={AboutUs}
              alt="Mobile Mockup"
              sx={{
                width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                maxWidth: "auto",
                height: "auto",
                // left: { sm: "none", md: -230, lg: -230 },
                position: "relative",
              }}
            />
          </Box>
          </motion.div>
        </Grid>

        {/* Right Content (Text and Features) */}
        <Grid item order={{xs:1, md:2}} size={{ xs: 12, md: 6 }}>
        <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideFromRight}
          >
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
          >
            {/* Section Heading */}
            <Typography
              className="ibm-plex-sans-arabic"
              sx={{
                color: "#6941C6",
                fontSize: "16px",
                fontWeight: "600",
                mb: 2,
              }}
            >
              من نحن
            </Typography>

            {/* Main Title */}
            <Typography
              className="ibm-plex-sans-arabic"
              variant="h4"
              sx={{
                fontWeight: "600",
                fontSize: "36px",
                color: "#181D27",
                mb: 3,
                textAlign: "left",
              }}
            >
              نحو مستقبل أكثر ذكاءً للفعاليات في المملكة
            </Typography>

            {/* Description */}
            <Typography
              className="ibm-plex-sans-arabic"
              variant="body1"
              sx={{
                color: "#535862",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "21px",
                textAlign: "left",
                maxWidth: "525px",
                mb: 6,
                lineHeight:"39px"

              }}
            >
              نحن شركة رائدة في مجال بيع التذاكر الذكية للفعاليات، حيث نجمع بين
              التكنولوجيا الحديثة والشغف بخلق تجارب استثنائية للمتفرجين
              والمشاركين في الفعاليات. نهدف إلى تسهيل عملية شراء التذاكر وتحسين
              جودة الحضور إلى الفعاليات بأسلوب أكثر ذكاءً
            </Typography>
            <Typography
              className="ibm-plex-sans-arabic"
              variant="body1"
              sx={{
                color: "#535862",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "21px",
                textAlign: "left",
                maxWidth: "525px",
                lineHeight:"39px"

              }}
            >
              تتميز خدماتنا بالذكاء والمرونة. نسعى دائمًا لتقديم تجارب فريدة
              تناسب جميع الاهتمامات والأذواق. سواء كنت تبحث عن تذكرة لحفل موسيقي
              رائع، مباراة رياضية ملحمية، عرض فني مذهل، أو حتى ورشة عمل تعليمية،
              فإننا هنا لنجعل العثور على التذاكر وحجزها مهمة سهلة وممتعة
            </Typography>
          </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Aboutus;
