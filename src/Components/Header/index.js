import React from "react";
import "./index.css";

export default function Header({ localeData }) {
  const { Header } = localeData;
  return (
    <header className="top-header">
      <a href="/">
        <img src={Header.logo} alt="Saas Labs Logo" />
      </a>
    </header>
  );
}
