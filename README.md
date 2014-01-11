# angular-page-enter-animate

angular-page-enter-animate is an angularJS directive that allows you to animate elements as soon as they enter they viewport.

Inspired by http://ejohn.org/blog/getboundingclientrect-is-awesome/

**Demo:** http://marcorei.github.io/example/angular-page-enter-animate/example.html


## How to use

Take a look a the example files at https://github.com/marcorei/angular-page-enter-animate

Register mrPageEnterAnimate with your app and include the directive
```html
<pre>
<div mr-page-enter="entered" class="box">&nbsp;</div>
</pre>
```
Define the css classes for the start and the end point of the animation
<pre>
/* Animation start point */
.box.entered { opacity: 0; } 

/* Animation end point */
.box.entered-active { opacity: 1; transition: all 1000ms ease; }
</pre>

