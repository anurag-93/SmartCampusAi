const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  description: String,
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
    index: true
  },
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',
    required: true,
    index: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
    index: true
  },
  semester: {
    type: Number,
    required: true,
    min: 1,
    index: true
  },
  assignedDate: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: Date,
    required: true,
    index: true
  },
  totalMarks: {
    type: Number,
    default: 100,
    min: 0
  },
  priority: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH'],
    default: 'MEDIUM'
  },
  status: {
    type: String,
    enum: ['DRAFT', 'PUBLISHED', 'CLOSED'],
    default: 'DRAFT',
    index: true
  },
  attachments: [{
    name: String,
    url: String,
    type: String,
    size: Number
  }],
  instructions: String
}, { timestamps: true });

module.exports = mongoose.model('Assignment', assignmentSchema);
