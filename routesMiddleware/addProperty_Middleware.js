const {mongoose} = require('../db/mongoose');
const User = require('../models/user');
const Property = require('../models/property');
const cloudinary = require('cloudinary');
const utils = require('../utils');

module.exports = {
  addProperty(req, res, next) {
    if(req.body.propertyType === hostel && req.files.length < 4 || req.files.length > 20) {
      res.render('addHostel', {

      });
    }
    else if(req.body.propertyType === houseSale && req.files.length < 4 || req.files.length > 20) {
        res.render('addHouseSale', {

        });
      }
    else if(req.body.propertyType === houseRent && req.files.length < 4 || req.files.length > 20) {
        res.render('addHouseRent', {

        });
      }
    else if(req.body.propertyType === room && req.files.length < 4 || req.files.length > 20) {
      res.render('addRoom', {

      });
    }
    else if(req.body.propertyType === apartmentSale && req.files.length < 4 || req.files.length > 20) {
      res.render('addApartmentSale', {

      });
    }
    else if(req.body.propertyType === apartmentRent && req.files.length < 4 || req.files.length > 20) {
      res.render('addApartmentRent', {

      });
    }
  }
};
