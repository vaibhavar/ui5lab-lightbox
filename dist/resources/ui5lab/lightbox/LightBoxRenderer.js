/*!
 * ${copyright}
 */

sap.ui.define(
    [],
    function() {
        'use strict';

        /**
         * Renderer for Word Cloud
         * @namespace
         */
        var LightBoxRenderer = {};

        /**
         * Renders the HTML for the control, using the provided {@link sap.ui.core.RenderManager}.
         *
         * @param {sap.ui.core.RenderManager} oRm RenderManager object
         * @param {sap.ui.core.Control} oControl An object representation of the control that will be rendered
         */

        LightBoxRenderer.render = function(oRm, oControl) {
            oRm.write('<div');
            oRm.writeControlData(oControl);

            // Generic library+control class
            oRm.addClass('lightbox-LightBox');

            oRm.writeClasses();
            oRm.addStyle('width', oControl.getWidth());
            oRm.addStyle('height', oControl.getHeight());
            oRm.writeStyles();

            oRm.write('>');

            this._writeImages(oRm, oControl);
            this._writeModalWindow(oRm, oControl);

            oRm.write('</div>');
        };

        LightBoxRenderer._writeModalWindow = function(oRm, oControl) {
            var sSlidesHtml = '';
            var sThumbnailHtml = '';

            var aImages = oControl.getImages();
            var iTotal = aImages.length;

            for (var iIndex = 0; iIndex < aImages.length; iIndex++) {
                sSlidesHtml =
                    sSlidesHtml +
                    '    <div class="mySlides">' +
                    '      <div class="numbertext">' +
                    iIndex +
                    ' / ' +
                    iTotal +
                    '</div>' +
                    '      <img src="' +
                    aImages[iIndex].src +
                    '" style="width:100%">' +
                    '    </div>';

                sThumbnailHtml =
                    sThumbnailHtml +
                    '<div class="column">' +
                    '      <img class="demo" src="' +
                    aImages[iIndex].src +
                    '" alt="' +
                    aImages[iIndex].description +
                    '">' +
                    '    </div>';
            }

            var sHtmlTemplate =
                '<div id="myModal" class="modal">' +
                '  <span class="close cursor">&times;</span>' +
                '  <div class="modal-content">' +
                sSlidesHtml +
                '    <!-- Next/previous controls -->' +
                '    <a class="prev">&#10094;</a>' +
                '    <a class="next"">&#10095;</a>' +
                '' +
                '    <!-- Caption text -->' +
                '    <div class="caption-container">' +
                '      <p id="caption"></p>' +
                '    </div>' +
                '' +
                '    <!-- Thumbnail image controls -->' +
                '<div class="flex-row">' +
                sThumbnailHtml +
                '</div>' +
                '  </div>' +
                '</div>';
            oRm.write(sHtmlTemplate);
        };

        LightBoxRenderer._writeImages = function(oRm, oControl) {
            var aImages = oControl.getImages();

            // Images used to open the lightbox
            oRm.write("<div class='grid-row thumbs'>");
            for (var iIndex = 0; iIndex < aImages.length; iIndex++) {
                var oImage = aImages[iIndex];
                oRm.write("<div class='column thumb'>");
                oRm.write("<img src='");
                oRm.write(oImage.src);
                oRm.write("' class='hover-shadow'>");
                oRm.write('</div>');
            }
            oRm.write('</div>');
        };

        return LightBoxRenderer;
    },
    /* bExport= */ true
);
