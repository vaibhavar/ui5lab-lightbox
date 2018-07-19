/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ui5lab.lightbox
 */
sap.ui.define(['jquery.sap.global', 'sap/ui/core/library'], function(jQuery, library1) {
    'use strict';

    /**
     * @namespace
     * @name ui5lab.lightbox
     * @public
     */

    // library dependencies

    // delegate further initialization of this library to the Core
    sap.ui.getCore().initLibrary({
        name: 'ui5lab.lightbox',
        dependencies: ['sap.ui.core'],
        interfaces: [],
        controls: ['ui5lab.lightbox.LightBox'],
        elements: [],
        noLibraryCSS: false,
        version: '${version}',
    });

    return ui5lab.lightbox;
});
