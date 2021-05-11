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
            {title:'(Admin) Change Admin Information', url:'./manage/admin_change_my_infor.html'}
            { title:'(Admin) Regsister a New Admin', url:'./manage/RegisterAdmin.html' },
            { title:'(Admin)Manage User', url:'./manage/manage_user.html' },
            { title:'(Admin)Manage Venue', url:'./manage/admin_manage_venue.html' },
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
