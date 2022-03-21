import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function Header({ title, heading, avatar }) {
  return (
    <div id="logo">
      <Link to="/">
        <span className="image">
          <StaticImage
            width={75}
            src="../../assets/img/avatar.png"
            alt="Sean Norwood"
          />
        </span>

        <h1 id="title">{title}</h1>
        <p>{heading}</p>
      </Link>
    </div>
  );
}
