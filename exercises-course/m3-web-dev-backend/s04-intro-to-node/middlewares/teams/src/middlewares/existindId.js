const existingId = (req, res, next) => {
  const { id } = req.params;
  const thisIdExist = require('../data/teams').find((team) => team.id === Number(id));
  if (thisIdExist){
    next();
  } else {
    res.sendStatus(400);
  }
};

module.exports = existingId;