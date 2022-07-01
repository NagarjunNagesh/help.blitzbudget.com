<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/bg9.jpg')"></div>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Smart Link Transaction and Investment</h2>
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
                            <h3 class="title">Smart Link Transaction and Investment</h3>
                            <br>
                            <br>
                            <img src="img/gifs/transaction/smart-link/investment.gif" alt="Investment">
                            <br>
                            <br>
                            Smart linking the transaction and investment enables any future addition of the transaction
                            with
                            the said
                            description and /or transaction amount to be automatically linked to the investment. This
                            smart
                            linking is
                            extremely useful as it
                            reduces the management overhead of continually requiring to manage the transaction and the
                            application.
                            <br>
                            <br>
                            We give you the liberty to link the transaction and the investment. It could be done by
                            adding the
                            <strong>
                                Transaction Description </strong> and the <strong>Investment</strong>.
                            <br>
                            <br>
                            <nuxt-link to="/investment/investment-link#article">#View Link
                                Transactions and Investments</nuxt-link>
                            <nuxt-link to="/investments#article">#Investment</nuxt-link>
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
        title: 'Smart Link Transaction and Investment',
    },
    layout: "default",
}
</script>
<style>
</style>