import { Constructor } from './../src/Construstor.js';

describe('Constructor', () => {
  test('should determine *spec 1*', () => {
   let lilConstr = new Constructor("strings and numbers like", 5, objects, [empty arrays]);
   expect(lilConstr.cappinProto()).toEqual("The same exact result in test and Constructor pages");
 });
}
