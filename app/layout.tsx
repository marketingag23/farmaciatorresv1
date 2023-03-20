import "./tailwind-globals.scss";
import { HeaderContainer, FooterContainer } from "@ft/app/components";
import { Aos, Cookies, Notifications } from "@ft/components";
import { CardMenu } from "@ft/app/components/Header/components/HeaderCenter/components";
import localFont from "@next/font/local";
import {
  MenuContext,
  CartContext,
  SessionProvider,
  FilterContex,
} from "./context";

import { Providers } from "./GlobalRedux/provider";

const mont = localFont({
  src: [
    {
      path: "./fonts/Mont/Mont-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Mont/Mont-SemiBold.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/Mont/Mont-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],

  variable: "--font-mont",
  display: "optional",
});

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en" className={`${mont.variable} bg-[#f8f8f8]`}>
      <Providers>
        <Aos>
          <MenuContext>
            <CartContext>
              <FilterContex>
                <body>
                  <SessionProvider session={session}>
                    <Notifications />
                    <header>
                      <HeaderContainer />
                    </header>
                    <main className="mt-36 pt-4 ">
                      {children}
                      <CardMenu />
                    </main>
                    <Cookies />
                    <FooterContainer />
                  </SessionProvider>
                </body>
              </FilterContex>
            </CartContext>
          </MenuContext>
        </Aos>
      </Providers>
    </html>
  );
}
