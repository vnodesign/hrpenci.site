export default function imageKitLoader({ src, width, quality }) {
  if(src[0] === '/') src = src.slice(1);
  const params = [`w-${width}`, `q-${quality || 75}`];
  const paramsString = params.join(',');
  var urlEndpoint = 'https://ik.imagekit.io/vnodesign/hrpenci';
  if(urlEndpoint[urlEndpoint.length-1] === '/') urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}?tr=${paramsString}`
}
