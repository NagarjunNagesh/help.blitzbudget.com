<template>
  <footer class="footer" :class="{ [`footer-${type}`]: type }" :data-background-color="backgroundColor">
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://www.blitzbudget.com" target="_blank"> BlitzBudget </a>
          </li>
          <li>
            <a href="https://blitzbudget.com/privacy" target="_blank"> Privacy Policy </a>
          </li>
          <li>
            <a href="https://help.blitzbudget.com/"> Help Center </a>
          </li>
          <li>
            <a href="https://app.blitzbudget.com/"> Get Started </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, Created by
        <a href="https://www.blitzbudget.com" target="_blank" rel="noopener" class="text-success">BlitzBudget
        </a>.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
</style>
