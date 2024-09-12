/* Abrindo o arquivo produtos.json e mostrando um por um no laço de repetição */
import { readFile } from 'node:fs/promises';
var produtos;
try {
  const caminhoArquivo = new URL('./produtos.json', import.meta.url);
  const conteudoArquivo = await readFile(caminhoArquivo, { encoding: 'utf8' });
  produtos = await JSON.parse(conteudoArquivo);

} catch (erro) {
  console.log('[ERRO]: na leitura de arquivo ', erro.message);
}


/* fazendo POST utilizando o fetch */
const API_URL = 'http://localhost:3000/';

for (const produto of produtos) {
  
  await fetch(API_URL + 'produto', {
    method: 'POST',
    headers:
    {
      'Content-Type': 'application/json',
       Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ4ZjVhZDFiNjQyMTY4NzdlNjViZGEiLCJ1c3VhcmlvIjoiamhlYW4iLCJlbWFpbCI6ImpoZWFuQGVtYWlsLmNvbSIsInNlbmhhIjoiJDJiJDEwJGt6VldQZjhWVWhBLjZjSzZ3NjJ1US5YS2FqaWFnbHVLRWV1Y0xoWFhrbUxLejJocjRwNm5TIiwiX192IjowLCJpYXQiOjE3MjYwOTkzNDUsImV4cCI6MTcyNjE4NTc0NX0.UbKS-vIibg14MT_XixfRo--W_hBVcAoR2hNoHpYgvHc' 
    },
    body: JSON.stringify(produto)
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err));
}