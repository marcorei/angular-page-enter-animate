# angular-page-enter-animate

angular-page-enter-animate is an angular directive that allows you to animate objects in as soosn as they enter they vieport / enter the visible part of the page.

It's inspired by http://ejohn.org/blog/getboundingclientrect-is-awesome/


## How to use

Take a look a the example files at https://github.com/marcorei/angular-page-enter-animate

Register this module with your app and include the directive
```html
<pre>
<div mr-page-enter="entered" class="box">&nbsp;</div>
</pre>
```
Then you need to define the css classes for the start and the end point of the animation
<pre>
/* Animation start point */
.box.entered { opacity: 0; } 

/* Animation end point */
.box.entered-active { opacity: 1; transition: all 1000ms ease; }
</pre>

