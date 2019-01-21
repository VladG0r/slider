<template>
  <q-layout id="q-app" view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
        text-color="tertiary"
      >
        <q-toolbar-title >
          Simple Slider
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <SimpleSlider />
    </q-page-container>
  </q-layout>
</template>

<script>
import SimpleSlider from './components/SimpleSlider.vue'

export default {
  name: 'LayoutDefault',
  components: {
    SimpleSlider
  }
}
</script>

<style lang="stylus">
.q-layout-page-container
  height: 100vh
  min-height: 300px
</style>
