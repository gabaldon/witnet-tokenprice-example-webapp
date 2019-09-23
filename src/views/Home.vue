<template>
  <div>
    Home view

    <v-timeline
      :align-top="alignTop"
      :dense="dense"
    >
      <v-timeline-item
        v-for="n in 3"
        :key="n"
        :fill-dot="fillDot"
        :hide-dot="hideDot"
        :icon="icon ? 'mdi-star' : ''"
        :icon-color=" iconColor ? 'deep-orange' : ''"
        :small="small"
      >
      <v-row>
        <template v-slot:icon>
          <v-avatar v-if="avatar">
            <img src="http://i.pravatar.cc/64">
          </v-avatar>
        </template>

          <v-card class="elevation-2">
            <v-card-text>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </v-card-text>
          </v-card>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  data: () => ({
    alignTop: true,
    avatar: false,
    dense: true,
    fillDot: true,
    hideDot: false,
    icon: true,
    iconColor: true,
    left: false,
    reverse: false,
    right: false,
    small: true
  }),
  computed: {
    ...mapState({
      polls: state => {
        return state
      }
    })
  }
}
</script>
