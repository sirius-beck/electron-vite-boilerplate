import { contextBridge, ipcRenderer } from 'electron'

// Declare `api` in the global window object to use it in the renderer
declare global {
  export interface Window {
    api: typeof api
  }
}

// Custom APIs for renderer
export const api = {
  core: {
    greetings: (name: string): Promise<string> => {
      return ipcRenderer.invoke('core.greetings', name)
    },
    ping: (): Promise<void> => {
      return ipcRenderer.invoke('core.ping')
    }
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.api = api
}
