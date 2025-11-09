import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Primary links use <Link> for client-side routing (SHORTENED MENU)
  const primaryLinks = [
    { name: 'Home', path: '/' },
    { name: 'Introduction', path: '/introduction' },
    { name: 'Contract', path: '/contract' },
  ];

  // Secondary links use <a> for external/non-routed content
  const secondaryLinks = [
    { name: 'Crappy Site', href: 'stuff/CrApPy @.HTML' },
    { name: 'Kumar Creative', href: 'kumarcreative.com/index.html' },
    { name: 'Mascot Company', href: 'MascotCompany/index.html' },
    { name: 'Website Evaluations', href: 'website_evaluations.html' },
    { name: 'Free Code Camp', href: 'fccfsjs_outline.html' },
    { name: 'Hobby', href: 'Hobby/index.html' },
    { name: 'Introduction Page Maker', href: 'intro_form.html' },

    // REQUIRED: Link to the deployed React site
    { name: 'React3', href: '/itis3135-react/index.html' },
  ];

  return (
    <header id="dynamic-header">
      <h1>Sankalp Kumar’s Super Kangaroo</h1>
      <h2>ITIS 3135</h2>
      <nav>
        {/* PRIMARY NAV (Shortened as required) */}
        <ul className="primary-nav">
          {primaryLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        {/* SECONDARY NAV (All original links) */}
        <ul className="secondary-nav">
          {secondaryLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;