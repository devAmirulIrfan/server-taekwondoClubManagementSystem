const express = require('express');
const bodyparser = require('body-parser');
const tshirtRoutes = require('./routes/tshirtRoutes');
const adminLoginRoutes = require('./routes/adminRoutes')
const gradeRoutes = require('./routes/grade-routes/grade-routes')
const centerRoutes = require('./routes/center-routes/center-routes')
const studentRoutes = require('./routes/student-routes/student-routes')
const parentRoutes = require('./routes/parent-routes/parent-route')
const statusRoutes = require('./routes/status-routes/status-routes')
const classRoutes = require('./routes/class-routes/class-routes')
const classHistoryRoutes = require('./routes/class-history-routes/class-history-routes')
const cors = require('cors');

const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8080;
app.use(bodyparser.json());
app.use(cors())


app.use('', tshirtRoutes);
app.use('', adminLoginRoutes)
app.use('', gradeRoutes)
app.use('', centerRoutes, studentRoutes)
app.use('', studentRoutes)
app.use('', parentRoutes)
app.use('', statusRoutes)
app.use('', classRoutes)
app.use('', classHistoryRoutes)



app.listen(PORT, () => {
  console.log(`It's alive on http://localhost:${PORT}`);
});
