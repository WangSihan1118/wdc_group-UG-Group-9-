const Topmenu = [
    { title:'Home', url:'/' },
    { title:'About', url:'/about' },
    { title:'Contact Us', url:'/contact' }
];

/*const VerticalMenu = [
    { title:'(User) Change My Information', method: this.Change_user_information},
    { title:'(User) View My Trip History', method: this.View_my_history},
    { title:'(Venue Owner) Manage My Venue', method: this.Manage_my_venue},
    { title:'(Venue Owner) View Venue Visit History', method: this.View_venue_history},
    { title:'(Admin) Regsister a New Admin', method: this.Register_new_admin},
    { title:'(Admin)Manage User', method: this.Manage_user},
    { title:'(Admin)Manage Venue', method: this.Manage_venue},
]*/

var vueinst = new Vue({
    el:"#app",
    data:{
        choose:"Choose...",
        show_ad:true,
        dark_mode:false,
        top_menu:Topmenu,
        c_text:'type your comment here',
        c_arr:[],
    },
    methods:{
        addComment(){
            c_arr.push(c_text);
        }

    }
});

var AccountManage = new Vue({
    el:"#manage",
    data(){
        return {
        vmenu : [
            { title:'(User) Change My Information', url:'./manage/change_my_infor.html' },
            { title:'(User) View My Trip History', url:'./manage/view_my_trip.html' },
            { title:'(Venue Owner) Manage My Venue', url:'./manage/manage_venue.html' },
            { title:'(Venue Owner) View Venue Visit History', url:'./manage/view_venue_history.html' },
            { title:'(Admin) Change Admin Information', url:'./manage/admin_change_my_infor.html' },
            { title:'(Admin) Regsister a New Admin', url:'./manage/RegisterAdmin.html' },
            { title:'(Admin) Manage User', url:'./manage/admin_manage_user.html' },
            { title:'(Admin) Manage Venue', url:'./manage/admin_manage_venue.html' },
        ],
        };
    },
    //暂时忽略methods部分
    methods:{

        Change_user_information() {
            alert('Change_user_information!');
        },
        View_my_history() {
            alert('View_my_history!');
        },

        Manage_my_venue() {
          alert('Manage_my_venue!');
        },
        View_venue_history() {
          alert('View_venue_history!');
        },
        Register_new_admin() {
          alert('Register_new_admin!');
        },

        Manage_user() {
          alert('Manage_user!');
        },
        Manage_venue() {
          alert('Manage_venue!');
        }
    }
});

var User_information = new Vue({
    el:"#User_Infor",
    data(){
        return{
        user_form:[
            { title:"First name:"},
            { title:"Last name:"},
            { title:"Phone number:"},
            { title:"Email:"},
            { title:"Home adress:"},
        ],
        };
    },
});

var Venue_infor = new Vue({
    el:"#Venue_infor",
    data(){
        return{
        venue_form:[
            { title:"Venue Name:"},
            { title:"Manager phone number:"},
            { title:"Longtitude:"},
            { title:"Latitude:"},
            { title:"Country:"},
            { title:"State:"},
            { title:"City:"},
            { title:"Suburb:"},
            { title:"Address:"},
        ],
        };
    },
});

var Admin_infor = new Vue({
    el:"#admin_infor",
    data(){
        return{
        admin_form:[
            { title:"Official Name:"},
            { title:"Official Contact Number:"},
            { title:"Official Email Address:"},
            { title:"Official Address:"},
        ],
        };
    },
});

var manage_user = new Vue({
    el:"#manage_user",
    data(){
        return{
        userList:[
            { id:"u12345675667",venue_name:"someplace",arrival_time:"23:09 10/5/2021"},
        ],
        };
    },
});

var manage_venue = new Vue({
    el:"#manage_venue",
    data(){
        return{
        venueList:[
            { id:"v1234567",name:"someplace"},
        ],
        };
    },
});

var userTrip = new Vue({
    el:"#userTrip",
    data(){
        return{
        userTrip:[
            { id:"u1234567",venue_name:"someplace",arrival_time:"23:09 10/5/2021"},
        ],
        };
    },
});

var checkin_history = new Vue({
    el:"#checkin_history",
    data(){
        return{
        checkinHirstory:[
            { id:"u1234567",venue_name:"someplace",arrival_time:"23:09 10/5/2021"},
            { id:"u1234567",venue_name:"someplace",arrival_time:"23:10 10/5/2021"},
        ],
        };
    },
});


