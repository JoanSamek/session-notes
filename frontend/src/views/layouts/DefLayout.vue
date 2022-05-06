<template lang="">
  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item
        :prepend-avatar="require('../../assets/logo.jpg')"
        title="Lore Hoard"
        subtitle="session notes"
        @click="$router.push('/')"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.title"
        @click="goTo(item.link)"
        class="text-grey-darken-2"
        :class="$route.path === item.link ? 'v-list-item--active' : ''"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-btn
    @click="drawer = true"
    v-if="$vuetify.display.mobile"
    variant="outlined"
    icon
    color="primary"
    class="menuIcon"
  >
    <v-icon>mdi-format-list-bulleted-square</v-icon>
  </v-btn>

  <v-list class="titleBanner" v-if="$vuetify.display.mobile && !drawer">
    <v-list-item title="Lore Hoard" subtitle="session notes">
      <v-list-item-avatar end>
        <v-img :src="require('../../assets/logo.jpg')" />
      </v-list-item-avatar>
    </v-list-item>
  </v-list>

  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "DefLayout",
  data() {
    return {
      drawer: null,
      items: [
        {
          title: "Party members",
          icon: "mdi-account-group",
          link: "/squad",
        },
        {
          title: "Daily log",
          icon: "mdi-calendar-today",
          link: "/log",
        }, //party log, session list, quests
        {
          title: "NPCs",
          icon: "mdi-account-multiple",
          link: "/npcs",
        },
        {
          title: "Locations",
          icon: "mdi-compass",
          link: "/locations",
        },
        {
          title: "Equipment",
          icon: "mdi-bag-personal",
          link: "/stuff",
        },
        {
          title: "Deathcount",
          icon: "mdi-coffin",
          link: "/death",
        },
        {
          title: "Battle stats",
          icon: "mdi-fencing",
          link: "/battle",
        },
        {
          title: "Epic rolls",
          icon: "mdi-dice-d20",
          link: "/rolls",
        },
        {
          title: "Gallery",
          icon: "mdi-image-multiple",
          link: "/pics",
        },
        {
          title: "Other lore",
          icon: "mdi-star-plus",
          link: "/lore",
        },
      ],
    };
  },
  methods: {
    goTo(link) {
      this.$router.push({ path: link });
    },
  },
};
</script>

<style lang="scss" scoped>
.menuIcon {
  position: absolute;
  top: 10px;
  left: 10px;
}

.titleBanner {
  width: 200px;
  position: absolute;
  top: 0px;
  right: 0px;
  text-align: right;
}
</style>
