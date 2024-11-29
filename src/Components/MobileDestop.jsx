// import React from "react";
// import { motion } from "framer-motion"; // Import motion for animations
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid2"; // Grid v2
// import Typography from "@mui/material/Typography";
// import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
// import WallpaperOutlinedIcon from "@mui/icons-material/WallpaperOutlined";
// import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
// import "./../Fonts/IBM Plex Sans Arabic.css";

// // Animations
// const slideFromTop = {
//   initial: { opacity: 0, y: -50 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.8, ease: "easeOut" },
// };

// const slideFromLeftPop = {
//   initial: { opacity: 0, x: -100, scale: 0.8 },
//   animate: { opacity: 1, x: 0, scale: 1 },
//   transition: { duration: 0.8, ease: "easeOut" },
// };

// const slideFromRightPop = {
//   initial: { opacity: 0, x: 100, scale: 0.8 },
//   animate: { opacity: 1, x: 0, scale: 1 },
//   transition: { duration: 0.8, ease: "easeOut" },
// };

// const FeaturesSection = () => {
//   return (
//     <Box
//       sx={{
//         py: 6,
//         pl: { xs: 2, sm: 18, md: 18 },
//         pr: { xs: 2, sm: 18, md: 0 },
//         bgcolor: "#fff",
//       }}
//     >
//       <Grid container spacing={4} alignItems="center">
//         {/* Right Content (Text and Features) */}
//         <Grid item size={{ xs: 12, md: 6 }}>
//           {/* Heading */}

//           <Typography
//             className="ibm-plex-sans-arabic"
//             sx={{
//               fontSize: "16px",
//               color: "#6941C6", // Accent color for the heading
//               fontWeight: "600",
//               mb: 2,
//             }}
//           >
//             الميزات
//           </Typography>

//           <Typography
//             className="ibm-plex-sans-arabic"
//             sx={{
//               color: "#181D27",
//               fontWeight: 600,
//               fontSize: "36px",
//               mb: 2,
//               textAlign: { xs: "left", md: "left" },
//             }}
//           >
//             أفضل تطبيق لبيع تذاكر الفعاليات
//           </Typography>
//           <Typography
//             className="ibm-plex-sans-arabic"
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               mb: 4,
//               color: "#22262F",
//               fontSize: "20px",
//               fontWeight: 400,
//               textAlign: { xs: "left", md: "left" },
//               maxWidth: "850px",
//             }}
//           >
//             يقود تطبيق تحويل الصناعة في مساحات تذاكر الأحداث الذكية حيث يمزج بين
//             التكنولوجيا المتطورة والتفاني لصناعة تجارب غير عادية.
//             <span style={{ marginTop: "10px" }}>
//               مهمتنا هي تبسيط عمليات شراء التذاكر ورفع جودة حضور الأحداث من خلال
//               الحلول الذكية.
//             </span>
//           </Typography>

//           {/* Feature List */}
//           <Grid container spacing={10}>
//             {/* Feature 1 */}
//             <Grid
//               item
//               size={{ xs: 12, sm: 6, md: 6 }}
//               sx={{ display: { md: "flex" } }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: {
//                     xs: "center",
//                     sm: "flex-start",
//                     md: "flex-start",
//                     lg: "flex-start",
//                     xl: "flex-start",
//                   },
//                   // justifyContent: "center",
//                   gap: 2,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: "20%",
//                     width: "40px",
//                     height: "40px",
//                     boxShadow:
//                       "0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(10, 13, 18, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(10, 13, 18, 0.05)) inset",
//                     filter:
//                       "drop-shadow(0px 1px 2px var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05)))",
//                     fill: "var(--Colors-Background-bg-primary, #FFF)",
//                   }}
//                 >
//                   <AdminPanelSettingsIcon
//                     sx={{ fontSize: 30, color: "black" }}
//                   />
//                 </Box>
//                 <Box>
//                   <Typography
//                     className="ibm-plex-sans-arabic"
//                     sx={{
//                       fontWeight: 600,
//                       textAlign: { xs: "center", sm: "left" },
//                       color: "#181D27",
//                       fontSize: "20px",
//                     }}
//                   >
//                     السرية
//                   </Typography>
//                   <Typography
//                     className="ibm-plex-sans-arabic"
//                     sx={{
//                       color: "#626262",
//                       maxWidth: "300px",
//                       fontWeight: 400,
//                       fontSize: "16px",
//                     }}
//                   >
//                     هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
//                     توليد هذا النص من مولد النص العربى
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>

//             {/* Feature 2 */}
//             <Grid
//               item
//               size={{ xs: 12, sm: 6, md: 6 }}
//               sx={{ display: { md: "flex" } }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: {
//                     xs: "center",
//                     sm: "flex-start",
//                     md: "flex-start",
//                     lg: "flex-start",
//                     xl: "flex-start",
//                   },
//                   gap: 2,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: "20%",
//                     width: "40px",
//                     height: "40px",
//                     boxShadow:
//                       "0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(10, 13, 18, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(10, 13, 18, 0.05)) inset",
//                     filter:
//                       "drop-shadow(0px 1px 2px var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05)))",
//                     fill: "var(--Colors-Background-bg-primary, #FFF)",
//                   }}
//                 >
//                   <ShieldOutlinedIcon sx={{ fontSize: 30, color: "black" }} />
//                 </Box>
//                 <Box>
//                   <Typography
//                     className="ibm-plex-sans-arabic"
//                     sx={{
//                       fontWeight: 600,
//                       textAlign: { xs: "center", sm: "left" },
//                       color: "#181D27",
//                       fontSize: "20px",
//                     }}
//                   >
//                     الامان
//                   </Typography>
//                   <Typography
//                     className="ibm-plex-sans-arabic"
//                     sx={{
//                       color: "#626262",
//                       maxWidth: "300px",
//                       fontWeight: 400,
//                       fontSize: "16px",
//                     }}
//                   >
//                     هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
//                     توليد هذا النص من مولد النص العربى
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>

//             {/* Feature 4 */}
//             <Grid
//               item
//               size={{ xs: 12, sm: 6 }}
//               sx={{ display: { md: "flex" } }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: {
//                     xs: "center",
//                     sm: "flex-start",
//                     md: "flex-start",
//                     lg: "flex-start",
//                     xl: "flex-start",
//                   },
//                   gap: 2,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: "20%",
//                     width: "40px",
//                     height: "40px",
//                     boxShadow:
//                       "0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(10, 13, 18, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(10, 13, 18, 0.05)) inset",
//                     filter:
//                       "drop-shadow(0px 1px 2px var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05)))",
//                     fill: "var(--Colors-Background-bg-primary, #FFF)",
//                   }}
//                 >
//                   <WallpaperOutlinedIcon
//                     sx={{ fontSize: 30, color: "black" }}
//                   />
//                 </Box>
//                 <Box>
//                   <Typography
//                     className="ibm-plex-sans-arabic"
//                     sx={{
//                       fontWeight: 600,
//                       textAlign: { xs: "center", sm: "left" },
//                       color: "#181D27",
//                       fontSize: "20px",
//                     }}
//                   >
//                     تذاكر nft
//                   </Typography>
//                   <Typography
//                     className="ibm-plex-sans-arabic"
//                     sx={{
//                       color: "#626262",
//                       maxWidth: "300px",
//                       fontWeight: 400,
//                       fontSize: "16px",
//                     }}
//                   >
//                     هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
//                     توليد هذا النص من مولد النص العربى
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>

//             {/* Feature 3 */}
//             <Grid
//               item
//               size={{ xs: 12, sm: 6 }}
//               sx={{ display: { md: "flex" } }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: {
//                     xs: "center",
//                     sm: "flex-start",
//                     md: "flex-start",
//                     lg: "flex-start",
//                     xl: "flex-start",
//                   },
//                   gap: 2,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: "20%",
//                     width: "40px",
//                     height: "40px",
//                     boxShadow:
//                       "0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(10, 13, 18, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(10, 13, 18, 0.05)) inset",
//                     filter:
//                       "drop-shadow(0px 1px 2px var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05)))",
//                     fill: "var(--Colors-Background-bg-primary, #FFF)",
//                   }}
//                 >
//                   <ElectricBoltIcon
//                     sx={{
//                       fontSize: 30,
//                       color: "white",
//                       stroke: "black",
//                       strokeWidth: 1,
//                     }}
//                   />
//                 </Box>
//                 <Box>
//                   <Typography
//                     className="ibm-plex-sans-arabic"
//                     sx={{
//                       fontWeight: 600,
//                       textAlign: { xs: "center", sm: "left" },
//                       color: "#181D27",
//                       fontSize: "20px",
//                     }}
//                   >
//                     السرعة و الكفاءة
//                   </Typography>
//                   <Typography
//                     className="ibm-plex-sans-arabic"
//                     sx={{
//                       color: "#626262",
//                       maxWidth: "300px",
//                       fontWeight: 400,
//                       fontSize: "16px",
//                     }}
//                   >
//                     هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
//                     توليد هذا النص من مولد النص العربى
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Grid>

//         {/* Left Content (Images) */}
//         <Grid item size={{ xs: 12, md: 6 }}>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               gap: 3,
//               flexWrap: "wrap",
//               background: "none",
//               overflow: "hidden",
//             }}
//           >
//             <Box
//               component="img"
//               src="/src/assets/image1.png"
//               alt="Mobile Mockup"
//               sx={{
//                 width: { xs: "100%", sm: "100%", md: "200%", lg: "130%" },
//                 maxWidth: "auto",
//                 height: "auto",
//                 right: { sm: "none", md: -230, lg: -230 },
//                 position: "relative",
//               }}
//             />
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default FeaturesSection;



import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2"; // Grid v2
import Typography from "@mui/material/Typography";
import SecurityIcon from "@mui/icons-material/Security"; // Icon for "Security"
import SpeedIcon from "@mui/icons-material/Speed"; // Icon for "Speed"
import VerifiedIcon from "@mui/icons-material/Verified"; // Icon for "Trust"
import TokenIcon from "@mui/icons-material/Token"; // Icon for "NFT Tickets"
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import WallpaperOutlinedIcon from "@mui/icons-material/WallpaperOutlined";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useRef } from "react";
import "./../Fonts/IBM Plex Sans Arabic.css";
import { Slide } from "react-awesome-reveal";
import { useMediaQuery } from "@mui/material";

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensures the animation runs every time the component becomes visible
    threshold: 0.15, // Trigger when 25% of the component is visible
  });

  // Detect screen size
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const fadeIn = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x:  200 }, // Smaller translation on mobile
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const slidefromLeft = {
    hidden: { opacity: 0, x: -200 }, // Smaller translation on mobile
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
const slideFromTop = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
  return (
    <Box
      ref={ref}
      sx={{
        py: 6,
        pl: { xs: 2, sm: 18, md: 18 },
        pr: { xs: 2, sm: 18, md: 0 },
        bgcolor: "#fff",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Right Content (Text and Features) */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideFromTop}
          >
            {/* Heading */}
            <Typography
              className="ibm-plex-sans-arabic"
              sx={{
                fontSize: "16px",
                color: "#6941C6", // Accent color for the heading
                fontWeight: "600",
                mb: 2,
              }}
            >
              الميزات
            </Typography>

            <Typography
              className="ibm-plex-sans-arabic"
              sx={{
                color: "#181D27",
                fontWeight: 600,
                fontSize: "36px",
                mb: 2,
                textAlign: { xs: "left", md: "left" },
              }}
            >
              أفضل تطبيق لبيع تذاكر الفعاليات
            </Typography>
            <Typography
              className="ibm-plex-sans-arabic"
              sx={{
                display: "flex",
                flexDirection: "column",
                mb: 4,
                color: "#22262F",
                fontSize: "20px",
                fontWeight: 400,
                textAlign: { xs: "left", md: "left" },
                maxWidth: "850px",
              }}
            >
              يقود تطبيق تحويل الصناعة في مساحات تذاكر الأحداث الذكية حيث يمزج بين
              التكنولوجيا المتطورة والتفاني لصناعة تجارب غير عادية.
              <span style={{ marginTop: "10px" }}>
                مهمتنا هي تبسيط عمليات شراء التذاكر ورفع جودة حضور الأحداث من
                خلال الحلول الذكية.
              </span>
            </Typography>
          </motion.div>

          {/* Feature List */}
          <Grid container spacing={10}>
            {[
              {
                Icon: AdminPanelSettingsIcon,
                title: "السرية",
                description:
                  "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
              },
              {
                Icon: ShieldOutlinedIcon,
                title: "الامان",
                description:
                  "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
              },
              {
                Icon: WallpaperOutlinedIcon,
                title: "تذاكر nft",
                description:
                  "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
              },
              {
                Icon: ElectricBoltIcon,
                title: "السرعة و الكفاءة",
                description:
                  "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
              },
            ].map((feature, index) => (
              <Grid
                key={index}
                item
                size={{ xs: 12, sm: 6 }}
                sx={{ display: { md: "flex" } }}
              >
                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants= {isMobile ? slideFromTop : slidefromLeft}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: {
                        xs: "center",
                        sm: "flex-start",
                        md: "flex-start",
                        lg: "flex-start",
                        xl: "flex-start",
                      },
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "20%",
                        width: "40px",
                        height: "40px",
                        boxShadow:
                          "0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset, 0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset",
                        filter:
                          "drop-shadow(0px 1px 2px rgba(10, 13, 18, 0.05))",
                        fill: "#FFF",
                      }}
                    >
                      <feature.Icon sx={{ fontSize: 30, color: "black" }} />
                    </Box>
                    <Box>
                      <Typography
                        className="ibm-plex-sans-arabic"
                        sx={{
                          fontWeight: 600,
                          textAlign: { xs: "center", sm: "left" },
                          color: "#181D27",
                          fontSize: "20px",
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        className="ibm-plex-sans-arabic"
                        sx={{
                          color: "#626262",
                          maxWidth: "300px",
                          fontWeight: 400,
                          fontSize: "16px",
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Left Content (Images) */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={isMobile ? slideFromTop : slideFromRight}
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
                src="/src/assets/image1.png"
                alt="Mobile Mockup"
                sx={{
                  width: { xs: "100%", sm: "100%", md: "200%", lg: "130%" },
                  maxWidth: "auto",
                  height: "auto",
                  right: { sm: "none", md: -230, lg: -230 },
                  position: "relative",
                }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
