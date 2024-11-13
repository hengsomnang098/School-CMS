// vite.config.js
import { defineConfig } from "file:///media/user/Data/School-CMS/client/cms/node_modules/vite/dist/node/index.js";
import react from "file:///media/user/Data/School-CMS/client/cms/node_modules/@vitejs/plugin-react-swc/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8e3
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
    port: 8e3
  },
  build: {
    rollupOptions: {
      input: "./index.html",
      // Explicitly specify the entry point
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
            "./src/features/admin-dashboard/page/album/ImagePage"
          ],
          // Split homepage pages into a separate chunk
          homepage: [
            "./src/features/homepage/pages/Home",
            "./src/features/homepage/pages/AboutPage",
            "./src/features/homepage/pages/Contact",
            "./src/features/homepage/pages/ManagementTeamsPage",
            "./src/features/homepage/pages/EventsPages.jsx",
            "./src/features/homepage/pages/SchoolNewsPage"
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1e5
    // Adjust the limit as needed
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "mobx-react-lite",
      "lodash",
      "react-quill"
      // Add other dependencies that need to be pre-bundled
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbWVkaWEvdXNlci9EYXRhL1NjaG9vbC1DTVMvY2xpZW50L2Ntc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21lZGlhL3VzZXIvRGF0YS9TY2hvb2wtQ01TL2NsaWVudC9jbXMvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21lZGlhL3VzZXIvRGF0YS9TY2hvb2wtQ01TL2NsaWVudC9jbXMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogdHJ1ZSxcbiAgICBwb3J0OiA4MDAwLFxuICAgIC8vIHByb3h5OiB7XG4gICAgLy8gICBcIi9hcGlcIjoge1xuICAgIC8vICAgICB0YXJnZXQ6IFwiaHR0cHM6Ly9hcGkuc291dGh3ZXN0LWludGVybmF0aW9uYWxzY2hvb2wuc2l0ZS9hcGkvXCIsXG4gICAgLy8gICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAvLyAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIGhvc3Q6IHRydWUsXG4gICAgcG9ydDogODAwMCxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDogXCIuL2luZGV4Lmh0bWxcIiwgLy8gRXhwbGljaXRseSBzcGVjaWZ5IHRoZSBlbnRyeSBwb2ludFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIC8vIFNwbGl0IHZlbmRvciBjb2RlIGludG8gYSBzZXBhcmF0ZSBjaHVua1xuICAgICAgICAgIHZlbmRvcjogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJtb2J4LXJlYWN0LWxpdGVcIl0sXG4gICAgICAgICAgbG9kYXNoOiBbXCJsb2Rhc2hcIl0sXG4gICAgICAgICAgLy8gU3BsaXQgYWRtaW4gZGFzaGJvYXJkIHBhZ2VzIGludG8gYSBzZXBhcmF0ZSBjaHVua1xuICAgICAgICAgIGFkbWluRGFzaGJvYXJkOiBbXG4gICAgICAgICAgICBcIi4vc3JjL2ZlYXR1cmVzL2FkbWluLWRhc2hib2FyZC9wYWdlL3VzZXIvVXNlclBhZ2VcIixcbiAgICAgICAgICAgIFwiLi9zcmMvZmVhdHVyZXMvYWRtaW4tZGFzaGJvYXJkL3BhZ2UvYXJ0aWNsZS9BcnRpY2xlUGFnZVwiLFxuICAgICAgICAgICAgXCIuL3NyYy9mZWF0dXJlcy9hZG1pbi1kYXNoYm9hcmQvcGFnZS9ob21lL0hvbWVQYWdlXCIsXG4gICAgICAgICAgICBcIi4vc3JjL2ZlYXR1cmVzL2FkbWluLWRhc2hib2FyZC9wYWdlL05vdEZvdW5kUGFnZVwiLFxuICAgICAgICAgICAgXCIuL3NyYy9mZWF0dXJlcy9hZG1pbi1kYXNoYm9hcmQvcGFnZS9Mb2dpblBhZ2VcIixcbiAgICAgICAgICAgIFwiLi9zcmMvZmVhdHVyZXMvYWRtaW4tZGFzaGJvYXJkL3BhZ2Uvc2xpZGUvU2xpZGVQYWdlXCIsXG4gICAgICAgICAgICBcIi4vc3JjL2ZlYXR1cmVzL2FkbWluLWRhc2hib2FyZC9wYWdlL3N0dWRlbnQvU3R1ZGVudFBhZ2VcIixcbiAgICAgICAgICAgIFwiLi9zcmMvZmVhdHVyZXMvYWRtaW4tZGFzaGJvYXJkL3BhZ2UvbWFuYWdlbWVudFRlYW0vU3RhZmZQYWdlXCIsXG4gICAgICAgICAgICBcIi4vc3JjL2ZlYXR1cmVzL2FkbWluLWRhc2hib2FyZC9wYWdlL2NhdGVnb3J5L0NhdGVnb3J5UGFnZVwiLFxuICAgICAgICAgICAgXCIuL3NyYy9mZWF0dXJlcy9hZG1pbi1kYXNoYm9hcmQvcGFnZS9yb2xlL1JvbGVQYWdlXCIsXG4gICAgICAgICAgICBcIi4vc3JjL2ZlYXR1cmVzL2FkbWluLWRhc2hib2FyZC9wYWdlL2FsYnVtL0ltYWdlUGFnZVwiLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy8gU3BsaXQgaG9tZXBhZ2UgcGFnZXMgaW50byBhIHNlcGFyYXRlIGNodW5rXG4gICAgICAgICAgaG9tZXBhZ2U6IFtcbiAgICAgICAgICAgIFwiLi9zcmMvZmVhdHVyZXMvaG9tZXBhZ2UvcGFnZXMvSG9tZVwiLFxuICAgICAgICAgICAgXCIuL3NyYy9mZWF0dXJlcy9ob21lcGFnZS9wYWdlcy9BYm91dFBhZ2VcIixcbiAgICAgICAgICAgIFwiLi9zcmMvZmVhdHVyZXMvaG9tZXBhZ2UvcGFnZXMvQ29udGFjdFwiLFxuICAgICAgICAgICAgXCIuL3NyYy9mZWF0dXJlcy9ob21lcGFnZS9wYWdlcy9NYW5hZ2VtZW50VGVhbXNQYWdlXCIsXG4gICAgICAgICAgICBcIi4vc3JjL2ZlYXR1cmVzL2hvbWVwYWdlL3BhZ2VzL0V2ZW50c1BhZ2VzLmpzeFwiLFxuICAgICAgICAgICAgXCIuL3NyYy9mZWF0dXJlcy9ob21lcGFnZS9wYWdlcy9TY2hvb2xOZXdzUGFnZVwiLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwMDAsIC8vIEFkanVzdCB0aGUgbGltaXQgYXMgbmVlZGVkXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFtcbiAgICAgIFwicmVhY3RcIixcbiAgICAgIFwicmVhY3QtZG9tXCIsXG4gICAgICBcIm1vYngtcmVhY3QtbGl0ZVwiLFxuICAgICAgXCJsb2Rhc2hcIixcbiAgICAgIFwicmVhY3QtcXVpbGxcIixcbiAgICAgIC8vIEFkZCBvdGhlciBkZXBlbmRlbmNpZXMgdGhhdCBuZWVkIHRvIGJlIHByZS1idW5kbGVkXG4gICAgXSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUyxTQUFTLG9CQUFvQjtBQUNqVSxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUVI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUE7QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQTtBQUFBLFVBRVosUUFBUSxDQUFDLFNBQVMsYUFBYSxpQkFBaUI7QUFBQSxVQUNoRCxRQUFRLENBQUMsUUFBUTtBQUFBO0FBQUEsVUFFakIsZ0JBQWdCO0FBQUEsWUFDZDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUE7QUFBQSxVQUVBLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSx1QkFBdUI7QUFBQTtBQUFBLEVBQ3pCO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLElBRUY7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
