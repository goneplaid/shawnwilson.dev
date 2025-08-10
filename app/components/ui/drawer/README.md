# Drawer Components

A collection of components for a Drawer UI built on top of [vaul-vue](https://github.com/radix-vue/vaul-vue) and [reka-ui](https://github.com/radix-vue/reka-ui), providing a complete drawer/sheet UI implementation for Vue 3.

## Overview

The drawer components create modal dialogs that slide in from any edge of the screen. They support gestures for mobile devices and provide extensive customization options.

## Components

### Drawer (Root Component)

The main container component that manages drawer state and behavior.

```vue
<Drawer
  :open="isOpen"
  direction="right"
  :close-threshold="0.5"
  @update:open="handleOpenChange"
>
  <!-- Drawer content -->
</Drawer>
```

**Props (`DrawerRootProps`)**

| Prop                        | Type                                     | Default    | Description                                               |
| --------------------------- | ---------------------------------------- | ---------- | --------------------------------------------------------- |
| `activeSnapPoint`           | `number \| string \| null`               | -          | Currently active snap point                               |
| `closeThreshold`            | `number`                                 | `0.25`     | Threshold (0-1) for closing drawer when dragging          |
| `shouldScaleBackground`     | `boolean`                                | `true`     | Whether to scale background when drawer opens             |
| `setBackgroundColorOnScale` | `boolean`                                | `true`     | Whether to change body background color on scale          |
| `scrollLockTimeout`         | `number`                                 | `500`      | Duration (ms) drawer isn't draggable after scrolling      |
| `fixed`                     | `boolean`                                | `false`    | Whether drawer only changes height for keyboard           |
| `dismissible`               | `boolean`                                | `true`     | Whether drawer can be closed by dragging/clicking outside |
| `modal`                     | `boolean`                                | `true`     | Whether to prevent interaction with outside elements      |
| `open`                      | `boolean`                                | -          | Controlled open state                                     |
| `defaultOpen`               | `boolean`                                | `false`    | Default open state                                        |
| `nested`                    | `boolean`                                | `false`    | Whether drawer is nested inside another                   |
| `direction`                 | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Direction drawer slides from                              |
| `noBodyStyles`              | `boolean`                                | `false`    | Whether to skip applying body styles                      |
| `handleOnly`                | `boolean`                                | `false`    | Whether drawer can only be dragged by handle              |
| `preventScrollRestoration`  | `boolean`                                | `false`    | Whether to prevent scroll restoration                     |
| `snapPoints`                | `(number \| string)[]`                   | -          | Array of snap points (% or px values)                     |
| `fadeFromIndex`             | `number`                                 | -          | Snap point index from which overlay fades                 |

**Events (`DrawerRootEmits`)**

| Event                    | Parameters                  | Description                            |
| ------------------------ | --------------------------- | -------------------------------------- |
| `drag`                   | `percentageDragged: number` | Fired during drag with drag percentage |
| `release`                | `open: boolean`             | Fired when drag is released            |
| `close`                  | -                           | Fired when drawer closes               |
| `update:open`            | `open: boolean`             | Fired when open state changes          |
| `update:activeSnapPoint` | `val: string \| number`     | Fired when active snap point changes   |
| `animationEnd`           | `open: boolean`             | Fired after open/close animation ends  |

### DrawerTrigger

Element that triggers the drawer to open when clicked.

```vue
<DrawerTrigger as-child>
  <Button>Open Drawer</Button>
</DrawerTrigger>
```

**Props (`DrawerTriggerProps`)**

Extends `PrimitiveProps`:

| Prop      | Type                 | Default | Description                                                 |
| --------- | -------------------- | ------- | ----------------------------------------------------------- |
| `asChild` | `boolean`            | `false` | Merge props with child element instead of rendering wrapper |
| `as`      | `AsTag \| Component` | `'div'` | Element/component to render as                              |

### DrawerContent

The main content container of the drawer with built-in styling and animations.

```vue
<DrawerContent class="w-full max-w-sm">
  <!-- Your drawer content -->
</DrawerContent>
```

**Props (`DialogContentProps & { class?: HTMLAttributes['class'] }`)**

Extends `DialogContentProps` from reka-ui:

| Prop      | Type                      | Default | Description                    |
| --------- | ------------------------- | ------- | ------------------------------ |
| `class`   | `HTMLAttributes['class']` | -       | Additional CSS classes         |
| `asChild` | `boolean`                 | `false` | Merge props with child element |
| `as`      | `AsTag \| Component`      | `'div'` | Element/component to render as |

**Direction-specific Classes**

The component automatically applies classes based on drawer direction:

- **Top**: `inset-x-0 top-0 mb-24 max-h-[80vh] rounded-b-lg`
- **Bottom**: `inset-x-0 bottom-0 mt-24 max-h-[80vh] rounded-t-lg`
- **Right**: `inset-y-0 right-0 w-3/4 sm:max-w-sm`
- **Left**: `inset-y-0 left-0 w-3/4 sm:max-w-sm`

### DrawerClose

Element that closes the drawer when clicked.

```vue
<DrawerClose as-child>
  <Button variant="outline">Cancel</Button>
</DrawerClose>
```

**Props (`DrawerCloseProps`)**

Extends `PrimitiveProps`:

| Prop      | Type                 | Default | Description                    |
| --------- | -------------------- | ------- | ------------------------------ |
| `asChild` | `boolean`            | `false` | Merge props with child element |
| `as`      | `AsTag \| Component` | `'div'` | Element/component to render as |

### DrawerOverlay

Background overlay that appears behind the drawer.

```vue
<DrawerOverlay class="bg-black/50" />
```

**Props (`DialogOverlayProps & { class?: HTMLAttributes['class'] }`)**

| Prop         | Type                      | Default | Description                          |
| ------------ | ------------------------- | ------- | ------------------------------------ |
| `class`      | `HTMLAttributes['class']` | -       | Additional CSS classes               |
| `forceMount` | `boolean`                 | `false` | Force mounting for animation control |
| `asChild`    | `boolean`                 | `false` | Merge props with child element       |
| `as`         | `AsTag \| Component`      | `'div'` | Element/component to render as       |

### DrawerHeader

Header section with consistent spacing and layout.

```vue
<DrawerHeader>
  <DrawerTitle>Title</DrawerTitle>
  <DrawerDescription>Description</DrawerDescription>
</DrawerHeader>
```

**Props**

| Prop    | Type                      | Default | Description            |
| ------- | ------------------------- | ------- | ---------------------- |
| `class` | `HTMLAttributes['class']` | -       | Additional CSS classes |

**Default Classes**: `flex flex-col gap-1.5 p-4`

### DrawerFooter

Footer section with consistent spacing and layout for actions.

```vue
<DrawerFooter>
  <Button>Submit</Button>
  <DrawerClose as-child>
    <Button variant="outline">Cancel</Button>
  </DrawerClose>
</DrawerFooter>
```

**Props**

| Prop    | Type                      | Default | Description            |
| ------- | ------------------------- | ------- | ---------------------- |
| `class` | `HTMLAttributes['class']` | -       | Additional CSS classes |

**Default Classes**: `mt-auto flex flex-col gap-2 p-4`

### DrawerTitle

Accessible title for the drawer.

```vue
<DrawerTitle>Drawer Title</DrawerTitle>
```

**Props (`DrawerTitleProps & { class?: HTMLAttributes['class'] }`)**

| Prop      | Type                      | Default | Description                    |
| --------- | ------------------------- | ------- | ------------------------------ |
| `class`   | `HTMLAttributes['class']` | -       | Additional CSS classes         |
| `asChild` | `boolean`                 | `false` | Merge props with child element |
| `as`      | `AsTag \| Component`      | `'div'` | Element/component to render as |

**Default Classes**: `text-foreground font-semibold`

### DrawerDescription

Accessible description for the drawer.

```vue
<DrawerDescription>Optional drawer description</DrawerDescription>
```

**Props (`DrawerDescriptionProps & { class?: HTMLAttributes['class'] }`)**

| Prop      | Type                      | Default | Description                    |
| --------- | ------------------------- | ------- | ------------------------------ |
| `class`   | `HTMLAttributes['class']` | -       | Additional CSS classes         |
| `asChild` | `boolean`                 | `false` | Merge props with child element |
| `as`      | `AsTag \| Component`      | `'div'` | Element/component to render as |

**Default Classes**: `text-muted-foreground text-sm`

## Usage Examples

### Basic Drawer

```vue
<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button>Open Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>Drawer description text.</DrawerDescription>
        </DrawerHeader>
        <div class="p-4">
          <!-- Your content here -->
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose as-child>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
</template>
```

### Right-side Drawer

```vue
<template>
  <Drawer direction="right">
    <DrawerTrigger as-child>
      <Button>Open Side Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <!-- Content slides in from the right -->
    </DrawerContent>
  </Drawer>
</template>
```

### Controlled Drawer

```vue
<script setup>
const isOpen = ref(false);

const handleClose = () => {
  isOpen.value = false;
};
</script>

<template>
  <Drawer :open="isOpen" @update:open="isOpen = $event">
    <DrawerContent>
      <!-- Controlled content -->
    </DrawerContent>
  </Drawer>
</template>
```

### Drawer with Snap Points

```vue
<template>
  <Drawer :snap-points="[0.2, 0.5, 0.8]">
    <DrawerTrigger as-child>
      <Button>Open with Snap Points</Button>
    </DrawerTrigger>
    <DrawerContent>
      <!-- Content with snap points -->
    </DrawerContent>
  </Drawer>
</template>
```

## Accessibility

- Uses proper ARIA attributes for screen readers
- Supports keyboard navigation (Escape to close)
- Focus management when opening/closing
- Proper focus trapping within the drawer

## Dependencies

- **vaul-vue**: Core drawer functionality
- **reka-ui**: Base primitive components
- **@vueuse/core**: Utility functions
- **Tailwind CSS**: Styling (via `cn` utility)
