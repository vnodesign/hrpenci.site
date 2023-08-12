import { NextResponse } from 'next/server'

export async function middleware(request) {
  const userAgent = request.headers.get('user-agent');
  const bots = [
    "googlebot",
    "yahoo! slurp",
    "bingbot",
    "yandex",
    "baiduspider",
    "facebookexternalhit",
    "twitterbot",
    "rogerbot",
    "linkedinbot",
    "embedly",
    "quora link preview",
    "showyoubot",
    "outbrain",
    "pinterest/0.",
    "developers.google.com/+/web/snippet",
    "slackbot",
    "vkshare",
    "w3c_validator",
    "redditbot",
    "applebot",
    "whatsapp",
    "flipboard",
    "tumblr",
    "bitlybot",
    "skypeuripreview",
    "nuzzel",
    "discordbot",
    "google page speed",
    "qwantify",
    "pinterestbot",
    "bitrix link preview",
    "xing-contenttabreceiver",
    "chrome-lighthouse",
    "telegrambot",
    "integration-test", // Integration testing
  ];

  const IGNORE_EXTENSIONS = [
  ".js",
  ".css",
  ".xml",
  ".less",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".pdf",
  ".doc",
  ".txt",
  ".ico",
  ".rss",
  ".zip",
  ".mp3",
  ".rar",
  ".exe",
  ".wmv",
  ".doc",
  ".avi",
  ".ppt",
  ".mpg",
  ".mpeg",
  ".tif",
  ".wav",
  ".mov",
  ".psd",
  ".ai",
  ".xls",
  ".mp4",
  ".m4a",
  ".swf",
  ".dat",
  ".dmg",
  ".iso",
  ".flv",
  ".m4v",
  ".torrent",
  ".woff",
  ".ttf",
  ".svg",
  ".webmanifest",
];
const isBot = userAgent && bots.some((bot) => userAgent.toLowerCase().includes(bot));
const isPrerender = request.headers.get("X-Prerender");
const pathname = new URL(request.url).pathname
const extension = pathname.slice((pathname.lastIndexOf(".") - 1 >>> 0) + 1);


if (
    isPrerender || !isBot || (extension.length && IGNORE_EXTENSIONS.includes(extension))
) {

  return NextResponse.next()
}

else {

    // Check if request is coming from a bot
    if (isBot) {
      const newURL = `https://service.prerender.io/${request.url}`;
      const newHeaders = new Headers(request.headers);
      //Do not forget to add your Prerender token as an environment variable
      newHeaders.set('X-Prerender-Token', process.env.PRERENDER_TOKEN);

      const res = await fetch(new Request(newURL, {
        headers: newHeaders,
        redirect: 'manual',
      }));

      const responseHeaders = new Headers(res.headers);
      responseHeaders.set('X-Redirected-From', request.url);

      return new Response(res.body, {
        status: res.status,
        statusText: res.statusText,
        headers: responseHeaders,
      });
    }

    return NextResponse.next();

}

}
