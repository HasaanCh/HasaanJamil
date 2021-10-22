import { Schema as _Schema, models, model } from 'mongoose';

const Schema=_Schema;

const PostSchema= new Schema({
    title: {
        type: String,
        required:[true,"Please add title"],
    },
    desc:
    {
        type: String,
        required: [true,"Please add description"],

    },
    client:
    {
        type: String,
    },
    images:
    {
        type: Array,
    },
    isfeatured: Boolean
})

export default models.Posts || model('Posts', PostSchema);