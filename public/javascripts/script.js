document.addEventListener (
  'DOMContentLoaded',
  () => {
    console.log ('IronGenerator JS imported successfully!');
  },
  false
);

$ (document).ready (function () {
  console.log ('ready!');
});

// initialize paroller.js
$ ('[data-paroller-factor]').paroller ({
  factor: '0.5',
  type: 'foreground',
  direction: 'horizontal',
});
