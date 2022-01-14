import { Box, ThemeProvider, Typography } from '@mui/material';
import '../App.css';
import { Section } from './Section';
import { WorkHeader } from './WorkHeader';
import { report1 } from '../data';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useState } from 'react';
import { MenuBar } from './MenuBar';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export function App() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [content, setContent] = useState(report1);

  const handleCloseNavMenuFromItem = (item) => {
    if (item) {
      setContent(item);
    }
    setAnchorElNav(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="App">
      <MenuBar
        anchorElNav={anchorElNav}
        setAnchorElNav={setAnchorElNav}
        handleCloseNavMenu={handleCloseNavMenu}
        handleCloseNavMenuFromItem={handleCloseNavMenuFromItem}
      />
      <ThemeProvider theme={theme}>
        <Box py={3} />
        <WorkHeader
          header={content.header}
          subtitle={content.subtitle}
          images={content.images}
        />
        <Box mx={5} px={1}>
          {content.sections.map((section) => (
            <Section
              title={section.title}
              subtitle={section.subtitle}
              content={section.content}
              key={section.title}
            >
              {section.children?.map((child) => (
                <Section
                  title={child.title}
                  subtitle={child.subtitle}
                  content={child.content}
                  key={child.title}
                  icons={child.icons}
                />
              ))}
            </Section>
          ))}
        </Box>
        <Box py={5} mt={5} backgroundColor="rgb(108, 117, 125)">
          <Typography variant="body1" color="white">
            © 2022 Maxim Brochin
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}
