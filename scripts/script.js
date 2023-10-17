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

  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }