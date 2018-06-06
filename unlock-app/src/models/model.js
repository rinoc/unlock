// This is a parent class for all models
// It prevents extensibility which guarantees strict type checking for models
class Model {

  constructor(attrs = {}) {
    this.constructor.attributeTypes = this.constructor.attributeTypes ? this.constructor.attributeTypes : {}

    Object.keys(this.constructor.attributeTypes).forEach((attribute) => {
      this[`_${attribute}`] = attrs[attribute]

      Object.defineProperty(this, attribute, {
        get: function () {
          return this[`_${attribute}`]
        },
        set: function (x) {
          this[`_${attribute}`] = x
        },
      })

    })

    Object.preventExtensions(this)
  }

  clone() {
    var attributes = Object.keys(this.constructor.attributeTypes).reduce((accumulator, attributeName) => {
      accumulator[attributeName] = this[attributeName]
      return accumulator
    }, {})
    return new this.constructor(attributes)
  }

}

export default Model