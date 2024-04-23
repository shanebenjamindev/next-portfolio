"use client";
import styles from "./style.module.css";
import { useState, useEffect, useRef } from "react";
import Project from "./components/project";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

const projects = [
  {
    id: "1",
    title: "SaiGonTown",
    role: "Wordpress, CSS, Figma, PHP",
    url: "https://saigontown.vn",
    src: "saigontown.png",
    color: "#fff7004d",
  },
  {
    id: "2",
    title: "HiLink Landing Page",
    role: "NextJs, Typescript, Lenis, Gsap, TailwindCSS",
    url: "https://hilink-landing-page.vercel.app/",
    src: "hilink.png",
    color: "#00410881",
  },
  {
    id: "3",
    title: "The Diamond City",
    role: "ReactJS (redux--toolkit, react-router-dom,...), HTML, CSS, Bootstrap",
    url: "https://diamondcity-site.vercel.app",
    src: "thediamoncity.png",
    color: "#6c6700bd",
  },
  {
    id: "4",
    title: "Restaurant Projects",
    role: "HTML, CSS, Bootstrap, jQuery, CSS Animation, Responsive",
    url: "https://capstone-project-vpgiang0205.vercel.app",
    src: "restaurant.png",
    color: "#ffc8006d",
  },
  {
    id: "5",
    title: "CloudPot Training",
    role: "HTML, CSS, JavaScript, ReactJS (react-router-dom, aos)",
    url: "https://cloudpot.vercel.app",
    src: "cloudpottrainingsite.png",
    color: "#00632d81",
  }
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <section
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
    >
      <div className={`${styles.body} sm:flex flex-col `}>
        {projects.map((project, index) => {
          return (
            <a className="w-full" href={project.url} key={index}>
              <Project
                index={index}
                title={project.title}
                manageModal={manageModal}
                role={project.role}
                url={project.url}
              />
            </a>
          );
        })}
      </div>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {projects?.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <Image
                    src={`/images/projects/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </section>
  );
}
