/* history yönetemi tek sayfa için uygun */
//!createWebHashHistory
import { createWebHistory, createRouter } from "vue-router";
//componenet import
import ShowBlogs from "./components/ShowBlogs.vue";
import AddBlog from "./components/AddBlog.vue";

const router= createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: ShowBlogs },
        { path: "/add", component: AddBlog }
    ]
});
/* dosyayı export etme */
export default router;
