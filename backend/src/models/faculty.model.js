const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
    index: true
  },
  employeeId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true
  },
  employeeCode: {
    type: String,
    unique: true,
    trim: true
  },
  designation: {
    type: String,
    enum: ['PROFESSOR', 'ASSOCIATE_PROFESSOR', 'ASSISTANT_PROFESSOR', 'LECTURER', 'VISITING_FACULTY', 'HOD', 'DEAN']
  },
  qualification: String,
  specialization: String,
  experienceYears: {
    type: Number,
    default: 0,
    min: 0
  },
  phone: String,
  alternatePhone: String,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
    index: true
  },
  joiningDate: Date,
  employmentType: {
    type: String,
    enum: ['FULL_TIME', 'PART_TIME', 'CONTRACT', 'VISITING'],
    default: 'FULL_TIME'
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE', 'ON_LEAVE', 'RETIRED'],
    default: 'ACTIVE',
    index: true
  },
  officeRoom: String,
  profileImage: String
}, { timestamps: true });

module.exports = mongoose.model('Faculty', facultySchema);
