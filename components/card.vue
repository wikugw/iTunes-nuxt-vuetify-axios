<template>
    <div
        id="e3"
        style="max-width: 400px; margin: auto"
        class="grey lighten-3"
    >
        <v-container
            fluid
            style="min-height: 0;"
            grid-list-lg
        >
            <v-row dense>
                <v-col cols="12">
                    <v-card
                        :color="color"
                        :class="`${color} white--text`"
                        target="_blank"
                        :href="url"
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title
                                class="headline"
                                >
                                    {{title}}
                                </v-card-title>
                                <v-card-subtitle class="white--text">
                                    {{artistName}}
                                </v-card-subtitle>
                            </div>

                            <v-avatar
                                class="ma-3"
                                size="125"
                                tile
                            >
                                <v-img :src="image" height="100px"></v-img>
                            </v-avatar>
            </div>
          </v-card>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>
<script>
export default {
  props: ['title', 'image', 'artistName', 'url', 'color']
}
</script>
