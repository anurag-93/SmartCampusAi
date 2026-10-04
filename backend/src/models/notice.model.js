const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  content: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    maxlength: 500
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  targetRole: {
    type: String,
    enum: ['ALL', 'STUDENT', 'FACULTY', 'ADMIN'],
    default: 'ALL',
    index: true
  },
  targetDepartments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  }],
  targetCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  priority: {
    type: String,
    enum: ['LOW', 'NORMAL', 'HIGH', 'URGENT'],
    default: 'NORMAL',
    index: true
  },
  category: {
    type: String,
    enum: ['ACADEMIC', 'EXAM', 'ADMINISTRATIVE', 'GENERAL', 'EVENT'],
    default: 'GENERAL',
    index: true
  },
  isPublished: {
    type: Boolean,
    default: false,
    index: true
  },
  publishedAt: {
    type: Date,
    index: true
  },
  expiresAt: {
    type: Date,
    index: true
  },
  attachments: [{
    name: String,
    url: String,
    type: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('Notice', noticeSchema);
