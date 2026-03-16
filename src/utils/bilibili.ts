export function getBilibiliEmbedUrl(link?: string) {
  if (!link) {
    return "";
  }

  const buildUrl = (key: "bvid" | "aid", value: string, page: string) =>
    `https://player.bilibili.com/player.html?${key}=${value}&page=${page}`;

  try {
    const url = new URL(link);
    const page = url.searchParams.get("p") ?? "1";
    const bvid = url.pathname.match(/\/video\/(BV[0-9A-Za-z]+)/i)?.[1];
    const aid = url.pathname.match(/\/video\/av(\d+)/i)?.[1];

    if (bvid) {
      return buildUrl("bvid", bvid, page);
    }

    if (aid) {
      return buildUrl("aid", aid, page);
    }
  } catch {
    // Ignore invalid URLs and try a plain-text match below.
  }

  const bvid = link.match(/BV[0-9A-Za-z]+/i)?.[0];
  const aid = link.match(/av(\d+)/i)?.[1];

  if (bvid) {
    return buildUrl("bvid", bvid, "1");
  }

  if (aid) {
    return buildUrl("aid", aid, "1");
  }

  return "";
}
