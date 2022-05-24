jQuery(function(){
    "use strict";

    function ViewModel(){
        const self = this;
        self.redirectTime = ko.observable(20);
        self.isLiveOnTwitch = ko.observable(false);
        self.iframeSrc = ko.observable("");

        function checkStatus() {
            $.ajax({
                method: "GET",
                url: "/twitch"
            }).done((r) => {
                console.log(r);
                const obj = JSON.parse(r);
                if(obj === true){
                    self.iframeSrc("https://player.twitch.tv/?channel=delirya&parent=delsdongle.com");
                    self.isLiveOnTwitch(true);
                    return;
                }
            }).fail((j,t,e) => {
                console.error(j);
            });
        }

        checkStatus();
        //https://www.youtube.com/watch?v=VOreEIOVnCI
    }

    ko.applyBindings(new ViewModel(), document.getElementById("application"));
});