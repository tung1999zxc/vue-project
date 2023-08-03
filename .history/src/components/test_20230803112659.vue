<template>
  <header class="header">
    <div class="container-fluid p-0">
      <div class=" row justify-content-center header-background " >
       
        <div class="col-6 m-5">
        
            <h1 class=" mb-5 text-center" v-if="isAuthenticated">Xin chào {{userinfo.fullname}}</h1>
            <h1 class=" mb-5 text-center" v-else>Generate more leads with a professional landing page!</h1>
              <form class="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                <!-- Email address input-->
                <div class="row">
                    <div class="col">
                        <input class="form-control form-control-lg" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                        <div class="invalid-feedback text-white" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                        <div class="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                    </div>
                    <div class="col-auto"><button class="btn btn-primary btn-lg q" id="submitButton" type="submit">Submit</button></div>
                </div>
                
                <div class="d-none" id="submitSuccessMessage">
                    <div class="text-center mb-3">
                        <div class="fw-bolder">Form submission successful!</div>
                        <p>To activate this form, sign up at</p>
                        <a class="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                </div>
                
                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
            </form>
          </div>
         
        </div>
      </div>
  

  </header>
  
  <section class="intro">
    <div class="container mt-5">
      <div class="row text-center">
        <div class="col-md-4 mb-4">
          <div class="mx-auto">

            <h2>Fully Responsive</h2>
            <p class="lead">This theme will look great on any no matter the size!</p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="row justify-content-center">
            <div></div>
           
            <h2 class="">Bootstrap 5 Ready</h2>
            <p class="lead">Featuring the latest build of the new Bootstrap 5 framework!  </p>
          </div>
        </div>
        <div class="col-md-4  mb-4">
          <div class="mx-auto">
            <h2>Easy to Use</h2>
            <p class="lead">Ready to use with your own content, or customize the source files!</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="intro-2">
    <div class="container-fluid">
      <div class="row">
      
          <div class="intro-2-img1 col-md-6 order-md-2" ></div>
          <div class=" col-md-6 order-md-1  my-auto px-5">
          <h2>Fully Responsive Design</h2>
          <p class="lead">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
        </div>
        
      </div>
      <div class="row">
      
        <div class="intro-2-img2 col-md-6 "></div>
        <div class=" col-md-6  my-auto px-5">
        <h2>Updated For Bootstrap 5</h2>
        <p class="lead">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
      </div>
      
    </div>
    <div class="row mb-5">
      
      <div class="intro-2-img3 col-md-6 order-md-2" ></div>
      <div class=" col-md-6 order-md-1  my-auto px-5">
      <h2>Easy to Use & Customize</h2>
      <p class="lead">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
    </div>
    
  </div>
    </div>
  </section>

  <section class="saying">
    <div class="container">
      <div class="d-flex justify-content-center mt-5">
        <h2>What people are saying...</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 text-center mb-5">
        
          <img src="../assets/testimonials-1.jpg" alt="" class="mr-3 mt-3 rounded-circle" style="width:10rem;">
          <h3>Fred S.</h3>
          <p>"This is fantastic! Thanks so much guys!"</p>
        </div>
        <div class="col-md-4 text-center mb-5">
        
          <img src="../assets/testimonials-2.jpg" alt="" class="mr-3 mt-3 rounded-circle" style="width:10rem;">
          <h3>Margaret E.</h3>
          <p>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
        
          
        </div>
        <div class="col-md-4 text-center mb-5">
          <img src="../assets/testimonials-3.jpg" alt="" class="mr-3 mt-3 rounded-circle" style="width:10rem;">
          <h3>Sarah W.</h3>
          <p>"Thanks so much for making these free resources available to us!"</p>
        </div>

      </div>
  
  </section>

  <section class="ready img-fluid ready-bg" style=" ">
    <div class="container-fluid">
       
       <h3 class="text-center text-white pb-5" style="padding-top: 80px;">Ready to get started? Sign up now!</h3>
      
       <div class="row justify-content-center">
        <div class="col-md-6">
          <form class="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
            <!-- Email address input-->
            <div class="row">
                <div class="col">
                    <input class="form-control form-control-lg" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                    <div class="invalid-feedback text-white" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                    <div class="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                </div>
                <div class="col-auto"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
            </div>
            
            <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                    <p>To activate this form, sign up at</p>
                    <a class="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
            </div>
            
            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
        </form>
        </div>
       </div>


    </div>
  </section>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.css';
  import { mapState, mapGetters , mapMutations ,mapActions} from 'vuex';
  export default {
    computed: {
    ...mapGetters('auth', ['userinfo', 'isAuthenticated']),
  },
    data() {
      return {
       
      };
    },
    ...mapMutations('auth', ['SET_USERINFO'])
  };
  </script>
  
  <style scoped>
  .intro-2-img1 {
    background-image: url("../assets/bg-showcase-1.jpg");
    min-height: 30rem;
    background-size: cover;
  }
  .intro-2-img2 {
    background-image: url("../assets/bg-showcase-2.jpg");
    min-height: 30rem;
    background-size: cover;
  }
  .intro-2-img3 {
    background-image: url("../assets/bg-showcase-3.jpg");
    min-height: 30rem;
    background-size: cover;
  }
  .header-background{
    background-image: url("../assets/bg-masthead.jpg"); /* Replace with the correct path to your image */
    background-size: cover; /* Adjust this to control how the image covers the container */
    background-position: center;
    min-height: 20rem;
  }
  .ready-bg{
    background: url(../assets/bg-masthead.jpg) center   ; 
    min-height: 300px; 
    background-size: cover;
  }
  </style>
  