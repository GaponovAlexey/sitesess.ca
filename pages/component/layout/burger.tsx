import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import s from "../../../styles/layout.module.scss";

function Burger({ setIsOpen }: any) {
  const loc = useRouter();
  // Scroll to anchors
  SlowScroll();
  return (
    <div className={s.burger_main}>
      <section className={s.burger_wrapper}>
        <div onClick={() => setIsOpen(false)} className={s.burger_routs}>
          {loc.pathname == "/" ? (
            <Link href="#home" className="js-scroll">
              Home
            </Link>
          ) : (
            <Link href="/">Home</Link>
          )}
          {loc.pathname == "/" ? (
            <a href="#landing" className="js-scroll">
              landing
            </a>
          ) : (
            <Link href="/#landing">landing</Link>
          )}
          {loc.pathname == "/" ? (
            <a href="#strengths" className="js-scroll">
              Our strengths
            </a>
          ) : (
            <Link href="/#strengths">Our strengths</Link>
          )}
          {loc.pathname == "/" ? (
            <a href="#application" className="js-scroll">
              Contact the manager
            </a>
          ) : (
            <Link href="/#application">Contact the manager</Link>
          )}
          {loc.pathname == "/" ? (
            <a href="#marketing" className="js-scroll">
              Marketing
            </a>
          ) : (
            <Link href="/#marketing">Marketing</Link>
          )}
          {/* right */}
          <Link href="/team">Team</Link>
        </div>
        {/* ico */}
      </section>
      <section
        className=" w-screen h-full cursor-pointer  "
        onClick={() => setIsOpen(false)}
      ></section>
    </div>
  );
}

const SlowScroll = () =>
  useLayoutEffect(() => {
    const smoothScroll = function (targetEl: any, duration: any) {
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top;
      let startPosition = window.pageYOffset;
      let startTime = null as any;

      const ease = function (t: any, b: any, c: any, d: any) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = function (currentTime: any) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);
    };

    const scrollTo = function () {
      const links = document.querySelectorAll(".js-scroll");
      links.forEach((each) => {
        each.addEventListener<any>("click", function (any): void {
          const currentTarget = this.getAttribute("href") as any
          smoothScroll(currentTarget, 1000);
        });
      });
    };
    scrollTo();
  });

export default Burger;
