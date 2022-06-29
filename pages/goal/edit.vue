<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg23.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Edit Goal</h2>
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
              <h3 class="title">Edit Goal</h3>
              <br>
              <br>
              <img src="img/gifs/goal/edit-goal.gif" alt="Edit Goal">
              <br>
              <br>
              We understand that there could be some redundancies in the goal and you might need to modify it at some
              point.
              <br>
              <br>
              Edit Goal can be used to edit the <strong>current progress</strong> or <strong>Goal to reach</strong> or
              <strong>Target date before which to acheive the goal</strong>
              along with the name of the goal.
              <br>
              <br>
              This can be done by clicking on the edit <i>(pencil)</i> icon which would redirect you (the user) to the
              appropriate edit goal page.
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
    title: 'Edit Goal',
  },
  layout: "default",
}
</script>
<style>
</style>