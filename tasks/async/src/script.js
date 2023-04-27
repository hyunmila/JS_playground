function mocker(data) {
    // your code...
    function newfun(){
        const promiseObj = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(data);
            },1000);
        });
        return promiseObj;
    }
    return newfun;
}
module.exports.mocker=mocker;
