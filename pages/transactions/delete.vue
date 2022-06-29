<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg7.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Delete Transaction</h2>
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
              <h3 class="title">Delete Transaction</h3>
              <br>
              <br>
              <img src="img/gifs/transaction/delete-transaction.gif" alt="Delete Transaction">
              <br>
              <br>
              <p>
                Every transaction can be deleted which would also ensure that the linked debts, goals, investments or
                categories are equally adjusted for the error. So to reflect accuracy we encourage help keep the
                transactions accurate.
                <br>
                <br>
                To delete,
              </p>
              <ul>
                <li>A delete transaction would provide a popup requiring a confirmation to delete the transaction.</li>
                <li>Upon confirmation, The transaction is deleted and the table data is updated.</li>
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
    title: 'Delete Transaction',
  },
  layout: "default",
}
</script>
<style>
</style>