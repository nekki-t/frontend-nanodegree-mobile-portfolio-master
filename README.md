## Website Performance Optimization portfolio project

### Getting started
##### 1. Open your terminal and clone this repository to a directory you like:
```
$ git clone https://github.com/nekki-t/FEND-ArcadeGameClone.git
```
##### 2. Move to the directory which you cloned to:
```
e.g.
$ cd /{directory}/frontend-nanodegree-mobile-portfolio-master
```
##### 3. Install http-server:
```
$ npm install http-server -g
```
ref. https://github.com/indexzero/http-server
##### 4. Run server:
```
$ http-server
```
##### 5. Visit url:
```
$ http://localhost:8080
```
#### Part 1: Optimize PageSpeed Insights score for index.html
##### Optimizations
1. added async attribute on script tags for "analytics.js" and "perfmatters.js"
2. compressed images by ImageOptim.
3. changed the sizes of images into smaller ones.
4. added "media='print'" attribute on style tag for "print.css".
5. set Web Font Loader and made loading fonts async
6. made styles inline
7. compressed "index.html"


#### Part 2: Optimize Frames per Second in pizza.html
##### Optimizations
1. replaced querySelector to getElementById
2. replaced querySelectorAll to getElementsByClassName
3. moved calculations in loops outside there
4. moved getElement methods in loops outside
5. reduced redundancies of generating variants
6. reduced max count of pizza instance because it does not make much visual difference