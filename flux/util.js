function Event() {
  // 包含订阅类型以及相关订阅者
  this.subs = {}
}

Event.prototype = {
  // 添加订阅者
  addSub: function(event, cb, type) {
    if (!Object.keys(this.subs).includes(event)) {
      this.subs[event] = []
    }
    this.subs[event].push({
      type,
      cb
    })
  },
  on: function(event, cb) {
    this.addSub(event, cb, 'always')
  },
  // type标识订阅次数
  once: function(event, cb) {
    this.addSub(event, cb, 'once')
  },
  // 移除订阅者
  off: function(event, cb) {
    if (!event) {
      // 如果没有提供参数，则移除所有的订阅者
      this.subs = {}
      console.log(this.subs, 333)
    } else if (!cb) {
      // 如果只提供了事件，则移除该事件所有的订阅者
      this.subs[event] = []
    } else {
      // 如果同时提供了事件与回调，则只移除这个回调的订阅者
      let index = this.subs[event].findIndex((sub) => {
        return sub.cb === cb
      })
      this.subs[event].splice(index, 1)
    }
  },
  // 通知订阅者
  emit: function(event, arg) {
    this.subs[event] &&
      this.subs[event].forEach((sub, index) => {
        sub.cb && sub.cb(arg)
        if (sub.type === 'once') {
          // 触发之后移除该订阅者
          this.subs[event].splice(index, 1)
        }
      })
  }
}

const event = new Event()
export { event }
