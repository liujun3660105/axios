import utils from './utils.js'
function Kxios(config){
    this.config = config;
  

}
Kxios.prototype.request = function(config){
    //请求需要的配置，把传入的config和this.config进行必要的合并
    var config = utils.mergeConfig(this.config,config);
    console.log(config);
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log(this.responseText);
    };
    xhr.open(this.config.method, this.config.url, true);
    xhr.send();
}
export default Kxios;