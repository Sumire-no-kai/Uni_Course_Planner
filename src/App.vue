<template>
  <div class="app-container">
    <header class="app-header">
      <div class="header-content">
        <img alt="University logo" class="logo" src="./assets/swinburne.png"/>
        <h1 class="title">Swinburne Unit Planner</h1>
      </div>
      <nav class="navbar">
        <ul>
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/planner" class="nav-link">Planner</router-link></li>
          <li><router-link to="/about" class="nav-link">About This Project</router-link></li>
        </ul>
      </nav>
    </header>

    <router-view>
      <main class="main main-background">
        <div class="welcome-message">
          <h2>Welcome to the Swinburne University Unit Planner!</h2>
          <p>This interactive tool is designed to help Swinburne University students efficiently plan their academic journey. Start by importing your course data via Excel to visualize and manage your semester plans.</p>
          <p>Current Features:</p>
          <ul>
            <li>Dynamic course scheduling based on imported Excel data</li>
            <li>Integration with official Swinburne University course databases</li>
            <li>Customizable study plans with PDF export functionality</li>
          </ul>
          <p>Planned Upgrades:</p>
          <ul>
            <li>Adjustable course times: In future updates, you will be able to modify the times of your courses directly within the planner to suit your personal schedule.</li>
            <li>Real-time synchronization with Swinburne's official course schedules for each semester to ensure your plan is always up to date.</li>
          </ul>
          <p>Get started by selecting 'Planner' from the menu or learn more about this project on our <a href="https://github.com/Sumire-no-kai/Uni_Course_Planner" target="_blank">GitHub page</a>.</p>
        </div>
      </main>
    </router-view>

    <footer class="app-footer">
      <p>© 2024 Developed by <a href="https://github.com/Sumire-no-kai" target="_blank">Sumire-no-kai</a>. For Swinburne University of Technology(Australia).</p>
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>