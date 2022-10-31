function calcular(){
  const altura=  document.getElementById('altura').value
  const peso = document.getElementById('peso').value

  const result = peso/Math.pow(2,altura)

  document.getElementById('resulto').innerHTML = result.toFixed(2)
}