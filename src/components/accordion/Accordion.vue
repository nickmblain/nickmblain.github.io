<template>
  <div>
    <v-expansion-panels
      accordion
      flat
      v-model="panel"
      mandatory
      class="about-expension-panels"
    >
      <v-expansion-panel v-for="(item, i) in accordionContent" :key="i">
        <v-expansion-panel-header hide-actions>{{
          item.title
        }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ item.content }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        panel: 1,
        accordionContent: [
          {
            title: "Your Business Skills But Never Stop Improving.",
            content: `Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat.`,
          },
          {
            title: "Tactics That Can Help Your Business Grow.",
            content: `Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat.`,
          },
          {
            title: "The Secret of Successful Business.",
            content: `Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat.`,
          },
          {
            title: "How To Start A Business With Business.",
            content: ` Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat.`,
          },
        ],
      };
    },
  };
</script>
