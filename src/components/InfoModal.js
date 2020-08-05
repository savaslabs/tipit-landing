import React, { useContext } from "react";
import Modal from "react-modal";
import { Title } from "./Title";
import { Dashes } from "./Dashes";
import AppContext from "./AppContext";
import styles from "../theme/appstyles.module.css";

export const InfoModal = () => {
  Modal.setAppElement("#root");

  const context = useContext(AppContext);
  const theme = context.theme;
  const { colors } = context.useTheme();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // @TODO can probably be removed
  }

  function closeModal() {
    setIsOpen(false);
  }

  const domRect = document
    .getElementById("tipit-preview")
    ?.getBoundingClientRect();

  const overlayStyle = {
    height: domRect?.height - 20,
    left: domRect?.left,
    top: domRect?.top,
    width: domRect?.width,
    margin: 10,
    background: null,
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={{
          overlay: overlayStyle,
          content: {
            backgroundColor: colors.background,
            border: "none",
            width: 375,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
      >
        <div className={styles.container} style={{ color: colors.text }}>
          <div
            className={styles.inputRow}
            style={{
              alignItems: "baseline",
              justifyContent: "space-between",
              marginTop: -10,
            }}
          >
            <button
              className={styles.button}
              style={{
                padding: 15,
                border: "none",
                backgroundColor: colors.background,
              }}
              onClick={closeModal}
            >
              <img
                className={styles.icon}
                src={
                  theme === "light"
                    ? require("../assets/x-close.svg")
                    : require("../assets/x-close-pink.svg")
                }
                alt="close button"
              />
            </button>
            <div>
              <Title />
            </div>
            <div style={{ paddingLeft: "14%" }}></div>
          </div>
          <Dashes />
          <div>
            <div
              className={styles.normalText}
              style={{ textAlign: "center", paddingTop: 15 }}
            >
              What is this app?
            </div>
            <div
              className={styles.label}
              style={{ textAlign: "center", paddingTop: 15 }}
            >
              A means to enhance palindromic whimsy.
            </div>
            <div
              className={styles.footer}
              style={{ position: "absolute", bottom: 10, width: "90%" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>(c) Savas Labs 2020</div>
                <div style={{ paddingRight: 10 }}>
                  <img
                    alt="Savas logo - Ava the owl"
                    src={require("../assets/ava-blue.svg")}
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a style={{ color: colors.link }} href="https://savaslabs.com">
                  Learn more about our #labs initiative.
                </a>
                <div>
                  <img
                    style={{ textAlign: "center" }}
                    src={require("../assets/labs.svg")}
                    alt={"Savas labs initiative logo"}
                  />
                </div>
              </div>
              <Dashes />
            </div>
          </div>
        </div>
      </Modal>
      <button
        type="image"
        id="openInfo"
        style={{
          padding: 5,
          border: "none",
          backgroundColor: colors.background,
        }}
        onClick={openModal}
      >
        <img
          className={styles.icon}
          src={
            theme === "light"
              ? require("../assets/info.svg")
              : require("../assets/info-white.svg")
          }
          alt="info icon"
        />
      </button>
    </>
  );
};

export default InfoModal;
