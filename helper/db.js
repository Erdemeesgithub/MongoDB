const mongoose = require('mongoose')

const url = "mongodb+srv://Dirty_ToiletPaper:940312999Ub@cluster0.rz2pxnm.mongodb.net/?retryWrites=true&w=majority"

const connect = async () => {
    try{
         await mongoose.connect(url)
         console.log("connected bro!!!")
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect