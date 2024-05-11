import "@/styles/css/core/globals.scss";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
export let context = createContext(null);
export default function App({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <context.Provider value={{ setIsSidebarOpen, isSidebarOpen }}>
      <Component {...pageProps} />
    </context.Provider>
  );
}
