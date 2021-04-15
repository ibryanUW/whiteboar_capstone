gdjs.career_95fair_95introCode = {};
gdjs.career_95fair_95introCode.GDmain_95playerObjects1= [];
gdjs.career_95fair_95introCode.GDmain_95playerObjects2= [];
gdjs.career_95fair_95introCode.GDboeringObjects1= [];
gdjs.career_95fair_95introCode.GDboeringObjects2= [];
gdjs.career_95fair_95introCode.GDdiecrosoftObjects1= [];
gdjs.career_95fair_95introCode.GDdiecrosoftObjects2= [];
gdjs.career_95fair_95introCode.GDanotherCompanyObjects1= [];
gdjs.career_95fair_95introCode.GDanotherCompanyObjects2= [];
gdjs.career_95fair_95introCode.GDspookleObjects1= [];
gdjs.career_95fair_95introCode.GDspookleObjects2= [];
gdjs.career_95fair_95introCode.GDplatformColliderObjects1= [];
gdjs.career_95fair_95introCode.GDplatformColliderObjects2= [];
gdjs.career_95fair_95introCode.GDbulletObjects1= [];
gdjs.career_95fair_95introCode.GDbulletObjects2= [];
gdjs.career_95fair_95introCode.GDscopeObjects1= [];
gdjs.career_95fair_95introCode.GDscopeObjects2= [];
gdjs.career_95fair_95introCode.GDenemy_95genericObjects1= [];
gdjs.career_95fair_95introCode.GDenemy_95genericObjects2= [];
gdjs.career_95fair_95introCode.GDenemy_95bulletObjects1= [];
gdjs.career_95fair_95introCode.GDenemy_95bulletObjects2= [];

gdjs.career_95fair_95introCode.conditionTrue_0 = {val:false};
gdjs.career_95fair_95introCode.condition0IsTrue_0 = {val:false};
gdjs.career_95fair_95introCode.condition1IsTrue_0 = {val:false};
gdjs.career_95fair_95introCode.condition2IsTrue_0 = {val:false};
gdjs.career_95fair_95introCode.conditionTrue_1 = {val:false};
gdjs.career_95fair_95introCode.condition0IsTrue_1 = {val:false};
gdjs.career_95fair_95introCode.condition1IsTrue_1 = {val:false};
gdjs.career_95fair_95introCode.condition2IsTrue_1 = {val:false};


gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.career_95fair_95introCode.GDbulletObjects1});gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDmain_9595playerObjects1Objects = Hashtable.newFrom({"main_player": gdjs.career_95fair_95introCode.GDmain_95playerObjects1});gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDenemy_9595genericObjects1Objects = Hashtable.newFrom({"enemy_generic": gdjs.career_95fair_95introCode.GDenemy_95genericObjects1});gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDenemy_9595bulletObjects1Objects = Hashtable.newFrom({"enemy_bullet": gdjs.career_95fair_95introCode.GDenemy_95bulletObjects1});gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.career_95fair_95introCode.GDbulletObjects1});gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDenemy_9595genericObjects1Objects = Hashtable.newFrom({"enemy_generic": gdjs.career_95fair_95introCode.GDenemy_95genericObjects1});gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDenemy_9595bulletObjects1Objects = Hashtable.newFrom({"enemy_bullet": gdjs.career_95fair_95introCode.GDenemy_95bulletObjects1});gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDmain_9595playerObjects1Objects = Hashtable.newFrom({"main_player": gdjs.career_95fair_95introCode.GDmain_95playerObjects1});gdjs.career_95fair_95introCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}}

}


{


gdjs.career_95fair_95introCode.condition0IsTrue_0.val = false;
{
gdjs.career_95fair_95introCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.career_95fair_95introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("main_player"), gdjs.career_95fair_95introCode.GDmain_95playerObjects1);
{for(var i = 0, len = gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].addForce(200, 0, 0);
}
}{for(var i = 0, len = gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].flipX(false);
}
}}

}


{


gdjs.career_95fair_95introCode.condition0IsTrue_0.val = false;
{
gdjs.career_95fair_95introCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.career_95fair_95introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("main_player"), gdjs.career_95fair_95introCode.GDmain_95playerObjects1);
{for(var i = 0, len = gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].addForce(0, 200, 0);
}
}}

}


{


gdjs.career_95fair_95introCode.condition0IsTrue_0.val = false;
{
gdjs.career_95fair_95introCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.career_95fair_95introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("main_player"), gdjs.career_95fair_95introCode.GDmain_95playerObjects1);
{for(var i = 0, len = gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].addForce(-(200), 0, 0);
}
}{for(var i = 0, len = gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].flipX(true);
}
}}

}


{


gdjs.career_95fair_95introCode.condition0IsTrue_0.val = false;
{
gdjs.career_95fair_95introCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.career_95fair_95introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("main_player"), gdjs.career_95fair_95introCode.GDmain_95playerObjects1);
{for(var i = 0, len = gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].addForce(0, -(200), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("main_player"), gdjs.career_95fair_95introCode.GDmain_95playerObjects1);

gdjs.career_95fair_95introCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length;i<l;++i) {
    if ( !(gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].hasNoForces()) ) {
        gdjs.career_95fair_95introCode.condition0IsTrue_0.val = true;
        gdjs.career_95fair_95introCode.GDmain_95playerObjects1[k] = gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i];
        ++k;
    }
}
gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length = k;}if (gdjs.career_95fair_95introCode.condition0IsTrue_0.val) {
/* Reuse gdjs.career_95fair_95introCode.GDmain_95playerObjects1 */
{for(var i = 0, len = gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("main_player"), gdjs.career_95fair_95introCode.GDmain_95playerObjects1);

gdjs.career_95fair_95introCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length;i<l;++i) {
    if ( gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].hasNoForces() ) {
        gdjs.career_95fair_95introCode.condition0IsTrue_0.val = true;
        gdjs.career_95fair_95introCode.GDmain_95playerObjects1[k] = gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i];
        ++k;
    }
}
gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length = k;}if (gdjs.career_95fair_95introCode.condition0IsTrue_0.val) {
/* Reuse gdjs.career_95fair_95introCode.GDmain_95playerObjects1 */
{for(var i = 0, len = gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.career_95fair_95introCode.condition0IsTrue_0.val = false;
{
gdjs.career_95fair_95introCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.career_95fair_95introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("platformCollider"), gdjs.career_95fair_95introCode.GDplatformColliderObjects1);
{for(var i = 0, len = gdjs.career_95fair_95introCode.GDplatformColliderObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDplatformColliderObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("scope"), gdjs.career_95fair_95introCode.GDscopeObjects1);
{for(var i = 0, len = gdjs.career_95fair_95introCode.GDscopeObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDscopeObjects1[i].putAround(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, 0);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


gdjs.career_95fair_95introCode.condition0IsTrue_0.val = false;
gdjs.career_95fair_95introCode.condition1IsTrue_0.val = false;
{
gdjs.career_95fair_95introCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.career_95fair_95introCode.condition0IsTrue_0.val ) {
{
{gdjs.career_95fair_95introCode.conditionTrue_1 = gdjs.career_95fair_95introCode.condition1IsTrue_0;
gdjs.career_95fair_95introCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8161148);
}
}}
if (gdjs.career_95fair_95introCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.career_95fair_95introCode.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("main_player"), gdjs.career_95fair_95introCode.GDmain_95playerObjects1);
gdjs.copyArray(runtimeScene.getObjects("scope"), gdjs.career_95fair_95introCode.GDscopeObjects1);
{for(var i = 0, len = gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].getPointX("")), (gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].getPointY("")), gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDbulletObjects1Objects, (( gdjs.career_95fair_95introCode.GDscopeObjects1.length === 0 ) ? 0 :gdjs.career_95fair_95introCode.GDscopeObjects1[0].getPointX("")), (( gdjs.career_95fair_95introCode.GDscopeObjects1.length === 0 ) ? 0 :gdjs.career_95fair_95introCode.GDscopeObjects1[0].getPointY("")), 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("main_player"), gdjs.career_95fair_95introCode.GDmain_95playerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length === 0 ) ? 0 :gdjs.career_95fair_95introCode.GDmain_95playerObjects1[0].getPointX("")), 0.07), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length === 0 ) ? 0 :gdjs.career_95fair_95introCode.GDmain_95playerObjects1[0].getPointY("")), 0.07), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy_generic"), gdjs.career_95fair_95introCode.GDenemy_95genericObjects1);
gdjs.copyArray(runtimeScene.getObjects("main_player"), gdjs.career_95fair_95introCode.GDmain_95playerObjects1);

gdjs.career_95fair_95introCode.condition0IsTrue_0.val = false;
{
gdjs.career_95fair_95introCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDmain_9595playerObjects1Objects, gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDenemy_9595genericObjects1Objects, 1000, false);
}if (gdjs.career_95fair_95introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("enemy_bullet"), gdjs.career_95fair_95introCode.GDenemy_95bulletObjects1);
/* Reuse gdjs.career_95fair_95introCode.GDenemy_95genericObjects1 */
/* Reuse gdjs.career_95fair_95introCode.GDmain_95playerObjects1 */
{for(var i = 0, len = gdjs.career_95fair_95introCode.GDenemy_95genericObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDenemy_95genericObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.career_95fair_95introCode.GDenemy_95genericObjects1[i].getPointX("")), (gdjs.career_95fair_95introCode.GDenemy_95genericObjects1[i].getPointY("")), gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDenemy_9595bulletObjects1Objects, (( gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length === 0 ) ? 0 :gdjs.career_95fair_95introCode.GDmain_95playerObjects1[0].getPointX("")), (( gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length === 0 ) ? 0 :gdjs.career_95fair_95introCode.GDmain_95playerObjects1[0].getPointY("")), 1500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.career_95fair_95introCode.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy_generic"), gdjs.career_95fair_95introCode.GDenemy_95genericObjects1);

gdjs.career_95fair_95introCode.condition0IsTrue_0.val = false;
{
gdjs.career_95fair_95introCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDbulletObjects1Objects, gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDenemy_9595genericObjects1Objects, false, runtimeScene, false);
}if (gdjs.career_95fair_95introCode.condition0IsTrue_0.val) {
/* Reuse gdjs.career_95fair_95introCode.GDenemy_95genericObjects1 */
{for(var i = 0, len = gdjs.career_95fair_95introCode.GDenemy_95genericObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDenemy_95genericObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy_bullet"), gdjs.career_95fair_95introCode.GDenemy_95bulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("main_player"), gdjs.career_95fair_95introCode.GDmain_95playerObjects1);

gdjs.career_95fair_95introCode.condition0IsTrue_0.val = false;
{
gdjs.career_95fair_95introCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDenemy_9595bulletObjects1Objects, gdjs.career_95fair_95introCode.mapOfGDgdjs_46career_9595fair_9595introCode_46GDmain_9595playerObjects1Objects, false, runtimeScene, false);
}if (gdjs.career_95fair_95introCode.condition0IsTrue_0.val) {
/* Reuse gdjs.career_95fair_95introCode.GDmain_95playerObjects1 */
{for(var i = 0, len = gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length ;i < len;++i) {
    gdjs.career_95fair_95introCode.GDmain_95playerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.career_95fair_95introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.career_95fair_95introCode.GDmain_95playerObjects1.length = 0;
gdjs.career_95fair_95introCode.GDmain_95playerObjects2.length = 0;
gdjs.career_95fair_95introCode.GDboeringObjects1.length = 0;
gdjs.career_95fair_95introCode.GDboeringObjects2.length = 0;
gdjs.career_95fair_95introCode.GDdiecrosoftObjects1.length = 0;
gdjs.career_95fair_95introCode.GDdiecrosoftObjects2.length = 0;
gdjs.career_95fair_95introCode.GDanotherCompanyObjects1.length = 0;
gdjs.career_95fair_95introCode.GDanotherCompanyObjects2.length = 0;
gdjs.career_95fair_95introCode.GDspookleObjects1.length = 0;
gdjs.career_95fair_95introCode.GDspookleObjects2.length = 0;
gdjs.career_95fair_95introCode.GDplatformColliderObjects1.length = 0;
gdjs.career_95fair_95introCode.GDplatformColliderObjects2.length = 0;
gdjs.career_95fair_95introCode.GDbulletObjects1.length = 0;
gdjs.career_95fair_95introCode.GDbulletObjects2.length = 0;
gdjs.career_95fair_95introCode.GDscopeObjects1.length = 0;
gdjs.career_95fair_95introCode.GDscopeObjects2.length = 0;
gdjs.career_95fair_95introCode.GDenemy_95genericObjects1.length = 0;
gdjs.career_95fair_95introCode.GDenemy_95genericObjects2.length = 0;
gdjs.career_95fair_95introCode.GDenemy_95bulletObjects1.length = 0;
gdjs.career_95fair_95introCode.GDenemy_95bulletObjects2.length = 0;

gdjs.career_95fair_95introCode.eventsList0(runtimeScene);
return;

}

gdjs['career_95fair_95introCode'] = gdjs.career_95fair_95introCode;
