var count = 0;
$(document).ready(function() {
   
    $('#data1').css('background-color','rgb(0, 0, 0)')
    $('#data3').css('background-color','rgb(0, 0, 0)')
    $('#data5').css('background-color','rgb(0, 0, 0)')
    $('#data7').css('background-color','rgb(0, 0, 0)')
    $('#data9').css('background-color','rgb(0, 0, 0)')
    
})

$('#data1').on('click' , function() {

    if(count == 10){
        alert('you lose')
    }
    else{
    count++;
    if ($("#data1").css('background-color')=="rgb(0, 0, 0)") {
        $('#data1').css('background-color','rgb(255, 255, 255)')
        if($("#data2").css('background-color')=="rgb(0, 0, 0)"){
           $('#data2').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#data2').css('background-color','rgb(0, 0, 0)')
        }
        if($("#data4").css('background-color')=="rgb(0, 0, 0)"){
            $('#data4').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data4').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#data1').css('background-color','rgb(0, 0, 0)')
        if($("#data2").css('background-color')=="rgb(0, 0, 0)"){
            $('#data2').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data2').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data4").css('background-color')=="rgb(0, 0, 0)"){
             $('#data4').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#data4').css('background-color','rgb(0, 0, 0)')
          }
    }
}

if($("#data1").css('background-color') == "rgb(255, 255, 255)" && $("#data2").css('background-color') == "rgb(255, 255, 255)" && $("#data3").css('background-color') == "rgb(255, 255, 255)" && $("#data4").css('background-color') == "rgb(255, 255, 255)" && $("#data5").css('background-color') == "rgb(255, 255, 255)" && $("#data6").css('background-color') == "rgb(255, 255, 255)" && $("#data7").css('background-color') == "rgb(255, 255, 255)" && $("#data8").css('background-color') == "rgb(255, 255, 255)" && $("#data9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}  
})

$('#data2').on('click' , function() {

    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#data2").css('background-color')=="rgb(0, 0, 0)") {
        $('#data2').css('background-color','rgb(255, 255, 255)')
        if($("#data1").css('background-color')=="rgb(0, 0, 0)"){
           $('#data1').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#data1').css('background-color','rgb(0, 0, 0)')
        }
        if($("#data3").css('background-color')=="rgb(0, 0, 0)"){
            $('#data3').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data3').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data5").css('background-color')=="rgb(0, 0, 0)"){
            $('#data5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data5').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#data2').css('background-color','rgb(0, 0, 0)')
        if($("#data1").css('background-color')=="rgb(0, 0, 0)"){
            $('#data1').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data1').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data3").css('background-color')=="rgb(0, 0, 0)"){
             $('#data3').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#data3').css('background-color','rgb(0, 0, 0)')
          }
          if($("#data5").css('background-color')=="rgb(0, 0, 0)"){
            $('#data5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data5').css('background-color','rgb(0, 0, 0)')
         }
    }
}
if($("#data1").css('background-color') == "rgb(255, 255, 255)" && $("#data2").css('background-color') == "rgb(255, 255, 255)" && $("#data3").css('background-color') == "rgb(255, 255, 255)" && $("#data4").css('background-color') == "rgb(255, 255, 255)" && $("#data5").css('background-color') == "rgb(255, 255, 255)" && $("#data6").css('background-color') == "rgb(255, 255, 255)" && $("#data7").css('background-color') == "rgb(255, 255, 255)" && $("#data8").css('background-color') == "rgb(255, 255, 255)" && $("#data9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}
})

$('#data4').on('click' , function() {

    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#data4").css('background-color')=="rgb(0, 0, 0)") {
        $('#data4').css('background-color','rgb(255, 255, 255)')
        if($("#data1").css('background-color')=="rgb(0, 0, 0)"){
           $('#data1').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#data1').css('background-color','rgb(0, 0, 0)')
        }
        if($("#data7").css('background-color')=="rgb(0, 0, 0)"){
            $('#data7').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data7').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data5").css('background-color')=="rgb(0, 0, 0)"){
            $('#data5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data5').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#data4').css('background-color','rgb(0, 0, 0)')
        if($("#data1").css('background-color')=="rgb(0, 0, 0)"){
            $('#data1').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data1').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data7").css('background-color')=="rgb(0, 0, 0)"){
             $('#data7').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#data7').css('background-color','rgb(0, 0, 0)')
          }
          if($("#data5").css('background-color')=="rgb(0, 0, 0)"){
            $('#data5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data5').css('background-color','rgb(0, 0, 0)')
         }
    }
}
if($("#data1").css('background-color') == "rgb(255, 255, 255)" && $("#data2").css('background-color') == "rgb(255, 255, 255)" && $("#data3").css('background-color') == "rgb(255, 255, 255)" && $("#data4").css('background-color') == "rgb(255, 255, 255)" && $("#data5").css('background-color') == "rgb(255, 255, 255)" && $("#data6").css('background-color') == "rgb(255, 255, 255)" && $("#data7").css('background-color') == "rgb(255, 255, 255)" && $("#data8").css('background-color') == "rgb(255, 255, 255)" && $("#data9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}
})

$('#data6').on('click' , function() {

    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#data6").css('background-color')=="rgb(0, 0, 0)") {
        $('#data6').css('background-color','rgb(255, 255, 255)')
        if($("#data9").css('background-color')=="rgb(0, 0, 0)"){
           $('#data9').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#data9').css('background-color','rgb(0, 0, 0)')
        }
        if($("#data3").css('background-color')=="rgb(0, 0, 0)"){
            $('#data3').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data3').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data5").css('background-color')=="rgb(0, 0, 0)"){
            $('#data5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data5').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#data6').css('background-color','rgb(0, 0, 0)')
        if($("#data9").css('background-color')=="rgb(0, 0, 0)"){
            $('#data9').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data9').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data3").css('background-color')=="rgb(0, 0, 0)"){
             $('#data3').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#data3').css('background-color','rgb(0, 0, 0)')
          }
          if($("#data5").css('background-color')=="rgb(0, 0, 0)"){
            $('#data5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data5').css('background-color','rgb(0, 0, 0)')
         }
    }
}
if($("#data1").css('background-color') == "rgb(255, 255, 255)" && $("#data2").css('background-color') == "rgb(255, 255, 255)" && $("#data3").css('background-color') == "rgb(255, 255, 255)" && $("#data4").css('background-color') == "rgb(255, 255, 255)" && $("#data5").css('background-color') == "rgb(255, 255, 255)" && $("#data6").css('background-color') == "rgb(255, 255, 255)" && $("#data7").css('background-color') == "rgb(255, 255, 255)" && $("#data8").css('background-color') == "rgb(255, 255, 255)" && $("#data9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}  
})

$('#data8').on('click' , function() {
    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#data8").css('background-color')=="rgb(0, 0, 0)") {
        $('#data8').css('background-color','rgb(255, 255, 255)')
        if($("#data7").css('background-color')=="rgb(0, 0, 0)"){
           $('#data7').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#data7').css('background-color','rgb(0, 0, 0)')
        }
        if($("#data9").css('background-color')=="rgb(0, 0, 0)"){
            $('#data9').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data9').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data5").css('background-color')=="rgb(0, 0, 0)"){
            $('#data5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data5').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#data8').css('background-color','rgb(0, 0, 0)')
        if($("#data7").css('background-color')=="rgb(0, 0, 0)"){
            $('#data7').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data7').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data9").css('background-color')=="rgb(0, 0, 0)"){
             $('#data9').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#data9').css('background-color','rgb(0, 0, 0)')
          }
          if($("#data5").css('background-color')=="rgb(0, 0, 0)"){
            $('#data5').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data5').css('background-color','rgb(0, 0, 0)')
         }
    }
}
if($("#data1").css('background-color') == "rgb(255, 255, 255)" && $("#data2").css('background-color') == "rgb(255, 255, 255)" && $("#data3").css('background-color') == "rgb(255, 255, 255)" && $("#data4").css('background-color') == "rgb(255, 255, 255)" && $("#data5").css('background-color') == "rgb(255, 255, 255)" && $("#data6").css('background-color') == "rgb(255, 255, 255)" && $("#data7").css('background-color') == "rgb(255, 255, 255)" && $("#data8").css('background-color') == "rgb(255, 255, 255)" && $("#data9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}
})

$('#data5').on('click' , function() {
    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#data5").css('background-color')=="rgb(0, 0, 0)") {
        $('#data5').css('background-color','rgb(255, 255, 255)')
        if($("#data2").css('background-color')=="rgb(0, 0, 0)"){
           $('#data2').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#data2').css('background-color','rgb(0, 0, 0)')
        }
        if($("#data4").css('background-color')=="rgb(0, 0, 0)"){
            $('#data4').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data4').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data6").css('background-color')=="rgb(0, 0, 0)"){
            $('#data6').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data6').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data8").css('background-color')=="rgb(0, 0, 0)"){
            $('#data8').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data8').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#data5').css('background-color','rgb(0, 0, 0)')
        if($("#data2").css('background-color')=="rgb(0, 0, 0)"){
            $('#data2').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data2').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data4").css('background-color')=="rgb(0, 0, 0)"){
             $('#data4').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#data4').css('background-color','rgb(0, 0, 0)')
          }
          if($("#data6").css('background-color')=="rgb(0, 0, 0)"){
            $('#data6').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data6').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data8").css('background-color')=="rgb(0, 0, 0)"){
            $('#data8').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data8').css('background-color','rgb(0, 0, 0)')
         }
    }
}

if($("#data1").css('background-color') == "rgb(255, 255, 255)" && $("#data2").css('background-color') == "rgb(255, 255, 255)" && $("#data3").css('background-color') == "rgb(255, 255, 255)" && $("#data4").css('background-color') == "rgb(255, 255, 255)" && $("#data5").css('background-color') == "rgb(255, 255, 255)" && $("#data6").css('background-color') == "rgb(255, 255, 255)" && $("#data7").css('background-color') == "rgb(255, 255, 255)" && $("#data8").css('background-color') == "rgb(255, 255, 255)" && $("#data9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}
})

$('#data3').on('click' , function() {
    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#data3").css('background-color')=="rgb(0, 0, 0)") {
        $('#data3').css('background-color','rgb(255, 255, 255)')
        if($("#data2").css('background-color')=="rgb(0, 0, 0)"){
           $('#data2').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#data2').css('background-color','rgb(0, 0, 0)')
        }
        if($("#data6").css('background-color')=="rgb(0, 0, 0)"){
            $('#data6').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data6').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#data3').css('background-color','rgb(0, 0, 0)')
        if($("#data2").css('background-color')=="rgb(0, 0, 0)"){
            $('#data2').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data2').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data6").css('background-color')=="rgb(0, 0, 0)"){
             $('#data6').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#data6').css('background-color','rgb(0, 0, 0)')
          }console.log(count);
    }
}
if($("#data1").css('background-color') == "rgb(255, 255, 255)" && $("#data2").css('background-color') == "rgb(255, 255, 255)" && $("#data3").css('background-color') == "rgb(255, 255, 255)" && $("#data4").css('background-color') == "rgb(255, 255, 255)" && $("#data5").css('background-color') == "rgb(255, 255, 255)" && $("#data6").css('background-color') == "rgb(255, 255, 255)" && $("#data7").css('background-color') == "rgb(255, 255, 255)" && $("#data8").css('background-color') == "rgb(255, 255, 255)" && $("#data9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
} 
})
$('#data7').on('click' , function() {

    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#data7").css('background-color')=="rgb(0, 0, 0)") {
        $('#data7').css('background-color','rgb(255, 255, 255)')
        if($("#data8").css('background-color')=="rgb(0, 0, 0)"){
           $('#data8').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#data8').css('background-color','rgb(0, 0, 0)')
        }
        if($("#data4").css('background-color')=="rgb(0, 0, 0)"){
            $('#data4').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data4').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#data7').css('background-color','rgb(0, 0, 0)')
        if($("#data8").css('background-color')=="rgb(0, 0, 0)"){
            $('#data8').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data8').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data4").css('background-color')=="rgb(0, 0, 0)"){
             $('#data4').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#data4').css('background-color','rgb(0, 0, 0)')
          }
    }console.log(count);
}
if($("#data1").css('background-color') == "rgb(255, 255, 255)" && $("#data2").css('background-color') == "rgb(255, 255, 255)" && $("#data3").css('background-color') == "rgb(255, 255, 255)" && $("#data4").css('background-color') == "rgb(255, 255, 255)" && $("#data5").css('background-color') == "rgb(255, 255, 255)" && $("#data6").css('background-color') == "rgb(255, 255, 255)" && $("#data7").css('background-color') == "rgb(255, 255, 255)" && $("#data8").css('background-color') == "rgb(255, 255, 255)" && $("#data9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}
})
$('#data9').on('click' , function() {
    count++;
    if(count == 10){
        alert('you lose')
    }
    else{
    if ($("#data9").css('background-color')=="rgb(0, 0, 0)") {
        $('#data9').css('background-color','rgb(255, 255, 255)')
        if($("#data6").css('background-color')=="rgb(0, 0, 0)"){
           $('#data6').css('background-color','rgb(255, 255, 255)')
        } else {
            $('#data6').css('background-color','rgb(0, 0, 0)')
        }
        if($("#data8").css('background-color')=="rgb(0, 0, 0)"){
            $('#data8').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data8').css('background-color','rgb(0, 0, 0)')
         }

    } else {
        $('#data9').css('background-color','rgb(0, 0, 0)')
        if($("#data6").css('background-color')=="rgb(0, 0, 0)"){
            $('#data6').css('background-color','rgb(255, 255, 255)')
         } else {
             $('#data6').css('background-color','rgb(0, 0, 0)')
         }
         if($("#data8").css('background-color')=="rgb(0, 0, 0)"){
             $('#data8').css('background-color','rgb(255, 255, 255)')
          } else {
              $('#data8').css('background-color','rgb(0, 0, 0)')
          }
    }

}

if($("#data1").css('background-color') == "rgb(255, 255, 255)" && $("#data2").css('background-color') == "rgb(255, 255, 255)" && $("#data3").css('background-color') == "rgb(255, 255, 255)" && $("#data4").css('background-color') == "rgb(255, 255, 255)" && $("#data5").css('background-color') == "rgb(255, 255, 255)" && $("#data6").css('background-color') == "rgb(255, 255, 255)" && $("#data7").css('background-color') == "rgb(255, 255, 255)" && $("#data8").css('background-color') == "rgb(255, 255, 255)" && $("#data9").css('background-color') == "rgb(255, 255, 255)") {
    alert('yuo won')
}
})