const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    index: true
  },
  passwordHash: {
    type: String,
    required: true,
    select: false
  },
  role: {
    type: String,
    enum: ['STUDENT', 'FACULTY', 'ADMIN', 'SUPER_ADMIN'],
    default: 'STUDENT',
    index: true
  },
  phone: {
    type: String,
    trim: true
  },
  profileImage: String,
  isActive: {
    type: Boolean,
    default: true,
    index: true
  },
  lastLoginAt: Date
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
