const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
    index: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    required: true,
    index: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
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
  marksObtained: {
    type: Number,
    required: true,
    min: 0
  },
  maxMarks: {
    type: Number,
    required: true,
    min: 1
  },
  grade: {
    type: String,
    uppercase: true,
    trim: true
  },
  gradePoint: {
    type: Number,
    min: 0
  },
  status: {
    type: String,
    enum: ['PASS', 'FAIL', 'ABSENT', 'WITHHELD', 'PENDING'],
    default: 'PENDING'
  },
  remarks: String,
  published: {
    type: Boolean,
    default: false,
    index: true
  },
  publishedAt: Date
}, { timestamps: true });

resultSchema.index({ student: 1, exam: 1 }, { unique: true });
resultSchema.index({ student: 1, semester: 1 });
resultSchema.index({ student: 1, academicYear: 1 });
resultSchema.index({ subject: 1, exam: 1 });

module.exports = mongoose.model('Result', resultSchema);
