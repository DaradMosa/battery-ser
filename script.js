  window.addEventListener("load",() => {
    setInterval(() => {
      $.ajax({
        url: "https://battery-lvl.onrender.com/lvl",
        method: "GET",
        success: function(lvl) {

          var initialLevel 
          if (!initialLevel) {
              initialLevel = parseInt(lvl);
          }
          var currentLevel = parseInt(lvl);
          var diff = currentLevel - initialLevel;
          $("#battery-level").text(currentLevel + "%");
          $("#difference").text(diff + "%");
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
        }
      });
    },500);
})