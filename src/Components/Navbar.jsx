import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import "../index.css";
import { useNavigate } from "react-router-dom";
import "./../Fonts/IBM Plex Sans Arabic.css";

import logo from "../assets/Njadwil logo -03 4.png";
import logo1 from "../assets/Njadwil logo -03 3.png";
import mainlogo from "../assets/mainlogo.svg";

const pages = ["من نحن", "شركائنا", "انضم الينا كصاحب فعالية", "حمل التطبيق"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const offset = 50;

    if (id === "انضم الينا كصاحب فعالية") {
      window.location.href = "https://portal.njadwil.com/signup";
    }

    if (section) {
      const targetScroll = section.offsetTop - offset;
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
    handleCloseNavMenu(); // Close the mobile menu if it's open
  };

  return (
    <>
      <AppBar
        sx={{
          borderRadius: "16px",
          border: "1px solid var(--Colors-Border-border-secondary, #E9EAEB)",
          backgroundColor: "#FFF",
          color: "black",
          boxShadow:
            "0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05))",
        }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              display={{ xs: "none", md: "flex" }}
              justifyContent={"flex-start"}
              alignItems={"center"}
              flexGrow={1}
              ml={0}
            >
              <img src={mainlogo} alt="Logo" width={"160px"} height={"80px"} />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    className="ibm-plex-sans-arabic"
                    key={page}
                    onClick={() => handleScroll(page)}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              display={{ xs: "flex", md: "none" }}
              justifyContent={"flex-start"}
              alignItems={"center"}
              flexGrow={{ xs: 2, sm: 1 }}
              // ml={1}
            >
              <img src={mainlogo} alt="Logo" width={"150px"} height={"75px"} />
            </Box>
            <Box
              sx={{
                flexGrow: 1.5,
                display: { xs: "none", md: "flex" },
                gap: { sm: 2, lg: 4 },
              }}
            >
              {pages.map((page) => (
                <Button
                  className="ibm-plex-sans-arabic"
                  key={page}
                  onClick={() => handleScroll(page)}
                  sx={{
                    my: 2,
                    color: "#535862",
                    display: "block",
                    fontSize: "16px",
                    fontWeight: 600,
                    position: "relative",
                    overflow: "hidden", // Ensure the underline doesn't overflow
                    "& .MuiTouchRipple-root": {
                      display: "none", // Attempt to hide ripple effect
                    },
                    "&:hover": {
                      color: "#6941C6",
                      backgroundColor: "transparent",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#6941C6",
                      transition: "width 0.4s ease-in-out", // Smooth transition
                    },
                    "&:hover::after": {
                      width: "100%", // Expand underline
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Button
                className="ibm-plex-sans-arabic"
                variant="contained"
                sx={{
                  fontSize: { xs: "8px", md: "14px" },
                  fontWeight: 600,
                  bgcolor: "#7F56D9",
                  color: "#fff",
                  border: "2px solid rgba(255, 255, 255, 0.12)",
                  textTransform: "none",
                  px: { xs: "2px", md: "14px" },
                  py: { xs: "5px", md: "10px" },
                  borderRadius: "8px",
                }}
              >
                تسجيل الدخول
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Keyframes for the underline animation */}
      {/* <style>
    {`
      @keyframes underlineIn {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
        }
      }
    `}
  </style> */}
    </>
  );
}
export default ResponsiveAppBar;
