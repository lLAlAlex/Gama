import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        fontFamily: "'Segoe UI', sans-serif",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "1.5rem",
          minWidth: "320px",
          maxWidth: "90%",
          maxHeight: "90vh",
          overflowY: "auto",
          overflowX: "hidden",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          position: "relative",
          color: "#333",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative cultural flair */}
        <div
          style={{
            position: "absolute",
            top: "-1rem",
            right: "-1rem",
            width: "3rem",
            height: "3rem",
            background:
              "url('/assets/garuda-icon.svg') no-repeat center/contain",
          }}
          aria-hidden
        />

        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#aaa",
            cursor: "pointer",
            transition: "color 0.2s",
          }}
          onMouseOver={(e) => {
            (e.target as HTMLButtonElement).style.color = "#d62828";
          }}
          onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.color = "#aaa";
          }}
          aria-label="Close modal"
        >
          &times;
        </button>

        {title && (
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "1rem",
              color: "#d62828",
            }}
          >
            {title}
          </h2>
        )}

        <div
          style={{
            fontSize: "1rem",
            fontWeight: 400,
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
