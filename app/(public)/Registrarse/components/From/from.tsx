"use client";

import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-hot-toast";
// import Calendar from "react-calendar";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Calendar = dynamic(() => import("react-calendar"), {
  loading: () => (
    <div className="h-96 w-full bg-gray-300 animate-pulse rounded-2xl"></div>
  ),
  ssr: false,
});

const handleURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://farmaciatorresv1.vercel.app"
    : "http://localhost:3000";

export default function From({ classNames }: { classNames: string }) {
  const { data: session }: any = useSession();
  const router = useRouter();
  const [aceptTerminos, setAceptTerminos] = useState(false);
  const [value, onChange] = useState<Date>(new Date());
  const [cumpleanos, setCumpleanos] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirm_password: "",
    nombres: "",
    apellidos: "",
    nit: "",
    celular: "",
    telefono: "",
    fecha_nacimiento: "",
    vidaSana: true,
  });

  const [credentialsActive, setCredentialsActive] = useState({
    email: "",
    password: "",
    confirm_password: "",
    nombres: "",
    apellidos: "",
    nit: "",
    celular: "",
    telefono: "",
    fecha_nacimiento: "",
    vidaSana: true,
  });
  // const recaptchaRef: any = createRef();

  const handleChangeCumpleanos = (e: any) => {
    onChange(e);
    const YYYY = e.getFullYear();
    let MM = e.getMonth() + 1;
    if (MM < 10) {
      MM = `0${MM}`;
    }
    let DD = e.getDate();
    if (DD < 10) {
      DD = `0${DD}`;
    }
    const Fecha = `${YYYY}${MM}${DD}`;
    const fecha = new Date(
      `${Fecha.slice(0, 4)}-${Fecha.slice(4, 6)}-${Fecha.slice(6, 8)}`
    );
    setCumpleanos(fecha.toISOString().slice(0, 10).replace(/-/g, "/"));
    setCredentials({
      ...credentials,
      fecha_nacimiento: Fecha,
    });
  };

  const handleChangeInput = (e: any) => {
    if (e.target.name === "vida-sana") {
      setCredentials({
        ...credentials,
        vidaSana: e.target.checked,
      });
    } else {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
      });
    }
  };

  // const onReCAPTCHAChange = (captchaCode: any) => {
  //   if (!captchaCode) {
  //     return;
  //   }

  //   setCredentialsActive(credentials);

  //   recaptchaRef.current.reset();
  // };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (aceptTerminos === false) {
      toast.error("Debe aceptar los términos y condiciones para continuar.", {
        style: {
          border: "1px solid red",
          padding: "16px",
        },
      });
    } else {
      setCredentialsActive(credentials);
      // recaptchaRef.current.execute();
    }
  };

  useEffect(() => {
    fetch(`${handleURL()}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "force-cache",
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        confirm_password: credentials.confirm_password,
        nombres: `${credentials.nombres} ${credentials.apellidos}`,
        nit: credentials.nit,
        celular: credentials.celular,
        telefono: credentials.telefono,
        fecha_nacimiento: credentials.fecha_nacimiento,
        vidaSana: credentials.vidaSana,
      }),
    })
      .then((response) => response.json())
      .then((Data) => {
        if (Data) {
          if (!Data.success) {
            toast.error(Data.message, {
              duration: 2000,
              style: {
                border: "1px solid red",
                padding: "16px",
              },
            });
            return;
          }
          signIn("credentials", {
            email: credentials.email,
            password: credentials.password,
            redirect: true,
            callbackUrl: "/",
          });
          toast.success(
            `${Data.data.nombres}, Vienbenid@ a la familia Farmacia torres`,
            {
              duration: 6000,
              style: {
                border: "1px solid green",
                padding: "16px",
              },
            }
          );
        }
      });
  }, [credentialsActive]);

  if (session) {
    router.back();
  }

  return (
    <div className={classNames}>
      <form
        className="space-y-5 mt-6 text-black"
        action=""
        onSubmit={handleSubmit}
      >
        {/* Nombre apellido y telefono */}
        <div className="lg:flex block">
          <div className="lg:w-1/2 w-full">
            <label
              htmlFor="text"
              className="block mb-2 text-xs font-semibold text-gray-700"
            >
              Nombre
            </label>
            <div className="mt-1">
              <input
                onChange={handleChangeInput}
                id="nombres"
                name="nombres"
                type="text"
                autoComplete="nombres"
                required
                placeholder="Ingresa tu(s) nombre(s)"
                className="px-3 py-2 border w-full border-gray-300 rounded-md shadow-sm placeholder-gray-300 focus:outline-none
                                                        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-5 lg:mt-0 lg:ml-5">
            <label
              htmlFor="text"
              className="block mb-2 text-xs font-semibold text-gray-700"
            >
              Apellido
            </label>
            <div className="mt-1 ">
              <input
                onChange={handleChangeInput}
                id="apellidos"
                name="apellidos"
                type="text"
                autoComplete="apellidos"
                required
                placeholder="Ingresa tu(s) apellido(s)"
                className="px-3 py-2 border w-full border-gray-300 rounded-md shadow-sm placeholder-gray-300 focus:outline-none
                                                        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-5 lg:mt-0 lg:ml-5">
            <label
              htmlFor="text"
              className="block mb-2 text-xs font-semibold text-gray-700"
            >
              Telefono
            </label>
            <div className="mt-1">
              <input
                onChange={handleChangeInput}
                id="telefono"
                name="telefono"
                type="text"
                autoComplete="lastnames"
                required
                placeholder="Ingresa número"
                className="px-3 py-2 border w-full border-gray-300 rounded-md shadow-sm placeholder-gray-300 focus:outline-none
                                                        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* cedula y telefono */}
        <div className="lg:flex block">
          <div className="lg:w-1/2 w-full mt-5 lg:mt-0">
            <label
              htmlFor="text"
              className="block mb-2 text-xs font-semibold text-gray-700"
            >
              Nit o Cedula
            </label>
            <div className="mt-1">
              <input
                onChange={handleChangeInput}
                id="nit"
                name="nit"
                type="text"
                autoComplete="nit"
                required
                placeholder="Ingresa tu Nit o CedulaS"
                className="px-3 py-2 border w-full border-gray-300 rounded-md shadow-sm placeholder-gray-300 focus:outline-none
                                                        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-5 lg:mt-0 lg:ml-6">
            <label
              htmlFor="text"
              className="block mb-2 text-xs font-semibold text-gray-700"
            >
              Celular
            </label>
            <div className="mt-1">
              <input
                onChange={handleChangeInput}
                id="celular"
                name="celular"
                type="tex"
                autoComplete="tell"
                required
                placeholder="Ingresa numero"
                className="px-3 py-2 border w-full border-gray-300 rounded-md shadow-sm placeholder-gray-300 focus:outline-none
                                                        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* fecha de nacimiento y vida sana */}
        <div className="lg:flex block">
          <div className="lg:w-1/2 w-full mt-5 lg:mt-0">
            <label
              htmlFor="text"
              className="block mb-2 text-xs font-semibold text-gray-700"
            >
              Fecha de nacimiento
            </label>
            <div className="px-3 text-gray-300 py-2 border w-full border-gray-300 rounded-md shadow-sm placeholder-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              {cumpleanos ? (
                <span className="text-gray-800">{cumpleanos}</span>
              ) : (
                "Secionar fecha de nacimiento"
              )}
            </div>
            <div>
              <div className="mt-4">
                <Calendar onChange={handleChangeCumpleanos} value={value} />
              </div>
            </div>
          </div>

          <div className="lg:ml-6 lg:w-1/2 w-full mt-5 lg:mt-0">
            <label
              htmlFor="text"
              className="block mb-2 text-xs font-semibold text-gray-700"
            >
              Club vida Sana
            </label>
            <div className="mt-1">
              <div className="flex gap-4 ">
                <input
                  onChange={handleChangeInput}
                  id="vida-sana"
                  name="vida-sana"
                  type="checkbox"
                  className="mt-5"
                  defaultChecked
                />
                <Link
                  href={"/"}
                  className="block underline mb-2 text-xs font-semibold text-gray-700 mt-5 hover:text-bluet"
                >
                  Conoce Todo los beneficios
                </Link>
                <Image
                  alt=""
                  width={130}
                  height={40}
                  src={"/images/logos/Club.svg"}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-xs font-semibold text-gray-700"
          >
            Correo electrónico
          </label>
          <div className="mt-1">
            <input
              onChange={handleChangeInput}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Ingresa tu correo"
              className="px-3 py-2 border w-full border-gray-300 rounded-md shadow-sm placeholder-gray-300 focus:outline-none
                                                        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* password  */}
        <div>
          <label
            htmlFor="password"
            className="block  mb-2 font-semibold text-xs text-gray-700"
          >
            Contraseña
          </label>
          <div className="mt-1">
            <input
              onChange={handleChangeInput}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Ingresa tu contraseña"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-300 
                                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="confirm_password"
            className="block  mb-2 font-semibold text-xs text-gray-700"
          >
            Confirmar contraseña
          </label>
          <div className="mt-1">
            <input
              onChange={handleChangeInput}
              id="confirm_password"
              name="confirm_password"
              type="password"
              autoComplete="confirm password"
              required
              placeholder="Ingresa tu contraseña"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-300 
                                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* terminos y condiciones */}
        <div className="flex gap-4">
          <input
            id="terminos"
            name="terminos"
            type="checkbox"
            onChange={(e) =>
              e.target.checked
                ? setAceptTerminos(true)
                : setAceptTerminos(false)
            }
          />
          <label
            htmlFor="terms"
            className="block mb-2 text-xs font-semibold text-gray-700"
          >
            Al crear una cuenta confirmas que has leído y aceptas las
            Condiciones de Uso y la Política de Privacidad, y consientes el
            envío de comunicaciones comerciales en base a tu perfil.
          </label>
        </div>
        {/* Crear cuenta button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium
                                                    text-white bg-bluet hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Crear cuenta
          </button>
        </div>
        {/* <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey="6LcD-LEkAAAAAI7skuGsChoHxHDj-om_rNk-rZ_P"
          onChange={onReCAPTCHAChange}
        /> */}
        <div className="text-xs text-center">
          ¿Ya tienes una cuenta?
          <a href="#" className="ml-3 font-medium text-pumpkin underline">
            Inicia sesión
          </a>
        </div>
      </form>
    </div>
  );
}
