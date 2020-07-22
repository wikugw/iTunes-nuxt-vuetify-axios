<template>
    <div>
        <h1>Result for {{$route.params.id}}</h1>
        <div v-if="albumExists">
          <div v-for="(album, index) in albumData" :key="album.collectionid">
          <card
            :title="album.collectionCensoredName"
            :image="album.artworkUrl100"
            :artistName="album.artistName"
            :url="album.artistViewUrl"
            :color="picker(index)"
          />
          </div>
        </div>
        <div v-else>
          <h1>can't find album</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import card from '~/components/card.vue'

export default {
  asyncData ({ params }) {
    return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
      .then((response) => {
        return { albumData: response.data.results }
      })
  },
  components: {
    card
  },
  middleware: 'search',
  methods: {
    picker (index) {
      return index % 2 === 0 ? 'red' : 'blue'
    }
  },
  computed: {
    albumExists () {
      return this.albumData.length > 0
    }
  }
}
</script>
