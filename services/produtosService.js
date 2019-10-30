var fs = require('fs');

var postsFilePath = 'db/produtos.json';

var loadFilePosts = function() {
  var fileData = fs.readFileSync(produtosFilePath, 'utf8');
  var produtos = JSON.parse(fileData);

  return posts;
}

var saveFileProdutos = function(produtos) {
  var data = JSON.stringify(produtos);
  fs.writeFileSync(produtosFilePath, data, 'utf8');
}

var getProdutos = function() {
  var produtos = loadFileProdutos();
  return produtos;
}

var saveProduto = function(newPost) {
  var produtos = loadFileProdutos();
  produtos.push(newProduto);
  saveFileProdutos(produtos);
}

module.exports = {
  getPosts: getPosts,
  savePost: savePost
}