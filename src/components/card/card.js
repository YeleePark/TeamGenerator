import { Stack } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Card = ({ children, ...rest }) => {
  return (
    <Stack
      onKeyDown={(e) => e.stopPropagation()}
      sx={{
        height: `100%`,
        p: 5,
        background: `rgba( 255, 255, 255, 0.1 )`,
        boxShadow: `0 1px 30px 0 rgba(0,0,0,0.2)`,
        borderRadius: `10px`,
      }}
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default Card;
