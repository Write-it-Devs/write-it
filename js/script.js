const app = Vue.createApp({
    data() {
        return {
            onlyVisible: true,
            searchVisible: false,
            langtext: "English",
            imgSource: "./img/flag.png",
            imgSourceAlt: "englishflag",
            langVisible: false,
            langChang: "",
            navClass: "fas fa-align-right",
            navVisible: false,
            langChange: "fas fa-angle-down",
            languages: [{
                    lang: "English",
                    imgAlt: "englishflag",
                    imgSrc: "./img/flag.png"
                },
                {
                    lang: "French",
                    imgAlt: "frenchflag",
                    imgSrc: "./img/flag.png"
                },
                {
                    lang: "Spanish",
                    imgAlt: "spanishflag",
                    imgSrc: "./img/flag.png"
                },
                {
                    lang: "German",
                    imgAlt: "germanflag",
                    imgSrc: "./img/flag.png"
                },
                {
                    lang: "Dutch",
                    imgAlt: "dutchflag",
                    imgSrc: "./img/flag.png"
                },
            ],
            infoaboutFirst: [{
                    class: "group",
                    h3: "People's content on every device",
                    p: "Our goal is to put every content on every device",
                },
                {
                    class: "accessibility",
                    h3: "Get access to a wide variety",
                    p: "Get access to a wide variety of blogs ranging from different niches",
                },
                {
                    class: "edit",
                    h3: "Be heard and make a living",
                    p: "You a passionate writer, a reporter,content creator,blogger. Come on to write it and be heard also make a living",
                },
            ],
            infoaboutSecond: [{
                    class: "group",
                    h3: "People's content on every device",
                    p: "Our goal is to put every content on every device",
                },
                {
                    class: "support",
                    h3: "We are here for you",
                    p: "As a writer,the only thing you need to do is focus on the writing,we do the rest. From you getting your blog online to you getting them in front of your audience and even monetizing it,write-it is here for you 24/7 support",
                },
                {
                    class: "cancel",
                    h3: "We cancel your stress",
                    p: "From getting all the blogs you want to read in different niches all in one platform to saving them, and much more. We are here for you",
                },
            ],
            readerReason: [{
                    class: "grain",
                    header: "Variety and choice",
                    text: "All your actions,activites that you do on write-it is done on a very secure platform. Your information is safe with us,All your actions,activites that you do on write-it is done on a very secure platform. Your information is safe with us",
                },
                {
                    class: "dashboard_customize",
                    header: "Tailored to you",
                    text: "All your actions,activites that you do on write-it is done on a very secure platform. Your information is safe with us,All your actions,activites that you do on write-it is done on a very secure platform. Your information is safe with us",
                },
                {
                    class: "wifi_protected_setup",
                    header: "Easy to you",
                    text: "All your actions,activites that you do on write-it is done on a very secure platform. Your information is safe with us,All your actions,activites that you do on write-it is done on a very secure platform. Your information is safe with us",
                },
            ],
            bloggers: [{
                    class: "speed",
                    text: "Very high speed",
                    textHover: "All your transactions, informations and blogs and activities are safe here on write-it",
                    id: "blog_1",
                },
                {
                    class: "all_inclusive",
                    text: "All inclusive dashboard",
                    textHover: "All your transactions, informations and blogs and activities are safe here on write-it",
                    id: "blog_2",
                },
                {
                    class: "payments",
                    text: "Payment options",
                    textHover: "All your transactions, informations and blogs and activities are safe here on write-it",
                    id: "blog_3",
                },
                {
                    class: "security",
                    text: "Top security",
                    textHover: "All your transactions, informations and blogs and activities are safe here on write-it",
                    id: "blog_4",
                },
                {
                    class: "support_agent",
                    text: "24/7 support",
                    textHover: "All your transactions, informations and blogs and activities are safe here on write-it",
                    id: "blog_5",
                },
                {
                    class: "done",
                    text: "Done for you templates and your domain",
                    textHover: "All your transactions, informations and blogs and activities are safe here on write-it",
                    id: "blog_6",
                },
                {
                    class: "free_cancellation",
                    text: "It is free to blog",
                    textHover: "All your transactions, informations and blogs and activities are safe here on write-it",
                    id: "blog_7",
                },
                {
                    class: "monetization_on",
                    text: "Monetization advancement",
                    textHover: "All your transactions, informations and blogs and activities are safe here on write-it",
                    id: "blog_8",
                },
            ],
            blogInput: "",
            blogPosts: [{
                    imgLink: "./img/testimg.png",
                    header: "Lorem Ipsum dinor",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus adipisci obcaecati odio molestiae vitae illum, eligendi accusamus.",
                    profileImg: "./img/profile1.png",
                    profileName: "Michael Splinter",
                    profileStatus: "Diamond blogger",
                    readTime: "20mins read",
                    href: "#",
                    blogType: "Finance",
                },
                {
                    imgLink: "./img/testimg2.png",
                    header: "Lorem Ipsum dinor",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus adipisci obcaecati odio molestiae vitae illum, eligendi accusamus.",
                    profileImg: "./img/profile2.png",
                    profileName: "Grace Garroway",
                    profileStatus: "Platinum blogger",
                    readTime: "30mins read",
                    href: "#",
                    blogType: "Education",
                },
                {
                    imgLink: "./img/testimg3.png",
                    header: "Lorem Ipsum dinor",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus adipisci obcaecati odio molestiae vitae illum, eligendi accusamus.",
                    profileImg: "./img/profile3.png",
                    profileName: "Mary Herrindell",
                    profileStatus: "Gold blogger",
                    readTime: "20mins read",
                    href: "#",
                    blogType: "Fashion",
                },
                {
                    imgLink: "./img/testimg4.png",
                    header: "Lorem Ipsum dinor",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus adipisci obcaecati odio molestiae vitae illum, eligendi accusamus.",
                    profileImg: "./img/profile4.png",
                    profileName: "Jake Porter",
                    profileStatus: "Diamond blogger",
                    readTime: "20mins read",
                    href: "#",
                    blogType: "Health",
                },
                {
                    imgLink: "./img/testimg.png",
                    header: "Lorem Ipsum dinor",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus adipisci obcaecati odio molestiae vitae illum, eligendi accusamus.",
                    profileImg: "./img/profile1.png",
                    profileName: "Michael Splinter",
                    profileStatus: "Diamond blogger",
                    readTime: "20mins read",
                    href: "#",
                    blogType: "Finance",
                },
                {
                    imgLink: "./img/testimg2.png",
                    header: "Lorem Ipsum dinor",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus adipisci obcaecati odio molestiae vitae illum, eligendi accusamus.",
                    profileImg: "./img/profile2.png",
                    profileName: "Grace Garroway",
                    profileStatus: "Platinum blogger",
                    readTime: "30mins read",
                    href: "#",
                    blogType: "Education",
                },
                {
                    imgLink: "./img/testimg3.png",
                    header: "Lorem Ipsum dinor",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus adipisci obcaecati odio molestiae vitae illum, eligendi accusamus.",
                    profileImg: "./img/profile3.png",
                    profileName: "Mary Herrindell",
                    profileStatus: "Gold blogger",
                    readTime: "20mins read",
                    href: "#",
                    blogType: "Fashion",
                },
                {
                    imgLink: "./img/testimg4.png",
                    header: "Lorem Ipsum dinor",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus adipisci obcaecati odio molestiae vitae illum, eligendi accusamus.",
                    profileImg: "./img/profile4.png",
                    profileName: "Jake Porter",
                    profileStatus: "Diamond blogger",
                    readTime: "20mins read",
                    href: "#",
                    blogType: "Health",
                },
                {
                    imgLink: "./img/testimg.png",
                    header: "Lorem Ipsum dinor",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus adipisci obcaecati odio molestiae vitae illum, eligendi accusamus.",
                    profileImg: "./img/profile1.png",
                    profileName: "Michael Splinter",
                    profileStatus: "Diamond blogger",
                    readTime: "20mins read",
                    href: "#",
                    blogType: "Finance",
                },
                {
                    imgLink: "./img/testimg2.png",
                    header: "Lorem Ipsum dinor",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus adipisci obcaecati odio molestiae vitae illum, eligendi accusamus.",
                    profileImg: "./img/profile2.png",
                    profileName: "Grace Garroway",
                    profileStatus: "Platinum blogger",
                    readTime: "30mins read",
                    href: "#",
                    blogType: "Education",
                },
            ],
            faqs: [{
                    question: "How long will I get my payment?",
                    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptatibus a ",
                },
                {
                    question: "How can I stop seeing ads on the blog I read?",
                    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptatibus a ",
                },
                {
                    question: "How long is my blog gonna be active",
                    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptatibus a ",
                },
                {
                    question: "How can I contact support?",
                    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptatibus a ",
                },
                {
                    question: "How long will I get my payment?",
                    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptatibus a ",
                },
                {
                    question: "How can I stop seeing ads on the blog I read?",
                    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptatibus a ",
                },
            ],
        }
    },
    mounted() {

    },
    methods: {
        show() {
            this.onlyVisible = false;
            this.searchVisible = true;
        },
        hide() {
            this.onlyVisible = true;
            this.searchVisible = false;
        },
        nav() {
            this.navVisible = !this.navVisible;
            if (this.navVisible == false) {
                this.navClass = "fas fa-align-right";
                this.navIndex = "-1";
            } else {
                this.navClass = "fas fa-times";
                this.navIndex = "1";
                this.langVisible = false;
                this.langChange = "fas fa-angle-down";
            }
        },
        langList() {
            this.langVisible = !this.langVisible;
            if (this.langVisible == false) {
                this.langChange = "fas fa-angle-down";
            } else {
                this.langChange = "fas fa-angle-up";
                this.navVisible = false;
                this.navClass = "fas fa-align-right";

            }
        },
        login() {
            location.href = "./login/index.html";
        },
    },

})
app.component("lang-list", {
    methods: {
        langtest(event) {
            const parent = event.target.parentElement;
            const langText = document.getElementById("langText")
            const langImg = document.getElementById("langImg");
            const imgLink = parent.children[0].src;
            const imgAlt = parent.children[0].lastChild;
            const text = parent.children[1].innerHTML;
            langText.innerHTML = text;
            langImg.src = imgLink;
            langImg.alt = imgAlt;
        }
    },
    props: {
        languages: Array,
    },
    template: `
      <li v-for="language in languages" class="langClass" @click="langtest">
         <img :src= "language.imgSrc" :alt="language.imgAlt">
         <p>{{ language.lang }}</p>
      </li>
    `
})
app.component("info-about", {
    props: {
        infos: Array
    },
    template: `
         <div v-for="info in infos">
            <div class="header">
                <div>
                    <i class="material-icons">{{ info.class }}</i>
                </div>
                <div>
                   <h3>{{ info.h3 }}</h3>
                </div>
            </div>
            <p>{{ info.p }}</p>
         </div>
    `
})
app.component("reader-cause", {
    props: {
        causes: Array,
    },
    template: `
       <div class="reader carousel-item" v-for="cause in causes">
           <div class="head">
               <span class="material-icons">{{ cause.class }}</span>
           <h3> {{ cause.header }} </h3>
           </div>
           <p> {{ cause.text }} </p>
       </div>
    `
})
app.component("blog-list", {
    methods: {
        show(event) {
            const parent = event.target.parentElement;
            parent.style.border = "none";
        },
        hide(event) {
            const parent = event.target.parentElement;
            parent.style.border = ".5px solid rgba(0, 0, 255, 1)";
        },
    },
    props: {
        bloggers: Array,
    },
    template: `
       <div class="blogrocks" v-for="blogger in bloggers" :id="blogger.id" @mouseover="show" @mouseout="hide"  data-aos="fade-down" data-aos-duration="1000">
          <div class="blogrocks_main">
            <span class="material-icons"> {{ blogger.class }} </span>
            <small> {{ blogger.text }} </small>
          </div>
           <div class="blogrocks_hover" id="hover">
                <p> {{ blogger.textHover }} </p>
           </div>
       </div>
    `
})
app.component("blog-post", {
    template: "#blog-template",
    props: {
        entries: Array,
        filterKey: String,
    },
    data: function() {
        return {
            sortKey: ""
        }
    },
    computed: {
        fElement: function() {
            const filterKey = this.filterKey &&
                this.filterKey.toLowerCase()

            let entries = this.entries

            if (filterKey) {
                entries = entries.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        return (
                            String(row[key]).toLowerCase().indexOf(filterKey) > -1
                        )
                    })
                })
            }
            if (entries != "") {
                return entries;
            } else {
                alert("we don't have the term you searched,search for another");
                filterKey = "";
                return entries;
            }
        },
        sortColumns() {
            const sortedColumns = {}

            this.columns.forEach(function(key) {
                sortedColumns[key] = 1
            })
            return sortedColumns
        }
    }
})
app.component("faq-questions", {
    data() {
        return {
            indicator: "+",
            answer: false,
            toggle: false,
        }
    },
    methods: {
        change(event) {
            const parent = event.target.parentElement;
            const mainparent = parent.parentElement;
            const buttonParent = mainparent.children[0];
            const button = buttonParent.lastChild;
            const p = mainparent.lastChild;
            if (this.toggle) {
                this.toggle = false;
                p.style.display = "none";
                button.innerHTML = "+";
                return;
            }
            if (!this.toggle) {
                this.toggle = true;
                button.innerHTML = "-";
                p.style.display = "block";
                return;
            }
        }
    },
    props: {
        faqs: Array,
    },
    template: `
        <div class="faq_mainnews" data-aos="fade-up" data-aos-duration="2000">
           <h3> <i>FAQS </i> </h3>
           <div class="faq_mainnews_slider">
                 <div class="question" v-for="faq in faqs">
                    <div class="question_main">
                        <h5> {{ faq.question }} </h5>
                        <button @click="change"> {{ indicator }} </button>
                    </div>
                    <p> {{ faq.answer }} </p>
                 </div>
           </div>
        </div>
    `
})
app.mount("#body");
