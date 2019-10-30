
import Kxios from './kxios/Kxios.js';

var kxios = new Kxios({
    baseUrl:'localhost:7777/data'
});
kxios.request({
    method:'get',
    url:'/data',
    data:{x:1}
});
// console.log(11);