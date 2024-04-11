import { useRouter } from "next/router";
import { useTheme } from "nextra-theme-docs";
import Giscus from "@giscus/react";

export default {
  "*": {
    theme: {
      bottomContent: function BottomContent() {
        const { resolvedTheme } = useTheme();
        const { route } = useRouter();
        return (
          <Giscus
            key={route}
            repo="ZYJLiu/notdocs"
            repoId="R_kgDOLsch8A"
            category="Discussion"
            categoryId="DIC_kwDOLsch8M4CenYM"
            mapping="pathname"
            inputPosition="top"
            theme={resolvedTheme}
          />
        );
      },
    },
  },
  index: {
    title: "Getting Started",
    type: "page",
    display: "hidden",
    theme: {
      typesetting: "article",
    },
  },
  learn: {
    title: "Learn",
    type: "page",
  },
  course: {
    title: "Course",
    type: "page",
  },
  cookbook: {
    title: "Cookbook",
    type: "page",
  },
  guides: {
    title: "Guides",
    type: "page",
    theme: {
      sidebar: false,
    },
  },
  redirect: {
    title: "↗",
    type: "page",
    href: "https://solana.com/",
    newWindow: true,
  },
};
