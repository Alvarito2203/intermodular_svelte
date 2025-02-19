<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";
    import { modules } from "../lib/module";
    import { userRole } from "../lib/stores";
    import { navigate } from "svelte-routing";
    import { get } from "svelte/store";
  
    let role = get(userRole);  // Obtener el rol actual
    let filteredModules = modules.filter((m) => m.roles.includes(role));
  
    function handleClick(module) {
      if (role === "guest" && module.roles.includes("user")) {
        navigate("/register");  // Redirige al registro si es invitado
      } else {
        navigate(module.path);  // Navega al módulo
      }
    }
  
    onMount(() => {
      d3.selectAll(".module-card")
        .on("mouseover", function () {
          d3.select(this).transition().duration(200).style("transform", "scale(1.1)");
        })
        .on("mouseout", function () {
          d3.select(this).transition().duration(200).style("transform", "scale(1)");
        });
    });
  </script>
  
  <main>
    <h1>Dashboard - {role.charAt(0).toUpperCase() + role.slice(1)}</h1>
    <div class="grid">
      {#each filteredModules as module}
        <button class="module-card" on:click={() => handleClick(module)} on:keydown={(e) => e.key === 'Enter' && handleClick(module)}>
          <span class="icon">{module.icon}</span>
          <p>{module.name}</p>
        </button>
      {/each}
    </div>
  </main>
  
  <style>
    main { text-align: center; padding: 20px; }
    .grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px; margin-top: 20px;
    }
    .module-card {
      background: #fff; padding: 15px; border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1); cursor: pointer;
      transition: transform 0.2s ease-in-out;
    }
    .icon { font-size: 40px; }
    .module-card:hover { transform: scale(1.1); }
  </style>
  