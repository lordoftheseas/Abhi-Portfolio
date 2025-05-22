import React from "react";
import { Typography, Box, Container, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "rgba(12, 12, 12, 0.8)",
        backdropFilter: "blur(10px)",
        py: 4,
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255,.6)", mb: { xs: 2, md: 0 } }}
          >
            © {new Date().getFullYear()} Abhi. All rights reserved.
          </Typography>

          <Box>
            <IconButton
              aria-label="github"
              component="a"
              href="https://github.com/lordoftheseas"
              target="_blank"
              sx={{
                color: "rgba(255, 255, 255, .6)",
                "&:hover": { color: "#00ffff" },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              component="a"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              sx={{
                color: "rgba(255, 255, 255, .6)",
                "&:hover": { color: "#00ffff" },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="twitter"
              component="a"
              href="https://twitter.com/yourusername"
              target="_blank"
              sx={{
                color: "rgba(255, 255, 255, .6)",
                "&:hover": { color: "#00ffff" },
              }}
            >
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, .4)", fontSize: "0.75rem" }}
          >
            Designed and built by Abhi
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
