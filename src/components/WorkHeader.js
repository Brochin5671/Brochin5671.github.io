import { Box, ImageList, ImageListItem, Typography } from '@mui/material';

export function WorkHeader({ images, header, subtitle }) {
  return (
    <header>
      <Box backgroundColor="rgb(108, 117, 125)" p={5}>
        <Typography color="white" variant="h3" mb={1}>
          {header}
        </Typography>
        <Typography
          variant="subtitle1"
          color="white"
          fontWeight="bold"
          fontStyle="italic"
        >
          {subtitle}
        </Typography>
        <Box display="flex" justifyContent="center">
          <ImageList sx={{ width: images.length > 1 ? 210 : 104 }}>
            {images.map((img) => (
              <ImageListItem key={img.name}>
                <a href={img.href} target="_blank" rel="noreferrer">
                  <img
                    style={{ borderRadius: '5%' }}
                    src={img.src}
                    alt={img.name}
                    loading="lazy"
                    width="100"
                  />
                </a>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Typography color="white" variant="body1">
          By Maxim Brochin
        </Typography>
      </Box>
    </header>
  );
}
