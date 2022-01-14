import { Typography, Box } from '@mui/material';

export function Section({ children, title, content, subtitle, icons }) {
  return (
    <>
      <Typography
        variant={subtitle ? 'h5' : 'h4'}
        mt={5}
        mb={2}
        color="dimgray"
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" fontStyle="italic">
          {subtitle}
        </Typography>
      )}
      {icons && (
        <Box my={2}>
          {icons?.map((icon) => (
            <i
              className={icon.class}
              aria-hidden="true"
              key={icon.name}
              style={{ paddingRight: '0.5rem', paddingLeft: '0.5rem' }}
            ></i>
          ))}
        </Box>
      )}
      <hr />
      {children || (
        <Typography variant="body1" textAlign="left" my={2}>
          {content}
        </Typography>
      )}
    </>
  );
}
