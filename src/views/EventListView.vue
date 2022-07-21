<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <EventCard1 v-for="event in events" :key="event.id" :event="event"/>

  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import EventCard from "@/components/EventCard.vue";
import EventCard1 from "@/components/EventCard1.vue";
import EventService from '@/services/EventService.js'

export default {
  name: "EventList",
  components: {
    EventCard,
    EventCard1
},
data(){
  return{
        
     events: null
  }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
}
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>
