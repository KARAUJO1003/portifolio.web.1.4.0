/** @type {import('next').NextConfig} */

// https://media.licdn.com/dms/image/v2/D4D03AQGPgq8qpe3UVA/profile-displayphoto-shrink_200_200/B4DZbJHtLkGwAs-/0/1747130964585?e=1756944000&v=beta&t=rHpg7-IgK3NZvjRnEriZSzEQPTlMAKhgkfknsN9r8AA
const nextConfig = {
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/image/v2/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
