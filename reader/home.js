const app = Vue.createApp({
    data() {
        return {
            userImg: "../img/userimg.png",
            userName: "john doe",
            userCountry: "../img/countryamerican.png",
            userCountryName: "america",
            imgSource: "../img/flag.png",
            imgSourceAlt: "englishflag",
            langChange: "fas fa-angle-down",
            langtext: "English",
            langVisible: false,
            all: true,
            deleted: false,
            languages: [{
                    lang: "English",
                    imgAlt: "englishflag",
                    imgSrc: "../img/flag.png"
                },
                {
                    lang: "French",
                    imgAlt: "frenchflag",
                    imgSrc: "../img/flag.png"
                },
                {
                    lang: "Spanish",
                    imgAlt: "spanishflag",
                    imgSrc: "../img/flag.png"
                },
                {
                    lang: "German",
                    imgAlt: "germanflag",
                    imgSrc: "../img/flag.png"
                },
                {
                    lang: "Dutch",
                    imgAlt: "dutchflag",
                    imgSrc: "../img/flag.png"
                },
            ],
            settinngVisible: false,
            toggle: "fas fa-toggle-on",
            mode: "Light mode",
            toggleChange: false,
            bars: [{
                    class: "house",
                    title: "home",
                    href: "./homepage.html",
                    id: "home",
                },
                {
                    class: "bookmarks",
                    title: "bookmarks",
                    href: "./bookmarks.html",
                    id: "book",
                },
                {
                    class: "subscriptions",
                    title: "subscriptions",
                    href: "./subscriptions.html",
                    id: "sub",
                },
                {
                    class: "edit_note",
                    title: "write",
                    href: "../html/ltr/vertical-collapsed-menu-template/index.html",
                    id: "write",
                },
            ],
            writers: [{
                    src: "../img/person1.png",
                    alt: "writer1",
                    name: "Rodriguez",
                    level: "Diamond Blogger",
                    color: "rgba(0, 0, 255, 1)",
                    href: "#",
                    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis",
                },
                {
                    src: "../img/person2.png",
                    alt: "writer2",
                    name: "Elaine",
                    level: "Gold Blogger",
                    href: "#",
                    color: "rgba(255, 215, 0,.6)",
                    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis",
                },
                {
                    src: "../img/person3.png",
                    alt: "writer3",
                    name: "Jasper",
                    level: "Silver Blogger",
                    color: "green",
                    href: "#",
                    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis",
                },
                {
                    src: "../img/person4.png",
                    alt: "writer4",
                    name: "Rebecca",
                    level: "Bronze Blogger",
                    color: "brown",
                    href: "#",
                    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis",
                },
            ],
            topics: [{
                    text: "Lorem ipsum dinor do"
                },
                {
                    text: "Lorem ipsum dinor dolor"
                },
                {
                    text: "Lorem ipsum dinor"
                },
                {
                    text: "Lorem ipsum dinor do"
                },
                {
                    text: "Lorem ipsum dinor dolor"
                },
                {
                    text: "Lorem ipsum dinor"
                },
                {
                    text: "Lorem ipsum dinor dolor"
                },
            ],
            niches: [{
                    niche: "Finance",
                },
                {
                    niche: "Health",
                },
                {
                    niche: "Education",
                },
                {
                    niche: "Politics",
                },
                {
                    niche: "Fashion",
                },
                {
                    niche: "Sports",
                },
                {
                    niche: "Cool",
                },
                {
                    niche: "Lamda",
                },
            ],
            articles: [{
                    writerImg: "../img/person1.png",
                    writerName: "Charles Jones",
                    articleTime: "12:00am CAT",
                    articleImg: "../img/aritcleimg.png",
                    articleHead: "SAVE OUR YOUTHS FROM CORRUPTIONS NEPOTISM AND RACISM",
                    articleSummary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero animi, sunt ullam autem numquam, sapiente aliquam aut in amet? Molestias velit ea ullam quasi maiores. Quisquam, quod accusamus",
                    articleLink: "./index.html",
                    readTime: "8mins read",
                    niche: "Finance",
                },
                {
                    writerImg: "../img/person2.png",
                    writerName: "Rebecca Smith",
                    articleImg: "../img/articleimg2.png",
                    articleTime: "5.00am CAT",
                    articleHead: "SAVE OUR YOUTHS FROM CORRUPTIONS NEPOTISM AND RACISM",
                    articleSummary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero animi, sunt ullam autem numquam",
                    articleLink: "./index.html",
                    readTime: "10mins read",
                    niche: "Politics",
                },
                {
                    writerImg: "../img/person3.png",
                    writerName: "Kate Mcguire",
                    articleTime: "3mins ago",
                    articleImg: "../img/articleimg2.png",
                    articleHead: "LOREM IPSUM DINOR DOLOR RATI LOOKING GOOD",
                    articleSummary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero animi, sunt ullam autem numquam",
                    articleLink: "./index.html",
                    readTime: "5mins read",
                    niche: "Education",
                },
                {
                    writerImg: "../img/person4.png",
                    writerName: "Jasper Jusiper",
                    articleImg: "../img/aritcleimg.png",
                    articleTime: "7pm CAT",
                    articleHead: "LOREM IPSUM DINOR DOLOR RATI LETS SEE HOW IT GOES",
                    articleSummary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero animi, sunt ullam autem numquam, sapiente aliquam aut in amet? Molestias velit ea ullam quasi maiores. Quisquam, quod accusamus.",
                    articleLink: "./index.html",
                    readTime: "4mins read",
                    niche: "Fashion",
                },
                {
                    writerImg: "../img/person3.png",
                    writerName: "Kate Mcguire",
                    articleTime: "3mins ago",
                    articleImg: "../img/articleimg2.png",
                    articleHead: "LOREM IPSUM DINOR DOLOR RATI LOOKING GOOD",
                    articleSummary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero animi, sunt ullam autem numquam",
                    articleLink: "./index.html",
                    readTime: "5mins read",
                    niche: "Education",
                },
                {
                    writerImg: "../img/person4.png",
                    writerName: "Jasper Jusiper",
                    articleImg: "../img/aritcleimg.png",
                    articleTime: "7pm CAT",
                    articleHead: "LOREM IPSUM DINOR DOLOR RATI LETS SEE HOW IT GOES",
                    articleSummary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero animi, sunt ullam autem numquam, sapiente aliquam aut in amet? Molestias velit ea ullam quasi maiores. Quisquam, quod accusamus.",
                    articleLink: "./index.html",
                    readTime: "4mins read",
                    niche: "Fashion",
                },
            ],
            laternotify: [{
                    imgLink: "../img/person2.png",
                    name: "blogworld",
                    header: "Lorem ipsum dinor lorem ipsum dinor dolor reti it is good",
                    time: "50mins ago",
                    href: "#",
                },
                {
                    imgLink: "../img/person3.png",
                    name: "financeworld",
                    header: "Lorem ipsum dinor lorem ipsum dinor dolor reti sit amet",
                    time: "Just now",
                    href: "#",
                },
                {
                    imgLink: "../img/person5.png",
                    name: "educator",
                    header: "Lorem ipsum dinor lorem ipsum dinor dolor reti sit amet",
                    time: "3:00pm CAT",
                    href: "#",
                },
                {
                    imgLink: "../img/person2.png",
                    name: "blogworld",
                    header: "Lorem ipsum dinor lorem ipsum dinor dolor reti it is good",
                    time: "50mins ago",
                    href: "#",
                },
                {
                    imgLink: "../img/person3.png",
                    name: "financeworld",
                    header: "Lorem ipsum dinor lorem ipsum dinor dolor reti sit amet",
                    time: "Just now",
                    href: "#",
                },
                {
                    imgLink: "../img/person5.png",
                    name: "educator",
                    header: "Lorem ipsum dinor lorem ipsum dinor dolor reti sit amet",
                    time: "3:00pm CAT",
                    href: "#",
                },
            ],
            notify: [{
                    imgLink: "../img/person2.png",
                    name: "blogworld",
                    header: "Lorem ipsum dinor lorem ipsum dinor dolor reti it is good",
                    time: "50mins ago",
                    href: "#",
                },
                {
                    imgLink: "../img/person3.png",
                    name: "financeworld",
                    header: "Lorem ipsum dinor lorem ipsum dinor dolor reti sit amet",
                    time: "Just now",
                    href: "#",
                },
                {
                    imgLink: "../img/person5.png",
                    name: "educator",
                    header: "Lorem ipsum dinor lorem ipsum dinor dolor reti sit amet",
                    time: "3:00pm CAT",
                    href: "#",
                },
            ],
            ndelete: [{
                    imgLink: "../img/person2.png",
                    name: "blogworld",
                    header: "Lorem ipsum dinor lorem ipsum dinor dolor reti it is good",
                    time: "50mins ago",
                    href: "#",
                },
                {
                    imgLink: "../img/person3.png",
                    name: "financeworld",
                    header: "Lorem ipsum dinor lorem ipsum dinor dolor reti sit amet",
                    time: "Just now",
                    href: "#",
                },
                {
                    imgLink: "../img/person5.png",
                    name: "educator",
                    header: "Lorem ipsum dinor lorem ipsum dinor dolor reti sit amet",
                    time: "3:00pm CAT",
                    href: "#",
                },
            ],
            bookmarks: [{
                    writerImg: "../img/person1.png",
                    writerName: "Charles Jones",
                    articleTime: "12:00am CAT",
                    articleImg: "../img/aritcleimg.png",
                    articleHead: "SAVE OUR YOUTHS FROM CORRUPTIONS NEPOTISM AND RACISM",
                    articleSummary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero animi, sunt ullam autem numquam, sapiente aliquam aut in amet? Molestias velit ea ullam quasi maiores. Quisquam, quod accusamus",
                    articleLink: "./index.html",
                    readTime: "8mins read",
                    niche: "Finance",
                },
                {
                    writerImg: "../img/person2.png",
                    writerName: "Rebecca Smith",
                    articleImg: "../img/articleimg2.png",
                    articleTime: "5.00am CAT",
                    articleHead: "SAVE OUR YOUTHS FROM CORRUPTIONS NEPOTISM AND RACISM",
                    articleSummary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero animi, sunt ullam autem numquam",
                    articleLink: "./index.html",
                    readTime: "10mins read",
                    niche: "Health",
                },
                {
                    writerImg: "../img/person1.png",
                    writerName: "Charles Jones",
                    articleTime: "12:00am CAT",
                    articleImg: "../img/aritcleimg.png",
                    articleHead: "SAVE OUR YOUTHS FROM CORRUPTIONS NEPOTISM AND RACISM",
                    articleSummary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero animi, sunt ullam autem numquam, sapiente aliquam aut in amet? Molestias velit ea ullam quasi maiores. Quisquam, quod accusamus",
                    articleLink: "./index.html",
                    readTime: "8mins read",
                    niche: "Education",
                },
                {
                    writerImg: "../img/person2.png",
                    writerName: "Rebecca Smith",
                    articleImg: "../img/articleimg2.png",
                    articleTime: "5.00am CAT",
                    articleHead: "SAVE OUR YOUTHS FROM CORRUPTIONS NEPOTISM AND RACISM",
                    articleSummary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero animi, sunt ullam autem numquam",
                    articleLink: "./index.html",
                    readTime: "10mins read",
                    niche: "Politics",
                },
            ],
            subscriptions: [{
                    imgLink: "../img/person2.png",
                    name: "Rodriguez Mane",
                    title: "Diamond blogger",
                    href: "#",
                    color: "rgba(0, 0, 255, 1)",
                    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero"
                },
                {
                    imgLink: "../img/avatar1.png",
                    name: "Andrea Gueris",
                    title: "Gold blogger",
                    href: "#",
                    color: "rgba(255, 215, 0,.6)",
                    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero"
                },
                {
                    imgLink: "../img/avatar2.png",
                    name: "Elaine Becca",
                    title: "Silver blogger",
                    href: "#",
                    color: "green",
                    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero"
                },
                {
                    imgLink: "../img/avatar3.png",
                    name: "John Steel",
                    title: "Bronze blogger",
                    href: "#",
                    color: "brown",
                    summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reiciendis libero"
                },
            ],
            numbers: [{
                all: "5",
                delete: "8",
            }],
            allactive: "allactive",
            redactive: "",
        }
    },
    methods: {
        langList() {
            this.langVisible = !this.langVisible;
            if (this.langVisible == false) {
                this.langChange = "fas fa-angle-down";
            } else if (this.langVisible == true) {
                this.langChange = "fas fa-angle-up";
            }
        },
        setting() {
            this.settinngVisible = !this.settinngVisible;
        },
        modeChange() {
            if (this.toggleChange == false) {
                this.toggle = "fas fa-toggle-on";
                this.mode = "Light mode";
                console.log(this.nicheKey);
            } else if (this.toggleChange == true) {
                this.toggle = "fas fa-toggle-off";
                this.mode = "Dark mode";
            }
        },
        changeNotify() {
            location.href = "notify.html"
        },
        notifyall() {
            this.all = true;
            this.deleted = false;
            this.allactive = "allactive";
            this.redactive = "";
        },
        notifydelete() {
            this.all = false;
            this.deleted = true;
            this.allactive = "";
            this.redactive = "redactive";
        },
    }

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
app.component("bar-add", {
    props: {
        bars: Array,
    },
    template: `
        <div class="bars" v-for="bar in bars">
            <i :title="bar.title"> <a :href="bar.href" class="material-icons" :id="bar.id">  {{ bar.class }} </a> </i>
        </div>
`
})
app.component("writer-img", {
    data() {
        return {
            toggle: false,
        }
    },
    methods: {
        unsubscribe(event) {
            this.toggle = !this.toggle;
            const el = event.target;
            if (this.toggle == false) {
                el.innerHTML = "Subscribe";
                el.className = "";
            } else if (this.toggle == true) {
                el.innerHTML = "Unsubscribe";
                el.className = "active";
            }
        }
    },
    props: {
        writers: Array,
    },
    template: `
        <div class="images">
            <div class="writer" v-for="writer in writers" data-aos="fade-up" data-aos-duration="1000">
                    <img :src="writer.src" :alt="writer.alt" :title="writer.name" />
                    <div class="text">
                        <div class="text_header">
                            <h4> <a :href="writer.href"> {{ writer.name }} </a> </h4>
                            <small> <a :href="writer.href" :style="{color:writer.color} "> {{ writer.level }} </a> </small>
                        </div>
                        <summary> {{ writer.summary }} </summary>
                    </div>
                    <div class="follow">
                        <button @click="unsubscribe"> Subscribe </button>
                    </div>
            </div>
        </div>
    `
})
app.component("topic-add", {
    methods: {
        cancel(event) {
            const parent = event.target.parentElement;
            parent.style.display = "none";
        }
    },
    props: {
        topics: Array,
    },
    template: `
        <ul class="topics" data-aos="fade-up" data-aos-duration="1000">
               <li v-for="topic in topics">
                {{ topic.text }}
                  <i class="fas fa-times" @click="cancel"></i>      
               </li>
        </ul>
          
    `
})
app.component("niche-list", {
    props: {
        niches: Array,
        bookkey: String,
    },
    template: `
        <ul>
           <li v-for="niche in niches" @click="changeBook" >
               {{ niche.niche }}
           </li>
        </ul>
    `
})
app.component("article-add", {
    data() {
        return {
            bookmark: false,
            submark: false,
            blockmark: false,
            // articleVisible: true,
            class: "material-icons",
            bookClass: "material-icons",
            classActive: "material-icons active",
        }
    },
    methods: {
        book(event) {
            const parent = event.target.parentElement;
            const i = parent.children[0];
            this.bookmark = !this.bookmark;
            if (this.bookmark == false) {
                i.className = this.class;
            } else if (this.bookmark == true) {
                i.className = this.classActive;
            }
        },
        sub(event) {
            const parent = event.target.parentElement;
            const i = parent.children[1];
            const dislike = parent.children[2];
            this.submark = !this.submark;
            if (this.submark == false) {
                i.className = this.class;
            } else if (this.submark == true) {
                i.className = this.classActive;
                dislike.className = this.class;
            }
        },
        block(event) {
            const parent = event.target.parentElement;
            const i = parent.children[2];
            const like = parent.children[1];
            this.blockmark = !this.blockmark;
            if (this.blockmark == false) {
                i.className = this.class;
            } else if (this.blockmark == true) {
                i.className = this.classActive;
                like.className = this.class;
            }
        },
    },
    props: {
        articles: Array,
    },
    template: `
        <div class="boxup" v-for="article in articles"  data-aos="fade-up" data-aos-duration="1000">
            <div class="topnav">
                <div class="postavatar">
                    <img :src="article.writerImg" :alt="article.writerName" :title="article.writerName"/>
                </div>
                <div class="postname"> <p>{{ article.writerName }} </p> </div>
                <div class="posttime"> <small> {{ article.articleTime }} </small> </div>
            </div>
            <div class="content">
                <div class="postimage">
                    <img :src="article.articleImg" :alt="article.articleHead" />
                </div>
                <h2> {{ article.articleHead }} </h2>
            </div>
            <div class="postcontent">
                <article>
                      {{ article.articleSummary }}  <a :href="article.articleLink"> Read more..... </a>
                </article>
                <div class="bottom">
                      <div class="bottom_left">
                         <i :class="bookClass" title="bookmark" @click="book"> bookmark_add </i>
                         <div class="niche"> 
                             <button> {{ article.niche }} </button>
                         </div>
                      </div>
                      <div class="bottom_right">
                            <p> {{ article.readTime }} </p>
                            <i :class="bookClass" title="subscribe" @click="sub"> subscriptions </i>
                            <i :class="bookClass" title="dislike" @click="block"> block </i>
                      </div>
                </div>
            </div>
        </div>
    `
})
app.component("notification-add", {
    methods: {
        deleteMain(event) {
            var parent = event.target.parentElement;
            var main = parent.parentElement;
            if (confirm("Are you sure you want to delete?")) {
                main.remove();
            }
        },
        perDelete() {
            var parent = event.target.parentElement;
            var main = parent.parentElement;
            var txt;
            if (confirm("Are you sure you want to permanently delete?")) {
                main.remove();
            } else {
                txt = "Not deleted";
            }
        }
    },
    props: {
        notify: Array,
        laternotify: Array,
        ndelete: Array,
        numbers: Array,
        all: Boolean,
        deleted: Boolean,
        allactive: String,
        redactive: String,
    },
    template: `
    <div class="notify" data-aos="fade-up" data-aos-duration="1500">
          <h1 data-aos="fade-up">Notifications </h1>
          <ul class="notify_nav" v-for="number in numbers">
               <li @click="$emit('notifyAll')" :class="allactive"> All <button> {{ number.all }} </button></li>
               <li @click="$emit('notifyDelete')" :class="redactive"> Deleted <button class="deleted"> {{ number.delete }} </button></li>
          </ul>
        <div class="notify_main" v-if="all" data-aos="fade-up" data-aos-duration="1500">
            <div class="notify_today" data-aos="fade-up" data-aos-duration="1500">
                <h3>Today</h3>
                <div class="notify_box" v-for="note in notify" data-aos="fade-up" data-aos-duration="2000">
                   <div class="image">
                        <img :src="note.imgLink" :alt="note.name" :title="note.name"/>
                   </div>
                    <div class="text">
                        <p> {{ note.header }} <a :href="note.href"> Read more.. </a></p>
                        <small> {{ note.time }} </small>
                    </div>
                    <div class="delete">
                        <i class="material-icons" @click="deleteMain"> delete </i>
                    </div>
                </div>
            </div>
            <div class="notify_earlier" data-aos="fade-up" data-aos-duration="1500">
                <h3>Earlier</h3>
                <div class="notify_box" v-for="note in laternotify" data-aos="fade-up" data-aos-duration="2000">
                <div class="image">
                    <img :src="note.imgLink" :alt="note.name" :title="note.name"/>
                </div>
                    <div class="text">
                        <p> {{ note.header }} <a :href="note.href"> Read more.. </a></p>
                        <small> {{ note.time }} </small>
                    </div>
                    <div class="delete">
                        <i class="material-icons" @click="deleteMain"> delete </i>
                    </div>
                </div>
            </div>
        </div>
        <div class="notify_delete" v-if="deleted" data-aos="fade-up" data-aos-duration="1500">
            <h3>Deleted</h3>
            <div class="notify_box" v-for="note in ndelete" data-aos="fade-up" data-aos-duration="2000">
                <div class="image">
                    <img :src="note.imgLink" :alt="note.name" :title="note.name"/>
                </div>
                    <div class="text">
                        <p> {{ note.header }} <a :href="note.href"> Read more.. </a></p>
                        <small> {{ note.time }} </small>
                    </div>
                    <div class="delete">
                        <i class="material-icons" @click="perDelete"> delete </i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})
app.component("bookmark-add", {
    data() {
        return {
            bookmark: true,
            submark: false,
            blockmark: false,
            class: "material-icons",
            bookClass: "material-icons",
            nbookClass: "material-icons active",
            classActive: "material-icons active",
            sortKey: "",
            filterKey: "",
        }
    },
    methods: {
        book(event) {
            const parent = event.target.parentElement;
            const i = parent.children[0];
            this.bookmark = !this.bookmark;
            if (this.bookmark == false) {
                i.className = this.class;
            } else if (this.bookmark == true) {
                i.className = this.classActive;
            }
        },
        sub(event) {
            const parent = event.target.parentElement;
            const i = parent.children[1];
            const dislike = parent.children[2];
            this.submark = !this.submark;
            if (this.submark == false) {
                i.className = this.class;
            } else if (this.submark == true) {
                i.className = this.classActive;
                dislike.className = this.class;
            }
        },
        block(event) {
            const parent = event.target.parentElement;
            const i = parent.children[2];
            const like = parent.children[1];
            this.blockmark = !this.blockmark;
            if (this.blockmark == false) {
                i.className = this.class;
            } else if (this.blockmark == true) {
                i.className = this.classActive;
                like.className = this.class;
            }
        },
        changeBook(event) {
            const el = event.target;
            const html = el.innerHTML;
            this.filterKey = html;
        }
    },
    props: {
        bookmarks: Array,
        niches: Array,
    },
    computed: {
        fElement: function() {
            const filterKey = this.filterKey &&
                this.filterKey.toLowerCase()

            let entries = this.bookmarks

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
    },
    template: `
        <h1>Bookmarks</h1>
        <nav class="navlist bookmark">
            <ul>
                <li v-for="niche in niches" @click="changeBook" >
                    {{ niche.niche }}
                </li>
        </ul>
        </nav>
        <div class="box book_box">
            <div class="boxup" v-for="article in fElement" data-aos="fade-up" data-aos-duration="1000">
                <div class="topnav">
                    <div class="postavatar">
                        <img :src="article.writerImg" :alt="article.writerName" :title="article.writerName"/>
                    </div>
                    <div class="postname"> <p>{{ article.writerName }} </p> </div>
                    <div class="posttime"> <small> {{ article.articleTime }} </small> </div>
                </div>
                <div class="content">
                    <div class="postimage">
                        <img :src="article.articleImg" :alt="article.articleHead" />
                    </div>
                    <h2> {{ article.articleHead }} </h2>
                </div>
                <div class="postcontent">
                    <article>
                        {{ article.articleSummary }}  <a :href="article.articleLink"> Read more..... </a>
                    </article>
                    <div class="bottom">
                        <div class="bottom_left">
                            <i :class="nbookClass" title="bookmark" @click="book"> bookmark_add </i>
                            <div class="niche"> 
                                <button> {{ article.niche }} </button>
                            </div>
                        </div>
                        <div class="bottom_right">
                                <p> {{ article.readTime }} </p>
                                <i :class="bookClass" title="subscribe" @click="sub"> subscriptions </i>
                                <i :class="bookClass" title="dislike" @click="block"> block </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
app.component("sub-add", {
    data() {
        return {
            toggle: false,
        }
    },
    methods: {
        unsubscribe(event) {
            this.toggle = !this.toggle;
            const el = event.target;
            if (this.toggle == false) {
                el.innerHTML = "Unsubscribe";
                el.className = "";
            } else if (this.toggle == true) {
                el.innerHTML = "Subscribe";
                el.className = "active";
            }
        }
    },
    props: {
        subscriptions: Array,
    },
    template: `
    <div class="subscribe" data-aos="fade-up" data-aos-duration="1000">
        <h3>Manage subscriptions</h3>
        <div class="subscribe_main">
            <div class="subscribe_box" v-for="sub in subscriptions" data-aos="fade-up" data-aos-duration="1000">
                  <div class="image">
                       <img :src="sub.imgLink" :alt="sub.name"/>
                  </div>
                    <div class="text">
                          <a :href="sub.href"> {{ sub.name }} <b :style="{color : sub.color}"> {{ sub.title }} </b></a>
                          <summary> {{ sub.summary }} </summary>
                    </div>
                    <div class="sub">
                        <button @click="unsubscribe"> Unsubscribe </button>
                    </div>                   
            </div>
        </div>
    </div>
    `
})
app.mount("#body");