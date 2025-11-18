import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Headers de sécurité
  const securityHeaders = {
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
  }

  // Appliquer les headers de sécurité
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Content Security Policy (CSP) - adapté selon vos besoins
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://api.vercel.app https://*.supabase.co https://www.google-analytics.com",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join('; ')

  response.headers.set('Content-Security-Policy', csp)

  // Protection contre les injections SQL et XSS dans les query strings
  const url = request.nextUrl.clone()
  const queryString = url.search

  // Liste de patterns suspects
  const suspiciousPatterns = [
    /(\%27)|(\')|(\-\-)|(\%23)|(#)/i, // SQL injection
    /((\%3D)|(=))[^\n]*((\%27)|(\')|(\-\-)|(\%3B)|(;))/i, // SQL injection
    /\w*((\%27)|(\'))((\%6F)|o|(\%4F))((\%72)|r|(\%52))/i, // SQL injection
    /((\%27)|(\'))union/i, // SQL injection union
    /exec(\s|\+)+(s|x)p\w+/i, // SQL injection stored procedure
    /<script[^>]*>.*?<\/script>/gi, // XSS script tags
    /<iframe[^>]*>.*?<\/iframe>/gi, // XSS iframe
    /javascript:/i, // XSS javascript:
    /on\w+\s*=/i, // XSS event handlers
    /<img[^>]+src[^>]*=.*javascript:/i, // XSS img src
    /<link[^>]+href[^>]*=.*javascript:/i, // XSS link href
  ]

  // Vérifier si la requête contient des patterns suspects
  const isSuspicious = suspiciousPatterns.some(pattern => 
    pattern.test(queryString) || pattern.test(url.pathname)
  )

  if (isSuspicious) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Protection contre le brute force sur les routes admin
  if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/api/admin')) {
    // Headers supplémentaires pour les routes admin
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate')
  }

  // Protection des routes API
  if (url.pathname.startsWith('/api')) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0')
    response.headers.set('X-Frame-Options', 'DENY')
  }

  // Bloquer les user agents suspects
  const userAgent = request.headers.get('user-agent') || ''
  const suspiciousUserAgents = [
    /^$/,
    /^\./,
    /^\-/,
    /libwww-perl/i,
    /wget/i,
    /python/i,
    /nikto/i,
    /curl/i,
    /scan/i,
    /java/i,
    /winhttp/i,
    /clshttp/i,
    /loader/i,
  ]

  const isSuspiciousUserAgent = suspiciousUserAgents.some(pattern => 
    pattern.test(userAgent)
  )

  if (isSuspiciousUserAgent) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  return response
}

// Appliquer le middleware sur toutes les routes sauf les fichiers statiques
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)).*)',
  ],
}

