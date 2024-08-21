import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: join(__dirname, "..", "..", "..", "..", "dist", "client", "build")
    }
});
