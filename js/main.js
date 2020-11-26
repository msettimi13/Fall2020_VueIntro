(() => {
    Vue.component("prof-card", {
        props: ["prof"],

        template: `<li>
                        <img :src="'images/' prof.avatar" alt="prof image>
                        <p>Prof Name: Temp</p>
                        <a href="" class="remove-prof">Show {{ prof.name }}'s info</a>
                        <a href="" class="remove-prof">Remove {{ prof.name }}</a>
                    </li>`,

        created: function() {
            console.log(`created ${this.prof.name}'s card`);
        }
    });

    let vue_vm = new Vue({
        // el: "#app",
        
        data: {
            message: "Hello from Vue!",
            anotherMessage: "sup",
            removeAformat: true,
            showBioData: false,
            professors: [],
        }, 

        //this is the mounted lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        mounted: function() {
            console.log("Vue is mounted!");
            //alert("hi would ya")

            this.professors.push({name: "Jarrod", role: "supermodel prof", nickname: "zoolander"})
        },

        //run a method when we change our view (update the DOM with vue)
        updated: function() {
            console.log('Vue just updated the DOM');
        },

        methods: {
            logClicked() {
                console.log("clicked on a prof name");
            },

            clickHeader() {
                console.log("clicked on header");
            },

            removeProf(target) {
                // remove this prof from the professors array
                console.log('clicked to remove prof', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the vue instance itself by default
                this.showBioData = this.showBioData ? false: true
            }
        }
    }).$mount("#app");
})();   