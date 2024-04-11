import Link from "next/link";

export default function CustomCard({ href, title, description, children }) {
  return (
    <Link href={href} passHref>
      <div className="duration-400 max-w-sm cursor-pointer rounded-xl border p-4 no-underline shadow-md transition ease-in-out hover:no-underline hover:shadow-lg dark:border-gray-700 dark:hover:border-gray-400">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight no-underline">
            {title}
          </h5>
          <p className="mb-3 no-underline">{description}</p>
          {children}
        </div>
      </div>
    </Link>
  );
}
