import type { Metadata } from "next";
import "@/styles/index.scss";
import ReduxProvider from "@/app/_providers/ReduxProvider";
import { AppProviders } from "./_providers";

export const metadata: Metadata = {
  title: "TalkCoffee",
  description: "",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (<>
    <ReduxProvider>
      <html lang="ru">
        <head>
          {/* <link rel="icon" type="image/svg" href="/icons/logo.svg" /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </head>
        <body>
          <AppProviders>
            {children}
          </AppProviders>
        </body>
      </html>
    </ReduxProvider>
  </>);
}
