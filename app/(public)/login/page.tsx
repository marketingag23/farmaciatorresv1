"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { Container } from "@ft/components";
import { useSearchParams } from "next/navigation";

export default function Login() {
  // console.log(session.user.data.nombres)
  const searchParams = useSearchParams();
  const callBackUrl = searchParams.get("callbackUrl");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const hadleSubmit = async (e: any) => {
    e.preventDefault();
    await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: true,
      callbackUrl: String(callBackUrl),
    });
  };

  return (
    <Container>
      <div className="border-gray-300 rounded-lg border-2 shadow-md relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-6 w-2/4">
        <form className="space-y-5" onSubmit={hadleSubmit} action="">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xs font-semibold text-gray-700"
            >
              Correo electrónico
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleChange}
                required
                placeholder="Ingresa tu correo"
                className="px-3 py-2 border w-full border-gray-300 rounded-md shadow-sm placeholder-gray-300 focus:outline-none
                                                        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block  mb-2 font-semibold text-xs text-gray-700"
            >
              Contraseña
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={handleChange}
                required
                placeholder="Ingresa tu contraseña"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-300 
                                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="text-xs text-center">
            <a href="#" className="font-medium text-pumpkin underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium
                                                    text-white bg-bluet hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
        <div className="text-center text-xs">
          <a href="/Registrarse" className="font-semibold text-bluet underline">
            Crear una cuenta
          </a>
        </div>
      </div>
    </Container>
  );
}
