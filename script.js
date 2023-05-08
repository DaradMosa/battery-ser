$.ajax({
    url: "https://battery-lvl.onrender.com",
    method: "GET",
    data: {level: 0},
    success: function(data) {
      initialLevel = parseInt(data.level) || 0;
      console.log("Initial battery level:", initialLevel);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });

setInterval(function() {
    $.ajax({
      url: "https://battery-lvl.onrender.com",
      method: "GET",
      data: {level: 0},
      success: function(data) {
        var currentLevel = parseInt(data.level) || 1;
        var diff = currentLevel - initialLevel;
        $("#battery-level").text(currentLevel + "%");
        $("#difference").text(diff + "%");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  }, 500);