/** @type {import('next').NextConfig} */
const nextConfig = {
    //...
    pages: [
      {
        route: '/',
        page: 'index',
      },
      {
        route: '/about',
        page: 'about',
      },
      {
        route: '/services',
        page: 'services',
      },
      //...
    ],
  };
  
  export default nextConfig;