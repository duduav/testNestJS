import { Controller } from '@nestjs/common';
import { Document } from 'mongoose';
let mongoose = require('mongoose');

export class UserData extends Document {
  id: string;
  name: string;
  dates: { [date: string]: Meals1; }
}
export class Meals1{
  meals: Meals[];
}
export class Meals{
  meal: string[];
  dates: string;
}

export const MealsSchema = new mongoose.Schema({
  id: String,
  name: String,
  dates: {} ,
});
export const MealsModel = mongoose.model('Meals',MealsSchema);
