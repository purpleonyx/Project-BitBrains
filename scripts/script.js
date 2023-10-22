var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'scripts/data.json'
  })

var animation = bodymovin.loadAnimation({
    container: document.getElementById('dev-anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'scripts/developer_anim/developer.json'
})

function openNav() {
    document.getElementById("Side-nav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
  
function closeNav() {
    document.getElementById("Side-nav").style.width = "0";
    document.body.style.backgroundColor = "white";
}