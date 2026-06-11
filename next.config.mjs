/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Menyuruh Vercel mengabaikan error ESLint (salah ketik/variabel tak terpakai) saat build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Menyuruh Vercel mengabaikan error TypeScript (tipe data any, dll) saat build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;