import rulesView from './Views/rulesView.js';

import gamePlayView from "./Views/gamePlayView.js"

const init = () => {
    rulesView.addOpenRulesHandler();
    gamePlayView.addInitialPuckHandlers();
}
init();