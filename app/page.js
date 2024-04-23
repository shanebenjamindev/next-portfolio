"use client"

import Landing from "@/components/Landing/landing";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion'
import Preloader from "@/components/Preloader/preloader";
import Projects from "@/components/Projects/projects";
export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    (

      async () => {

        const LocomotiveScroll = (await import('locomotive-scroll')).default

        const locomotiveScroll = new LocomotiveScroll({ el: document.querySelector('[data-scroll]'), smooth: true, smoothMobile: true })
        setTimeout(() => {

          setIsLoading(false);

          document.body.style.cursor = 'default'

          window.scrollTo(0, 0);

        }, 2000)
      }

    )()

  }, [])

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Projects />
    </main>
  );
}
