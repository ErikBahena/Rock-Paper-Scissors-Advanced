class gamePlayView {

    _paperBtn = document.querySelector(".blue-paper");

    _scissorsBtn = document.querySelector(".yellow-scissors");

    _rockBtn = document.querySelector(".red-rock");

    _triangleSectionContainer = document.querySelector(".triangle-img-container");

    _youPickedStage  = document.querySelector(".you-picked-stage");

    _yourPuckContainer = document.querySelector(".your-puck-container");

    _theHousePuckContainer = document.querySelector(".the-house-puck-container");

    addInitialPuckHandlers = function (){
    
        [this._paperBtn, this._rockBtn, this._scissorsBtn].forEach( btn => btn.addEventListener( "click", this._youPicked.bind(this)))
    }

    _youPicked(e){
        const pickedPlayAsElement = e.target.closest(".outer-play-container")
        const pickedPlay = pickedPlayAsElement.classList[2];
      
        this._youPickedUpdateView(pickedPlay, pickedPlayAsElement);
    }
    _youPickedUpdateView(play, playElement){
       
        this._changeDefaultViewToYourPickView();

        // Insert the users pick into the new view
        this._yourPuckContainer.insertAdjacentElement("afterbegin", playElement)
        

        this._alterPuckStyles(playElement)

        // Computers turn
        const [housePick, houseElement] = this._generateTheHouseChoice();

        // insert that house pick into the house pick container

        this._theHousePuckContainer.insertAdjacentHTML("afterbegin", this._generateTheHouseChoiceHtml(housePick))

        // create new html element
        

        // alter stying to these elements
        this._alterPuckStyles(document.querySelector(".clone").closest(".outer-play-container"));
        
    }
    _alterPuckStyles(puck){

        puck.style.top = "unset";
        puck.style.bottom = "unset";
        puck.style.right = "unset";
        puck.style.left = "unset";
        puck.style.position = "unset";
        puck.classList.remove("hover-puck");

        if(puck.classList.contains("clone")){
            puck.style.height = "unset"
            // puck.style.borderRadius = "unset"
            // puck.style.border = "unset"
        }
    }

    _changeDefaultViewToYourPickView(){
         // We Need to hide the traingle background section
         this._triangleSectionContainer.style.display = "none"
         // Display the you picked Stage
         this._youPickedStage.style.display = "flex";
    }
    _generateTheHouseChoice(){
        const computerChoice = Math.floor(Math.random() * 3)

        if(computerChoice === 0) return  ["rock", this._rockBtn];
        if(computerChoice === 1) return ["paper", this._paperBtn];

        return ["scissors", this._scissorsBtn];
    }

    _generateTheHouseChoiceHtml(housePick){
        return `   
        <div class="outer-play-container red-${housePick} rock hover-puck clone">
            <div class="inner-play-container">
                 <img src="/images/icon-${housePick}.svg" alt="Image of a ${housePick}">
            </div>
        </div>`
    }

    _checkWhoWon(user, housePick){
        if(user === housePick) return "it's a tie";
        
        // Rock Instances
        if(user === "rock" && housePick === "paper") return "you lose!";
        if(user === "rock" && housePick === "scissors") return "you win!";
        
        // Paper Instances
        if(user === "paper" && housePick === "scissors") return "you lose!";
        if(user === "paper" && housePick === "rock") return "you win!";
        
        // Scissors Instances
        if(user === "scissors" && housePick === "rock") return "you lose!"
        if(user === "scissors" && housePick === "paper") return "you win!";
    }
}
export default new gamePlayView();