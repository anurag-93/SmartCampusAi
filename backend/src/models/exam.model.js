const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  examType: {
    type: String,
    enum: ['MID_TERM', 'END_TERM', 'QUIZ', 'PRACTICAL', 'VIVA', 'INTERNAL'],
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
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
  academicYear: {
    type: String,
    required: true,
    index: true
  },
  examDate: {
    type: Date,
    required: true,
    index: true
  },
  startTime: String,
  endTime: String,
  room: String,
  maxMarks: {
    type: Number,
    required: true,
    min: 1
  },
  passingMarks: {
    type: Number,
    required: true,
    min: 0
  },
  instructions: String,
  status: {
    type: String,
    enum: ['SCHEDULED', 'ONGOING', 'COMPLETED', 'CANCELLED'],
    default: 'SCHEDULED',
    index: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Exam', examSchema);
