
// Добавляем обработчик события "клик" на кнопку
window.onload = function() {
    const button = document.getElementById("btnForName");
    const input = document.getElementById("name");

    button.addEventListener("click", function() {
        input.removeAttribute("readonly");
    });
}
// window.onload = function() {
//     $(".like").'click' => {
//         var btn = $(e.currentTarget);
//         var postId = btn.attr("data-post-id");
//         btn.attr("disabled", "disabled");
//         $.post("/post/" + postId + "/like", (data) => {
//             btn.text("" + data + " ❤️");
//             btn.removeClass("btn-secondary");
//             btn.addClass("btn-danger");
//         });
//     });
// };
