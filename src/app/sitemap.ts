import type { MetadataRoute } from 'next'

const SITE_URL = 'https://vtpn.io'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    '',
    '/liquidity',
    '/treasury',
    '/vesting',
    '/ecosystem',
    '/roadmap',
    '/integrate',
    '/disclaimer',
  ]
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
}
