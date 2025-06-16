// Controller for shared logic between Schedules and Meals activities/plans
const getParent = (Model) => async (id) => {
  return Model.findById(id);
};

exports.addActivity = (Model) => async (req, res) => {
  const parent = await getParent(Model)(req.params.id);
  if (!parent) return res.status(404).send(`${Model.modelName} not found`);
  parent.activities.push(req.body);
  await parent.save();
  res.send(parent);
};

exports.getActivities = (Model) => async (req, res) => {
  const parent = await getParent(Model)(req.params.id);
  if (!parent) return res.status(404).send(`${Model.modelName} not found`);
  res.send(parent.activities);
};

exports.deleteActivity = (Model) => async (req, res) => {
  const parent = await getParent(Model)(req.params.id);
  if (!parent) return res.status(404).send(`${Model.modelName} not found`);
  parent.activities = parent.activities.filter(a => a.id !== req.params.activityId);
  await parent.save();
  res.status(204).send();
};

exports.getActivity = (Model) => async (req, res) => {
  const parent = await getParent(Model)(req.params.id);
  if (!parent) return res.status(404).send(`${Model.modelName} not found`);
  const activity = parent.activities.find(a => a.id === req.params.activityId);
  if (!activity) return res.status(404).send('Activity not found');
  res.send(activity);
};

exports.updateActivity = (Model) => async (req, res) => {
  const parent = await getParent(Model)(req.params.id);
  if (!parent) return res.status(404).send(`${Model.modelName} not found`);
  const activity = parent.activities.find(a => a.id === req.params.activityId);
  if (!activity) return res.status(404).send('Activity not found');
  Object.assign(activity, req.body);
  await parent.save();
  res.send(activity);
};

// Reusable plan handlers (for activities with plans)

exports.getPlans = (Model) => async (req, res) => {
  const parent = await getParent(Model)(req.params.id);
  if (!parent) return res.status(404).send(`${Model.modelName} not found`);
  const activity = parent.activities.find(a => a.id === req.params.activityId);
  if (!activity) return res.status(404).send('Activity not found');
  res.send(activity.plan || []);
};

exports.addPlan = (Model) => async (req, res) => {
  const parent = await getParent(Model)(req.params.id);
  if (!parent) return res.status(404).send(`${Model.modelName} not found`);
  const activity = parent.activities.find(a => a.id === req.params.activityId);
  if (!activity) return res.status(404).send('Activity not found');
  activity.plan = req.body;
  await parent.save();
  res.send(activity.plan);
};

exports.updatePlan = (Model) => async (req, res) => {
  const parent = await getParent(Model)(req.params.id);
  if (!parent) return res.status(404).send(`${Model.modelName} not found`);
  const activity = parent.activities.find(a => a.id === req.params.activityId);
  if (!activity) return res.status(404).send('Activity not found');
  activity.plan = req.body;
  await parent.save();
  res.send(activity.plan);
};

exports.deletePlan = (Model) => async (req, res) => {
  const parent = await getParent(Model)(req.params.id);
  if (!parent) return res.status(404).send(`${Model.modelName} not found`);
  const activity = parent.activities.find(a => a.id === req.params.activityId);
  if (!activity) return res.status(404).send('Activity not found');
  activity.plan = [];
  await parent.save();
  res.status(204).send();
};