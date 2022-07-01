<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/bg31.jpg')"></div>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Dashboard</h2>
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
                            <h3 class="title">Dashboard</h3>
                            <br>
                            <br>
                            <img src="img/gifs/dashboard/dashboard.gif" alt="Budget">
                            <br>
                            <br>
                            A dashboard provides a comprehensive overview of your financial habits and the actual
                            deviation from the
                            expectations. Let's be honest with ourselves. We can all optimize our financial habits to
                            reach where we
                            want to reach.
                            <br>
                            <br>
                            We are constantly adding new features to the dashboard to make it a bit more comprehensive
                            and easy to
                            understand.
                            <br>
                            <br>
                            The current vision of the dashboard provides an overview of,
                            <ul>
                                <li>Net expenditure, income and per month left over categorized by month for 12 months.
                                </li>
                                <li>
                                    <nuxt-link to="/transactions">Average Expenses</nuxt-link>
                                </li>,
                                <li>
                                    <nuxt-link to="/transactions">Average Income</nuxt-link>
                                </li>,
                                <li>
                                    <nuxt-link to="/investments">Total Investments</nuxt-link>
                                </li>,
                                <li>
                                    <nuxt-link to="/debts">Total Debt</nuxt-link>
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
        title: 'Dashboard',
    },
    layout: "default",
}
</script>
<style>
</style>