import { Response as _Response, Robot as _Robot } from 'hubot'

declare namespace HubotTraq {
  class Response extends _Response {
    message: {
      eventTime: string
      message: {
        id: string
        user: {
          id: string
          name: string
          displayName: string
          iconId: string
          bot: boolean
        }
        channelId: string
        text: string
        plainText: string
        embedded: [
          {
            raw: string
            type: string
            id: string
          }
        ]
        createdAt: string
        updatedAt: string
      }
      user: any
      id: string
      text: string
      room: any
      finish(): void
    }
  }
  class Robot extends _Robot {
    respond(regex: RegExp, callback: (response: Response) => void): void
    hear(regex: RegExp, callback: (response: Response) => void): void
  }
}

export = HubotTraq
export as namespace HubotTraq
