import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    project_name: {
        type: String,
        required: true
    },
    project_info: String,
    project_type: {
          type: String,
          required: true
    },
    project_direction: {
        type: String,
        required: true
    },
    project_skills: {
        type: Array,
        required: true
    },
    project_roles: {
        type: Array,
        required: true
    },
    project_result: String,
    project_start: {
        type: Date,
        required: true
    },
    project_finish: {
        type: Date,
        required: true
    },
    project_rep: String
});