# Example app using React and Redux

Simple React/Redux application showing a boilerplate for formatting the 3 main components of Redux to handle both synchronous and async data.

#### Resources

* [lyric-api](https://github.com/rhnvrm/lyric-api) for async example
* https://lorenstewart.me/2016/11/27/a-practical-guide-to-redux/

## Data Flow

Redux is an implementation of Flux, which is an idea of a single source of truth for an app's data. As a result, the following diagram represents the data flow of a Redux app.
```
     ___
    /   \ 
   / API \
   -------
     |
     V
   ------ 
  |      |
  |action|
  |      |
   ------ 
     |
     V
  ------- 
 |       |
 |reducer|
 |       |
  ------- 
     |
     V
 --------- 
|         |
|component|
|         |
 --------- 
```

The square icons are writen within the app itself. The triangle is an external resource.

#### More Resources

* https://redux.js.org/basics/dataflow

## Usage

This project relies on `react-scripts` to provide a quick way to get the example app running. They have been linked as `npm run <command>` for your convienence.

To start running
```
npm install && npm run start
```

This will automatically build the app and start running. Your default web browser should be opened to http://localhost:3000

## Developer Notes

**Warning:** These are notes for creator to improve this example. If you're learning React/Redux, feel free to ignore.

Contributors, feel free to pick from this list and implement a pull request.

Users, feel free to create pull requests adding to this list as you go through the codebase.

- [ ] Move Redux connection info into a separate higher `container` type
   * containers => handle connecting component to Redux
   * component  => only handle UI
- [ ] Restructure app so state (ie. actions and reducers) is grouped together

