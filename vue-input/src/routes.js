/* history yönetemi tek sayfa için uygun */
//!createWebHashHistory
import { createWebHistory, createRouter } from "vue-router";
//componenet import
import ShowBlogs from "./components/ShowBlogs.vue";
import AddBlog from "./components/AddBlog.vue";
import SingleBlog from "./components/SingleBlog.vue";

const router= createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: ShowBlogs },
        { path: "/add", component: AddBlog },
        { path: "/blog/:id", component: SingleBlog }
    ]
});
/* dosyayı export etme */
export default router;
