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
import "./TopBar.css";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function TopBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const handleAvatarClick = () => {
    // To reload: window.location.reload();
    // To scroll to top:
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.location.reload();
  };

  // Add this function inside your TopBar component:
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);

    if (section) {
      // First, trigger any animation state for the target section
      // This will be handled by a custom event
      const navigationEvent = new CustomEvent("animateSection", {
        detail: { sectionId: sectionId.substring(1) }, // Remove # from the ID
      });
      document.dispatchEvent(navigationEvent);

      // Then scroll to the section smoothly
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    handleCloseNavMenu();
  };

  // Add state for current time
  const [currentTime, setCurrentTime] = React.useState(new Date());

  // Update the time every second
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format the date and time
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(currentTime);

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <AppBar
      position="fixed" // Change from "static" to "fixed" to keep it at the top
      sx={{
        backgroundColor: "rgba(18, 18, 18, 0.7)", // Semi-transparent background
        backdropFilter: "blur(10px)", // Apply blur effect
        WebkitBackdropFilter: "blur(10px)", // For Safari support
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow
        zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it stays on top
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)", // Subtle border
        transition: "background-color 0.3s ease", // Smooth transition for any state changes
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Left side - Avatar and logo */}
          <IconButton
            onClick={handleAvatarClick}
            sx={{
              p: 0,
              display: { xs: "none", md: "flex" },
              mr: 2,
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: -4,
                left: -4,
                right: -4,
                bottom: -4,
                borderRadius: "50%",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                transition: "all 0.3s ease",
              },
              "&:hover::before": {
                boxShadow:
                  "0 0 15px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)",
                borderColor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#Abhi's-Portfolio"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "rgba(255, 255, 255, 0.7)", // Change to greyish like nav links
              textDecoration: "none",
              transition: "all 0.3s ease", // Add transition for smooth effect
              "&:hover": {
                color: "rgba(255, 255, 255, 1)", // Bright white on hover
                transform: "scale(1.1)", // Magnify effect
              },
            }}
          >
            AR
          </Typography>

          {/* Mobile Avatar and AR text */}
          <IconButton
            onClick={handleAvatarClick}
            sx={{
              p: 0,
              display: { xs: "flex", md: "none" },
              mr: 2,
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: -4,
                left: -4,
                right: -4,
                bottom: -4,
                borderRadius: "50%",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                transition: "all 0.3s ease",
              },
              "&:hover::before": {
                boxShadow:
                  "0 0 15px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)",
                borderColor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "rgba(255, 255, 255, 0.7)", // Change to greyish like nav links
              textDecoration: "none",
              transition: "all 0.3s ease", // Add transition for smooth effect
              "&:hover": {
                color: "rgba(255, 255, 255, 1)", // Bright white on hover
                transform: "scale(1.1)", // Magnify effect
              },
            }}
          >
            AR
          </Typography>

          {/* Center - Date and Time - Hidden on small screens */}
          <Box
            sx={{
              position: "absolute", // Add absolute positioning
              left: "50%", // Position at the horizontal center
              top: "50%", // Position at the vertical center
              transform: "translate(-50%, -50%)", // Center perfectly
              display: { xs: "none", md: "block" }, // Hide on mobile
              zIndex: 1, // Ensure it's above other elements
            }}
          >
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.7)",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "rgba(255, 255, 255, 1)",
                  transform: "scale(1.05)",
                },
                textAlign: "center",
              }}
            >
              {formattedDate}
              <br />
              {formattedTime}
            </Typography>
          </Box>

          {/* Right side - Navigation links for desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {navLinks.map((link, index) => (
              <Button
                key={index}
                onClick={(e) => scrollToSection(e, link.path)}
                href={link.path}
                className="nav-link"
                sx={{
                  my: 2,
                  mx: 1,
                  color: "rgba(255, 255, 255, 0.7)",
                  display: "block",
                  fontSize: "1rem",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 1)",
                    transform: "scale(1.1)",
                    backgroundColor: "transparent",
                  },
                  "&:focus": {
                    backgroundColor: "transparent",
                  },
                  "&:active": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                {link.title}
              </Button>
            ))}
          </Box>

          {/* Mobile Navigation Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
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
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navLinks.map((link) => (
                <MenuItem
                  key={link.title}
                  onClick={(e) => scrollToSection(e, link.path)}
                  component="a"
                  href={link.path}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      textTransform: "none",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {link.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopBar;
