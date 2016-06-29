*********************
React Native Examples
*********************

Welcome to **React Native Examples**.  This Repository aims to provide some insight into building some of the more interesting aspects of React-Native.  This repo currently features the following examples.

* **Navigation**
    - NavigationExperimental + Redux
    - CardStack
    - Tabs

.. image:: docs/images/navigation-experimental-demo.gif

* **Redux Remote Dev Tools**

Prerequisites
=============

* `React Native`_

    - Xcode 7.3+

* npm - 3.9.3
* node - 4.4.5

**NOTE:**  The above NPM versions are the ones I had installed when I made this repo.

Quickstart
==========

1. Clone this repo
------------------

.. code-block:: bash

    $ git clone https://github.com/tkjone/react-native-examples.git


2. Move into your local react_native_examples
---------------------------------------------

.. code-block:: bash

    $ cd react-native-examples


3. Install Dependencies
-----------------------

.. code-block:: bash

    npm install

4. Start the packager
---------------------

.. code-block:: bash

    npm start

5. Open the project in Xcode
----------------------------

.. code-block:: bash

    open ios/react_native_examples.xcodeproj


From here you can choose the simulator to use and then build the project.


Overview
========

Navigation
----------

**What is NavigationExperimental?**

.. epigraph::

   React-Native provides three different API's for implementing Navigation:  ``Navigator``, ``NavigatorIOS`` and ``NavigationExperimental``.  Of these components, the first two are more commonly used because they provide stability and more documentation.  Having said this, over the next several months(?) ``NavigationExperimental`` will become the fully supported API for implementing navigation in React Native.

**Why would you use one over another and is there anything preventing me from using it right now?**

.. epigraph::

   ``NavigationExperimental`` will allow you to build more complex, platform agnostic navigation structures.  Having said this, aside from `a few articles`_, some `excellent repositories`_ and the React Native UI Explorer's examples, ``NavigationExperimental``'s documentation is sparse, and it's API is actively being developed which means you have to pay attention to the RN development process and code accordingly.
   Having said this, ``NavigationExperimental`` is great and the above should not deter you from working with it, which is why I made this repo.  Hopefully, you can take some points from here or build upon this example.

**What functionality is in this demo?**

.. epigraph::

    - Tabbar
    - Navigation Actions:  push, jumpToTab, reset tab stack

TO DO
=====

- NavigationHeader
- Back/Pop Actions
- Modals
- Documentation explaining NavigationExperimental and the choices made in this project


.. _`a few articles`: https://medium.com/@dabit3/first-look-react-native-navigator-experimental-9a7cf39a615b#.vanf1kcmh
.. _`excellent repositories`: https://github.com/jlyman/RN-NavigationExperimental-Redux-Example
.. _`React Native`: http://facebook.github.io/react-native/docs/getting-started.html


