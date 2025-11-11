import type { NextConfig } from "next";
import type { RemotePattern } from "next/dist/shared/lib/image-config";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  ? new URL(process.env.NEXT_PUBLIC_API_BASE_URL)
  : null;

const remotePatterns: RemotePattern[] = [
  {
    protocol: "http",
    hostname: "127.0.0.1",
  },
  {
    protocol: "http",
    hostname: "localhost",
  },
];

if (apiUrl) {
  const protocol = apiUrl.protocol.replace(":", "") as "http" | "https";

  remotePatterns.push({
    protocol,
    hostname: apiUrl.hostname,
  });
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
  },
};

export default nextConfig;
