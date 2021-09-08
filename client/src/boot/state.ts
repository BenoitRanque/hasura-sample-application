import { boot } from 'quasar/wrappers';
import { getCurrent, WebviewWindow } from '@tauri-apps/api/window';
import { emit, once, Event } from '@tauri-apps/api/event';
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// stateStore so we know if this window has already been initialized (and is currenlty being hot-reloaded)
let stateStore: string | null = null;
export default boot(async (/* { app, router, ... } */) => {
  // prototype code for setting window initial state.
  // will be useful when we start using multiple windows.
  const webview = getCurrent();
  // determine window role based on label.
  // should use a pattern such as <role>:<id> and a regex to extract the role/type
  if (webview.label !== 'main' && stateStore === null) {
    // if applicable, request initial state
    await emit('waiting_for_initial_state');
    console.log('waiting for initial state');

    // block window initialization until we get initial state.
    // should probably set a hardcoded limit to the time we will wait?
    const event: Event<string> = await new Promise((resolve, reject) => {
      once('initial_state', resolve).catch(reject);
    });

    // do something with initial state. for example set route, or data
    console.log('got initial state', event);
    stateStore = event.payload;
  }

  console.log('state is: ', stateStore);
});
// code to create a window
export async function createWindow() {
  // create window
  const webview = new WebviewWindow(Math.random().toString());
  // if applicable, wait for initial state to be requested.
  await webview.once('waiting_for_initial_state', () => {
    // then send initial state.
    // note this currently breaks hot reload. We should probably try to avoid that?
    webview
      .emit('initial_state', JSON.stringify({ msg: 'initial_state' }))
      .catch(console.error);
  });
}
