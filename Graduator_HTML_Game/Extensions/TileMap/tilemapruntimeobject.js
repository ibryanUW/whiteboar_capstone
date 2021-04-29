var gdjs;
(function(gdjs2) {
  class TileMapRuntimeObject extends gdjs2.RuntimeObject {
    constructor(runtimeScene, objectData) {
      super(runtimeScene, objectData);
      this._frameElapsedTime = 0;
      this._opacity = objectData.content.opacity;
      this._tilemapJsonFile = objectData.content.tilemapJsonFile;
      this._tilesetJsonFile = objectData.content.tilesetJsonFile;
      this._tilemapAtlasImage = objectData.content.tilemapAtlasImage;
      this._displayMode = objectData.content.displayMode;
      this._layerIndex = objectData.content.layerIndex;
      this._animationSpeedScale = objectData.content.animationSpeedScale;
      this._animationFps = objectData.content.animationFps;
      if (this._renderer) {
        gdjs2.TileMapRuntimeObjectRenderer.call(this._renderer, this, runtimeScene);
      } else {
        this._renderer = new gdjs2.TileMapRuntimeObjectRenderer(this, runtimeScene);
      }
      this.onCreated();
    }
    getRendererObject() {
      return this._renderer.getRendererObject();
    }
    update(runtimeScene) {
      if (this._animationSpeedScale <= 0 || this._animationFps === 0) {
        return;
      }
      const elapsedTime = this.getElapsedTime(runtimeScene) / 1e3;
      this._frameElapsedTime += elapsedTime * this._animationSpeedScale;
      while (this._frameElapsedTime > 1 / this._animationFps) {
        this._renderer.incrementAnimationFrameX();
        this._frameElapsedTime -= 1 / this._animationFps;
      }
    }
    updateFromObjectData(oldObjectData, newObjectData) {
      if (oldObjectData.content.opacity !== newObjectData.content.opacity) {
        this.setOpacity(newObjectData.content.opacity);
      }
      if (oldObjectData.content.tilemapJsonFile !== newObjectData.content.tilemapJsonFile) {
        this.setTilemapJsonFile(newObjectData.content.tilemapJsonFile);
      }
      if (oldObjectData.content.tilesetJsonFile !== newObjectData.content.tilesetJsonFile) {
        this.setTilesetJsonFile(newObjectData.content.tilesetJsonFile);
      }
      if (oldObjectData.content.displayMode !== newObjectData.content.displayMode) {
        this.setDisplayMode(newObjectData.content.displayMode);
      }
      if (oldObjectData.content.layerIndex !== newObjectData.content.layerIndex) {
        this.setLayerIndex(newObjectData.content.layerIndex);
      }
      if (oldObjectData.content.animationSpeedScale !== newObjectData.content.animationSpeedScale) {
        this.setAnimationSpeedScale(newObjectData.content.animationSpeedScale);
      }
      if (oldObjectData.content.animationFps !== newObjectData.content.animationFps) {
        this.setAnimationFps(newObjectData.content.animationFps);
      }
      if (oldObjectData.content.tilemapAtlasImage !== newObjectData.content.tilemapAtlasImage) {
        return false;
      }
      return true;
    }
    extraInitializationFromInitialInstance(initialInstanceData) {
      if (initialInstanceData.customSize) {
        this.setWidth(initialInstanceData.width);
        this.setHeight(initialInstanceData.height);
      }
    }
    setTilemapJsonFile(tilemapJsonFile) {
      this._tilemapJsonFile = tilemapJsonFile;
      this._renderer.updateTileMap();
    }
    getTilemapJsonFile() {
      return this._tilemapJsonFile;
    }
    isTilemapJsonFile(selectedTilemapJsonFile) {
      return this._tilemapJsonFile === selectedTilemapJsonFile;
    }
    setTilesetJsonFile(tilesetJsonFile) {
      this._tilesetJsonFile = tilesetJsonFile;
      this._renderer.updateTileMap();
    }
    getTilesetJsonFile() {
      return this._tilesetJsonFile;
    }
    setAnimationFps(animationFps) {
      this._animationFps = animationFps;
    }
    getAnimationFps() {
      return this._animationFps;
    }
    isTilesetJsonFile(selectedTilesetJsonFile) {
      return this._tilesetJsonFile === selectedTilesetJsonFile;
    }
    isDisplayMode(selectedDisplayMode) {
      return this._displayMode === selectedDisplayMode;
    }
    setDisplayMode(displayMode) {
      this._displayMode = displayMode;
      this._renderer.updateTileMap();
    }
    getDisplayMode() {
      return this._displayMode;
    }
    setLayerIndex(layerIndex) {
      this._layerIndex = layerIndex;
      this._renderer.updateTileMap();
    }
    getLayerIndex() {
      return this._layerIndex;
    }
    setAnimationSpeedScale(animationSpeedScale) {
      this._animationSpeedScale = animationSpeedScale;
    }
    getAnimationSpeedScale() {
      return this._animationSpeedScale;
    }
    setWidth(width) {
      if (this._renderer.getWidth() === width)
        return;
      this._renderer.setWidth(width);
      this.hitBoxesDirty = true;
    }
    setHeight(height) {
      if (this._renderer.getHeight() === height)
        return;
      this._renderer.setHeight(height);
      this.hitBoxesDirty = true;
    }
    setX(x) {
      super.setX(x);
      this._renderer.updatePosition();
    }
    setY(y) {
      super.setY(y);
      this._renderer.updatePosition();
    }
    setAngle(angle) {
      super.setAngle(angle);
      this._renderer.updateAngle();
    }
    setOpacity(opacity) {
      this._opacity = opacity;
      this._renderer.updateOpacity();
    }
    getOpacity() {
      return this._opacity;
    }
    getWidth() {
      return this._renderer.getWidth();
    }
    getHeight() {
      return this._renderer.getHeight();
    }
  }
  gdjs2.TileMapRuntimeObject = TileMapRuntimeObject;
  gdjs2.registerObject("TileMap::TileMap", gdjs2.TileMapRuntimeObject);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=tilemapruntimeobject.js.map
