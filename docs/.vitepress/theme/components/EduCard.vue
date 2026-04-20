<script setup lang="ts">

type EduCard = {
  schoolName: string;
  major: string;
  period: string;
  logoUrl?: string;
};

const props = withDefaults(defineProps<EduCard>(), {
  logoUrl: '',
});

</script>

<template>
  <div class="edu-card">
    <div class="edu-card__content">
      <div>
        <div class="edu-card__school">
          {{ props.schoolName }}
        </div>
        
        <div class="edu-card__major">
          {{ props.major }}
        </div>
        
        <div class="edu-card__period">
          {{ props.period }}
        </div>
      </div>
    </div>

    <div class="edu-card__logo-wrap">
      <img
        :src="props.logoUrl"
        :alt="`${props.schoolName} 校徽`"
        class="edu-card__logo"
      />
    </div>
  </div>
</template>