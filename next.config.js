/** @type {import('next').NextConfig} */
nextConfig = {
  images: {
    remotePatterns: [{ hostname: "media.licdn.com" }],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/resources",
  //       destination:
  //         "https://oasisneu.notion.site/Resources-4e33d41a70ff420ba46f4e55ccb6e719?pvs=4",
  //       permanent: false,
  //       basePath: false,
  //     },
  //     {
  //       source: "/projects",
  //       destination:
  //         "https://oasisneu.notion.site/f9c8a070d398482ba7a45e42c7982e6a?v=309fabb92ec54fe8bdfcc37523d0c6da&pvs=4",
  //       permanent: false,
  //       basePath: false,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
