"use client";

import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import ReactGA from "react-ga";
import { setCookie, getCookie } from "cookies-next";
import { FaCookieBite } from "react-icons/fa";
import Link from "next/link";

// import { cookies } from "next/headers";

function CookiesAccept() {
  const necessaryCookiesName = "cookies__required-cookies-farmacia-torres";
  const analysisCookiesName = "cookies__analysis-cookies-farmacia-torres";

  const [isVisibleAdvice, setIsVisibleAdvice] = useState(false);
  // const [isAccoptAnalysisCookies, setIsAccoptAnalysisCookies] = useState(false);

  // const cookieStore = cookies();

  const handleDeclineAll = () => {
    setCookie(necessaryCookiesName, "disallow-cookie", { maxAge: 60 });
    setIsVisibleAdvice(false);
  };

  const handleAcceptAll = () => {
    setCookie(necessaryCookiesName, "accept-cookie", { maxAge: 60 * 6 * 24 });
    setCookie(analysisCookiesName, "accept-analysis-cookie", {
      maxAge: 60 * 60 * 24 * 30,
    });
    setIsVisibleAdvice(false);
    // setIsAccoptAnalysisCookies(true);
  };

  useEffect(() => {
    const necessaryCookies = getCookie(necessaryCookiesName);
    // const analysisCookies = getCookie(analysisCookiesName);

    // const necessaryCookies = cookieStore.get(
    //   "cookies__required-cookies-farmacia-torres"
    // );
    // const analysisCookies = cookieStore.get(
    //   "cookies__analysis-cookies-farmacia-torres"
    // );

    if (necessaryCookies) {
      setIsVisibleAdvice(false);
    } else {
      setIsVisibleAdvice(true);
    }

    // if (analysisCookies) {
    //   setIsAccoptAnalysisCookies(true);
    // } else {
    //   setIsAccoptAnalysisCookies(false); // ley rgpd
    // }
  }, []);

  // useEffect(() => {
  //   if (isAccoptAnalysisCookies) {
  //     if (process.env.NEXT_API_GOOGLE_ANALYTIC) {
  //       ReactGA.initialize(process.env.NEXT_API_GOOGLE_ANALYTIC);
  //       ReactGA.pageview(window.location.pathname + window.location.search);

  //       // const handleRouteChange = (url: string) => {
  //       //   ReactGA.pageview(url);
  //       // }

  //       // router.events.off("routeChangeComplete", handleRouteChange)

  //       return () => {
  //         null
  //         // router.events.off("hashChangeComplete", handleRouteChange)
  //       }
  //     }
  //   }
  // }, [isAccoptAnalysisCookies]);

  return (
    <>
      <Transition appear show={isVisibleAdvice} as={Fragment}>
        <Dialog as="div" className="relative z-50 " onClose={() => ""}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full  p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="absolute bottom-6 w-full h-56 max-w-xs transform overflow-hidden rounded-2xl bg-white p-6 text-center shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Cookies
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Utilizamos cookies propias y de terceros para mejorar
                      nuestros servicios.{" "}
                      <Link
                        href="/"
                        className="text-bluet  focus:outline-none  "
                      >
                        Leer más
                      </Link>
                    </p>
                  </div>

                  <div className="mt-4 justify-center content-center">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-bluet px-4 py-2 text-sm font-medium text-white hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-bluet focus-visible:ring-offset-2"
                      onClick={() => handleAcceptAll()}
                    >
                      <FaCookieBite className="h-5 mr-3" />
                      Aceptar cookies
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-xs font-light text-blue-900 focus:outline-none"
                      onClick={() => handleDeclineAll()}
                    >
                      Rechazar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CookiesAccept;
