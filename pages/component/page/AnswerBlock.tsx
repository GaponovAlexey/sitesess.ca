"use client"
import { useState } from "react"
import s from "../../../styles/main.module.scss"

const AnswerBlock = () => {
  const [isActive1, setIsActive1] = useState(false)
  const [isActive2, setIsActive2] = useState(false)
  const [isActive3, setIsActive3] = useState(false)
  const [isActive4, setIsActive4] = useState(false)
  const [isActive5, setIsActive5] = useState(false)
  const [isActive6, setIsActive6] = useState(false)

  return (
    <div className={s.answerWrapper}>
      <div>
        <div className="hs-accordion-group">
          <div className="hs-accordion active" id="hs-basic-heading-one">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600
               group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left
                text-gray-400 transition hover:text-gray-100 dark:hs-accordion-active:text-blue-500
                 dark:text-gray-100 dark:hover:text-gray-100"
              aria-controls="hs-basic-collapse-one"
              onClick={() => setIsActive1(!isActive1)}
            >
              <ElementSvg />
              Accordion #1
            </button>
            <div
              id="hs-basic-collapse-one"
              className={`${
                isActive1 ? "" : "hidden"
              } hs-accordion-content  w-full overflow-hidden transition-[height] duration-300`}
              aria-labelledby="hs-basic-heading-one"
            >
              <div>
                <p className="text-gray-800 dark:text-gray-200">
                  <em>text.</em> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each
                  element. These classes control the overall appearance, as well
                  as the showing and hiding via CSS transitions.
                </p>
              </div>
            </div>
          </div>

          <div className="hs-accordion" id="hs-basic-heading-two">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600
               group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left
                text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500
                 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-collapse-two"
              onClick={() => setIsActive2(!isActive2)}
            >
              <ElementSvg />
              Accordion #2
            </button>
            <div
              id="hs-basic-collapse-two"
              className={`${
                isActive2 ? "" : "hidden"
              } hs-accordion-content  w-full overflow-hidden transition-[height] duration-300`}
              aria-labelledby="hs-basic-heading-two"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the third text accordion body.</em> It is hidden by
                default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the
                overall appearance, as well as the showing and hiding via CSS
                transitions.
              </p>
            </div>
          </div>

          <div className="hs-accordion" id="hs-basic-heading-three">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-collapse-three"
              onClick={() => setIsActive3(!isActive3)}
            >
              <ElementSvg />
              Accordion #3
            </button>
            <div
              id="hs-basic-collapse-three"
              className={`${
                isActive3 ? "" : "hidden"
              } hs-accordion-content  w-full overflow-hidden transition-[height] duration-300`}
              aria-labelledby="hs-basic-heading-three"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the third item accordion body.</em> It is hidden by
                default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the
                overall appearance, as well as the showing and hiding via CSS
                transitions.
              </p>
            </div>
          </div>
          
          <div className="hs-accordion" id="hs-basic-heading-three">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-collapse-three"
              onClick={() => setIsActive4(!isActive4)}
            >
              <ElementSvg />
              Accordion #4
            </button>
            <div
              id="hs-basic-collapse-three"
              className={`${
                isActive4 ? "" : "hidden"
              } hs-accordion-content  w-full overflow-hidden transition-[height] duration-300`}
              aria-labelledby="hs-basic-heading-three"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the third item accordion body.</em> It is hidden by
                default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the
                overall appearance, as well as the showing and hiding via CSS
                transitions.
              </p>
            </div>
          </div>

          <div className="hs-accordion" id="hs-basic-heading-three">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-collapse-three"
              onClick={() => setIsActive5(!isActive5)}
            >
              <ElementSvg />
              Accordion #5
            </button>
            <div
              id="hs-basic-collapse-three"
              className={`${
                isActive5 ? "" : "hidden"
              } hs-accordion-content  w-full overflow-hidden transition-[height] duration-300`}
              aria-labelledby="hs-basic-heading-three"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the third item accordion body.</em> It is hidden by
                default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the
                overall appearance, as well as the showing and hiding via CSS
                transitions.
              </p>
            </div>
          </div>

          <div className="hs-accordion" id="hs-basic-heading-three">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-collapse-three"
              onClick={() => setIsActive6(!isActive6)}
            >
              <ElementSvg />
              Accordion #6
            </button>
            <div
              id="hs-basic-collapse-three"
              className={`${
                isActive6 ? "" : "hidden"
              } hs-accordion-content  w-full overflow-hidden transition-[height] duration-300`}
              aria-labelledby="hs-basic-heading-three"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the third item accordion body.</em> It is hidden by
                default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the
                overall appearance, as well as the showing and hiding via CSS
                transitions.
              </p>
            </div>
          </div>
        </div>
        {/* <LandingUse /> */}
      </div>
      <div>two</div>
    </div>
  )
}

export default AnswerBlock

const ElementSvg = () => {
  return (
    <>
      <svg
        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.62421 7.86L13.6242 7.85999"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8.12421 13.36V2.35999"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.62421 7.86L13.6242 7.85999"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  )
}
