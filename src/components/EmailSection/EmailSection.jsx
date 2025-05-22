import React, { useState } from "react";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ScrollRevealSection from "../common/ScrollRevealSection";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null },
    });

    try {
      // Replace with your actual form submission logic
      // For example, you might use an email service or API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" },
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Something went wrong. Please try again." },
      });
    }
  };

  return (
    <ScrollRevealSection>
      <Container id="contact" sx={{ py: 10 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 3,
                background: "linear-gradient(90deg, #FFFFFF 0%, #00ffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get In Touch
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ color: "rgba(255,255,255,0.7)", mb: 4 }}
            >
              I'm currently looking for new opportunities to collaborate on
              projects. Whether you have a question or just want to say hi, I'll
              try my best to get back to you!
            </Typography>

            <Box sx={{ display: "flex", gap: 3, mb: 4 }}>
              <Button
                variant="outlined"
                href="https://github.com/lordoftheseas"
                target="_blank"
                startIcon={<GitHubIcon />}
                sx={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "rgba(255,255,255,0.7)",
                  "&:hover": {
                    borderColor: "#00ffff",
                    color: "#00ffff",
                  },
                }}
              >
                GitHub
              </Button>

              <Button
                variant="outlined"
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                startIcon={<LinkedInIcon />}
                sx={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "rgba(255,255,255,0.7)",
                  "&:hover": {
                    borderColor: "#00ffff",
                    color: "#00ffff",
                  },
                }}
              >
                LinkedIn
              </Button>

              <Button
                variant="outlined"
                href="https://twitter.com/yourusername"
                target="_blank"
                startIcon={<TwitterIcon />}
                sx={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "rgba(255,255,255,0.7)",
                  "&:hover": {
                    borderColor: "#00ffff",
                    color: "#00ffff",
                  },
                }}
              >
                Twitter
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 4,
                backgroundColor: "rgba(18, 18, 18, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 2,
              }}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                margin="normal"
                required
                value={formData.name}
                onChange={handleChange}
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    color: "rgba(255,255,255,0.9)", // This sets the input text color
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00ffff",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.7)", // This sets the label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#00ffff", // This sets the focused label color
                  },
                }}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                value={formData.email}
                onChange={handleChange}
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    color: "rgba(255,255,255,0.9)", // This sets the input text color
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00ffff",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.7)", // This sets the label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#00ffff", // This sets the focused label color
                  },
                }}
              />

              <TextField
                fullWidth
                label="Message"
                name="message"
                variant="outlined"
                margin="normal"
                required
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    color: "rgba(255,255,255,0.9)", // This sets the input text color
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00ffff",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.7)", // This sets the label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#00ffff", // This sets the focused label color
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                disabled={status.submitting}
                sx={{
                  py: 1.5,
                  backgroundColor: "rgba(0, 255, 255, 0.8)",
                  color: "#121212", // This already sets the text color to dark
                  "&:hover": {
                    backgroundColor: "#00ffff",
                  },
                  // Add styles for the disabled state (when "Sending...")
                  "&.Mui-disabled": {
                    backgroundColor: "rgba(0, 255, 255, 0.5)",
                    color: "#121212", // Keep text color consistent when disabled
                  },
                }}
              >
                {status.submitting ? "Sending..." : "Send Message"}
              </Button>

              {status.info.msg && (
                <Typography
                  sx={{
                    mt: 2,
                    color: status.info.error ? "#ff6b6b" : "#00ffff",
                  }}
                >
                  {status.info.msg}
                </Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ScrollRevealSection>
  );
};

export default EmailSection;
