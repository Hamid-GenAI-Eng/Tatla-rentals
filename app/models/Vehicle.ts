import mongoose, { Schema } from 'mongoose';

const VehicleSchema = new Schema({
    name: { type: String, required: true },
    subtitle: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // Cloudinary URL
    badge: { type: String },
    overview: { type: String },
    gallery: [{ type: String }], // Array of Cloudinary URLs

    // Flexible Specs: Can store any key-value pairs (Year, Seats, Engine, Custom Field)
    specs: { type: Schema.Types.Mixed, default: {} },

    rental: {
        minDuration: { type: String },
        availability: { type: String },
        item1: { type: String }, // Placeholder for future custom rental fields if needed
        item2: { type: String },
    },

    createdAt: { type: Date, default: Date.now },
});

// Prevent overwriting the model if it's already compiled
export default mongoose.models.Vehicle || mongoose.model('Vehicle', VehicleSchema);
