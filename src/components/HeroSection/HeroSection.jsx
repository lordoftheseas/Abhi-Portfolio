import React, { useState, useEffect } from "react";
import { Button, Typography, Box, Container, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import DescriptionIcon from "@mui/icons-material/Description";

const HeroSection = () => {
  // Array of roles to cycle through
  const roles = [
    "Computer Science Student",
    "Software Engineer",
    "Security Software Developer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Effect to cycle through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 6000); // Change text every 6 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <Container id="hero">
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left side content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#00ffff",
                  fontFamily: "monospace",
                  mb: 2,
                }}
              >
                Hi, my name is
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                  fontWeight: 700,
                  mb: 1,
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #00ffff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Abhi Ramtel
              </Typography>

              {/* Animated rotating text */}
              <Box
                sx={{
                  height: { xs: "3.5rem", md: "4.5rem", lg: "5.5rem" },
                  mb: 4,
                  position: "relative",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRoleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ position: "absolute" }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "1.8rem", md: "2.5rem", lg: "3rem" },
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                      }}
                    >
                      {roles[currentRoleIndex]}
                    </Typography>
                  </motion.div>
                </AnimatePresence>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  maxWidth: "600px",
                  mb: 6,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                I'm a software developer specializing in building exceptional
                digital experiences. Currently, I'm focused on building
                accessible, human-centered products.
              </Typography>

              <Box>
                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href="/assets/Abhi_s_Resume.pdf"
                  download="Abhi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<DescriptionIcon />}
                  sx={{
                    borderColor: "#00ffff",
                    color: "#00ffff",
                    borderWidth: "2px",
                    "&:hover": {
                      borderColor: "#00ffff",
                      backgroundColor: "rgba(0, 255, 255, 0.1)",
                    },
                  }}
                >
                  Download my resume
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right side hero image/avatar - hidden on mobile */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { md: "280px", lg: "350px" },
                  height: { md: "280px", lg: "350px" },
                }}
              >
                {/* Decorative border/frame */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    width: "100%",
                    height: "100%",
                    border: "2px solid rgba(0, 255, 255, 0.5)",
                    borderRadius: "10px",
                    zIndex: 0,
                  }}
                />

                {/* Main image container */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px -15px rgba(0, 255, 255, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 20px 40px -20px rgba(0, 255, 255, 0.5)",
                      "& > img": {
                        transform: "scale(1.05)",
                      },
                    },
                  }}
                >
                  {/* Actual image */}
                  <Box
                    component="img"
                    src="src\assets\OIP.jpg" // Update this path
                    alt="Abhi - Developer"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />

                  {/* Optional overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      mixBlendMode: "multiply",
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeroSection;
