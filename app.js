    function addValue(num){
        var inputField = document.getElementById("inputField")
        // console.log("inputField" , inputField.value)
        inputField.value += num
    }

    function result(){
        var inputField = document.getElementById("inputField")
        inputField.value  = eval(inputField.value)
    }
    function singleClear(){
        var inputField = document.getElementById("inputField")
        inputField.value  = inputField.value.slice(0,-1)
    }
    function allClear(){
        var inputField = document.getElementById("inputField")
        inputField.value  = ""
    }