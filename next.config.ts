import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old static-site URLs ended in .html; the app router serves the same
      // pages extensionless (matching the canonical URLs the site has always
      // declared). Keep old links and search results working.
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/:dir/index.html", destination: "/:dir", permanent: true },
      { source: "/:path(.+)\\.html", destination: "/:path", permanent: true },
    ];
  },
};

export default nextConfig;
