"use strict";

import Footer from "../components/Footer";
import Header from "/components/Header";
import { Component } from "react";

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />

        <main className="my-4 h-screen">
          <div className="text-center px-4">
            <p className="text-lg sm:text-2xl">
              Bem-vind@ ao site da
            </p>

            <h2
              className="
                font-extrabold
                text-transparent text-2xl sx:text-3xl sm:text-4xl
                bg-clip-text bg-gradient-to-r
                from-purple-900 to-yellow-400 via-pink-600
                
              "
            >
                Central Supercombo
            </h2>

            <br />

            <p className="px-4 sm:mx-60 sm:text-center sm:text-lg">
              Aqui você encontra tudo sobre a Supercombo, desde os seus
              primeiros passos até os dias atuais. Shows, músicas e muito
              mais reunido em um só lugar.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}
