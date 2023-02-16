import Layout from "@/components/Layout";
import { Button, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

const Lightbox = dynamic(() => import("../../components/LightboxComponent"));

const LightboxFullFeature = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout title="Lightbox Full Feature">
      <Button onClick={onOpen}>Open Lightbox</Button>
      {isOpen ? (
        <Lightbox
          open={isOpen}
          close={onClose}
          plugins={[Zoom, Fullscreen, Thumbnails, Captions]}
        />
      ) : null}
    </Layout>
  );
};

export default LightboxFullFeature;
