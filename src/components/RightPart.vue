<template>
   <div class="right-part">
      <img src="../assets/instabug-logo.png" alt="Instabug icon logo" />
      <div class="login-text">Log in to Instabug</div>
      <div class="social-links">
         <social-links :links="socialLinks"></social-links>
      </div>
      <div class="or-text">
      <div></div>
         <p>OR</p>
      <div></div>
         </div>
      <hr>
      <div class="login-data">
         <form @submit.prevent="route()">
         <div class="data-incorrect" v-show="isSubmitted && !isDataCorrect">Your email and/or password are incorrect</div>
            <label class="email-label">
               <label for="email">Work Email</label>

               <input v-model="user.userEmail"
               id="email" type="email"
               name="email"
               placeholder="you@company.com"
               @click="isSubmitted = false"
               :style="isInvalidEmail && user.userEmail ? 'border: 1px solid red;' : 'border: 1px solid #cccccc;'"
               />
                <div v-show="user.userEmail && isInvalidEmail">
                   <label class="email-error">{{checkEmail()}}</label>
                </div>
               
            </label>

            <label class='password-label'>
               <div>
                  <label for="password">Password</label>
                  <a href="#">Forgot password?</a>
               </div>
               <input v-model="user.userPassword"
               id="password"
               type="password"
               name="password"
               placeholder="6+ Characters"
               @click="isSubmitted = false"
               :style="user.userPassword && isInvalidPassword ? 'border: 1px solid red;' : 'border: 1px solid #cccccc;'"
               />

               <div v-show="user.userPassword && isInvalidPassword">
               <label class="password-error">{{checkPassword()}}</label>
               </div>
               
            </label>

            <button :disabled="isDisable">Log in</button>

         </form>

         <div>
            <p>Don't have an account? <a href="#">Sign up</a></p>
            <p><a href="">Login via SSO</a></p>
         </div>
         <p class="text">Trusted by the top companies.</p>

      </div>

   </div>
</template>

<script>
import SocialLinks from './SocialLinks';
import data from '../../data';
export default {
   name: 'RightPart',
   components: {
      SocialLinks
   },
   data() {
      return {

         user: { userEmail: "", userPassword: "" },
         passwordCheckError: "test",
         emailCheckError: "test",
         isSubmitted: false,
         isDataCorrect: false,
         socialLinks: [
            { name: 'Google', image: require('../assets/google.png') },
            { name: 'GitHub', image: require('../assets/github.png') },
            { name: 'Microsoft', image: require('../assets/microsoft.png') }
         ]
      }
   },
   methods: {
      //if login info is correct, redirect to welcome page
      route() {
         for (let i = 0; i < data.length; i++) {
            if (this.user.userEmail === data[i].email && this.user.userPassword === data[i].password) { this.isDataCorrect = true; break; }
         }
         if (this.isDataCorrect){
           this.$router.push({ path: `/welcome/${this.user.userEmail}` });
           //saving in the local storage until the user logs out
           window.localStorage.setItem('logged-in', `/welcome/${this.user.userEmail}`);
         }
      this.isSubmitted = true; //used to show the error if the login info is invalid
      },

      checkPassword() {
      const [firstEmailPart] = this.user.userEmail.split('@');
         if (this.user.userPassword.length < 6)
            this.passwordCheckError = "Password must be 6 characters or more";

         else if (!this.user.userPassword.match("(?=.*?[A-Z])"))
            this.passwordCheckError = "Password must contain at least one Uppercase letter";

         else if (!this.user.userPassword.match("(?=.*?[0-9])"))
            this.passwordCheckError = "Password must contain at least one number";

         else if (this.user.userPassword.includes(firstEmailPart))
            this.passwordCheckError = "Password shouldn't contain the email address name";
         
         else
         this.passwordCheckError = "";

         return this.passwordCheckError;
      },

      checkEmail() {
      const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         if(!this.user.userEmail.match(emailRegex))
            this.emailCheckError = "Please enter a valid Email";
         else
         this.emailCheckError = "";    
         return this.emailCheckError;   
      }

   },
   computed: {

      isInvalidPassword() {
         let result = false;
         const [firstEmailPart] = this.user.userEmail.split('@');
         
         if (!this.user.userPassword.match("^(?=.*[A-Z])(?=.*[0-9])(?=.{6,})") || this.user.userPassword.includes(firstEmailPart)) {
            result = true;
         }
         return result;
      },
      isInvalidEmail() {
         let result = false;
        const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         if(!this.user.userEmail.match(emailRegex))
            result = true;
         return result;
      },
        isDisable() {
         return (!this.user.userPassword || !this.user.userEmail || this.isInvalidEmail ||this.isInvalidPassword);
      },

   },

}
</script>
