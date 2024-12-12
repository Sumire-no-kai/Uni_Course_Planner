<template>
  <div class="app-container">
    <header class="app-header">
      <img alt="University logo" class="logo" src="./assets/swinburne.png" />
      <h1 class="title">Swinburne University Unit Planner</h1>
      <nav class="navbar">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/planner">Planner</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <!-- 更多导航项 -->
        </ul>
      </nav>
    </header>

    <main class="main">
      <p>Welcome to Swinburne University Course Planner! More features coming soon. For more infromation, you can find in the Github project.</p>
    </main>

    <footer class="app-footer">
      <p>© 2024 Swinburne University of Technology</p>
    </footer>
  </div>
</template>