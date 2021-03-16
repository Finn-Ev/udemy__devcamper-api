import fs from 'fs';
import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';
import Bootcamp from './models/Bootcamp.model';

dotenv.config();
colors.enable();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
});
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`).toString());
console.log(bootcamps);

// import into db
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    console.log('Data imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

// delete data
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany({});
    console.log('Data deleted'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

if (process.argv[2] === '-import') {
  importData();
} else if (process.argv[2] === '-delete') {
  deleteData();
}
