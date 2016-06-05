***********************************
React Native Examples Documentation
***********************************

Concepts
========

1.  prebind methods, Binding Methods to JS Classes

There are several ways to do this, which is my true preference is unknown
at this time.  I do enjoy the clarity for new developers of the second one though.  While
the syntax of the first is my jam.  So becuase I am all about readability, let's go with
the second one for this project.

.. code-block:: javascript

    constructor(props) {
        super(props);

        renderScene = () => this.renderScene();
    }

.. code-block:: javascript

    constructor(props) {
        super(props);

        renderScene = this.renderScene.bind(this);
    }


3.  Fat Arrow Functions
