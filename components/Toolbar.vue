<template>
    <v-toolbar dark flat app dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="black--text">
            <nuxt-link class="title black" to="/">iTunes Search</nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/" icon>
            <v-icon>refresh</v-icon>
        </v-btn>
    </v-toolbar>
</template>
<script>
export default {

}
</script>
<style scoped>
.title {
    text-decoration: none !important;
}
.title:visited{
    color: white;
}

</style>
