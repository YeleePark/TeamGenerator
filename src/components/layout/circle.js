import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Circle = (props) => {
  const { size, color, position } = props;

  return (
    <Box
      width={size || 20}
      height={size || 20}
      backgroundColor={color || `common.white`}
      borderRadius={`50%`}
      top={position?.y || 0}
      left={position?.x || 0}
      position={`fixed`}
    />
  );
};

Circle.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  position: PropTypes.any,
};

export default Circle;
