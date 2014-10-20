(function () {
    var slideDeck = document.getElementsByClassName('slide-deck')[0];
    var numSlides = slideDeck.childElementCount;

    //Inserts navigation controls right before slide deck.
    slideDeck.parentElement.insertBefore(createNavElem(), slideDeck);

    //Do all HTML changes necessary for child elements of 'slide-deck'
    scaffoldSlides(slideDeck.children);
    
    /* Creates an unordered list with as many controls as slides. Each control element is prefixed by two
     * more elements that add visual feedback during slideshow. */
    function createNavElem() {
        var navElem = document.createElement('ul');
        var controlElem = document.createElement('li');
        var progressElem = document.createElement('li');
        var clonedControl;
        var i;

        //Sets the necessary properties for each to-be-cloned element
        navElem.className = 'slide-nav';
        navElem.addEventListener('click', showSlide);
        navElem.addEventListener('transitionend', nextTransition);
        controlElem.className = 'control';
        progressElem.className = 'progress';

        //Does the actual cloning and appending: 2 progress elements and one control for every slide
        for (i = 0; i < numSlides; i += 1) {
            navElem.appendChild(progressElem.cloneNode(false));
            navElem.appendChild(progressElem.cloneNode(false));
            clonedControl = controlElem.cloneNode(false);
            clonedControl.textContent = i + 1;
            navElem.appendChild(clonedControl);
        }
        return navElem;
    }

    /* Adds the necessary IDs to every child element of 'slide-deck' (the slides). It also creates
    /* the banner for so-called void slides: placeholders for future slides.
    /* TODO: convert slide number to word */
    function scaffoldSlides(slides) {
        var slideClass;
        var slideNo;
        var banner; 
        var i;

        //Add IDs
        for (i = 0; i < numSlides; i += 1) {
            slideNo = i + 1;
            slides[i].id = 's' + slideNo;
            slideClass = slides[i].className;

            //Add banners to void slides
            if (slideClass && (slideClass.match(/\bvoid\b/))) {
                banner = document.createElement('span');
                banner.innerHTML = "Slide " + slideNo;  
                slides[i].appendChild(banner);
            }
        }
    }

    /* Displays the slide without progression and stops autoplay.
     * TODO: remove timeout and 'transitionend' listeners */
    function showSlide(event) {
        var lastControl = document.querySelector('.slide-nav .current');
        var currControl = event.target;

        //Unselect and hide previous slide
        if (lastControl) {
            lastControl.classList.remove('current');
            document.getElementById('s' + lastControl.textContent).style.opacity = 0;
        }

        //Select and display current slide
        currControl.classList.add('current');
        document.getElementById('s' + currControl.textContent).style.opacity = 1; 
    }
    
    /* Stub for CSS3 transition logic. The idea is to string transitions together so that
     * the net effect is a smooth slideshow. */
    function nextTransition(event) {

    }
    
    //TO BE CONTINUED...

})();