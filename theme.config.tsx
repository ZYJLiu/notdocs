// https://nextra.site/docs/docs-theme/theme-configuration
import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const logo = (
  <svg
    className="nextra-logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 646 96"
    height="20"
    fill="none"
  >
    <g clip-path="url(#a)">
      <path
        fill="url(#b)"
        d="m108.53 75.69-17.72 19a4.099 4.099 0 0 1-3 1.31h-84a2.06 2.06 0 0 1-1.51-3.46l17.7-19a4.1 4.1 0 0 1 3-1.31h84a2.05 2.05 0 0 1 1.53 3.46ZM90.81 37.42a4.14 4.14 0 0 0-3-1.31h-84a2.06 2.06 0 0 0-1.51 3.46L20 58.58a4.14 4.14 0 0 0 3 1.31h84a2.06 2.06 0 0 0 1.5-3.46L90.81 37.42Zm-87-13.65h84a4.098 4.098 0 0 0 3-1.31l17.72-19a2.052 2.052 0 0 0-.387-3.14A2.05 2.05 0 0 0 107 0H23a4.1 4.1 0 0 0-3 1.31l-17.7 19a2.06 2.06 0 0 0 1.51 3.46Z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        d="M210.94 40.6H166V25.8h56.62V11h-56.77A14.768 14.768 0 0 0 151 25.69v15a14.768 14.768 0 0 0 14.85 14.71h45v14.8h-58.78V85h58.87a14.766 14.766 0 0 0 13.695-9.044 14.76 14.76 0 0 0 1.155-5.646v-15a14.769 14.769 0 0 0-14.85-14.71ZM298 11h-45.11a14.773 14.773 0 0 0-13.731 9.035A14.752 14.752 0 0 0 238 25.69v44.62c.01 1.943.404 3.865 1.159 5.656A14.77 14.77 0 0 0 252.89 85H298a14.768 14.768 0 0 0 14.85-14.69V25.69a14.76 14.76 0 0 0-4.383-10.42A14.76 14.76 0 0 0 298 11Zm-.11 59.2H253V25.8h44.87l.02 44.4ZM456 11h-44a14.768 14.768 0 0 0-14.85 14.69V85h15V60.69h43.8V85h15V25.69A14.766 14.766 0 0 0 456 11Zm-.11 34.89h-43.8V25.8h43.8v20.09ZM631.15 11h-44a14.768 14.768 0 0 0-14.85 14.69V85h15V60.69H631V85h15V25.69a14.76 14.76 0 0 0-4.383-10.42A14.771 14.771 0 0 0 631.15 11ZM631 45.89h-43.8V25.8H631v20.09ZM544 70.2h-6l-21.45-53a9.887 9.887 0 0 0-9.16-6.2h-13.31a9.845 9.845 0 0 0-9.131 6.035 9.86 9.86 0 0 0-.769 3.765V85h15V25.8h6l21.44 53a9.915 9.915 0 0 0 9.2 6.16h13.31a9.843 9.843 0 0 0 6.98-2.85 9.853 9.853 0 0 0 2.92-6.95V11H544v59.2ZM341.1 11h-15v59.31a14.763 14.763 0 0 0 4.4 10.438A14.775 14.775 0 0 0 341 85h45V70.2h-44.9V11Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1="10.81"
        x2="98.89"
        y1="98.29"
        y2="-1.01"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".08" stop-color="#9945FF" />
        <stop offset=".3" stop-color="#8752F3" />
        <stop offset=".5" stop-color="#5497D5" />
        <stop offset=".6" stop-color="#43B4CA" />
        <stop offset=".72" stop-color="#28E0B9" />
        <stop offset=".97" stop-color="#19FB9B" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h646v96H0z" />
      </clipPath>
    </defs>
  </svg>
);

const config: DocsThemeConfig = {
  logo,
  logoLink: "https://solana.com/",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Solana NotDocs",
      };
    }
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://nextra.site/og.jpeg"
        : `https://nextra.site/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta
          name="og:description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + " – Nextra" : "Nextra"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link
          rel="icon"
          href="https://solana.com/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </>
    );
  },
  project: {
    link: "https://github.com/ZYJLiu/notdocs",
  },
  // TODO: find svg for SE
  chat: {
    link: "https://solana.stackexchange.com/",
  },
  docsRepositoryBase: "https://github.com/ZYJLiu/nextra/tree/main",
  footer: {
    text: "",
  },
  editLink: {
    text: "Help improve this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  darkMode: true,
  toc: {
    backToTop: true,
  },
  // banner: {
  //   dismissible: true,
  //   key: "nextra-banner",
  //   text: "This is a dismissible banner",
  // },
};

export default config;
