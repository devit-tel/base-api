class SystemController {
  async getHealth (context, next) {
    context.body = {
      health: true
    }
  }
}

export default SystemController
