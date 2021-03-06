import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; 2020 Oriana Flagello </li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
        <li>
          Deployed: <a href="https://petewilliams.space">Pete Williams</a>
        </li>
      </ul>
    </footer>
  );
}
