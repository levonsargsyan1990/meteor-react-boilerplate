/* Methods for the collection should be listed in this file */

import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin';

import { SampleCollections, SampleCollectionsSchema } from './sampleCollections';

export const addBankAccount = new ValidatedMethod({
  name: 'sampleCollections.add',
  mixins: [CallPromiseMixin],
  validate: SampleCollectionsSchema
    .omit('_id')
    .validator(),
  run({
    name,
  }) {
    return SampleCollections.insert({
      name,
    });
  },
});
