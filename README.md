# Flow Types for Material UI

This is an attempt to build Flow types for material-ui that are more precise than the one built in the `flow-typed` repository.
I'm looking for help to map some TypeScript types to Flow.

## Questions

Below are some questions that would help me to map of the TS types to Flow

### 1
How does the following TS definition:

```
React.HTMLAttributes<HTMLElement>
```

translate in Flow? 🤔

### 2

What is the TS equivalent of `Record` in Flow?

Assume I have the following type:

```js
type ClassNames = "container" | "form";
```

How do I express the object type that contains exactly the property `container` and `form`?
