<template>
    <footer class="footer" :class="{ [`footer-${type}`]: type }" :data-background-color="backgroundColor">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <nuxt-link to="https://www.creative-tim.com">
                            Creative Tim
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="https:///presentation.creative-tim.com">
                            About Us
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="https:///blog.creative-tim.com">
                            Blog
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="https://www.creative-tim.com/license">
                            License
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
            <div class="copyright">
                &copy; {{ year }}, Designed by
                <nuxt-link to="https:///www.invisionapp.com" target="_blank">Invision</nuxt-link>. Coded by
                <nuxt-link to="https://github.com/cristijora" target="_blank">Cristi Jora</nuxt-link> and
                <nuxt-link to="https://www.creative-tim.com" target="_blank">Creative Tim</nuxt-link>.
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    props: {
        backgroundColor: String,
        type: String
    },
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>
<style>
</style>
