import { useEffect } from 'react'
import { SITE } from '../lib/site.js'

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

/** Sets the page title, description, canonical URL and Open Graph tags for the current route. */
export default function Seo({ title, description, path, noindex = false }) {
  useEffect(() => {
    document.title = title
    const url = SITE.url + (path === '/' ? '/' : path)
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'robots', noindex ? 'noindex' : 'index, follow')
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)
  }, [title, description, path, noindex])
  return null
}
