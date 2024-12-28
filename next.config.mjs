/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"randomuser.me"
            },
            {
                protocol:"https",
                hostname:"https://my-vault-two.vercel.app/"
            }
        ]
    }
};

export default nextConfig;
