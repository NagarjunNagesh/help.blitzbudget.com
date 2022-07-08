<template>
    <div class="wrapper blog-posts">
        <div class="page-header header-filter">
            <div class="page-header-image" style="background-image: url('img/bg51.jpg')"></div>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h1 class="title">
                            404
                        </h1>
                        <h2 class="description">
                            The page you requested could not be found.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import initParallax from "@/utils/initParallax";
export default {
    name: "error",
    head: {
        title: 'BlitzBudget Help',
    },
    layout: "default",
    components: {
        Card,
        [Button.name]: Button,
        [FormGroupInput.name]: FormGroupInput,
    },
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
    mounted() {
        initParallax();
    },
};
</script>
<style>
</style>
