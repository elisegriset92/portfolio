document.addEventListener (
  'DOMContentLoaded',
  () => {
    console.log ('IronGenerator JS imported successfully!');
  },
  false
);

$ (document).ready (function () {
  $ ('.js-scrollTo').on ('click', function () {
    var page = $ (this).attr ('href');
    var speed = 750;
    $ ('html, body').animate ({scrollTop: $ (page).offset ().top}, speed);
    return false;
  });

  // $ ('.active');
});

$ (function () {
  $ ('[data-toggle="tooltip"]').tooltip ();
});
