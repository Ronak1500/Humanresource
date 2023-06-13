const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
const app = express();
connectDB();

app.use(cors());
app.use(express.json({ extended: false, limit: "50mb" }));

// api names---
//example => app.use("/api/todo", require("./routes/todo"));

app.use("/api/addemploye", require("./routes/addemploye"));
app.use("/api/addtraines", require("./routes/addtraines"));
app.use("/api/addproject", require("./routes/addproject"));
app.use("/api/attendence", require("./routes/attendence"));
app.use("/api/addclient", require("./routes/addclient"));
app.use("/api/userlist", require("./routes/userlist"));
app.use("/api/traineattendence", require("./routes/traineattendence"));
app.use("/api/syllabus", require("./routes/syllabus"));




const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));