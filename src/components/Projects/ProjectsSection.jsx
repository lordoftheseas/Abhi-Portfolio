import React, { useState } from "react"; // Add useState
import {
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  useMediaQuery,
  useTheme,
  Modal, // Add Modal component
  IconButton, // Add IconButton for the eye button
  List, // For listing job responsibilities
  ListItem, // For list items
  ListItemText, // For list item text
  Fade, // For transition effects
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import VisibilityIcon from "@mui/icons-material/Visibility"; // Add eye icon
import CloseIcon from "@mui/icons-material/Close"; // For closing the modal
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollRevealSection from "../common/ScrollRevealSection";
import AnimatedSection from "../common/AnimatedSection";

const projects = [
  {
    id: 1,
    title: "Project One",
    description:
      "A web application that uses React and Node.js to accomplish something amazing.",
    image: "src/assets/OIP.jpg", // Add project images to your public folder
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
    details: {
      company: "Company Name (if applicable)",
      period: "Jan 2023 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications using React",
        "Implemented RESTful APIs using Node.js and Express",
        "Designed and managed MongoDB database schemas and queries",
        "Collaborated with design team to create intuitive UI/UX",
        "Improved application performance by 40% through code optimization",
      ],
    },
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "A mobile-responsive dashboard with data visualization and real-time updates.",
    image: "src/assets/OIP.jpg",
    tags: ["React", "Firebase", "TailwindCSS"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
    details: {
      company: "Company Name (if applicable)",
      period: "Jan 2023 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications using React",
        "Implemented RESTful APIs using Node.js and Express",
        "Designed and managed MongoDB database schemas and queries",
        "Collaborated with design team to create intuitive UI/UX",
        "Improved application performance by 40% through code optimization",
      ],
    },
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "An e-commerce platform with payment integration and user authentication.",
    image: "src/assets/OIP.jpg",
    tags: ["React", "Stripe", "Express"],
    github: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com",
    details: {
      company: "Company Name (if applicable)",
      period: "Jan 2023 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications using React",
        "Implemented RESTful APIs using Node.js and Express",
        "Designed and managed MongoDB database schemas and queries",
        "Collaborated with design team to create intuitive UI/UX",
        "Improved application performance by 40% through code optimization",
      ],
    },
  },
  {
    id: 4,
    title: "Project Four",
    description:
      "An e-commerce platform with payment integration and user authentication.",
    image: "src/assets/OIP.jpg",
    tags: ["React", "Stripe", "Express"],
    github: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com",
    details: {
      company: "Company Name (if applicable)",
      period: "Jan 2023 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications using React",
        "Implemented RESTful APIs using Node.js and Express",
        "Designed and managed MongoDB database schemas and queries",
        "Collaborated with design team to create intuitive UI/UX",
        "Improved application performance by 40% through code optimization",
      ],
    },
  },
];

const ProjectsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Add these state variables
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Functions to handle opening and closing the modal
  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0", // No padding to ensure exact card width
          arrows: true,
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <AnimatedSection id="projects">
      <Container maxWidth="lg">
        <Box sx={{ pt: 10, pb: { xs: 12, sm: 8 } }}>
          {" "}
          {/* Extra bottom padding on mobile for dots */}
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 2,
              pb: 2,
              textAlign: "center",
              background: "linear-gradient(90deg, #FFFFFF 0%, #00ffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 8,
              textAlign: "center",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Here are a few projects I've worked on recently. Want to see more?
            Check out my GitHub.
          </Typography>
          <Box
            sx={{
              // Container styling
              px: { xs: 0, md: 4 },
              mx: { xs: 0 },
              position: "relative",

              // Slide styling
              ".slick-slide": {
                px: { xs: 0, sm: 2 }, // No padding on mobile slides
              },

              // Track alignment
              ".slick-track": {
                display: "flex",
                alignItems: "center",
              },

              // Arrow styling and positioning
              ".slick-prev, .slick-next": {
                zIndex: 2,
                height: "40px",
                width: "40px",
                "&:before": {
                  fontSize: { xs: "24px", sm: "30px" },
                  color: "#00ffff",
                },
              },
              ".slick-prev": {
                left: { xs: "-8px", sm: -15, md: -30 }, // Positioned just outside the card
              },
              ".slick-next": {
                right: { xs: "-8px", sm: -15, md: -30 }, // Positioned just outside the card
              },

              // Dots styling
              ".slick-dots": {
                bottom: { xs: -45, sm: -25 },
              },
              ".slick-dots li button:before": {
                color: "#00ffff",
                fontSize: "10px",
              },
              ".slick-dots li.slick-active button:before": {
                color: "#00ffff",
                opacity: 1,
              },

              // List styling
              ".slick-list": {
                margin: { xs: "0 auto", sm: 0 }, // Center the list on mobile
                width: { xs: "calc(100% - 40px)", sm: "100%" }, // Make space for arrows
              },
            }}
          >
            <Slider {...settings}>
              {projects.map((project) => (
                <Box key={project.id} sx={{ width: "100%" }}>
                  <Card
                    sx={{
                      height: { xs: 400, sm: 450 },
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "rgba(18, 18, 18, 0.8)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: { xs: "none", sm: "translateY(-10px)" },
                        boxShadow: {
                          xs: "none",
                          sm: "0 10px 20px rgba(0, 255, 255, 0.2)",
                        },
                      },
                      mx: "auto", // Center the card
                      width: "100%", // Full width
                      maxWidth: { xs: 320, sm: 400 }, // Control max width
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1, pb: { xs: 1, sm: 2 } }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        sx={{ color: "white" }} // Add this to make the title white
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          // Replace color="text.secondary" with sx prop
                          mb: 2,
                          fontSize: { xs: "0.85rem", sm: "0.875rem" },
                          color: "rgba(255, 255, 255, 0.7)", // Light white for description text
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: {
                            xs: "nowrap",
                            sm: "wrap",
                          },
                          gap: 1,
                          mb: 2,
                          overflow: {
                            xs: "auto",
                            sm: "visible",
                          },
                          pb: {
                            xs: 1,
                            sm: 0,
                          },
                          // Hide scrollbar
                          "&::-webkit-scrollbar": {
                            display: "none",
                          },
                          msOverflowStyle: "none",
                          scrollbarWidth: "none",
                        }}
                      >
                        {project.tags.map((tag, index) => (
                          <Box
                            key={index}
                            sx={{
                              px: 1.5,
                              py: 0.5,
                              borderRadius: "16px",
                              fontSize: "0.75rem",
                              backgroundColor: "rgba(0, 255, 255, 0.1)",
                              color: "#00ffff",
                              border: "1px solid #00ffff",
                              whiteSpace: { xs: "nowrap", sm: "normal" },
                              flexShrink: 0, // Prevent tags from shrinking
                            }}
                          >
                            {tag}
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        px: 2, // Add some horizontal padding
                      }}
                    >
                      <Box>
                        <Button
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={project.github}
                          target="_blank"
                          sx={{
                            color: "rgba(255,255,255,0.7)",
                            "&:hover": { color: "#00ffff" },
                          }}
                        >
                          Code
                        </Button>
                        <Button
                          size="small"
                          startIcon={<LaunchIcon />}
                          href={project.demo}
                          target="_blank"
                          sx={{
                            color: "rgba(255,255,255,0.7)",
                            "&:hover": { color: "#00ffff" },
                          }}
                        >
                          Demo
                        </Button>
                      </Box>

                      {/* Add the View More button */}
                      <IconButton
                        onClick={() => handleOpen(project)}
                        size="small"
                        aria-label="view details"
                        sx={{
                          color: "rgba(0,255,255,0.7)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#00ffff",
                            transform: "scale(1.1)",
                          },
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Container>

      {/* Modal for project details */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby="project-details-modal"
        aria-describedby="project-detailed-information"
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: "80%", md: "600px" },
              bgcolor: "rgba(18, 18, 18, 0.95)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(0, 255, 255, 0.3)",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              maxHeight: "80vh",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "rgba(0,0,0,0.1)",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(0,255,255,0.3)",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "rgba(0,255,255,0.5)",
              },
            }}
          >
            {selectedProject && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{ color: "#00ffff" }}
                  >
                    {selectedProject.title}
                  </Typography>
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      "&:hover": { color: "#00ffff" },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>

                {selectedProject.details.company && (
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "rgba(255,255,255,0.9)", mb: 1 }}
                  >
                    {selectedProject.details.company}
                  </Typography>
                )}

                {selectedProject.details.period && (
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "rgba(255,255,255,0.7)", mb: 3 }}
                  >
                    {selectedProject.details.period}
                  </Typography>
                )}

                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255,255,255,0.9)", mb: 3 }}
                >
                  {selectedProject.description}
                </Typography>

                <Typography variant="h6" sx={{ color: "#00ffff", mb: 2 }}>
                  Key Responsibilities:
                </Typography>

                <List>
                  {selectedProject.details.responsibilities.map(
                    (item, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <Box component="span" sx={{ color: "#00ffff", mr: 1 }}>
                          •
                        </Box>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            sx: { color: "rgba(255,255,255,0.9)" },
                          }}
                        />
                      </ListItem>
                    )
                  )}
                </List>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mt: 4,
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={selectedProject.github}
                    target="_blank"
                    sx={{
                      borderColor: "rgba(0,255,255,0.5)",
                      color: "rgba(255,255,255,0.9)",
                      "&:hover": {
                        borderColor: "#00ffff",
                        backgroundColor: "rgba(0,255,255,0.1)",
                      },
                    }}
                  >
                    View Code
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    href={selectedProject.demo}
                    target="_blank"
                    sx={{
                      backgroundColor: "rgba(0,255,255,0.8)",
                      color: "#121212",
                      "&:hover": {
                        backgroundColor: "#00ffff",
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </AnimatedSection>
  );
};

export default ProjectsSection;
