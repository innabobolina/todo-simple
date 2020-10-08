// Cross-out and gray out a specific todo by clicking:

$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});
// on (above) adds listeners for all potential
// future elements, not just the existing ones,
// unlike click (below):

// $("li").click(function () {
//   $(this).toggleClass("completed");
// });

// Click on X to delete Todo (an li element):
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation(); // prevents bubbling to li, ul, container, body etc
});
// fadeOut() doesn't remove but changes to display="hidden";

$("input[type='text']").keypress(function (event) {
  // event.which === 13 detects when the Enter key is pressed:
  if (event.which === 13) {
    // grab new todo text from input:
    let todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul:
    $("ul").append(`<li><span>X</span> ${todoText}</li>`);
  }
});
