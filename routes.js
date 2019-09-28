import HomeComponent from './components/home'
import packages from './components/packages.vue';
import login from './components/login'
import signup from './components/signup';
import contact from './components/contact';
import display from './components/displaypack';
import myaccount from './components/myaccount';
import registration from './components/registration.vue'
import executive from './components/executive.vue'
import bookingform from './components/bookingform.vue'
import feedback from './components/admin/feedback'
import managetrain from './components/admin/managetrain'
import payment from './components/payment'
import adminlogin from './components/admin/adminlogin'
import managepackage from './components/admin/managepackage'
import managecoaches from './components/admin/managecoaches'



export default[
    {path:'/', component:HomeComponent},
    {path:'/packages', component:packages},
    {path:'/login', component:login},
    {path:'/signup', component:signup},
    {path:'/contact', component:contact},
    {path:'/packages/:id', component:display},
    {path:'/login/myaccount', component:myaccount},
    {path:'/registration', component:registration},
    {path:'/executive', component:executive},
    {path:'/packages/train/:id', component:bookingform},
    {path:'/admin/managetrain', component:managetrain},
    {path:'/admin/feedback', component:feedback},
    {path:'/payment', component:payment},
    {path:'/adminlogin', component:adminlogin},
    {path:'/admin/managepackage', component:managepackage},
    {path:'/admin/managecoaches', component:managecoaches}

]