let onScroll = false;
let parallaxTitle;
let img;

const scrollProgress = () => {
    onScroll = true;
};

const raf = () => {
    if (onScroll) {
        if(window.scrollY<800) {
            parallaxTitle = document.querySelectorAll('.work__title')[0];
            parallaxTitle.style.transform = "translate(" + window.scrollY/30 + "%, -" + window.scrollY+ "%)";
        }
        else {
            let i = parseInt(window.scrollY/800);
            if((i+1)<window.scrollY<800*(i+2)) {
                parallaxTitle = document.querySelectorAll('.work__title')[i];
                parallaxTitle.style.transform = "translate(" + (window.scrollY-800*i)/30 + "%, -" + (window.scrollY-800*i) + "%)";
            }
        }
        onScroll = false;
    }
    requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
window.addEventListener("scroll", scrollProgress);
