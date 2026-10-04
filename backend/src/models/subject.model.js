const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
    index: true
  },
  description: String,
  credits: {
    type: Number,
    required: true,
    min: 0
  },
  semester: {
    type: Number,
    required: true,
    min: 1,
    index: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
    index: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
    index: true
  },
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',
    index: true
  },
  subjectType: {
    type: String,
    enum: ['THEORY', 'PRACTICAL', 'LAB', 'PROJECT', 'SEMINAR'],
    default: 'THEORY'
  },
  maxMarks: {
    type: Number,
    default: 100,
    min: 0
  },
  passingMarks: {
    type: Number,
    default: 40,
    min: 0
  },
  internalMarks: {
    type: Number,
    default: 30,
    min: 0
  },
  externalMarks: {
    type: Number,
    default: 70,
    min: 0
  },
  isElective: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Subject', subjectSchema);
