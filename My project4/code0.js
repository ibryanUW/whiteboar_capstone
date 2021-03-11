gdjs.Main_95SceneCode = {};
gdjs.Main_95SceneCode.GDBush2Objects1= [];
gdjs.Main_95SceneCode.GDBush2Objects2= [];
gdjs.Main_95SceneCode.GDBush2Objects3= [];
gdjs.Main_95SceneCode.GDBush4Objects1= [];
gdjs.Main_95SceneCode.GDBush4Objects2= [];
gdjs.Main_95SceneCode.GDBush4Objects3= [];
gdjs.Main_95SceneCode.GDRButtonObjects1= [];
gdjs.Main_95SceneCode.GDRButtonObjects2= [];
gdjs.Main_95SceneCode.GDRButtonObjects3= [];
gdjs.Main_95SceneCode.GDMediumBrownMeteor1Objects1= [];
gdjs.Main_95SceneCode.GDMediumBrownMeteor1Objects2= [];
gdjs.Main_95SceneCode.GDMediumBrownMeteor1Objects3= [];
gdjs.Main_95SceneCode.GDGreenCrystalObjects1= [];
gdjs.Main_95SceneCode.GDGreenCrystalObjects2= [];
gdjs.Main_95SceneCode.GDGreenCrystalObjects3= [];
gdjs.Main_95SceneCode.GDBlueJewelObjects1= [];
gdjs.Main_95SceneCode.GDBlueJewelObjects2= [];
gdjs.Main_95SceneCode.GDBlueJewelObjects3= [];
gdjs.Main_95SceneCode.GDRedPuzzleObjects1= [];
gdjs.Main_95SceneCode.GDRedPuzzleObjects2= [];
gdjs.Main_95SceneCode.GDRedPuzzleObjects3= [];
gdjs.Main_95SceneCode.GDparticle_95effect_95test_951Objects1= [];
gdjs.Main_95SceneCode.GDparticle_95effect_95test_951Objects2= [];
gdjs.Main_95SceneCode.GDparticle_95effect_95test_951Objects3= [];

gdjs.Main_95SceneCode.conditionTrue_0 = {val:false};
gdjs.Main_95SceneCode.condition0IsTrue_0 = {val:false};
gdjs.Main_95SceneCode.condition1IsTrue_0 = {val:false};
gdjs.Main_95SceneCode.conditionTrue_1 = {val:false};
gdjs.Main_95SceneCode.condition0IsTrue_1 = {val:false};
gdjs.Main_95SceneCode.condition1IsTrue_1 = {val:false};


gdjs.Main_95SceneCode.mapOfGDgdjs_46Main_9595SceneCode_46GDGreenCrystalObjects2Objects = Hashtable.newFrom({"GreenCrystal": gdjs.Main_95SceneCode.GDGreenCrystalObjects2});gdjs.Main_95SceneCode.mapOfGDgdjs_46Main_9595SceneCode_46GDBlueJewelObjects2Objects = Hashtable.newFrom({"BlueJewel": gdjs.Main_95SceneCode.GDBlueJewelObjects2});gdjs.Main_95SceneCode.mapOfGDgdjs_46Main_9595SceneCode_46GDRedPuzzleObjects1Objects = Hashtable.newFrom({"RedPuzzle": gdjs.Main_95SceneCode.GDRedPuzzleObjects1});gdjs.Main_95SceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_95SceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_95SceneCode.conditionTrue_1 = gdjs.Main_95SceneCode.condition0IsTrue_0;
gdjs.Main_95SceneCode.condition0IsTrue_1.val = false;
{
gdjs.Main_95SceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
if( gdjs.Main_95SceneCode.condition0IsTrue_1.val ) {
    gdjs.Main_95SceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Main_95SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_95SceneCode.GDBush2Objects1, gdjs.Main_95SceneCode.GDBush2Objects2);

gdjs.Main_95SceneCode.GDGreenCrystalObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_95SceneCode.mapOfGDgdjs_46Main_9595SceneCode_46GDGreenCrystalObjects2Objects, (( gdjs.Main_95SceneCode.GDBush2Objects2.length === 0 ) ? 0 :gdjs.Main_95SceneCode.GDBush2Objects2[0].getPointX("")), (( gdjs.Main_95SceneCode.GDBush2Objects2.length === 0 ) ? 0 :gdjs.Main_95SceneCode.GDBush2Objects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Main_95SceneCode.GDGreenCrystalObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDGreenCrystalObjects2[i].addPolarForce(0, 2, 1);
}
}}

}


{


gdjs.Main_95SceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_95SceneCode.conditionTrue_1 = gdjs.Main_95SceneCode.condition0IsTrue_0;
gdjs.Main_95SceneCode.condition0IsTrue_1.val = false;
{
gdjs.Main_95SceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
if( gdjs.Main_95SceneCode.condition0IsTrue_1.val ) {
    gdjs.Main_95SceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Main_95SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_95SceneCode.GDBush2Objects1, gdjs.Main_95SceneCode.GDBush2Objects2);

gdjs.Main_95SceneCode.GDBlueJewelObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_95SceneCode.mapOfGDgdjs_46Main_9595SceneCode_46GDBlueJewelObjects2Objects, (( gdjs.Main_95SceneCode.GDBush2Objects2.length === 0 ) ? 0 :gdjs.Main_95SceneCode.GDBush2Objects2[0].getPointX("")) + 10, (( gdjs.Main_95SceneCode.GDBush2Objects2.length === 0 ) ? 0 :gdjs.Main_95SceneCode.GDBush2Objects2[0].getPointY("")) + 10, "");
}{for(var i = 0, len = gdjs.Main_95SceneCode.GDBlueJewelObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDBlueJewelObjects2[i].addPolarForce(10, 5, 1);
}
}}

}


{


gdjs.Main_95SceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_95SceneCode.conditionTrue_1 = gdjs.Main_95SceneCode.condition0IsTrue_0;
gdjs.Main_95SceneCode.condition0IsTrue_1.val = false;
{
gdjs.Main_95SceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
if( gdjs.Main_95SceneCode.condition0IsTrue_1.val ) {
    gdjs.Main_95SceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Main_95SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_95SceneCode.GDBush2Objects1 */
gdjs.Main_95SceneCode.GDRedPuzzleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_95SceneCode.mapOfGDgdjs_46Main_9595SceneCode_46GDRedPuzzleObjects1Objects, (( gdjs.Main_95SceneCode.GDBush2Objects1.length === 0 ) ? 0 :gdjs.Main_95SceneCode.GDBush2Objects1[0].getPointX("")) + 5, (( gdjs.Main_95SceneCode.GDBush2Objects1.length === 0 ) ? 0 :gdjs.Main_95SceneCode.GDBush2Objects1[0].getPointY("")) + 5, "");
}{for(var i = 0, len = gdjs.Main_95SceneCode.GDRedPuzzleObjects1.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDRedPuzzleObjects1[i].addPolarForce(0, 2, 1);
}
}}

}


};gdjs.Main_95SceneCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Bush2"), gdjs.Main_95SceneCode.GDBush2Objects1);
{for(var i = 0, len = gdjs.Main_95SceneCode.GDBush2Objects1.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDBush2Objects1[i].setX(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bush2"), gdjs.Main_95SceneCode.GDBush2Objects1);

gdjs.Main_95SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_95SceneCode.GDBush2Objects1.length;i<l;++i) {
    if ( gdjs.Main_95SceneCode.GDBush2Objects1[i].getAverageForce().getLength() >= 0 ) {
        gdjs.Main_95SceneCode.condition0IsTrue_0.val = true;
        gdjs.Main_95SceneCode.GDBush2Objects1[k] = gdjs.Main_95SceneCode.GDBush2Objects1[i];
        ++k;
    }
}
gdjs.Main_95SceneCode.GDBush2Objects1.length = k;}if (gdjs.Main_95SceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.random(3));
}
{ //Subevents
gdjs.Main_95SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_95SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}if (gdjs.Main_95SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueJewel"), gdjs.Main_95SceneCode.GDBlueJewelObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenCrystal"), gdjs.Main_95SceneCode.GDGreenCrystalObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedPuzzle"), gdjs.Main_95SceneCode.GDRedPuzzleObjects1);
{for(var i = 0, len = gdjs.Main_95SceneCode.GDGreenCrystalObjects1.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDGreenCrystalObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), 600, gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 1);
}
}{for(var i = 0, len = gdjs.Main_95SceneCode.GDBlueJewelObjects1.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDBlueJewelObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), 600, gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 1);
}
}{for(var i = 0, len = gdjs.Main_95SceneCode.GDRedPuzzleObjects1.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDRedPuzzleObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), 600, gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 1);
}
}}

}


{


{
}

}


};

gdjs.Main_95SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_95SceneCode.GDBush2Objects1.length = 0;
gdjs.Main_95SceneCode.GDBush2Objects2.length = 0;
gdjs.Main_95SceneCode.GDBush2Objects3.length = 0;
gdjs.Main_95SceneCode.GDBush4Objects1.length = 0;
gdjs.Main_95SceneCode.GDBush4Objects2.length = 0;
gdjs.Main_95SceneCode.GDBush4Objects3.length = 0;
gdjs.Main_95SceneCode.GDRButtonObjects1.length = 0;
gdjs.Main_95SceneCode.GDRButtonObjects2.length = 0;
gdjs.Main_95SceneCode.GDRButtonObjects3.length = 0;
gdjs.Main_95SceneCode.GDMediumBrownMeteor1Objects1.length = 0;
gdjs.Main_95SceneCode.GDMediumBrownMeteor1Objects2.length = 0;
gdjs.Main_95SceneCode.GDMediumBrownMeteor1Objects3.length = 0;
gdjs.Main_95SceneCode.GDGreenCrystalObjects1.length = 0;
gdjs.Main_95SceneCode.GDGreenCrystalObjects2.length = 0;
gdjs.Main_95SceneCode.GDGreenCrystalObjects3.length = 0;
gdjs.Main_95SceneCode.GDBlueJewelObjects1.length = 0;
gdjs.Main_95SceneCode.GDBlueJewelObjects2.length = 0;
gdjs.Main_95SceneCode.GDBlueJewelObjects3.length = 0;
gdjs.Main_95SceneCode.GDRedPuzzleObjects1.length = 0;
gdjs.Main_95SceneCode.GDRedPuzzleObjects2.length = 0;
gdjs.Main_95SceneCode.GDRedPuzzleObjects3.length = 0;
gdjs.Main_95SceneCode.GDparticle_95effect_95test_951Objects1.length = 0;
gdjs.Main_95SceneCode.GDparticle_95effect_95test_951Objects2.length = 0;
gdjs.Main_95SceneCode.GDparticle_95effect_95test_951Objects3.length = 0;

gdjs.Main_95SceneCode.eventsList1(runtimeScene);
return;

}

gdjs['Main_95SceneCode'] = gdjs.Main_95SceneCode;
