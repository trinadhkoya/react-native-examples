**********
Change Log
**********

All enhancements to React-Native-Examples will be documented in this file. This project adheres to `Semantic Versioning`_.

[2016-09-26]
============

**UPDATED**

* DEPENDENCIES - React --> upgraded to 15.3.1
* DEPENDENCIES - React-Native + Templates --> upgraded to 34.
* README - updated disclaimer letting developers know this is based on RN-34.
* NEW BRANCH - new branch called ``RN-30`` show the code as it exists for RN-30 implementation
* CustomNavigationCardStack - updated to reflect changes made in last 4 RN updates

[2016-06-30]
============

**UPDATED**

* DEPENDENCIES - React --> upgraded to 15.2.0
* DEPENDENCIES - React-Native + Templates --> upgraded to 30.
* README - removed the outdated warning.  added disclaimer letting developers know this is based on RN-30.


[2016-06-30]
============

**ADDED**

* Modals - two types: fullscreen and pagesheet.  These demo handling different types of modals.


[2016-06-29]
============

**UPDATES**

* updated the project README.rst - new section on learning NavigationExperimental

**ADDED**

* added NavigationBar (NavigationHeader) to the demo

[2016-06-28]
============

**UPDATES**

* altered the import pattern for constants - index to act as a proxy
* updated the project README.rst

**ADDED**

* duration animation added to ``NavigationTransitioner``

[2016-06-17]
============

**UPDATES**

* Upgraded from React-Native 0.26 to React-Native 0.28.0-rc.0
* Upgrade from React 15.0.2 to React 15.1.0
* IOS Build Taret is >= 8.2
* Converted all COLORS from rgba to rgb
* Swapped out all instanced of COLORS for STYLES

**REMOVED**

* ``common/helpers/colors.js`` - makes more sense to have a directory devoted to constants
* ``common/helpers`` - not required at this time

**ADDED**

* ``constants/styles.js``

[2016-06-05]
============

**Initial Commit**

* initial commit (@tkjone)
* react-native-example - Navigation Experimental + Redux

.. _Semantic Versioning: http://semver.org/
.. _Wagtail 1.4 release notes: http://docs.wagtail.io/en/v1.4.1/releases/1.4.html
