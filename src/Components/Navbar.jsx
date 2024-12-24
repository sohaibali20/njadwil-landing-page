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
import "./../Fonts/IBM Plex Sans Arabic.css";
// import logo from "../assets/Njadwil logo -03 4.png"
import logo1 from "../assets/Njadwil logo -03 3.png";
import mainlogo from "../assets/mainlogo.svg";
import { useNavigate } from "react-router-dom";

const pages = ["من نحن", "شركائنا", "انضم الينا كصاحب فعالية", "حمل التطبيق"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        borderRadius: "16px",
        border: "1px solid var(--Colors-Border-border-secondary, #E9EAEB)",
        backgroundColor: "#FFF",
        color: "black",
        /* Shadows/shadow-xs */
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
          <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            display={{ xs: "flex", md: "none" }}
            justifyContent={"flex-start"}
            alignItems={"center"}
            flexGrow={{ xs: 4, sm: 1 }}
            ml={1}
          >
            <img src={mainlogo} alt="Logo" width={"160px"} height={"80px"} />
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
                onClick={() => {
                  if (page === "انضم الينا كصاحب فعالية") {
                    window.location.href = "https://portal.njadwil.com/signin";
                  } else {
                    handleCloseNavMenu();
                  }
                }}
                sx={{
                  my: 2,
                  color: "#535862",
                  display: "block",
                  fontSize: "16px",
                  fontWeight: 600,
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
                boxShadow:
                  "0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(10, 13, 18, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(10, 13, 18, 0.05)) inset, 0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05))",
              }}
            >
              تسجيل الدخول
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
