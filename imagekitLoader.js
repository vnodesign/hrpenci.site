export default function imageKitLoader({ src, width, quality = 75 }) {
  if (src[0] === '/') src = src.slice(1)
  const params = [`w-${width}`, `q-${quality}`]
  const paramsString = params.join(',')
  let urlEndpoint = 'https://ik.imagekit.io/vnodesign/hrpenci'
  if (urlEndpoint[urlEndpoint.length - 1] === '/')
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1)
  return `${urlEndpoint}/${src}?tr=${paramsString}`
}
