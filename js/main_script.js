/* Changing nav bars */
function navBar(x) {
  x.classList.toggle("change");
  document.getElementById("myDropdown").classList.toggle("show");
}
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

