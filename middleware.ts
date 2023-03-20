// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = { matcher: ["/Cuenta/:path*", "/Resumen/Datos/:path*"] };
