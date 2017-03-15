import axios from 'axios'

const url = 'http://shinnypub.oss-cn-hangzhou.aliyuncs.com/publicdata_test/latest.json';

const InsServe = {
    sourceJson: {}
};

function initInsServe(){
    InsServe.getInsByInsid = function(){
        
    }
}

axios.get(url).then(function(response){
    InsServe.sourceJson = response.data;
    initInsServe();
}, function(error){
    console.error(error);
    return Promise.reject(error);
});

export default InsServe