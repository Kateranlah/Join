
/**
 * function plays animation, if user loaded index.html for the first time
 */
async function initIndexHTML() {
    if (firstLoadOfPage()) {
      setTimeout(startAnimation, 900);
      localStorage.setItem(
        "First load of index.html",
        "loaded index.html already"
      );
    } else {
      noAnimation();
    }
    setTimeout(checkForAutoLogIn, 600);
  }
  
  /**
   * @returns if first load has a value
   */
  function firstLoadOfPage() {
    return localStorage.getItem("First load of index.html") == null;
  }
  
  /**
   * function cancels animation on index.html
   */
  function noAnimation() {
    document.getElementById("screen-cover").style = "display:none;";
    let animationElements = [
      "logo-dektop",
      "logo-mobile",
      "sign-up-desktop",
      "sign-up-mobile",
      "card",
    ];
    giveAllElementsNoTransition(animationElements);
    giveAllElementsOpacity(animationElements);
    giveLogoRightPos();
  }
  
  /**
   * function gives all animation elements transition 0ms
   * @param {Array} animationElements
   */
  function giveAllElementsNoTransition(animationElements) {
    for (let i = 0; i < animationElements.length; i++) {
      const element = animationElements[i];
      document.getElementById(element).style = "transition: 250ms;";
    }
  }
  
  /**
   * function gives all animation elements opacity 1
   * @param {Array} animationElements
   */
  function giveAllElementsOpacity(animationElements) {
    for (let i = 0; i < animationElements.length; i++) {
      const element = animationElements[i];
      document.getElementById(element).classList.remove("opacity-zero");
    }
  }
  
  /**
   * function positions logo correct
   */
  function giveLogoRightPos() {
    document.getElementById("logo-dektop").classList.add("logo-after");
    document.getElementById("logo-mobile").classList.add("mobile-logo-after");
  }
  
  /**
   * function renders animation for first load
   */
  function startAnimation() {
    if (screen.width <= 1080) {
      startMobileAnimation();
    } else {
      startDesktopAnimation();
    }
  }
  
  /**
   * function renders animation for first load of the mobile site
   */
  function startMobileAnimation() {
    document.getElementById("logo-mobile").classList.add("mobile-logo-after");
    document.getElementById("card").classList.remove("opacity-zero");
    document.getElementById("sign-up-mobile").classList.remove("opacity-zero");
    document
      .getElementById("logo-mobile-cover")
      .classList.add("mobile-logo-after");
    document.getElementById("screen-cover").classList.add("opacity-zero");
    setTimeout(removeScreenCover, 500);
  }
  
  /**
   * funciton removes screen cover for mobile animation
   */
  function removeScreenCover() {
    document.getElementById("screen-cover").style = "display:none;";
  }
  
  /**
   * function renders animation for first load of the desktop site
   */
  function startDesktopAnimation() {
    document.getElementById("logo-dektop").classList.add("logo-after");
    document.getElementById("card").classList.remove("opacity-zero");
    document.getElementById("sign-up-desktop").classList.remove("opacity-zero");
  }
  