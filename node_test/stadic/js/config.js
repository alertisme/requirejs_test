requirejs.config({
    "baseUrl":"../stadic",
    "paths":{
        "jquery":"libs/jquery/jquery-2.1.1.min",
        "bootstrap":"libs/bootstrap/js/bootstrap.min"
    },
    "shim":{
        "bootstrap":       ["jquery"]
    }
})