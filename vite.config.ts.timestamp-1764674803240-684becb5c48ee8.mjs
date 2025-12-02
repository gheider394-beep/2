// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///home/project/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      // Ensure correct MIME types for JS modules
      "Content-Type": "application/javascript; charset=utf-8"
    }
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    // Production optimizations
    minify: "terser",
    sourcemap: false,
    assetsInlineLimit: 0,
    // Prevent inline assets that can cause MIME issues
    terserOptions: {
      compress: {
        // Remove console.log, console.debug, console.info in production
        // Keep console.warn and console.error for important debugging
        drop_console: false,
        pure_funcs: ["console.log", "console.debug", "console.info"]
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core vendor libraries
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          // Database and query management
          supabase: ["@supabase/supabase-js"],
          query: ["@tanstack/react-query"],
          // UI component libraries
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu", "@radix-ui/react-avatar"],
          radix: ["@radix-ui/react-toast", "@radix-ui/react-tabs", "@radix-ui/react-select"],
          // Animation and styling
          animations: ["framer-motion"],
          icons: ["lucide-react"],
          // Utilities
          utils: ["date-fns", "lodash-es", "clsx", "class-variance-authority"]
        }
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcblxuLy8gQ29uc29sZSByZW1vdmFsIGlzIG5vdyBoYW5kbGVkIGJ5IFRlcnNlciBjb25maWd1cmF0aW9uXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAvLyBFbnN1cmUgY29ycmVjdCBNSU1FIHR5cGVzIGZvciBKUyBtb2R1bGVzXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQ7IGNoYXJzZXQ9dXRmLTgnLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIG1vZGUgPT09ICdkZXZlbG9wbWVudCcgJiYgY29tcG9uZW50VGFnZ2VyKCksXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgLy8gUHJvZHVjdGlvbiBvcHRpbWl6YXRpb25zXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIGFzc2V0c0lubGluZUxpbWl0OiAwLCAvLyBQcmV2ZW50IGlubGluZSBhc3NldHMgdGhhdCBjYW4gY2F1c2UgTUlNRSBpc3N1ZXNcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICAvLyBSZW1vdmUgY29uc29sZS5sb2csIGNvbnNvbGUuZGVidWcsIGNvbnNvbGUuaW5mbyBpbiBwcm9kdWN0aW9uXG4gICAgICAgIC8vIEtlZXAgY29uc29sZS53YXJuIGFuZCBjb25zb2xlLmVycm9yIGZvciBpbXBvcnRhbnQgZGVidWdnaW5nXG4gICAgICAgIGRyb3BfY29uc29sZTogZmFsc2UsXG4gICAgICAgIHB1cmVfZnVuY3M6IFsnY29uc29sZS5sb2cnLCAnY29uc29sZS5kZWJ1ZycsICdjb25zb2xlLmluZm8nXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgLy8gQ29yZSB2ZW5kb3IgbGlicmFyaWVzXG4gICAgICAgICAgdmVuZG9yOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgICAgIHJvdXRlcjogWydyZWFjdC1yb3V0ZXItZG9tJ10sXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gRGF0YWJhc2UgYW5kIHF1ZXJ5IG1hbmFnZW1lbnRcbiAgICAgICAgICBzdXBhYmFzZTogWydAc3VwYWJhc2Uvc3VwYWJhc2UtanMnXSxcbiAgICAgICAgICBxdWVyeTogWydAdGFuc3RhY2svcmVhY3QtcXVlcnknXSxcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBVSSBjb21wb25lbnQgbGlicmFyaWVzXG4gICAgICAgICAgdWk6IFsnQHJhZGl4LXVpL3JlYWN0LWRpYWxvZycsICdAcmFkaXgtdWkvcmVhY3QtZHJvcGRvd24tbWVudScsICdAcmFkaXgtdWkvcmVhY3QtYXZhdGFyJ10sXG4gICAgICAgICAgcmFkaXg6IFsnQHJhZGl4LXVpL3JlYWN0LXRvYXN0JywgJ0ByYWRpeC11aS9yZWFjdC10YWJzJywgJ0ByYWRpeC11aS9yZWFjdC1zZWxlY3QnXSxcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBBbmltYXRpb24gYW5kIHN0eWxpbmdcbiAgICAgICAgICBhbmltYXRpb25zOiBbJ2ZyYW1lci1tb3Rpb24nXSxcbiAgICAgICAgICBpY29uczogWydsdWNpZGUtcmVhY3QnXSxcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBVdGlsaXRpZXNcbiAgICAgICAgICB1dGlsczogWydkYXRlLWZucycsICdsb2Rhc2gtZXMnLCAnY2xzeCcsICdjbGFzcy12YXJpYW5jZS1hdXRob3JpdHknXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUhoQyxJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQTtBQUFBLE1BRVAsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTLGlCQUFpQixnQkFBZ0I7QUFBQSxFQUM1QyxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ2hCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBLElBRUwsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsbUJBQW1CO0FBQUE7QUFBQSxJQUNuQixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQTtBQUFBLFFBR1IsY0FBYztBQUFBLFFBQ2QsWUFBWSxDQUFDLGVBQWUsaUJBQWlCLGNBQWM7QUFBQSxNQUM3RDtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQTtBQUFBLFVBRVosUUFBUSxDQUFDLFNBQVMsV0FBVztBQUFBLFVBQzdCLFFBQVEsQ0FBQyxrQkFBa0I7QUFBQTtBQUFBLFVBRzNCLFVBQVUsQ0FBQyx1QkFBdUI7QUFBQSxVQUNsQyxPQUFPLENBQUMsdUJBQXVCO0FBQUE7QUFBQSxVQUcvQixJQUFJLENBQUMsMEJBQTBCLGlDQUFpQyx3QkFBd0I7QUFBQSxVQUN4RixPQUFPLENBQUMseUJBQXlCLHdCQUF3Qix3QkFBd0I7QUFBQTtBQUFBLFVBR2pGLFlBQVksQ0FBQyxlQUFlO0FBQUEsVUFDNUIsT0FBTyxDQUFDLGNBQWM7QUFBQTtBQUFBLFVBR3RCLE9BQU8sQ0FBQyxZQUFZLGFBQWEsUUFBUSwwQkFBMEI7QUFBQSxRQUNyRTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
