const {mongoose} = require('../db/mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = require('./photo');

const PropertySchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  photos: [PhotoSchema],
  room: {
    name: {
      type: String,
      required: false,
      unique: false
    },
    roomCapacity: {
      type: String,
      required: false,
      unique: false
    },
    address: {
      type: String,
      required: false,
      unique: false
    },
    city: {
      type: String,
      required: false,
      unique: false
    },
    country: {
      type: String,
      required: false,
      unique: false
    },
    stateOrRegion: {
      type: String,
      required: false,
      unique: false
    },
    zipcode: {
      type: String,
      required: false,
      unique: false
    },
    nearbyLocations: {
      type: String,
      required: false,
      unique: false
    },
    swimmingPool: {
      type: String,
      required: false,
      unique: false
    },
    backupGenerator: {
      type: String,
      required: false,
      unique: false
    },
    kitchen: {
      type: String,
      required: false,
      unique: false
    },
    airCondition: {
      type: String,
      required: false,
      unique: false
    },
    gym: {
      type: String,
      required: false,
      unique: false
    },
    parkingSpace: {
      type: String,
      required: false,
      unique: false
    },
    elevator: {
      type: String,
      required: false,
      unique: false
    },
    wifi: {
      type: String,
      required: false,
      unique: false
    },
    wheelchairAccess: {
      type: String,
      required: false,
      unique: false
    },
    security: {
      type: String,
      required: false,
      unique: false
    },
    personalToilet: {
      type: String,
      required: false,
      unique: false
    },
    laundaryService: {
      type: String,
      required: false,
      unique: false
    },
    tv: {
      type: String,
      required: false,
      unique: false
    },
    refrigerator: {
      type: String,
      required: false,
      unique: false
    },
    email: {
      type: String,
      required: false,
      unique: false
    },
    phoneNumber: {
      type: String,
      required: false,
      unique: false
    },
    amount: {
      type: String,
      required: false,
      unique: false
    },
    currency: {
      type: String,
      required: false,
      unique: false
    },
    per: {
      type: String,
      required: false,
      unique: false
    },
    negotiable: {
      type: String,
      required: false,
      unique: false
    }
  },
  apartment: {
    name: {
      type: String,
      required: false,
      unique: false
    },
    rentOrSale: {
      type: String,
      required: false,
      unique: false
    },
    numberOfRooms: {
      type: String,
      required: false,
      unique: false
    },
    numberOfToilets: {
      type: String,
      required: false,
      unique: false
    },
    numberOfBathrooms: {
      type: String,
      required: false,
      unique: false
    },
    numberOfKitchens: {
      type: String,
      required: false,
      unique: false
    },
    numberOfLivingrooms: {
      type: String,
      required: false,
      unique: false
    },
    description: {
      type: String,
      required: false,
      unique: false
    },
    address: {
      type: String,
      required: false,
      unique: false
    },
    city: {
      type: String,
      required: false,
      unique: false
    },
    country: {
      type: String,
      required: false,
      unique: false
    },
    stateOrRegion: {
      type: String,
      required: false,
      unique: false
    },
    zipcode: {
      type: String,
      required: false,
      unique: false
    },
    nearbyLocations: {
      type: String,
      required: false,
      unique: false
    },
    swimmingPool: {
      type: String,
      required: false,
      unique: false
    },
    backupGenerator: {
      type: String,
      required: false,
      unique: false
    },
    kitchenStore: {
      type: String,
      required: false,
      unique: false
    },
    airCondition: {
      type: String,
      required: false,
      unique: false
    },
    gym: {
      type: String,
      required: false,
      unique: false
    },
    parkingSpace: {
      type: String,
      required: false,
      unique: false
    },
    parkingSpaceCapacity: {
      type: String,
      required: false,
      unique: false
    },
    elevator: {
      type: String,
      required: false,
      unique: false
    },
    furnished: {
      type: String,
      required: false,
      unique: false
    },
    wheelchairAccess: {
      type: String,
      required: false,
      unique: false
    },
    security: {
      type: String,
      required: false,
      unique: false
    },
    email: {
      type: String,
      required: false,
      unique: false
    },
    phoneNumber: {
      type: String,
      required: false,
      unique: false
    },
    amount: {
      type: String,
      required: false,
      unique: false
    },
    currency: {
      type: String,
      required: false,
      unique: false
    },
    per: {
      type: String,
      required: false,
      unique: false
    },
    negotiable: {
      type: String,
      required: false,
      unique: false
    }
  },
  hostel: {
    name: {
      type: String,
      required: false,
      unique: false
    },
    typeOfBathroom: {
      type: String,
      required: false,
      unique: false
    },
    typeOfKitchen: {
      type: String,
      required: false,
      unique: false
    },
    peoplePerRoom: {
      type: String,
      required: false,
      unique: false
    },
    description: {
      type: String,
      required: false,
      unique: false
    },
    address: {
      type: String,
      required: false,
      unique: false
    },
    city: {
      type: String,
      required: false,
      unique: false
    },
    country: {
      type: String,
      required: false,
      unique: false
    },
    stateOrRegion: {
      type: String,
      required: false,
      unique: false
    },
    zipcode: {
      type: String,
      required: false,
      unique: false
    },
    nearbyLocations: {
      type: String,
      required: false,
      unique: false
    },
    swimmingPool: {
      type: String,
      required: false,
      unique: false
    },
    backupGenerator: {
      type: String,
      required: false,
      unique: false
    },
    airCondition: {
      type: String,
      required: false,
      unique: false
    },
    gym: {
      type: String,
      required: false,
      unique: false
    },
    wifi: {
      type: String,
      required: false,
      unique: false
    },
    parkingSpace: {
      type: String,
      required: false,
      unique: false
    },
    parkingSpaceCapacity: {
      type: String,
      required: false,
      unique: false
    },
    elevator: {
      type: String,
      required: false,
      unique: false
    },
    busService: {
      type: String,
      required: false,
      unique: false
    },
    wheelchairAccess: {
      type: String,
      required: false,
      unique: false
    },
    securityService: {
      type: String,
      required: false,
      unique: false
    },
    tvRoom: {
      type: String,
      required: false,
      unique: false
    },
    waterHeaterInToilets: {
      type: String,
      required: false,
      unique: false
    },
    restaurant: {
      type: String,
      required: false,
      unique: false
    },
    convenienceStore: {
      type: String,
      required: false,
      unique: false
    },
    tvInRooms: {
      type: String,
      required: false,
      unique: false
    },
    laundaryService: {
      type: String,
      required: false,
      unique: false
    },
    refrigeratorInRooms: {
      type: String,
      required: false,
      unique: false
    },
    email: {
      type: String,
      required: false,
      unique: false
    },
    phoneNumber: {
      type: String,
      required: false,
      unique: false
    },
    amount: {
      type: String,
      required: false,
      unique: false
    },
    currency: {
      type: String,
      required: false,
      unique: false
    },
    per: {
      type: String,
      required: false,
      unique: false
    },
    negotiable: {
      type: String,
      required: false,
      unique: false
    }
  },
  house: {
    numberOfRooms: {
      type: String,
      required: false,
      unique: false
    },
    numberOfBathrooms: {
      type: String,
      required: false,
      unique: false
    },
    numberOfToilets: {
      type: String,
      required: false,
      unique: false
    },
    numberOfKitchens: {
      type: String,
      required: false,
      unique: false
    },
    numberOfLivingrooms: {
      type: String,
      required: false,
      unique: false
    },
    description: {
      type: String,
      required: false,
      unique: false
    },
    address: {
      type: String,
      required: false,
      unique: false
    },
    city: {
      type: String,
      required: false,
      unique: false
    },
    country: {
      type: String,
      required: false,
      unique: false
    },
    stateOrRegion: {
      type: String,
      required: false,
      unique: false
    },
    zipcode: {
      type: String,
      required: false,
      unique: false
    },
    nearbyLocations: {
      type: String,
      required: false,
      unique: false
    },
    swimmingPool: {
      type: String,
      required: false,
      unique: false
    },
    backupGenerator: {
      type: String,
      required: false,
      unique: false
    },
    kitchenStore: {
      type: String,
      required: false,
      unique: false
    },
    airCondition: {
      type: String,
      required: false,
      unique: false
    },
    gym: {
      type: String,
      required: false,
      unique: false
    },
    parkingSpace: {
      type: String,
      required: false,
      unique: false
    },
    parkingSpaceCapacity: {
      type: String,
      required: false,
      unique: false
    },
    elevator: {
      type: String,
      required: false,
      unique: false
    },
    furnished: {
      type: String,
      required: false,
      unique: false
    },
    wheelchairAccess: {
      type: String,
      required: false,
      unique: false
    },
    securityService: {
      type: String,
      required: false,
      unique: false
    },
    email: {
      type: String,
      required: false,
      unique: false
    },
    phoneNumber: {
      type: String,
      required: false,
      unique: false
    },
    amount: {
      type: String,
      required: false,
      unique: false
    },
    currency: {
      type: String,
      required: false,
      unique: false
    },
    per: {
      type: String,
      required: false,
      unique: false
    },
    negotiable: {
      type: String,
      required: false,
      unique: false
    }
  },
});

const Property = module.exports = mongoose.model('Property', PropertySchema);
