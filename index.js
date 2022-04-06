// Make it so that the initialize function can only be called once!
let view;
function initialize() {
      view = '🏔';
      console.log('view has been set!')
  return function() {
    return view
  }
}

const initializer = initialize();

initializer();
initializer();
initializer();

console.log(view)