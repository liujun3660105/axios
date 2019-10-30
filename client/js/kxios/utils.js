function mergeConfig(config1,config2){
    //对象合并
    //不能直接把config2合并到config1中
    //1.把cofnig1先通过深拷贝赋值给衣蛾对线

    var config = deepCopy(config1);
    var properties1 = ['url', 'method', 'params', 'data'];
    //把config2合并到config
    for(var property in config2){
        if(properties1.indexOf(property)!=-1){
            config[property] = config2[property];
        } else{
            if(isObject(config2[property])){
                config[property] = deepMerge(config[property],config2[property]);
            }
            else{
                config[property] = config2[property];
            }
        }
    }
return config;
}
function deepMerge(obj1,obj2){
    var obj = deepCopy(obj1);
    for(var property in obj2){
        var val1 = obj[property];
        var val2 = obj2[property];
        if(isObject(val1) && isObject(val2)){
            obj[property] = deepMerge(val1, val2);
        }
        else if(isObject(val2)){
            obj[property] = deepCopy(val2);
        } else{
            obj[property] = val2;
        }
    }
    return obj;
}
function isArray(val){
    return Object.prototype.toString.call(val)=='[object Array]'
}
function isObject(val){
    return typeof val ==='object' && val!=null;
}
/**
*把一个对象传递拷贝给另外一个对线
*原对象与拷贝后的对象没有引用关系
 */
function deepCopy(obj1){
    var obj = isArray(obj1)? []: {};
    for(var key in obj1){
        if(isObject(obj1[key])){
            obj[key] = deepCopy(obj1[key])
        }
        else{
            obj[key] = obj1[key];
        }
        
    }
    return obj;
}
export default {isArray, isObject, deepCopy, deepMerge, mergeConfig};