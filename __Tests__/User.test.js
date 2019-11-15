import { User } from './../src/User.js';

describe('User', () => {
  test('should determine user inputs a positive interger', () => {
   let user = new User(10, 80);
   expect(user.age()).toEqual("How can you live in negative years?");
 });
//  test('should determine *spec 1*', () => {
//   let lilConstr = new Constructor("strings and numbers like", 5, objects, [empty arrays]);
//   expect(lilConstr.cappinProto()).toEqual("The same exact result in test and Constructor pages");
// });

}
