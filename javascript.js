var message = ['You Won','You Lost','You Tie']

var images=['./images/scissor.png','./images/stone.png','./images/paper.png']

var beforeElem =`<div class="background1" id="box1">
<div class="item-2-1">
    <img id="image1" onclick="compSelect(this.id,this.src)" src="./images/scissor.png" alt="">            
</div>
</div>
<div class="background2"  id="box3">
<div class="item-2-2">
    <img id="image2" onclick="compSelect(this.id,this.src)" src="./images/stone.png" alt="">
</div>
</div>
<div class="background3"  id="box4">
<div class="item-2-3">
    <img id="image3" onclick="compSelect(this.id,this.src)" src="./images/paper.png" alt="">
</div>
</div>            
<button id="retry" onclick="reset()">Try Again</button>
`;

function popup(){
    let target = document.getElementById("add_popup")
    item =`
    <div class="cross-sign" onclick="closeMessage()">X</div>
    <div class="popup">
        <ul>
        <center><h2 style="color:white;">Game Rules</h2></center>
        <li><span>Rock beats scissors, scissors beat paper, and paper beats rock.</span></li>
        <li><span>Agree ahead of time whether you’ll count off “rock, paper, scissors, shoot” or just “rock, paper, scissors.”</span></li>
        <li><span>Use rock, paper, scissors to settle minor decisions or simply play to pass the time.</span></li>
        <li><span>If both players lay down the same hand, each player lays down another hand.</span></li>
        </ul>
    </div>`;
    target.innerHTML=item;
}

function closeMessage(){
    document.getElementById("add_popup").innerHTML="";
}

function compSelect(id,path){
    let x = Math.floor((Math.random() * 3) + 1);//generate random number between 1 to 3.
    computer=x-1;
    item1=`<p id="chosen1">You Selected</p>
    <div class="background1" id="box1">
    <div class="item-2-1">
        <img id="image1"  src="`+path+`" alt="">            
    </div>
</div>`;
item2=`   
<p id="chosen2">PC Selected</p>
<div class="background2"  id="boxUser" style="background-color:red;">
<div class="item-2-2" >
        <img id="image2"  src="`+images[computer]+`" alt="">
    </div>
</div>`;
    if(id=="image1"){
        if(computer == 0){//tie
            decision=`
                    <div class="decision"  id="box2">
                        <p>`+message[computer+2]+`</p>
                        <p>Against PC</p>
                        <button type="submit" onclick="replay()" id="button_1">Play Again</button>
                    </div>`;
            var target = document.getElementById('results');
            target.innerHTML=item1+decision+item2;
       
        } else if(computer == 1){//lost
            decision=`
            <div class="decision"  id="box2">
                <p>`+message[computer]+`</p>
                <p>Against PC</p>
                <button type="submit" onclick="replay()" id="button_1">Play Again</button>
                </div>`;
            var target = document.getElementById('results');
            target.innerHTML=item1+decision+item2;
            }
            else{//won case
                decision=`
                    <div class="decision"  id="box2">
                        <p>`+message[computer-2]+`</p>
                        <p>Against PC</p>
                        <button type="submit" onclick="replay()" id="button_1">Play Again</button>
                    </div>`;
            var target = document.getElementById('results');
            target.innerHTML=item1+decision+item2;
            var y = document.getElementsByClassName('onboard')[0].innerHTML;
            document.getElementsByClassName('onboard')[0].innerHTML = parseInt(y) + 1;
            }
    }

    else if(id=="image2"){
        if(computer == 2){//tie
            decision=`
                    <div class="decision"  id="box2">
                        <p>`+message[computer-1]+`</p>
                        <p>Against PC</p>
                        <button type="submit" onclick="replay()" id="button_1">Play Again</button>
                    </div>`;
            var target = document.getElementById('results');
            target.innerHTML=item1+decision+item2;
       
        } else if(computer == 1){//lost
            decision=`
            <div class="decision"  id="box2">
                <p>`+message[computer+1]+`</p>
                <p>Against PC</p>
                <button type="submit" onclick="replay()" id="button_1">Play Again</button>
                </div>`;
            var target = document.getElementById('results');
            target.innerHTML=item1+decision+item2;
            }
            else{//won case
                decision=`
                    <div class="decision"  id="box2">
                        <p>`+message[computer]+`</p>
                        <p>Against PC</p>
                        <button type="submit" onclick="replay()" id="button_1">Play Again</button>
                    </div>`;
            var target = document.getElementById('results');
            target.innerHTML=item1+decision+item2;
            var y = document.getElementsByClassName('onboard')[0].innerHTML;
            document.getElementsByClassName('onboard')[0].innerHTML = parseInt(y) + 1;
            }
    }
    else if(id=="image3"){
        if(computer == 2){//tie
            decision=`
                    <div class="decision"  id="box2">
                        <p>`+message[computer]+`</p>
                        <p>Against PC</p>
                        <button type="submit" onclick="replay()" id="button_1">Play Again</button>
                    </div>`;
            var target = document.getElementById('results');
            target.innerHTML=item1+decision+item2;
       
        } else if(computer == 0){//lost
            decision=`
            <div class="decision"  id="box2">
                <p>`+message[computer+1]+`</p>
                <p>Against PC</p>
                <button type="submit" onclick="replay()" id="button_1">Play Again</button>
                </div>`;
            var target = document.getElementById('results');
            target.innerHTML=item1+decision+item2;
            }
            else{//won case
                decision=`
                    <div class="decision"  id="box2">
                        <p>`+message[computer-1]+`</p>
                        <p>Against PC</p>
                        <button type="submit" onclick="replay()" id="button_1">Play Again</button>
                    </div>`;
            var target = document.getElementById('results');
            target.innerHTML=item1+decision+item2;
            var y = document.getElementsByClassName('onboard')[0].innerHTML;
            document.getElementsByClassName('onboard')[0].innerHTML = parseInt(y) + 1;
            }
    }
}

function replay(){
    var target = document.getElementById('results');
    target.innerHTML=beforeElem;
}

function reset(){
    var y = document.getElementsByClassName('onboard')[0].innerHTML;
    document.getElementsByClassName('onboard')[0].innerHTML = 0;
    document.getElementById('retry').remove();
}