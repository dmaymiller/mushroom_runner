gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDMushroomObjects1= [];
gdjs.Untitled_32sceneCode.GDMushroomObjects2= [];
gdjs.Untitled_32sceneCode.GDGhostObjects1= [];
gdjs.Untitled_32sceneCode.GDGhostObjects2= [];
gdjs.Untitled_32sceneCode.GDAngryPigObjects1= [];
gdjs.Untitled_32sceneCode.GDAngryPigObjects2= [];
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDPlantObjects1= [];
gdjs.Untitled_32sceneCode.GDPlantObjects2= [];
gdjs.Untitled_32sceneCode.GDCheckpoint2Objects1= [];
gdjs.Untitled_32sceneCode.GDCheckpoint2Objects2= [];
gdjs.Untitled_32sceneCode.GDTrunkObjects1= [];
gdjs.Untitled_32sceneCode.GDTrunkObjects2= [];
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDCloudsObjects1= [];
gdjs.Untitled_32sceneCode.GDCloudsObjects2= [];
gdjs.Untitled_32sceneCode.GDYellowFloorObjects1= [];
gdjs.Untitled_32sceneCode.GDYellowFloorObjects2= [];
gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDAppleObjects1= [];
gdjs.Untitled_32sceneCode.GDAppleObjects2= [];
gdjs.Untitled_32sceneCode.GDSpawnPointObjects1= [];
gdjs.Untitled_32sceneCode.GDSpawnPointObjects2= [];
gdjs.Untitled_32sceneCode.GDOnesPlaceObjects1= [];
gdjs.Untitled_32sceneCode.GDOnesPlaceObjects2= [];
gdjs.Untitled_32sceneCode.GDTensPlaceObjects1= [];
gdjs.Untitled_32sceneCode.GDTensPlaceObjects2= [];
gdjs.Untitled_32sceneCode.GDHundredsPlaceObjects1= [];
gdjs.Untitled_32sceneCode.GDHundredsPlaceObjects2= [];
gdjs.Untitled_32sceneCode.GDThousandsPlaceObjects1= [];
gdjs.Untitled_32sceneCode.GDThousandsPlaceObjects2= [];
gdjs.Untitled_32sceneCode.GDApplesScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDApplesScoreObjects2= [];
gdjs.Untitled_32sceneCode.GDInstructionsObjects1= [];
gdjs.Untitled_32sceneCode.GDInstructionsObjects2= [];
gdjs.Untitled_32sceneCode.GDApple2Objects1= [];
gdjs.Untitled_32sceneCode.GDApple2Objects2= [];
gdjs.Untitled_32sceneCode.GDInstructions2Objects1= [];
gdjs.Untitled_32sceneCode.GDInstructions2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAppleObjects1Objects = Hashtable.newFrom({"Apple": gdjs.Untitled_32sceneCode.GDAppleObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.Untitled_32sceneCode.GDMushroomObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.Untitled_32sceneCode.GDMushroomObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAppleObjects1Objects = Hashtable.newFrom({"Apple": gdjs.Untitled_32sceneCode.GDAppleObjects1});
gdjs.Untitled_32sceneCode.asyncCallback10221140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Mushroom"), gdjs.Untitled_32sceneCode.GDMushroomObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMushroomObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMushroomObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDMushroomObjects1) asyncObjectsList.addObject("Mushroom", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10221140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.Untitled_32sceneCode.GDMushroomObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGhostObjects1ObjectsGDgdjs_9546Untitled_959532sceneCode_9546GDPlantObjects1ObjectsGDgdjs_9546Untitled_959532sceneCode_9546GDAngryPigObjects1Objects = Hashtable.newFrom({"Ghost": gdjs.Untitled_32sceneCode.GDGhostObjects1, "Plant": gdjs.Untitled_32sceneCode.GDPlantObjects1, "AngryPig": gdjs.Untitled_32sceneCode.GDAngryPigObjects1});
gdjs.Untitled_32sceneCode.asyncCallback10223172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Mushroom"), gdjs.Untitled_32sceneCode.GDMushroomObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMushroomObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMushroomObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMushroomObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMushroomObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDMushroomObjects1) asyncObjectsList.addObject("Mushroom", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10223172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlantObjects1Objects = Hashtable.newFrom({"Plant": gdjs.Untitled_32sceneCode.GDPlantObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.Untitled_32sceneCode.GDMushroomObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAppleObjects1Objects = Hashtable.newFrom({"Apple": gdjs.Untitled_32sceneCode.GDAppleObjects1});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10228876);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpawnPoint"), gdjs.Untitled_32sceneCode.GDSpawnPointObjects1);
gdjs.Untitled_32sceneCode.GDAppleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAppleObjects1Objects, (( gdjs.Untitled_32sceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSpawnPointObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSpawnPointObjects1[0].getPointY("")), "");
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGhostObjects1Objects = Hashtable.newFrom({"Ghost": gdjs.Untitled_32sceneCode.GDGhostObjects1});
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10232444);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpawnPoint"), gdjs.Untitled_32sceneCode.GDSpawnPointObjects1);
gdjs.Untitled_32sceneCode.GDGhostObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGhostObjects1Objects, (( gdjs.Untitled_32sceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSpawnPointObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSpawnPointObjects1[0].getPointY("")), "");
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAngryPigObjects1Objects = Hashtable.newFrom({"AngryPig": gdjs.Untitled_32sceneCode.GDAngryPigObjects1});
gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10235628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpawnPoint"), gdjs.Untitled_32sceneCode.GDSpawnPointObjects1);
gdjs.Untitled_32sceneCode.GDAngryPigObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAngryPigObjects1Objects, (( gdjs.Untitled_32sceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSpawnPointObjects1[0].getPointX("")), 534, "");
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlantObjects1Objects = Hashtable.newFrom({"Plant": gdjs.Untitled_32sceneCode.GDPlantObjects1});
gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10238684);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpawnPoint"), gdjs.Untitled_32sceneCode.GDSpawnPointObjects1);
gdjs.Untitled_32sceneCode.GDPlantObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlantObjects1Objects, (( gdjs.Untitled_32sceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSpawnPointObjects1[0].getPointX("")), 509, "");
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGhostObjects1Objects = Hashtable.newFrom({"Ghost": gdjs.Untitled_32sceneCode.GDGhostObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.Untitled_32sceneCode.GDMushroomObjects1});
gdjs.Untitled_32sceneCode.asyncCallback10240036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Ghost"), gdjs.Untitled_32sceneCode.GDGhostObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGhostObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGhostObjects2[i].getBehavior("Animation").setAnimationName("Appear");
}
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDGhostObjects1) asyncObjectsList.addObject("Ghost", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10240036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAngryPigObjects1Objects = Hashtable.newFrom({"AngryPig": gdjs.Untitled_32sceneCode.GDAngryPigObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.Untitled_32sceneCode.GDMushroomObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.Untitled_32sceneCode.GDMushroomObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAppleObjects1Objects = Hashtable.newFrom({"Apple": gdjs.Untitled_32sceneCode.GDAppleObjects1});
gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Apple"), gdjs.Untitled_32sceneCode.GDAppleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mushroom"), gdjs.Untitled_32sceneCode.GDMushroomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAppleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.Untitled_32sceneCode.GDMushroomObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGhostObjects1Objects = Hashtable.newFrom({"Ghost": gdjs.Untitled_32sceneCode.GDGhostObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.Untitled_32sceneCode.GDMushroomObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAngryPigObjects1Objects = Hashtable.newFrom({"AngryPig": gdjs.Untitled_32sceneCode.GDAngryPigObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.Untitled_32sceneCode.GDMushroomObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlantObjects1Objects = Hashtable.newFrom({"Plant": gdjs.Untitled_32sceneCode.GDPlantObjects1});
gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AppleTimer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GhostTimer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PigTimer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlantTimer");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GrassAndTreeBackground"), gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("YellowFloor"), gdjs.Untitled_32sceneCode.GDYellowFloorObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects1[i].setXOffset(gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDYellowFloorObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDYellowFloorObjects1[i].setXOffset(gdjs.Untitled_32sceneCode.GDYellowFloorObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mushroom"), gdjs.Untitled_32sceneCode.GDMushroomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDMushroomObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDMushroomObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDMushroomObjects1[k] = gdjs.Untitled_32sceneCode.GDMushroomObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDMushroomObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDMushroomObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMushroomObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMushroomObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMushroomObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMushroomObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Apple"), gdjs.Untitled_32sceneCode.GDAppleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mushroom"), gdjs.Untitled_32sceneCode.GDMushroomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAppleObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAppleObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDAppleObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDMushroomObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAppleObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAppleObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMushroomObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMushroomObjects1[i].getBehavior("Animation").setAnimationName("Happy");
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AngryPig"), gdjs.Untitled_32sceneCode.GDAngryPigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.Untitled_32sceneCode.GDGhostObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mushroom"), gdjs.Untitled_32sceneCode.GDMushroomObjects1);
gdjs.copyArray(runtimeScene.getObjects("Plant"), gdjs.Untitled_32sceneCode.GDPlantObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGhostObjects1ObjectsGDgdjs_9546Untitled_959532sceneCode_9546GDPlantObjects1ObjectsGDgdjs_9546Untitled_959532sceneCode_9546GDAngryPigObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDMushroomObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMushroomObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMushroomObjects1[i].getBehavior("Animation").setAnimationName("Hit");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMushroomObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMushroomObjects1[i].getBehavior("PlatformerObject").setCanNotAirJump();
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AngryPig"), gdjs.Untitled_32sceneCode.GDAngryPigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.Untitled_32sceneCode.GDGhostObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGhostObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGhostObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAngryPigObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAngryPigObjects1[i].getBehavior("Animation").setAnimationName("Walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mushroom"), gdjs.Untitled_32sceneCode.GDMushroomObjects1);
gdjs.copyArray(runtimeScene.getObjects("Plant"), gdjs.Untitled_32sceneCode.GDPlantObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlantObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlantObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlantObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlantObjects1[i].getBehavior("Animation").setAnimationName("Attack");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "AppleTimer", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 4));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(0.8, 2));
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AngryPig"), gdjs.Untitled_32sceneCode.GDAngryPigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Apple"), gdjs.Untitled_32sceneCode.GDAppleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.Untitled_32sceneCode.GDGhostObjects1);
gdjs.copyArray(runtimeScene.getObjects("Plant"), gdjs.Untitled_32sceneCode.GDPlantObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAppleObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAppleObjects1[i].setX(gdjs.Untitled_32sceneCode.GDAppleObjects1[i].getX() - (5));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGhostObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGhostObjects1[i].setX(gdjs.Untitled_32sceneCode.GDGhostObjects1[i].getX() - (5));
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlantObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlantObjects1[i].setX(gdjs.Untitled_32sceneCode.GDPlantObjects1[i].getX() - (5));
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAngryPigObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAngryPigObjects1[i].setX(gdjs.Untitled_32sceneCode.GDAngryPigObjects1[i].getX() - (5));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "GhostTimer", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(0, 7));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(0.8, 3));
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "PigTimer", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(0, 7));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(0.8, 3));
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "PlantTimer", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(0, 7));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(0.8, 3));
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.Untitled_32sceneCode.GDGhostObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mushroom"), gdjs.Untitled_32sceneCode.GDMushroomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGhostObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGhostObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGhostObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGhostObjects1[i].getBehavior("Animation").setAnimationName("Desappear");
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AngryPig"), gdjs.Untitled_32sceneCode.GDAngryPigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mushroom"), gdjs.Untitled_32sceneCode.GDMushroomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAngryPigObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDAngryPigObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAngryPigObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAngryPigObjects1[i].getBehavior("Animation").setAnimationName("Hit 2");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OnesPlace"), gdjs.Untitled_32sceneCode.GDOnesPlaceObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnesPlaceObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnesPlaceObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("OnesPlace"), gdjs.Untitled_32sceneCode.GDOnesPlaceObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDOnesPlaceObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDOnesPlaceObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.Untitled_32sceneCode.GDGhostObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mushroom"), gdjs.Untitled_32sceneCode.GDMushroomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGhostObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10244708);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AngryPig"), gdjs.Untitled_32sceneCode.GDAngryPigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mushroom"), gdjs.Untitled_32sceneCode.GDMushroomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAngryPigObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10245564);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mushroom"), gdjs.Untitled_32sceneCode.GDMushroomObjects1);
gdjs.copyArray(runtimeScene.getObjects("Plant"), gdjs.Untitled_32sceneCode.GDPlantObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroomObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlantObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10246492);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).sub(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) <= 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDMushroomObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMushroomObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGhostObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGhostObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAngryPigObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAngryPigObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlantObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlantObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCheckpoint2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDCheckpoint2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDTrunkObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTrunkObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloudsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloudsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDYellowFloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDYellowFloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAppleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAppleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnPointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnPointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDOnesPlaceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDOnesPlaceObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTensPlaceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTensPlaceObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHundredsPlaceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHundredsPlaceObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDThousandsPlaceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDThousandsPlaceObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDApplesScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDApplesScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDInstructionsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDInstructionsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDApple2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDApple2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDInstructions2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDInstructions2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList8(runtimeScene);
gdjs.Untitled_32sceneCode.GDMushroomObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMushroomObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGhostObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGhostObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAngryPigObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAngryPigObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlantObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlantObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCheckpoint2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDCheckpoint2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDTrunkObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTrunkObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloudsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloudsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDYellowFloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDYellowFloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAppleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAppleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnPointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnPointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDOnesPlaceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDOnesPlaceObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTensPlaceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTensPlaceObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHundredsPlaceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHundredsPlaceObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDThousandsPlaceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDThousandsPlaceObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDApplesScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDApplesScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDInstructionsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDInstructionsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDApple2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDApple2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDInstructions2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDInstructions2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
