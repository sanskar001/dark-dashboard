"use strict";

const menuBtn = document.querySelector(".menu-btn");
const sideMenuBar = document.querySelector(".menu-bar");
const mainContainer = document.querySelector(".main-container");

class App {
  _isMenuShown = false;

  constructor() {
    menuBtn.addEventListener("click", this._menuShowHandler.bind(this));
    mainContainer.addEventListener("click", this._menuHideHandler.bind(this));
  }

  _menuShowHandler(event) {
    if (!this._isMenuShown) {
      sideMenuBar.style.transform = "scaleX(1)";
      this._isMenuShown = true;
    }
    event.stopPropagation();
  }

  _menuHideHandler() {
    if (this._isMenuShown) {
      sideMenuBar.style.transform = "scaleX(0)";
      this._isMenuShown = false;
    }
  }
}

const app = new App();
