import { _ } from 'meteor/underscore';

export class Authructor {
  constructor(instance) {
    this.instance = instance;
  }

  returnPublish(fn) {
    if (_.isNull(this.instance.userId)) {
      return this.instance.stop();
    }

    return fn();
  }
}
