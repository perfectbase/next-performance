import "@/app/globals.css";
import { AppFrame } from "@/components/app-frame";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppFrame>
      <Component {...pageProps} />
    </AppFrame>
  );
}
