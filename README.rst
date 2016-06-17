*********************
React Native Examples
*********************

A few samples of some of the more interesting aspects of React Native.

Quickstart
==========

1. clone the project
2. npm install
3. npm start
4. open ios/react_native_examples.xcodeproj

Project Outline
===============

* code lives in the ``src`` directory
* Redux, React-Native 27, React-Redux,


Navigation
==========

.. code-block:: bash

    main.js                                (custom)
        ---> AppNavigation                 (custom)
             ---> MainScreen                 (custom)
                  ---->   NavigationView   (NavigationExperimental)
             ---> Dock                     (custom)

MainScreen
----------

.. code-block:: javascript

    // MainScreen.js

    const {
        View: NavigationView,
    } = NavigationExperimental;

    import {
        NavigationSceneRendererProps,
    } from 'NavigationTypeDefinition';

``NavigationView`` is good for tabs because it has no navigation animations.

**Required Props:**

* navigationState - navigation state of the containing view
* onNavigate - callback to navigation with an action
* renderScene -the scene to render

**Optional Props**

* Style - styles to add to the scene containing View


TabScreen
---------

``NavigationCardStack`` is used for a tab's stack. It provides an animation.


Workflow
--------

use remoteDev and the redux-remote-dev tools to watch and understand the flow of redux state.

1. start the remoteDev server

.. code-block:: javascript

    npm run remotedev

2.  open your remoteDev app (I use the Chrome app)




ES6 Notes
---------

- state is defined inside of the constructor
- class properties do not automatically bind to to the React class instance.  I opt to change the context of my class properties inside of the constructor.

Style Guide
-----------

- editorconfig
- spaces between spaces infinix when in arguments - good
- Domain Driven Design Project Organization

Resources
---------

https://github.com/planningcenter/react-patterns#component-organization

https://leanpub.com/understandinges6/read

https://toddmotto.com/react-create-class-versus-component/

http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes

http://egorsmirnov.me/2015/06/14/react-and-es6-part2.html

https://rangle-io.gitbooks.io/react-native-workshop/content/book/navigation/navigation-experimental-details.html

https://coryrylan.com/blog/javascript-es6-class-syntax

https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e#.z8ecs9zep

https://egghead.io/lessons/javascript-redux-simplifying-the-arrow-functions?course=building-react-applications-with-idiomatic-redux

`immutability`_

`Organizing React Components Nature v Domain`_
`Alternative React Folder Structure`_

.. _`Organizing React Components Nature v Domain`: http://marmelab.com/blog/2015/12/17/react-directory-structure.html
.. _`Alternative React Folder Structure`: https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346

.. _`immutability`: https://www.sitepoint.com/immutability-javascript/

