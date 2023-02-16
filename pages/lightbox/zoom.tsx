import Layout from "@/components/Layout";
import { Button, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const Lightbox = dynamic(() => import("../../components/LightboxComponent"));

const LightboxZoom = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout title="Lightbox Zoom">
      <Button onClick={onOpen}>Open Lightbox</Button>
      {isOpen ? (
        <Lightbox open={isOpen} close={onClose} plugins={[Zoom]} />
      ) : null}
    </Layout>
  );
};

export default LightboxZoom;
