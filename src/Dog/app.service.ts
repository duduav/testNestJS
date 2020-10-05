

import { Injectable } from '@nestjs/common';
import { MealsModel, UserData } from './dog.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(){

  }  
  
  getData(id: string ): Promise<any>{
    let result:any;
    var promise = new Promise(function(resolve, reject) {
      MealsModel.findOne({ 'id': '053061537' }, function (err, data) {
        if (err) {
          reject(err);
        };        
        resolve(data);
      });
  });
    // MealsModel.findOne({ 'id': '053061537' }, function (err, data) {
    //   if (err) {};
    //   // Prints "Space Ghost is a talk show host".
    //   console.log('%s %s is a %s.', data);
    //   result =data
    // });
    return promise
  }

  getHello(): string {
    
    let x = new MealsModel({
      "id": "05306153",
      "name": "דודו אבינועם",
      "dates": {
          "10/5/2020": {
              "meals": [
                  {
                      "meal": [
                          "חביתה",
                          ""
                      ],
                      "header": "ארוחת בוקר"
                  },
                  {
                      "meal": [
                          "בשר",
                          ""
                      ],
                      "header": "ארוחת צהרים"
                  },
                  {
                      "meal": [
                          "טונה",
                          ""
                      ],
                      "header": "ארוחת ערב"
                  }
              ]
          },
          "10/4/2020": {
              "meals": [
                  {
                      "meal": [
                          "חביתה",
                          ""
                      ],
                      "header": "ארוחת בוקר"
                  },
                  {
                      "meal": [
                          "בשר",
                          ""
                      ],
                      "header": "ארוחת צהרים"
                  },
                  {
                      "meal": [
                          "טונה",
                          ""
                      ],
                      "header": "ארוחת ערב"
                  }
              ]
          }
      }
  }

    )
    //let x = new DogModel({ 'name': 'sdsd'})
    x.save();
    return 'Hello World!';
  }
}
