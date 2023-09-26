
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