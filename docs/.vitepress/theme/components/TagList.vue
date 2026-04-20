<script setup lang="ts">
type TagList = {
  title: string;
  items?: string[];
}

interface Props{
  tags: TagList[];
}

const props = withDefaults(defineProps<Props>(), {
  tags: () => []
});
</script>

<template>
  <div class="tag-list-wrapper">
    <div 
      v-for="(tagGroup, index) in props.tags" 
      :key="index" 
      class="tag-list"
    >

      <div class="tag-list__title">{{ tagGroup.title }}</div>
      <div class="tag-list__items">

        <span 
          v-for="(item, idx) in tagGroup.items" 
          :key="idx" 
          class="tag-list__item"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>
