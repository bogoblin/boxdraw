(()=>{"use strict";var e={221:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;var i=function(){function e(){}return e.prototype.update=function(e){this._id=e.id,this._sections=e.sections,this._timeRemaining=e.timeRemaining,this._imageURL=e.imageURL,this._imageSplit=e.imageSplit},Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sections",{get:function(){return this._sections},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"timeRemaining",{get:function(){return this._timeRemaining},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"imageURL",{get:function(){return this._imageURL},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"imageSplit",{get:function(){return this._imageSplit},enumerable:!1,configurable:!0}),e}();t.Game=i},551:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Lobby=void 0;var a=i(221),n=function(){function e(){this.gameMasterIsYou=!1,this._game=new a.Game}return e.prototype.update=function(e){var t=this;e.players.forEach((function(e){e.isYou&&(t.gameMasterIsYou=e.isGameMaster)})),this.lastUpdate=e,this._game.update(e.gameStateUpdate),this._gameTime=e.gameTime},Object.defineProperty(e.prototype,"players",{get:function(){return this.lastUpdate.players},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gameTime",{get:function(){return this._gameTime},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"allowImageUploads",{get:function(){return this.lastUpdate.allowImageUploads},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"imageURL",{get:function(){return this.lastUpdate.imageURL},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"game",{get:function(){return this._game},enumerable:!1,configurable:!0}),e.prototype.canStartLobby=function(){var e=this.lastUpdate.players.length;return this.gameMasterIsYou&&e>=2},e.prototype.getPlayer=function(e){for(var t=0,i=this.players;t<i.length;t++){var a=i[t];if(a.id==e)return a}},e}();t.Lobby=n},753:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UiManager=void 0;var i=function(){function e(e){this.lobby=e,this.playersList=document.getElementById("playersList"),this.gameTime=document.getElementById("gameTime"),this.allowUploads=document.getElementById("allowUploads"),this.lobbyImage=document.getElementById("lobbyImage"),this.startLobby=document.getElementById("startLobby"),this.sectionsList=document.getElementById("sectionsList"),this.gameImage=document.getElementById("gameImage"),this.imageUpload=document.getElementById("imageUpload"),this.uploadImage=document.getElementById("uploadImage"),this.stitchedImage=document.getElementById("stitchedImage"),this.returnToLobby=document.getElementById("returnToLobby")}return e.prototype.update=function(){var e=this,t=this.lobby;this.gameTime.innerText=this.toMinutesAndSeconds(t.gameTime),this.allowUploads.innerText=t.allowImageUploads?"yes":"no",this.lobbyImage.src=t.imageURL,this.startLobby.hidden=!t.canStartLobby(),this.gameImage.src=t.game.imageURL,this.playersList.innerHTML="",t.players.forEach((function(t){var i;(i=document.createElement("li")).innerText=t.name,t.isGameMaster&&i.classList.add("gameMaster"),t.isYou&&i.classList.add("you"),e.playersList.appendChild(i)}));var i=t.game.sections;this.sectionsList.innerHTML="",i.forEach((function(i){var a=document.createElement("li"),n=t.getPlayer(i.playerId);a.innerText=n.name+" "+(i.submitted?"submitted":"not submitted"),e.sectionsList.appendChild(a)}))},e.prototype.toMinutesAndSeconds=function(e){var t=Math.floor(e/60);return t+":"+(""+(e-60*t)).padStart(2,"0")},e}();t.UiManager=i},607:(e,t,i)=>{var a=i(551),n=i(753),o={};location.search.substr(1).split("&").forEach((function(e){o[e.split("=")[0]]=e.split("=")[1]})),o.l;var r=new a.Lobby,s=new n.UiManager(r);r.update({players:[{name:"bobby",id:"1234",isGameMaster:!0,isYou:!0},{name:"alex",id:"5678",isGameMaster:!1,isYou:!1}],gameTime:3e3,allowImageUploads:!0,imageSplit:"Horizontal",imageURL:"https://www.image.com/myImage.png",gameStateUpdate:{id:"asdf123",imageSplit:"Horizontal",imageURL:"https://www.image.com/myImage.png",timeRemaining:69,sections:[{x:0,y:0,width:400,height:300,playerId:"1234",submitted:!0},{x:0,y:300,width:400,height:300,playerId:"5678",submitted:!1}]}}),s.update()}},t={};!function i(a){if(t[a])return t[a].exports;var n=t[a]={exports:{}};return e[a](n,n.exports,i),n.exports}(607)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3hkcmF3Ly4vc3JjL0dhbWUudHMiLCJ3ZWJwYWNrOi8vYm94ZHJhdy8uL3NyYy9Mb2JieS50cyIsIndlYnBhY2s6Ly9ib3hkcmF3Ly4vc3JjL1VpTWFuYWdlci50cyIsIndlYnBhY2s6Ly9ib3hkcmF3Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2JveGRyYXcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYm94ZHJhdy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsidXBkYXRlIiwiZ2FtZVVwZGF0ZSIsInRoaXMiLCJfaWQiLCJpZCIsIl9zZWN0aW9ucyIsInNlY3Rpb25zIiwiX3RpbWVSZW1haW5pbmciLCJ0aW1lUmVtYWluaW5nIiwiX2ltYWdlVVJMIiwiaW1hZ2VVUkwiLCJfaW1hZ2VTcGxpdCIsImltYWdlU3BsaXQiLCJHYW1lIiwiZ2FtZU1hc3RlcklzWW91IiwiX2dhbWUiLCJpbmZvIiwicGxheWVycyIsImZvckVhY2giLCJwbGF5ZXIiLCJpc1lvdSIsImlzR2FtZU1hc3RlciIsImxhc3RVcGRhdGUiLCJnYW1lU3RhdGVVcGRhdGUiLCJfZ2FtZVRpbWUiLCJnYW1lVGltZSIsImFsbG93SW1hZ2VVcGxvYWRzIiwiY2FuU3RhcnRMb2JieSIsIm51bWJlck9mUGxheWVycyIsImxlbmd0aCIsImdldFBsYXllciIsIkxvYmJ5IiwibG9iYnkiLCJwbGF5ZXJzTGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhbGxvd1VwbG9hZHMiLCJsb2JieUltYWdlIiwic3RhcnRMb2JieSIsInNlY3Rpb25zTGlzdCIsImdhbWVJbWFnZSIsImltYWdlVXBsb2FkIiwidXBsb2FkSW1hZ2UiLCJzdGl0Y2hlZEltYWdlIiwicmV0dXJuVG9Mb2JieSIsImlubmVyVGV4dCIsInRvTWludXRlc0FuZFNlY29uZHMiLCJzcmMiLCJoaWRkZW4iLCJnYW1lIiwiaW5uZXJIVE1MIiwiZWwiLCJjcmVhdGVFbGVtZW50IiwibmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwic2VjdGlvbiIsInBsYXllcklkIiwic3VibWl0dGVkIiwic2Vjb25kcyIsIm1pbiIsIk1hdGgiLCJmbG9vciIsInBhZFN0YXJ0IiwiVWlNYW5hZ2VyIiwicXVlcnlEaWN0IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHIiLCJzcGxpdCIsIml0ZW0iLCJ1aU1hbmFnZXIiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iXSwibWFwcGluZ3MiOiJxR0FHQSwrQkFvQkEsT0FiSSxZQUFBQSxPQUFBLFNBQU9DLEdBQ0hDLEtBQUtDLElBQU1GLEVBQVdHLEdBQ3RCRixLQUFLRyxVQUFZSixFQUFXSyxTQUM1QkosS0FBS0ssZUFBaUJOLEVBQVdPLGNBQ2pDTixLQUFLTyxVQUFZUixFQUFXUyxTQUM1QlIsS0FBS1MsWUFBY1YsRUFBV1csWUFHbEMsc0JBQUksaUJBQUUsQyxJQUFOLFdBQVcsT0FBT1YsS0FBS0MsSyxnQ0FDdkIsc0JBQUksdUJBQVEsQyxJQUFaLFdBQWlCLE9BQU9ELEtBQUtHLFcsZ0NBQzdCLHNCQUFJLDRCQUFhLEMsSUFBakIsV0FBc0IsT0FBT0gsS0FBS0ssZ0IsZ0NBQ2xDLHNCQUFJLHVCQUFRLEMsSUFBWixXQUFpQixPQUFPTCxLQUFLTyxXLGdDQUM3QixzQkFBSSx5QkFBVSxDLElBQWQsV0FBbUIsT0FBT1AsS0FBS1MsYSxnQ0FDbkMsRUFwQkEsR0FBYSxFQUFBRSxRLDhFQ0FiLGFBRUEsYUFNSSxhQUNJWCxLQUFLWSxpQkFBa0IsRUFDdkJaLEtBQUthLE1BQVEsSUFBSSxFQUFBRixLQThDekIsT0EzQ1csWUFBQWIsT0FBUCxTQUFjZ0IsR0FBZCxXQUNJQSxFQUFLQyxRQUFRQyxTQUFRLFNBQUFDLEdBQ2JBLEVBQU9DLFFBQ1AsRUFBS04sZ0JBQWtC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RmIsYUFDQSxTQUVJQyxFQUFrQixHQUV0QkMsU0FBU0MsT0FBT0MsT0FBTyxHQUFHQyxNQUFNLEtBQUtwRCxTQUFRLFNBQVNxRCxHQUFPTCxFQUFVSyxFQUFLRCxNQUFNLEtBQUssSUFBTUMsRUFBS0QsTUFBTSxLQUFLLE1BRXRGSixFQUFhLEVBQXBDLElBRU1sQyxFQUFRLElBQUksRUFBQUQsTUFDWnlDLEVBQVksSUFBSSxFQUFBUCxVQUFVakMsR0FFaENBLEVBQU1oQyxPQUFPLENBQ1RpQixRQUFTLENBQ0wsQ0FDSW9DLEtBQU0sUUFDTmpELEdBQUksT0FDSmlCLGNBQWMsRUFDZEQsT0FBTyxHQUVYLENBQ0lpQyxLQUFNLE9BQ05qRCxHQUFJLE9BQ0ppQixjQUFjLEVBQ2RELE9BQU8sSUFHZkssU0FBVSxJQUNWQyxtQkFBbUIsRUFDbkJkLFdBQVksYUFDWkYsU0FBVSxvQ0FDVmEsZ0JBQWlCLENBQ2JuQixHQUFJLFVBQ0pRLFdBQVksYUFDWkYsU0FBVSxvQ0FDVkYsY0FBZSxHQUNmRixTQUFVLENBQ04sQ0FDSW1FLEVBQUcsRUFDSEMsRUFBRyxFQUNIQyxNQUFPLElBQ1BDLE9BQVEsSUFDUmxCLFNBQVUsT0FDVkMsV0FBVyxHQUVmLENBQ0ljLEVBQUcsRUFDSEMsRUFBRyxJQUNIQyxNQUFPLElBQ1BDLE9BQVEsSUFDUmxCLFNBQVUsT0FDVkMsV0FBVyxPQUszQmEsRUFBVXhFLFdDdkRONkUsRUFBMkIsSUFHL0IsU0FBU0MsRUFBb0JDLEdBRTVCLEdBQUdGLEVBQXlCRSxHQUMzQixPQUFPRixFQUF5QkUsR0FBVUMsUUFHM0MsSUFBSUMsRUFBU0osRUFBeUJFLEdBQVksQ0FHakRDLFFBQVMsSUFPVixPQUhBRSxFQUFvQkgsR0FBVUUsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0NHLEVBQU9ELFFDbEJmRixDQUFvQixNIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZVN0YXRlVXBkYXRlfSBmcm9tIFwiLi9HYW1lU3RhdGVVcGRhdGVcIjtcclxuaW1wb3J0IHtTZWN0aW9ufSBmcm9tIFwiLi9TZWN0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfc2VjdGlvbnM6IFNlY3Rpb25bXTtcclxuICAgIHByaXZhdGUgX3RpbWVSZW1haW5pbmc6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2ltYWdlVVJMOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9pbWFnZVNwbGl0OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIHVwZGF0ZShnYW1lVXBkYXRlIDogR2FtZVN0YXRlVXBkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5faWQgPSBnYW1lVXBkYXRlLmlkO1xyXG4gICAgICAgIHRoaXMuX3NlY3Rpb25zID0gZ2FtZVVwZGF0ZS5zZWN0aW9ucztcclxuICAgICAgICB0aGlzLl90aW1lUmVtYWluaW5nID0gZ2FtZVVwZGF0ZS50aW1lUmVtYWluaW5nO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlVVJMID0gZ2FtZVVwZGF0ZS5pbWFnZVVSTDtcclxuICAgICAgICB0aGlzLl9pbWFnZVNwbGl0ID0gZ2FtZVVwZGF0ZS5pbWFnZVNwbGl0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgaWQoKSB7IHJldHVybiB0aGlzLl9pZCB9XHJcbiAgICBnZXQgc2VjdGlvbnMoKSB7IHJldHVybiB0aGlzLl9zZWN0aW9ucyB9XHJcbiAgICBnZXQgdGltZVJlbWFpbmluZygpIHsgcmV0dXJuIHRoaXMuX3RpbWVSZW1haW5pbmcgfVxyXG4gICAgZ2V0IGltYWdlVVJMKCkgeyByZXR1cm4gdGhpcy5faW1hZ2VVUkwgfVxyXG4gICAgZ2V0IGltYWdlU3BsaXQoKSB7IHJldHVybiB0aGlzLl9pbWFnZVNwbGl0IH1cclxufSIsImltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHtMb2JieVN0YXRlVXBkYXRlfSBmcm9tIFwiLi9Mb2JieVN0YXRlVXBkYXRlXCI7XHJcbmltcG9ydCB7U2VjdGlvbn0gZnJvbSBcIi4vU2VjdGlvblwiO1xyXG5pbXBvcnQge0dhbWV9IGZyb20gXCIuL0dhbWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2JieSB7XHJcbiAgICBwcml2YXRlIGxhc3RVcGRhdGUgOiBMb2JieVN0YXRlVXBkYXRlO1xyXG4gICAgcHJpdmF0ZSBnYW1lTWFzdGVySXNZb3UgOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfZ2FtZVRpbWU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2dhbWU6IEdhbWU7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU1hc3RlcklzWW91ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyB1cGRhdGUoaW5mbyA6IExvYmJ5U3RhdGVVcGRhdGUpIDogdm9pZCB7XHJcbiAgICAgICAgaW5mby5wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcclxuICAgICAgICAgICAgaWYgKHBsYXllci5pc1lvdSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTWFzdGVySXNZb3UgPSBwbGF5ZXIuaXNHYW1lTWFzdGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gaW5mbztcclxuICAgICAgICB0aGlzLl9nYW1lLnVwZGF0ZShpbmZvLmdhbWVTdGF0ZVVwZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVRpbWUgPSBpbmZvLmdhbWVUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwbGF5ZXJzKCkgOiBQbGF5ZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdFVwZGF0ZS5wbGF5ZXJzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgZ2FtZVRpbWUoKSA6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVUaW1lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgYWxsb3dJbWFnZVVwbG9hZHMoKSA6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RVcGRhdGUuYWxsb3dJbWFnZVVwbG9hZHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBpbWFnZVVSTCgpIDogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0VXBkYXRlLmltYWdlVVJMO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgZ2FtZSgpIDogR2FtZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuU3RhcnRMb2JieSgpIDogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZQbGF5ZXJzID0gdGhpcy5sYXN0VXBkYXRlLnBsYXllcnMubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVNYXN0ZXJJc1lvdSAmJiBudW1iZXJPZlBsYXllcnMgPj0gMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0UGxheWVyKGlkIDogc3RyaW5nKSA6IFBsYXllciB7XHJcbiAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycykge1xyXG4gICAgICAgICAgICBpZiAocGxheWVyLmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7TG9iYnl9IGZyb20gXCIuL0xvYmJ5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVWlNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9iYnk6IExvYmJ5O1xyXG4gICAgXHJcbiAgICAvLyBIVE1MIEVsZW1lbnRzXHJcbiAgICBwcml2YXRlIHBsYXllcnNMaXN0OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgZ2FtZVRpbWUgOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgYWxsb3dVcGxvYWRzOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgbG9iYnlJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByaXZhdGUgc3RhcnRMb2JieTogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHNlY3Rpb25zTGlzdDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGdhbWVJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByaXZhdGUgaW1hZ2VVcGxvYWQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHVwbG9hZEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBzdGl0Y2hlZEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSByZXR1cm5Ub0xvYmJ5OiBIVE1MRWxlbWVudDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobG9iYnkgOiBMb2JieSkge1xyXG4gICAgICAgIHRoaXMubG9iYnkgPSBsb2JieTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnBsYXllcnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcnNMaXN0Jyk7XHJcbiAgICAgICAgdGhpcy5nYW1lVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lVGltZScpO1xyXG4gICAgICAgIHRoaXMuYWxsb3dVcGxvYWRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbG93VXBsb2FkcycpO1xyXG4gICAgICAgIHRoaXMubG9iYnlJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2JieUltYWdlJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICB0aGlzLnN0YXJ0TG9iYnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRMb2JieScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2VjdGlvbnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb25zTGlzdCcpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVJbWFnZScpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbWFnZVVwbG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZVVwbG9hZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy51cGxvYWRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGxvYWRJbWFnZScpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdGl0Y2hlZEltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0aXRjaGVkSW1hZ2UnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIHRoaXMucmV0dXJuVG9Mb2JieSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXR1cm5Ub0xvYmJ5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkgOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBsb2JieSA9IHRoaXMubG9iYnk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lVGltZS5pbm5lclRleHQgPSB0aGlzLnRvTWludXRlc0FuZFNlY29uZHMobG9iYnkuZ2FtZVRpbWUpO1xyXG4gICAgICAgIHRoaXMuYWxsb3dVcGxvYWRzLmlubmVyVGV4dCA9IGxvYmJ5LmFsbG93SW1hZ2VVcGxvYWRzPyd5ZXMnOidubyc7XHJcbiAgICAgICAgdGhpcy5sb2JieUltYWdlLnNyYyA9IGxvYmJ5LmltYWdlVVJMO1xyXG4gICAgICAgIHRoaXMuc3RhcnRMb2JieS5oaWRkZW4gPSAhbG9iYnkuY2FuU3RhcnRMb2JieSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUltYWdlLnNyYyA9IGxvYmJ5LmdhbWUuaW1hZ2VVUkw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVXBkYXRlIHBsYXllcnMgbGlzdFxyXG4gICAgICAgIHRoaXMucGxheWVyc0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgbG9iYnkucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbCA6IEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGVsLmlubmVyVGV4dCA9IHBsYXllci5uYW1lO1xyXG4gICAgICAgICAgICBpZiAocGxheWVyLmlzR2FtZU1hc3Rlcikge1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZ2FtZU1hc3RlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXIuaXNZb3UpIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyc0xpc3QuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFVwZGF0ZSBzZWN0aW9uc1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gbG9iYnkuZ2FtZS5zZWN0aW9ucztcclxuICAgICAgICB0aGlzLnNlY3Rpb25zTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IGxvYmJ5LmdldFBsYXllcihzZWN0aW9uLnBsYXllcklkKTtcclxuICAgICAgICAgICAgZWwuaW5uZXJUZXh0ID0gYCR7cGxheWVyLm5hbWV9ICR7c2VjdGlvbi5zdWJtaXR0ZWQ/J3N1Ym1pdHRlZCc6J25vdCBzdWJtaXR0ZWQnfWA7XHJcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNMaXN0LmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdG9NaW51dGVzQW5kU2Vjb25kcyhzZWNvbmRzIDogbnVtYmVyKSA6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xyXG4gICAgICAgIGNvbnN0IHNlYyA9IHNlY29uZHMgLSA2MCptaW47XHJcbiAgICAgICAgcmV0dXJuIGAke21pbn06YCtgJHtzZWN9YC5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtMb2JieX0gZnJvbSBcIi4vTG9iYnlcIjtcclxuaW1wb3J0IHtVaU1hbmFnZXJ9IGZyb20gXCIuL1VpTWFuYWdlclwiO1xyXG5cclxubGV0IHF1ZXJ5RGljdCA6IGFueSA9IHt9XHJcbi8vIEB0cy1pZ25vcmUgLSB0aGlzIGNvbWVzIGZyb20gc3RhY2sgb3ZlcmZsb3csIEkgZG9uJ3QgY2FyZSBob3cgaXQgd29ya3NcclxubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5zcGxpdChcIiZcIikuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7cXVlcnlEaWN0W2l0ZW0uc3BsaXQoXCI9XCIpWzBdXSA9IGl0ZW0uc3BsaXQoXCI9XCIpWzFdfSlcclxuXHJcbmxldCBsb2JieUlkIDogc3RyaW5nID0gcXVlcnlEaWN0W1wibFwiXTtcclxuXHJcbmNvbnN0IGxvYmJ5ID0gbmV3IExvYmJ5KCk7XHJcbmNvbnN0IHVpTWFuYWdlciA9IG5ldyBVaU1hbmFnZXIobG9iYnkpO1xyXG5cclxubG9iYnkudXBkYXRlKHtcclxuICAgIHBsYXllcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdib2JieScsXHJcbiAgICAgICAgICAgIGlkOiAnMTIzNCcsXHJcbiAgICAgICAgICAgIGlzR2FtZU1hc3RlcjogdHJ1ZSxcclxuICAgICAgICAgICAgaXNZb3U6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2FsZXgnLFxyXG4gICAgICAgICAgICBpZDogJzU2NzgnLFxyXG4gICAgICAgICAgICBpc0dhbWVNYXN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1lvdTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgZ2FtZVRpbWU6IDMwMDAsXHJcbiAgICBhbGxvd0ltYWdlVXBsb2FkczogdHJ1ZSxcclxuICAgIGltYWdlU3BsaXQ6ICdIb3Jpem9udGFsJyxcclxuICAgIGltYWdlVVJMOiAnaHR0cHM6Ly93d3cuaW1hZ2UuY29tL215SW1hZ2UucG5nJyxcclxuICAgIGdhbWVTdGF0ZVVwZGF0ZToge1xyXG4gICAgICAgIGlkOiAnYXNkZjEyMycsXHJcbiAgICAgICAgaW1hZ2VTcGxpdDogJ0hvcml6b250YWwnLFxyXG4gICAgICAgIGltYWdlVVJMOiAnaHR0cHM6Ly93d3cuaW1hZ2UuY29tL215SW1hZ2UucG5nJyxcclxuICAgICAgICB0aW1lUmVtYWluaW5nOiA2OSxcclxuICAgICAgICBzZWN0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgICAgIHBsYXllcklkOiAnMTIzNCcsXHJcbiAgICAgICAgICAgICAgICBzdWJtaXR0ZWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDMwMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgICAgIHBsYXllcklkOiAnNTY3OCcsXHJcbiAgICAgICAgICAgICAgICBzdWJtaXR0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn0pO1xyXG51aU1hbmFnZXIudXBkYXRlKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyg2MDcpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==