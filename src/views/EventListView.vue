<template>
 <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <EventCard1 v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>
<style scoped>
    .events{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue/";
import EventCard1 from "@/components/EventCard1.vue/";
export default {
  name: "EventListView",
  components: {
    EventCard,
    EventCard1
  },
  data(){
    return{
      events:[
        {
          id: 5928101,
          category: 'animal welfare',
          date:'july 22,2022',
          time:11.00,
          petsAllowed: false,
          organizer:'crey wales',
        }
      ]
    }
  }
};
</script>