import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
const GlassContainer = ({ children }) => {
  return (
    <Box
      sx={{
        width: `100%`,
        height: `100%`,
        minHeight: `300px`,
        background: `rgba(255, 255, 255, 0.1)`,
        borderRadius: `30px`,
        borderTop: `1px solid rgba(255, 255, 255, 0.5)`,
        borderLeft: `1px solid rgba(255, 255, 255, 0.5)`,
        backdropFilter: `blur(5px)`,
        boxshadow: `0 20px 50px rgba(0, 0, 0, 0.15)`,
        overflow: `hidden`,
      }}
    >
      {children}
    </Box>
  );
};

export default GlassContainer;
