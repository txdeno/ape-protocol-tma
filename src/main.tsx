import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SDKProvider } from "@telegram-apps/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SDKProvider>
      <TonConnectUIProvider
        manifestUrl={import.meta.env.VITE_TON_CONNECT_MANIFEST}
      >
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </TonConnectUIProvider>
    </SDKProvider>
  </React.StrictMode>
);
