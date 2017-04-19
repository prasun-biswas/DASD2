/**
 * Created by prasun on 17-Apr-17.
 */
var stationID=8;
//var url_cnv12 ='http://localhost:3000/RTU/SimCNV*/services/TransZone12';
//var newUrl_cnv12=url_cnv12.replace("*",stationID);
var newUrl_cnv12=('http://localhost:3000/RTU/SimCNV*/services/TransZone12').replace("*",stationID);
console.log(newUrl_cnv12);
// app.post('/notifs', function(req, res){
//     //console.log(req.body.payload);
//     console.log(req.body.payload.PalletID);
//     if(req.body.id == "Z1_Changed")
//     {
//         //cleint 1
//         request.post('http://localhost:4445',{form:{event:req.body}},
//             function(err,httpResponse,body){});
//
//         request.post('	http://localhost:3000/RTU/SimCNV8/services/TransZone12',{form:{event:req.body}},
//             function(err,httpResponse,body){});
//
//     }
//     else if(req.body.id == "Z2_Changed")
//     {
//
//         //cleint 1
//         request.post('http://localhost:4445',{form:{event:req.body}},
//             function(err,httpResponse,body){});
//
//         //cleint 2
//         request.post('http://localhost:4446',{form:{event:req.body}},
//             function(err,httpResponse,body){});
//     }
//     else if(req.body.id == "Z5_Changed")
//     {
//
//         //cleint 2
//         request.post('http://localhost:4446',{form:{event:req.body}},
//             function(err,httpResponse,body){});
//     }
//     res.end();
// });
//-----------------------------

//-----------------------------

// request.post('http://localhost:3000/RTU/SimCNV8/events/Z1_Changed/notifs',{form:{destUrl:"http://localhost:4444/notifs"}}, function(err,httpResponse,body){});
// request.post('http://localhost:3000/RTU/SimCNV8/events/Z2_Changed/notifs',{form:{destUrl:"http://localhost:4444/notifs"}}, function(err,httpResponse,body){});
// request.post('http://localhost:3000/RTU/SimCNV8/events/Z3_Changed/notifs',{form:{destUrl:"http://localhost:4444/notifs"}}, function(err,httpResponse,body){});
// request.post('http://localhost:3000/RTU/SimCNV8/events/Z4_Changed/notifs',{form:{destUrl:"http://localhost:4444/notifs"}}, function(err,httpResponse,body){});
// request.post('http://localhost:3000/RTU/SimCNV8/events/Z5_Changed/notifs',{form:{destUrl:"http://localhost:4444/notifs"}}, function(err,httpResponse,body){});



http.listen(4444, function(){
    console.log('The BROKER is listening on :4444');
});



//
var Person = function (name) {
    this._name = name;
    //console.log(this._name)
};

Person.prototype.getName=function(){
    console.log(this._name);
    //return this._name;
}
var p1=new Person('prasun');
p1.getName();
//var p1=new Person('biswas');
// console.log(p1.getName());
// app.post('/notifs', function(req, res){
//     //console.log(req.body.payload);
//     console.log(req.body.payload.PalletID);
//     if(req.body.id == "Z1_Changed")
//     {
//         //cleint 1
//         request.post('http://localhost:4445',{form:{event:req.body}},
//             function(err,httpResponse,body){});
//
//         request.post('	http://localhost:3000/RTU/SimCNV8/services/TransZone12',{form:{event:req.body}},
//             function(err,httpResponse,body){});
//
//     }
//     res.end();
// });

