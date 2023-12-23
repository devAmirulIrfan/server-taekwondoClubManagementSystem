const express = require('express');
const bodyparser = require('body-parser');
// const tshirtRoutes = require('./routes/tshirtRoutes');
const adminLoginRoutes = require('./routes/adminRoutes')
const gradeRoutes = require('./routes/grade-routes/grade-routes')
const centerRoutes = require('./routes/center-routes/center-routes')
const studentRoutes = require('./routes/student-routes/student-routes')
const parentRoutes = require('./routes/parent-routes/parent-route')
const statusRoutes = require('./routes/status-routes/status-routes')
const classRoutes = require('./routes/class-routes/class-routes')
const classHistoryRoutes = require('./routes/class-history-routes/class-history-routes')
const studentAttendanceRoutes = require('./routes/student-attendance-routes/student-attendance-routes')
const corsOptions = {
  origin: ['https://client-taekwondo-club-management-system.vercel.app', 'http://localhost:4200'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8080;
app.use(bodyparser.json());



// app.use('', tshirtRoutes);
app.use('', adminLoginRoutes)
app.use('', gradeRoutes)
app.use('', centerRoutes, studentRoutes)
app.use('', studentRoutes)
app.use('', parentRoutes)
app.use('', statusRoutes)
app.use('', classRoutes)
app.use('', classHistoryRoutes)
app.use('', studentAttendanceRoutes)



app.listen(PORT, () => {
  console.log(`It's alive on http://localhost:${PORT}`);
});
