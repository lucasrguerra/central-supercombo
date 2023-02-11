"use strict";

import Footer from "../components/Footer";
import Header from "/components/Header";
import { Component } from "react";

export default class Contato extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />

        <main className="h-screen"></main>

        <Footer />
      </div>
    );
  }
}
