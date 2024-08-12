import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8000,
    // proxy: {
    //   "/api": {
    //     target: "https://api.southwest-internationalschool.site/api/",
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
  preview: {
    host: true,
    port: 8000,
  },
  build: {
    rollupOptions: {
      input: "./index.html", // Explicitly specify the entry point
      output: {
        manualChunks: {
          // Split vendor code into a separate chunk
          vendor: ["react", "react-dom", "mobx-react-lite"],
          lodash: ["lodash"],
          // Split admin dashboard pages into a separate chunk
          adminDashboard: [
            "./src/features/admin-dashboard/page/user/UserPage",
            "./src/features/admin-dashboard/page/article/ArticlePage",
            "./src/features/admin-dashboard/page/home/HomePage",
            "./src/features/admin-dashboard/page/NotFoundPage",
            "./src/features/admin-dashboard/page/LoginPage",
            "./src/features/admin-dashboard/page/slide/SlidePage",
            "./src/features/admin-dashboard/page/student/StudentPage",
            "./src/features/admin-dashboard/page/managementTeam/StaffPage",
            "./src/features/admin-dashboard/page/category/CategoryPage",
            "./src/features/admin-dashboard/page/role/RolePage",
            "./src/features/admin-dashboard/page/album/ImagePage",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 100000, // Adjust the limit as needed
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "mobx-react-lite",
      "lodash",
      "react-quill",
      // Add other dependencies that need to be pre-bundled
    ],
  },
});
