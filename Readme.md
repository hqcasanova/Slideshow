Slideshow with a progress indicator
===================================

Demo
----

[http://hqcasanova.github.io/Slideshow](http://hqcasanova.github.io/Slideshow)
If you want to fiddle with the code, head to CodePen: [http://codepen.io/hqcasanova/details/pkhjt](http://codepen.io/hqcasanova/details/pkhjt/)

Browser support
---------------

Latest versions (as of Oct 2014) of Chrome and Safari on Mac and IOS are assumed. Given the possibility of mobile devices, a mobile-first approach will be used. Also, there are no requirements regarding the presence/absence of JavaScript or future support of older browsers.

Implementation
--------------

Given that the target browsers are the latest versions, a CSS3-only implementation is feasible. A quick survey on the web reveals a selection of pure CSS3 solutions. They have the advantage of
very smooth CSS animations that integrate seamlessly with the controls, which is ideal in this
case. Naturally, they also require (at least) the number of slides to be known in advance since they
either rely on checkbox or target styling. For example, [CSSSlider](http://cssslider.com).

For the sake of modularity and flexibility then, I have chosen JavaScript as the core implementation technology. The challenge here might be avoiding interference between any CSS animation and JS behaviour.







