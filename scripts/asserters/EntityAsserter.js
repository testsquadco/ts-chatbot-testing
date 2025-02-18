module.exports = class EntityAsserter {
  constructor(context, caps = {}, globalArgs = {}) {
    this.context = context
    this.caps = caps
    this.globalArgs = globalArgs
  }

  assertConvoStep(botMsg, args) {
    if (!args || !args.entity) {
      return Promise.resolve()
    }

    // Simple pass-through since we're not actually checking entities
    return Promise.resolve()
  }

  static asserter = {
    ref: 'ENTITY',
    src: 'EntityAsserter',
    global: false
  }
} 