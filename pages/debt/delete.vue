<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg28.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Delete Debt</h2>
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
              <h3 class="title">Delete Debt</h3>
              <br>
              <br>
              <img src="img/gifs/debt/delete-debt.gif" alt="Budget">
              <br>
              <br>
              At times the debts can become redundant or stale at which point we can delete the debts by
              clicking on the <i>"Delete"</i> (X) icon available in every debts that you have.
              <br>
              <br>
              This would indeed show a confirmation popup which inturn has to be confirmed for the deletion of the
              debts to occur.
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
    title: 'Delete Debt',
  },
  layout: "default",
}
</script>
<style>
</style>