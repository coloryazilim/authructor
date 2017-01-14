Package.describe( {
  name: 'color:authructor',
  summary: 'Publish auth secure.',
  version: '0.0.1'
});

Package.onUse(( api ) => {
  api.use([ "ecmascript", "underscore"]);
  api.mainModule('authructor.js', 'server');
});
