<template>
  <div class="app-container">
    <header class="app-header">
      <div class="header-content">
        <router-link to="/index" class="logo">
          <img alt="University logo" class="logo" src="./assets/swinburne.png"/>
        </router-link>
        <h1 class="title">Swinburne Unit Planner</h1>
      </div>
      <nav class="navbar">
        <ul>
          <li><router-link to="/index" class="nav-link">Home</router-link></li>
          <li><router-link to="/planner" class="nav-link">Planner</router-link></li>
          <li><router-link to="/about" class="nav-link">About This Project</router-link></li>
        </ul>
      </nav>
    </header>

    <router-view></router-view>

    <footer class="app-footer">
      <p>© 2024 Developed by <a href="https://github.com/Sumire-no-kai" target="_blank">Sumire-no-kai</a>. For Swinburne University of Technology(Australia).</p>
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>