<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg30.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Add Debt</h2>
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
              <h3 class="title">Add Debt</h3>
              <br>
              <br>
              <img src="img/gifs/debt/add-debt.gif" alt="Budget">
              <br>
              <br>
              Understanding the total debts and out debt repayment behaviour is extremely important for repaying our
              debts andsetting our financial life in order.
              <br>
              <br>
              A debt has three simple fields that could be added. <strong>Debted amount</strong>,
              <strong>Total amount repaid</strong> and the name of the debt.
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
    title: 'Add Debt',
  },
  layout: "default",
}
</script>
<style>
</style>