var container = document.getElementById('center_column')
var button = document.getElementById('btn')
var input = document.getElementById('input1')
var httpRequest = new XMLHttpRequest();

document.getElementById("btn").addEventListener("click", function(){


if(httpRequest.readyState === 4){
  if(httpRequest.status < 400){
    var result = JSON.parse(httpRequest.responseText)
      for (var i = 0; i < result.Search.length; i++) {
            console.log(result.Search[i])
        var newNode=document.createElement("p")
          container.appendChild(newNode);
          newNode.innerHTML = result.Search[i].Title + "<br>" + "<img src=" + result.Search[i].Poster +"/>";
        }

  }
}





httpRequest.open("GET", "http://www.omdbapi.com/?s=minions")
  httpRequest.send();


    })
