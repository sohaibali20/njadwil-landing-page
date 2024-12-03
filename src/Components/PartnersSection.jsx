// import React from "react";
// import { Box, Container, Typography } from "@mui/material";
// import Grid from '@mui/material/Grid2';
// import "./../Fonts/IBM Plex Sans Arabic.css";

// const partners = [
//   { id: 1, logoname: "src/assets/Logotext.svg", logo: "src/assets/Logomark.svg" },
//   { id: 2, logoname: "src/assets/Logotext (1).svg", logo: "src/assets/Logomark (1).svg" },
//   { id: 3, logoname: "src/assets/Logotext (2).svg", logo: "src/assets/Logomark (2).svg" },
//   { id: 4, logoname: "src/assets/Logotext (3).svg", logo: "src/assets/Logomark (3).svg" },
//   { id: 5, logoname: "src/assets/Logotext (4).svg", logo: "src/assets/Logomark (4).svg" },
//   { id: 6, logoname: "src/assets/Logotext (5).svg", logo: "src/assets/Logomark (5).svg" },
// ];

// function PartnersSection() {
//   return (
//     <Box
//       sx={{
//         position:"relative",
//         mt:{xs:-30, sm:-10, md:0},
//         py: "96px",
//         backgroundColor: "#F7F7F7", // Light background
//         textAlign: "center",
//         direction: "rtl", // RTL for Arabic layout
//       }}
//     >
//       {/* <Container maxWidth="xl" disableGutters> */}
//       {/* Title */}
//       <Typography className="ibm-plex-sans-arabic"
//         // variant="h6"
//         sx={{
//           fontWeight: 500,
//           color: "#535862",
//           mb: 3,
//           fontSize: "16px",
//         }}
//       >
//         شركاؤنا الرسميين
//       </Typography>

//       {/* Partners Logos */}
//       <Grid
//         container
//         spacing={4}
//         justifyContent="center"
//         alignItems="center"
//       >
//         {partners.map((partner) => (
//           <Grid item key={partner.id} xs={6} sm={4} md={2} >
//             <Box
//               sx={{
//                 display: "flex",
//                 // flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: 2,
//               }}
//             >
//               {/* Icon-only logo */}
//               <Box
//                 component="img"
//                 src={partner.logo}
//                 alt={`Icon logo for partner ${partner.id}`}
//                 sx={{
//                   width: "39px",
//                   height: "48px",
//                   // mb: 2,
//                 }}
//               />
//               {/* Logo with name */}
//               <Box
//                 component="img"
//                 src={partner.logoname}
//                 alt={`Logo with name for partner ${partner.id}`}
//                 sx={{
//                   width: "125px",
//                   maxWidth: "150px", // Adjust width for logoname
//                   height: "48px",
//                 }}
//               />
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//       {/* </Container> */}
//     </Box>
//   );
// }

// export default PartnersSection;

import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Grid v2
import { motion } from "framer-motion"; // Import Framer Motion
import "./../Fonts/IBM Plex Sans Arabic.css";

const partners = [
  {
    id: 1,
    logo: "src/assets/logo1.png",
    width: "190px",
    height: "53px",
  },
  {
    id: 2,
    logo: "src/assets/logo5.png",
    width: "190px",
    height: "67.166px",
  },
  {
    id: 3,
    logo: "src/assets/logo4.png",
    width: "190px",
    height: "33.081px",
  },
  {
    id: 4,
    logo: "src/assets/logo3.png",
    width: "250px",
    height: "156px",
  },
  {
    id: 5,
    logo: "src/assets/logo2.png",
    width: "110px",
    height: "110px",
  },
];

function PartnersSection() {
  return (
    <Box
      sx={{
        position: "relative",
        mt: { xs: -30, sm: -10, md: 20 },
        py: "96px",
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
        <Typography
          className="ibm-plex-sans-arabic"
          sx={{
            fontWeight: 500,
            color: "black",
            mb: 3,
            fontSize: "32px",
          }}
        >
          شركاؤنا الرسميين
        </Typography>
      </motion.div>

      {/* Partners Logos */}
      <Grid container spacing={10} justifyContent="center" alignItems="center">
        {partners.map((partner) => (
          <Grid item key={partner.id} xs={6} sm={4} md={2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} // Start with a smaller scale and hidden
              whileInView={{ opacity: 1, scale: 1 }} // Animate when visible in viewport
              viewport={{ once: false, amount: 0.2 }} // Trigger every time it enters the viewport
              transition={{ duration: 1, delay: partner.id * 0.05 }} // Add slight delay for each logo
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                {/* Icon-only logo */}
                <Box
                  component="img"
                  src={partner.logo}
                  alt={`Icon logo for partner ${partner.id}`}
                  sx={{
                    width: partner.width,
                    height: partner.height,
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PartnersSection;
