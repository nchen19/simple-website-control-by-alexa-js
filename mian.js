var productString = " ";

var image = "";
function showFullImage(image) {
    /*
if(image == "computer")
{
 document.getElementById("myCheck3").click();
}
else if(image == "light")
{
document.getElementById("myCheck1").click();
}
else if(image == "comb")
{
  document.getElementById("myCheck2").click();
}
else if(image == "banana")
{
  document.getElementById("myCheck21").click();
}
else if(image == "glasses")
{
  document.getElementById("myCheck22").click();
}
else if(image == "home page")
{
  document.getElementById("myCheck41").click();
}
else if(image == "about page")
{
  document.getElementById("myCheck42").click();
}
else if(image == "contact page")
{
  document.getElementById("myCheck43").click();
}
else if(image == "cart")
{
  document.getElementById("myCheck44").click();
}
else if(image == "check")
{
  document.getElementById("myCheck45").click();
}
 
else if(image == "check out")
{
  document.getElementById("myCheck46").click();
}
*/
    if (image === "computer") {
        document.getElementById("myCheck3").click();
    }
    else if (image === "light") {
        document.getElementById("myCheck1").click();
    }
    else if (image === "iron comb") {
        document.getElementById("myCheck2").click();
    }
    else if (image === "earphone") {
        document.getElementById("myCheck4").click();
    }
    else if (image === "timer") {
        document.getElementById("myCheck5").click();
    }
    else if (image === "phone") {
        document.getElementById("myCheck6").click();
    }
    else if (image === "cable") {
        document.getElementById("myCheck7").click();
    }
    else if (image === "pan") {
        document.getElementById("myCheck8").click();
    }
    else if (image === "echo") {
        document.getElementById("myCheck9").click();
    }
    else if (image === "magazine") {
        document.getElementById("myCheck10").click();
    }
    else if (image === "weigher") {
        document.getElementById("myCheck11").click();
    }
    else if (image === "towel") {
        document.getElementById("myCheck12").click();
    }
    else if (image === "sun glasses") {
        document.getElementById("myCheck13").click();
    }
    else if (image === "trash can") {
        document.getElementById("myCheck14").click();
    }
    else if (image === "speaker") {
        document.getElementById("myCheck15").click();
    }
    else if (image === "usb") {
        document.getElementById("myCheck16").click();
    }
    else if (image === "patch board") {
        document.getElementById("myCheck17").click();
    }
    else if (image === "mouse") {
        document.getElementById("myCheck18").click();
    }
    else if (image === "head phone") {
        document.getElementById("myCheck19").click();
    }
    else if (image === "gopro") {
        document.getElementById("myCheck20").click();
    }
    else if (image === "banana") {
        document.getElementById("myCheck21").click();
    }
    else if (image === "glasses") {
        document.getElementById("myCheck22").click();
    }
    else if (image === "bag") {
        document.getElementById("myCheck23").click();
    }
    else if (image === "iron man") {
        document.getElementById("myCheck24").click();
    }
    else if (image === "tree man") {
        document.getElementById("myCheck25").click();
    }
    else if (image === "shirt") {
        document.getElementById("myCheck26").click();
    }
    else if (image === "toy") {
        document.getElementById("myCheck27").click();
    }
    else if (image === "cup") {
        document.getElementById("myCheck28").click();
    }
    else if (image === "plant") {
        document.getElementById("myCheck29").click();
    }
    else if (image === "soldier") {
        document.getElementById("myCheck30").click();
    }
    else if (image === "star war") {
        document.getElementById("myCheck31").click();
    }
    else if (image === "nutella") {
        document.getElementById("myCheck32").click();
    }
    else if (image === "watch") {
        document.getElementById("myCheck33").click();
    }
    else if (image === "room") {
        document.getElementById("myCheck34").click();
    }
    else if (image === "beer battered") {
        document.getElementById("myCheck35").click();
    }
    else if (image === "golf") {
        document.getElementById("myCheck36").click();
    }
    else if (image === "crown") {
        document.getElementById("myCheck37").click();
    }
    else if (image === "lucky charms") {
        document.getElementById("myCheck38").click();
    }
    else if (image === "tyson") {
        document.getElementById("myCheck39").click();
    }
    else if (image === "kettle") {
        document.getElementById("myCheck40").click();
    }
    else if (image === "cart") {
        document.getElementById("myCheck44").click();
    }
    else if (image === "check") {
        document.getElementById("myCheck45").click();
    }
    else if (image === "check out") {
        document.getElementById("myCheck46").click();
    }
    else if (image === "in") {
        document.getElementById("myCheck47").click();
    }
    else if (image === "register") {
        document.getElementById("myCheck48").click();
    }
    else if (image === "page") {
        document.getElementById("myCheck49").click();
    }
    else if (image === "back") {
        document.getElementById("myCheck50").click();
    }
    else if (image === "man clothes") {
        document.getElementById("myCheck51").click(); 
    }
    else if (image === "woman clothes") {
        document.getElementById("myCheck52").click();
    }
    else if (image === "shoe") {
        document.getElementById("myCheck53").click();
    }
    else if (image === "book") {
        document.getElementById("myCheck54").click();
    }
    else if (image === "food") {
        document.getElementById("myCheck55").click();
    }
    else if (image === "medicines") {
        document.getElementById("myCheck56").click();
    }
    else if (image === "drink") {
        document.getElementById("myCheck57").click();
    }
    else if (image === "hats") {
        document.getElementById("myCheck58").click();
    }

    document.getElementById("myproduct1").value = image;

}
function refresh() {
    /*
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://ow0a3x3we4.execute-api.us-east-1.amazonaws.com/prod", true);
    xhttp.send();
    xhttp.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        productString = response.productshop;
            console.log(productString);
        showFullImage(productString);
          
        if(productString=="banana"||productString=="glasses"||productString=="computer"||productString=="light"||productString=="comb"||productString=="check"||productString=="cart"||productString=="check out"||productString=="Linda"||productString=="pan")
        {
          showFullImage(productString);
        }
        else if(productString=="goback"){
          showFullImage(productString);
        } 
          
      }
    }
     */
    //var API_URL = document.getElementById('textdata4').value;
    var API_URL = 'https://ow0a3x3we4.execute-api.us-east-1.amazonaws.com/prod';

    $(function () {

        var $data1 = $('#entries');
        // data2 = $('#myproduct').val();
        $.ajax({
            type: 'GET',
            url: API_URL,

            success: function (data) {

                console.log('success', data);
                $.each(data, function (i, order) {
                    console.log(order);
                    $data1.append('<li>account: ' + order + '</li>');
                    showFullImage(order);
                });
            }
        });




        $.ajax({
            type: 'POST',
            url: API_URL,
            data: JSON.stringify({ "message": $('#myproduct').val() }),
            contentType: "application/json",

            success: function (neworder) {
                console.log(neworder);
                $data1.append('<li>account then: ' + neworder + '</li>');
            }
        });


    });



    setTimeout(refresh, 2000);
}
refresh();
