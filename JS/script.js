var i = 0;

    var tag = document.getElementById("intro");
    var html = document.getElementById("intro").innerHTML;
    
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 500;
    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("intro").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }

    }

     typeWriter();
        