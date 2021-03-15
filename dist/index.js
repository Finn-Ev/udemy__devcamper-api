"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = require("./config/db");
// Route files
const bootcamps_1 = __importDefault(require("./routes/bootcamps"));
dotenv_1.default.config();
db_1.connectDB();
const app = express_1.default();
if (process.env.NODE_ENV === 'development') {
    app.use(morgan_1.default('dev'));
}
app.use('/api/v1/bootcamps', bootcamps_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server is running in ${process.env.NODE_ENV} on port ${PORT}`));
//# sourceMappingURL=index.js.map