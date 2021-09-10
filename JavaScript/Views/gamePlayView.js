class gamePlayView {

    _paperBtn = document.querySelector(".blue-paper");

    _scissorsBtn = document.querySelector(".yellow-scissors");

    _rockBtn = document.querySelector(".red-rock");

    _triangleSectionContainer = document.querySelector(".triangle-img-container");

    _youPickedStage  = document.querySelector(".you-picked-stage");

    _yourPuckContainer = document.querySelector(".your-puck-container");

    _theHousePuckContainer = document.querySelector(".the-house-puck-container");

    _whoWonContainer = document.querySelector(".rules-btn-and-won-container");
    _whoWonContainerDesktop = document.querySelector(".you-picked-stage");

    _scoreNumContainer = document.querySelector(".score-num");

    _playAgainMobile = document.querySelector(".play-again-button");

    _playAgainDesktop = document.querySelector(".play-again-button-desktop");

    addInitialPuckHandlers = function (){
        [this._paperBtn, this._rockBtn, this._scissorsBtn].forEach( btn => btn.addEventListener( "click", this._youPicked.bind(this)))
    }

    _youPicked(e){
        const pickedPlayAsElement = e.target.closest(".outer-play-container")
        const pickedPlay = pickedPlayAsElement.classList[2];
      
        this._youPickedUpdateView(pickedPlay, pickedPlayAsElement);
    }
    _youPickedUpdateView(yourPlay, playElement){
       
        this._changeDefaultViewToYourPickView();

        // Insert the users pick into the new view
        this._yourPuckContainer.insertAdjacentElement("afterbegin", playElement);
        

        this._alterPuckStyles(playElement);

        // Computers turn
        const [housePick, color] = this._generateTheHouseChoice();

        // insert that house pick into the house pick container

        self = this;
        setTimeout(function(){
            self._theHousePuckContainer.insertAdjacentHTML("afterbegin", self._generateTheHouseChoiceHtml(housePick, color));
            self._alterPuckStyles(document.querySelector(".clone").closest(".outer-play-container"));
            self._theHousePuckContainer.style.height = "unset";
            self._theHousePuckContainer.style.width = "unset";
            self._theHousePuckContainer.style.background = "unset";
        }, 2000);

        const whoWon = this._checkWhoWon(yourPlay, housePick);

        setTimeout(function(){
            self._insertWhoWonHtml(whoWon)
            self._updateScore(whoWon)
            self._addPlayAgainHandlers()
        }, 3000);
        
    }
    _alterPuckStyles(puck){
        puck.style.top = "unset";
        puck.style.bottom = "unset";
        puck.style.right = "unset";
        puck.style.left = "unset";
        puck.style.position = "unset";
        puck.style.borderBottom = "unset";
        puck.classList.remove("hover-puck");
    }

    _changeDefaultViewToYourPickView(){
         // We Need to hide the traingle background section
         this._triangleSectionContainer.style.display = "none";
         // Display the you picked Stage
         this._youPickedStage.style.display = "flex";
    }
    _generateTheHouseChoice(){
        const computerChoice = Math.floor(Math.random() * 3);

        if(computerChoice === 0) return  ["rock", "red"]
        if(computerChoice === 1) return ["paper", "blue"]

        return ["scissors", "yellow"]
    }

    _generateTheHouseChoiceHtml(housePick, color){
        return `   
        <div class="outer-play-container ${color}-${housePick} ${housePick} clone hover-puck">
            <div class="inner-play-container">
                 <img src="/images/icon-${housePick}.svg" alt="Illustration of a ${housePick}">
            </div>
        </div>`
    }

    _checkWhoWon(user, housePick){
        if(user === housePick) return "it's a tie";
        
        // Rock Instances
        if(user === "rock" && housePick === "paper") return "you lose";
        if(user === "rock" && housePick === "scissors") return "you win";
        
        // Paper Instances
        if(user === "paper" && housePick === "scissors") return "you lose";
        if(user === "paper" && housePick === "rock") return "you win";
        
        // Scissors Instances
        if(user === "scissors" && housePick === "rock") return "you lose"
        if(user === "scissors" && housePick === "paper") return "you win";
    }
    _insertWhoWonHtml(winOrLoose, deskTop){
        // mobile win or loose html insertion and creation
        this._whoWonContainer.insertAdjacentHTML("beforeend", this._createWhoWonHtml(winOrLoose))


        // desktop win or lose html insertion and creation
        const oldNode = document.querySelector(".who-won-container-desktop")
        // Creating a new node so I can replace the old node with my new html element, I came to this solution because the insert adjacentHTML method does not allow you to insert after first child of a parent element
        const placeholder = document.createElement('div');
        placeholder.innerHTML = this._createWhoWonHtml(winOrLoose, true);
        const node = placeholder.firstElementChild;

        this._whoWonContainerDesktop.replaceChild(node, oldNode)
    }
    _createWhoWonHtml(winOrLoose, deskTop){
        return `
        <div class="who-won-container${deskTop ? "-desktop" : ""} four">
            <div class="you-win-or-loose-text${deskTop ? "-desktop" : ""}">
                ${winOrLoose}
            </div>
    
            <div class="play-again-button${deskTop ? "-desktop" : ""} hover-${winOrLoose.replace(/ /g, "-").replace("'", "")}">
                <p>Play Again</p>
            </div>
         </div>
      `
    }
    _updateScore(whoWon){
        let currentScore = +this._scoreNumContainer.textContent;
        let newScore = currentScore + 1;

        console.log(currentScore)
        if(whoWon === "you lose") return;
        if(whoWon === "you win") this._scoreNumContainer.innerHTML = newScore;
        if(whoWon === "it's a tie") return;

    }
    _addPlayAgainHandlers(){
        
    }
}
export default new gamePlayView();