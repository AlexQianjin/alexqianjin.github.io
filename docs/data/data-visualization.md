# Data Visualization with Python

## Which types of data are used to visualize?

When we talk about data, mostly we focus on the structure data.

- Table type data. (Excel/csv)
- Multi-dimensional array
- Time Series

## Important Python Libraries

- NumPy (https://numpy.org) Numerical Python
  - ndarray
- Pandas (https://pandas.pydata.org)
  - DataFrame
  - Series

- matplotlib (https://matplotlib.org)
- IPython and Jupyter (https://jupyter.org)
- SciPy (https://scipy.org)
- scikit-learn (https://scikit-learn.org)

## Setup Jupyter

- Download and install Anaconda ([Anaconda | Individual Edition](https://www.anaconda.com/products/individual))
  - Open cmd.exe
  - \> activate base
  - \> jupyter lab

- Download Visual Studio Code ([Download Visual Studio Code - Mac, Linux, Windows](https://code.visualstudio.com/download))
  - Install python extension

- Docker

  - ```
    docker pull jupyter/tensorflow-notebook:lab-3.0.15
    ```

  - ```
    docker run --name jupyter -p 10000:8888 -v "$PWD":/home/jovyan/work jupyter/tensorflow-notebook:lab-3.0.15
    ```

## Examples in the Jupyter Lab

- Panda Series
- matplotlib line chart
- matplotlib bar chart
- Pandas DataFrame from csv file
- Visualize the data with horizontal bar chart
- Visualize the data with pie chart
- Add a new column and visualize the data with bar chart

## Examples using Dash

- Visualize air line data in the web browser
