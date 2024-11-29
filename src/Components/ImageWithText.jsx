// import React from "react";
// import { Box, Container, Typography } from "@mui/material";
// import "./../Fonts/IBM Plex Sans Arabic.css";

// function ImageWithText() {
//   return (
//     <Box
//       sx={{
//         py: 8,
//         px: { xs: 2, sm: 18 },
//         direction: "rtl", // RTL for Arabic
//         textAlign: "center",
//         backgroundColor: "#fff", // Background color
//       }}
//     >
//       <Box
//         width={"100%"}
//         display={"flex"}
//         flexDirection={"column"}
//         justifyContent={"center"}
//         alignItems={"flex-end"}
//       >
//         {/* Section Heading */}
//         <Typography
//           className="ibm-plex-sans-arabic"
//           sx={{
//             color: "#6941C6", // Accent color for the heading
//             fontSize: "16px",
//             fontWeight: "600",
//             mb: 2,
//           }}
//         >
//           من نحن
//         </Typography>

//         {/* Main Title */}
//         <Typography
//           className="ibm-plex-sans-arabic"
//           variant="h4"
//           sx={{
//             fontWeight: "600",
//             fontSize: "36px",
//             color: "#181D27",
//             mb: 3,
//             textAlign: "left",
//           }}
//         >
//           أفضل تطبيق لبيع تذاكر الفعاليات
//         </Typography>

//         {/* Description */}
//         <Typography
//           className="ibm-plex-sans-arabic"
//           variant="body1"
//           sx={{
//             color: "#535862",
//             fontSize: "20px",
//             fontWeight: "400",
//             lineHeight: "21px",
//             textAlign: "left",
//             maxWidth: "1050px",
//             //   margin: "0 auto", // Center align
//             mb: 6,
//           }}
//         >
//           يقود تطبيق تحوّل الصناعة في مساحات تذاكر الأحداث الذكية حيث يمزج بين
//           التكنولوجيا المتطورة والتفاني الشديد لصناعة تجارب غير عادية. مهمتنا هي
//           تبسيط عمليات شراء التذاكر ورفع جودة حضور الأحداث من خلال الحلول الذكية
//         </Typography>
//       </Box>
//       {/* Image */}
//       <Box
//         sx={{
//           backgroundImage: `url('/Image.png')`,
//           width: "100%",
//           // maxWidth: "800px",
//           height: {
//             xs: "170px",
//             sm: "210px",
//             md: "312px",
//             lg: "516px",
//             xl: "522px",
//           },
//           alignSelf: "stretch",
//           backgroundSize: "cover",
//           boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)", // Subtle shadow
//           mt: 4,
//         }}
//       />
//     </Box>
//   );
// }

// export default ImageWithText;


import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./../Fonts/IBM Plex Sans Arabic.css";

function ImageWithText() {
  // Hook for intersection observer
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensures the animation runs every time the component becomes visible
    threshold: 0.25, // Trigger when 25% of the component is visible
  });
  

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    // hidden: { opacity: 0, y: -50 },
    // visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        px: { xs: 2, sm: 18 },
        direction: "rtl", // RTL for Arabic
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flex-end"}
      >
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
        >
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
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
        >
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
            أفضل تطبيق لبيع تذاكر الفعاليات
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
        >
          <Typography
            className="ibm-plex-sans-arabic"
            variant="body1"
            sx={{
              color: "#535862",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "21px",
              textAlign: "left",
              maxWidth: "1050px",
              mb: 6,
            }}
          >
            يقود تطبيق تحوّل الصناعة في مساحات تذاكر الأحداث الذكية حيث يمزج بين
            التكنولوجيا المتطورة والتفاني الشديد لصناعة تجارب غير عادية. مهمتنا هي
            تبسيط عمليات شراء التذاكر ورفع جودة حضور الأحداث من خلال الحلول الذكية
          </Typography>
        </motion.div>
      </Box>

      {/* Image */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <Box
          sx={{
            backgroundImage: `url('/Image.png')`,
            width: "100%",
            height: {
              xs: "170px",
              sm: "210px",
              md: "312px",
              lg: "516px",
              xl: "522px",
            },
            alignSelf: "stretch",
            backgroundSize: "cover",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
            mt: 4,
          }}
        />
      </motion.div>
    </Box>
  );
}

export default ImageWithText;


