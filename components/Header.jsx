"use strict";

import { Component } from "react";
import Link from "next/link";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="bg-black">
        <div className="flex justify-center">
          <img
            src="/images/logo.jpg"
            alt=""
            className="w-max h-40 sx:h-58 sm:h-60"
          />
        </div>

        <nav className="flex gap-2 justify-center text-white pb-3 text-sm sx:text-base">
          <LinkButton href="/" label="Home" />
          <LinkButton href="/sobre" label="Sobre" />
          <LinkButton href="/contato" label="Contato" />
        </nav>
      </header>
    );
  }
}

class LinkButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link href={this.props.href}>
        <span
          className="
            px-3 py-1
            border-2 border-black hover:border-b-white
            transition-all duration-500
          "
        >
          {this.props.label}
        </span>
      </Link>
    );
  }
}