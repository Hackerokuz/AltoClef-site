---
layout: /src/layouts/DocsLayout.astro
title: API Things To Know
---

Please check out [the example repo first](https://github.com/gaucho-matrero/altoclef-example) which shows how to create custom commands + tasks.

## Running a task
```java
AltoClef altoClef = /* get from somewhere */;
altoClef.runUserTask(task, onTaskFinish);
```

## Making a Task

1) Extend `Task`
2) Define the `isEqual` method. If a task instance returns true when passed to this method, the newer task will be discarded and the currently running task will keep going.
3) Initialize stuff in `onStart` (this may often be left empty)
4) Perform per-frame logic in `onTick`. Return other tasks to run sub-tasks (most of your work happens here)
5) Clean up stuff in `onStop` (if `onStart` is empty, this is _usually_ also empty.)

## BotBehaviour (formerly ConfigState)

Use this when starting and stopping tasks to enable+disable certain behaviors.

Example:
```java
@Override
protected void onStart(AltoClef altoClef) {
    altoClef.getBehaviour().push();
    altoClef.getBehaviour().addProtectedItems(Items.COBBLESTONE); // Do not throw out cobblestone/use for bridging while this task runs.
}
@Override
protected void onStop(AltoClef altoClef) {
    altoClef.getBehaviour().pop();
}
```

**ALWAYS pair a push with a pop! Otherwise the entire system may break/bug out**


## TaskCatalogue

Use `TaskCatalogue` to get items in your commands.

Examples:
```java
return TaskCatalogue.getItemTask(Items.COBBLESTONE, 4);
return TaskCatalogue.getItemTask("planks", 4); // Gets any kind of plank
```

## InventoryTracker

Checks if we have items in our inventory.

Examples:
```java
if (!altoClef.getInventoryTracker().hasItem(Items.CLOCK)) {
    return TaskCatalogue.getItemTask(Items.CLOCK, 1);
}
int numberOfSticks = altoClef.getInventoryTracker().getItemCount(Items.STICKS);
int numberOfFlowers = altoClef.getInventoryTracker().getItemCount(ItemHelper.FLOWER);
```

## EntityTracker

TODO

## BlockTracker

TODO

## SimpleChunkTracker (and it's only use)

TODO

## ContainerTracker (only really for checking cached chests)

TODO