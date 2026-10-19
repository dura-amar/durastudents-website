import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This prototype site has been replaced by https://durastudents.org.np.
  // It contained sample contact and donation details, so every URL now redirects.
  // Temporary (307) so the redirect is easy to undo.
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://durastudents.org.np",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
