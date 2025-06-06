import { router as expoRouter, type Href, type Router } from 'expo-router';

export {
  Link,
  Redirect,
  Slot,
  Stack,
  useLocalSearchParams,
  useRouter
} from 'expo-router';

// https://github.com/expo/router/discussions/495

type ExtendedRouter = {
  reset: <T extends string | object>(href: Href) => void;
} & Router

export const router: ExtendedRouter = {
  ...expoRouter,
  reset: <T extends string | object>(route: Href) => {
    if (router.canGoBack()) {router.dismissAll();}
    router.replace(route);
  }
};
