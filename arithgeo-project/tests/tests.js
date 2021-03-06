
'use strict';


var chai = require('chai');
var expect = chai.expect;
var myApp = require('../app/library.js');

  describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        expect(myApp.arithGeo([])).to.eql(0);
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        expect(myApp.arithGeo([2, 4, 6, 8, 10])).to.eql('Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        expect(myApp.arithGeo([5, 11, 17, 23, 29, 35, 41])).to.eql('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        expect(myApp.arithGeo([15, 10, 5, 0, -5, -10])).to.eql('Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        expect(myApp.arithGeo([2, 6, 18, 54, 162])).to.eql('Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        expect(myApp.arithGeo([0.5, 3.5, 24.5, 171.5])).to.eql('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        expect(myApp.arithGeo([-128, 64, -32, 16, -8])).to.eql('Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        expect(myApp.arithGeo([1, 2, 3, 5, 8])).to.eql(-1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        expect(myApp.arithGeo([1, 3, 6, 10, 15])).to.eql(-1);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        expect(myApp.arithGeo([1, 8, 27, 64, 125])).to.eql(-1);
      });
      
    });
  });  
 