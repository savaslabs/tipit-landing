import React, { useContext, useState } from "react";
import AppContext from "./AppContext";
import { Header } from "./Header";
import { Calculator } from "./Calculator";
import { LabsLogoDesktop } from "./LabsLogoDesktop";

export const Landing = () => {
  const context = useContext(AppContext);
  const { colors } = context.useTheme();

  // Simulate a focus state for the dark mode toggle.
  const [stroke, setStroke] = useState("none");
  const handleToggleFocus = () => {
    stroke === "none" ? setStroke("lightgray") : setStroke("none");
  };

  // Initiate the background digit animation.
  const canvasRef = React.useRef(null);
  const [canvasContext, setCanvasContext] = React.useState(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;

      ctx.font = "20px JetBrains Mono";
      ctx.fillStyle = "rgba(102, 199, 112, .08)";

      const fontSize = 21;
      const columns = Math.floor(ctx.canvas.width / fontSize);
      const rows = Math.floor(ctx.canvas.height / fontSize);

      const binChars = ["0", "1"];
      const bits = [];
      const bitHeight = fontSize;
      const bitWidth = fontSize;

      // Populate array of 'bits'
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
          bits.push({
            x: c * bitWidth,
            y: r * bitHeight,
            value: binChars[Math.floor(Math.random() * binChars.length)],
            hasDrawn: false,
          });
        }
      }

      // Vars for manually calculating frame rate
      const fps = 10;
      const interval = 1000 / fps;
      let now;
      let then = Date.now();
      let delta;

      // Draw all bits once before starting animation
      for (let bit of bits) {
        ctx.clearRect(bit.x, bit.y, bitWidth, bitHeight);
        ctx.fillText(bit.value, bit.x, bit.y + bitHeight);
        bit.hasDrawn = true;
      }

      function draw() {
        const raf = window.requestAnimationFrame(draw);
        now = Date.now();
        delta = now - then;

        if (delta > interval) {
          for (let bit of bits) {
            if (bit.hasDrawn === true && Math.random() * 100 > 95) {
              // If passes the randomness check
              let newVal =
                bit.value === binChars[1] ? binChars[0] : binChars[1];

              ctx.clearRect(bit.x, bit.y, bitWidth, bitHeight);
              ctx.fillText(newVal, bit.x, bit.y + bitHeight);
              bit.value = newVal;
            }
          }
          then = now - (delta % interval);
        }
      }
      draw();

      if (ctx) {
        setCanvasContext(ctx);
      }
    }
  }, [canvasContext]);

  return (
    <>
      <main className="main">
        <div className="container h-100">
          <div className="row h-100 justify-space-between">
            <div className="col-lg-7 my-auto">
              <h1 className="my-4">tipit</h1>
              <p className="main__text pb-4">
                Why leave boring tip amounts when you can tip in palindrome?
                Excellent question! Tipit quickly calculates gratuity that will
                add a little bit of numerical fun to your next bill.
              </p>
              <div className="row w-100 my-auto justify-content-between">
                <div className="col-lg-6 highlight__text my-auto">
                  Coming Soon to the <br />
                  App Store & Google Play
                </div>
                <div className="col-lg m-auto">
                  <div className="toggle__wrapper">
                    <input
                      className="toggle-input"
                      id="toggle-input"
                      type="checkbox"
                      onChange={context.toggleTheme}
                      checked={context.theme === "dark"}
                      aria-label="Dark mode toggle"
                      onFocus={handleToggleFocus}
                      onBlur={handleToggleFocus}
                    />
                    <svg
                      className="toggle"
                      width="226"
                      height="78"
                      viewBox="0 0 226 78"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <rect
                          x="10"
                          y="8"
                          width="206"
                          height="58"
                          rx="29"
                          fill="white"
                          stroke={stroke}
                          stroke-width="4"
                        />
                      </g>
                      <rect
                        className="shade"
                        x="10"
                        y="8"
                        width="110"
                        height="58"
                        rx="29"
                      />
                      <path
                        className="moon"
                        d="M179.375 39.4758C178.846 39.0617 178.119 39.0156 177.542 39.3592C172.389 42.4321 165.821 41.6171 161.57 37.3775C157.325 33.1437 156.508 26.6033 159.583 21.4724C159.929 20.8956 159.886 20.1648 159.476 19.6327C159.065 19.1004 158.37 18.876 157.727 19.0675C154.911 19.9053 152.318 21.4498 150.228 23.5342C146.857 26.8968 145 31.3682 145 36.1247C145 40.8813 146.857 45.3526 150.228 48.715C153.705 52.1831 158.272 53.9167 162.839 53.9163C163.571 53.9162 164.303 53.8711 165.031 53.7819C166.049 53.5061 167.083 53.2854 168.125 53.1211C170.807 52.2956 173.331 50.8278 175.45 48.7149C177.541 46.6294 179.09 44.0414 179.931 41.2305C180.124 40.5864 179.903 39.8898 179.375 39.4758Z"
                      />
                      <g className="sun">
                        <path
                          className="sun__part"
                          d="M64.5 45.6492C59.4551 45.6492 55.3507 41.5449 55.3507 36.4999C55.3507 31.4549 59.4551 27.3506 64.5 27.3506C69.5449 27.3506 73.6493 31.455 73.6493 36.4999C73.6493 41.5448 69.5449 45.6492 64.5 45.6492ZM64.5 29.9873C60.909 29.9873 57.9874 32.9089 57.9874 36.4999C57.9874 40.0909 60.9089 43.0125 64.5 43.0125C68.0911 43.0125 71.0126 40.0909 71.0126 36.4999C71.0126 32.9089 68.091 29.9873 64.5 29.9873Z"
                        />
                        <path
                          className="sun__part"
                          d="M64.5 24.2016C63.7719 24.2016 63.1816 23.6113 63.1816 22.8832V15.3184C63.1816 14.5903 63.7719 14 64.5 14C65.2281 14 65.8184 14.5903 65.8184 15.3184V22.8832C65.8184 23.6113 65.2281 24.2016 64.5 24.2016Z"
                        />
                        <path
                          className="sun__part"
                          d="M54.8715 28.19C54.5341 28.19 54.1967 28.0613 53.9393 27.8039L48.5901 22.4547C48.0752 21.9398 48.0752 21.1051 48.5901 20.5902C49.1048 20.0754 49.9396 20.0754 50.4545 20.5902L55.8037 25.9394C56.3185 26.4542 56.3185 27.2889 55.8037 27.8038C55.5463 28.0612 55.2089 28.19 54.8715 28.19Z"
                        />
                        <path
                          className="sun__part"
                          d="M50.8832 37.8184H43.3184C42.5903 37.8184 42 37.2281 42 36.5C42 35.7719 42.5903 35.1816 43.3184 35.1816H50.8832C51.6113 35.1816 52.2016 35.7719 52.2016 36.5C52.2016 37.2281 51.6113 37.8184 50.8832 37.8184Z"
                        />
                        <path
                          className="sun__part"
                          d="M49.5223 52.7959C49.1849 52.7959 48.8475 52.6672 48.5901 52.4097C48.0753 51.8948 48.0753 51.0601 48.5901 50.5453L53.9393 45.1961C54.4542 44.6814 55.289 44.6814 55.8037 45.1961C56.3186 45.711 56.3186 46.5457 55.8037 47.0606L50.4545 52.4098C50.1971 52.6671 49.8597 52.7959 49.5223 52.7959Z"
                        />
                        <path
                          className="sun__part"
                          d="M64.5 58.9999C63.7719 58.9999 63.1816 58.4096 63.1816 57.6815V50.1167C63.1816 49.3886 63.7719 48.7983 64.5 48.7983C65.2281 48.7983 65.8184 49.3886 65.8184 50.1167V57.6815C65.8184 58.4096 65.2281 58.9999 64.5 58.9999Z"
                        />
                        <path
                          className="sun__part"
                          d="M79.4777 52.7958C79.1403 52.7958 78.8029 52.6672 78.5456 52.4097L73.1964 47.0606C72.6815 46.5458 72.6815 45.7111 73.1964 45.1962C73.7111 44.6813 74.5459 44.6813 75.0608 45.1962L80.41 50.5453C80.9248 51.0602 80.9248 51.8949 80.41 52.4097C80.1525 52.6671 79.8151 52.7958 79.4777 52.7958Z"
                        />
                        <path
                          className="sun__part"
                          d="M85.6816 37.8184H78.1168C77.3887 37.8184 76.7984 37.2281 76.7984 36.5C76.7984 35.7719 77.3887 35.1816 78.1168 35.1816H85.6816C86.4097 35.1816 87 35.7719 87 36.5C87 37.2281 86.4097 37.8184 85.6816 37.8184Z"
                        />
                        <path
                          className="sun__part"
                          d="M74.1285 28.1899C73.7911 28.1899 73.4537 28.0612 73.1964 27.8037C72.6815 27.2889 72.6815 26.4542 73.1964 25.9393L78.5456 20.5902C79.0603 20.0755 79.8951 20.0753 80.41 20.5902C80.9248 21.105 80.9248 21.9397 80.41 22.4546L75.0608 27.8037C74.8033 28.0611 74.4658 28.1899 74.1285 28.1899Z"
                        />
                        <circle
                          className="sun__part"
                          cx="64.5"
                          cy="36.5002"
                          r="8.35714"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d"
                          x="0"
                          y="0"
                          width="226"
                          height="78"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="5" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div
                style={{
                  display: `flex`,
                  justifyContent: `center`,
                  marginTop: `5%`,
                }}
              >
                <p
                  style={{
                    fontSize: `21px`,
                    fontWeight: `600`,
                    marginRight: `10px`,
                  }}
                >
                  try me
                </p>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="try-me__arrow"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.8246 0H10.4153V16.1029H0L13.5964 27.9997L27.1927 16.1029H16.8246V0Z"
                  />
                </svg>
              </div>
              <div
                className="calculator"
                style={{
                  backgroundColor: colors.background,
                  color: colors.text,
                }}
                id="tipit-preview"
              >
                <span className="calculator__top"></span>
                <div
                  className="w-100"
                  style={{
                    overflow: `hidden`,
                  }}
                >
                  <Header />
                  <Calculator />
                </div>
              </div>
            </div>
          </div>
        </div>
        <canvas id="canvas" ref={canvasRef}></canvas>
      </main>
      <footer className="footer">
        <div className="d-none d-lg-block container text-left">
          <a href="https://www.savaslabs.com/">
            <LabsLogoDesktop />
          </a>
        </div>
        <div className="d-lg-none text-center footer--mobile">
          <a href="https://www.savaslabs.com/">
            <img
              src={
                context.theme === "light"
                  ? require("../assets/labs-logo-mobile-light.svg")
                  : require("../assets/labs-logo-mobile-dark.svg")
              }
              alt="dashes"
            />
          </a>
        </div>
      </footer>
    </>
  );
};
