::para
April 28, 2019
::

::the-title
Creating a Python Package that Prints Hello World
::

::para
Welcome, fellow Python enthusiasts! In this blog post, we'll embark on a journey to create a simple Python package that does the timeless task of printing "Hello, World!" to the console. This may seem like a trivial exercise, but it serves as a fantastic introduction to the world of packaging and distributing Python code.
::

::divider
::

::the-header
Step 1: Project Structure
::

::para
First things first, let's set up the project structure. Create a new directory for your project, and inside it, create the following files:
::

::code-block

```bash
hello_world_package/
|-- hello_world/
|   |-- __init__.py
|   |-- hello.py
|-- setup.py
|-- README.md
```

::

::code-block

```markdown
- hello_world is our package directory.
- **init**.py is an empty file that indicates the directory should be treated as a Python package.
- hello.py will contain the actual code to print "Hello, World!".
- setup.py is where we define package metadata and dependencies.
- README.md is a good practice to provide documentation for your package.
```

::

::divider
::

::the-header
Step 2: Writing the Code
::

::para
Now, let's write the code. Open **hello_world/hello.py** and add the following:
::

::code-block

```python
def print_hello():
    print("Hello, World!")
```

::

::para
Simple, right? Our package will consist of this one function that prints our greeting.
::

::divider
::

::the-header
Step 3: Define Package Metadata
::

::para
Next, open **setup.py** and define the package metadata. This file informs Python's packaging tools about your package and how to install it. Here's a basic example:
::

::code-block

```python
from setuptools import setup, find_packages

setup(
    name='hello-world-package',
    version='0.1.0',
    packages=find_packages(),
    install_requires=[
        # If your package has any dependencies, list them here.
    ],
)
```

::

::para
Replace **`# If your package has any dependencies, list them here.`** with actual dependencies if your package has any.
::

::divider
::

::the-header
Step 4: Install and Test
::

::para
Now, it's time to install our package locally. Open a terminal, navigate to your project directory, and run:
::

::code-block

```bash
pip install .
```

::

::para
This command installs the package in editable mode, allowing you to make changes and see the effects immediately.
::

::para  
Now, open a Python script or an interactive Python shell and try the following:
::

::code-block

```python
from hello_world import hello

hello.print_hello()
```

::

::para
You should see "Hello, World!" printed to the console.
::

::divider
::

::the-header
Step 5: Distribute Your Package
::

::para
To share your package with the world, you can publish it on the Python Package Index <a href="https://pypi.org/account/register/" class="text-teal-500">PyPI</a>. Before that, make sure to create an account on PyPI.
::

::para
Once you have an account, you can use the following commands to upload your package:
::

::code-block

```bash
pip install twine
python setup.py sdist bdist_wheel
twine upload dist/*
```

::

::para
Congratulations! You've just created and shared your first Python package that prints "Hello, World!" to the world. This simple example lays the foundation for more complex and useful packages in the future. Happy coding!
::
