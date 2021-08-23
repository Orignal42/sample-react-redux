// créer ce fichier dans src/reducers/index.js

const initialState = {
    //TODO : complete players {} and monster{}
      players: {
          1: { played: false, name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
          2: { played: false, name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
          3: { played: false, name: "Jessy", pv:100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
          4: { played: false, name: "Jenny", pv:100, pvMax: 100, mana: 30, manaMax: 30, id: 4 },
      },
      monster: { pv: 800, pvMax: 800 },
  
      count:0
  };
  
  function rootReducer(state = initialState, action) { 
      let newState;
      
      switch (action.type) {
        
          case "HIT_MONSTER":
              newState = {
                  ...state,
                  monster: {...state.monster, pv: state.monster.pv + action.payload},
              };
              return newState
      
  
       
          case "HIT_BACK":
              newState = {
                  ...state,
                  players: {...state.players, 
                      [action.payload.playerId]: {
                          ...state.players[action.payload.playerId],
                          pv:state.players[action.payload.playerId].pv + action.payload.damage,
                      }
                  },
            
              } 
             return newState
          case "MANA":
              newState = {
                  ...state,
                  players: {...state.players, 
                      [action.payload.playerId]: {
                          ...state.players[action.payload.playerId],
                          mana:state.players[action.payload.playerId].mana + action.payload.manare
                      }
                  },
              
              } 
     
              return newState
          case 'TURN':
              newState = { 
                  ...state,
                  players: {
                      ...state.players,
                      [action.payload.player.id] : {
                          ...state.players[action.payload.player.id],
                          played : true 
                      }
                  },
                  count : state.count +1
              }
              return newState   
               
          case 'RESET_TURN':
              newState = { 
                  ...state,
                  players: {
                      ...state.players,
                      [action.payload.player.id] : {
                          ...state.players[action.payload.player.id],
                          played : false 
                      }
                  },
                  count : 0
              }
              console.log(newState);
              return newState           
          case 'PLAYER_DEATH':
              newState = { 
                  ...state,
                  players : delete state.players[action.payload.id],
                  players: {
                      ...state.players,
                  }
              }
              
              return newState  
          default:
              return state;
      }
    }
  
   
  
  
    
      
  
  
  export default rootReducer;
  