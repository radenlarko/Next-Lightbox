import Layout from "@/components/Layout";
import { Button, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Lightbox = dynamic(() => import("../../components/LightboxComponent"));

const LightboxThumbnail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout title="Lightbox Thumbnail">
      <Button onClick={onOpen}>Open Lightbox</Button>
      {isOpen ? (
        <Lightbox open={isOpen} close={onClose} plugins={[Thumbnails]} />
      ) : null}
    </Layout>
  );
};

export default LightboxThumbnail;
