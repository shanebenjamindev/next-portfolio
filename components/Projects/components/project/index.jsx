"use client";
import React from "react";
import styles from "./style.module.css";

export default function index({ index, title, manageModal, role }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={`${styles.project} md:flex`}
    >
      <h2>{title}</h2>
      <p>{role}</p>
    </div>
  );
}
