import Link from "next/link";
import { Button, Flex } from "@chakra-ui/react";
import Layout from "@/components/Layout";

const buttonList = [
  {
    href: "/lightbox/simple",
    title: "Simple Lightbox",
  },
  {
    href: "/lightbox/zoom",
    title: "Lightbox Zoom",
  },
  {
    href: "/lightbox/thumbnail",
    title: "Lightbox Thumbnail",
  },
  {
    href: "/lightbox/full-screen",
    title: "Lightbox Full Screen",
  },
  {
    href: "/lightbox/caption",
    title: "Lightbox Caption",
  },
  {
    href: "/lightbox/full-feature",
    title: "Lightbox Full Feature",
  },
];

export default function Home() {
  return (
    <Layout title="Image Lightbox">
      <Flex wrap="wrap" justifyContent={{ base: "center", md: "flex-start" }}>
        {buttonList.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button mr={2} mb={2}>
              {item.title}
            </Button>
          </Link>
        ))}
      </Flex>
    </Layout>
  );
}
