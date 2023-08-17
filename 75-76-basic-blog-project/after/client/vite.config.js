import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 目标服务器地址
        changeOrigin: true, // 改变请求源
        rewrite: (path) => path.replace(/^\/api/, ""), // 可选，重写请求路径
      },
    },
  },
})
