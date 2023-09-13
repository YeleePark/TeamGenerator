import { Container } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Inner = ({ children }) => {
  return (
    <Container
      fixed
      maxWidth={`xl`}
      m={`0 auto`}
      sx={{
        display: `flex`,
        alignItems: `center`,
        height: `100%`,
      }}
    >
      {children}
    </Container>
  );
};

export default Inner;
