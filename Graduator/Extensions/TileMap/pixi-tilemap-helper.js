(function(root, factory) {
  if (typeof exports === "object" && typeof exports.nodeName !== "string") {
    factory(exports);
  } else {
    factory(root.PixiTileMapHelper = {});
  }
})(typeof self !== "undefined" ? self : this, function(exports2) {
  const loadedGenericPixiTileMapData = {};
  const parseTiledData = (tiledData, atlasTexture, getTexture) => {
    if (!tiledData.tiledversion) {
      console.warn("The loaded Tiled map does not contain a 'tiledversion' key. Are you sure this file has been exported from Tiled (mapeditor.org)?");
      return null;
    }
    if (!tiledData.tilesets.length || "source" in tiledData.tilesets[0]) {
      console.warn("The loaded Tiled map seems not to contain any tileset data (nothing in 'tilesets' key).");
      return null;
    }
    const {
      tilewidth,
      tileheight,
      tilecount,
      tiles,
      image,
      columns,
      spacing,
      margin
    } = tiledData.tilesets[0];
    if (!atlasTexture)
      atlasTexture = getTexture(image);
    const rows = tilecount / columns;
    const expectedAtlasWidth = tilewidth * columns + spacing * (columns - 1) + margin * 2;
    const expectedAtlasHeight = tileheight * rows + spacing * (rows - 1) + margin * 2;
    if (atlasTexture.width !== 1 && expectedAtlasWidth !== atlasTexture.width || atlasTexture.height !== 1 && expectedAtlasHeight !== atlasTexture.height) {
      const expectedSize = expectedAtlasWidth + "x" + expectedAtlasHeight;
      const actualSize = atlasTexture.width + "x" + atlasTexture.height;
      console.warn("It seems the atlas file was resized, which is not supported. It should be " + expectedSize + "px, but it's " + actualSize + " px.");
      return null;
    }
    const textureCache = {};
    for (let frame = 0; frame <= tilecount; frame++) {
      const columnMultiplier = Math.floor((frame - 1) % columns);
      const rowMultiplier = Math.floor((frame - 1) / columns);
      const x = margin + columnMultiplier * (tilewidth + spacing);
      const y = margin + rowMultiplier * (tileheight + spacing);
      try {
        const rect = new PIXI.Rectangle(x, y, tilewidth, tileheight);
        const texture = new PIXI.Texture(atlasTexture, rect);
        textureCache[frame] = texture;
      } catch (error) {
        console.error("An error occurred while creating a PIXI.Texture to be used in a TileMap:", error);
        textureCache[frame] = null;
      }
    }
    const tileMapData = {
      width: atlasTexture.width,
      height: atlasTexture.height,
      tileWidth: tilewidth,
      tileHeight: tileheight,
      atlasTexture,
      textureCache,
      layers: tiledData.layers,
      tiles
    };
    return tileMapData;
  };
  const decodeBase64LayerData = (layer, pako) => {
    const {data, compression} = layer;
    let index = 4;
    const decodedData = [];
    let step1 = atob(data).split("").map(function(x) {
      return x.charCodeAt(0);
    });
    try {
      const decodeString = (str, index2) => str.charCodeAt(index2) + (str.charCodeAt(index2 + 1) << 8) + (str.charCodeAt(index2 + 2) << 16) + (str.charCodeAt(index2 + 3) << 24) >>> 0;
      const decodeArray = (arr, index2) => arr[index2] + (arr[index2 + 1] << 8) + (arr[index2 + 2] << 16) + (arr[index2 + 3] << 24) >>> 0;
      if (compression === "zlib") {
        const binData = new Uint8Array(step1);
        step1 = pako.inflate(binData);
        while (index <= step1.length) {
          decodedData.push(decodeArray(step1, index - 4));
          index += 4;
        }
      } else if (compression === "zstd") {
        console.error("Zstandard compression is not supported for layers in a Tilemap. Use instead zlib compression or no compression.");
        return null;
      } else {
        while (index <= step1.length) {
          decodedData.push(decodeString(step1, index - 4));
          index += 4;
        }
      }
      return decodedData;
    } catch (error) {
      console.error("Failed to decompress and unzip base64 layer.data string", error);
      return null;
    }
  };
  const extractTileUidFlippedStates = (globalTileUid) => {
    const FLIPPED_HORIZONTALLY_FLAG = 2147483648;
    const FLIPPED_VERTICALLY_FLAG = 1073741824;
    const FLIPPED_DIAGONALLY_FLAG = 536870912;
    const flippedHorizontally = globalTileUid & FLIPPED_HORIZONTALLY_FLAG;
    const flippedVertically = globalTileUid & FLIPPED_VERTICALLY_FLAG;
    const flippedDiagonally = globalTileUid & FLIPPED_DIAGONALLY_FLAG;
    const tileUid = globalTileUid & ~(FLIPPED_HORIZONTALLY_FLAG | FLIPPED_VERTICALLY_FLAG | FLIPPED_DIAGONALLY_FLAG);
    return [tileUid, !!flippedHorizontally, !!flippedVertically, !!flippedDiagonally];
  };
  const findTileTextureInCache = (textureCache, globalTileUid) => {
    if (globalTileUid === 0)
      return null;
    if (textureCache[globalTileUid]) {
      return textureCache[globalTileUid];
    }
    const flippedStates = extractTileUidFlippedStates(globalTileUid);
    const tileUid = flippedStates[0];
    const flippedHorizontally = flippedStates[1];
    const flippedVertically = flippedStates[2];
    const flippedDiagonally = flippedStates[3];
    if (tileUid === 0)
      return null;
    const unflippedTexture = textureCache[tileUid];
    if (!unflippedTexture)
      return null;
    const frame = unflippedTexture.frame.clone();
    const orig = unflippedTexture.orig.clone();
    if (flippedDiagonally) {
      const width = orig.width;
      orig.width = orig.height;
      orig.height = width;
    }
    const trim = orig.clone();
    let rotate = 0;
    if (flippedDiagonally) {
      rotate = 10;
      if (!flippedHorizontally && flippedVertically) {
        rotate = 2;
      } else if (flippedHorizontally && !flippedVertically) {
        rotate = 6;
      } else if (flippedHorizontally && flippedVertically) {
        rotate = 14;
      }
    } else {
      rotate = 0;
      if (!flippedHorizontally && flippedVertically) {
        rotate = 8;
      } else if (flippedHorizontally && !flippedVertically) {
        rotate = 12;
      } else if (flippedHorizontally && flippedVertically) {
        rotate = 4;
      }
    }
    const flippedTexture = new PIXI.Texture(unflippedTexture.baseTexture, frame, orig, trim, rotate);
    return textureCache[globalTileUid] = flippedTexture;
  };
  exports2.updatePixiTileMap = (pixiTileMap, genericTileMapData, displayMode, layerIndex, pako) => {
    if (!pixiTileMap || !genericTileMapData)
      return;
    pixiTileMap.clear();
    genericTileMapData.layers.forEach(function(layer, index) {
      if (displayMode === "index" && layerIndex !== index)
        return;
      else if (displayMode === "visible" && !layer.visible)
        return;
      if (layer.type === "objectgroup") {
        layer.objects.forEach(function(object) {
          const {gid, x, y, visible} = object;
          if (displayMode === "visible" && !visible)
            return;
          if (genericTileMapData.textureCache[gid]) {
            pixiTileMap.addFrame(genericTileMapData.textureCache[gid], x, y - genericTileMapData.tileHeight);
          }
        });
      } else if (layer.type === "tilelayer") {
        let tileSlotIndex = 0;
        let layerData = layer.data;
        if (layer.encoding === "base64") {
          layerData = decodeBase64LayerData(layer, pako);
          if (!layerData) {
            console.warn("Failed to uncompress layer.data");
            return;
          }
        }
        for (let i = 0; i < layer.height; i++) {
          for (let j = 0; j < layer.width; j++) {
            const xPos = genericTileMapData.tileWidth * j;
            const yPos = genericTileMapData.tileHeight * i;
            const globalTileUid = layerData[tileSlotIndex];
            const tileUid = extractTileUidFlippedStates(globalTileUid)[0];
            const tileTexture = findTileTextureInCache(genericTileMapData.textureCache, globalTileUid);
            if (tileTexture) {
              const tileData = genericTileMapData.tiles && genericTileMapData.tiles.find(function(tile) {
                return tile.id === tileUid - 1;
              });
              const pixiTilemapFrame = pixiTileMap.addFrame(tileTexture, xPos, yPos);
              if (tileData && tileData.animation) {
                pixiTilemapFrame.tileAnimX(genericTileMapData.tileWidth, tileData.animation.length);
              }
            }
            tileSlotIndex += 1;
          }
        }
      }
    });
  };
  exports2.loadPixiTileMapData = (getTexture, tiledData, atlasImageResourceName, tilemapResourceName, tilesetResourceName) => {
    const requestedTileMapDataId = tilemapResourceName + "@" + tilesetResourceName + "@" + atlasImageResourceName;
    if (loadedGenericPixiTileMapData[requestedTileMapDataId]) {
      return loadedGenericPixiTileMapData[requestedTileMapDataId];
    }
    const atlasTexture = atlasImageResourceName ? getTexture(atlasImageResourceName) : null;
    const genericPixiTileMapData = parseTiledData(tiledData, atlasTexture, getTexture);
    if (genericPixiTileMapData)
      loadedGenericPixiTileMapData[requestedTileMapDataId] = genericPixiTileMapData;
    return genericPixiTileMapData;
  };
});
//# sourceMappingURL=pixi-tilemap-helper.js.map
