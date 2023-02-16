import { Button, Flex } from "@chakra-ui/react";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout title="Image Lightbox">
      <Flex wrap="wrap" justifyContent={{ base: "center", md: "flex-start" }}>
        <Button mr={2} mb={2}>
          Simple Lightbox
        </Button>
        <Button mr={2} mb={2}>
          Lightbox Zoom
        </Button>
        <Button mr={2} mb={2}>
          Lightbox Thumbnail
        </Button>
        <Button mr={2} mb={2}>
          Lightbox FullScreen
        </Button>
        <Button mr={2} mb={2}>
          Lightbox Caption
        </Button>
        <Button mr={2} mb={2}>
          Lightbox Full Feature
        </Button>
      </Flex>
    </Layout>
  );
}
