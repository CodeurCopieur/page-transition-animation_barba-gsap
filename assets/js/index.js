pageTransition = () => {
  var tl = gsap.timeline();

  tl.to('header', {
    zIndex: 1
  });

  tl.to('.page-transition', {
    duration: 1,
    height: "100%",
    top: 0
  });

  tl.to('.page-transition', {
    duration: .8,
    height: "100%",
    top: "100%",
    delay: .3
  });

  tl.set('.page-transition', {
    top: "-100%"
  });
}

mainAnimation = () => {
   tl = gsap.timeline();

   tl.from('.container h1, .menu-items li, .logo', {
     duration: 2,
     y: 30,
     opacity: 0,
     stagger: {
       amount: .4
     },
     delay: .8
   })
}

delay = (n) => {

  n = n || 2000;

  return new Promise( done => {
    setTimeout(() => {
      done();
    }, n)
  })
}


barba.init({
  sync: true,
  transitions: [
    {
      async leave(data){
        const done = this.async();
        pageTransition();
        tl = gsap.timeline();
        await delay(1500);
        done();
      },
      async enter(data){
        mainAnimation();
      },
      async once(data){
        mainAnimation();
      }
    }]
});