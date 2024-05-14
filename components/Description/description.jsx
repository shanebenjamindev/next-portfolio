import styles from "./style.module.css";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "@/common/RoundedButton";

export default function Description() {

  const phrase =
    "I am helping brands to stand out in the digital era.Together we will set the new status quo. Always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div className={styles.descriptionContainer}>
      <div ref={description} className={styles.description}>
        <div className={`${styles.body} md:flex`}>
          <p>
            Hello, my name is Giang. <br></br>
            {phrase.split(" ").map((word, index) => {
              return (
                <span key={index} className={styles.mask}>
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
          <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
            Can Tho University of Technology
            <br></br>
            09/2018 - 09/2022
            <br></br>A Bachelor of Science (BS)
            <br></br>
            Degree Major: Information Systems
            <br></br>
          </motion.p>


          <div data-scroll data-scroll-speed={0.2}>
            <div className={styles.button}>
              <Image
                src="/images/projects/avatar.jpg"
                fill={true}
                style={{ objectFit: "cover" }}
                alt="avatar"
              />

            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-extralight">SKILLS</h1>
          <p>(​MERN)​ ​MongoDB,​ ​Express,​ ​ReactJS,​ ​NodeJS, NextJs, RESTful APIs, MySQL</p>
          <p>Figma, WordPress, PHP, C#,</p>
          <p>Git (GitHub, SourceTree)</p>
          <p>English, Teamwork, Problem solving, Clean code </p>
        </div>
      </div>
    </div>
  );
}
