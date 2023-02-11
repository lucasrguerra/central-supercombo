"use strict";

import { Component } from "react";
import Link from "next/link";
import Head from 'next/head';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="bg-black">
        <Head>
          <title>Central Supercombo</title>
          <meta charset="UTF-8" />
          <meta name="author" content="Central Supercombo" />
          <link rel="icon" href="/images/icon.jpg" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/images/icon.jpg" type="image/x-icon" />
          <meta name="description" content="Tudo sobre a Supercombo você acompanha de pertinho aqui!" />
          <meta property="og:title" content="Central Supercombo" />
          <meta property="og:url" content="https://centralsupercombo.bohr.io" />
          <meta property="og:image" content="/images/logo.jpg" />
          <meta property="og:description" content="Tudo sobre a Supercombo você acompanha de pertinho aqui!" />
        </Head>

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