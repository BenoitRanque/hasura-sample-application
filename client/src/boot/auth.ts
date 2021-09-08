import { boot } from 'quasar/wrappers';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
import { setup } from 'src/components/auth/state';
export default boot(async ({ router }) => {
  // something to do
  const auth = await setup();
  if (!auth) {
    await router.push('/login');
  }
});
