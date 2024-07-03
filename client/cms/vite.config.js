import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 80,
    proxy: {
      "/api": {
        target: "https://194.233.87.193:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    host: true,
    port: 80,
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
          // Split homepage pages into a separate chunk
          homepage: [
            "./src/features/homepage/pages/NotFound",
            "./src/features/homepage/pages/Home",
            "./src/features/homepage/pages/About",
            "./src/features/homepage/pages/Contact",
            "./src/features/homepage/pages/OurProgramsPage",
            "./src/features/homepage/pages/Admission",
            "./src/features/homepage/pages/ActivitiesPage",
            "./src/features/homepage/pages/ManagementTeamsPage",
            "./src/features/homepage/pages/EventsPages.jsx",
            "./src/features/homepage/pages/SchoolNewsPage",
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
      // Add other dependencies that need to be pre-bundled
    ],
  },
});
