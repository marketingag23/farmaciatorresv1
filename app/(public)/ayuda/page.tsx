const Ayuda = () => {
  return (
    <div>
      <section className="text-gray-700">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-13">
            <h1 className="sm:text-3xl text-2xl font-semibold text-center text-gray-900 mb-4">
              ¿Tienes alguna duda?
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Cuándo recibiré mis artículos?
                </summary>

                <span>
                  Recibirás tu pedido en la dirección indicada en un plazo de 1
                  a 5 días hábiles.
                </span>
              </details>
              <details className="mb-6">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  ¿Cómo puedo hacer el seguimiento de mi pedido?
                </summary>

                <span>
                  Te enviaremos un correo electrónico con el seguimiento de
                  envío y un SMS el mismo día de la entrega para que te
                  organices. Recuerda que también puedes acceder al apartado de
                  tu área privada Mis compras y hacer el seguimiento en
                  cualquier momento.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Puedo devolver un producto?
                </summary>

                <span>
                  Te enviaremos un correo electrónico con el seguimiento de
                  envío y un SMS el mismo día de la entrega para que te
                  organices. Recuerda que también puedes acceder al apartado de
                  tu área privada Mis compras y hacer el seguimiento en
                  cualquier momento.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Qué pasa si no estoy en el momento de la entrega?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Qué métodos de pago puedo utilizar?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              {/* <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Puedo devolver un producto?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ayuda;
