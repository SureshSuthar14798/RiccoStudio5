/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Strict Mode in dev to prevent React 19 double-mounting
  // which causes Lenis smooth scroll and canvas RAF loops to reset
  // and appear as page reloads.
  reactStrictMode: false,
};

export default nextConfig;
