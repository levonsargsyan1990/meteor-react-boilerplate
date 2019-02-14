import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const SampleCollections = new Mongo.Collection('sampleCollections');

// Deny all client-side updates since we will be using methods to manage this collection
SampleCollections.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export const SampleCollectionsSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  name: {
    type: String,
  },
});

SampleCollections.attachSchema(SampleCollectionsSchema);

// This represents the keys from SampleCollections objects that should be published
// to the client. If we add secret properties to SampleCollections objects, don't list
// them here to keep them private to the server.
SampleCollections.publicFields = {
  _id: 1,
  name: 1,
};
