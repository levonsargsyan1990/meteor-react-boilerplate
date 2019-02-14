
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

import { SampleCollections } from '../sampleCollections';

Meteor.publish('sampleCollections.listByName', (params) => {
  new SimpleSchema({
    name: {
      type: String,
    },
  }).validate(params);

  const { name } = params;

  return SampleCollections.find({ name }, {
    fields: SampleCollections.publicFields,
  });
});
