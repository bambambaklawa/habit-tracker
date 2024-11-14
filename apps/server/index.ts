const app = require('./app')

// app.get('/users', getUsers)

// app.post('/users', postUsers)

// app.get('/users/id/habits', getHabits)
// app.post('/users/id/habits', postHabits)
// app.patch('/users/id/habits/habitid', updateHabits)
// app.delete('/users/id/habits/habitid', deleteHabits)


const PORT = 8080
app.listen(PORT, () => {
  console.log(`💵 Server running and listening on http://localhost:${8080}/ …`)
})
