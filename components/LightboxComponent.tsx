import photos from "@/utils/photos";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Lightbox, {
  ContainerRect,
  LightboxExternalProps,
  SlideImage,
} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const NextJsImage = (
  image: SlideImage,
  offset: number,
  rect: ContainerRect
) => {
  const imgHeight: number = image.height || 300;
  const imgWidth: number = image.width || 300;
  const width = Math.round(
    Math.min(rect.width, (rect.height / imgHeight) * imgWidth)
  );
  const height = Math.round(
    Math.min(rect.height, (rect.width / imgWidth) * imgHeight)
  );

  return (
    <Box pos="relative" w={width} h={height}>
      <Image
        fill
        alt="lightbox-pic"
        src={image.src}
        loading="eager"
        placeholder="blur"
        blurDataURL={rgbDataURL(200, 227, 226)}
        draggable={false}
        sizes={
          typeof window !== "undefined"
            ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
            : `${width}px`
        }
      />
    </Box>
  );
};

const LightboxComponent = ({ ...rest }: LightboxExternalProps) => {
  return <Lightbox slides={photos} render={{ slide: NextJsImage }} {...rest} />;
};

export default LightboxComponent;
