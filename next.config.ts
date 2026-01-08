/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.martide.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ceehydrosystems.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "veripos.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hazelettmarine.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.whiteclouds.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s3da-design.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.sketchup3dconstruction.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bwifly.com",
        pathname: "/**",
      },

      {
  protocol: "https",
  hostname: "images.ctfassets.net",
  pathname: "/**",
},

{
  protocol: "https",
  hostname: "rtkgpssurveyequipment.com",
  pathname: "/**",
},

{
  protocol: "https",
  hostname: "connexicore.com",
  pathname: "/**",
},



      {
        protocol: "https",
        hostname: "damassets.autodesk.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
