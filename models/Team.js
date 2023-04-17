import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
    team_name: {
        type: String,
        required: true
    },
    team_info: String,
    composition_team: {
        type: Array,
        required: true
    },
    team_invites: Array
    

});