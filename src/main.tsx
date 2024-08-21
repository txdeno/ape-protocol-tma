import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SDKProvider } from "@tma.js/sdk-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false
        }
    }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SDKProvider>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </SDKProvider>
    </React.StrictMode>
);
