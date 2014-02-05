/* global describe, it */

(function () {
    'use strict';

    describe('A Collection constructor', function () {
    	describe(', when run', function () {
          it('should return a new object', function () {
          	var students = new Collection;
              
        	expect(students.constructor.name).to.equal("Collection");
           });

          it('should store its first parameter in a property called models', function(){
          	var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}]
          	var students = new Collection(toBeAdded)

          	expect(students.models).to.be.a('Array');
          	expect(students.models[1].name).to.equal('Jack');
          });
        });
    });
})();


