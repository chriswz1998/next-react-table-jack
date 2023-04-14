/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async rewrites () {
		return [
			//接口请求 前缀带上/api-text/
			{ source: '/api/:path*', destination: `http://10.18.56.54:9880/:path*` }
		]
	}
}

module.exports = nextConfig
