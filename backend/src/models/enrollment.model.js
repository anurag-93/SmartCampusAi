const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
    index: true
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
    required: true
  },
  academicYear: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  semester: {
    type: Number,
    required: true,
    min: 1,
    index: true
  },
  enrollmentType: {
    type: String,
    enum: ['REGULAR', 'ELECTIVE', 'REPEAT', 'BACKLOG'],
    default: 'REGULAR'
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'COMPLETED', 'DROPPED', 'CANCELLED'],
    default: 'ACTIVE'
  },
  enrolledAt: {
    type: Date,
    default: Date.now
  },
  droppedAt: Date
}, { timestamps: true });

enrollmentSchema.index({ student: 1, subject: 1, academicYear: 1, semester: 1 }, { unique: true });
enrollmentSchema.index({ student: 1, semester: 1 });
enrollmentSchema.index({ subject: 1, semester: 1 });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
