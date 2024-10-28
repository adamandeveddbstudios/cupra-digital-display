// Banner duration timer start time
var startTime;

// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = gsap.timeline({ onComplete: endTime });

  animate();
  setRollover();
}

function animate() {
  tl.set(['#main_content'], { autoAlpha:1 });
  tl.set(['#cta'], { autoAlpha:0 });
  tl.addLabel('frame1', 0)
    tl.to('#text1', 0.5, { autoAlpha: 1, ease: Power1.easeOut }, 'frame1')
    tl.to('#text1', 0.5, { autoAlpha: 0, ease: Power1.easeOut }, 'frame1+=2')
    tl.to('#bg1', 0.5, { autoAlpha: 0, ease: Power1.easeOut }, 'frame1+=2.5')
    tl.to('#bg2', 0.5, { autoAlpha: 1, ease: Power1.easeOut }, '<')
    tl.to('#text2', 0.5, { autoAlpha: 1, ease: Power1.easeOut }, 'frame1+=3.5')
    tl.to('#cta', 0.5, { autoAlpha: 1, ease: Power1.easeOut }, 'frame1+=4.5')

}

// CTA grow on hover

function setRollover() {
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  gsap.to(["#cta"], 0.25, { color: '#000', backgroundColor:'#fff', ease: Power1.easeOut });
}

function default_out(event) {
    gsap.to(["#cta"], 0.25, { color: '#fff', backgroundColor:'inherit', ease: Power1.easeOut });
}

// End timer

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}