class gamePlayView {

    paperBtn = document.querySelector(".blue-paper")

    scissorsBtn = document.querySelector(".yellow-scissors")

    rockBtn = document.querySelector(".red-rock")

    addInitialPuckHandlers = function (){
        [this.paperBtn, this.scissorsBtn, this.rockBtn].forEach(btn => btn.addEventListener("click", this._youPicked.bind(this)))
    }
    _youPicked(e){
        // Zero is Paper
        // One is Scissors
        // Two is Rock
        const pickedPlay = e.target.closest(".outer-play-container").classList[2];

    }
}
export default new gamePlayView();