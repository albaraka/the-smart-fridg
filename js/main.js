$('.door').click(function(){
    $('.door').toggleClass('doorOpen');
  });

  
  var image1blue = "5555555"
  var image1White = "5555555"
  var arrayImage = [{ white:"https://image.flaticon.com/icons/svg/135/135446.svg",blue : "https://image.flaticon.com/icons/svg/135/135677.svg" },
  {  white:"https://image.flaticon.com/icons/svg/135/135393.svg",blue : "https://image.flaticon.com/icons/svg/135/135624.svg"},
{white:"https://image.flaticon.com/icons/svg/135/135421.svg",blue:"https://image.flaticon.com/icons/svg/135/135652.svg"},
{ white:"https://image.flaticon.com/icons/svg/135/135397.svg",blue:"https://image.flaticon.com/icons/svg/135/135628.svg"},
{white:"https://image.flaticon.com/icons/svg/135/135471.svg", blue:"https://image.flaticon.com/icons/svg/135/135702.svg"  },
{  white:"https://image.flaticon.com/icons/svg/1071/1071223.svg" ,blue:"https://image.flaticon.com/icons/svg/1071/1071121.svg"},
{  white:"https://image.flaticon.com/icons/svg/135/135365.svg",blue:"https://image.flaticon.com/icons/svg/135/135596.svg"} ,
{white:"https://image.flaticon.com/icons/svg/135/135470.svg",blue:"https://image.flaticon.com/icons/svg/135/135701.svg"},
{white:"https://image.flaticon.com/icons/svg/415/415785.svg",blue:"https://image.flaticon.com/icons/png/512/415/415734.png"},
{white:"https://image.flaticon.com/icons/svg/135/135398.svg",blue:"https://image.flaticon.com/icons/svg/135/135629.svg"},
{white:"https://image.flaticon.com/icons/svg/193/193858.svg",blue:"https://image.flaticon.com/icons/svg/184/184507.svg"},
{white:"https://image.flaticon.com/icons/svg/135/135419.svg",blue:"https://image.flaticon.com/icons/svg/135/135650.svg"}

]
  var arrayImageWhite = [image1White]


// alert((".row > img").length);
var foodlist=[0,0,0,0,0,0,0,0,0,0,0,0];
// var foodlist=[];

for (let index = 0; index < (".row > img").length+2; index++) {
  $('#chngeimg'+index).click(function(){
    let src = $('#chngeimg'+index).attr("src")
    // alert(src)
    if (src === arrayImage[index].blue) {
    $('#chngeimg'+index).attr("src" , arrayImage[index].white)
    foodlist[index] = 0
    }
    else {
    $('#chngeimg'+index).attr("src" , arrayImage[index].blue)
    //foodlist($(this).attr("listId"));
    foodlist[index]=1;
    }
  })

}



/*$('#foodbtn').click(function(){
  
  var clean = true

for (let index = 0; index < foodlist.length; index++) {
  if (foodlist[index] === 1) {
    clean = false
  }
  
}
  if (clean === true) {
    document.getElementById('food').innerHTML='';
    // alert("ggg")
  }
})*/


function foodlist(a){
  console.log(a);
  // foodarray.push(a);  
}
document.getElementById('foodbtn').addEventListener('click',function(){
  document.getElementById('food').innerHTML='';
  /*document.getElementById('food').innerHTML=foodlist;*/
  // var foodarray=[];
  if(foodlist[0]==1){
    $('#food').append("<img src='https://image.flaticon.com/icons/svg/135/135677.svg' width='50px' height='50px' >")
  
}
if(foodlist[1]==1){
  $('#food').append("<img src='https://image.flaticon.com/icons/svg/135/135624.svg' width='50px' height='50px' >")

}
if(foodlist[2]==1){
  $('#food').append("<img src='https://image.flaticon.com/icons/svg/135/135652.svg' width='50px' height='50px' >")
}
if(foodlist[3]==1){
  $('#food').append("<img src='https://image.flaticon.com/icons/svg/135/135628.svg' width='50px' height='50px' >")
}
if(foodlist[4]==1){
  $('#food').append("<img src='https://image.flaticon.com/icons/svg/135/135702.svg' width='50px' height='50px' >")
  
}
if(foodlist[5]==1){
  // foodarray.push("milk");
  $('#food').append("<img src='https://image.flaticon.com/icons/svg/1071/1071121.svg' width='50px' height='50px' >")
}
if(foodlist[6]==1){
  $('#food').append("<img src='https://image.flaticon.com/icons/svg/135/135596.svg' width='50px' height='50px' >")
}
if(foodlist[7]==1){
  $('#food').append("<img src='https://image.flaticon.com/icons/svg/415/415734.svg' width='50px' height='50px' >")
}
if(foodlist[8]==1){
  $('#food').append("<img src='https://image.flaticon.com/icons/svg/135/135629.svg' width='50px' height='50px' >")
}
if(foodlist[9]==1){
  $('#food').append("<img src='https://image.flaticon.com/icons/svg/184/184507.svg' width='50px' height='50px' >")
}
if(foodlist[10]==1){
  $('#food').append("<img src='https://image.flaticon.com/icons/svg/415/415785.svg' width='50px' height='50px' >")
}
if(foodlist[11]==1){
  $('#food').append("<img src='https://image.flaticon.com/icons/svg/135/135471.svg' width='50px' height='50px' >")
}

// document.getElementById('food').innerHTML=foodarray;
})

