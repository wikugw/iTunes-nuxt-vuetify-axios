<template>
    <v-app-bar dark color="blue">
        <v-app-bar-side-icon />
        <v-app-bar-title class="white--text">
            <nuxt-link class="title" to="/">iTunes Search</nuxt-link>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn to="/" icon>
            <v-icon>refresh</v-icon>
        </v-btn>
    </v-app-bar>
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
