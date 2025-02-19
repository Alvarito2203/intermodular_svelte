import { writable } from "svelte/store";

// Obtener el rol del localStorage si existe
const storedRole = localStorage.getItem("role") || "guest";
export const userRole = writable(storedRole);

// Actualizar localStorage al cambiar el rol
userRole.subscribe((role) => localStorage.setItem("role", role));
