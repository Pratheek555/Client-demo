import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import ServicesPage from "./components/ServicesPage";
import FloatingContactBar from "./components/FloatingContactBar";
import { getCurrentLocation, normalizePath } from "./utils/navigation";

export default function App() {
  const [location, setLocation] = useState(() => getCurrentLocation());

  useEffect(() => {
    function syncLocation() {
      setLocation(getCurrentLocation());
    }

    window.addEventListener("popstate", syncLocation);
    window.addEventListener("hashchange", syncLocation);

    return () => {
      window.removeEventListener("popstate", syncLocation);
      window.removeEventListener("hashchange", syncLocation);
    };
  }, []);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const anchorId = decodeURIComponent(location.hash.slice(1));

    requestAnimationFrame(() => {
      const target = document.getElementById(anchorId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [location.hash, location.pathname]);

  const currentPage =
    normalizePath(location.pathname) === "/services" ? (
      <ServicesPage />
    ) : (
      <LandingPage />
    );

  return (
    <>
      {currentPage}
      <FloatingContactBar />
    </>
  );
}
