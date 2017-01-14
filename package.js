Package.describe( {
  name: 'color:authructor',
  version: '0.0.1',
  git: 'https://github.com/coloryazilim/authructor.git',
  summary: 'Publish user security.',
  documentation: 'README.md'
});

Package.onUse(( api ) => {
  api.use([ "ecmascript@0.6.1", "underscore@1.0.10"]);
  api.mainModule('authructor.js', 'server');
});
