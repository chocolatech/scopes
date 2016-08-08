function foo(){
    var bar;
    quux = 6;
    function zip(){
        var quux = 4;
        bar = true;
    };
    return zip;
};