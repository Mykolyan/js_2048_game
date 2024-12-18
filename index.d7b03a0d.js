class t{static INITIAL_STATE=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];constructor(e=t.INITIAL_STATE){this.initialState=e,this.board=this.initialState.map(t=>t.slice()),this.score=0,this.status="idle"}start(){"idle"===this.status&&(this.status="playing",this.addRandomTile(),this.addRandomTile())}restart(){this.initialState=t.INITIAL_STATE,this.board=this.initialState.map(t=>t.slice()),this.score=0,this.status="idle"}getScore(){return this.score}getState(){return this.board}getStatus(){return this.status}addRandomTile(){let t=[];if(this.board.forEach((e,s)=>{e.forEach((e,r)=>{0===e&&t.push([s,r])})}),t.length>0){let[e,s]=t[Math.floor(Math.random()*t.length)];this.board[e][s]=.9>Math.random()?2:4}}arraysEqual(t,e){return t.length===e.length&&t.every((t,s)=>t===e[s])}transposeBoard(){return this.board[0].map((t,e)=>this.board.map(t=>t[e]))}checkWin(){return!!this.board.some(t=>t.includes(2048))&&(this.status="win",!0)}checkLose(){for(let t=0;t<4;t++)for(let e=0;e<4;e++)if(0===this.board[t][e]||e<3&&this.board[t][e]===this.board[t][e+1]||t<3&&this.board[t][e]===this.board[t+1][e])return!1;return this.status="lose",!0}moveLeft(){if("playing"!==this.status)return!1;let t=!1;for(let e=0;e<4;e++){let s=this.board[e].filter(t=>0!==t);for(let t=0;t<s.length-1;t++)s[t]===s[t+1]&&(s[t]*=2,this.score+=s[t],s.splice(t+1,1));for(;s.length<4;)s.push(0);this.arraysEqual(this.board[e],s)||(this.board[e]=s,t=!0)}return t&&(this.addRandomTile(),this.checkWin(),this.checkLose()),t}moveRight(){if("playing"!==this.status)return!1;this.board=this.board.map(t=>t.slice().reverse());let t=this.moveLeft();return this.board=this.board.map(t=>t.reverse()),t}moveDown(){if("playing"!==this.status)return!1;this.board=this.transposeBoard();let t=this.moveRight();return this.board=this.transposeBoard(),t}moveUp(){if("playing"!==this.status)return!1;this.board=this.transposeBoard();let t=this.moveLeft();return this.board=this.transposeBoard(),t}}const e=new t;let s=!1;function r(){let t=e.getScore(),s=e.getStatus();document.querySelector(".game-score").textContent=t;let r=document.querySelector(".message-container");r.querySelector(".message-lose").classList.add("hidden"),r.querySelector(".message-win").classList.add("hidden"),r.querySelector(".message-start").classList.add("hidden"),"win"===s?r.querySelector(".message-win").classList.remove("hidden"):"lose"===s?r.querySelector(".message-lose").classList.remove("hidden"):"idle"===s&&r.querySelector(".message-start").classList.remove("hidden"),function(){let t=e.getState();document.querySelector(".game-field").querySelectorAll(".field-cell").forEach((e,s)=>{let r=t[Math.floor(s/4)][s%4],a=Array.from(e.classList).find(function(t){return t.startsWith("field-cell--")});a&&e.classList.remove(a),0!==r&&e.classList.add(`field-cell--${r}`),e.textContent=0===r?"":r})}()}document.addEventListener("keydown",t=>{if(s){switch(t.key){case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight();break;case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown();break;default:return}r()}}),document.querySelector(".start, .restart").addEventListener("click",t=>{let a=t.target;a.classList.contains("start")?function(){if(!s){e.start(),s=!0;let t=document.querySelector(".start");t.textContent="Restart",t.classList.remove("start"),t.classList.add("restart")}r()}():a.classList.contains("restart")&&function(){e.restart(),s=!1;let t=document.querySelector(".restart");t.textContent="Start",t.classList.remove("restart"),t.classList.add("start"),r()}()});
//# sourceMappingURL=index.d7b03a0d.js.map