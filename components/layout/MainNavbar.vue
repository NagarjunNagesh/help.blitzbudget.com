<template>
  <navbar position="fixed" :transparent="transparent" :color-on-scroll="colorOnScroll" menu-classes="ml-auto">
    <template slot-scope="{}">
      <nuxt-link v-popover:popover1 class="navbar-brand" to="/">
        BlitzBudget Help Center
      </nuxt-link>
      <el-popover ref="popover1" popper-class="popover" placement="bottom" width="300" trigger="hover">
        <div class="popover-body">Created by BlitzBudget.</div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <ul class="navbar-nav mr-5">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/budget"> Budget </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/goal"> Goal </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/transaction"> Transaction </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/investment"> Investment </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/debt"> Debt </nuxt-link>
        </li>
      </ul>
      <li class="nav-item">
        <a class="nav-link btn btn-default btn-neutral" href="https://app.blitzbudget.com/login" target="_blank">
          <p>Sign in</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover,
  },
};
</script>

<style scoped>
</style>
