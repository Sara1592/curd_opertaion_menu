import mongoose, { Schema } from "mongoose";

const menuSchema = new Schema(
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

const Menu = mongoose.models.Menu || mongoose.model("Menu", menuSchema);

export default Menu;