const fetch = require('node-fetch');

//METODO LISTAR//
/**
 * @apiName list
 * @apiMethod GET
 * @apiPath /repos-google
 * @apiGroup GetRepositoriesController
 * @apiDescription Este metodo permite listar los 10 repositorios más populares del usuario "google".
 */

exports.list = async (req, res) => { 
  var response = await fetch('http://api.github.com/users/google/repos?per_page=10&sort=stars');
  var repos = await response.json();
  res.send(repos.map(repo => `<p><a href="${repo.html_url}">${repo.name}</a></p>`).join(''));
}

