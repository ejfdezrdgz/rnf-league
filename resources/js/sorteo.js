$(document).ready(function () {
  $(".equipo div").each(function (i, e) {
    let t = e.className.split(" ")[0];
    if (t != null) {
      $(e).load("./snippets/" + t + ".html");
    }
  });
});
