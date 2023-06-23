const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https' ,
                hostname:'cdn.imagin.studio' ,
            }
        ],
        domains:["cdn.imagin.studio"]
    }
}

module.exports = nextConfig
