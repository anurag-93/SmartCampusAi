const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true
  },
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
    index: true
  },
  shortName: {
    type: String,
    trim: true
  },
  description: String,
  headOfDepartment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty'
  },
  officeLocation: String,
  contactEmail: {
    type: String,
    lowercase: true,
    trim: true
  },
  contactPhone: String,
  isActive: {
    type: Boolean,
    default: true,
    index: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Department', departmentSchema);
