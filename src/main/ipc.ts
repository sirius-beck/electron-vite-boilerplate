import { ipcMain } from 'electron'
import { API } from '@shared/constants/api'

const categories = Object.keys(API)

for (const category of categories) {
  const channels = Object.keys(API[category])

  for (const channel of channels) {
    ipcMain.handle(`${category}.${channel}`, async (_, ...args) => {
      return await API[category][channel](...args)
    })
  }
}
