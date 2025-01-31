window.addEventListener("scroll", function()
{
    const header = document.getElementById("main_header");

    if (window.scrollY > 50)
    {
        header.classList.add("scrolled");
    }
    else
    {
        header.classList.remove("scrolled");
    }
});

window.addEventListener("scroll", function ()
{
    let scrollY = window.scrollY;
    let parallaxElement = document.querySelector(".Parallax");
    
    let speedFactor = 0.5; // Change this for different speeds (0.5 = half speed)
    parallaxElement.style.transform = `translate(0, ${scrollY * speedFactor}px)`;
});