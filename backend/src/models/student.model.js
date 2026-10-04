const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
    index: true
  },
  studentId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true
  },
  admissionNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true
  },
  rollNumber: {
    type: String,
    unique: true,
    trim: true
  },
  registrationNumber: {
    type: String,
    unique: true,
    trim: true,
    index: true
  },
  dateOfBirth: Date,
  gender: {
    type: String,
    enum: ['MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY']
  },
  bloodGroup: {
    type: String,
    enum: ['A_POSITIVE', 'A_NEGATIVE', 'B_POSITIVE', 'B_NEGATIVE', 'AB_POSITIVE', 'AB_NEGATIVE', 'O_POSITIVE', 'O_NEGATIVE']
  },
  phone: String,
  alternatePhone: String,
  personalEmail: {
    type: String,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: { type: String, default: 'India' }
  },
  guardian: {
    name: String,
    relationship: String,
    phone: String,
    email: String,
    occupation: String
  },
  emergencyContact: {
    name: String,
    relationship: String,
    phone: String
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
    index: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
    index: true
  },
  batch: {
    type: String,
    required: true,
    index: true
  },
  academicYear: {
    type: String,
    required: true,
    index: true
  },
  semester: {
    type: Number,
    required: true,
    min: 1,
    max: 12,
    index: true
  },
  section: {
    type: String,
    trim: true,
    index: true
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE', 'GRADUATED', 'SUSPENDED', 'DROPPED_OUT', 'ALUMNI'],
    default: 'ACTIVE',
    index: true
  },
  admissionDate: Date,
  graduationDate: Date,
  profileImage: String
}, { timestamps: true });

studentSchema.index({ department: 1, course: 1, semester: 1, section: 1 });

module.exports = mongoose.model('Student', studentSchema);
