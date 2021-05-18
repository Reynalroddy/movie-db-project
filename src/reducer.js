const reducer = (state,action)=>{
// console.log(state,action)
if(action.type === "LOADING"){
return {
...state,
}
}

if(action.type === "FETCH_DATA"){
 const data = action.payload;
return {
...state,
 data: data.Search || data,
loading:false,
}
}

if(action.type === "ERROR"){
return {
...state,
 error:{type:true,message:action.payload},
loading:false,
}
}




return state;

}

export default reducer;