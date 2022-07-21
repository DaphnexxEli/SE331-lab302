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

export default {
  name: "HomeView",
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
        date: 'July 22,2022',
        time: '11:00',
        petsAllowed: false,
        Organizer: 'Carey Wales',
        
      }
    ]
  }
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
