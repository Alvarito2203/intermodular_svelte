import AdminDashboard from "./pages/AdminDashboard.svelte";
import UserDashboard from "./pages/UserDashboard.svelte";
import GuestDashboard from "./pages/GuestDashboard.svelte";
import Login from "./pages/Login.svelte";
import Register from "./pages/Register.svelte";
import Dashboard from "./pages/Dashboard.svelte";   

export const routes = {
    "/": Login,
    "/register": Register,
    "/admin-dashboard": AdminDashboard,
    "/user-dashboard": UserDashboard,
    "/guest-dashboard": GuestDashboard,
     "/proyectos": Dashboard,  // Asumiendo que tienes estas rutas
      "/tareas": Dashboard,
   "/estadisticas": Dashboard,
  "/usuarios": Dashboard,
  "/configuracion": Dashboard,
  "/soporte": Dashboard,
};
