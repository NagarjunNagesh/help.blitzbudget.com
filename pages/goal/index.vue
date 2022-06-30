<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg21.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Goal</h2>
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
              <h3 class="title">Goal</h3>
              <br>
              <br>
              <img src="img/gifs/goal/goal.gif" alt="Goal">
              <br>
              <br>
              Any goal can be added and viewed to the Blitzbudget. These goals can be seen by clicking the
              <i>"Goals"</i> option present in the sidebar.
              <br>
              <br>
              This page can be used to view the expected goal to reach and the current goal amount.
              <br>
              <br>
              <i>Note - The goals can be updated by linking the <nuxt-link to="/transactions/smart-link/goal">
                  transaction and the goals.</nuxt-link></i>
              <br>
              <br>
              <ul>
                <li>
                  <nuxt-link to="/goal/add">Add Goal</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/goal/edit">Edit Goal</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/goal/delete">Delete Goal</nuxt-link>
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
    title: 'Goal',
  },
  layout: "default",
}
</script>
<style>
</style>