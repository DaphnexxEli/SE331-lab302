<template>
  <h1>Students</h1>
  <div class="StudentEvent">
    <EventStudentCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.StudentEvent {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script>
import EventStudentCard from '@/components/EventStudentCard.vue'
import StudentEventService from '@/services/StudentEventService.js'
export default {
  name: 'StudentEventListView',
  components: {
    EventStudentCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    StudentEventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>