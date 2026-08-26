// Social-first sharing utilities. Uses the Web Share API when
// available (mobile), otherwise falls back to copying a link.

export interface SharePayload {
  title: string;
  text?: string;
  url: string;
}

export async function shareContent(payload: SharePayload): Promise<"shared" | "copied"> {
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share(payload);
      return "shared";
    } catch {
      /* fall through to copy */
    }
  }
  try {
    await navigator.clipboard.writeText(payload.url);
    return "copied";
  } catch {
    return "copied";
  }
}

export function waShare(text: string, url: string) {
  const msg = encodeURIComponent(`${text} ${url}`);
  return `https://wa.me/?text=${msg}`;
}

export function copyText(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}
