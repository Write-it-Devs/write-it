const app = Vue.createApp({
    data() {
        return {
            userName: "Abdulameen",
            increase: "57.57%",
            availability: "Available",
            userImg: "../app-assets/images/portrait/small/avatar-s-11.jpg",
            avgView: "13.5s",
            userEmail: "abdulameen@gmail.com",
            userStatus: "active",
            userRole: "admin",
            inView: "5.2%",
            mainDays: "last 7 days",
            activeReader: "1000",
            blogPost: "10",
            subsribers: "600",
            moneyMade: "400",
            supportDay: "last 7 days",
            tickets: "163",
            newT: 5,
            sentVisible: false,
            draftVisible: false,
            starredVisible: false,
            spamVisible: false,
            trashVisible: false,
            openT: 6,
            userDate: "20th of January 2001",
            userNo: "+2349054050533",
            userWebsite: "https://rowboat.com/insititious/Angelo",
            userLanguages: "English, Arabic",
            userGender: "female",
            userTwitter: "https://twitter.com/adoptionism744",
            userFace: "https://www.facebook.com/adoptionism664",
            userInsta: "https://www.instagram.com/adopt-ionism744/",
            userLinked: "https://linkedin.com/madop818",
            emailVisible: true,
            resT: "5hrs",
            newNotify: 5,
            notify: [{
                    iconclass: "feather icon-plus-square font-medium-5 primary",
                    class: "primary media-heading",
                    header: "You have new order!",
                    text: "Are your going to meet me tonight?",
                    time: "9 hours ago",
                    href: "#",
                },
                {
                    iconclass: "feather icon-download-cloud font-medium-5 success",
                    class: "success media-heading red darken-1",
                    header: "99% Server load",
                    text: "You got new order of goods.",
                    time: "5 hour ago",
                    href: "#",
                },
                {
                    iconclass: "feather icon-alert-triangle font-medium-5 danger",
                    class: "danger media-heading yellow darken-3",
                    header: "Warning notifixation",
                    text: "Server have 99% CPU usage.",
                    time: "Today",
                    href: "#",
                },
                {
                    iconclass: "feather icon-check-circle font-medium-5 info",
                    class: "info media-heading",
                    header: "Complete the task",
                    text: "Cake sesame snaps cupcake",
                    time: "Last week",
                    href: "#",
                },
                {
                    iconclass: "feather icon-file font-medium-5 warning",
                    class: "warning media-heading",
                    header: "Generate monthly report",
                    text: "Chocolate cake oat cake tiramisu marzipan",
                    time: "Last month",
                    href: "#",
                },
            ],
            tables: [{
                    number: 879985,
                    headerclass: "fa fa-circle font-small-3 text-success mr-50",
                    status: "Online",
                    operatorimage: "../app-assets/images/portrait/small/avatar-s-8.jpg",
                    user: "Darcey Nooner",
                    views: 1000,
                    width: "80%",
                    aria: "80",
                    moneymade: 500,
                    startdate: "15/05/2018",
                    barclass: "progress progress-bar-success mt-1 mb-0",
                },
                {
                    number: 156897,
                    headerclass: "fa fa-circle font-small-3 text-warning mr-50",
                    status: "Pending",
                    operatorimage: "../app-assets/images/portrait/small/avatar-s-3.jpg",
                    user: "Alberto Glotzbach",
                    views: 450,
                    width: "60%",
                    aria: "60",
                    moneymade: 300,
                    startdate: "28/07/2018",
                    barclass: "progress progress-bar-warning mt-1 mb-0",
                },
                {
                    number: 568975,
                    headerclass: "fa fa-circle font-small-3 text-danger mr-50",
                    status: "Banned",
                    operatorimage: "../app-assets/images/portrait/small/avatar-s-9.jpg",
                    user: "Jeffrey Gerondale",
                    views: 400,
                    width: "70%",
                    aria: "70",
                    moneymade: 480,
                    startdate: "21/10/2018",
                    barclass: "progress progress-bar-success mt-1 mb-0",
                },
                {
                    number: 245689,
                    headerclass: "fa fa-circle font-small-3 text-danger mr-50",
                    status: "Offline",
                    operatorimage: "../app-assets/images/portrait/small/avatar-s-7.jpg",
                    user: "Elicia Rieske",
                    views: 2000,
                    width: "95%",
                    aria: "95",
                    moneymade: 1200,
                    startdate: "17/01/2018",
                    barclass: "progress progress-bar-danger mt-1 mb-0",
                },
            ],
            emails: [{
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-20.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Tonny Deep",
                    header: "Focused impactful open system 📷 😃",
                    bulletclass: "mr-1 bullet bullet-success bullet-sm",
                    time: "4:14 AM",
                    date: "17 May 2018",
                    bullettype: "Readers",
                    summary: "Hey John, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto CheloniaFreudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey Satyrinae outfreeman melebiose",
                },
                {
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-17.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Louis Welch",
                    header: "Thanks, Let's do it.",
                    bulletclass: "mr-1 bullet bullet-danger bullet-sm",
                    time: "2:15 AM",
                    date: "17 May 2018",
                    bullettype: "General",
                    summary: "Hi, Can we connect today? Cheesecake croissant jelly beans. Cake caramels pie chocolate. Muffin jujubes dragée carrot cake candy icing bonbon. Danish caramels topping oat cake sweet roll liquorice tootsie roll halvah.Chocolate bar jujubes jelly-o tart tiramisu croissant dragée cupcake jelly.",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-7.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Envato Market",
                    header: "You have new comment...",
                    bulletclass: "mr-1 bullet bullet-success bullet-sm",
                    time: "2:15 AM",
                    date: "17 May 2018",
                    bullettype: "Readers",
                    summary: "Hi There, Cotton candy jujubes ice cream candy. Oat cake jelly jelly brownie danish marzipan gummi bears. Cupcake sweet bonbon tart. Sweet croissant jelly beans dragée chocolate cake gingerbread topping chocolate bar lemon drops.",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-5.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Sarah Montgomery",
                    header: "Your New UI.",
                    bulletclass: "mr-1 bullet bullet-warning bullet-sm",
                    time: "Yesterday",
                    date: "17 May 2018",
                    bullettype: "Writers",
                    summary: "Hello, Everything looks good. Pastry marshmallow sugar plum. Gingerbread bonbon fruitcake gummi bears wafer chocolate cake gummies tart ice cream. Danish topping biscuit dessert donut dessert. Chocolate jelly-o topping marzipan fruitcake.",
                },
                {
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-3.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Ardis Balderson",
                    header: "Focused impactful open system",
                    bulletclass: "mx-1 bullet bullet-warning bullet-sm",
                    time: "15 July",
                    date: "17 May 2018",
                    bullettype: "Writers",
                    summary: "Hey John, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto CheloniaFreudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey",
                },
                {
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-8.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Modestine Spat",
                    header: "Profound systemic alliance 🎉",
                    bulletclass: "mx-1 bullet bullet-primary bullet-sm",
                    time: "11 July",
                    date: "17 May 2018",
                    bullettype: "Company",
                    summary: "Hey John, Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological Pythonissa scintillescentcinchonism sabbaton thyrocricoid dissuasively schematograph immerse pristane stimulability unreligion uncomplemental uteritis nef bavenite Hachiman teleutosorus anterolateral infirmate Nahani Hyla barile farthing",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-11.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Eb Begg",
                    header: "Organized value-added model",
                    bulletclass: "mx-1 bullet bullet-success bullet-sm",
                    time: "1 July",
                    date: "17 May 2018",
                    bullettype: "Readers",
                    summary: "Hello Sir, Lituola restrengthen bathofloric manciple decaffeinize Debby aciliated eatage proscribe prejurisdiction buttle quacky hyposecretion indemonstrableness schelling lymphopathy consumptivity nonappointment filminess spumiform erotogenicity equestrianize boneflower interlardationallocate ponzite cote guilder tuff strind blamefully cocaine monstrously apocalyptically sublanate cherubimicaloligoplasmia Miltonian hydrazyl unbeset statured Unami Cordeau strouthiocamelian geitjie",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-10.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Waldemar Mannering",
                    header: "Quality-focused methodical flexibility",
                    bulletclass: "mx-1 bullet bullet-danger bullet-sm",
                    time: "19 Jun",
                    date: "17 May 2018",
                    bullettype: "General",
                    summary: "Hi John, wartproof ketoheptose incomplicate hyomental organal supermaterial monogene sophister nizamate rightle multifilament phloroglucic overvehement boatloading derelictly probudgeting archantiquary unknighted pallograph Volcanalia Jacobitiana ethyl neth Jugataenoumenalize irredential energeia phlebotomist galp dactylitis unparticipated solepiece demure metarhyolite toboggan unpleased perilaryngeal binoxalate rabbitry atomic duali dihexahedron Pseudogryphus boomboat obelisk",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-6.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Louetta Esses",
                    header: "Company Report",
                    bulletclass: "mx-1 bullet bullet-primary bullet-sm",
                    time: "2 Jun",
                    date: "17 May 2018",
                    bullettype: "Company",
                    summary: "Hi John,Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love",
                },
                {
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-9.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Tressa Gass",
                    header: "Theme Update",
                    bulletclass: "mx-1 bullet bullet-primary bullet-sm",
                    time: "29 May",
                    date: "17 May 2018",
                    bullettype: "Company",
                    summary: "Hello John,Chocolate bar chupa chups sweet roll chocolate muffin macaroon liquorice tart. Carrot cake topping jelly-o cupcake sweet apple pie jelly I love. Chocolate cake I love dessert carrot cake tootsie roll chocolate I love. Tootsie roll pie marzipan sesame snaps.",
                },
                {
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-20.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Tommy Sicilia",
                    header: "Thanks, Let's do it.",
                    bulletclass: "mx-1 bullet bullet-warning bullet-sm",
                    time: "17 May",
                    date: "17 May 2018",
                    bullettype: "Writers",
                    summary: "Hi John,Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love.",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-17.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Heather Howell",
                    header: "Thanks, Let's do it.",
                    bulletclass: "mx-1 bullet bullet-warning bullet-sm",
                    time: "21 Mar",
                    date: "17 May 2018",
                    bullettype: "Writers",
                    summary: "Hi John,Biscuit lemon drops marshmallow. Marzipan carrot cake soufflé. Toffee tiramisu pudding cotton candy powder jujubes pie. Topping danish sweet croissant liquorice lemon drops cake oat cake brownie. Cupcake liquorice tart tootsie roll sugar plum chocolate bar oat cake sweet roll.",
                },
            ],
            sent: [{
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-17.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Louis Welch",
                    header: "Thanks, Let's do it.",
                    bulletclass: "mr-1 bullet bullet-danger bullet-sm",
                    time: "2:15 AM",
                    date: "17 May 2018",
                    bullettype: "General",
                    summary: "Hi, Can we connect today? Cheesecake croissant jelly beans. Cake caramels pie chocolate. Muffin jujubes dragée carrot cake candy icing bonbon. Danish caramels topping oat cake sweet roll liquorice tootsie roll halvah.Chocolate bar jujubes jelly-o tart tiramisu croissant dragée cupcake jelly.",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-20.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Tonny Deep",
                    header: "Focused impactful open system 📷 😃",
                    bulletclass: "mr-1 bullet bullet-success bullet-sm",
                    time: "4:14 AM",
                    date: "17 May 2018",
                    bullettype: "Readers",
                    summary: "Hey John, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto CheloniaFreudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey Satyrinae outfreeman melebiose",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-5.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Sarah Montgomery",
                    header: "Your New UI.",
                    bulletclass: "mr-1 bullet bullet-warning bullet-sm",
                    time: "Yesterday",
                    date: "17 May 2018",
                    bullettype: "Writers",
                    summary: "Hello, Everything looks good. Pastry marshmallow sugar plum. Gingerbread bonbon fruitcake gummi bears wafer chocolate cake gummies tart ice cream. Danish topping biscuit dessert donut dessert. Chocolate jelly-o topping marzipan fruitcake.",
                },
                {
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-3.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Ardis Balderson",
                    header: "Focused impactful open system",
                    bulletclass: "mx-1 bullet bullet-warning bullet-sm",
                    time: "15 July",
                    date: "17 May 2018",
                    bullettype: "Writers",
                    summary: "Hey John, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto CheloniaFreudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-7.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Envato Market",
                    header: "You have new comment...",
                    bulletclass: "mr-1 bullet bullet-success bullet-sm",
                    time: "2:15 AM",
                    date: "17 May 2018",
                    bullettype: "Readers",
                    summary: "Hi There, Cotton candy jujubes ice cream candy. Oat cake jelly jelly brownie danish marzipan gummi bears. Cupcake sweet bonbon tart. Sweet croissant jelly beans dragée chocolate cake gingerbread topping chocolate bar lemon drops.",
                },
                {
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-8.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Modestine Spat",
                    header: "Profound systemic alliance 🎉",
                    bulletclass: "mx-1 bullet bullet-primary bullet-sm",
                    time: "11 July",
                    date: "17 May 2018",
                    bullettype: "Company",
                    summary: "Hey John, Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological Pythonissa scintillescentcinchonism sabbaton thyrocricoid dissuasively schematograph immerse pristane stimulability unreligion uncomplemental uteritis nef bavenite Hachiman teleutosorus anterolateral infirmate Nahani Hyla barile farthing",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-11.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Eb Begg",
                    header: "Organized value-added model",
                    bulletclass: "mx-1 bullet bullet-success bullet-sm",
                    time: "1 July",
                    date: "17 May 2018",
                    bullettype: "Readers",
                    summary: "Hello Sir, Lituola restrengthen bathofloric manciple decaffeinize Debby aciliated eatage proscribe prejurisdiction buttle quacky hyposecretion indemonstrableness schelling lymphopathy consumptivity nonappointment filminess spumiform erotogenicity equestrianize boneflower interlardationallocate ponzite cote guilder tuff strind blamefully cocaine monstrously apocalyptically sublanate cherubimicaloligoplasmia Miltonian hydrazyl unbeset statured Unami Cordeau strouthiocamelian geitjie",
                },
            ],
            drafts: [{
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-17.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Louis Welch",
                    header: "Thanks, Let's do it.",
                    bulletclass: "mr-1 bullet bullet-danger bullet-sm",
                    time: "2:15 AM",
                    date: "17 May 2018",
                    bullettype: "General",
                    summary: "Hi, Can we connect today? Cheesecake croissant jelly beans. Cake caramels pie chocolate. Muffin jujubes dragée carrot cake candy icing bonbon. Danish caramels topping oat cake sweet roll liquorice tootsie roll halvah.Chocolate bar jujubes jelly-o tart tiramisu croissant dragée cupcake jelly.",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-5.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Sarah Montgomery",
                    header: "Your New UI.",
                    bulletclass: "mr-1 bullet bullet-warning bullet-sm",
                    time: "Yesterday",
                    date: "17 May 2018",
                    bullettype: "Writers",
                    summary: "Hello, Everything looks good. Pastry marshmallow sugar plum. Gingerbread bonbon fruitcake gummi bears wafer chocolate cake gummies tart ice cream. Danish topping biscuit dessert donut dessert. Chocolate jelly-o topping marzipan fruitcake.",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-20.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Tonny Deep",
                    header: "Focused impactful open system 📷 😃",
                    bulletclass: "mr-1 bullet bullet-success bullet-sm",
                    time: "4:14 AM",
                    date: "17 May 2018",
                    bullettype: "Readers",
                    summary: "Hey John, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto CheloniaFreudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey Satyrinae outfreeman melebiose",
                },
                {
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-8.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Modestine Spat",
                    header: "Profound systemic alliance 🎉",
                    bulletclass: "mx-1 bullet bullet-primary bullet-sm",
                    time: "11 July",
                    date: "17 May 2018",
                    bullettype: "Company",
                    summary: "Hey John, Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological Pythonissa scintillescentcinchonism sabbaton thyrocricoid dissuasively schematograph immerse pristane stimulability unreligion uncomplemental uteritis nef bavenite Hachiman teleutosorus anterolateral infirmate Nahani Hyla barile farthing",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-11.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Eb Begg",
                    header: "Organized value-added model",
                    bulletclass: "mx-1 bullet bullet-success bullet-sm",
                    time: "1 July",
                    date: "17 May 2018",
                    bullettype: "Readers",
                    summary: "Hello Sir, Lituola restrengthen bathofloric manciple decaffeinize Debby aciliated eatage proscribe prejurisdiction buttle quacky hyposecretion indemonstrableness schelling lymphopathy consumptivity nonappointment filminess spumiform erotogenicity equestrianize boneflower interlardationallocate ponzite cote guilder tuff strind blamefully cocaine monstrously apocalyptically sublanate cherubimicaloligoplasmia Miltonian hydrazyl unbeset statured Unami Cordeau strouthiocamelian geitjie",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-7.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Envato Market",
                    header: "You have new comment...",
                    bulletclass: "mr-1 bullet bullet-success bullet-sm",
                    time: "2:15 AM",
                    date: "17 May 2018",
                    bullettype: "Readers",
                    summary: "Hi There, Cotton candy jujubes ice cream candy. Oat cake jelly jelly brownie danish marzipan gummi bears. Cupcake sweet bonbon tart. Sweet croissant jelly beans dragée chocolate cake gingerbread topping chocolate bar lemon drops.",
                },
                {
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-3.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Ardis Balderson",
                    header: "Focused impactful open system",
                    bulletclass: "mx-1 bullet bullet-warning bullet-sm",
                    time: "15 July",
                    date: "17 May 2018",
                    bullettype: "Writers",
                    summary: "Hey John, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto CheloniaFreudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey",
                },
            ],
            starred: [{
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-17.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Louis Welch",
                    header: "Thanks, Let's do it.",
                    bulletclass: "mr-1 bullet bullet-danger bullet-sm",
                    time: "2:15 AM",
                    date: "17 May 2018",
                    bullettype: "General",
                    summary: "Hi, Can we connect today? Cheesecake croissant jelly beans. Cake caramels pie chocolate. Muffin jujubes dragée carrot cake candy icing bonbon. Danish caramels topping oat cake sweet roll liquorice tootsie roll halvah.Chocolate bar jujubes jelly-o tart tiramisu croissant dragée cupcake jelly.",
                },
                {
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-8.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Modestine Spat",
                    header: "Profound systemic alliance 🎉",
                    bulletclass: "mx-1 bullet bullet-primary bullet-sm",
                    time: "11 July",
                    date: "17 May 2018",
                    bullettype: "Company",
                    summary: "Hey John, Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological Pythonissa scintillescentcinchonism sabbaton thyrocricoid dissuasively schematograph immerse pristane stimulability unreligion uncomplemental uteritis nef bavenite Hachiman teleutosorus anterolateral infirmate Nahani Hyla barile farthing",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-5.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Sarah Montgomery",
                    header: "Your New UI.",
                    bulletclass: "mr-1 bullet bullet-warning bullet-sm",
                    time: "Yesterday",
                    date: "17 May 2018",
                    bullettype: "Writers",
                    summary: "Hello, Everything looks good. Pastry marshmallow sugar plum. Gingerbread bonbon fruitcake gummi bears wafer chocolate cake gummies tart ice cream. Danish topping biscuit dessert donut dessert. Chocolate jelly-o topping marzipan fruitcake.",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-20.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Tonny Deep",
                    header: "Focused impactful open system 📷 😃",
                    bulletclass: "mr-1 bullet bullet-success bullet-sm",
                    time: "4:14 AM",
                    date: "17 May 2018",
                    bullettype: "Readers",
                    summary: "Hey John, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto CheloniaFreudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey Satyrinae outfreeman melebiose",
                },
            ],
            spam: [{
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-8.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Modestine Spat",
                    header: "Profound systemic alliance 🎉",
                    bulletclass: "mx-1 bullet bullet-primary bullet-sm",
                    time: "11 July",
                    date: "17 May 2018",
                    bullettype: "Company",
                    summary: "Hey John, Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological Pythonissa scintillescentcinchonism sabbaton thyrocricoid dissuasively schematograph immerse pristane stimulability unreligion uncomplemental uteritis nef bavenite Hachiman teleutosorus anterolateral infirmate Nahani Hyla barile farthing",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-5.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Sarah Montgomery",
                    header: "Your New UI.",
                    bulletclass: "mr-1 bullet bullet-warning bullet-sm",
                    time: "Yesterday",
                    date: "17 May 2018",
                    bullettype: "Writers",
                    summary: "Hello, Everything looks good. Pastry marshmallow sugar plum. Gingerbread bonbon fruitcake gummi bears wafer chocolate cake gummies tart ice cream. Danish topping biscuit dessert donut dessert. Chocolate jelly-o topping marzipan fruitcake.",
                },
                {
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-17.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Louis Welch",
                    header: "Thanks, Let's do it.",
                    bulletclass: "mr-1 bullet bullet-danger bullet-sm",
                    time: "2:15 AM",
                    date: "17 May 2018",
                    bullettype: "General",
                    summary: "Hi, Can we connect today? Cheesecake croissant jelly beans. Cake caramels pie chocolate. Muffin jujubes dragée carrot cake candy icing bonbon. Danish caramels topping oat cake sweet roll liquorice tootsie roll halvah.Chocolate bar jujubes jelly-o tart tiramisu croissant dragée cupcake jelly.",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-20.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Tonny Deep",
                    header: "Focused impactful open system 📷 😃",
                    bulletclass: "mr-1 bullet bullet-success bullet-sm",
                    time: "4:14 AM",
                    date: "17 May 2018",
                    bullettype: "Readers",
                    summary: "Hey John, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto CheloniaFreudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey Satyrinae outfreeman melebiose",
                },
            ],
            trash: [{
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-5.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Sarah Montgomery",
                    header: "Your New UI.",
                    bulletclass: "mr-1 bullet bullet-warning bullet-sm",
                    time: "Yesterday",
                    date: "17 May 2018",
                    bullettype: "Writers",
                    summary: "Hello, Everything looks good. Pastry marshmallow sugar plum. Gingerbread bonbon fruitcake gummi bears wafer chocolate cake gummies tart ice cream. Danish topping biscuit dessert donut dessert. Chocolate jelly-o topping marzipan fruitcake.",
                },
                {
                    class: "media",
                    imglink: "../app-assets/images/portrait/small/avatar-s-8.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Modestine Spat",
                    header: "Profound systemic alliance 🎉",
                    bulletclass: "mx-1 bullet bullet-primary bullet-sm",
                    time: "11 July",
                    date: "17 May 2018",
                    bullettype: "Company",
                    summary: "Hey John, Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological Pythonissa scintillescentcinchonism sabbaton thyrocricoid dissuasively schematograph immerse pristane stimulability unreligion uncomplemental uteritis nef bavenite Hachiman teleutosorus anterolateral infirmate Nahani Hyla barile farthing",
                },
                {
                    class: "media mail-read",
                    imglink: "../app-assets/images/portrait/small/avatar-s-20.jpg",
                    email: "abaldersong@utexas.edu",
                    name: "Tonny Deep",
                    header: "Focused impactful open system 📷 😃",
                    bulletclass: "mr-1 bullet bullet-success bullet-sm",
                    time: "4:14 AM",
                    date: "17 May 2018",
                    bullettype: "Readers",
                    summary: "Hey John, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto CheloniaFreudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey Satyrinae outfreeman melebiose",
                },
            ],
            sliders: [{
                    src: "../app-assets/images/bimages/template6.png",
                    header: "Blog1",
                    statusclass: "fa fa-circle font-small-3 text-success mr-50",
                    status: "Online",
                },
                {
                    src: "../app-assets/images/bimages/template7.png",
                    header: "Blog2",
                    statusclass: "fa fa-circle font-small-3 text-danger mr-50",
                    status: "Offline",
                },
                {
                    src: "../app-assets/images/bimages/template8.png",
                    header: "Blog3",
                    statusclass: "fa fa-circle font-small-3 text-success mr-50",
                    status: "Online",
                },
                {
                    src: "../app-assets/images/bimages/template9.png",
                    header: "Blog4",
                    statusclass: "fa fa-circle font-small-3 text-danger mr-50",
                    status: "Offline",
                },
            ],
            images: [{
                    src: "../app-assets/images/bimages/template1.png",
                },
                {
                    src: "../app-assets/images/bimages/template10.png",
                },
                {
                    src: "../app-assets/images/bimages/template2.png",
                },
                {
                    src: "../app-assets/images/bimages/template3.png",
                },
                {
                    src: "../app-assets/images/bimages/template4.png",
                },
                {
                    src: "../app-assets/images/bimages/template5.png",
                },
                {
                    src: "../app-assets/images/bimages/template6.png",
                },
                {
                    src: "../app-assets/images/bimages/template7.png",
                },
                {
                    src: "../app-assets/images/bimages/template8.png",
                },
                {
                    src: "../app-assets/images/bimages/template9.png",
                },
            ],
        }
    },
    methods: {
        Day7(event) {
            const el = event.target;
            this.mainDays = el.innerHTML;
            this.inView = "5.2%";
            this.activeReader = "1000";
            this.blogPost = "10";
            this.subsribers = "600";
            this.moneyMade = "400";
        },
        Day28(event) {
            const el = event.target;
            this.mainDays = el.innerHTML;
            this.inView = "7.3%";
            this.activeReader = "1200";
            this.blogPost = "15";
            this.subsribers = "800";
            this.moneyMade = "600";
        },
        lMonth(event) {
            const el = event.target;
            this.mainDays = el.innerHTML;
            this.inView = "12%";
            this.activeReader = "2100";
            this.blogPost = "25";
            this.subsribers = "900";
            this.moneyMade = "700";
        },
        lYear(event) {
            const el = event.target;
            this.mainDays = el.innerHTML;
            this.inView = "10%";
            this.activeReader = "7000";
            this.blogPost = "60";
            this.subsribers = "900";
            this.moneyMade = "1200";
        },
        support7(event) {
            const el = event.target;
            this.supportDay = el.innerHTML;
            this.tickets = "201";
            this.newT = 1;
            this.openT = 4;
            this.resT = "3hrs";

        },
        support28(event) {
            const el = event.target;
            this.supportDay = el.innerHTML;
            this.tickets = "220";
            this.newT = 1;
            this.openT = 4;
            this.resT = "3hrs";
        },
        supportlmonth(event) {
            const el = event.target;
            this.supportDay = el.innerHTML;
            this.tickets = "250";
            this.newT = 12;
            this.openT = 5;
            this.resT = "1hrs";
        },
        supportlyear(event) {
            const el = event.target;
            this.supportDay = el.innerHTML;
            this.tickets = "290";
            this.newT = 5;
            this.openT = 6;
            this.resT = "2d";
        },
        inbox() {
            this.emailVisible = true;
            this.sentVisible = false;
            this.draftVisible = false;
            this.spamVisible = false;
            this.trashVisible = false;
            this.starredVisible = false;
        },
        sents() {
            this.emailVisible = false;
            this.draftVisible = false;
            this.spamVisible = false;
            this.trashVisible = false;
            this.starredVisible = false;
            this.sentVisible = true;
        },
        draft() {
            this.emailVisible = false;
            this.sentVisible = false;
            this.spamVisible = false;
            this.trashVisible = false;
            this.starredVisible = false;
            this.draftVisible = true;
        },
        starreds() {
            this.emailVisible = false;
            this.sentVisible = false;
            this.draftVisible = false;
            this.spamVisible = false;
            this.trashVisible = false;
            this.starredVisible = true;
        },
        spams() {
            this.emailVisible = false;
            this.sentVisible = false;
            this.draftVisible = false;
            this.trashVisible = false;
            this.starredVisible = false;
            this.spamVisible = true;
        },
        trashs() {
            this.emailVisible = false;
            this.sentVisible = false;
            this.draftVisible = false;
            this.spamVisible = false;
            this.starredVisible = false;
            this.trashVisible = true;
        },
    }
})

app.component("notify-header", {
    props: {
        notify: Array,
        newnotify: String,
    },
    template: `
            <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
            <li class="dropdown-menu-header">
                <div class="dropdown-header m-0 p-2">
                    <h3 class="white">{{ newnotify }} New</h3><span class="notification-title">Writer Notifications</span>
                </div>
            </li>
            <li class="scrollable-container media-list">
                <a class="d-flex justify-content-between"  v-for="note in notify" :href="note.href">
                    <div class="media d-flex align-items-start">
                        <div class="media-left"><i :class="note.iconclass"></i></div>
                        <div class="media-body">
                            <h6 :class="note.class"> {{ note.header }} </h6><small class="notification-text"> {{ note.text }} </small>
                        </div><small>
                            <time class="media-meta" datetime="2015-06-11T18:29:20+08:00"> {{ note.time }} </time></small>
                    </div>
                </a>
            </li>
            <li class="dropdown-menu-footer"><a class="dropdown-item p-1 text-center" href="javascript:void(0)">Read all notifications</a></li>
        </ul>
    `
})
app.component("table-add", {
    props: {
        tables: Array,
    },
    template: `
        <div class="card-content">
            <div class="table-responsive mt-1">
                <table class="table table-hover-animation mb-0">
                    <thead>
                        <tr>
                            <th>NUMBER</th>
                            <th>STATUS</th>
                            <th>OPERATORS</th>
                            <th>VIEWS TODAY</th>
                            <th>MONEY MADE</th>
                            <th>START DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="table in tables">
                            <td> #{{ table.number }} </td>
                            <td><i :class="table.headerclass"></i> {{ table.status }} </td>
                            <td class="p-1">
                                <ul class="list-unstyled users-list m-0  d-flex align-items-center">
                                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" :data-original-title="table.user" class="avatar pull-up">
                                        <img class="media-object rounded-circle" :src="table.operatorimage" :alt="table.user" height="30" width="30">
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <span> {{ table.views }} </span>
                                <div :class="barclass">
                                    <div class="progress-bar" role="progressbar" :style="{width: table.width}" :aria-valuenow="table.aria" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                            <td> $ {{ table.moneymade }} </td>
                            <td> {{ table.startdate }} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
     </div>
    `
})
app.component("slide-nav", {
    template: `
            <!-- BEGIN: Main Menu-->
            <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
                <div class="navbar-header">
                    <ul class="nav navbar-nav flex-row">
                        <li class="nav-item mr-auto">
                            <a class="navbar-brand" href="reader/homepage.html">
                                <div class="brand-logo"></div>
                                <h2 class="brand-text mb-0">Write-it</h2>
                            </a>
                        </li>
                        <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="icon-disc"></i></a></li>
                    </ul>
                </div>
                <div class="shadow-bottom"></div>
                <div class="main-menu-content">
                    <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                        <li class="nav-item" id="analytics"><a href="index.html"><i class="feather icon-home"></i><span class="menu-title" data-i18n="Dashboard">Dashboard</span></a>
                        </li>
                        <li class=" navigation-header"><span>Apps</span>
                        </li>
                        <li class="nav-item" id="navemail"><a href="app-email.html"><i class="feather icon-mail"></i><span class="menu-title" data-i18n="Email">Email</span></a>
                        </li>
                        </li>
                        <li class="nav-item" id="todo"><a href="app-todo.html"><i class="feather icon-check-square"></i><span class="menu-title" data-i18n="Todo">Todo</span></a>
                        </li>
                        <li class="nav-item"><a href="#"><i class="feather icon-user"></i><span class="menu-title" data-i18n="User">User</span></a>
                            <ul class="menu-content">
                                <li id="view"><a href="app-user-view.html"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="View">View</span></a>
                                </li>
                                <li id="edit"><a href="app-user-edit.html"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Edit">Edit</span></a>
                                </li>
                            </ul>
                        </li>
                        <li class=" navigation-header"><span>Blogs</span>
                        </li>
                        <li class="nav-item" id="blogs"><a href="blogs.html"><i class="feather icon-edit"></i><span class="menu-title">Create Blogs</span></a>
                        </li>
                        <li class=" navigation-header"><span>Payments</span>
                        </li>
                        <li class="nav-item"><a href="pay-now.html" id="paid"><i class="feather icon-zap"></i><span class="menu-title">Get Paid now</span></a>
                        </li>
                        <li class=" nav-item"><a href="payment-methods.html" id="methods"><i class="feather icon-credit-card"></i><span class="menu-title">Payment Methods</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- END: Main Menu-->
    `
})
app.component("nav-header", {
    props: {
        newnotify: String,
        username: String,
        availability: String,
        userimg: String,
    },
    template: `
            <nav class="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow">
                <div class="navbar-wrapper">
                    <div class="navbar-container content">
                        <div class="navbar-collapse" id="navbar-mobile">
                            <div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                                <ul class="nav navbar-nav">
                                    <li class="nav-item mobile-menu d-xl-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ficon feather icon-menu"></i></a></li>
                                </ul>
                                <ul class="nav navbar-nav bookmark-icons">
                                    <!-- li.nav-item.mobile-menu.d-xl-none.mr-auto-->
                                    <!--   a.nav-link.nav-menu-main.menu-toggle.hidden-xs(href='#')-->
                                    <!--     i.ficon.feather.icon-menu-->
                                    <li class="nav-item d-none d-lg-block"><a class="nav-link" href="app-todo.html" data-toggle="tooltip" data-placement="top" title="Todo"><i class="ficon feather icon-check-square"></i></a></li>
                                    <li class="nav-item d-none d-lg-block"><a class="nav-link" href="app-email.html" data-toggle="tooltip" data-placement="top" title="Email"><i class="ficon feather icon-mail"></i></a></li>
                                </ul>
                                <ul class="nav navbar-nav">
                                    <li class="nav-item d-none d-lg-block"><a class="nav-link bookmark-star"><i class="ficon feather icon-star warning"></i></a>
                                        <div class="bookmark-input search-input">
                                            <div class="bookmark-input-icon"><i class="feather icon-search primary"></i></div>
                                            <input class="form-control input" type="text" placeholder="Explore Writer dashboard..." tabindex="0" data-search="template-list">
                                            <ul class="search-list search-list-bookmark"></ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <ul class="nav navbar-nav float-right">
                                <li class="dropdown dropdown-language nav-item"><a class="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="flag-icon flag-icon-us"></i><span class="selected-language">English</span></a>
                                    <div class="dropdown-menu" aria-labelledby="dropdown-flag"><a class="dropdown-item" href="#" data-language="en"><i class="flag-icon flag-icon-us"></i> English</a><a class="dropdown-item" href="#" data-language="fr"><i class="flag-icon flag-icon-fr"></i> French</a><a class="dropdown-item"
                                            href="#" data-language="de"><i class="flag-icon flag-icon-de"></i> German</a><a class="dropdown-item" href="#" data-language="pt"><i class="flag-icon flag-icon-pt"></i> Portuguese</a></div>
                                </li>
                                <li class="nav-item d-none d-lg-block"><a class="nav-link nav-link-expand"><i class="ficon feather icon-maximize"></i></a></li>

                                <li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="#" data-toggle="dropdown"><i class="ficon feather icon-bell"></i><span class="badge badge-pill badge-primary badge-up">  {{ newnotify }} </span></a>
                                    <slot></slot>
                                </li>
                                <li class="dropdown dropdown-user nav-item">
                                    <a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                                        <div class="user-nav d-sm-flex d-none"><span class="user-name text-bold-600">{{ username }}</span><span class="user-status">{{ availability }}</span></div><span><img class="round" :src="userimg" alt="avatar" height="40" width="40"></span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="page-user-profile.html"><i class="feather icon-user"></i> Edit Profile</a><a class="dropdown-item" href="app-email.html"><i class="feather icon-mail"></i> My Inbox</a><a class="dropdown-item"
                                            href="app-todo.html"><i class="feather icon-check-square"></i> Task</a>
                                        <div class="dropdown-divider"></div><a class="dropdown-item" href="auth-login.html"><i class="feather icon-power"></i> Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    `
})
app.component("email-update", {
    props: {
        emails: Array,
        emailvisible: Boolean,
    },
    methods: {
        test() {
            document.querySelectorAll(".transfer li").forEach(function(el) {
                el.addEventListener("click", function() {
                    //transfer listing 
                    const firstdiv = el.children[0].children[0];
                    const img = firstdiv.children[0];
                    const seconddiv = el.children[1];
                    const userdetails = seconddiv.children[0];
                    const mailitem1 = userdetails.children[0];
                    const mailitem2 = userdetails.children[1];
                    const h5 = mailitem1.children[0];
                    const header = mailitem1.children[1];
                    const time = mailitem2.children[0].children[1];
                    const writername = "johndoe@ow.ly";
                    const writer = "John";
                    const content = seconddiv.children[1].children[0];
                    const bullet = mailitem2.children[0].children[0];

                    //transferred listing
                    const emailheader = document.getElementById("emailheader");
                    const emailname = document.getElementById("emailsender");
                    const emailimage = document.getElementById("emailimage");
                    document.querySelectorAll(".emailname").forEach(function(name) {
                        name.innerHTML = h5.title;
                    });
                    const emailtime = document.getElementById("emailtime");
                    const emaildate = document.getElementById("emaildate");
                    const emailwriter = document.getElementById("emailwriter");
                    const emailfulldate = document.getElementById("emailfulldate");
                    const emailwritername = document.getElementById("emailwritername");
                    const emailcontent = document.getElementById("emailcontent");
                    const labeltype = document.getElementById("labeltype");
                    const bulletclass = document.getElementById("bulletclass");


                    //transferring
                    emailheader.innerHTML = header.innerHTML;
                    emailname.innerHTML = h5.innerHTML;
                    emailimage.src = img.src;
                    emailtime.innerHTML = time.innerHTML;
                    emaildate.innerHTML = time.title;
                    emailwriter.innerHTML = writername;
                    emailfulldate.innerHTML = time.innerHTML + " " + time.title;
                    emailwritername.innerHTML = "Hey" + " " + writer + ",";
                    emailcontent.innerHTML = content.innerHTML;
                    bulletclass.className = bullet.className;
                    labeltype.innerHTML = bullet.title;
                    console.log("this suppose work");
                    console.log(img.src);
                    const main = document.getElementById("emailstuff");
                    main.className = "email-app-details show";
                })
            });
        }
    },
    template: `
        <div class="email-user-list list-group ps ps--active-y" v-if="emailvisible">
            <ul class="users-list-wrapper media-list transfer" @click="test">
                <li  v-for="email in emails" :class="email.class">
                    <div class="media-left pr-50">
                        <div class="avatar">
                            <img :src="email.imglink" alt="avatar img holder">
                        </div>
                        <div class="user-action">
                            <div class="vs-checkbox-con">
                                <input type="checkbox">
                                <span class="vs-checkbox vs-checkbox-sm">
                                    <span class="vs-checkbox--check">
                                        <i class="vs-icon feather icon-check"></i>
                                    </span>
                                </span>
                            </div>
                            <span class="favorite"><i class="feather icon-star"></i></span>
                        </div>
                    </div>
                    <div class="media-body">
                        <div class="user-details">
                            <div class="mail-items">
                                <h5 class="list-group-item-heading text-bold-600 mb-25" :title="email.email">{{ email.name }}</h5>
                                <span class="list-group-item-text text-truncate">{{ email.header }}</span>
                            </div>
                            <div class="mail-meta-item">
                                <span class="float-right">
                                    <span :class="email.bulletclass" :title="email.bullettype"></span><span class="mail-date" :title="email.date"> {{ email.time }} </span>
                                </span>
                            </div>
                        </div>
                        <div class="mail-message">
                            <p class="list-group-item-text truncate mb-0">{{ email.summary }}</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="no-results">
                <h5>No Items Found</h5>
            </div>
        </div>

    `
})
app.component("blog-created", {
    props: {
        sliders: Array,
    },
    methods: {
        editblog() {
            location.href = "edit-template.html";
        }
    },
    template: `
            <div class="card-content">
                <div class="card-body">
                    <div class="swiper-coverflow swiper-container">
                        <div class="swiper-wrapper" @click="editblog">
                            <div class="swiper-slide" v-for="slide in sliders"> 
                                <img class="img-fluid" :src="slide.src" alt="banner">
                                <div class="text">
                                    <h4> {{ slide.header }} </h4>
                                    <span><i :class="slide.statusclass"></i> {{ slide.status }} </span>
                                </div>
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>


    `
})
app.component("not-created", {
    props: {
        images: Array,
    },
    methods: {
        editblog() {
            location.href = "edit-template.html";
        }
    },
    template: `
        <section id="component-swiper-multi-row">
            <div class="card ">
                <div class="card-header">
                    <h4 class="card-title">Create Blogs</h4>
                </div>
                <div class="card-content">
                    <div class="card-body">
                        <div class="swiper-multi-row swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" style="cursor: pointer;" v-for="image in images" @click="editblog"> <img class="img-fluid" :src="image.src" alt="banner">
                                </div>
                            </div>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
})
app.component("foo-ter", {
    template: `
                    <!-- BEGIN: Footer-->
                    <footer class="footer footer-static footer-light">
                        <p class="clearfix blue-grey lighten-2 mb-0"><span class="float-md-left d-block d-md-inline-block mt-25">COPYRIGHT &copy; 2019 All rights Reserved</span>
                            <button class="btn btn-primary btn-icon scroll-top" type="button"><i class="feather icon-arrow-up"></i></button>
                        </p>
                    </footer>
                    <!-- END: Footer-->
                `
})
app.component("edit-blog", {
    props: {
        images: Array,
    },
    template: `
                <div class="card-content">
                    <div class="card-body">
                        <div class="swiper-responsive-breakpoints swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="image in images"><img class="img-fluid" :src="image.src" alt="banner">
                                </div>
                            </div>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            `
})
app.mount("#body");
