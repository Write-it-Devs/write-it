const app = Vue.createApp({
    data() {
        return {
            acctVisible: false,
            angleclass: "fas fa-angle-down"
        }
    },
    methods: {
        changeacct() {
            this.acctVisible = !this.acctVisible;
            if (this.acctVisible == true) {
                this.angleclass = "fas fa-angle-up";
            } else if (this.acctVisible == false) {
                this.angleclass = "fas fa-angle-down";
            }
        }
    }
})
app.component("extra-component", {
    template: `
    <div class="box"> <label for="email">Name:</label> <input type="text" id="text" required placeholder="Enter your name"> </div>
    <div class="box"> <label for="email">Email address:</label> <input type="email" id="email" required placeholder="Email address"> </div>
    <div class="box"> <label for="name">Password:</label> <input type="password" id="password" required placeholder="**************"> </div>
    <div class="box"> <label for="number">Phone Number:</label> <input type="number" id="number" required placeholder="Enter your phone number">
    <slot></slot>
    </div>
    `
})
app.component("gend-er", {
    template: `
    <div class="box"> <label for="mode">Gender:</label> <select id="interests" required>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Others</option>
    </select>
    </div>
    `
})
app.component("account-component", {
    template: `
    <ul>
        <li><a href="./signup.html">READER ACCOUNT</a></li>
        <li><a href="./signupwriter.html">WRITER ACCOUNT</a></li>
        <li><a href="./signupall.html">READER/WRITER ACCOUNT</a></li>
    </ul>
</div>
    `
})
app.component("niche-component", {
    template: `
        <div class="flex-flow">
        <slot></slot>
        <div class="box"> <label for="mode">Main Niche:</label> <select id="interests" required>
        <option value="health">Health</option>
        <option value="education">Education</option>
        <option value="financial">Financial</option>
        <option value="other">Other</option>
        </select>
        </div>
        </div>
    `
})
app.component("sign-in", {
    template: `
    <div class="box">
    <label for="email">Email:</label>
    <input type="email" id="email" required placeholder="Enter your email">
</div>
<div class="box">
    <label for="email">Password:</label>
    <input type="password" id="email" required placeholder="*************">
</div>
<div class="flow">
    <div class="flow_main">
        <input type="checkbox" id="checkbox">
        <label for="check">Remember me</label>
    </div>
    <a href="#">Forgotten Password</a>
</div>
<input type="submit" value="SIGN IN">
    `
})
app.component("account-in", {
    template: `
    <ul>
    <li><a href="./index.html">READER ACCOUNT</a></li>
    <li><a href="./signinwriter.html">WRITER ACCOUNT</a></li>
    <li><a href="./signinall.html">READER/WRITER ACCOUNT</a></li>
    </ul>
    `
})
app.mount("#body");