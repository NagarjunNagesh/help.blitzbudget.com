<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg25.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Add Goal</h2>
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
              <h3 class="title">Add Goal</h3>
              <br>
              <br>
              <img src="img/gifs/goal/add-goal.gif" alt="Add Goal">
              <br>
              <br>
              We understand that setting goals are important to keep improving and getting better at our finances. So we
              have provided you with the option to add new goals.
              <br>
              <br>
              A goal has three simple fields that could be added. <strong>Goal to Reach</strong>,
              <strong>Target Date before which to achieve the goal</strong> and the name of the goal.
              <br>
              <br>
              <nuxt-link to="/goal">#Goal</nuxt-link>
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
    title: 'Add Goal',
  },
  layout: "default",
}
</script>
<style>
</style>