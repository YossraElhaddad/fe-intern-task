<template>
  <router-view></router-view>
</template>
   
<script>

export default {
  name: 'App'
}

</script>

<style lang="scss">
$gray: #cccccc;
$dark-gray: #8a8e95;
$blue: #2e84fd;
$black: #333333;
$text-blue: #55a5d5;
$lightred: #ffa3a3;
$width: 300px;
$small: 12px;
* {
  margin: 0;
  padding: 0;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
   .login {
    display: flex;
    justify-content: flex-start;
    flex: 1;
      .right-part {
        width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
        
         >img:first-child {
           width: 50px;
         }
         .login-text {
           font-size: 2rem !important;
           margin: 15px;
           color: $black;
         }
         .social-links {
           padding: 10px;
    
           .link-container > div{
           display: flex;
           width: $width;
           border-radius: 2.5px;
           margin: 5px;
           > img {
             width: 24px;
             height: 26px;
           }
           > .text {
             width: inherit;
             text-align: center;
             font-size: 0.875rem;
             line-height: 20px;
             padding: 3px;
             text-decoration: none;
           }
         }
          .google {
           border: 1px solid $blue;
           .text {   
             background-color: $blue;
             color: white;
           }
         }

         .github {
           border: 1px solid $black;
           img {
             background-color: $black;
           }
           .text {   
             background-color: $black;
             color: white;
           }
         }

         .microsoft {
           border: 1px solid $black;
           .text {
             color: $black;
           }
         }
         }

         div.or-text {
           display: flex;
           width: $width;
           gap: 6px;
         }

         div.or-text>div:first-child, div.or-text>div:last-child {
            width: 90%;
            height: 0;
            border: 1px solid $gray;
            margin-top: 10px;
         }     
         
        p {
          margin-top: 2px;
        }
        
       form {
         display: flex;
         flex-direction: column;
         gap: 8px;
       }

        .login-data {
          display: flex;
          flex-direction: column;
          width: $width;

          label {
            display: flex;
            flex-direction: column;
            color: $black;
            font-size: $small;
          }

          .email-label, .password-label {
            margin: 2px;
          }

          .email-label label:first-child {
               align-self: flex-start;
               margin: 2px;
          }

          .password-label div {
            display: flex;
            justify-content: space-between;
            margin: 2px;
          }

          .password-label div a {
            color: $dark-gray;
            text-decoration: none;
          }


           input, .data-incorrect {
             border: 1px solid $gray;
             border-radius: 2.5px;
             padding: 5px;
             font-size: $small;
             color: $black;       
           }
          
          .data-incorrect {
            background-color: $lightred;
          }

           label.password-error,
           label.email-error {
             color: red;
          }

           button {
             background-color: $dark-gray;
             color: white;
             text-align: center;
             padding: 8px;
             cursor: pointer;
             border-radius: 2.5px;
             border: none;
             margin: 2px;
           }

           form + div {
             display: flex;
             justify-content: space-between;
             margin: 15px;

            p {
              font-size: 10px;
              a {
                text-decoration: none;
                color: $text-blue;
                font-weight: 600;
              }
            }
              
           }
           p.text {
             color: $dark-gray;
             font-size: $small;
             margin: 5px;
           }
        }
         
      }    
}
  }
}
</style>

