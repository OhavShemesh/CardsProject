import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          React Project by Ohav Shemesh
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to <strong>Ohav Shemesh's React Project</strong>. This project
          features a responsive design, intuitive layout, and accessible content,
          allowing users to browse business cards and perform various actions
          based on their roles.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" gutterBottom>
          Table of Contents
        </Typography>
        <Typography variant="body1" paragraph>
          1. <a href="#project-overview">Project Overview</a>
        </Typography>
        <Typography variant="body1" paragraph>
          2. <a href="#usage">Usage</a>
        </Typography>
        <Typography variant="body1" paragraph>
          3. <a href="#project-structure">Project Structure</a>
        </Typography>
        <Typography variant="body1" paragraph>
          4. <a href="#tech-stack">Tech Stack</a>
        </Typography>
        <Typography variant="body1" paragraph>
          5. <a href="#contributing">Contributing</a>
        </Typography>
        <Typography variant="body1" paragraph>
          6. <a href="#license">License</a>
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" id="project-overview" gutterBottom>
          Project Overview
        </Typography>
        <Typography variant="body1" paragraph>
          This project is a React-based web application designed to display and
          manage business cards. It utilizes modern web development technologies,
          including React for dynamic user interfaces, Material UI (MUI) for
          design consistency, and Axios for communicating with a backend API. The
          app is responsive, meaning it works well across different screen sizes,
          and provides an accessible, intuitive user experience.
        </Typography>
        <Typography variant="body1" paragraph>
          The project is built around core features like creating, editing, and
          deleting business cards, along with role-based access control that
          limits or enables features depending on the user's access level. It also
          includes a custom theme provider, user authentication using JWT, and
          schema validation with Joi.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" id="usage" gutterBottom>
          Usage
        </Typography>
        <Typography variant="body1" paragraph>
          When you visit the app, you can:
        </Typography>
        <Typography variant="body1" component="ol">
          <li>
            <strong>Browse business cards</strong> on the main page without logging
            in.
          </li>
          <li>
            Use the <strong>navigation bar</strong> at the top to register or log
            in. Once logged in, the features available to you will depend on your
            role:
            <ul>
              <li>
                <strong>Regular User</strong>: Can like cards and view liked ones
                in the "Favorites" section.
              </li>
              <li>
                <strong>Business User</strong>: In addition to the above, can
                create new cards and view their cards in the "My Cards" section.
              </li>
              <li>
                <strong>Admin</strong>: Can manage users and cards, including
                deleting any card, and changing user roles.
              </li>
            </ul>
          </li>
        </Typography>
        <Typography variant="body1" paragraph>
          The footer includes additional navigation options, such as access to the{" "}
          <strong>About</strong> page, and if logged in, links to the{" "}
          <strong>Favorites</strong> or <strong>My Cards</strong> pages based on
          user type.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" id="project-structure" gutterBottom>
          Project Structure
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>`app.jsx`</strong>: The main file containing:
        </Typography>
        <Typography variant="body1" component="ul">
          <li>
            <strong>Router</strong>: Handles page navigation.
          </li>
          <li>
            <strong>Layout</strong>: Renders the navbar, footer, and page content.
          </li>
          <li>
            <strong>SnackbarProvider</strong>: Provides snackbars for
            notifications.
          </li>
          <li>
            <strong>UserProvider</strong>: Checks login status and adjusts UI
            accordingly.
          </li>
          <li>
            <strong>CustomThemeProvider</strong>: Applies a custom bluish theme to
            the entire project.
          </li>
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>Key Folders</strong>:
        </Typography>
        <Typography variant="body1" component="ul">
          <li>
            <strong>`pages`</strong>: Contains static pages like `About` and error
            pages.
          </li>
          <li>
            <strong>`routes`</strong>: Handles routing logic for navigating the
            app.
          </li>
          <li>
            <strong>`cards`</strong>: Manages everything related to the business
            cards.
          </li>
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" id="tech-stack" gutterBottom>
          Tech Stack
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>Frontend</strong>:
        </Typography>
        <Typography variant="body1" component="ul">
          <li>React (with Vite environment)</li>
          <li>Material UI (MUI) for design, icons, and built-in components</li>
          <li>Custom theming using MUI's theming system</li>
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>Backend</strong>:
        </Typography>
        <Typography variant="body1" component="ul">
          <li>JWT for authentication and token handling</li>
          <li>Axios for database communication</li>
          <li>Joi for validation of schemas</li>
        </Typography>

        <Divider sx={{ my: 2 }} />
      </Box>

    </Container>
  );
}
