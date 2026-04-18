<script setup lang="ts">

type TemplateCard = {
  title: string;
  description: string;
  href?: string;
  icon: string;
  iconType?: "svg" | "url";
};

interface Props {
  cards: TemplateCard[];
}

withDefaults(defineProps<Props>(), {});

</script>

<template>
  <div class="flex-link-cards">
    <div class="flex-link-card__grid">

      <component
        :is="card.href ? 'a' : 'div'"
        v-for="(card, index) in cards"
        :key="index"
        class="flex-link-card"
        :href="card.href"
        target="_blank"
        rel="noreferrer"
      >
        <div class="flex-link-card__icon">
          <svg v-if="card.iconType !== 'url'" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" :d="card.icon" />
          </svg>
          <img v-else :src="card.icon" :alt="card.title" />
        </div>
        <div class="flex-link-card__title">{{ card.title }}</div>
        <div class="flex-link-card__description">{{ card.description }}</div>
      </component>
      
    </div>
  </div>
</template>
