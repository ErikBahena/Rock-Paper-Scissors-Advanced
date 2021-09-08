class gamePlayView {

    _paperBtn = document.querySelector(".blue-paper")

    _scissorsBtn = document.querySelector(".yellow-scissors")

    _rockBtn = document.querySelector(".red-rock")

    _triangleSectionContainer = document.querySelector(".triangle-img-container")

    _youPickedStage  = document.querySelector(".you-picked-stage")

    _yourPuckContainer = document.querySelector(".your-puck-container")

    addInitialPuckHandlers = function (){
    
        [this._paperBtn, this._rockBtn, this._scissorsBtn].forEach( btn => btn.addEventListener( "click", this._youPicked.bind(this)))
    }

    _youPicked(e){
        const pickedPlayAsElement = e.target.closest(".outer-play-container")
        const pickedPlay = pickedPlayAsElement.classList[2];
      
        this._youPickedUpdateView(pickedPlay, pickedPlayAsElement);
    }
    _youPickedUpdateView(play, playElement){
        // We Need to hide the traingle background section
        this._triangleSectionContainer.style.display = "none"
        // Display the you picked Stage
        this._youPickedStage.style.display = "flex";

        console.log(playElement)

        // Insert the users playElement into the your puck container

       
        this._yourPuckContainer.insertAdjacentElement("afterbegin", playElement)
        // Change the puck properties so they can adapt to this new views
        // remove the hover class
         playElement.style.top = "unset";
         playElement.style.bottom = "unset";
         playElement.style.right = "unset";
         playElement.style.left = "unset";
         playElement.style.position = "unset";
         playElement.classList.remove("hover-puck");

        // Display the You Picked after 1 second, display the house picked after 5 seconds
    }
}
export default new gamePlayView();