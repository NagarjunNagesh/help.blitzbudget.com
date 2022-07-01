<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg14.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Smart Link Transaction and Debt</h2>
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
              <h3 class="title">Smart Link Transaction and Debt</h3>
              <br>
              <br>
              <img src="img/gifs/transaction/smart-link/debt.gif" alt="Smart Link Debt">
              <br>
              <br>
              Smart linking the transaction and debts enables any future addition of the transaction with the said
              description and /or transaction amount to be automatically linked to the debt. This smart linking is
              extremely useful as it
              reduces the management overhead of continually requiring to manage the transaction and the application.
              <br>
              <br>
              We give you the liberty to link the transaction and the debt. It could be done by adding the <strong>
                Transaction Description </strong> and the <strong>Debt</strong>.
              <br>
              <br>
              <nuxt-link to="/debt/debt-link#article">#View Link
                Transactions and Debts</nuxt-link>
              <nuxt-link to="/debts#article">#Debt</nuxt-link>
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
    title: 'Transaction Link',
  },
  layout: "default",
}
</script>
<style>
</style>