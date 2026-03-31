export function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "") || "/";
}

export function getCurrentLocation() {
  if (typeof window === "undefined") {
    return { pathname: "/", hash: "" };
  }

  return {
    pathname: normalizePath(window.location.pathname),
    hash: window.location.hash,
  };
}

export function handleNavigationClick(event, href) {
  if (
    typeof window === "undefined" ||
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const linkTarget = event.currentTarget?.getAttribute("target");

  if (linkTarget && linkTarget !== "_self") {
    return;
  }

  const url = new URL(href, window.location.origin);

  if (url.origin !== window.location.origin) {
    return;
  }

  event.preventDefault();

  const nextPath = normalizePath(url.pathname);
  const nextHash = url.hash;
  const currentPath = normalizePath(window.location.pathname);
  const currentHash = window.location.hash;
  const nextUrl = `${nextPath}${nextHash}`;

  if (nextPath === currentPath && nextHash === currentHash) {
    if (nextHash) {
      const target = document.getElementById(
        decodeURIComponent(nextHash.slice(1)),
      );

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    return;
  }

  window.history.pushState({}, "", nextUrl);
  window.dispatchEvent(new PopStateEvent("popstate"));
}
