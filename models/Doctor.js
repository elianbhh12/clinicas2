import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const doctorSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        trim: true
    },

    password : {
        type: String,
        required: true,
        set: setPassword
    },

    email : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    Celuar : {
        type: String,
        default: null,
        trim: true
    },

    token : {
        type: String,
    },

    confirmado : {
        type: Boolean,
        default: false
    },
});

function setPassword(password) {
    return bcrypt.hashSync(password, 5);
}

doctorSchema.methods.confirmarcontra = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;