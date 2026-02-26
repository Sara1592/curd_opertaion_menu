import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        menuname:String,
        description:String,
        price:Number,
        image:String,
    },

    {
        timestamps:true
    }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;