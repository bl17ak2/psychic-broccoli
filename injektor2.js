var all = document.getElementsByTagName("*");

for (var i = 0; i < all.length; i++) {
  all[i].setAttribute(
    "onclick",
    "alert(' FUCK YOU BITCH DONT DO XSS ')"
  );
}
