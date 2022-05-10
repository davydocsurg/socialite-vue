<script>
  export default {
    name: "TrendsItem",
    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      // normalizedTweetCount(){
      //   const stringNumber = this.data.tweetsCount.toString();
      //   if(stringNumber.length > 4){
      //     return stringNumber.substring(0, stringNumber.length - 3) + "K"
      //   }
      //   return stringNumber
      // }
    },
  };
</script>

<template>
  <div class="trends-item">
    <!-- <h3>{{ data.name }}</h3> -->
    <!-- <span>{{ normalizedTweetCount }} Tweets</span> -->
  </div>
</template>

<style lang="scss">
  // @import '@/assets/theme/colors.scss';
</style>
