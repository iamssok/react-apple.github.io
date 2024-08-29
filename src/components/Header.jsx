import { useEffect } from 'react';
import { useViewportWidth } from '../hooks/useViewportWidth';
import * as loadHeaderJS from '../utils/loadHeaderJS';
import HeaderWeb from './Header-web';
import HeaderMobile from './Header-mobile';

function Header() {
  const viewportWidth = useViewportWidth();

  useEffect(() => {
    const loadJS = () => {
      if (viewportWidth < 768) {
        loadHeaderJS.minWidth320();
      } else {
        loadHeaderJS.minWidth768();
      }
    };

    loadJS();

    window.addEventListener('resize', loadJS);
    return () => {
      window.removeEventListener('resize', loadJS);
    };
  }, [viewportWidth]);

  return (
    <>
      { viewportWidth < 768 ? <HeaderMobile /> : <HeaderWeb /> }
    </>
  )
}

export default Header;