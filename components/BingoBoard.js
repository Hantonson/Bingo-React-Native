const { FlatList } = require("react-native")
const { Ball } = require("./Ball")

const BingoBoard = ({ballsArray}) => {
    return(
        <FlatList data={ballsArray} 
                  renderItem={({item}) => <Ball number={item.number} visible={item.visibility} /> } 
                  keyExtractor={(item) => item.number} 
                  numColumns={10}/>
    );
};

export { BingoBoard }