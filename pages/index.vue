<template>
    <div class="wrapper presentation-page">
        <div class="page-header clear-filter">
            <div class="page-header-image" style="background-image: url('img/bg32.jpg')">
            </div>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto">
                        <h1 class="title">How Can We Help?</h1>
                        <base-input required v-model="model.search" name="search" type="text" autofocus
                            placeholder="Add a budget">
                        </base-input>
                        <div>
                            {{ showResults }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--     *********    PROJECTS 3     *********      -->
        <div class="projects-3" data-background-color="black">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h6 class="category text-muted">Help Center</h6>
                        <h2 class="title">How Can We Help?</h2>
                    </div>
                </div>
                <div class="section-story-overview">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="image-container image-left"
                                style="background-image: url('img/home/budget.png')">
                                <!-- First image on the left side -->
                                <p class="blockquote blockquote-success">After categorizing the transactions some of us
                                    would like to control our expenditure as we always have ambitious plans for our
                                    future. Let us show you and guide you!
                                </p>
                            </div>
                            <h6 class="category">
                                <nuxt-link to="/budget" class="text-success">Budget</nuxt-link>
                            </h6>
                        </div>
                        <div class="col-md-5">
                            <!-- First image on the right side, above the article -->
                            <div class="image-container image-right"
                                style="background-image: url('img/home/category.png')">
                            </div>
                            <h6 class="category">
                                <nuxt-link to="/category" class="text-success">View</nuxt-link>
                            </h6>
                            <h4 class="card-title">
                                <nuxt-link to="/category">Category</nuxt-link>
                            </h4>
                            <p>
                                We all need to categroize the transaction to understand what we are spending on and how
                                we are spending what we are spending. We'll show you how to organize your transactions.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="section-story-overview">
                    <div class="row">
                        <div class="col-md-6">
                            <!-- First image on the left side -->
                            <div class="image-container image-left" style="background-image: url('img/home/debt.png')">
                                <p class="blockquote blockquote-success">
                                    When we try to beat the system, it is often us who are left to see the humungus task
                                    infront of us and give up. And slowly try to set our financial life in order.
                                </p>
                            </div>
                            <h6 class="category">
                                <nuxt-link to="/debt" class="text-success">Debt</nuxt-link>
                            </h6>
                        </div>
                        <div class="col-md-5">
                            <!-- First image on the right side, above the article -->
                            <div class="image-container image-right" style="background-image: url('img/home/goal.png')">
                            </div>
                            <h6 class="category">
                                <nuxt-link to="/goal" class="text-success">View</nuxt-link>
                            </h6>
                            <h4 class="card-title">
                                <nuxt-link to="/goal">Goal</nuxt-link>
                            </h4>
                            <p>
                                Goals are an important way to set a target for our financial life and get us moving in a
                                direction hoping to reach there one day. We hope to stay along on this journey to assist
                                you in reaching the goals that you set.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="section-story-overview">
                    <div class="row">
                        <div class="col-md-6">
                            <!-- First image on the left side -->
                            <div class="image-container image-left"
                                style="background-image: url('img/home/investment.png')">
                                <p class="blockquote blockquote-success">
                                    Investments are the corner stone to improve our finances. Saving cash depletes our
                                    reserves and it is not advisible to hold a large amount. We can help you track
                                    your investments.
                                </p>
                            </div>
                            <h6 class="category">
                                <nuxt-link to="/investment" class="text-success">Investment</nuxt-link>
                            </h6>
                        </div>
                        <div class="col-md-5">
                            <!-- First image on the right side, above the article -->
                            <div class="image-container image-right"
                                style="background-image: url('img/home/transaction.png')">
                            </div>
                            <h6 class="category">
                                <nuxt-link to="/transactions" class="text-success">View</nuxt-link>
                            </h6>
                            <h4 class="card-title">
                                <nuxt-link to="/transactions">Transaction</nuxt-link>
                            </h4>
                            <p>
                                We designed this new build family home located in Santa Monica with a mission to make
                                the large size of the property, feel cozy, collected, and unique.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="section-story-overview">
                    <div class="row">
                        <div class="col-md-6">
                            <!-- First image on the left side -->
                            <div class="image-container image-left"
                                style="background-image: url('img/home/wallet.png')">
                                <p class="blockquote blockquote-success">
                                    In this world of high connectivity, It is not surprising to have and actively manage
                                    investments and savings in more than one country. So we are providing you with an
                                    option to create wallets based on currencies.
                                </p>
                            </div>
                            <h6 class="category">
                                <nuxt-link to="/wallet" class="text-success">Wallet</nuxt-link>
                            </h6>
                        </div>
                        <div class="col-md-5">
                            <!-- First image on the right side, above the article -->
                            <div class="image-container image-right"
                                style="background-image: url('img/home/smart-link.png')">
                            </div>
                            <h6 class="category">
                                <nuxt-link to="/transactions/smart-link" class="text-success">View</nuxt-link>
                            </h6>
                            <h4 class="card-title">
                                <nuxt-link to="/transactions/smart-link">Smart Link</nuxt-link>
                            </h4>
                            <p>
                                We have found a smart way for you to link your transactions with the investments,
                                categories, debt and goals. We can use them to automatically link the transactions once
                                they are added.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--     *********    END PROJECTS 3      *********      -->
    </div>
</template>

<script>
import { Card, InfoSection, BaseInput } from '@/components';
import { Carousel, CarouselItem, Tooltip } from 'element-ui'
import initParallax from '@/utils/initParallax'
export default {
    name: 'presentation',
    head: {
        title: 'Help Center',
    },
    data() {
        return {
            model: {
                search: null,
            }
        }
    },
    computed: {
        showResults() {
            return this.model.search;
        }
    },
    components: {
        Card,
        InfoSection,
        [Carousel.name]: Carousel,
        [CarouselItem.name]: CarouselItem,
        [Tooltip.name]: Tooltip,
        BaseInput
    },
    mounted() {
        initParallax()
    }
}
</script>

<style scoped lang="scss">
.github-buttons {
    display: flex;
    align-content: center;
}
</style>
