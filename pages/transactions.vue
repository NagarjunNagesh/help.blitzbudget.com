<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg5.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Transaction</h2>
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
              <h3 class="title">Transaction</h3>
              <br>
              <br>
              <img src="img/gifs/transaction/transaction.gif" alt="Transaction">
              <br>
              <br>
              <p>
                A transaction is the core of this application which helps you organize your finances and help you
                achieve financial goals.
                <br>
                <br>
                As seen in the image above, We can search the transaction by month and by default <i>the current
                  month</i> is chosen and the data is populated in the table.
                <br>
                <br>
              <ul>
                <li>
                  <nuxt-link to="/investment/add">Add Investment</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/investment/edit">Edit Investment</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/investment/delete">Delete Investment</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/transaction/smart-link/category">Smart Link Transaction and Category</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/transaction/smart-link/debt">Smart Link Transaction and Debt</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/transaction/smart-link/goal">Smart Link Transaction and Goal</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/transaction/smart-link/investment">Smart Link Transaction and Investment</nuxt-link>
                </li>
              </ul>
              </p>
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
    title: 'Transactions',
  },
  layout: "default",
}
</script>
<style>
</style>