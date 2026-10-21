import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // The Study Planner policy first went live at this shorter path.
      {
        source: "/study-planner/privacy",
        destination: "/apps/study-planner/privacy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
