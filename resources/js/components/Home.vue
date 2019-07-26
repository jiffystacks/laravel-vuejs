<template>
        <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/img/arches-national-park-dark-dusk-33688.jpg'
          },
          {
            src: '/img/breathtaking-calm-color-36478.jpg'
          },
          {
            src: '/img/clouds-cloudy-countryside-236047.jpg'
          }
        ]
      }
    }
  }
</script>