<template>
  <navbar position="fixed" :transparent="transparent" :color-on-scroll="colorOnScroll" menu-classes="ml-auto">
    <template slot-scope="{}">
      <nuxt-link v-popover:popover1 class="navbar-brand" to="/">
        Help Center
      </nuxt-link>
      <el-popover ref="popover1" popper-class="popover" placement="bottom" width="300" trigger="hover">
        <div class="popover-body">Created by BlitzBudget.</div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <ul class="navbar-nav mr-5">
        <drop-down tag="li" title="Wallet" icon="now-ui-icons business_briefcase-24" class="nav-item">
          <nav-link to="/wallets#article">
            Wallet
          </nav-link>
          <nav-link to="/wallet/add#article">
            Add Wallet
          </nav-link>
          <nav-link to="/wallet/delete#article">
            Delete Wallet
          </nav-link>
        </drop-down>
        <drop-down tag="li" title="Category" icon="now-ui-icons files_single-copy-04" class="nav-item">
          <nav-link to="/categories#article">
            Category
          </nav-link>
          <nav-link to="/category/add#article">
            Add Category
          </nav-link>
          <nav-link to="/category/delete#article">
            Delete Category
          </nav-link>
          <nav-link to="/category/category-link#article">
            View Linked Transactions and Category
          </nav-link>
          <nav-link to="/transaction/smart-link/category#article">
            Smart Link Transactions and Category
          </nav-link>
        </drop-down>
        <drop-down tag="li" title="Investment" icon="now-ui-icons business_chart-bar-32" class="nav-item">
          <nav-link to="/investments#article">
            Investment
          </nav-link>
          <nav-link to="/investment/add#article">
            Add Investment
          </nav-link>
          <nav-link to="/investment/delete#article">
            Delete Investment
          </nav-link>
          <nav-link to="/investment/edit#article">
            Edit Investment
          </nav-link>
          <nav-link to="/investment/investment-link#article">
            View Linked Transactions and Investment
          </nav-link>
          <nav-link to="/transaction/smart-link/investment#article">
            Smart Link Transactions and Investment
          </nav-link>
        </drop-down>
        <drop-down tag="li" title="Goal" icon="now-ui-icons sport_trophy" class="nav-item">
          <nav-link to="/goals#article">
            Goal
          </nav-link>
          <nav-link to="/goal/add#article">
            Add Goal
          </nav-link>
          <nav-link to="/goal/delete#article">
            Delete Goal
          </nav-link>
          <nav-link to="/goal/edit#article">
            Edit Goal
          </nav-link>
          <nav-link to="/goal/goal-link#article">
            View Linked Transactions and Goal
          </nav-link>
          <nav-link to="/transaction/smart-link/goal#article">
            Smart Link Transactions and Goal
          </nav-link>
        </drop-down>
        <drop-down tag="li" title="Budget" icon="now-ui-icons files_paper" class="nav-item">
          <nav-link to="/budgets#article">
            Budget
          </nav-link>
          <nav-link to="/budget/add#article">
            Add Budget
          </nav-link>
          <nav-link to="/budget/delete#article">
            Delete Budget
          </nav-link>
          <nav-link to="/budget/edit#article">
            Edit Budget
          </nav-link>
        </drop-down>
        <drop-down tag="li" title="Debt" icon="now-ui-icons shopping_credit-card" class="nav-item">
          <nav-link to="/debts#article">
            Debt
          </nav-link>
          <nav-link to="/debt/add#article">
            Add Debt
          </nav-link>
          <nav-link to="/debt/delete#article">
            Delete Debt
          </nav-link>
          <nav-link to="/debt/edit#article">
            Edit Debt
          </nav-link>
          <nav-link to="/debt/debt-link#article">
            View Linked Transactions and Debt
          </nav-link>
        </drop-down>
        <drop-down tag="li" title="Transactions" icon="now-ui-icons business_money-coins" class="nav-item">
          <nav-link to="/transactions#article">
            Transactions
          </nav-link>
          <nav-link to="/transaction/add#article">
            Add Transactions
          </nav-link>
          <nav-link to="/transaction/delete#article">
            Delete Transactions
          </nav-link>
          <nav-link to="/transaction/edit#article">
            Edit Transactions
          </nav-link>
        </drop-down>
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
