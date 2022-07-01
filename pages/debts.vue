<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg26.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Debt</h2>
            <h4>Help Center</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="button-container">
              <nuxt-link to="#article" class="btn btn-success btn-round btn-lg">
                <i class="now-ui-icons text_align-left"></i> Read Article
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="article">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <h3 class="title">Debt</h3>
              <br>
              <br>
              <img src="img/gifs/debt/debt.gif" alt="Budget">
              <br>
              <br>
              Any debt can be added and viewed to the Blitzbudget. These debts can be seen by clicking the
              <i>"Add Debt"</i> option present in the sidebar.
              <br>
              <br>
              This page can be used to view the debts and the debts repaid.
              <br>
              <br>
              <i>Note - The debts can be updated by linking the <nuxt-link to="/transaction/smart-link/debt">
                  transaction and the debts.</nuxt-link></i>
              <br>
              <br>
              <ul>
                <li>
                  <nuxt-link to="/debt/add">Add Debt</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/debt/edit">Edit Debt</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/debt/delete">Delete Debt</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "blog-posts",
  head: {
    title: 'Debt',
  },
  layout: "default",
}
</script>
<style>
</style>