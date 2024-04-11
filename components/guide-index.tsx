// https://github.com/vercel/swr-site/blob/main/components/blog-index.js
import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";
import { useRouter } from "next/router";
import { PageMapItem } from "nextra";

export default function GuideIndex({ more = "Read more" }) {
  const { locale } = useRouter();
  const pages = getPagesUnderRoute("/guides");

  return pages.map((page: PageMapItem) => {
    const localizedRoute =
      locale === page.locale ? page.route : `/${locale}${page.route}`;

    return (
      <div key={page.route} className="mb-10">
        <h3>
          <Link
            href={localizedRoute}
            style={{ color: "inherit", textDecoration: "none" }}
            className=" mt-8 block text-2xl font-semibold"
          >
            {page.meta?.title || page.frontMatter?.title || page.name}
          </Link>
        </h3>
        <p className="mt-6 leading-7 opacity-80">
          {page.frontMatter?.description}
          <span className="inline-block">
            <Link
              href={localizedRoute}
              className="text-[color:hsl(var(--nextra-primary-hue),100%,50%)] underline decoration-from-font underline-offset-2"
            >
              {more + " →"}
            </Link>
          </span>
        </p>
        {page.frontMatter?.date ? (
          <p className="mt-6 text-sm leading-7 opacity-50">
            {page.frontMatter.date}
          </p>
        ) : null}
      </div>
    );
  });
}
