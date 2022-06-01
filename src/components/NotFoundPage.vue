<template>
<div class="not-found">
 <div class="not-found-image"></div>   
</div>

</template>

<style lang="scss">
 $blue: #002276;

 .not-found {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
 }

 .not-found-image {
     background: url("../assets/notfound.png") no-repeat;
     width: 350px;
     height: 400px;
     display: flex;
     flex-direction: column;
     text-align: center;
     align-items: center;
     justify-content: center;
     margin: 20px;
 }
 .not-found-image::after {
   content:"404-Page Not Found!";
   color: $blue;
   font-size: 2rem;
   font-weight: 600;
   margin-top: 350px;
 }

 .not-found::after {
   content:"Sorry, that page doesn't exist. What would you like to do?";
   color: $blue;
   font-size: 16px;
   margin: 0;
 }
</style>