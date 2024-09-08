import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import React from "react";
import {auth} from "../../auth";
config.autoAddCss = false

export const metadata = {
  title: "ترنج",
  description: "وب اپلیکیشن رستوران ترنج, غذا حاضر است.",
};

export default function RootLayout({children}:any) {

  return (
      <html lang="fa">

      <body className={'2xl:container mx-auto w-full Byekan bg-[#f4f4f4]'}
            dir={'rtl'}
            suppressHydrationWarning={true}
      >
      <div className={'flex  flex-col py-4 pb-28 lg:py-8  px-3 md:px-4'}>
          <Header/>
          <main className={'w-full '}>
              {children}
          </main>
          <Footer/>
      </div>
      </body>

      </html>
  );
}

