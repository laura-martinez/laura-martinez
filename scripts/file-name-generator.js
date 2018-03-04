const fs = require('fs')

const responsiveSizes = ['2x', '3x']

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory")
    process.exit(-1)
}
 
const folder = process.argv[2]
const resourcePath = `assets/projects/${folder}/`
const path = `../src/${resourcePath}`
filename = process.argv[3] || "result.json"

console.log(path)

fs.readdir(path, function(err, items) {
    let result = items.reduce((accum, item) => {
        if(!/(.@[0-9]x.png)/.test(item)) {
            accum.push({
                name: item.replace('.png', '').replace(/-|_/, ' '),
                resource_name: item.replace('.png', ''),
                resource_extension: '.png',
                source_set: responsiveSizes.reduce((acc, size) => {
					acc.push(`${resourcePath}${item.replace('.png', `@${size}.png`)}`)
					return acc
				}, [`${resourcePath}${item}`])
            })
        }

        return accum
    }, [])

    fs.writeFile(`./${filename}`, JSON.stringify({
        collection: result
    }, null, 2), (err) => {
        if(err) {
            console.error('Error creating file', err)
        }
    })

});