$("li").click(function () {
  if ($(this).css("color") === "rgb(128, 128, 128)") {
    console.log("it's gray!");
    $(this).css({
      color: "black",
      textDecoration: "none",
    });
  } else {
    $(this).css({
      color: "gray",
      textDecoration: "line-through",
    });
  }
});