/** @type {import('next').NextConfig} */
const nextConfig = {
	// basePath: '/out',
	async rewrites () {
		return [
			//接口请求 前缀带上/api-text/
			{ source: '/api/:path*', destination: `http://192.168.0.228:800/:path*` }
		]
	}
}

module.exports = nextConfig
