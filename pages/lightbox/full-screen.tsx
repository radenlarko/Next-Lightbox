import Layout from "@/components/Layout";
import { Button, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

const Lightbox = dynamic(() => import("../../components/LightboxComponent"));

const LightboxFullScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout title="Lightbox Full Screen">
      <Button onClick={onOpen}>Open Lightbox</Button>
      {isOpen ? (
        <Lightbox open={isOpen} close={onClose} plugins={[Fullscreen]} />
      ) : null}
    </Layout>
  );
};

export default LightboxFullScreen;
