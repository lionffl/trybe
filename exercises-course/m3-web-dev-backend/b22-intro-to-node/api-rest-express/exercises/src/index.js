const app = require('./app');
const activities = require('./data/activities');

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server running on port 3000...')
});

app.get('/myActivities', (req, res) => {
  res
    .status(200)
    .json({ activities });
});

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const response = activities.find((activity) => activity.id === Number(id));

  res
    .status(200)
    .json(response);
});

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  // const done = 'Feito';
  // const toBeDone = 'A fazer';

  // if (status === done) {
  //   const doneActivities = activities.filter((activity) => activity.status === done);
  //   res
  //     .status(200)
  //     .json({ doneActivities })
  // }

  // if (status === toBeDone) {
  //   const toBeDoneActivities = activities.filter((activity) => activity.status === toBeDone);
  //   res
  //     .status(200)
  //     .json({ toBeDoneActivities })
  // }
  
  let response = activities;
  
  if (status) response = activities.filter(
    (activity) => activity.status.toLocaleLowerCase() === status.toLocaleLowerCase());
  
  res
    .status(200)
    .json({ activities: response });

});

app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;
  let response = activities;
  
  function search(string) {
    const array = string.toLocaleLowerCase().split(" ");
    return array.includes(q.toLocaleLowerCase());
  }
  
  if (q) {
    response = activities.filter(({ description }) => search(description))
  }
  res
    .status(200)
    .json({ activities: response });
});

