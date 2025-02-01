// Sticky header
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

// Background Parallax
window.addEventListener("scroll", function ()
{
    let scrollY = window.scrollY;
    let parallaxElement = document.querySelector(".Parallax");
    
    let speedFactor = 0.5; // Change this for different speeds (0.5 = half speed)
    parallaxElement.style.transform = `translate(0, ${scrollY * speedFactor}px)`;
});

// Programming Elements Expansion/Collapsing
document.querySelectorAll('.Language_Element').forEach(item => {
    const info = item.querySelector('.Language_Description');
  
    // Expand on mouseenter
    item.addEventListener('mouseenter', () => {
      // Set the height to the scrollHeight (the full height of the content)
      info.style.height = info.scrollHeight + 'px';
    });
  
    // Collapse on mouseleave
    item.addEventListener('mouseleave', () => {
      info.style.height = '0';
    });
  });