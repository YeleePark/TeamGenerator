import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    <Box
      maxWidth={`lg`}
      sx={{
        m: `0 auto`,
        display: `flex`,
        alignItems: `center`,
        height: `100%`,
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
