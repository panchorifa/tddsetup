const fizzbuzz = (limit, mapping) => {
  const results = []
  Array(limit).fill().map((_, i) => {
    const j = i + 1
    let msg = ''
    for(let [m, v] of Object.entries(mapping)) {
      if (j % m === 0) {
        msg += v
      }
    }
    results.push(msg || j)
  })
  return results
}

module.exports = fizzbuzz
