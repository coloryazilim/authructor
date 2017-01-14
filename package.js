Package.describe( {
  name: 'color:authructor',
  version: '0.0.1',
  git: 'https://github.com/coloryazilim/authructor.git',
  summary: 'Publish user security.',
  documentation: 'README.md'
});

Package.onUse(( api ) => {
  api.use([ "ecmascript", "underscore"]);
  api.mainModule('authructor.js', 'server');
});
