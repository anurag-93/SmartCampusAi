const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
  shortName: String,
  description: String,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
    index: true
  },
  durationYears: {
    type: Number,
    required: true,
    min: 1
  },
  totalSemesters: {
    type: Number,
    required: true,
    min: 1
  },
  degreeType: {
    type: String,
    enum: ['UNDERGRADUATE', 'POSTGRADUATE', 'DIPLOMA', 'CERTIFICATE'],
    index: true
  },
  mode: {
    type: String,
    enum: ['FULL_TIME', 'PART_TIME', 'ONLINE', 'HYBRID'],
    default: 'FULL_TIME'
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
