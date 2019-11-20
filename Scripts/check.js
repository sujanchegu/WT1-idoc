self.addEventListener("message",function(e) {
    if(e.data.slice(0,4) !== "eCMP") {
        this.postMessage("Username starts with \"eCMP\"");
    }
    else {
        this.postMessage("");
    }
},false)