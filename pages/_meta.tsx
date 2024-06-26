import { useRouter } from "next/router";
import { useTheme } from "nextra-theme-docs";
import Giscus from "@giscus/react";

export default {
  // "*": {
  //   theme: {
  //     bottomContent: function BottomContent() {
  //       const { resolvedTheme } = useTheme();
  //       const { route } = useRouter();
  //       return (
  //         <Giscus
  //           key={route}
  //           repo="ZYJLiu/notdocs"
  //           repoId="R_kgDOLsch8A"
  //           category="Discussion"
  //           categoryId="DIC_kwDOLsch8M4CenYM"
  //           mapping="pathname"
  //           inputPosition="top"
  //           theme={resolvedTheme}
  //         />
  //       );
  //     },
  //   },
  // },
  index: {
    title: "Getting Started",
    type: "page",
    display: "hidden",
    theme: {
      typesetting: "article",
    },
  },
  quickstart: {
    title: "Quick Start",
    type: "menu",
    items: {
      index: {
        title: "Start Here",
      },
      basics: {
        title: "Basics",
      },
      token: {
        title: "Tokens",
      },
      program: {
        title: "Programs",
      },
      frontend: {
        title: "Frontend",
      },
    },
  },
  guides: {
    title: "Guides",
    type: "page",
    display: "hidden",
    theme: {
      sidebar: false,
    },
  },
  redirect: {
    title: "Docs ↗",
    type: "page",
    href: "https://solana.com/docs",
    newWindow: true,
  },
};
