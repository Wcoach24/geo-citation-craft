import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToHash — React Router no hace scroll al ancla por sí solo.
 *
 * Los enlaces a `/#precios` o `/curso#comprar` desde otra página dejaban al usuario
 * arriba del todo, mirando el hero, convencido de que el enlace estaba roto.
 * Este componente lo arregla para todo el sitio.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Las rutas son lazy: el elemento puede no existir aún en el primer tick.
    const id = hash.slice(1);
    let tries = 0;
    const tick = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (tries++ < 20) {
        setTimeout(tick, 100);
      }
    };
    tick();
  }, [pathname, hash]);

  return null;
}
