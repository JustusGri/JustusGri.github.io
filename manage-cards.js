
var num = 1;
function addcard(i) 
{
    
    var num_str = num.toString();
    var card_id = "card" + num_str;

    console.log(card_id)
    var the_card = '<br><div class="card" id='+card_id+' > <div class="card-title text-right"> <a href="#" class="btn btn-outline-danger" onclick="deleteCard('+card_id+')" >Remove</a> </div>   <img class="mx-auto d-block" style="text-align:center; width: 25%; height: 25%;" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="Card image cap"> <div class="card-body text-right"> <h4>Tweet</h4> <p class="card-text"> This is a sample tweet! </p>            </h4></div>';
    var tweet = $(the_card);
    
    tweet.appendTo('#interest' + i);

    num++;
}



function deleteCard(id)
{
    id.remove()
}