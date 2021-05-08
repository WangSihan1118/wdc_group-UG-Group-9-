const Topmenu = [
    { title:'Home', url:'/' },
    { title:'About', url:'/about' },
    { title:'Contact Us', url:'/contact' }
]

const VerticalMenu = [
    { title:'Change My Information', url:'/' },
    { title:'View My Trip History', url:'/' },
    { title:'Manage My Venue', url:'/' },
    { title:'View Venue Visit History', url:'/' },
    { title:'Regsister a New Admin', url:'/' },
    { title:'Manage User', url:'/' },
    { title:'Manage Venue', url:'/' },
]

var vueinst = new Vue({
    el:"#app",
    data:{
        choose:"Choose...",
        show_ad:true,
        dark_mode:false,
        top_menu:Topmenu,
        vmenu:VerticalMenu,
        c_text:'type your comment here',
        c_arr:[],
    },
    method:{
        addComment(){
            c_arr.push(c_text);
        }

    }
});

var vueinst2 = new Vue({
    el:"#manage",
    data:{
        choose:"Choose...",
        show_ad:true,
        dark_mode:false,
        top_menu:Topmenu,
        vmenu:VerticalMenu,
        c_text:'type your comment here',
        c_arr:[],
    },
    method:{
        addComment(){
            c_arr.push(c_text);
        }

    }
});