var page_num = 0;
function makeApiCall() {
    var pics = document.getElementById("num_pics").value;
    var tag = document.getElementById("tags").value;
    page_num = page_num+1;
    
    console.log(page_num);
    var url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d6a4c77b37dd11851f74c255e85242cc&tags=${tag}&extras=url_q&per_page=${pics}&page=${page_num}&format=json&nojsoncallback=1`;
    
    
    var img_link;
    var img_title;

     
    $.ajax({url:url, dataType:"json"}).then(function(data) {

        document.getElementById("img_space").innerHTML = "";
        

        for(var i = 0; i < pics; i++)
        {
            img_link = data.photos.photo[i].url_q;
            img_title = data.photos.photo[i].title;
        
            
        

            

            document.getElementById("img_space").innerHTML = document.getElementById("img_space").innerHTML + '<div class="card" style="width: 18rem;display: inline-block;"><img class="card-img-top" src='+img_link+' alt="Card image cap"><div class="card-body"><p class="card-text">'+img_title+'</p></div></div>';

            


         }
        
         
    
    
    
    
    
    
    
    
    });

}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        makeApiCall();
    }
};