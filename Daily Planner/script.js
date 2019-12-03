var hour;
function getHour(){
$.ajax({
    url:"http://worldclockapi.com/api/json/cst/now",
    method: "GET"
}).then(function(response){

    console.log(response)

    var dateString = response.currentDateTime;

    hour = dateString.slice(11, 13);

    setRowColors()

})
}

function setRowColors(){

    var rowNames = ["row1", "row2", "row3", "row4", "row5", "row6", "row7", "row8"];

    for(var i=0; i<9;i++){
        var rowString = "tr:eq(" + i + ")";
        var cellTime=    $('#tableyy').find(rowString).find("td:eq(0)").html();
        var rowStyle;

        if (hour>cellTime){
        $(rowNames[i]).addclass("past");
    }
        else if (hour=cellTime){
            $(rowNames[i]).addclass("present");
        }
        else {
            $(rowNames[i]).addclass("future");
        }
}







}
function localStore(){
$(".input").html();
localStorage.content= $(".input").html();
$(".input").html(localStorage.content)

}

$(".localSave").click(localStore());