// Cross-out and gray out a specific todo by clicking:
$("li").click(function () {
  $(this).toggleClass("completed");
});

// Click on X to delete Todo (an li element):
$("span").click(function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation(); // prevents bubbling to li, ul, container, body etc
});
// fadeOut() doesn't remove but changes to display="hidden";
