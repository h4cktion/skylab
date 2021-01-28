<template>
  <div class="languageSwitcher">
    <img src="../assets/french-flag.svg" alt="language flag" class="flag" @click.prevent="setLocale('en')" v-if="$i18n.locale === 'fr'" /> 
    <img src="../assets/british-flag.svg" alt="language flag" class="flag" @click.prevent="setLocale('fr')" v-if="$i18n.locale === 'en'" />
    <!-- <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select> -->
  </div>
</template>

<script>
export default {
data () {
    return { langs: ['fr', 'en'] }
  },
methods:{
  setLocale(local){
    this.$i18n.locale = local;
  }
}
}
</script>

<style>
.languageSwitcher{
  color: white;
  position: absolute;
  bottom: 5%;
  left: 25% 
}
.flag{
  width: 20px;
  height: 10px;
}
</style>