import pi from './pi.json'

function getPair(n) {
  if (n < 0) return undefined
  return `${pi.pi[n]}${pi.pi[n + 1]}`
}

export default getPair
