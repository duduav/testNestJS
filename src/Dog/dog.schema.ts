let mongoose = require('mongoose');
export const DogSchema = new mongoose.Schema({
   name: String,
   age: Number,
   breed: String,
 });
 export const DogModel = mongoose.model('Dog',DogSchema);