const readAll = require('./read-all');
const readId = require('./read-id');
const createId = require('./create-id');
const updateId = require('./update-id');
const deleteId = require('./delete-id');
const showCadastre = require('./show-cadastre');

module.exports = {
  // GET /foods
  readAll: readAll,
  // GET /foods/:id
  readId: readId,
  // POST /foods
  createId: createId,
  // PUT /foods/:id
  updateId: updateId,
  // DELETE /foods/:id
  deleteId: deleteId,
  // SHOW
  showCadastre: showCadastre
};
