const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/page-1/", changefreq: "daily", priority: 0.3 },
    { url: "/page-2/", changefreq: "daily", priority: 0.3 },
    { url: "/page-3/", changefreq: "daily", priority: 0.3 },
    { url: "/page-4/", changefreq: "daily", priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  // Return a promise that resolves with your XML string
  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());
};
