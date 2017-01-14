Authructor
=================

# INSTALL

```cmd
meteor add color:authructor
```

```javascript
import { Authructor } from 'meteor/authructor';

Meteor.publish('users', function() {

  // If the user is a precaution.
  return new Authructor(this).returnPublish(function() {
    return Users.find();
  })
})
```
