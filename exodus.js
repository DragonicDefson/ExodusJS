let element = undefined
let style = undefined

const Exodus = {
  margin : () => {
    const element_array = document.querySelectorAll('div[class*="margin"]');
    element_array.forEach(name => {
      element = name
      const class_array = name.classList
      class_array.forEach(name => {
        for (let increment = 0; increment < name.length; increment++) {
          if (name.startsWith('margin')) {
            if (name.charAt(name.length - 2) === 'p' && name.charAt(name.length - 1) === 'x') {
              style += name.substr(0, name.lastIndexOf('-')) + ': ' + name.split('-')[2] + ';'
              element.style = style
            } else {
              style += name.substr(0, name.lastIndexOf('-')) + ': ' + name.split('-')[2] + '%;'
              element.style = style
            }
          }
        }
      })
    })
  },

  padding : () => {
    const element_array = document.querySelectorAll('div[class*="padding"]');
    element_array.forEach(name => {
      element = name
      const class_array = name.classList
      class_array.forEach(name => {
        for (let increment = 0; increment < name.length; increment++) {
          if (name.startsWith('padding')) {
            if (name.charAt(name.length - 2) === 'p' && name.charAt(name.length - 1) === 'x') {
              style += name.substr(0, name.lastIndexOf('-')) + ': ' + name.split('-')[2] + ';'
              element.style = style
            } else {
              style += name.substr(0, name.lastIndexOf('-')) + ': ' + name.split('-')[2] + '%;'
              element.style = style
            }
          }
        }
      })
    })
  },

  width : () => {
    const element_array = document.querySelectorAll('div[class*="width"]');
    element_array.forEach(name => {
      element = name
      const class_array = name.classList
      class_array.forEach(name => {
        for (let increment = 0; increment < name.length; increment++) {
          if (name.startsWith('width')) {
            if (name.charAt(name.length - 2) === 'p' && name.charAt(name.length - 1) === 'x') {
              style += name.substr(0, name.lastIndexOf('-')) + ': ' + name.split('-')[1] + ';'
              element.style = style
            } else {
              style += name.substr(0, name.lastIndexOf('-')) + ': ' + name.split('-')[1] + '%;'
              element.style = style
            }
          }
        }
      })
    })
  },

  height : () => {
    const element_array = document.querySelectorAll('div[class*="height"]');
    element_array.forEach(name => {
      element = name
      const class_array = name.classList
      class_array.forEach(name => {
        for (let increment = 0; increment < name.length; increment++) {
          if (name.startsWith('height')) {
            if (name.charAt(name.length - 2) === 'p' && name.charAt(name.length - 1) === 'x') {
              style += name.substr(0, name.lastIndexOf('-')) + ': ' + name.split('-')[1] + ';'
              element.style = style
            } else {
              style += name.substr(0, name.lastIndexOf('-')) + ': ' + name.split('-')[1] + '%;'
              element.style = style
            }
          }
        }
      })
    })
  }
}

Exodus.margin()
Exodus.padding()
Exodus.width()
Exodus.height()
