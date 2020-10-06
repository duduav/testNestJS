


import { Injectable } from '@nestjs/common';
import { MealsModel, UserData } from './dog.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(){

  }

  getData(id: string ): Promise<any>{    
    var promise = new Promise(function(resolve, reject) {
      MealsModel.findOne({ 'id': id }, function (err, data) {
        if (err) {
          reject(err);
        };
        resolve(data);
      });
  });    
    return promise
  }

  upsertData(UserData :UserData): Promise<any> {

    var promise = new Promise(function(resolve, reject) {
      MealsModel.replaceOne({'_id':UserData.id},UserData,{upsert:true},function (err, data) {
        if (err) {
          reject(err);
        };
        resolve(data);
      });
  });    
    return promise
  }
        
}


