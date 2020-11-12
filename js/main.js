(() => {
    let vue_vm = new Vue({
        el: "#app",
        
        data: {
            message: "Hello from Vue!",
            anotherMessage: "sup",

            collection: [
                { name: "Justin", role: "Coordinator", nickname: "nitsuJ" },
                { name: "John", role: "prof", nickname: "super chill" },
                { name: "Joe", role: "prof", nickname: "teddy bear" }
            ]
        }, 

        methods: {
            logClicked() {
                console.log("clicked on a prof name");
            },

            clickHeader() {
                console.log("clicked on header");
            }
        }
    }).$mount("#app");
})();   