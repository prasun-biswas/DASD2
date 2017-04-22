var express =require('express');
var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var logger = require('morgan');
var request = require('request');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/sendMessage', function(req, res){
    res.end();
});


var Workstation=function (port,station) {

    this.portID=port;
    this.stationID=station;

this.operateServer(this.portID,this.stationID)
}

Workstation.prototype.operateServer=function(port,station){

    request.post('http://localhost:3000/RTU/SimCNV'+station+'/events/Z1_Changed/notifs',{form:{destUrl:"http://localhost:"+port+"/"+station+"notifs"}}, function(err,httpResponse,body){console.log(port+' hi '+station);});


    app.post('/'+station+'notifs', function (req, res) {
        console.log(req.body);
        console.log("stat inside app.post is"+station+ " and "+port);
        var post_url='http://localhost:3000/RTU/SimCNV'+station+'/services/TransZone12';
        console.log(post_url);
        request.post(post_url,{form:{event:req.body}},
            function(err,httpResponse,body){});

        res.end();
    })
    app.listen(port,function () {
        //var ref=this;
        console.log("stat inside app.listen is "+station);
    });

}


var ws_8=new Workstation(4008,8);
var ws_9=new Workstation(4009,9);
var ws_10=new Workstation(4010,10);
var ws_11=new Workstation(4011,11);







        // BusyFlag status-----------------


        // console.log(url_zone_12);




    //this.operateWS();







// var WS_9=new Workstation(9,'red');
// WS_9.operateServer(4009);
// var WS_9=new Workstation(9,'green',4009);
// WS_9.operateServer();
// WS_9.operateWS();

// var WS_10=new Workstation(10,'green',4010);
// WS_10.operateServer();


//-----------------------------

//-----------------------------




// http.listen(4444, function(){
//     console.log('The BROKER is listening on :4444');
// });






