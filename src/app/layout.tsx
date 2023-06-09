import { Nav } from "@/components/nav/nav_view";
import "./globals.css";
import { Session } from "next-auth";
import { headers } from "next/dist/client/components/headers";
import AuthContext from "../../context/auth";
import { Suspense } from "react";
import Loading from "./loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get("cookie") ?? "");

  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          <AuthContext session={session}>
            <Nav />
            <div className=" w-full lg:w-1/2 mx-auto  p-2">
              {children}
              <ToastContainer />
            </div>
          </AuthContext>
        </Suspense>
      </body>
    </html>
  );
}

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(
    `${process.env.LOCAL_AUTH_URL}api/auth/session`,
    {
      headers: {
        cookie,
      },
    }
  );

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}
