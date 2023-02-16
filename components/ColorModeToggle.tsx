import { IconButton, useColorMode } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      size="lg"
      variant="ghost"
      aria-label="Toggle Color Mode"
      icon={colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeToggle;
