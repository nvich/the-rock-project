const readAll = require('./read-all');
const readId = require('./read-id');
const createId = require('./create-id');
const updateId = require('./update-id');
const deleteId = require('./delete-id');

module.exports = {
  // GET /users
  readAll: readAll,
  // GET /users/:id
  readId: readId,
  // POST /users
  createId: createId,
  // PUT /users/:id
  updateId: updateId,
  // DELETE /users/:id
  deleteId: deleteId
};
