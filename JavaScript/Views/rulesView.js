class rulesView {
   rulesBtn = document.querySelector(".rules-button")

   rulesModal = document.querySelector(".rules-modal-background")

   closeRulesBtn = document.querySelector(".close-modal-btn")

    addOpenRulesHandler = function(){
        this.rulesBtn.addEventListener("click", this._displayRulesModal.bind(this))
    }

    _displayRulesModal = () => {
        this.rulesModal.style.display = "flex";
        this._addHideRulesHandler()
    }

    _addHideRulesHandler = () => {
        this.closeRulesBtn.addEventListener("click", this._hideRulesModal.bind(this))
    }

    _hideRulesModal = () => {
        this.rulesModal.style.display = "none";
    }
}
export default new rulesView();