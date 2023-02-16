import Layout from "@/components/Layout";
import { Button, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";

const Lightbox = dynamic(() => import("../../components/LightboxComponent"));

const SimpleLightbox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout title="Simple Lightbox">
      <Button onClick={onOpen}>Open Lightbox</Button>
      {isOpen ? <Lightbox open={isOpen} close={onClose} /> : null}
    </Layout>
  );
};

export default SimpleLightbox;
