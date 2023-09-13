import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Background = ({ children }) => {
  return (
    <Box
      sx={{
        width: `100vw`,
        height: `100vh`,
        backgroundImage: `linear-gradient(132deg, rgba(92,84,112,1)  0%, rgba(92,84,112,1) 12%, rgba(128,122,146,1) 72%, rgba(92,84,112,1) 100%)`,
        p: { lg: 10, md: 6, xs: 4 },
        boxSizing: `border-box`,
      }}
    >
      {children}
    </Box>
  );
};

Background.propTypes = {
  children: PropTypes.node,
};

export default Background;
