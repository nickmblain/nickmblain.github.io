<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="text-center inner">
          <slot name="heading-title"></slot>
          <slot name="description"></slot>
          <div class="slide-btn">
            <slot name="button"></slot>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
