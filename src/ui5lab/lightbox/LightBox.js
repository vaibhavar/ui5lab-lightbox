/*!
 * ${copyright}
 */

// Provides control ui5lab.lightbox.LightBox
sap.ui.define(['jquery.sap.global', './library', 'sap/ui/core/Control'], function(
    jQuery,
    library,
    Control
) {
    'use strict';

    /**
     * Constructor for a new ui5lab.lightbox.LightBox control.
     *
     * @param {string} [sId] id for the new control, generated automatically if no id is given
     * @param {object} [mSettings] initial settings for the new control
     *
     * @class
     *
     * @extends sap.ui.core.Control
     *
     * @public
     * @alias ui5lab.lightbox.LightBox
     */
    var oControl = Control.extend(
        'ui5lab.lightbox.LightBox',
        /** @lends ui5lab.lightbox.LightBox.prototype */

        {
            /**
             * Control API
             */
            metadata: {
                library: 'ui5lab.lightbox',
                properties: {
                    width: {
                        type: 'sap.ui.core.CSSSize',
                        defaultValue: '200px'
                    },
                    height: {
                        type: 'sap.ui.core.CSSSize',
                        defaultValue: '100px'
                    },
                    images: {
                        type: 'object[]',
                        defaultValue: []
                    }
                }
            },

            /**
             * Lifecycle hook to initialize the control
             */
            init: function() {
                this.slideIndex = 1;
            },

            // Open the Modal
            openModal: function() {
                document.getElementById('myModal').style.display = 'block';
            },

            // Close the Modal
            closeModal: function() {
                document.getElementById('myModal').style.display = 'none';
            },

            // Next/previous controls
            plusSlides: function(n) {
                this.showSlides((this.slideIndex += n));
            },

            // Thumbnail image controls
            currentSlide: function(n) {
                this.showSlides((this.slideIndex = n));
            },

            showSlides: function(n) {
                var oDomRef = this.getDomRef();
                var i;
                var slides = oDomRef.querySelectorAll('.mySlides');
                var dots = oDomRef.querySelectorAll('.demo');
                var captionText = oDomRef.querySelector('#caption');
                if (n > slides.length) {
                    this.slideIndex = 1;
                }
                if (n < 1) {
                    this.slideIndex = slides.length;
                }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = 'none';
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(' active', '');
                }
                slides[this.slideIndex - 1].style.display = 'block';
                dots[this.slideIndex - 1].className += ' active';
                captionText.innerHTML = dots[this.slideIndex - 1].alt;
            },

            _attachEvents: function(oControl) {
                var oDomRef = this.getDomRef();

                Array.from(oDomRef.querySelectorAll('img.hover-shadow')).forEach(function(
                    oImg,
                    iIndex
                ) {
                    jQuery(oImg).on('click', function() {
                        oControl.openModal();
                        oControl.currentSlide(iIndex + 1);
                    });
                });

                jQuery(oDomRef.querySelector('.prev')).on(
                    'click',
                    function() {
                        this.plusSlides(-1);
                    }.bind(this)
                );

                jQuery(oDomRef.querySelector('.next')).on(
                    'click',
                    function() {
                        this.plusSlides(1);
                    }.bind(this)
                );

                jQuery(oDomRef.querySelector('.close')).on(
                    'click',
                    function() {
                        this.closeModal();
                    }.bind(this)
                );

                Array.from(oDomRef.querySelectorAll('.demo')).forEach(
                    function(oDemoImg, iIndex) {
                        jQuery(oDemoImg).on(
                            'click',
                            function() {
                                this.currentSlide(iIndex + 1);
                            }.bind(this)
                        );
                    }.bind(this)
                );
            },

            onAfterRendering: function() {
                this._attachEvents(this);
            }
        }
    );

    return oControl;
});
