export function bindAjaxLoaders() {
  let ajaxButtons = $(".ajax-button");
  $(ajaxButtons).each(function (index, e) {
    $(e).click(function (el) {
      el.preventDefault();

      // let c1 = Math.floor(Math.random() * 255).toString(),
      //   c2 = Math.floor(Math.random() * 255).toString(),
      //   c3 = Math.floor(Math.random() * 255).toString();
      // e.setAttribute("style", "color: rgba(" + c1 + "," + c2 + "," + c3 + ")");

      let filename =
        el.target.innerText.split(" ").slice(-1)[0].toLowerCase() + ".html";
      $("body").load(filename);
    });
  });
}

export function bindCrossfade() {
  let revealers = $(".equipo span");
  $(revealers).each(function (index, e) {
    $(e).hover(function (el) {
      el.preventDefault();
      e.style.cursor = "pointer";
    });
    $(e).click(function (el) {
      el.preventDefault();
      // let r = e.nextSibling.nextSibling;
      // $(e).addClass("fadeOut");
      // $(r).addClass("fadeIn");
    });
  });
}
