jQuery(function(){
    "use strict";

    function ViewModel(){
        const self = this;
        self.redirectTime = ko.observable(20);

       
        //https://www.youtube.com/watch?v=VOreEIOVnCI
    }

    ko.applyBindings(new ViewModel(), document.getElementById("application"));
});