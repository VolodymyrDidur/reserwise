# Code conventions & recommendations

## File names:

1. Pascal case - folders containing React components.
2. Camel case - folders and files containing non-react things.
3. React component file must be named same as containing folder (e.g. `/pages/Places/Places.tsx`).
4. File containing styles for React component must named same as component itself (e.g. `Places.scss`).

## TypeScript type names:

1. Interfaces mut be used for domain & prop types.
2. Types must be used for various utility, built-in & derivative types.
3. Domain interfaces must be prefixed with "I" (e.g. `IPlace`).
4. Prop interfaces must be suffixed with "Props" (e.g. `PlacePageProps`).

## React components

1. Each component must follow following definition pattern - `export const ComponentName: React.FC<Type> = () => {}`.
2. Component name must be equal to containing file name.
3. Component name & file name must be as bounded to its purpose as possible.
4. Always use camel case for prop names.
5. Everything used in React hook must be mentioned in its dependencies (consider skipping dependencies is a hack) or leave a comment.
6. Keep components as clean as possible.

## TypeScript & JavaScript

1. `any` type is prohibited unless there is serious reason (leave a comment in such cases).
2. Prefer enum over magic string types.
3. Use inline types only when type is short enough and not used anywhere more (e.g. `useLocation<{idOfSomething: UUID}>`).
4. Order properties inside type/interface. Properties first, methods second.
5. Use arrow function syntax over everything else (both in type definition and in definition itself)
6. Optional chaining operator must be used carefully (one must avoid usage when prop logically is required but TS forces you to mark it optional).
7. No Promise syntax and direct promise returns . Use async await syntax instead.

## Folder structure

1. Flat folder structure is more preferable than nested one.
2. Divide components into _smart_ and _dumb_ ones as much as possible.
3. _Smart_ components must be located in `/pages` or `/views` folders and be self-containing and reusable in terms of user flow.
4. Everything that is _smart_ but not suitable to be located in `/pages` goes to `/views` folder.
5. _Dumb_ components must belong to components folder under `view` or `page` unless it is reusable (goes to shared UI components).

## Recommendations:

1. Exports should be packed into barrel files as much as possible.
2. Prefer to use `import type` & `export type` TS feature.
3. Use `useReducer` hook when `useState` hook becomes too complex.
4. Group things inside component (states with states, hooks with hooks, handlers with handlers etc).
5. If component uses multiple complex types move type definitions to separate file near component (`ComponentName.types.ts`).
6. Consider grouping composable pieces of logic inside component into hooks (`ComponentName.hooks.ts`).
7. Document shared common components using Storybook (`ComponentName.stories.ts`).
