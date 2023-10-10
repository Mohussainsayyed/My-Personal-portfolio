	let loder = document.getElementsByClassName(".preloder")
	window.addEventListener("load",()=>{
		loder.style.display = "none";
	});

	/*for nav scroll down show */
	const nav = document.querySelector(".header");
	const navm= document.querySelector(".navbar")
	let lastScrollY = window.scrollY;
	
	window.addEventListener('scroll',() => {
	if(lastScrollY < window.scrollY){
		nav.classList.add("nav-hidden");
		navm.classList.add("nav-hidden");
	}else{
		nav.classList.remove("nav-hidden");
		navm.classList.remove("nav-hidden");
	}
	
	lastScrollY = window.scrollY;
	});
	
	/*for nav activ link on scroll*/
	
	const sections = document.querySelectorAll("section");
	
	window.addEventListener("scroll", () => {
	
		let scrollY = window.pageYOffset;
		
		sections.forEach(current => {
			const Height = current.offsetHeight;
			const Top = current.offsetTop - 50;
			Id = current.getAttribute("id");
			if (
				scrollY > Top &&
				scrollY <= Top + Height
			){
				document.querySelector(".navbar a[href*=" + Id + "]").classList.add("active");
			} else {
				document.querySelector(".navbar a[href*=" + Id + "]").classList.remove("active");
			}
		});
	});
	/*for form information get*/
	function sendEmail(){
	  				Email.send({
		  				Host : "smtp.gmail.com",
		  				Username : "hussainahamedsayyed@gmail.com",
		  				Password : "password",
		  				To : 'hussainahamedsayyed@gmail.com',
		  				From : document.getElementById("email").value,
		  				Subject : "new contract form enquiry",
		  				Body : "first name:" + document.getElementById("fname").value
		  				+ "<br/> last name:" + document.getElementById("lname").value
		  				+ "<br/> Email:" + document.getElementById("email").value
		  				+ "<br/> PnoneNumber:" + document.getElementById("number").value
		  				+ "<br/> Message:" + document.getElementById("subject").value,
	  				}).then(
	  				message => alert("sorry this is not working")
	  				);
	  			}
	  			/*animation gsap start*/
	  			
	  			let tl = gsap.timeline();
	  			tl.to(".preloder h1",{
	  			delay:1,
	  			opacity:1,
	  			duration:1,
	  			});
	  			
	  			tl.to(".preloder ",{
	  			delay:.5,
	  			opacity:0,
	  			display:"none",
	  			duration:1,
	  			});
	  			
	  			tl.from(".home h1,.home h3,.home p",{
	  			delay:.5,
	  			delay:"-1",
	  			stagger:.4,
	  			x:-100,
	  			opacity:0,
	  			});
	  			
	  			tl.from(".home .btn-box",{
	  			y:100,
	  			opacity:0,
	  			duration:.5,
	  			});
	  			
	  			tl.from(".home .home-sci a" ,{
	  			y:100,
	  			opacity:0,
	  			duration:.5,
	  			stagger:.1,
	  			});
	  			/*about*/
	  			
	  			gsap.from(".about .heading",{
	  			y:"-100",
	  			rotate:"-25deg",
	  			opacity:0,
	  			duration:.5,
	  			scrollTrigger:{
	  			trigger:(".about .heading"),
	  			scroller:"body",
	  			start:"top center",
	  			end:"center center",
	  			scrub:2,
	  			}
	  			});
	  			
	  			gsap.from(".about .about-img",{
	  			scale:0.8,
	  			opacity:0,
	  			duration:.5,
	  			scrollTrigger:{
	  			trigger:(".about .about-img"),
	  			scroller:"body",
	  			start:"top center",
	  			end:"center center",
	  			scrub:2,
	  			}
	  			});
	  			/*education*/
	  			let tl2 = gsap.timeline({
	  				scrollTrigger:{
	  				trigger:(".education"),
	  				scroller:"body",
	  				start:"top center",
	  				end:"center center",
	  				}
	  			});
	  			
	  			tl2.from(".education .heading",{
	  			scale:0.8,
	  			opacity:0,
	  			duration:.5,
	 
	  			});
	  			
	  			tl2.from(".education .education-row",{
	  			scale:0.8,
	  			opacity:0,
	  			duration:.5,
	  			
	  			});
	  			
	  			/*skills*/
	  			
	  let tl3 = gsap.timeline({
	  	scrollTrigger:{
	  	trigger:(".skills"),
	  	scroller:"body",
	  	start:"top center",
	  	end:"top 30%",
	  	scrub:1,
	  	}
	  });
	  
	  tl3.from(" .skills .heading",{
	  scale:0.8,
	  translate:"-50px 50px",
	  opacity:0,
	  duration:.5,
	  	 
	  });
	  
	  tl3.from(".skills .skills-row",{
	  scale:0.8,
	  opacity:0,
	  duration:.5,
	  
	  });
	  
	  
	  /*contact*/
	  
	  let tl4 = gsap.timeline({
	  scrollTrigger:{
	  trigger:(".contact"),
	  scroller:"body",
	  start:"top center",
	  end:"center center",
	  scrub:1,
	  }
	  });
	  
	  tl4.from(" .contact .heading",{
	  scale:0.8,
	  translate:"50px 50px",
	  opacity:0,
	  duration:.5,
	  
	  });
	  
	  tl4.from(".contact form ",{
	  scale:0.8,
	  opacity:0,
	  duration:.5,
	  
	  });
	  