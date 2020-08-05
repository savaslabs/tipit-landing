import React, { useContext } from "react";
import Modal from "react-modal";
import { Title } from "./Title";
import { Dashes } from "./Dashes";
import { Settings } from "./Settings.js";
import AppContext from "./AppContext";
import styles from "../theme/appstyles.module.css";

export const SettingsModal = () => {
  Modal.setAppElement("#root");

  const context = useContext(AppContext);
  const theme = context.theme;
  const { colors } = context.useTheme();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
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
    <div>
      <Modal
        isOpen={modalIsOpen}
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
            zIndex: -1000,
          },
        }}
      >
        <div className={styles.container}>
          <div
            className={styles.inputRow}
            style={{
              marginTop: -10,
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <div style={{ paddingLeft: "14%" }}></div>
            <div>
              <Title />
            </div>
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
          </div>
          <Dashes />
          <Settings />
          <Dashes />
        </div>
      </Modal>
      <button
        id="openSettings"
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
              ? require("../assets/settings.svg")
              : require("../assets/settings-white.svg")
          }
          alt="settings icon"
        />
      </button>
    </div>
  );
};

export default SettingsModal;
