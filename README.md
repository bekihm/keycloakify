---
description: Migration guide from v5 to v6
---

# ⬆ v5 -> v6

### Main script renamed to `keycloakify`

You can search and replace `build-keycloak-theme` -> `keycloakify` in your project.

`package.json`

```diff
 "scripts": {
     "start": "react-scripts start",
     "build": "react-scripts build",
-    "keycloak": "yarn build && build-keycloak-theme"
+    "keycloak": "yarn build && keycloakify"
 },
```

.github/workflows/ci.yaml

```diff
-- run: npx build-keycloak-theme
+- run: npx keycloakify
-- run: npx build-keycloak-theme --external-assets
+- run: npx keycloakify --external-assets
```

### Components exported using default export

In order to enable you to use `React.lazy()`, Keyclaokify components are now exported with default exports instead of named exports. &#x20;

```diff
-import { KcApp, defaultKcProps, getKcContext } from "keycloakify";
+import KcApp, { defaultKcProps, getKcContext } from "keycloakify";

-import { Login } from "keycloakify/lib/components/Login";
+import Login from "keycloakify/lib/components/Login";
```

Once you're at it, it might be a good time to update your app to use `<Suspense/>` and `React.lazy()` in order to reduce your bundle size.  See [keycloakify-starter (CSS only)](https://github.com/garronej/keycloakify-setup) or [keycloakify-advanced-starter (component level customization)](https://github.com/garronej/keycloakify-advanced-starter) to see how it's suposed to be setup.

###
