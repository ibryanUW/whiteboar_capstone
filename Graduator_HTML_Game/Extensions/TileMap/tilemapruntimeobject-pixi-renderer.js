var gdjs;
(function(gdjs2) {
  class TileMapRuntimeObjectPixiRenderer {
    constructor(runtimeObject, runtimeScene) {
      this._object = runtimeObject;
      this._runtimeScene = runtimeScene;
      if (this._pixiObject === void 0) {
        this._pixiObject = new PIXI.tilemap.CompositeRectTileLayer(0);
      }
      this._pixiObject.tileAnim = [0, 0];
      runtimeScene.getLayer("").getRenderer().addRendererObject(this._pixiObject, runtimeObject.getZOrder());
      this.updateAngle();
      this.updateOpacity();
      this.updateTileMap();
      this.updatePosition();
    }
    getRendererObject() {
      return this._pixiObject;
    }
    incrementAnimationFrameX(runtimeScene) {
      this._pixiObject.tileAnim[0] += 1;
    }
    _loadTileMapWithTileset(tileMapJsonData, tilesetJsonData) {
      const pixiTileMapData = PixiTileMapHelper.loadPixiTileMapData((textureName) => this._runtimeScene.getGame().getImageManager().getPIXITexture(textureName), tilesetJsonData ? {...tileMapJsonData, tilesets: [tilesetJsonData]} : tileMapJsonData, this._object._tilemapAtlasImage, this._object._tilemapJsonFile, this._object._tilesetJsonFile);
      if (pixiTileMapData) {
        PixiTileMapHelper.updatePixiTileMap(this._pixiObject, pixiTileMapData, this._object._displayMode, this._object._layerIndex, pako);
      }
    }
    updateTileMap() {
      this._runtimeScene.getGame().getJsonManager().loadJson(this._object._tilemapJsonFile, (error, tileMapJsonData) => {
        if (error) {
          console.error("An error happened while loading a Tilemap JSON data:", error);
          return;
        }
        if (this._object._tilesetJsonFile) {
          this._runtimeScene.getGame().getJsonManager().loadJson(this._object._tilesetJsonFile, (error2, tilesetJsonData) => {
            if (error2) {
              console.error("An error happened while loading Tileset JSON data:", error2);
              return;
            }
            this._loadTileMapWithTileset(tileMapJsonData, tilesetJsonData);
          });
        } else {
          this._loadTileMapWithTileset(tileMapJsonData, null);
        }
      });
    }
    updatePosition() {
      const originalWidth = this._pixiObject.width / this._pixiObject.scale.x;
      const originalHeight = this._pixiObject.height / this._pixiObject.scale.y;
      this._pixiObject.pivot.x = originalWidth / 2;
      this._pixiObject.pivot.y = originalHeight / 2;
      this._pixiObject.position.x = this._object.x + this._pixiObject.width / 2;
      this._pixiObject.position.y = this._object.y + this._pixiObject.height / 2;
    }
    updateAngle() {
      this._pixiObject.rotation = gdjs2.toRad(this._object.angle);
    }
    updateOpacity() {
      this._pixiObject.alpha = this._object._opacity / 255;
    }
    setWidth(width) {
      this._pixiObject.width = width / this._pixiObject.scale.x;
      this._pixiObject.pivot.x = width / 2;
      this.updatePosition();
    }
    setHeight(height) {
      this._pixiObject.height = height / this._pixiObject.scale.y;
      this._pixiObject.pivot.y = height / 2;
      this.updatePosition();
    }
    getWidth() {
      return this._pixiObject.width;
    }
    getHeight() {
      return this._pixiObject.height;
    }
  }
  gdjs2.TileMapRuntimeObjectPixiRenderer = TileMapRuntimeObjectPixiRenderer;
  gdjs2.TileMapRuntimeObjectRenderer = gdjs2.TileMapRuntimeObjectPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=tilemapruntimeobject-pixi-renderer.js.map
