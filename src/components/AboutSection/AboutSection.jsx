import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility"; // For "View Details" button
import BusinessIcon from "@mui/icons-material/Business"; // For company
import ScrollRevealSection from "../common/ScrollRevealSection";
import AnimatedSection from "../common/AnimatedSection";

// Drawer styling
const drawerBleeding = 56;

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "rgba(18, 18, 18, 0.8)",
  backdropFilter: "blur(10px)",
  borderTop: "1px solid rgba(0, 255, 255, 0.2)",
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: "#00ffff",
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

// Drawer data
const skillsData = {
  "Programming Languages": [
    "Python",
    "C",
    "C++",
    "Go",
    "Shell Scripting",
    "Java",
    "JavaScript",
    "React",
    "HTML",
    "PHP",
    "LaTeX",
    "MIPS Assembly",
    "VHDL",
  ],

  Frameworks: ["React", "Node.js", "Next.js", "Flask", "Material-UI"],

  OS: [
    "Linux (Kali, RedHat, Fedora)",
    "MacOS",
    "Windows (Server and Client)",
    "Ubuntu (Server and Client)",
  ],

  Cybersecurity: [
    "Vulnerability Research",
    "NIST standards",
    "Encryption mechanisms",
    "Security incident troubleshooting",
    "SIEM applications",
    "Cybersecurity Threat Management",
  ],
  "Red Team Tools": [
    "Kali Linux",
    "Metasploit Framework",
    "Burp Suite Pro",
    "Sqlmap",
    "Hashcat",
    "Nmap",
    "Wireshark",
    "JohnTheRipper",
    "Metasploit",
    "OpenSSL",
    "pfSense",
    "Apache2",
    "Ghidra",
  ],
  "Developer Tools": [
    "VS Code",
    "Emacs",
    "Google Cloud Platform",
    "Android Studio",
    "Node.js",
    "GitHub",
    "JUnit",
    "WordPress",
    "PostgreSQL",
    "Firebase",
  ],
  Software: [
    "Visual Studio",
    "IntelliJ",
    "vSphere",
    "Content Management System (CMS)",
    "CrowdStrike",
    "Jupyter Notebook",
    "Figma",
    "Git",
    "Expo Go",
    "Xpra",
    "Docker",
    "PyCharm",
  ],
  "Security Tools": [
    "Nmap",
    "Wireshark",
    "Metasploit",
    "GDB",
    "OpenSSL",
    "Snort",
    "BurpSuite",
    "Ansible",
    "Kubernetes",
    "Docker",
  ],
  Networking: [
    "Firewall",
    "IDS/IPS",
    "FTP",
    "HTTP",
    "TCP/IP Suite",
    "SSL/TLS encryption",
    "Active Directory",
  ],
  "Cloud Platform": ["AWS", "Google Cloud"],
  "Web Development": ["WordPress", "HTML", "CSS"],
};

// Update your experienceData array to include company logos
const experienceData = [
  {
    title: "Software Developer",
    company: "CytoCybernetics",
    period: "2022 - Present",
    logo: "src/assets/logos/cyto.jpg", // Add logo paths here
    description:
      "Developed and maintained web applications using React. Implemented responsive designs and optimized application performance.",
    detailedDescription:
      "Led frontend development for multiple high-priority projects, collaborating closely with UX designers and backend engineers to deliver seamless user experiences.",
    responsibilities: [
      "Architected and implemented scalable React component libraries for use across multiple web applications",
      "Reduced page load times by 40% through code splitting and lazy loading techniques",
      "Mentored junior developers and conducted code reviews to ensure code quality",
      "Integrated REST APIs with frontend applications and implemented state management with Redux",
      "Led the migration from legacy jQuery codebase to modern React architecture",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Material UI",
      "Jest",
      "GraphQL",
    ],
    achievements: [
      "Successfully delivered key projects ahead of schedule with zero critical bugs",
      "Reduced technical debt by 30% through strategic refactoring initiatives",
      "Implemented CI/CD pipeline resulting in 50% faster deployment cycles",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Previous Company",
    period: "2020 - 2022",
    logo: "src/assets/logos/R.png",
    description:
      "Created user interfaces with HTML, CSS, and JavaScript. Worked in an agile team to deliver high-quality products.",
    detailedDescription:
      "Focused on building responsive and accessible web interfaces for e-commerce applications serving over 50,000 monthly active users.",
    responsibilities: [
      "Developed and maintained frontend features for the company's main e-commerce platform",
      "Collaborated with UX/UI designers to implement pixel-perfect interfaces",
      "Optimized applications for maximum speed and scalability across all device types",
      "Participated in daily stand-ups and sprint planning in an agile development environment",
      "Implemented advanced CSS animations and transitions for improved user experience",
    ],
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "SASS",
      "Webpack",
      "Bootstrap",
    ],
    achievements: [
      "Improved mobile conversion rates by 25% through responsive design optimizations",
      "Created reusable component library that reduced development time by 35%",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Internship Company",
    period: "2019 - 2020",
    logo: "/assets/logos/company3.png",
    description:
      "Assisted in developing websites and learned modern web development practices.",
    detailedDescription:
      "First professional role focusing on fundamental web development skills while contributing to real client projects under supervision.",
    responsibilities: [
      "Assisted senior developers in creating and maintaining website features",
      "Built and tested responsive layouts across multiple browsers",
      "Created documentation for internal tools and processes",
      "Participated in client meetings to understand project requirements",
      "Implemented basic SEO optimizations for client websites",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "Git"],
    achievements: [
      "Developed a custom WordPress plugin that improved content management workflow",
      "Received recognition for exceptional attention to detail and ability to learn quickly",
    ],
  },
];

// Update your educationData array to include institution logos
const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    minor: "Cybersecurity", // Add your minor here
    institution: "University Name",
    period: "2016 - 2020",
    logo: "/assets/logos/university.png",
    description:
      "Focused on software development, algorithms, and data structures.",
    courses: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
      "Software Engineering",
      "Web Development",
      "Machine Learning",
      "Artificial Intelligence",
      "Computer Security",
      "Network Security",
      "Cloud Computing",
      "Distributed Systems",
    ],
  },
  {
    certificate: "Full Stack Web Development",
    institution: "Online Learning Platform",
    period: "2021",
    description: "Completed intensive course on modern web development.",
    courses: [
      "HTML/CSS/JavaScript",
      "React Framework",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful API Development",
      "Authentication & Authorization",
      "Responsive Design",
    ],
  },
];

const toolsData = [
  "VS Code",
  "GitHub",
  "Figma",
  "Postman",
  "Chrome DevTools",
  "npm",
  "Docker",
  "AWS",
  "Jira",
  "Slack",
  "Redux DevTools",
  "Terminal",
];

const AboutSection = () => {
  const theme = useTheme();
  const [openDrawers, setOpenDrawers] = useState({
    skills: false,
    experience: false,
    education: false,
    tools: false,
  });

  // Existing state for experience modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  // Add these new states for education modal
  const [openEducationModal, setOpenEducationModal] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  // Existing handlers
  const toggleDrawer = (drawer, open) => () => {
    setOpenDrawers({ ...openDrawers, [drawer]: open });
  };

  const handleOpenModal = (experience) => {
    setSelectedExperience(experience);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Add new handlers for education modal
  const handleOpenEducationModal = (education) => {
    setSelectedEducation(education);
    setOpenEducationModal(true);
  };

  const handleCloseEducationModal = () => {
    setOpenEducationModal(false);
  };

  // Drawer category components
  const drawerCategories = [
    {
      id: "skills",
      title: "Skills",
      icon: <CodeIcon sx={{ color: "#00ffff", fontSize: "1.8rem" }} />,
      content: (
        <Box sx={{ py: 2 }}>
          {Object.entries(skillsData).map(([category, skills]) => (
            <Box key={category} sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#00ffff",
                  mb: 2,
                  borderBottom: "1px solid rgba(0, 255, 255, 0.3)",
                  pb: 1,
                }}
              >
                {category}
              </Typography>

              <Grid container spacing={2}>
                {skills.map((skill, index) => (
                  <Grid item xs={6} sm={4} md={3} key={index}>
                    <Chip
                      label={skill}
                      sx={{
                        backgroundColor: "rgba(0, 255, 255, 0.08)",
                        color: "rgba(255,255,255,0.9)",
                        border: "1px solid rgba(0, 255, 255, 0.3)",
                        borderRadius: "16px",
                        p: 0.5,
                        width: "100%",
                        "& .MuiChip-label": {
                          px: 1,
                          py: 0.5,
                          whiteSpace: "normal",
                          textAlign: "center",
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      ),
    },
    {
      id: "experience",
      title: "Experience",
      icon: <WorkIcon sx={{ color: "#00ffff", fontSize: "1.8rem" }} />,
      content: (
        <Grid container spacing={2} sx={{ py: 2 }}>
          {experienceData.map((exp, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  backgroundColor: "rgba(0, 255, 255, 0.05)",
                  border: "1px solid rgba(0, 255, 255, 0.2)",
                  borderRadius: 2,
                  height: "100%", // Ensures all cards have the same height
                  display: "flex",
                  flexDirection: "column",
                  position: "relative", // Important for absolute positioning of the button
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "40px", // Make room for the eye icon
                    }}
                  >
                    {/* Add company logo/avatar */}
                    <Box
                      sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
                    >
                      {exp.logo ? (
                        <Avatar
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          sx={{
                            width: 40,
                            height: 40,
                            mr: 2,
                            // border: "1px solid rgba(0, 255, 255, 0.3)",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            "& .MuiAvatar-img": {
                              objectFit: "contain", // This will prevent cropping
                              padding: "6px", // Add some padding inside the avatar
                            },
                          }}
                          variant="rounded" // Rounded corners look more professional for logos
                        />
                      ) : (
                        <Avatar
                          sx={{
                            width: 40,
                            height: 40,
                            mr: 2,
                            backgroundColor: "rgba(0, 255, 255, 0.1)",
                            border: "1px solid rgba(0, 255, 255, 0.3)",
                          }}
                        >
                          <BusinessIcon
                            sx={{ color: "#00ffff", fontSize: "1.2rem" }}
                          />
                        </Avatar>
                      )}
                      <Typography
                        variant="h6"
                        color="#00ffff"
                        gutterBottom
                        sx={{ mb: 0 }}
                      >
                        {exp.title}
                      </Typography>
                    </Box>

                    {/* Existing content */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        color="rgba(255,255,255,0.9)"
                      >
                        {exp.company}
                      </Typography>
                      <Typography variant="body2" color="rgba(255,255,255,0.9)">
                        {exp.period}
                      </Typography>
                    </Box>
                    <Divider
                      sx={{ my: 1.5, bgcolor: "rgba(0, 255, 255, 0.1)" }}
                    />
                    <Typography variant="body2" color="rgba(255,255,255,0.9)">
                      {exp.description}
                    </Typography>
                  </Box>

                  {/* Eye button - create a new onClick handler for each card */}
                  <IconButton
                    onClick={() => handleOpenModal(exp)} // This is correct now, each button gets its own closure
                    sx={{
                      color: "rgba(0,255,255,0.7)",
                      position: "absolute",
                      top: 16,
                      right: 16,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#00ffff",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ),
    },
    {
      id: "education",
      title: "Education",
      icon: <SchoolIcon sx={{ color: "#00ffff", fontSize: "1.8rem" }} />,
      content: (
        <Grid container spacing={2} sx={{ py: 2 }}>
          {educationData.map((edu, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  backgroundColor: "rgba(0, 255, 255, 0.05)",
                  border: "1px solid rgba(0, 255, 255, 0.2)",
                  borderRadius: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "40px", // Make room for the eye icon
                    }}
                  >
                    {/* Institution logo/avatar */}
                    <Box
                      sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
                    >
                      {edu.logo ? (
                        <Avatar
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          sx={{
                            width: 40,
                            height: 40,
                            mr: 2,
                            // border: "1px solid rgba(0, 255, 255, 0.3)",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            "& .MuiAvatar-img": {
                              objectFit: "contain", // This will prevent cropping
                              padding: "4px", // Add some padding inside the avatar
                            },
                          }}
                          variant="rounded"
                        />
                      ) : (
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0, 255, 255, 0.1)",
                            border: "1px solid rgba(0, 255, 255, 0.3)",
                            mr: 2,
                          }}
                        >
                          <SchoolIcon
                            sx={{ color: "#00ffff", fontSize: "1.2rem" }}
                          />
                        </Box>
                      )}
                      <Typography
                        variant="h6"
                        color="#00ffff"
                        gutterBottom
                        sx={{ mb: 0 }}
                      >
                        {edu.degree || edu.certificate}
                      </Typography>
                    </Box>

                    {/* Add minor if it exists */}
                    {edu.minor && (
                      <Typography
                        variant="body1"
                        color="rgba(255,255,255,0.9)"
                        sx={{
                          mb: 1,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box component="span" sx={{ color: "#00ffff", mr: 1 }}>
                          Minor:
                        </Box>{" "}
                        {edu.minor}
                      </Typography>
                    )}

                    {/* Institution and period */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        color="rgba(255,255,255,0.9)"
                      >
                        {edu.institution}
                      </Typography>
                      <Typography variant="body2" color="rgba(255,255,255,0.9)">
                        {edu.period}
                      </Typography>
                    </Box>

                    <Divider
                      sx={{ my: 1.5, bgcolor: "rgba(0, 255, 255, 0.1)" }}
                    />

                    <Typography variant="body2" color="rgba(255,255,255,0.9)">
                      {edu.description}
                    </Typography>
                  </Box>

                  {/* Add eye button for education cards */}
                  <IconButton
                    onClick={() => handleOpenEducationModal(edu)}
                    sx={{
                      color: "rgba(0,255,255,0.7)",
                      position: "absolute",
                      top: 16,
                      right: 16,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#00ffff",
                        transform: "scale(1.1)",
                      },
                    }}
                    aria-label="view courses"
                  >
                    <VisibilityIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ),
    },
    {
      id: "tools",
      title: "Tools",
      icon: <BuildIcon sx={{ color: "#00ffff", fontSize: "1.8rem" }} />,
      content: (
        <Grid container spacing={2} sx={{ py: 2 }}>
          {toolsData.map((tool, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Chip
                label={tool}
                sx={{
                  backgroundColor: "rgba(0, 255, 255, 0.08)",
                  color: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(0, 255, 255, 0.3)",
                  borderRadius: "16px",
                  p: 0.5,
                  width: "100%",
                  "& .MuiChip-label": {
                    px: 1,
                    py: 0.5,
                    whiteSpace: "normal",
                    textAlign: "center",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      ),
    },
  ];

  return (
    <AnimatedSection id="about">
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Box sx={{ pt: 10, pb: 8 }}>
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
            About Me
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
              mb: 6,
            }}
          >
            Hello! I'm Abhi, a software engineer based in Buffalo, NY. I enjoy
            creating things that live on the internet, whether that be websites,
            applications, or anything in between. I am a senior in University at
            Buffalo with my Bachelors Degree in Computer Science and Minor in
            Cybersecurity & Mathematics. I have a passion huge for cybersecurity
            and a keen interest in learning and developing security tools.
          </Typography>

          {/* Drawer Category Cards */}
          <Grid
            container
            spacing={3}
            sx={{
              mb: 4,
              justifyContent: "center",
              mx: "auto",
              maxWidth: "1000px",
            }}
          >
            {drawerCategories.map((category) => (
              <Grid item xs={6} sm={6} md={3} key={category.id}>
                <Paper
                  elevation={0}
                  onClick={toggleDrawer(category.id, true)}
                  sx={{
                    p: 2,
                    backgroundColor: "rgba(0, 255, 255, 0.05)",
                    border: "1px solid rgba(0, 255, 255, 0.2)",
                    borderRadius: 2,
                    transition: "transform 0.3s, background-color 0.3s",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80px",
                    width: "100%",
                    padding: "5px",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      backgroundColor: "rgba(0, 255, 255, 0.08)",
                    },
                  }}
                >
                  {category.icon}
                  <Typography
                    variant="h6"
                    sx={{
                      ml: 1.5,
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    }}
                    color="rgba(255,255,255,0.7)"
                  >
                    {category.title}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Swipeable Drawers */}
          <Global
            styles={{
              ".MuiDrawer-root > .MuiPaper-root": {
                height: `calc(60% - ${drawerBleeding}px)`,
                overflow: "visible",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              },
              // Fix for drawer always being visible
              ".MuiDrawer-root .MuiBackdrop-root": {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
          />

          {drawerCategories.map((category) => (
            <SwipeableDrawer
              key={category.id}
              anchor="bottom"
              open={openDrawers[category.id]}
              onClose={toggleDrawer(category.id, false)}
              onOpen={toggleDrawer(category.id, true)}
              swipeAreaWidth={0} // Disable swipe to open
              disableSwipeToOpen={true}
              ModalProps={{
                keepMounted: false, // Change this to fix always visible issue
              }}
              sx={{
                visibility: openDrawers[category.id] ? "visible" : "hidden",
                "& .MuiPaper-root": {
                  visibility: "visible",
                },
              }}
            >
              <StyledBox
                sx={{
                  position: "absolute",
                  top: -drawerBleeding,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  visibility: "visible",
                  right: 0,
                  left: 0,
                  backgroundColor: "rgba(18, 18, 18, 0.9)",
                  backdropFilter: "blur(10px)",
                  borderTop: "1px solid rgba(0, 255, 255, 0.2)",
                }}
              >
                <Puller />
                <Typography
                  sx={{
                    p: 2,
                    color: "#00ffff",
                    textAlign: "center",
                    fontWeight: "medium",
                  }}
                >
                  {category.title}
                </Typography>
              </StyledBox>
              <StyledBox
                sx={{
                  px: 3,
                  pb: 3,
                  pt: 1,
                  height: "100%",
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
                {category.content}
              </StyledBox>
            </SwipeableDrawer>
          ))}

          {/* Modal for Experience Details */}
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            closeAfterTransition
            aria-labelledby="experience-details-modal"
            aria-describedby="detailed-experience-information"
          >
            <Fade in={openModal}>
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
                {selectedExperience && (
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
                        {selectedExperience.title}
                      </Typography>
                      <IconButton
                        onClick={handleCloseModal}
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          "&:hover": { color: "#00ffff" },
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "rgba(255,255,255,0.9)" }}
                      >
                        {selectedExperience.company}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {selectedExperience.period}
                      </Typography>
                    </Box>

                    {/* Add this after the company name in the modal */}
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      {selectedExperience.logo ? (
                        <Avatar
                          src={selectedExperience.logo}
                          alt={`${selectedExperience.company} logo`}
                          sx={{
                            width: 60,
                            height: 60,
                            mr: 2,
                            border: "1px solid rgba(0, 255, 255, 0.3)",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            "& .MuiAvatar-img": {
                              objectFit: "contain", // This will prevent cropping
                              padding: "6px", // Add some padding inside the avatar
                            },
                          }}
                          variant="rounded" // Rounded corners look more professional for logos
                        />
                      ) : (
                        <Avatar
                          sx={{
                            width: 60,
                            height: 60,
                            mr: 2,
                            backgroundColor: "rgba(0, 255, 255, 0.1)",
                            border: "1px solid rgba(0, 255, 255, 0.3)",
                          }}
                          variant="rounded"
                        >
                          <BusinessIcon
                            sx={{ color: "#00ffff", fontSize: "2rem" }}
                          />
                        </Avatar>
                      )}
                      <Typography
                        variant="h5"
                        sx={{ color: "rgba(255,255,255,0.9)" }}
                      >
                        {selectedExperience.company}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{ color: "rgba(255,255,255,0.9)", mb: 3 }}
                    >
                      {selectedExperience.detailedDescription}
                    </Typography>

                    <Typography variant="h6" sx={{ color: "#00ffff", mb: 2 }}>
                      Key Responsibilities:
                    </Typography>

                    <List>
                      {selectedExperience.responsibilities.map(
                        (item, index) => (
                          <ListItem key={index} sx={{ py: 0.5 }}>
                            <Box
                              component="span"
                              sx={{ color: "#00ffff", mr: 1 }}
                            >
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

                    <Typography
                      variant="h6"
                      sx={{ color: "#00ffff", mt: 3, mb: 2 }}
                    >
                      Technologies Used:
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 3,
                      }}
                    >
                      {selectedExperience.technologies.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          sx={{
                            backgroundColor: "rgba(0, 255, 255, 0.08)",
                            color: "#00ffff",
                            border: "1px solid rgba(0, 255, 255, 0.3)",
                          }}
                        />
                      ))}
                    </Box>

                    {selectedExperience.achievements && (
                      <>
                        <Typography
                          variant="h6"
                          sx={{ color: "#00ffff", mb: 2 }}
                        >
                          Key Achievements:
                        </Typography>

                        <List>
                          {selectedExperience.achievements.map(
                            (item, index) => (
                              <ListItem key={index} sx={{ py: 0.5 }}>
                                <Box
                                  component="span"
                                  sx={{ color: "#00ffff", mr: 1 }}
                                >
                                  ✓
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
                      </>
                    )}
                  </>
                )}
              </Box>
            </Fade>
          </Modal>

          {/* Modal for Education Details - New Addition */}
          <Modal
            open={openEducationModal}
            onClose={handleCloseEducationModal}
            closeAfterTransition
            aria-labelledby="education-details-modal"
            aria-describedby="education-course-information"
          >
            <Fade in={openEducationModal}>
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
                {selectedEducation && (
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
                        {selectedEducation.degree ||
                          selectedEducation.certificate}
                      </Typography>
                      <IconButton
                        onClick={handleCloseEducationModal}
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          "&:hover": { color: "#00ffff" },
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "rgba(255,255,255,0.9)" }}
                      >
                        {selectedEducation.institution}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {selectedEducation.period}
                      </Typography>
                    </Box>

                    {/* Display minor if it exists */}
                    {selectedEducation.minor && (
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "rgba(255,255,255,0.9)", mb: 3 }}
                      >
                        <Box component="span" sx={{ color: "#00ffff", mr: 1 }}>
                          Minor:
                        </Box>
                        {selectedEducation.minor}
                      </Typography>
                    )}

                    <Typography
                      variant="body1"
                      sx={{ color: "rgba(255,255,255,0.9)", mb: 3 }}
                    >
                      {selectedEducation.description}
                    </Typography>

                    <Typography variant="h6" sx={{ color: "#00ffff", mb: 2 }}>
                      Relevant Courses:
                    </Typography>

                    {selectedEducation.courses ? (
                      <Grid container spacing={2}>
                        {selectedEducation.courses.map((course, index) => (
                          <Grid item xs={12} sm={6} key={index}>
                            <Paper
                              elevation={0}
                              sx={{
                                p: 1.5,
                                backgroundColor: "rgba(0, 255, 255, 0.05)",
                                border: "1px solid rgba(0, 255, 255, 0.2)",
                                borderRadius: 2,
                                color: "rgba(255,255,255,0.9)",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                component="span"
                                sx={{
                                  color: "#00ffff",
                                  mr: 1.5,
                                  fontSize: "0.8rem",
                                }}
                              >
                                •
                              </Box>
                              {course}
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    ) : (
                      <Typography
                        variant="body1"
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        No course information available.
                      </Typography>
                    )}
                  </>
                )}
              </Box>
            </Fade>
          </Modal>
        </Box>
      </Container>
    </AnimatedSection>
  );
};

export default AboutSection;
