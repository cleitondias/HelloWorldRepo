sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("demoapp.controller.View1", {
        onInit() {
        },

        onClick() {
            sap.m.MessageToast.show("Button clicked!");
        }
    });
});