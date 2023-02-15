import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";

const Works = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground></TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => <span>Foo{progress}</span>}
        ></Tile>
      </TileContent>
      <TileContent>Var</TileContent>
    </TileWrapper>
  );
};
export default Works;
