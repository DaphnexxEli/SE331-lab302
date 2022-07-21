import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import AboutView from "../views/AboutView.vue";
import EventListView2 from '../views/EventListView2.vue'
import StudentEventListView from '../views/StudentEventListView.vue'
const routes = [{
        path: "/",
        name: "EventList",
        component: EventListView,
    },
    {
        path: "/about",
        name: "about",

        component: AboutView
    },
    {
        path: '/event1',
        name: 'EventListView',
        component: EventListView2
    },

    {
        path: '/students',
        name: 'students',
        component: StudentEventListView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;