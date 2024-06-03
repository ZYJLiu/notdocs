import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

// Set basePath to use multi-zones via rewrites
// https://nextjs.org/docs/pages/building-your-application/deploying/multi-zones
const nextConfig = withNextra({
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/quickstart',
        permanent: false,
      },
    ];
  },
});

export default nextConfig;
