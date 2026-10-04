const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
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
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',
    required: true,
    index: true
  },
  date: {
    type: Date,
    required: true,
    index: true
  },
  status: {
    type: String,
    enum: ['PRESENT', 'ABSENT', 'LATE', 'EXCUSED'],
    required: true
  },
  period: {
    type: Number,
    min: 1
  },
  lectureNumber: {
    type: Number,
    min: 1
  },
  remarks: String,
  markedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

attendanceSchema.index({ student: 1, subject: 1, date: 1, period: 1 }, { unique: true });
attendanceSchema.index({ student: 1, subject: 1 });
attendanceSchema.index({ student: 1, date: 1 });
attendanceSchema.index({ subject: 1, date: 1 });
attendanceSchema.index({ faculty: 1, date: 1 });

module.exports = mongoose.model('Attendance', attendanceSchema);
