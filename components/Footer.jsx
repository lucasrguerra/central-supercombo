"use strict";

import { Component } from "react";
import { SiTiktok, SiInstagram, SiWhatsapp, SiTwitter } from "react-icons/si";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="bg-black py-2">
        <div className="flex justify-center text-white pb-3">
          <p>Segue a gente nas redes sociais</p>
        </div>

        <nav className="flex gap-6 justify-center text-white pb-2 text-sm sx:text-base">
          <a
            href="https://www.instagram.com/central.supercombo/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2
              rounded-full
              bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600
              transition-all duration-500
              hover:scale-115
            "
          >
            <SiInstagram size={"1.5em"} />
          </a>

          <a
            href="https://twitter.com/centralspc"
            target="_blank"
            rel="noopener noreferrer"
            className="
            p-2
            rounded-full
            bg-blue-500
            transition-all duration-500
            hover:scale-115
            "
          >
            <SiTwitter size={"1.5em"} />
          </a>

          <a
            href="https://chat.whatsapp.com/Lf3ZvVnuzuA5njFZi80lmQ"
            target="_blank"
            rel="noopener noreferrer"
            className="
            p-2
            rounded-full
            bg-green-500
            transition-all duration-500
            hover:scale-115
            "
          >
            <SiWhatsapp size={"1.5em"} />
          </a>

          <a
            href="https://www.tiktok.com/@centralsupercombo"
            target="_blank"
            rel="noopener noreferrer"
            className="
            p-2
            rounded-full
            bg-tiktok
            transition-all duration-500
            hover:scale-115
            "
          >
            <SiTiktok size={"1.5em"} />
          </a>
        </nav>
      </footer>
    );
  }
}
