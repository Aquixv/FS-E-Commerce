const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'admin'], default: 'student' },
    
    fullName: { type: String, required: true },
    studentId: { type: String, unique: true }, 
    grade: { type: String, default: "100L" },
    feesPaid: { type: Boolean, default: false },
    
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('student', studentSchema);