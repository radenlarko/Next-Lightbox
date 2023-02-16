import Layout from "@/components/Layout";
import { Button, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

const Lightbox = dynamic(() => import("../../components/LightboxComponent"));

const LightboxCaption = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout title="Lightbox Caption">
      <Button onClick={onOpen}>Open Lightbox</Button>
      {isOpen ? (
        <Lightbox open={isOpen} close={onClose} plugins={[Captions]} />
      ) : null}
    </Layout>
  );
};

export default LightboxCaption;
