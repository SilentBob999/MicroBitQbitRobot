'use strict';
pxsim.noRefCounting();
pxsim.setTitle("Qbit");
pxsim.setConfigData({}, {});


var _main___P1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = globals.beatsPerMinute___282;
    r0 = 120;
    globals.beatsPerMinute___282 = (r0);
    r0 = pxsim.Array_.mk();
    s.tmp_0 = r0;
    r0 = globals.freqTable___283;
    r0 = s.tmp_0;
    globals.freqTable___283 = (r0);
    r0 = globals.obstacleSensor1___329;
    r0 = false;
    globals.obstacleSensor1___329 = (r0);
    r0 = globals.obstacleSensor2___330;
    r0 = false;
    globals.obstacleSensor2___330 = (r0);
    r0 = globals.currentVoltage___331;
    r0 = 0;
    globals.currentVoltage___331 = (r0);
    r0 = globals.versionFlag___333;
    r0 = false;
    globals.versionFlag___333 = (r0);
    r0 = globals.readTimes___334;
    r0 = 0;
    globals.readTimes___334 = (r0);
    r0 = pxsim.String_.mkEmpty();
    s.tmp_0 = r0;
    r0 = globals.handleCmd___337;
    r0 = s.tmp_0;
    globals.handleCmd___337 = (r0);
    r0 = globals.MaxSpeed___505;
    r0 = 0;
    globals.MaxSpeed___505 = (r0);
    r0 = globals.MaxSpeedR___506;
    r0 = 0;
    globals.MaxSpeedR___506 = (r0);
    r0 = globals.M2Target___507;
    r0 = 0;
    globals.M2Target___507 = (r0);
    r0 = globals.Motor2Speed___508;
    r0 = 0;
    globals.Motor2Speed___508 = (r0);
    r0 = globals.M1Target___509;
    r0 = 0;
    globals.M1Target___509 = (r0);
    r0 = globals.Motor1Speed___510;
    r0 = 0;
    globals.Motor1Speed___510 = (r0);
    r0 = globals.UltrasonicVar___511;
    r0 = 0;
    globals.UltrasonicVar___511 = (r0);
    r0 = pxsim.input.onGesture(8, inline__P512);
    r0 = pxsim.input.onGesture(9, inline__P513);
    s.tmp_0 = { fn: qbitInit__P335, parent: s };
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.tmp_0 = { fn: setQbitRun__P348, parent: s };
    r0 = 1;
    s.tmp_0.arg0 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
    s.tmp_0 = { fn: beginMelody__P299, parent: s };
    s.tmp_1 = { fn: builtInMelody__P297, parent: s };
    r0 = 18;
    s.tmp_1.arg0 = r0;
    s.pc = 5;
    return actionCall(s.tmp_1)
  case 5:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    r0 = 1;
    s.tmp_0.arg1 = r0;
    s.pc = 4;
    return actionCall(s.tmp_0)
  case 4:
    r0 = s.retval;
    r0 = globals.MaxSpeed___505;
    r0 = 50;
    globals.MaxSpeed___505 = (r0);
    r0 = globals.MaxSpeedR___506;
    r0 = -50;
    globals.MaxSpeedR___506 = (r0);
    r0 = globals.M1Target___509;
    r0 = 0;
    globals.M1Target___509 = (r0);
    r0 = globals.M2Target___507;
    r0 = 0;
    globals.M2Target___507 = (r0);
    r0 = globals.Motor1Speed___510;
    r0 = 0;
    globals.Motor1Speed___510 = (r0);
    r0 = globals.Motor2Speed___508;
    r0 = 0;
    globals.Motor2Speed___508 = (r0);
    r0 = pxsim.basic.forever(inline__P528);
    return leave(s, r0)
  default: oops()
} } }
_main___P1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"pxt_modules/qbit/main.ts","functionName":"<main>"}
_main___P1.continuations = [  ]



var inline__P512  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    return leave(s, r0)
  default: oops()
} } }
inline__P512.info = {"start":163,"length":16,"line":7,"column":32,"endLine":9,"endColumn":1,"fileName":"main.ts","functionName":"inline"}



var inline__P513  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = { fn: playTone__P286, parent: s };
    r0 = 262;
    s.tmp_0.arg0 = r0;
    s.tmp_1 = { fn: beat__P291, parent: s };
    r0 = 4;
    s.tmp_1.arg0 = r0;
    s.pc = 3;
    return actionCall(s.tmp_1)
  case 3:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.tmp_0 = { fn: playTone__P286, parent: s };
    r0 = 262;
    s.tmp_0.arg0 = r0;
    s.tmp_1 = { fn: beat__P291, parent: s };
    r0 = 8;
    s.tmp_1.arg0 = r0;
    s.pc = 5;
    return actionCall(s.tmp_1)
  case 5:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.pc = 4;
    return actionCall(s.tmp_0)
  case 4:
    r0 = s.retval;
    s.tmp_0 = { fn: playTone__P286, parent: s };
    r0 = 262;
    s.tmp_0.arg0 = r0;
    s.tmp_1 = { fn: beat__P291, parent: s };
    r0 = 2;
    s.tmp_1.arg0 = r0;
    s.pc = 7;
    return actionCall(s.tmp_1)
  case 7:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.pc = 6;
    return actionCall(s.tmp_0)
  case 6:
    r0 = s.retval;
    s.tmp_0 = { fn: constrain__P11, parent: s };
    r0 = globals.M1Target___509;
    s.tmp_0.arg0 = r0;
    r0 = -10;
    s.tmp_0.arg1 = r0;
    r0 = 10;
    s.tmp_0.arg2 = r0;
    s.pc = 8;
    return actionCall(s.tmp_0)
  case 8:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = globals.M1Target___509;
    r0 = s.tmp_1;
    globals.M1Target___509 = (r0);
    s.tmp_0 = { fn: constrain__P11, parent: s };
    r0 = globals.M2Target___507;
    s.tmp_0.arg0 = r0;
    r0 = -10;
    s.tmp_0.arg1 = r0;
    r0 = 10;
    s.tmp_0.arg2 = r0;
    s.pc = 9;
    return actionCall(s.tmp_0)
  case 9:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = globals.M2Target___507;
    r0 = s.tmp_1;
    globals.M2Target___507 = (r0);
    s.tmp_0 = { fn: Move22__P514, parent: s };
    s.pc = 10;
    return actionCall(s.tmp_0)
  case 10:
    r0 = s.retval;
    setupResume(s, 11);
    pxsim.basic.pause(200);
    checkResumeConsumed();
    return;
  case 11:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
inline__P513.info = {"start":211,"length":317,"line":10,"column":30,"endLine":18,"endColumn":1,"fileName":"main.ts","functionName":"inline"}



var Move22__P514  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = globals.M1Target___509;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 < 30);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBool(s.tmp_1);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_1;
    { step = 2; continue; }
  case 1:
    r0 = pxsim.langsupp.ignore(s.tmp_1);
    r0 = globals.M2Target___507;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 < 30);
    { step = 2; continue; }
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_3);
    if (!r0) { step = 5; continue; }
    r0 = globals.M1Target___509;
    s.tmp_4 = r0;
    r0 = globals.M2Target___507;
    s.tmp_5 = r0;
    r0 = (s.tmp_4 > s.tmp_5);
    s.tmp_6 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_6);
    if (!r0) { step = 3; continue; }
    r0 = globals.M1Target___509;
    s.tmp_7 = r0;
    r0 = (s.tmp_7 + 20);
    s.tmp_8 = r0;
    r0 = globals.M1Target___509;
    r0 = s.tmp_8;
    globals.M1Target___509 = (r0);
    r0 = globals.M2Target___507;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 - 20);
    s.tmp_1 = r0;
    r0 = globals.M2Target___507;
    r0 = s.tmp_1;
    globals.M2Target___507 = (r0);
    { step = 4; continue; }
  case 3:
    r0 = globals.M1Target___509;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 - 20);
    s.tmp_1 = r0;
    r0 = globals.M1Target___509;
    r0 = s.tmp_1;
    globals.M1Target___509 = (r0);
    r0 = globals.M2Target___507;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 20);
    s.tmp_1 = r0;
    r0 = globals.M2Target___507;
    r0 = s.tmp_1;
    globals.M2Target___507 = (r0);
  case 4:
    { step = 6; continue; }
  case 5:
  case 6:
    s.tmp_0 = { fn: constrain__P11, parent: s };
    r0 = globals.M1Target___509;
    s.tmp_0.arg0 = r0;
    r0 = globals.MaxSpeedR___506;
    s.tmp_0.arg1 = r0;
    r0 = globals.MaxSpeed___505;
    s.tmp_0.arg2 = r0;
    s.pc = 8;
    return actionCall(s.tmp_0)
  case 8:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = globals.Motor1Speed___510;
    r0 = s.tmp_1;
    globals.Motor1Speed___510 = (r0);
    s.tmp_0 = { fn: constrain__P11, parent: s };
    r0 = globals.M2Target___507;
    s.tmp_0.arg0 = r0;
    r0 = globals.MaxSpeedR___506;
    s.tmp_0.arg1 = r0;
    r0 = globals.MaxSpeed___505;
    s.tmp_0.arg2 = r0;
    s.pc = 9;
    return actionCall(s.tmp_0)
  case 9:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = globals.Motor2Speed___508;
    r0 = s.tmp_1;
    globals.Motor2Speed___508 = (r0);
    s.tmp_0 = { fn: setMotorSpeed__P344, parent: s };
    r0 = globals.Motor1Speed___510;
    s.tmp_0.arg0 = r0;
    r0 = globals.Motor2Speed___508;
    s.tmp_0.arg1 = r0;
    s.pc = 10;
    return actionCall(s.tmp_0)
  case 10:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
Move22__P514.info = {"start":530,"length":456,"line":19,"column":0,"endLine":32,"endColumn":1,"fileName":"main.ts","functionName":"Move22"}



var setMotorSpeed__P344  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.buf___517 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 > 100);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBool(s.tmp_1);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_1;
    { step = 2; continue; }
  case 1:
    r0 = pxsim.langsupp.ignore(s.tmp_1);
    r0 = s.arg0;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 < -100);
    { step = 2; continue; }
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBool(s.tmp_3);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_3;
    { step = 4; continue; }
  case 3:
    r0 = pxsim.langsupp.ignore(s.tmp_3);
    r0 = s.arg1;
    s.tmp_4 = r0;
    r0 = (s.tmp_4 > 100);
    { step = 4; continue; }
  case 4:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim.numops.toBool(s.tmp_5);
    if (!r0) { step = 5; continue; }
    r0 = s.tmp_5;
    { step = 6; continue; }
  case 5:
    r0 = pxsim.langsupp.ignore(s.tmp_5);
    r0 = s.arg1;
    s.tmp_6 = r0;
    r0 = (s.tmp_6 < -100);
    { step = 6; continue; }
  case 6:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_7);
    if (!r0) { step = 7; continue; }
    { step = 9; continue; }
    { step = 8; continue; }
  case 7:
  case 8:
    r0 = s.arg0;
    s.tmp_8 = r0;
    r0 = (s.tmp_8 * -1);
    s.tmp_9 = r0;
    r0 = s.arg0;
    r0 = s.tmp_9;
    s.arg0 = (r0);
    r0 = s.arg1;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 * -1);
    s.tmp_1 = r0;
    r0 = s.arg1;
    r0 = s.tmp_1;
    s.arg1 = (r0);
    r0 = pxsim.pins.createBuffer(6);
    s.tmp_0 = r0;
    r0 = s.buf___517;
    r0 = s.tmp_0;
    s.buf___517 = (r0);
    r0 = s.buf___517;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 0, 85);
    r0 = s.buf___517;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 1, 85);
    r0 = s.buf___517;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 2, 4);
    r0 = s.buf___517;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 3, 50);
    r0 = s.buf___517;
    s.tmp_0 = r0;
    r0 = s.arg0;
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 4, s.tmp_1);
    r0 = s.buf___517;
    s.tmp_0 = r0;
    r0 = s.arg1;
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 5, s.tmp_1);
    r0 = s.buf___517;
    s.tmp_0 = r0;
    r0 = pxsim.serial.writeBuffer(s.tmp_0);
  case 9:
    r0 = s.buf___517;
    return leave(s, r0)
  default: oops()
} } }
setMotorSpeed__P344.info = {"start":7346,"length":418,"line":277,"column":4,"endLine":291,"endColumn":1,"fileName":"pxt_modules/qbit/main.ts","functionName":"setMotorSpeed"}



var constrain__P11  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = s.arg1;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    s.tmp_2 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_2);
    if (!r0) { step = 1; continue; }
    r0 = s.arg1;
    { step = 4; continue; }
  case 1:
    r0 = s.arg0;
    s.tmp_3 = r0;
    r0 = s.arg2;
    s.tmp_4 = r0;
    r0 = (s.tmp_3 > s.tmp_4);
    s.tmp_5 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_5);
    if (!r0) { step = 2; continue; }
    r0 = s.arg2;
    { step = 3; continue; }
  case 2:
    r0 = s.arg0;
    { step = 3; continue; }
  case 3:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = s.tmp_6;
    { step = 4; continue; }
  case 4:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = s.tmp_7;
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
constrain__P11.info = {"start":1679,"length":147,"line":34,"column":4,"endLine":36,"endColumn":5,"fileName":"pxt_modules/core/math.ts","functionName":"constrain"}



var beat__P291  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.beat___522 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = { fn: init__P290, parent: s };
    s.pc = 13;
    return actionCall(s.tmp_0)
  case 13:
    r0 = s.retval;
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == null);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0;
    r0 = 1;
    s.arg0 = (r0);
    { step = 2; continue; }
  case 1:
  case 2:
    r0 = globals.beatsPerMinute___282;
    s.tmp_0 = r0;
    r0 = (60000 / s.tmp_0);
    s.tmp_1 = r0;
    r0 = s.beat___522;
    r0 = s.tmp_1;
    s.beat___522 = (r0);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = pxsim.pxtcore.switch_eq(2, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim.pxtcore.switch_eq(4, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim.pxtcore.switch_eq(8, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim.pxtcore.switch_eq(16, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim.pxtcore.switch_eq(32, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim.pxtcore.switch_eq(64, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = s.tmp_0;
    r0 = s.tmp_0;
    { step = 9; continue; }
  case 3:
    r0 = s.beat___522;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 / 2);
    { step = 11; continue; }
  case 4:
    r0 = s.beat___522;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 / 4);
    { step = 11; continue; }
  case 5:
    r0 = s.beat___522;
    s.tmp_3 = r0;
    r0 = (s.tmp_3 / 8);
    { step = 11; continue; }
  case 6:
    r0 = s.beat___522;
    s.tmp_4 = r0;
    r0 = (s.tmp_4 / 16);
    { step = 11; continue; }
  case 7:
    r0 = s.beat___522;
    s.tmp_5 = r0;
    r0 = (s.tmp_5 * 2);
    { step = 11; continue; }
  case 8:
    r0 = s.beat___522;
    s.tmp_6 = r0;
    r0 = (s.tmp_6 * 4);
    { step = 11; continue; }
  case 9:
    r0 = s.beat___522;
    { step = 11; continue; }
  case 11:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.beat___522;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
beat__P291.info = {"start":7573,"length":585,"line":234,"column":4,"endLine":247,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"beat"}



var init__P290  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = globals.beatsPerMinute___282;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 <= 0);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 1; continue; }
    r0 = globals.beatsPerMinute___282;
    r0 = 120;
    globals.beatsPerMinute___282 = (r0);
    { step = 2; continue; }
  case 1:
  case 2:
    r0 = globals.freqTable___283;
    s.tmp_0 = r0;
    r0 = pxsim.Array_.length(s.tmp_0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
    s.tmp_2 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_2);
    if (!r0) { step = 3; continue; }
    r0 = pxsim.Array_.mk();
    s.tmp_3 = r0;
    r0 = pxsim.Array_.push(s.tmp_3, 31);
    r0 = pxsim.Array_.push(s.tmp_3, 33);
    r0 = pxsim.Array_.push(s.tmp_3, 35);
    r0 = pxsim.Array_.push(s.tmp_3, 37);
    r0 = pxsim.Array_.push(s.tmp_3, 39);
    r0 = pxsim.Array_.push(s.tmp_3, 41);
    r0 = pxsim.Array_.push(s.tmp_3, 44);
    r0 = pxsim.Array_.push(s.tmp_3, 46);
    r0 = pxsim.Array_.push(s.tmp_3, 49);
    r0 = pxsim.Array_.push(s.tmp_3, 52);
    r0 = pxsim.Array_.push(s.tmp_3, 55);
    r0 = pxsim.Array_.push(s.tmp_3, 58);
    r0 = pxsim.Array_.push(s.tmp_3, 62);
    r0 = pxsim.Array_.push(s.tmp_3, 65);
    r0 = pxsim.Array_.push(s.tmp_3, 69);
    r0 = pxsim.Array_.push(s.tmp_3, 73);
    r0 = pxsim.Array_.push(s.tmp_3, 78);
    r0 = pxsim.Array_.push(s.tmp_3, 82);
    r0 = pxsim.Array_.push(s.tmp_3, 87);
    r0 = pxsim.Array_.push(s.tmp_3, 92);
    r0 = pxsim.Array_.push(s.tmp_3, 98);
    r0 = pxsim.Array_.push(s.tmp_3, 104);
    r0 = pxsim.Array_.push(s.tmp_3, 110);
    r0 = pxsim.Array_.push(s.tmp_3, 117);
    r0 = pxsim.Array_.push(s.tmp_3, 123);
    r0 = pxsim.Array_.push(s.tmp_3, 131);
    r0 = pxsim.Array_.push(s.tmp_3, 139);
    r0 = pxsim.Array_.push(s.tmp_3, 147);
    r0 = pxsim.Array_.push(s.tmp_3, 156);
    r0 = pxsim.Array_.push(s.tmp_3, 165);
    r0 = pxsim.Array_.push(s.tmp_3, 175);
    r0 = pxsim.Array_.push(s.tmp_3, 185);
    r0 = pxsim.Array_.push(s.tmp_3, 196);
    r0 = pxsim.Array_.push(s.tmp_3, 208);
    r0 = pxsim.Array_.push(s.tmp_3, 220);
    r0 = pxsim.Array_.push(s.tmp_3, 233);
    r0 = pxsim.Array_.push(s.tmp_3, 247);
    r0 = pxsim.Array_.push(s.tmp_3, 262);
    r0 = pxsim.Array_.push(s.tmp_3, 277);
    r0 = pxsim.Array_.push(s.tmp_3, 294);
    r0 = pxsim.Array_.push(s.tmp_3, 311);
    r0 = pxsim.Array_.push(s.tmp_3, 330);
    r0 = pxsim.Array_.push(s.tmp_3, 349);
    r0 = pxsim.Array_.push(s.tmp_3, 370);
    r0 = pxsim.Array_.push(s.tmp_3, 392);
    r0 = pxsim.Array_.push(s.tmp_3, 415);
    r0 = pxsim.Array_.push(s.tmp_3, 440);
    r0 = pxsim.Array_.push(s.tmp_3, 466);
    r0 = pxsim.Array_.push(s.tmp_3, 494);
    r0 = pxsim.Array_.push(s.tmp_3, 523);
    r0 = pxsim.Array_.push(s.tmp_3, 554);
    r0 = pxsim.Array_.push(s.tmp_3, 587);
    r0 = pxsim.Array_.push(s.tmp_3, 622);
    r0 = pxsim.Array_.push(s.tmp_3, 659);
    r0 = pxsim.Array_.push(s.tmp_3, 698);
    r0 = pxsim.Array_.push(s.tmp_3, 740);
    r0 = pxsim.Array_.push(s.tmp_3, 784);
    r0 = pxsim.Array_.push(s.tmp_3, 831);
    r0 = pxsim.Array_.push(s.tmp_3, 880);
    r0 = pxsim.Array_.push(s.tmp_3, 932);
    r0 = pxsim.Array_.push(s.tmp_3, 988);
    r0 = pxsim.Array_.push(s.tmp_3, 1047);
    r0 = pxsim.Array_.push(s.tmp_3, 1109);
    r0 = pxsim.Array_.push(s.tmp_3, 1175);
    r0 = pxsim.Array_.push(s.tmp_3, 1245);
    r0 = pxsim.Array_.push(s.tmp_3, 1319);
    r0 = pxsim.Array_.push(s.tmp_3, 1397);
    r0 = pxsim.Array_.push(s.tmp_3, 1480);
    r0 = pxsim.Array_.push(s.tmp_3, 1568);
    r0 = pxsim.Array_.push(s.tmp_3, 1661);
    r0 = pxsim.Array_.push(s.tmp_3, 1760);
    r0 = pxsim.Array_.push(s.tmp_3, 1865);
    r0 = pxsim.Array_.push(s.tmp_3, 1976);
    r0 = pxsim.Array_.push(s.tmp_3, 2093);
    r0 = pxsim.Array_.push(s.tmp_3, 2217);
    r0 = pxsim.Array_.push(s.tmp_3, 2349);
    r0 = pxsim.Array_.push(s.tmp_3, 2489);
    r0 = pxsim.Array_.push(s.tmp_3, 2637);
    r0 = pxsim.Array_.push(s.tmp_3, 2794);
    r0 = pxsim.Array_.push(s.tmp_3, 2960);
    r0 = pxsim.Array_.push(s.tmp_3, 3136);
    r0 = pxsim.Array_.push(s.tmp_3, 3322);
    r0 = pxsim.Array_.push(s.tmp_3, 3520);
    r0 = pxsim.Array_.push(s.tmp_3, 3729);
    r0 = pxsim.Array_.push(s.tmp_3, 3951);
    r0 = pxsim.Array_.push(s.tmp_3, 4186);
    r0 = globals.freqTable___283;
    r0 = s.tmp_3;
    globals.freqTable___283 = (r0);
    { step = 4; continue; }
  case 3:
  case 4:
    return leave(s, r0)
  default: oops()
} } }
init__P290.info = {"start":6851,"length":560,"line":224,"column":4,"endLine":227,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"init"}



var playTone__P286  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = globals._playTone___284;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = globals._playTone___284;
    s.tmp_1 = r0;
    r0 = s.arg0;
    s.tmp_2 = r0;
    r0 = s.arg1;
    s.tmp_3 = r0;
    setupResume(s, 4);
    pxsim.pxtcore.runAction2(s.tmp_1, s.tmp_2, s.tmp_3);
    checkResumeConsumed();
    return;
  case 4:
    r0 = s.retval;
    { step = 2; continue; }
  case 1:
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = s.arg1;
    s.tmp_1 = r0;
    setupResume(s, 5);
    pxsim.pins.analogPitch(s.tmp_0, s.tmp_1);
    checkResumeConsumed();
    return;
  case 5:
    r0 = s.retval;
  case 2:
    return leave(s, r0)
  default: oops()
} } }
playTone__P286.info = {"start":5511,"length":164,"line":181,"column":4,"endLine":184,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"playTone"}



var inline__P528  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = { fn: ReadSensor22__P527, parent: s };
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.tmp_0 = { fn: Move22__P514, parent: s };
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
inline__P528.info = {"start":1778,"length":47,"line":57,"column":14,"endLine":60,"endColumn":1,"fileName":"main.ts","functionName":"inline"}



var ReadSensor22__P527  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = { fn: Ultrasonic__P346, parent: s };
    s.pc = 6;
    return actionCall(s.tmp_0)
  case 6:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = globals.UltrasonicVar___511;
    r0 = s.tmp_1;
    globals.UltrasonicVar___511 = (r0);
    s.tmp_0 = { fn: constrain__P11, parent: s };
    s.tmp_1 = { fn: map__P10, parent: s };
    r0 = globals.UltrasonicVar___511;
    s.tmp_1.arg0 = r0;
    r0 = 0;
    s.tmp_1.arg1 = r0;
    r0 = 200;
    s.tmp_1.arg2 = r0;
    r0 = -100;
    s.tmp_1.arg3 = r0;
    r0 = 100;
    s.tmp_1.arg4 = r0;
    s.pc = 8;
    return actionCall(s.tmp_1)
  case 8:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    r0 = -100;
    s.tmp_0.arg1 = r0;
    r0 = 100;
    s.tmp_0.arg2 = r0;
    s.pc = 7;
    return actionCall(s.tmp_0)
  case 7:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = globals.M1Target___509;
    r0 = s.tmp_2;
    globals.M1Target___509 = (r0);
    s.tmp_0 = { fn: constrain__P11, parent: s };
    s.tmp_1 = { fn: map__P10, parent: s };
    r0 = globals.UltrasonicVar___511;
    s.tmp_1.arg0 = r0;
    r0 = 0;
    s.tmp_1.arg1 = r0;
    r0 = 200;
    s.tmp_1.arg2 = r0;
    r0 = -100;
    s.tmp_1.arg3 = r0;
    r0 = 100;
    s.tmp_1.arg4 = r0;
    s.pc = 10;
    return actionCall(s.tmp_1)
  case 10:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    r0 = -100;
    s.tmp_0.arg1 = r0;
    r0 = 100;
    s.tmp_0.arg2 = r0;
    s.pc = 9;
    return actionCall(s.tmp_0)
  case 9:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = globals.M2Target___507;
    r0 = s.tmp_2;
    globals.M2Target___507 = (r0);
  case 1:
    s.tmp_0 = { fn: obstacleSensor__P350, parent: s };
    r0 = 1;
    s.tmp_0.arg0 = r0;
    s.pc = 11;
    return actionCall(s.tmp_0)
  case 11:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = globals.M1Target___509;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + 20);
    s.tmp_3 = r0;
    r0 = globals.M1Target___509;
    r0 = s.tmp_3;
    globals.M1Target___509 = (r0);
    r0 = globals.M2Target___507;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 - 80);
    s.tmp_1 = r0;
    r0 = globals.M2Target___507;
    r0 = s.tmp_1;
    globals.M2Target___507 = (r0);
    s.tmp_0 = { fn: Move22__P514, parent: s };
    s.pc = 12;
    return actionCall(s.tmp_0)
  case 12:
    r0 = s.retval;
    { step = 1; continue; }
  case 2:
  case 3:
    s.tmp_0 = { fn: obstacleSensor__P350, parent: s };
    r0 = 2;
    s.tmp_0.arg0 = r0;
    s.pc = 13;
    return actionCall(s.tmp_0)
  case 13:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = globals.M1Target___509;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - 80);
    s.tmp_3 = r0;
    r0 = globals.M1Target___509;
    r0 = s.tmp_3;
    globals.M1Target___509 = (r0);
    r0 = globals.M2Target___507;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 20);
    s.tmp_1 = r0;
    r0 = globals.M2Target___507;
    r0 = s.tmp_1;
    globals.M2Target___507 = (r0);
    s.tmp_0 = { fn: Move22__P514, parent: s };
    s.pc = 14;
    return actionCall(s.tmp_0)
  case 14:
    r0 = s.retval;
    { step = 3; continue; }
  case 4:
    return leave(s, r0)
  default: oops()
} } }
ReadSensor22__P527.info = {"start":987,"length":557,"line":33,"column":0,"endLine":47,"endColumn":1,"fileName":"main.ts","functionName":"ReadSensor22"}



var obstacleSensor__P350  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == 1);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 1; continue; }
    r0 = globals.obstacleSensor1___329;
    { step = 3; continue; }
    { step = 2; continue; }
  case 1:
    r0 = globals.obstacleSensor2___330;
    { step = 3; continue; }
  case 2:
  case 3:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
obstacleSensor__P350.info = {"start":10127,"length":254,"line":377,"column":4,"endLine":386,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"obstacleSensor"}



var map__P10  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = s.arg1;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 - s.tmp_1);
    s.tmp_2 = r0;
    r0 = s.arg4;
    s.tmp_3 = r0;
    r0 = s.arg3;
    s.tmp_4 = r0;
    r0 = (s.tmp_3 - s.tmp_4);
    s.tmp_5 = r0;
    r0 = (s.tmp_2 * s.tmp_5);
    s.tmp_6 = r0;
    r0 = s.arg2;
    s.tmp_7 = r0;
    r0 = s.arg1;
    s.tmp_8 = r0;
    r0 = (s.tmp_7 - s.tmp_8);
    s.tmp_9 = r0;
    r0 = (s.tmp_6 / s.tmp_9);
    s.tmp_10 = r0;
    r0 = s.arg3;
    s.tmp_11 = r0;
    r0 = (s.tmp_10 + s.tmp_11);
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
map__P10.info = {"start":1093,"length":202,"line":22,"column":4,"endLine":24,"endColumn":5,"fileName":"pxt_modules/core/math.ts","functionName":"map"}



var Ultrasonic__P346  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.echoPin___537 = undefined;
    s.trigPin___538 = undefined;
    s.d___539 = undefined;
    r0 = s.echoPin___537;
    r0 = 20;
    s.echoPin___537 = (r0);
    r0 = s.trigPin___538;
    r0 = 21;
    s.trigPin___538 = (r0);
    r0 = s.echoPin___537;
    s.tmp_0 = r0;
    r0 = pxsim.pins.setPull(s.tmp_0, 2);
    r0 = s.trigPin___538;
    s.tmp_0 = r0;
    r0 = pxsim.pins.setPull(s.tmp_0, 2);
    r0 = s.trigPin___538;
    s.tmp_0 = r0;
    r0 = pxsim.pins.digitalWritePin(s.tmp_0, 0);
    r0 = pxsim.control.waitMicros(5);
    r0 = s.trigPin___538;
    s.tmp_0 = r0;
    r0 = pxsim.pins.digitalWritePin(s.tmp_0, 1);
    r0 = pxsim.control.waitMicros(10);
    r0 = s.trigPin___538;
    s.tmp_0 = r0;
    r0 = pxsim.pins.digitalWritePin(s.tmp_0, 0);
    r0 = pxsim.control.waitMicros(5);
    r0 = s.echoPin___537;
    s.tmp_0 = r0;
    r0 = pxsim.pins.pulseIn(s.tmp_0, 4, 11600);
    s.tmp_1 = r0;
    r0 = s.d___539;
    r0 = s.tmp_1;
    s.d___539 = (r0);
    setupResume(s, 3);
    pxsim.basic.pause(10);
    checkResumeConsumed();
    return;
  case 3:
    r0 = s.retval;
    r0 = s.d___539;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 / 40);
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.echoPin___537;
    r0 = s.trigPin___538;
    r0 = s.d___539;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
Ultrasonic__P346.info = {"start":8245,"length":572,"line":312,"column":3,"endLine":330,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"Ultrasonic"}



var builtInMelody__P297  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = { fn: getMelody__P306, parent: s };
    r0 = s.arg0;
    s.tmp_0.arg0 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
builtInMelody__P297.info = {"start":9639,"length":99,"line":294,"column":4,"endLine":296,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"builtInMelody"}



var getMelody__P306  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = pxsim.pxtcore.switch_eq(0, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim.pxtcore.switch_eq(1, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim.pxtcore.switch_eq(2, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim.pxtcore.switch_eq(3, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim.pxtcore.switch_eq(4, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim.pxtcore.switch_eq(5, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim.pxtcore.switch_eq(6, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim.pxtcore.switch_eq(7, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim.pxtcore.switch_eq(8, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim.pxtcore.switch_eq(9, s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim.pxtcore.switch_eq(10, s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim.pxtcore.switch_eq(11, s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = pxsim.pxtcore.switch_eq(12, s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim.pxtcore.switch_eq(13, s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = pxsim.pxtcore.switch_eq(14, s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = pxsim.pxtcore.switch_eq(15, s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = pxsim.pxtcore.switch_eq(16, s.tmp_0);
    if (r0) { step = 17; continue; }
    r0 = pxsim.pxtcore.switch_eq(17, s.tmp_0);
    if (r0) { step = 18; continue; }
    r0 = pxsim.pxtcore.switch_eq(18, s.tmp_0);
    if (r0) { step = 19; continue; }
    r0 = pxsim.pxtcore.switch_eq(19, s.tmp_0);
    if (r0) { step = 20; continue; }
    r0 = s.tmp_0;
    r0 = s.tmp_0;
    { step = 21; continue; }
  case 1:
    r0 = pxsim.Array_.mk();
    s.tmp_1 = r0;
    r0 = pxsim.Array_.push(s.tmp_1, "r4:2");
    r0 = pxsim.Array_.push(s.tmp_1, "g");
    r0 = pxsim.Array_.push(s.tmp_1, "g");
    r0 = pxsim.Array_.push(s.tmp_1, "g");
    r0 = pxsim.Array_.push(s.tmp_1, "eb:8");
    r0 = pxsim.Array_.push(s.tmp_1, "r:2");
    r0 = pxsim.Array_.push(s.tmp_1, "f");
    r0 = pxsim.Array_.push(s.tmp_1, "f");
    r0 = pxsim.Array_.push(s.tmp_1, "f");
    r0 = pxsim.Array_.push(s.tmp_1, "d:8");
    r0 = s.tmp_1;
    { step = 23; continue; }
  case 2:
    r0 = pxsim.Array_.mk();
    s.tmp_2 = r0;
    r0 = pxsim.Array_.push(s.tmp_2, "d4:1");
    r0 = pxsim.Array_.push(s.tmp_2, "d#");
    r0 = pxsim.Array_.push(s.tmp_2, "e");
    r0 = pxsim.Array_.push(s.tmp_2, "c5:2");
    r0 = pxsim.Array_.push(s.tmp_2, "e4:1");
    r0 = pxsim.Array_.push(s.tmp_2, "c5:2");
    r0 = pxsim.Array_.push(s.tmp_2, "e4:1");
    r0 = pxsim.Array_.push(s.tmp_2, "c5:3");
    r0 = pxsim.Array_.push(s.tmp_2, "c:1");
    r0 = pxsim.Array_.push(s.tmp_2, "d");
    r0 = pxsim.Array_.push(s.tmp_2, "d#");
    r0 = pxsim.Array_.push(s.tmp_2, "e");
    r0 = pxsim.Array_.push(s.tmp_2, "c");
    r0 = pxsim.Array_.push(s.tmp_2, "d");
    r0 = pxsim.Array_.push(s.tmp_2, "e:2");
    r0 = pxsim.Array_.push(s.tmp_2, "b4:1");
    r0 = pxsim.Array_.push(s.tmp_2, "d5:2");
    r0 = pxsim.Array_.push(s.tmp_2, "c:4");
    r0 = s.tmp_2;
    { step = 23; continue; }
  case 3:
    r0 = pxsim.Array_.mk();
    s.tmp_3 = r0;
    r0 = pxsim.Array_.push(s.tmp_3, "c4:1");
    r0 = pxsim.Array_.push(s.tmp_3, "e");
    r0 = pxsim.Array_.push(s.tmp_3, "g");
    r0 = pxsim.Array_.push(s.tmp_3, "c5");
    r0 = pxsim.Array_.push(s.tmp_3, "e");
    r0 = pxsim.Array_.push(s.tmp_3, "g4");
    r0 = pxsim.Array_.push(s.tmp_3, "c5");
    r0 = pxsim.Array_.push(s.tmp_3, "e");
    r0 = pxsim.Array_.push(s.tmp_3, "c4");
    r0 = pxsim.Array_.push(s.tmp_3, "e");
    r0 = pxsim.Array_.push(s.tmp_3, "g");
    r0 = pxsim.Array_.push(s.tmp_3, "c5");
    r0 = pxsim.Array_.push(s.tmp_3, "e");
    r0 = pxsim.Array_.push(s.tmp_3, "g4");
    r0 = pxsim.Array_.push(s.tmp_3, "c5");
    r0 = pxsim.Array_.push(s.tmp_3, "e");
    r0 = pxsim.Array_.push(s.tmp_3, "c4");
    r0 = pxsim.Array_.push(s.tmp_3, "d");
    r0 = pxsim.Array_.push(s.tmp_3, "g");
    r0 = pxsim.Array_.push(s.tmp_3, "d5");
    r0 = pxsim.Array_.push(s.tmp_3, "f");
    r0 = pxsim.Array_.push(s.tmp_3, "g4");
    r0 = pxsim.Array_.push(s.tmp_3, "d5");
    r0 = pxsim.Array_.push(s.tmp_3, "f");
    r0 = pxsim.Array_.push(s.tmp_3, "c4");
    r0 = pxsim.Array_.push(s.tmp_3, "d");
    r0 = pxsim.Array_.push(s.tmp_3, "g");
    r0 = pxsim.Array_.push(s.tmp_3, "d5");
    r0 = pxsim.Array_.push(s.tmp_3, "f");
    r0 = pxsim.Array_.push(s.tmp_3, "g4");
    r0 = pxsim.Array_.push(s.tmp_3, "d5");
    r0 = pxsim.Array_.push(s.tmp_3, "f");
    r0 = pxsim.Array_.push(s.tmp_3, "b3");
    r0 = pxsim.Array_.push(s.tmp_3, "d4");
    r0 = pxsim.Array_.push(s.tmp_3, "g");
    r0 = pxsim.Array_.push(s.tmp_3, "d5");
    r0 = pxsim.Array_.push(s.tmp_3, "f");
    r0 = pxsim.Array_.push(s.tmp_3, "g4");
    r0 = pxsim.Array_.push(s.tmp_3, "d5");
    r0 = pxsim.Array_.push(s.tmp_3, "f");
    r0 = pxsim.Array_.push(s.tmp_3, "b3");
    r0 = pxsim.Array_.push(s.tmp_3, "d4");
    r0 = pxsim.Array_.push(s.tmp_3, "g");
    r0 = pxsim.Array_.push(s.tmp_3, "d5");
    r0 = pxsim.Array_.push(s.tmp_3, "f");
    r0 = pxsim.Array_.push(s.tmp_3, "g4");
    r0 = pxsim.Array_.push(s.tmp_3, "d5");
    r0 = pxsim.Array_.push(s.tmp_3, "f");
    r0 = pxsim.Array_.push(s.tmp_3, "c4");
    r0 = pxsim.Array_.push(s.tmp_3, "e");
    r0 = pxsim.Array_.push(s.tmp_3, "g");
    r0 = pxsim.Array_.push(s.tmp_3, "c5");
    r0 = pxsim.Array_.push(s.tmp_3, "e");
    r0 = pxsim.Array_.push(s.tmp_3, "g4");
    r0 = pxsim.Array_.push(s.tmp_3, "c5");
    r0 = pxsim.Array_.push(s.tmp_3, "e");
    r0 = pxsim.Array_.push(s.tmp_3, "c4");
    r0 = pxsim.Array_.push(s.tmp_3, "e");
    r0 = pxsim.Array_.push(s.tmp_3, "g");
    r0 = pxsim.Array_.push(s.tmp_3, "c5");
    r0 = pxsim.Array_.push(s.tmp_3, "e");
    r0 = pxsim.Array_.push(s.tmp_3, "g4");
    r0 = pxsim.Array_.push(s.tmp_3, "c5");
    r0 = pxsim.Array_.push(s.tmp_3, "e");
    r0 = s.tmp_3;
    { step = 23; continue; }
  case 4:
    r0 = pxsim.Array_.mk();
    s.tmp_4 = r0;
    r0 = pxsim.Array_.push(s.tmp_4, "e4");
    r0 = pxsim.Array_.push(s.tmp_4, "e");
    r0 = pxsim.Array_.push(s.tmp_4, "f");
    r0 = pxsim.Array_.push(s.tmp_4, "g");
    r0 = pxsim.Array_.push(s.tmp_4, "g");
    r0 = pxsim.Array_.push(s.tmp_4, "f");
    r0 = pxsim.Array_.push(s.tmp_4, "e");
    r0 = pxsim.Array_.push(s.tmp_4, "d");
    r0 = pxsim.Array_.push(s.tmp_4, "c");
    r0 = pxsim.Array_.push(s.tmp_4, "c");
    r0 = pxsim.Array_.push(s.tmp_4, "d");
    r0 = pxsim.Array_.push(s.tmp_4, "e");
    r0 = pxsim.Array_.push(s.tmp_4, "e:6");
    r0 = pxsim.Array_.push(s.tmp_4, "d:2");
    r0 = pxsim.Array_.push(s.tmp_4, "d:8");
    r0 = pxsim.Array_.push(s.tmp_4, "e:4");
    r0 = pxsim.Array_.push(s.tmp_4, "e");
    r0 = pxsim.Array_.push(s.tmp_4, "f");
    r0 = pxsim.Array_.push(s.tmp_4, "g");
    r0 = pxsim.Array_.push(s.tmp_4, "g");
    r0 = pxsim.Array_.push(s.tmp_4, "f");
    r0 = pxsim.Array_.push(s.tmp_4, "e");
    r0 = pxsim.Array_.push(s.tmp_4, "d");
    r0 = pxsim.Array_.push(s.tmp_4, "c");
    r0 = pxsim.Array_.push(s.tmp_4, "c");
    r0 = pxsim.Array_.push(s.tmp_4, "d");
    r0 = pxsim.Array_.push(s.tmp_4, "e");
    r0 = pxsim.Array_.push(s.tmp_4, "d:6");
    r0 = pxsim.Array_.push(s.tmp_4, "c:2");
    r0 = pxsim.Array_.push(s.tmp_4, "c:8");
    r0 = s.tmp_4;
    { step = 23; continue; }
  case 5:
    r0 = pxsim.Array_.mk();
    s.tmp_5 = r0;
    r0 = pxsim.Array_.push(s.tmp_5, "f#5:2");
    r0 = pxsim.Array_.push(s.tmp_5, "g#");
    r0 = pxsim.Array_.push(s.tmp_5, "c#:1");
    r0 = pxsim.Array_.push(s.tmp_5, "d#:2");
    r0 = pxsim.Array_.push(s.tmp_5, "b4:1");
    r0 = pxsim.Array_.push(s.tmp_5, "d5:1");
    r0 = pxsim.Array_.push(s.tmp_5, "c#");
    r0 = pxsim.Array_.push(s.tmp_5, "b4:2");
    r0 = pxsim.Array_.push(s.tmp_5, "b");
    r0 = pxsim.Array_.push(s.tmp_5, "c#5");
    r0 = pxsim.Array_.push(s.tmp_5, "d");
    r0 = pxsim.Array_.push(s.tmp_5, "d:1");
    r0 = pxsim.Array_.push(s.tmp_5, "c#");
    r0 = pxsim.Array_.push(s.tmp_5, "b4:1");
    r0 = pxsim.Array_.push(s.tmp_5, "c#5:1");
    r0 = pxsim.Array_.push(s.tmp_5, "d#");
    r0 = pxsim.Array_.push(s.tmp_5, "f#");
    r0 = pxsim.Array_.push(s.tmp_5, "g#");
    r0 = pxsim.Array_.push(s.tmp_5, "d#");
    r0 = pxsim.Array_.push(s.tmp_5, "f#");
    r0 = pxsim.Array_.push(s.tmp_5, "c#");
    r0 = pxsim.Array_.push(s.tmp_5, "d");
    r0 = pxsim.Array_.push(s.tmp_5, "b4");
    r0 = pxsim.Array_.push(s.tmp_5, "c#5");
    r0 = pxsim.Array_.push(s.tmp_5, "b4");
    r0 = pxsim.Array_.push(s.tmp_5, "d#5:2");
    r0 = pxsim.Array_.push(s.tmp_5, "f#");
    r0 = pxsim.Array_.push(s.tmp_5, "g#:1");
    r0 = pxsim.Array_.push(s.tmp_5, "d#");
    r0 = pxsim.Array_.push(s.tmp_5, "f#");
    r0 = pxsim.Array_.push(s.tmp_5, "c#");
    r0 = pxsim.Array_.push(s.tmp_5, "d#");
    r0 = pxsim.Array_.push(s.tmp_5, "b4");
    r0 = pxsim.Array_.push(s.tmp_5, "d5");
    r0 = pxsim.Array_.push(s.tmp_5, "d#");
    r0 = pxsim.Array_.push(s.tmp_5, "d");
    r0 = pxsim.Array_.push(s.tmp_5, "c#");
    r0 = pxsim.Array_.push(s.tmp_5, "b4");
    r0 = pxsim.Array_.push(s.tmp_5, "c#5");
    r0 = pxsim.Array_.push(s.tmp_5, "d:2");
    r0 = pxsim.Array_.push(s.tmp_5, "b4:1");
    r0 = pxsim.Array_.push(s.tmp_5, "c#5");
    r0 = pxsim.Array_.push(s.tmp_5, "d#");
    r0 = pxsim.Array_.push(s.tmp_5, "f#");
    r0 = pxsim.Array_.push(s.tmp_5, "c#");
    r0 = pxsim.Array_.push(s.tmp_5, "d");
    r0 = pxsim.Array_.push(s.tmp_5, "c#");
    r0 = pxsim.Array_.push(s.tmp_5, "b4");
    r0 = pxsim.Array_.push(s.tmp_5, "c#5:2");
    r0 = pxsim.Array_.push(s.tmp_5, "b4");
    r0 = pxsim.Array_.push(s.tmp_5, "c#5");
    r0 = pxsim.Array_.push(s.tmp_5, "b4");
    r0 = pxsim.Array_.push(s.tmp_5, "f#:1");
    r0 = pxsim.Array_.push(s.tmp_5, "g#");
    r0 = pxsim.Array_.push(s.tmp_5, "b:2");
    r0 = pxsim.Array_.push(s.tmp_5, "f#:1");
    r0 = pxsim.Array_.push(s.tmp_5, "g#");
    r0 = pxsim.Array_.push(s.tmp_5, "b");
    r0 = pxsim.Array_.push(s.tmp_5, "c#5");
    r0 = pxsim.Array_.push(s.tmp_5, "d#");
    r0 = pxsim.Array_.push(s.tmp_5, "b4");
    r0 = pxsim.Array_.push(s.tmp_5, "e5");
    r0 = pxsim.Array_.push(s.tmp_5, "d#");
    r0 = pxsim.Array_.push(s.tmp_5, "e");
    r0 = pxsim.Array_.push(s.tmp_5, "f#");
    r0 = pxsim.Array_.push(s.tmp_5, "b4:2");
    r0 = pxsim.Array_.push(s.tmp_5, "b");
    r0 = pxsim.Array_.push(s.tmp_5, "f#:1");
    r0 = pxsim.Array_.push(s.tmp_5, "g#");
    r0 = pxsim.Array_.push(s.tmp_5, "b");
    r0 = pxsim.Array_.push(s.tmp_5, "f#");
    r0 = pxsim.Array_.push(s.tmp_5, "e5");
    r0 = pxsim.Array_.push(s.tmp_5, "d#");
    r0 = pxsim.Array_.push(s.tmp_5, "c#");
    r0 = pxsim.Array_.push(s.tmp_5, "b4");
    r0 = pxsim.Array_.push(s.tmp_5, "f#");
    r0 = pxsim.Array_.push(s.tmp_5, "d#");
    r0 = pxsim.Array_.push(s.tmp_5, "e");
    r0 = pxsim.Array_.push(s.tmp_5, "f#");
    r0 = pxsim.Array_.push(s.tmp_5, "b:2");
    r0 = pxsim.Array_.push(s.tmp_5, "f#:1");
    r0 = pxsim.Array_.push(s.tmp_5, "g#");
    r0 = pxsim.Array_.push(s.tmp_5, "b:2");
    r0 = pxsim.Array_.push(s.tmp_5, "f#:1");
    r0 = pxsim.Array_.push(s.tmp_5, "g#");
    r0 = pxsim.Array_.push(s.tmp_5, "b");
    r0 = pxsim.Array_.push(s.tmp_5, "b");
    r0 = pxsim.Array_.push(s.tmp_5, "c#5");
    r0 = pxsim.Array_.push(s.tmp_5, "d#");
    r0 = pxsim.Array_.push(s.tmp_5, "b4");
    r0 = pxsim.Array_.push(s.tmp_5, "f#");
    r0 = pxsim.Array_.push(s.tmp_5, "g#");
    r0 = pxsim.Array_.push(s.tmp_5, "f#");
    r0 = pxsim.Array_.push(s.tmp_5, "b:2");
    r0 = pxsim.Array_.push(s.tmp_5, "b:1");
    r0 = pxsim.Array_.push(s.tmp_5, "a#");
    r0 = pxsim.Array_.push(s.tmp_5, "b");
    r0 = pxsim.Array_.push(s.tmp_5, "f#");
    r0 = pxsim.Array_.push(s.tmp_5, "g#");
    r0 = pxsim.Array_.push(s.tmp_5, "b");
    r0 = pxsim.Array_.push(s.tmp_5, "e5");
    r0 = pxsim.Array_.push(s.tmp_5, "d#");
    r0 = pxsim.Array_.push(s.tmp_5, "e");
    r0 = pxsim.Array_.push(s.tmp_5, "f#");
    r0 = pxsim.Array_.push(s.tmp_5, "b4:2");
    r0 = pxsim.Array_.push(s.tmp_5, "c#5");
    r0 = s.tmp_5;
    { step = 23; continue; }
  case 6:
    r0 = pxsim.Array_.mk();
    s.tmp_6 = r0;
    r0 = pxsim.Array_.push(s.tmp_6, "c4:1");
    r0 = pxsim.Array_.push(s.tmp_6, "d");
    r0 = pxsim.Array_.push(s.tmp_6, "e:2");
    r0 = pxsim.Array_.push(s.tmp_6, "g");
    r0 = pxsim.Array_.push(s.tmp_6, "d:1");
    r0 = pxsim.Array_.push(s.tmp_6, "e");
    r0 = pxsim.Array_.push(s.tmp_6, "f:2");
    r0 = pxsim.Array_.push(s.tmp_6, "a");
    r0 = pxsim.Array_.push(s.tmp_6, "e:1");
    r0 = pxsim.Array_.push(s.tmp_6, "f");
    r0 = pxsim.Array_.push(s.tmp_6, "g:2");
    r0 = pxsim.Array_.push(s.tmp_6, "b");
    r0 = pxsim.Array_.push(s.tmp_6, "c5:4");
    r0 = s.tmp_6;
    { step = 23; continue; }
  case 7:
    r0 = pxsim.Array_.mk();
    s.tmp_7 = r0;
    r0 = pxsim.Array_.push(s.tmp_7, "c2:2");
    r0 = pxsim.Array_.push(s.tmp_7, "c");
    r0 = pxsim.Array_.push(s.tmp_7, "d#");
    r0 = pxsim.Array_.push(s.tmp_7, "c:1");
    r0 = pxsim.Array_.push(s.tmp_7, "f:2");
    r0 = pxsim.Array_.push(s.tmp_7, "c:1");
    r0 = pxsim.Array_.push(s.tmp_7, "f:2");
    r0 = pxsim.Array_.push(s.tmp_7, "f#");
    r0 = pxsim.Array_.push(s.tmp_7, "g");
    r0 = pxsim.Array_.push(s.tmp_7, "c");
    r0 = pxsim.Array_.push(s.tmp_7, "c");
    r0 = pxsim.Array_.push(s.tmp_7, "g");
    r0 = pxsim.Array_.push(s.tmp_7, "c:1");
    r0 = pxsim.Array_.push(s.tmp_7, "f#:2");
    r0 = pxsim.Array_.push(s.tmp_7, "c:1");
    r0 = pxsim.Array_.push(s.tmp_7, "f#:2");
    r0 = pxsim.Array_.push(s.tmp_7, "f");
    r0 = pxsim.Array_.push(s.tmp_7, "d#");
    r0 = s.tmp_7;
    { step = 23; continue; }
  case 8:
    r0 = pxsim.Array_.mk();
    s.tmp_8 = r0;
    r0 = pxsim.Array_.push(s.tmp_8, "c2:2");
    r0 = pxsim.Array_.push(s.tmp_8, "e");
    r0 = pxsim.Array_.push(s.tmp_8, "g");
    r0 = pxsim.Array_.push(s.tmp_8, "a");
    r0 = pxsim.Array_.push(s.tmp_8, "a#");
    r0 = pxsim.Array_.push(s.tmp_8, "a");
    r0 = pxsim.Array_.push(s.tmp_8, "g");
    r0 = pxsim.Array_.push(s.tmp_8, "e");
    r0 = pxsim.Array_.push(s.tmp_8, "c2:2");
    r0 = pxsim.Array_.push(s.tmp_8, "e");
    r0 = pxsim.Array_.push(s.tmp_8, "g");
    r0 = pxsim.Array_.push(s.tmp_8, "a");
    r0 = pxsim.Array_.push(s.tmp_8, "a#");
    r0 = pxsim.Array_.push(s.tmp_8, "a");
    r0 = pxsim.Array_.push(s.tmp_8, "g");
    r0 = pxsim.Array_.push(s.tmp_8, "e");
    r0 = pxsim.Array_.push(s.tmp_8, "f");
    r0 = pxsim.Array_.push(s.tmp_8, "a");
    r0 = pxsim.Array_.push(s.tmp_8, "c3");
    r0 = pxsim.Array_.push(s.tmp_8, "d");
    r0 = pxsim.Array_.push(s.tmp_8, "d#");
    r0 = pxsim.Array_.push(s.tmp_8, "d");
    r0 = pxsim.Array_.push(s.tmp_8, "c");
    r0 = pxsim.Array_.push(s.tmp_8, "a2");
    r0 = pxsim.Array_.push(s.tmp_8, "c2:2");
    r0 = pxsim.Array_.push(s.tmp_8, "e");
    r0 = pxsim.Array_.push(s.tmp_8, "g");
    r0 = pxsim.Array_.push(s.tmp_8, "a");
    r0 = pxsim.Array_.push(s.tmp_8, "a#");
    r0 = pxsim.Array_.push(s.tmp_8, "a");
    r0 = pxsim.Array_.push(s.tmp_8, "g");
    r0 = pxsim.Array_.push(s.tmp_8, "e");
    r0 = pxsim.Array_.push(s.tmp_8, "g");
    r0 = pxsim.Array_.push(s.tmp_8, "b");
    r0 = pxsim.Array_.push(s.tmp_8, "d3");
    r0 = pxsim.Array_.push(s.tmp_8, "f");
    r0 = pxsim.Array_.push(s.tmp_8, "f2");
    r0 = pxsim.Array_.push(s.tmp_8, "a");
    r0 = pxsim.Array_.push(s.tmp_8, "c3");
    r0 = pxsim.Array_.push(s.tmp_8, "d#");
    r0 = pxsim.Array_.push(s.tmp_8, "c2:2");
    r0 = pxsim.Array_.push(s.tmp_8, "e");
    r0 = pxsim.Array_.push(s.tmp_8, "g");
    r0 = pxsim.Array_.push(s.tmp_8, "e");
    r0 = pxsim.Array_.push(s.tmp_8, "g");
    r0 = pxsim.Array_.push(s.tmp_8, "f");
    r0 = pxsim.Array_.push(s.tmp_8, "e");
    r0 = pxsim.Array_.push(s.tmp_8, "d");
    r0 = s.tmp_8;
    { step = 23; continue; }
  case 9:
    r0 = pxsim.Array_.mk();
    s.tmp_9 = r0;
    r0 = pxsim.Array_.push(s.tmp_9, "c4:3");
    r0 = pxsim.Array_.push(s.tmp_9, "c:1");
    r0 = pxsim.Array_.push(s.tmp_9, "d:4");
    r0 = pxsim.Array_.push(s.tmp_9, "c:4");
    r0 = pxsim.Array_.push(s.tmp_9, "f");
    r0 = pxsim.Array_.push(s.tmp_9, "e:8");
    r0 = pxsim.Array_.push(s.tmp_9, "c:3");
    r0 = pxsim.Array_.push(s.tmp_9, "c:1");
    r0 = pxsim.Array_.push(s.tmp_9, "d:4");
    r0 = pxsim.Array_.push(s.tmp_9, "c:4");
    r0 = pxsim.Array_.push(s.tmp_9, "g");
    r0 = pxsim.Array_.push(s.tmp_9, "f:8");
    r0 = pxsim.Array_.push(s.tmp_9, "c:3");
    r0 = pxsim.Array_.push(s.tmp_9, "c:1");
    r0 = pxsim.Array_.push(s.tmp_9, "c5:4");
    r0 = pxsim.Array_.push(s.tmp_9, "a4");
    r0 = pxsim.Array_.push(s.tmp_9, "f");
    r0 = pxsim.Array_.push(s.tmp_9, "e");
    r0 = pxsim.Array_.push(s.tmp_9, "d");
    r0 = pxsim.Array_.push(s.tmp_9, "a#:3");
    r0 = pxsim.Array_.push(s.tmp_9, "a#:1");
    r0 = pxsim.Array_.push(s.tmp_9, "a:4");
    r0 = pxsim.Array_.push(s.tmp_9, "f");
    r0 = pxsim.Array_.push(s.tmp_9, "g");
    r0 = pxsim.Array_.push(s.tmp_9, "f:8");
    r0 = s.tmp_9;
    { step = 23; continue; }
  case 10:
    r0 = pxsim.Array_.mk();
    s.tmp_10 = r0;
    r0 = pxsim.Array_.push(s.tmp_10, "c4:4");
    r0 = pxsim.Array_.push(s.tmp_10, "f:3");
    r0 = pxsim.Array_.push(s.tmp_10, "f:1");
    r0 = pxsim.Array_.push(s.tmp_10, "f:8");
    r0 = pxsim.Array_.push(s.tmp_10, "c:4");
    r0 = pxsim.Array_.push(s.tmp_10, "g:3");
    r0 = pxsim.Array_.push(s.tmp_10, "e:1");
    r0 = pxsim.Array_.push(s.tmp_10, "f:8");
    r0 = pxsim.Array_.push(s.tmp_10, "c:4");
    r0 = pxsim.Array_.push(s.tmp_10, "f:3");
    r0 = pxsim.Array_.push(s.tmp_10, "a:1");
    r0 = pxsim.Array_.push(s.tmp_10, "c5:4");
    r0 = pxsim.Array_.push(s.tmp_10, "a4:3");
    r0 = pxsim.Array_.push(s.tmp_10, "f:1");
    r0 = pxsim.Array_.push(s.tmp_10, "f:4");
    r0 = pxsim.Array_.push(s.tmp_10, "e:3");
    r0 = pxsim.Array_.push(s.tmp_10, "f:1");
    r0 = pxsim.Array_.push(s.tmp_10, "g:8");
    r0 = s.tmp_10;
    { step = 23; continue; }
  case 11:
    r0 = pxsim.Array_.mk();
    s.tmp_11 = r0;
    r0 = pxsim.Array_.push(s.tmp_11, "c3:4");
    r0 = pxsim.Array_.push(s.tmp_11, "c:3");
    r0 = pxsim.Array_.push(s.tmp_11, "c:1");
    r0 = pxsim.Array_.push(s.tmp_11, "c:4");
    r0 = pxsim.Array_.push(s.tmp_11, "d#:3");
    r0 = pxsim.Array_.push(s.tmp_11, "d:1");
    r0 = pxsim.Array_.push(s.tmp_11, "d:3");
    r0 = pxsim.Array_.push(s.tmp_11, "c:1");
    r0 = pxsim.Array_.push(s.tmp_11, "c:3");
    r0 = pxsim.Array_.push(s.tmp_11, "b2:1");
    r0 = pxsim.Array_.push(s.tmp_11, "c3:4");
    r0 = s.tmp_11;
    { step = 23; continue; }
  case 12:
    r0 = pxsim.Array_.mk();
    s.tmp_12 = r0;
    r0 = pxsim.Array_.push(s.tmp_12, "c4:3");
    r0 = pxsim.Array_.push(s.tmp_12, "g3:1");
    r0 = pxsim.Array_.push(s.tmp_12, "f#");
    r0 = pxsim.Array_.push(s.tmp_12, "g");
    r0 = pxsim.Array_.push(s.tmp_12, "g#:3");
    r0 = pxsim.Array_.push(s.tmp_12, "g");
    r0 = pxsim.Array_.push(s.tmp_12, "r");
    r0 = pxsim.Array_.push(s.tmp_12, "b");
    r0 = pxsim.Array_.push(s.tmp_12, "c4");
    r0 = s.tmp_12;
    { step = 23; continue; }
  case 13:
    r0 = pxsim.Array_.mk();
    s.tmp_13 = r0;
    r0 = pxsim.Array_.push(s.tmp_13, "c3:3");
    r0 = pxsim.Array_.push(s.tmp_13, "r");
    r0 = pxsim.Array_.push(s.tmp_13, "d:2");
    r0 = pxsim.Array_.push(s.tmp_13, "d#");
    r0 = pxsim.Array_.push(s.tmp_13, "r");
    r0 = pxsim.Array_.push(s.tmp_13, "c");
    r0 = pxsim.Array_.push(s.tmp_13, "r");
    r0 = pxsim.Array_.push(s.tmp_13, "f#:8");
    r0 = s.tmp_13;
    { step = 23; continue; }
  case 14:
    r0 = pxsim.Array_.mk();
    s.tmp_14 = r0;
    r0 = pxsim.Array_.push(s.tmp_14, "a4:1");
    r0 = pxsim.Array_.push(s.tmp_14, "b");
    r0 = pxsim.Array_.push(s.tmp_14, "c5");
    r0 = pxsim.Array_.push(s.tmp_14, "b4");
    r0 = pxsim.Array_.push(s.tmp_14, "a:2");
    r0 = pxsim.Array_.push(s.tmp_14, "r");
    r0 = pxsim.Array_.push(s.tmp_14, "a:1");
    r0 = pxsim.Array_.push(s.tmp_14, "b");
    r0 = pxsim.Array_.push(s.tmp_14, "c5");
    r0 = pxsim.Array_.push(s.tmp_14, "b4");
    r0 = pxsim.Array_.push(s.tmp_14, "a:2");
    r0 = pxsim.Array_.push(s.tmp_14, "r");
    r0 = pxsim.Array_.push(s.tmp_14, "a:2");
    r0 = pxsim.Array_.push(s.tmp_14, "e5");
    r0 = pxsim.Array_.push(s.tmp_14, "d#");
    r0 = pxsim.Array_.push(s.tmp_14, "e");
    r0 = pxsim.Array_.push(s.tmp_14, "f");
    r0 = pxsim.Array_.push(s.tmp_14, "e");
    r0 = pxsim.Array_.push(s.tmp_14, "d#");
    r0 = pxsim.Array_.push(s.tmp_14, "e");
    r0 = pxsim.Array_.push(s.tmp_14, "b4:1");
    r0 = pxsim.Array_.push(s.tmp_14, "c5");
    r0 = pxsim.Array_.push(s.tmp_14, "d");
    r0 = pxsim.Array_.push(s.tmp_14, "c");
    r0 = pxsim.Array_.push(s.tmp_14, "b4:2");
    r0 = pxsim.Array_.push(s.tmp_14, "r");
    r0 = pxsim.Array_.push(s.tmp_14, "b:1");
    r0 = pxsim.Array_.push(s.tmp_14, "c5");
    r0 = pxsim.Array_.push(s.tmp_14, "d");
    r0 = pxsim.Array_.push(s.tmp_14, "c");
    r0 = pxsim.Array_.push(s.tmp_14, "b4:2");
    r0 = pxsim.Array_.push(s.tmp_14, "r");
    r0 = pxsim.Array_.push(s.tmp_14, "b:2");
    r0 = pxsim.Array_.push(s.tmp_14, "e5");
    r0 = pxsim.Array_.push(s.tmp_14, "d#");
    r0 = pxsim.Array_.push(s.tmp_14, "e");
    r0 = pxsim.Array_.push(s.tmp_14, "f");
    r0 = pxsim.Array_.push(s.tmp_14, "e");
    r0 = pxsim.Array_.push(s.tmp_14, "d#");
    r0 = pxsim.Array_.push(s.tmp_14, "e");
    r0 = s.tmp_14;
    { step = 23; continue; }
  case 15:
    r0 = pxsim.Array_.mk();
    s.tmp_15 = r0;
    r0 = pxsim.Array_.push(s.tmp_15, "b5:1");
    r0 = pxsim.Array_.push(s.tmp_15, "e6:3");
    r0 = s.tmp_15;
    { step = 23; continue; }
  case 16:
    r0 = pxsim.Array_.mk();
    s.tmp_16 = r0;
    r0 = pxsim.Array_.push(s.tmp_16, "e3:3");
    r0 = pxsim.Array_.push(s.tmp_16, "r:1");
    r0 = pxsim.Array_.push(s.tmp_16, "d#:3");
    r0 = pxsim.Array_.push(s.tmp_16, "r:1");
    r0 = pxsim.Array_.push(s.tmp_16, "d:4");
    r0 = pxsim.Array_.push(s.tmp_16, "r:1");
    r0 = pxsim.Array_.push(s.tmp_16, "c#:8");
    r0 = s.tmp_16;
    { step = 23; continue; }
  case 17:
    r0 = pxsim.Array_.mk();
    s.tmp_17 = r0;
    r0 = pxsim.Array_.push(s.tmp_17, "c5:1");
    r0 = pxsim.Array_.push(s.tmp_17, "d");
    r0 = pxsim.Array_.push(s.tmp_17, "e");
    r0 = pxsim.Array_.push(s.tmp_17, "f");
    r0 = pxsim.Array_.push(s.tmp_17, "g");
    r0 = s.tmp_17;
    { step = 23; continue; }
  case 18:
    r0 = pxsim.Array_.mk();
    s.tmp_18 = r0;
    r0 = pxsim.Array_.push(s.tmp_18, "g5:1");
    r0 = pxsim.Array_.push(s.tmp_18, "f");
    r0 = pxsim.Array_.push(s.tmp_18, "e");
    r0 = pxsim.Array_.push(s.tmp_18, "d");
    r0 = pxsim.Array_.push(s.tmp_18, "c");
    r0 = s.tmp_18;
    { step = 23; continue; }
  case 19:
    r0 = pxsim.Array_.mk();
    s.tmp_19 = r0;
    r0 = pxsim.Array_.push(s.tmp_19, "g4:1");
    r0 = pxsim.Array_.push(s.tmp_19, "c5");
    r0 = pxsim.Array_.push(s.tmp_19, "e");
    r0 = pxsim.Array_.push(s.tmp_19, "g:2");
    r0 = pxsim.Array_.push(s.tmp_19, "e:1");
    r0 = pxsim.Array_.push(s.tmp_19, "g:3");
    r0 = s.tmp_19;
    { step = 23; continue; }
  case 20:
    r0 = pxsim.Array_.mk();
    s.tmp_20 = r0;
    r0 = pxsim.Array_.push(s.tmp_20, "g5:1");
    r0 = pxsim.Array_.push(s.tmp_20, "d#");
    r0 = pxsim.Array_.push(s.tmp_20, "c");
    r0 = pxsim.Array_.push(s.tmp_20, "g4:2");
    r0 = pxsim.Array_.push(s.tmp_20, "b:1");
    r0 = pxsim.Array_.push(s.tmp_20, "c5:3");
    r0 = s.tmp_20;
    { step = 23; continue; }
  case 21:
    r0 = pxsim.Array_.mk();
    { step = 23; continue; }
  case 23:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
getMelody__P306.info = {"start":2713,"length":4101,"line":72,"column":4,"endLine":117,"endColumn":5,"fileName":"pxt_modules/core/melodies.ts","functionName":"getMelody"}



var beginMelody__P299  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = { fn: init__P290, parent: s };
    s.pc = 18;
    return actionCall(s.tmp_0)
  case 18:
    r0 = s.retval;
    r0 = globals.currentMelody___295;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 != undefined);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 13; continue; }
    r0 = s.arg1;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 4);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == 0);
    s.tmp_4 = r0;
    r0 = pxsim.numops.toBool(s.tmp_4);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_4;
    { step = 2; continue; }
  case 1:
    r0 = pxsim.langsupp.ignore(s.tmp_4);
    r0 = s.arg1;
    s.tmp_5 = r0;
    r0 = (s.tmp_5 & 8);
    s.tmp_6 = r0;
    r0 = (s.tmp_6 == 0);
    { step = 2; continue; }
  case 2:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = pxsim.numops.toBool(s.tmp_7);
    if (r0) { step = 3; continue; }
    r0 = s.tmp_7;
    { step = 4; continue; }
  case 3:
    r0 = pxsim.langsupp.ignore(s.tmp_7);
    r0 = globals.currentMelody___295;
    r0 = r0.background___5;
    { step = 4; continue; }
  case 4:
    // jmp value (already in r0)
    s.tmp_8 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_8);
    if (!r0) { step = 5; continue; }
    r0 = globals.currentMelody___295;
    s.tmp_9 = r0;
    r0 = globals.currentBackgroundMelody___296;
    r0 = s.tmp_9;
    globals.currentBackgroundMelody___296 = (r0);
    r0 = globals.currentMelody___295;
    r0 = null;
    globals.currentMelody___295 = (r0);
    r0 = pxsim.control.raiseEvent(2000, 245, 1);
    { step = 6; continue; }
  case 5:
  case 6:
    r0 = globals.currentMelody___295;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = globals.currentMelody___295;
    r0 = r0.background___5;
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 7; continue; }
    r0 = 243;
    { step = 8; continue; }
  case 7:
    r0 = 3;
    { step = 8; continue; }
  case 8:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim.control.raiseEvent(2000, s.tmp_2, 1);
    { step = 10; continue; }
  case 9:
  case 10:
    r0 = pxsim.pxtcore.mkClassInstance(Melody__C302_VT);
    s.tmp_0 = r0;
    s.tmp_1 = { fn: Melody_constructor__P305, parent: s };
    r0 = s.tmp_0;
    s.tmp_1.arg0 = r0;
    r0 = s.arg0;
    s.tmp_1.arg1 = r0;
    r0 = s.arg1;
    s.tmp_1.arg2 = r0;
    s.pc = 19;
    return actionCall(s.tmp_1)
  case 19:
    r0 = s.retval;
    r0 = globals.currentMelody___295;
    r0 = s.tmp_0;
    globals.currentMelody___295 = (r0);
    r0 = globals.currentMelody___295;
    r0 = r0.background___5;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    r0 = 242;
    { step = 12; continue; }
  case 11:
    r0 = 2;
    { step = 12; continue; }
  case 12:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim.control.raiseEvent(2000, s.tmp_1, 1);
    { step = 16; continue; }
  case 13:
    r0 = pxsim.pxtcore.mkClassInstance(Melody__C302_VT);
    s.tmp_0 = r0;
    s.tmp_1 = { fn: Melody_constructor__P305, parent: s };
    r0 = s.tmp_0;
    s.tmp_1.arg0 = r0;
    r0 = s.arg0;
    s.tmp_1.arg1 = r0;
    r0 = s.arg1;
    s.tmp_1.arg2 = r0;
    s.pc = 20;
    return actionCall(s.tmp_1)
  case 20:
    r0 = s.retval;
    r0 = globals.currentMelody___295;
    r0 = s.tmp_0;
    globals.currentMelody___295 = (r0);
    r0 = globals.currentMelody___295;
    r0 = r0.background___5;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    r0 = 242;
    { step = 15; continue; }
  case 14:
    r0 = 2;
    { step = 15; continue; }
  case 15:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim.control.raiseEvent(2000, s.tmp_1, 1);
    r0 = pxsim.control.inBackground(inline__P545);
  case 16:
    return leave(s, r0)
  default: oops()
} } }
beginMelody__P299.info = {"start":10524,"length":2008,"line":316,"column":4,"endLine":349,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"beginMelody"}



var inline__P545  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

  case 1:
    s.tmp_0 = { fn: Melody_hasNextNote__P303, parent: s };
    r0 = globals.currentMelody___295;
    s.tmp_0.arg0 = r0;
    s.pc = 10;
    return actionCall(s.tmp_0)
  case 10:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 6; continue; }
    s.tmp_2 = { fn: playNextNote__P301, parent: s };
    r0 = globals.currentMelody___295;
    s.tmp_2.arg0 = r0;
    s.pc = 11;
    return actionCall(s.tmp_2)
  case 11:
    r0 = s.retval;
    s.tmp_0 = { fn: Melody_hasNextNote__P303, parent: s };
    r0 = globals.currentMelody___295;
    s.tmp_0.arg0 = r0;
    s.pc = 12;
    return actionCall(s.tmp_0)
  case 12:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    s.tmp_2 = r0;
    r0 = pxsim.Boolean_.bang(s.tmp_2);
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBool(s.tmp_3);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_3;
    { step = 3; continue; }
  case 2:
    r0 = pxsim.langsupp.ignore(s.tmp_3);
    r0 = globals.currentBackgroundMelody___296;
    { step = 3; continue; }
  case 3:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_4);
    if (!r0) { step = 4; continue; }
    r0 = globals.currentBackgroundMelody___296;
    s.tmp_5 = r0;
    r0 = globals.currentMelody___295;
    r0 = s.tmp_5;
    globals.currentMelody___295 = (r0);
    r0 = globals.currentBackgroundMelody___296;
    r0 = null;
    globals.currentBackgroundMelody___296 = (r0);
    r0 = pxsim.control.raiseEvent(2000, 3, 1);
    r0 = pxsim.control.raiseEvent(2000, 246, 1);
    { step = 5; continue; }
  case 4:
  case 5:
    { step = 1; continue; }
  case 6:
    r0 = globals.currentMelody___295;
    r0 = r0.background___5;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = 243;
    { step = 8; continue; }
  case 7:
    r0 = 3;
    { step = 8; continue; }
  case 8:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim.control.raiseEvent(2000, s.tmp_1, 1);
    r0 = globals.currentMelody___295;
    r0 = null;
    globals.currentMelody___295 = (r0);
    return leave(s, r0)
  default: oops()
} } }
inline__P545.info = {"start":11720,"length":795,"line":334,"column":33,"endLine":347,"endColumn":13,"fileName":"pxt_modules/core/music.ts","functionName":"inline"}



var playNextNote__P301  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.currNote___548 = undefined;
    s.currentPos___549 = undefined;
    s.currentDuration___550 = undefined;
    s.currentOctave___551 = undefined;
    s.note___552 = undefined;
    s.isrest___553 = undefined;
    s.beatPos___554 = undefined;
    s.parsingOctave___555 = undefined;
    s.pos___556 = undefined;
    s.noteChar___559 = undefined;
    s.beat___563 = undefined;
    s.keyNumber___564 = undefined;
    s.frequency___565 = undefined;
    s.repeating___566 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = { fn: Melody_nextNote__P304, parent: s };
    r0 = s.arg0;
    s.tmp_0.arg0 = r0;
    s.pc = 46;
    return actionCall(s.tmp_0)
  case 46:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = s.currNote___548;
    r0 = s.tmp_1;
    s.currNote___548 = (r0);
    r0 = s.arg0;
    r0 = r0.currentPos___3;
    s.tmp_0 = r0;
    r0 = s.currentPos___549;
    r0 = s.tmp_0;
    s.currentPos___549 = (r0);
    r0 = s.arg0;
    r0 = r0.currentDuration___1;
    s.tmp_0 = r0;
    r0 = s.currentDuration___550;
    r0 = s.tmp_0;
    s.currentDuration___550 = (r0);
    r0 = s.arg0;
    r0 = r0.currentOctave___2;
    s.tmp_0 = r0;
    r0 = s.currentOctave___551;
    r0 = s.tmp_0;
    s.currentOctave___551 = (r0);
    r0 = s.isrest___553;
    r0 = false;
    s.isrest___553 = (r0);
    r0 = s.parsingOctave___555;
    r0 = true;
    s.parsingOctave___555 = (r0);
    r0 = s.pos___556;
    r0 = 0;
    s.pos___556 = (r0);
  case 1:
    r0 = s.pos___556;
    s.tmp_0 = r0;
    r0 = s.currNote___548;
    s.tmp_1 = r0;
    r0 = pxsim.String_.length(s.tmp_1);
    s.tmp_2 = r0;
    r0 = (s.tmp_0 < s.tmp_2);
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_3);
    if (!r0) { step = 26; continue; }
    r0 = s.currNote___548;
    s.tmp_4 = r0;
    r0 = s.pos___556;
    s.tmp_5 = r0;
    r0 = pxsim.String_.charAt(s.tmp_4, s.tmp_5);
    s.tmp_6 = r0;
    r0 = s.noteChar___559;
    r0 = s.tmp_6;
    s.noteChar___559 = (r0);
    r0 = s.noteChar___559;
    s.tmp_0 = r0;
    r0 = pxsim.pxtcore.switch_eq("c", s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim.pxtcore.switch_eq("C", s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim.pxtcore.switch_eq("d", s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim.pxtcore.switch_eq("D", s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim.pxtcore.switch_eq("e", s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim.pxtcore.switch_eq("E", s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim.pxtcore.switch_eq("f", s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim.pxtcore.switch_eq("F", s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim.pxtcore.switch_eq("g", s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim.pxtcore.switch_eq("G", s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim.pxtcore.switch_eq("a", s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = pxsim.pxtcore.switch_eq("A", s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim.pxtcore.switch_eq("b", s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = pxsim.pxtcore.switch_eq("B", s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = pxsim.pxtcore.switch_eq("r", s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = pxsim.pxtcore.switch_eq("R", s.tmp_0);
    if (r0) { step = 17; continue; }
    r0 = pxsim.pxtcore.switch_eq("#", s.tmp_0);
    if (r0) { step = 18; continue; }
    r0 = pxsim.pxtcore.switch_eq("b", s.tmp_0);
    if (r0) { step = 19; continue; }
    r0 = pxsim.pxtcore.switch_eq(":", s.tmp_0);
    if (r0) { step = 20; continue; }
    r0 = s.tmp_0;
    r0 = s.tmp_0;
    { step = 21; continue; }
  case 2:
  case 3:
    r0 = s.note___552;
    r0 = 1;
    s.note___552 = (r0);
    { step = 24; continue; }
  case 4:
  case 5:
    r0 = s.note___552;
    r0 = 3;
    s.note___552 = (r0);
    { step = 24; continue; }
  case 6:
  case 7:
    r0 = s.note___552;
    r0 = 5;
    s.note___552 = (r0);
    { step = 24; continue; }
  case 8:
  case 9:
    r0 = s.note___552;
    r0 = 6;
    s.note___552 = (r0);
    { step = 24; continue; }
  case 10:
  case 11:
    r0 = s.note___552;
    r0 = 8;
    s.note___552 = (r0);
    { step = 24; continue; }
  case 12:
  case 13:
    r0 = s.note___552;
    r0 = 10;
    s.note___552 = (r0);
    { step = 24; continue; }
  case 14:
  case 15:
    r0 = s.note___552;
    r0 = 12;
    s.note___552 = (r0);
    { step = 24; continue; }
  case 16:
  case 17:
    r0 = s.isrest___553;
    r0 = true;
    s.isrest___553 = (r0);
    { step = 24; continue; }
  case 18:
    r0 = s.note___552;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
    s.tmp_1 = r0;
    r0 = s.note___552;
    r0 = s.tmp_1;
    s.note___552 = (r0);
    { step = 24; continue; }
  case 19:
    r0 = s.note___552;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 - 1);
    s.tmp_1 = r0;
    r0 = s.note___552;
    r0 = s.tmp_1;
    s.note___552 = (r0);
    { step = 24; continue; }
  case 20:
    r0 = s.parsingOctave___555;
    r0 = false;
    s.parsingOctave___555 = (r0);
    r0 = s.pos___556;
    s.tmp_0 = r0;
    r0 = s.beatPos___554;
    r0 = s.tmp_0;
    s.beatPos___554 = (r0);
    { step = 24; continue; }
  case 21:
    r0 = s.parsingOctave___555;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    if (!r0) { step = 22; continue; }
    s.tmp_1 = { fn: parseInt__P114, parent: s };
    r0 = s.noteChar___559;
    s.tmp_1.arg0 = r0;
    s.pc = 47;
    return actionCall(s.tmp_1)
  case 47:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = s.currentOctave___551;
    r0 = s.tmp_2;
    s.currentOctave___551 = (r0);
    { step = 23; continue; }
  case 22:
  case 23:
  case 24:
    r0 = s.pos___556;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
    s.tmp_1 = r0;
    r0 = s.pos___556;
    r0 = s.tmp_1;
    s.pos___556 = (r0);
    { step = 1; continue; }
  case 26:
    r0 = s.parsingOctave___555;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    s.tmp_1 = r0;
    r0 = pxsim.Boolean_.bang(s.tmp_1);
    s.tmp_2 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_2);
    if (!r0) { step = 27; continue; }
    s.tmp_3 = { fn: parseInt__P114, parent: s };
    r0 = s.currNote___548;
    s.tmp_4 = r0;
    r0 = s.beatPos___554;
    s.tmp_5 = r0;
    r0 = (s.tmp_5 + 1);
    s.tmp_6 = r0;
    r0 = s.currNote___548;
    s.tmp_7 = r0;
    r0 = pxsim.String_.length(s.tmp_7);
    s.tmp_8 = r0;
    r0 = s.beatPos___554;
    s.tmp_9 = r0;
    r0 = (s.tmp_8 - s.tmp_9);
    s.tmp_10 = r0;
    r0 = pxsim.String_.substr(s.tmp_4, s.tmp_6, s.tmp_10);
    s.tmp_3.arg0 = r0;
    s.pc = 48;
    return actionCall(s.tmp_3)
  case 48:
    r0 = s.retval;
    s.tmp_11 = r0;
    r0 = s.currentDuration___550;
    r0 = s.tmp_11;
    s.currentDuration___550 = (r0);
    { step = 28; continue; }
  case 27:
  case 28:
    r0 = globals.beatsPerMinute___282;
    s.tmp_0 = r0;
    r0 = (60000 / s.tmp_0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 / 4);
    s.tmp_2 = r0;
    r0 = s.beat___563;
    r0 = s.tmp_2;
    s.beat___563 = (r0);
    r0 = s.isrest___553;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    if (!r0) { step = 29; continue; }
    s.tmp_1 = { fn: rest__P288, parent: s };
    r0 = s.currentDuration___550;
    s.tmp_2 = r0;
    r0 = s.beat___563;
    s.tmp_3 = r0;
    r0 = (s.tmp_2 * s.tmp_3);
    s.tmp_1.arg0 = r0;
    s.pc = 49;
    return actionCall(s.tmp_1)
  case 49:
    r0 = s.retval;
    { step = 34; continue; }
  case 29:
    r0 = s.note___552;
    s.tmp_0 = r0;
    r0 = s.currentOctave___551;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - 1);
    s.tmp_2 = r0;
    r0 = (12 * s.tmp_2);
    s.tmp_3 = r0;
    r0 = (s.tmp_0 + s.tmp_3);
    s.tmp_4 = r0;
    r0 = s.keyNumber___564;
    r0 = s.tmp_4;
    s.keyNumber___564 = (r0);
    r0 = s.keyNumber___564;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >= 0);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBool(s.tmp_1);
    if (r0) { step = 30; continue; }
    r0 = s.tmp_1;
    { step = 31; continue; }
  case 30:
    r0 = pxsim.langsupp.ignore(s.tmp_1);
    r0 = s.keyNumber___564;
    s.tmp_2 = r0;
    r0 = globals.freqTable___283;
    s.tmp_3 = r0;
    r0 = pxsim.Array_.length(s.tmp_3);
    s.tmp_4 = r0;
    r0 = (s.tmp_2 < s.tmp_4);
    { step = 31; continue; }
  case 31:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_5);
    if (!r0) { step = 32; continue; }
    r0 = globals.freqTable___283;
    s.tmp_6 = r0;
    r0 = s.keyNumber___564;
    s.tmp_7 = r0;
    r0 = pxsim.Array_.getAt(s.tmp_6, s.tmp_7);
    { step = 33; continue; }
  case 32:
    r0 = 0;
    { step = 33; continue; }
  case 33:
    // jmp value (already in r0)
    s.tmp_8 = r0;
    r0 = s.frequency___565;
    r0 = s.tmp_8;
    s.frequency___565 = (r0);
    s.tmp_0 = { fn: playTone__P286, parent: s };
    r0 = s.frequency___565;
    s.tmp_0.arg0 = r0;
    r0 = s.currentDuration___550;
    s.tmp_1 = r0;
    r0 = s.beat___563;
    s.tmp_2 = r0;
    r0 = (s.tmp_1 * s.tmp_2);
    s.tmp_0.arg1 = r0;
    s.pc = 50;
    return actionCall(s.tmp_0)
  case 50:
    r0 = s.retval;
  case 34:
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = s.currentDuration___550;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).currentDuration___1 = (s.tmp_1);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = s.currentOctave___551;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).currentOctave___2 = (s.tmp_1);
    r0 = s.arg0;
    r0 = r0.repeating___4;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBool(s.tmp_0);
    if (r0) { step = 35; continue; }
    r0 = s.tmp_0;
    { step = 36; continue; }
  case 35:
    r0 = pxsim.langsupp.ignore(s.tmp_0);
    r0 = s.currentPos___549;
    s.tmp_1 = r0;
    r0 = s.arg0;
    r0 = r0.melodyArray___0;
    s.tmp_2 = r0;
    r0 = pxsim.Array_.length(s.tmp_2);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 - 1);
    s.tmp_4 = r0;
    r0 = (s.tmp_1 == s.tmp_4);
    { step = 36; continue; }
  case 36:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = s.repeating___566;
    r0 = s.tmp_5;
    s.repeating___566 = (r0);
    r0 = s.repeating___566;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    if (!r0) { step = 37; continue; }
    r0 = 0;
    { step = 38; continue; }
  case 37:
    r0 = s.currentPos___549;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 + 1);
    { step = 38; continue; }
  case 38:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = s.arg0;
    s.tmp_3 = r0;
    r0 = (s.tmp_3).currentPos___3 = (s.tmp_2);
    r0 = s.arg0;
    r0 = r0.background___5;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    if (!r0) { step = 39; continue; }
    r0 = 241;
    { step = 40; continue; }
  case 39:
    r0 = 1;
    { step = 40; continue; }
  case 40:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim.control.raiseEvent(2000, s.tmp_1, 1);
    r0 = s.repeating___566;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    if (!r0) { step = 43; continue; }
    r0 = s.arg0;
    r0 = r0.background___5;
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 41; continue; }
    r0 = 244;
    { step = 42; continue; }
  case 41:
    r0 = 4;
    { step = 42; continue; }
  case 42:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim.control.raiseEvent(2000, s.tmp_2, 1);
    { step = 44; continue; }
  case 43:
  case 44:
    r0 = s.currNote___548;
    r0 = s.currentPos___549;
    r0 = s.currentDuration___550;
    r0 = s.currentOctave___551;
    r0 = s.note___552;
    r0 = s.isrest___553;
    r0 = s.beatPos___554;
    r0 = s.parsingOctave___555;
    r0 = s.pos___556;
    r0 = s.noteChar___559;
    r0 = s.beat___563;
    r0 = s.keyNumber___564;
    r0 = s.frequency___565;
    r0 = s.repeating___566;
    return leave(s, r0)
  default: oops()
} } }
playNextNote__P301.info = {"start":12783,"length":2287,"line":360,"column":4,"endLine":408,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"playNextNote"}



var rest__P288  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = { fn: playTone__P286, parent: s };
    r0 = 0;
    s.tmp_0.arg0 = r0;
    r0 = s.arg0;
    s.tmp_0.arg1 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
rest__P288.info = {"start":6339,"length":71,"line":205,"column":4,"endLine":207,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"rest"}



var parseInt__P114  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = pxsim.String_.toNumber(s.tmp_0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 0);
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
parseInt__P114.info = {"start":284,"length":77,"line":11,"column":0,"endLine":13,"endColumn":1,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"parseInt"}



var Melody_nextNote__P304  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.currentNote___570 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    r0 = r0.melodyArray___0;
    s.tmp_0 = r0;
    r0 = s.arg0;
    r0 = r0.currentPos___3;
    s.tmp_1 = r0;
    r0 = pxsim.Array_.getAt(s.tmp_0, s.tmp_1);
    s.tmp_2 = r0;
    r0 = s.currentNote___570;
    r0 = s.tmp_2;
    s.currentNote___570 = (r0);
    r0 = s.currentNote___570;
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.currentNote___570;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
Melody_nextNote__P304.info = {"start":16081,"length":129,"line":433,"column":8,"endLine":436,"endColumn":9,"fileName":"pxt_modules/core/music.ts","functionName":"nextNote"}



var Melody_hasNextNote__P303  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    r0 = r0.repeating___4;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim.langsupp.ignore(s.tmp_0);
    r0 = s.arg0;
    r0 = r0.currentPos___3;
    s.tmp_1 = r0;
    r0 = s.arg0;
    r0 = r0.melodyArray___0;
    s.tmp_2 = r0;
    r0 = pxsim.Array_.length(s.tmp_2);
    s.tmp_3 = r0;
    r0 = (s.tmp_1 < s.tmp_3);
    { step = 2; continue; }
  case 2:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = s.tmp_4;
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
Melody_hasNextNote__P303.info = {"start":15966,"length":105,"line":429,"column":8,"endLine":431,"endColumn":9,"fileName":"pxt_modules/core/music.ts","functionName":"hasNextNote"}



var Melody_constructor__P305  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = s.arg1;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).melodyArray___0 = (s.tmp_1);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = s.arg2;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 & 2);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 != 0);
    s.tmp_3 = r0;
    r0 = (s.tmp_0).repeating___4 = (s.tmp_3);
    r0 = s.arg0;
    r0 = r0.repeating___4;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = true;
    { step = 2; continue; }
  case 1:
    r0 = s.arg2;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 & 8);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 != 0);
    { step = 2; continue; }
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = s.arg0;
    s.tmp_4 = r0;
    r0 = (s.tmp_4).repeating___4 = (s.tmp_3);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = s.arg2;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 & 4);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 != 0);
    s.tmp_3 = r0;
    r0 = (s.tmp_0).background___5 = (s.tmp_3);
    r0 = s.arg0;
    r0 = r0.background___5;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = true;
    { step = 4; continue; }
  case 3:
    r0 = s.arg2;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 & 8);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 != 0);
    { step = 4; continue; }
  case 4:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = s.arg0;
    s.tmp_4 = r0;
    r0 = (s.tmp_4).background___5 = (s.tmp_3);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0).currentDuration___1 = (4);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0).currentOctave___2 = (4);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0).currentPos___3 = (0);
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
Melody_constructor__P305.info = {"start":15322,"length":634,"line":418,"column":8,"endLine":427,"endColumn":9,"fileName":"pxt_modules/core/music.ts","functionName":"inline"}



var setQbitRun__P348  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.buf___576 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.pins.createBuffer(5);
    s.tmp_0 = r0;
    r0 = s.buf___576;
    r0 = s.tmp_0;
    s.buf___576 = (r0);
    r0 = s.buf___576;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 0, 85);
    r0 = s.buf___576;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 1, 85);
    r0 = s.buf___576;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 2, 3);
    r0 = s.buf___576;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 3, 60);
    r0 = s.buf___576;
    s.tmp_0 = r0;
    r0 = s.arg0;
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 4, s.tmp_1);
    r0 = s.buf___576;
    s.tmp_0 = r0;
    r0 = pxsim.serial.writeBuffer(s.tmp_0);
    r0 = s.buf___576;
    return leave(s, r0)
  default: oops()
} } }
setQbitRun__P348.info = {"start":9369,"length":254,"line":353,"column":4,"endLine":361,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"setQbitRun"}



var qbitInit__P335  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = { fn: initRGBLight__P351, parent: s };
    s.pc = 6;
    return actionCall(s.tmp_0)
  case 6:
    r0 = s.retval;
    s.tmp_0 = { fn: initColorSensor__P446, parent: s };
    s.pc = 7;
    return actionCall(s.tmp_0)
  case 7:
    r0 = s.retval;
    r0 = pxsim.serial.redirect(19, 15, 115200);
    r0 = pxsim.basic.forever(inline__P577);
    setupResume(s, 8);
    pxsim.basic.pause(1200);
    checkResumeConsumed();
    return;
  case 8:
    r0 = s.retval;
  case 1:
    r0 = globals.readTimes___334;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 < 10);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBool(s.tmp_1);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_1;
    { step = 3; continue; }
  case 2:
    r0 = pxsim.langsupp.ignore(s.tmp_1);
    r0 = globals.versionFlag___333;
    s.tmp_2 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_2);
    s.tmp_3 = r0;
    r0 = pxsim.Boolean_.bang(s.tmp_3);
    { step = 3; continue; }
  case 3:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_4);
    if (!r0) { step = 4; continue; }
    r0 = globals.readTimes___334;
    s.tmp_5 = r0;
    r0 = (s.tmp_5 + 1);
    s.tmp_6 = r0;
    r0 = globals.readTimes___334;
    r0 = s.tmp_6;
    globals.readTimes___334 = (r0);
    s.tmp_0 = { fn: sendVersionCmd__P336, parent: s };
    s.pc = 9;
    return actionCall(s.tmp_0)
  case 9:
    r0 = s.retval;
    setupResume(s, 10);
    pxsim.basic.pause(30);
    checkResumeConsumed();
    return;
  case 10:
    r0 = s.retval;
    { step = 1; continue; }
  case 4:
    return leave(s, r0)
  default: oops()
} } }
qbitInit__P335.info = {"start":2445,"length":450,"line":105,"column":4,"endLine":123,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"qbitInit"}



var inline__P577  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = { fn: getHandleCmd__P338, parent: s };
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
inline__P577.info = {"start":2673,"length":45,"line":113,"column":22,"endLine":115,"endColumn":9,"fileName":"pxt_modules/qbit/main.ts","functionName":"inline"}



var getHandleCmd__P338  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.charStr___578 = undefined;
    s.cnt___580 = undefined;
    s.index___581 = undefined;
    s.cmd___582 = undefined;
    s.arg1Int___584 = undefined;
    s.arg2Int___585 = undefined;
    s.argInt___586 = undefined;
    r0 = pxsim.serial.readString();
    s.tmp_0 = r0;
    r0 = s.charStr___578;
    r0 = s.tmp_0;
    s.charStr___578 = (r0);
    r0 = globals.handleCmd___337;
    s.tmp_0 = r0;
    r0 = s.charStr___578;
    s.tmp_1 = r0;
    r0 = pxsim.String_.concat(s.tmp_0, s.tmp_1);
    s.tmp_2 = r0;
    r0 = globals.handleCmd___337;
    r0 = s.tmp_2;
    globals.handleCmd___337 = (r0);
    s.tmp_0 = { fn: countChar__P340, parent: s };
    r0 = globals.handleCmd___337;
    s.tmp_0.arg0 = r0;
    r0 = "$";
    s.tmp_0.arg1 = r0;
    s.pc = 28;
    return actionCall(s.tmp_0)
  case 28:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = s.cnt___580;
    r0 = s.tmp_1;
    s.cnt___580 = (r0);
    r0 = s.cnt___580;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == 0);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 1; continue; }
    { step = 27; continue; }
    { step = 2; continue; }
  case 1:
  case 2:
    s.tmp_2 = { fn: findIndexof__P339, parent: s };
    r0 = globals.handleCmd___337;
    s.tmp_2.arg0 = r0;
    r0 = "$";
    s.tmp_2.arg1 = r0;
    r0 = 0;
    s.tmp_2.arg2 = r0;
    s.pc = 29;
    return actionCall(s.tmp_2)
  case 29:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = s.index___581;
    r0 = s.tmp_3;
    s.index___581 = (r0);
    r0 = s.index___581;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 != -1);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 25; continue; }
    r0 = globals.handleCmd___337;
    s.tmp_2 = r0;
    r0 = s.index___581;
    s.tmp_3 = r0;
    r0 = pxsim.String_.substr(s.tmp_2, 0, s.tmp_3);
    s.tmp_4 = r0;
    r0 = s.cmd___582;
    r0 = s.tmp_4;
    s.cmd___582 = (r0);
    r0 = s.cmd___582;
    s.tmp_0 = r0;
    r0 = pxsim.String_.charAt(s.tmp_0, 0);
    s.tmp_1 = r0;
    r0 = pxsim.String_.compare(s.tmp_1, "C");
    s.tmp_2 = r0;
    r0 = (s.tmp_2 == 0);
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBool(s.tmp_3);
    if (r0) { step = 3; continue; }
    r0 = s.tmp_3;
    { step = 4; continue; }
  case 3:
    r0 = pxsim.langsupp.ignore(s.tmp_3);
    r0 = s.cmd___582;
    s.tmp_4 = r0;
    r0 = pxsim.String_.length(s.tmp_4);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 == 3);
    { step = 4; continue; }
  case 4:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_6);
    if (!r0) { step = 13; continue; }
    s.tmp_7 = { fn: strToNumber__P341, parent: s };
    r0 = s.cmd___582;
    s.tmp_8 = r0;
    r0 = pxsim.String_.substr(s.tmp_8, 1, 1);
    s.tmp_7.arg0 = r0;
    s.pc = 30;
    return actionCall(s.tmp_7)
  case 30:
    r0 = s.retval;
    s.tmp_9 = r0;
    r0 = s.arg1Int___584;
    r0 = s.tmp_9;
    s.arg1Int___584 = (r0);
    s.tmp_0 = { fn: strToNumber__P341, parent: s };
    r0 = s.cmd___582;
    s.tmp_1 = r0;
    r0 = pxsim.String_.substr(s.tmp_1, 2, 1);
    s.tmp_0.arg0 = r0;
    s.pc = 31;
    return actionCall(s.tmp_0)
  case 31:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = s.arg2Int___585;
    r0 = s.tmp_2;
    s.arg2Int___585 = (r0);
    r0 = s.arg1Int___584;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 != -1);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBool(s.tmp_1);
    if (r0) { step = 5; continue; }
    r0 = s.tmp_1;
    { step = 6; continue; }
  case 5:
    r0 = pxsim.langsupp.ignore(s.tmp_1);
    r0 = s.arg2Int___585;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 != -1);
    { step = 6; continue; }
  case 6:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_3);
    if (!r0) { step = 11; continue; }
    r0 = s.arg1Int___584;
    s.tmp_4 = r0;
    r0 = (s.tmp_4 == 0);
    s.tmp_5 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_5);
    if (!r0) { step = 7; continue; }
    r0 = globals.obstacleSensor1___329;
    r0 = true;
    globals.obstacleSensor1___329 = (r0);
    { step = 8; continue; }
  case 7:
    r0 = globals.obstacleSensor1___329;
    r0 = false;
    globals.obstacleSensor1___329 = (r0);
  case 8:
    r0 = s.arg2Int___585;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == 0);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 9; continue; }
    r0 = globals.obstacleSensor2___330;
    r0 = true;
    globals.obstacleSensor2___330 = (r0);
    { step = 10; continue; }
  case 9:
    r0 = globals.obstacleSensor2___330;
    r0 = false;
    globals.obstacleSensor2___330 = (r0);
  case 10:
    { step = 12; continue; }
  case 11:
  case 12:
    { step = 14; continue; }
  case 13:
  case 14:
    r0 = s.cmd___582;
    s.tmp_0 = r0;
    r0 = pxsim.String_.charAt(s.tmp_0, 0);
    s.tmp_1 = r0;
    r0 = pxsim.String_.compare(s.tmp_1, "U");
    s.tmp_2 = r0;
    r0 = (s.tmp_2 == 0);
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBool(s.tmp_3);
    if (r0) { step = 15; continue; }
    r0 = s.tmp_3;
    { step = 16; continue; }
  case 15:
    r0 = pxsim.langsupp.ignore(s.tmp_3);
    r0 = s.cmd___582;
    s.tmp_4 = r0;
    r0 = pxsim.String_.length(s.tmp_4);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 == 5);
    { step = 16; continue; }
  case 16:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_6);
    if (!r0) { step = 19; continue; }
    s.tmp_7 = { fn: decStrToNumber__P342, parent: s };
    r0 = s.cmd___582;
    s.tmp_8 = r0;
    r0 = pxsim.String_.substr(s.tmp_8, 1, 4);
    s.tmp_7.arg0 = r0;
    s.pc = 32;
    return actionCall(s.tmp_7)
  case 32:
    r0 = s.retval;
    s.tmp_9 = r0;
    r0 = s.argInt___586;
    r0 = s.tmp_9;
    s.argInt___586 = (r0);
    r0 = s.argInt___586;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 != -1);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 17; continue; }
    r0 = s.argInt___586;
    s.tmp_2 = r0;
    r0 = globals.currentVoltage___331;
    r0 = s.tmp_2;
    globals.currentVoltage___331 = (r0);
    { step = 18; continue; }
  case 17:
  case 18:
    { step = 20; continue; }
  case 19:
  case 20:
    r0 = s.cmd___582;
    s.tmp_0 = r0;
    r0 = pxsim.String_.charAt(s.tmp_0, 0);
    s.tmp_1 = r0;
    r0 = pxsim.String_.compare(s.tmp_1, "V");
    s.tmp_2 = r0;
    r0 = (s.tmp_2 == 0);
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBool(s.tmp_3);
    if (r0) { step = 21; continue; }
    r0 = s.tmp_3;
    { step = 22; continue; }
  case 21:
    r0 = pxsim.langsupp.ignore(s.tmp_3);
    r0 = s.cmd___582;
    s.tmp_4 = r0;
    r0 = pxsim.String_.length(s.tmp_4);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 == 4);
    { step = 22; continue; }
  case 22:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_6);
    if (!r0) { step = 23; continue; }
    r0 = globals.versionFlag___333;
    r0 = true;
    globals.versionFlag___333 = (r0);
    { step = 24; continue; }
  case 23:
  case 24:
    { step = 26; continue; }
  case 25:
  case 26:
    r0 = pxsim.String_.mkEmpty();
    s.tmp_0 = r0;
    r0 = globals.handleCmd___337;
    r0 = s.tmp_0;
    globals.handleCmd___337 = (r0);
  case 27:
    r0 = s.charStr___578;
    r0 = s.cnt___580;
    r0 = s.index___581;
    r0 = s.cmd___582;
    r0 = s.arg1Int___584;
    r0 = s.arg2Int___585;
    r0 = s.argInt___586;
    return leave(s, r0)
  default: oops()
} } }
getHandleCmd__P338.info = {"start":3190,"length":1674,"line":139,"column":4,"endLine":187,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"getHandleCmd"}



var decStrToNumber__P342  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.num___588 = undefined;
    s.i___589 = undefined;
    s.tmp___591 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.num___588;
    r0 = 0;
    s.num___588 = (r0);
    r0 = s.i___589;
    r0 = 0;
    s.i___589 = (r0);
  case 1:
    r0 = s.i___589;
    s.tmp_0 = r0;
    r0 = s.arg0;
    s.tmp_1 = r0;
    r0 = pxsim.String_.length(s.tmp_1);
    s.tmp_2 = r0;
    r0 = (s.tmp_0 < s.tmp_2);
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_3);
    if (!r0) { step = 7; continue; }
    s.tmp_4 = { fn: converOneChar__P343, parent: s };
    r0 = s.arg0;
    s.tmp_5 = r0;
    r0 = s.i___589;
    s.tmp_6 = r0;
    r0 = pxsim.String_.charAt(s.tmp_5, s.tmp_6);
    s.tmp_4.arg0 = r0;
    s.pc = 10;
    return actionCall(s.tmp_4)
  case 10:
    r0 = s.retval;
    s.tmp_7 = r0;
    r0 = s.tmp___591;
    r0 = s.tmp_7;
    s.tmp___591 = (r0);
    r0 = s.tmp___591;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == -1);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = -1;
    { step = 8; continue; }
    { step = 3; continue; }
  case 2:
  case 3:
    r0 = s.i___589;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > 0);
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_3);
    if (!r0) { step = 4; continue; }
    r0 = s.num___588;
    s.tmp_4 = r0;
    r0 = (s.tmp_4 * 10);
    s.tmp_5 = r0;
    r0 = s.num___588;
    r0 = s.tmp_5;
    s.num___588 = (r0);
    { step = 5; continue; }
  case 4:
  case 5:
    r0 = s.num___588;
    s.tmp_0 = r0;
    r0 = s.tmp___591;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.tmp_2 = r0;
    r0 = s.num___588;
    r0 = s.tmp_2;
    s.num___588 = (r0);
    r0 = s.i___589;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
    s.tmp_1 = r0;
    r0 = s.i___589;
    r0 = s.tmp_1;
    s.i___589 = (r0);
    { step = 1; continue; }
  case 7:
    r0 = s.num___588;
    { step = 8; continue; }
  case 8:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.num___588;
    r0 = s.i___589;
    r0 = s.tmp___591;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
decStrToNumber__P342.info = {"start":5853,"length":366,"line":227,"column":4,"endLine":239,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"decStrToNumber"}



var converOneChar__P343  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = pxsim.String_.compare(s.tmp_0, "0");
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >= 0);
    s.tmp_2 = r0;
    r0 = pxsim.numops.toBool(s.tmp_2);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_2;
    { step = 2; continue; }
  case 1:
    r0 = pxsim.langsupp.ignore(s.tmp_2);
    r0 = s.arg0;
    s.tmp_3 = r0;
    r0 = pxsim.String_.compare(s.tmp_3, "9");
    s.tmp_4 = r0;
    r0 = (s.tmp_4 <= 0);
    { step = 2; continue; }
  case 2:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_5);
    if (!r0) { step = 3; continue; }
    s.tmp_6 = { fn: parseInt__P114, parent: s };
    r0 = s.arg0;
    s.tmp_6.arg0 = r0;
    s.pc = 23;
    return actionCall(s.tmp_6)
  case 23:
    r0 = s.retval;
    { step = 21; continue; }
    { step = 20; continue; }
  case 3:
    r0 = s.arg0;
    s.tmp_7 = r0;
    r0 = pxsim.String_.compare(s.tmp_7, "A");
    s.tmp_8 = r0;
    r0 = (s.tmp_8 >= 0);
    s.tmp_9 = r0;
    r0 = pxsim.numops.toBool(s.tmp_9);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_9;
    { step = 5; continue; }
  case 4:
    r0 = pxsim.langsupp.ignore(s.tmp_9);
    r0 = s.arg0;
    s.tmp_10 = r0;
    r0 = pxsim.String_.compare(s.tmp_10, "F");
    s.tmp_11 = r0;
    r0 = (s.tmp_11 <= 0);
    { step = 5; continue; }
  case 5:
    // jmp value (already in r0)
    s.tmp_12 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_12);
    if (!r0) { step = 18; continue; }
    r0 = s.arg0;
    s.tmp_13 = r0;
    r0 = pxsim.String_.compare(s.tmp_13, "A");
    s.tmp_14 = r0;
    r0 = (s.tmp_14 == 0);
    s.tmp_15 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_15);
    if (!r0) { step = 6; continue; }
    r0 = 10;
    { step = 21; continue; }
    { step = 17; continue; }
  case 6:
    r0 = s.arg0;
    s.tmp_16 = r0;
    r0 = pxsim.String_.compare(s.tmp_16, "B");
    s.tmp_17 = r0;
    r0 = (s.tmp_17 == 0);
    s.tmp_18 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_18);
    if (!r0) { step = 7; continue; }
    r0 = 11;
    { step = 21; continue; }
    { step = 16; continue; }
  case 7:
    r0 = s.arg0;
    s.tmp_19 = r0;
    r0 = pxsim.String_.compare(s.tmp_19, "C");
    s.tmp_20 = r0;
    r0 = (s.tmp_20 == 0);
    s.tmp_21 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_21);
    if (!r0) { step = 8; continue; }
    r0 = 12;
    { step = 21; continue; }
    { step = 15; continue; }
  case 8:
    r0 = s.arg0;
    s.tmp_22 = r0;
    r0 = pxsim.String_.compare(s.tmp_22, "D");
    s.tmp_23 = r0;
    r0 = (s.tmp_23 == 0);
    s.tmp_24 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_24);
    if (!r0) { step = 9; continue; }
    r0 = 13;
    { step = 21; continue; }
    { step = 14; continue; }
  case 9:
    r0 = s.arg0;
    s.tmp_25 = r0;
    r0 = pxsim.String_.compare(s.tmp_25, "E");
    s.tmp_26 = r0;
    r0 = (s.tmp_26 == 0);
    s.tmp_27 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_27);
    if (!r0) { step = 10; continue; }
    r0 = 14;
    { step = 21; continue; }
    { step = 13; continue; }
  case 10:
    r0 = s.arg0;
    s.tmp_28 = r0;
    r0 = pxsim.String_.compare(s.tmp_28, "F");
    s.tmp_29 = r0;
    r0 = (s.tmp_29 == 0);
    s.tmp_30 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_30);
    if (!r0) { step = 11; continue; }
    r0 = 15;
    { step = 21; continue; }
    { step = 12; continue; }
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    r0 = -1;
    { step = 21; continue; }
    { step = 19; continue; }
  case 18:
    r0 = -1;
    { step = 21; continue; }
  case 19:
  case 20:
  case 21:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
converOneChar__P343.info = {"start":6225,"length":813,"line":241,"column":4,"endLine":268,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"converOneChar"}



var strToNumber__P341  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.num___594 = undefined;
    s.i___595 = undefined;
    s.tmp___597 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.num___594;
    r0 = 0;
    s.num___594 = (r0);
    r0 = s.i___595;
    r0 = 0;
    s.i___595 = (r0);
  case 1:
    r0 = s.i___595;
    s.tmp_0 = r0;
    r0 = s.arg0;
    s.tmp_1 = r0;
    r0 = pxsim.String_.length(s.tmp_1);
    s.tmp_2 = r0;
    r0 = (s.tmp_0 < s.tmp_2);
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_3);
    if (!r0) { step = 7; continue; }
    s.tmp_4 = { fn: converOneChar__P343, parent: s };
    r0 = s.arg0;
    s.tmp_5 = r0;
    r0 = s.i___595;
    s.tmp_6 = r0;
    r0 = pxsim.String_.charAt(s.tmp_5, s.tmp_6);
    s.tmp_4.arg0 = r0;
    s.pc = 10;
    return actionCall(s.tmp_4)
  case 10:
    r0 = s.retval;
    s.tmp_7 = r0;
    r0 = s.tmp___597;
    r0 = s.tmp_7;
    s.tmp___597 = (r0);
    r0 = s.tmp___597;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == -1);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = -1;
    { step = 8; continue; }
    { step = 3; continue; }
  case 2:
  case 3:
    r0 = s.i___595;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > 0);
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_3);
    if (!r0) { step = 4; continue; }
    r0 = s.num___594;
    s.tmp_4 = r0;
    r0 = (s.tmp_4 * 16);
    s.tmp_5 = r0;
    r0 = s.num___594;
    r0 = s.tmp_5;
    s.num___594 = (r0);
    { step = 5; continue; }
  case 4:
  case 5:
    r0 = s.num___594;
    s.tmp_0 = r0;
    r0 = s.tmp___597;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.tmp_2 = r0;
    r0 = s.num___594;
    r0 = s.tmp_2;
    s.num___594 = (r0);
    r0 = s.i___595;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
    s.tmp_1 = r0;
    r0 = s.i___595;
    r0 = s.tmp_1;
    s.i___595 = (r0);
    { step = 1; continue; }
  case 7:
    r0 = s.num___594;
    { step = 8; continue; }
  case 8:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.num___594;
    r0 = s.i___595;
    r0 = s.tmp___597;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
strToNumber__P341.info = {"start":5484,"length":363,"line":213,"column":4,"endLine":225,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"strToNumber"}



var findIndexof__P339  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.i___601 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg2;
    s.tmp_0 = r0;
    r0 = s.i___601;
    r0 = s.tmp_0;
    s.i___601 = (r0);
  case 1:
    r0 = s.i___601;
    s.tmp_0 = r0;
    r0 = s.arg0;
    s.tmp_1 = r0;
    r0 = pxsim.String_.length(s.tmp_1);
    s.tmp_2 = r0;
    r0 = (s.tmp_0 < s.tmp_2);
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_3);
    if (!r0) { step = 5; continue; }
    r0 = s.arg0;
    s.tmp_4 = r0;
    r0 = s.i___601;
    s.tmp_5 = r0;
    r0 = pxsim.String_.charAt(s.tmp_4, s.tmp_5);
    s.tmp_6 = r0;
    r0 = s.arg1;
    s.tmp_7 = r0;
    r0 = pxsim.String_.compare(s.tmp_6, s.tmp_7);
    s.tmp_8 = r0;
    r0 = (s.tmp_8 == 0);
    s.tmp_9 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_9);
    if (!r0) { step = 2; continue; }
    r0 = s.i___601;
    { step = 6; continue; }
    { step = 3; continue; }
  case 2:
  case 3:
    r0 = s.i___601;
    s.tmp_10 = r0;
    r0 = (s.tmp_10 + 1);
    s.tmp_11 = r0;
    r0 = s.i___601;
    r0 = s.tmp_11;
    s.i___601 = (r0);
    { step = 1; continue; }
  case 5:
    r0 = -1;
    { step = 6; continue; }
  case 6:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.i___601;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
findIndexof__P339.info = {"start":4871,"length":304,"line":189,"column":5,"endLine":199,"endColumn":6,"fileName":"pxt_modules/qbit/main.ts","functionName":"findIndexof"}



var countChar__P340  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.cnt___605 = undefined;
    s.i___606 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.cnt___605;
    r0 = 0;
    s.cnt___605 = (r0);
    r0 = s.i___606;
    r0 = 0;
    s.i___606 = (r0);
  case 1:
    r0 = s.i___606;
    s.tmp_0 = r0;
    r0 = s.arg0;
    s.tmp_1 = r0;
    r0 = pxsim.String_.length(s.tmp_1);
    s.tmp_2 = r0;
    r0 = (s.tmp_0 < s.tmp_2);
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_3);
    if (!r0) { step = 5; continue; }
    r0 = s.arg0;
    s.tmp_4 = r0;
    r0 = s.i___606;
    s.tmp_5 = r0;
    r0 = pxsim.String_.charAt(s.tmp_4, s.tmp_5);
    s.tmp_6 = r0;
    r0 = s.arg1;
    s.tmp_7 = r0;
    r0 = pxsim.String_.compare(s.tmp_6, s.tmp_7);
    s.tmp_8 = r0;
    r0 = (s.tmp_8 == 0);
    s.tmp_9 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_9);
    if (!r0) { step = 2; continue; }
    r0 = s.cnt___605;
    s.tmp_10 = r0;
    r0 = (s.tmp_10 + 1);
    s.tmp_11 = r0;
    r0 = s.cnt___605;
    r0 = s.tmp_11;
    s.cnt___605 = (r0);
    { step = 3; continue; }
  case 2:
  case 3:
    r0 = s.i___606;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
    s.tmp_1 = r0;
    r0 = s.i___606;
    r0 = s.tmp_1;
    s.i___606 = (r0);
    { step = 1; continue; }
  case 5:
    r0 = s.cnt___605;
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.cnt___605;
    r0 = s.i___606;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
countChar__P340.info = {"start":5183,"length":291,"line":201,"column":5,"endLine":211,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"countChar"}



var initColorSensor__P446  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = { fn: InitColor__P431, parent: s };
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.tmp_0 = { fn: enableLightSensor__P437, parent: s };
    r0 = false;
    s.tmp_0.arg0 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
    r0 = pxsim.control.waitMicros(100);
    return leave(s, r0)
  default: oops()
} } }
initColorSensor__P446.info = {"start":20436,"length":114,"line":707,"column":1,"endLine":711,"endColumn":2,"fileName":"pxt_modules/qbit/main.ts","functionName":"initColorSensor"}



var enableLightSensor__P437  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = { fn: setAmbientLightGain__P438, parent: s };
    r0 = 1;
    s.tmp_0.arg0 = r0;
    s.pc = 4;
    return actionCall(s.tmp_0)
  case 4:
    r0 = s.retval;
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = { fn: setAmbientLightIntEnable__P441, parent: s };
    r0 = 1;
    s.tmp_1.arg0 = r0;
    s.pc = 5;
    return actionCall(s.tmp_1)
  case 5:
    r0 = s.retval;
    { step = 2; continue; }
  case 1:
    s.tmp_0 = { fn: setAmbientLightIntEnable__P441, parent: s };
    r0 = 0;
    s.tmp_0.arg0 = r0;
    s.pc = 6;
    return actionCall(s.tmp_0)
  case 6:
    r0 = s.retval;
  case 2:
    s.tmp_0 = { fn: enablePower__P440, parent: s };
    s.pc = 7;
    return actionCall(s.tmp_0)
  case 7:
    r0 = s.retval;
    s.tmp_0 = { fn: setMode__P432, parent: s };
    r0 = 1;
    s.tmp_0.arg0 = r0;
    r0 = 1;
    s.tmp_0.arg1 = r0;
    s.pc = 8;
    return actionCall(s.tmp_0)
  case 8:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
enableLightSensor__P437.info = {"start":18324,"length":318,"line":626,"column":5,"endLine":638,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"enableLightSensor"}



var setMode__P432  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.reg_val___611 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = { fn: getMode__P433, parent: s };
    s.pc = 12;
    return actionCall(s.tmp_0)
  case 12:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = s.reg_val___611;
    r0 = s.tmp_1;
    s.reg_val___611 = (r0);
    r0 = s.arg1;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 1);
    s.tmp_1 = r0;
    r0 = s.arg1;
    r0 = s.tmp_1;
    s.arg1 = (r0);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >= 0);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBool(s.tmp_1);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_1;
    { step = 2; continue; }
  case 1:
    r0 = pxsim.langsupp.ignore(s.tmp_1);
    r0 = s.arg0;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 <= 6);
    { step = 2; continue; }
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_3);
    if (!r0) { step = 5; continue; }
    r0 = s.arg1;
    s.tmp_4 = r0;
    r0 = (s.tmp_4 > 0);
    s.tmp_5 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_5);
    if (!r0) { step = 3; continue; }
    r0 = s.reg_val___611;
    s.tmp_6 = r0;
    r0 = s.arg0;
    s.tmp_7 = r0;
    r0 = (1 << s.tmp_7);
    s.tmp_8 = r0;
    r0 = (s.tmp_6 | s.tmp_8);
    s.tmp_9 = r0;
    r0 = s.reg_val___611;
    r0 = s.tmp_9;
    s.reg_val___611 = (r0);
    { step = 4; continue; }
  case 3:
    r0 = s.reg_val___611;
    s.tmp_0 = r0;
    r0 = s.arg0;
    s.tmp_1 = r0;
    r0 = (1 << s.tmp_1);
    s.tmp_2 = r0;
    r0 = (255 - s.tmp_2);
    s.tmp_3 = r0;
    r0 = (s.tmp_0 & s.tmp_3);
    s.tmp_4 = r0;
    r0 = s.reg_val___611;
    r0 = s.tmp_4;
    s.reg_val___611 = (r0);
  case 4:
    { step = 10; continue; }
  case 5:
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == 7);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 8; continue; }
    r0 = s.arg1;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > 0);
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_3);
    if (!r0) { step = 6; continue; }
    r0 = s.reg_val___611;
    r0 = 127;
    s.reg_val___611 = (r0);
    { step = 7; continue; }
  case 6:
    r0 = s.reg_val___611;
    r0 = 0;
    s.reg_val___611 = (r0);
  case 7:
    { step = 9; continue; }
  case 8:
  case 9:
  case 10:
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 128;
    s.tmp_0.arg0 = r0;
    r0 = s.reg_val___611;
    s.tmp_0.arg1 = r0;
    s.pc = 13;
    return actionCall(s.tmp_0)
  case 13:
    r0 = s.retval;
    r0 = s.reg_val___611;
    return leave(s, r0)
  default: oops()
} } }
setMode__P432.info = {"start":16651,"length":733,"line":567,"column":5,"endLine":595,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"setMode"}



var i2cwrite__P429  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.buf___614 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.pins.createBuffer(2);
    s.tmp_0 = r0;
    r0 = s.buf___614;
    r0 = s.tmp_0;
    s.buf___614 = (r0);
    r0 = s.buf___614;
    s.tmp_0 = r0;
    r0 = s.arg0;
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 0, s.tmp_1);
    r0 = s.buf___614;
    s.tmp_0 = r0;
    r0 = s.arg1;
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 1, s.tmp_1);
    r0 = s.buf___614;
    s.tmp_0 = r0;
    r0 = pxsim.pins.i2cWriteBuffer(57, s.tmp_0, 0);
    r0 = s.buf___614;
    return leave(s, r0)
  default: oops()
} } }
i2cwrite__P429.info = {"start":15227,"length":188,"line":529,"column":4,"endLine":534,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"i2cwrite"}



var getMode__P433  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.enable_value___615 = undefined;
    s.tmp_0 = { fn: i2cread__P430, parent: s };
    r0 = 128;
    s.tmp_0.arg0 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = s.enable_value___615;
    r0 = s.tmp_1;
    s.enable_value___615 = (r0);
    r0 = s.enable_value___615;
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.enable_value___615;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
getMode__P433.info = {"start":17395,"length":128,"line":597,"column":5,"endLine":600,"endColumn":9,"fileName":"pxt_modules/qbit/main.ts","functionName":"getMode"}



var i2cread__P430  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.val___617 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = { fn: i2cWriteNumber__P309, parent: s };
    r0 = 57;
    s.tmp_0.arg0 = r0;
    r0 = s.arg0;
    s.tmp_0.arg1 = r0;
    r0 = 7;
    s.tmp_0.arg2 = r0;
    r0 = undefined;
    s.tmp_0.arg3 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
    s.tmp_0 = { fn: i2cReadNumber__P308, parent: s };
    r0 = 57;
    s.tmp_0.arg0 = r0;
    r0 = 7;
    s.tmp_0.arg1 = r0;
    r0 = undefined;
    s.tmp_0.arg2 = r0;
    s.pc = 4;
    return actionCall(s.tmp_0)
  case 4:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = s.val___617;
    r0 = s.tmp_1;
    s.val___617 = (r0);
    r0 = s.val___617;
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.val___617;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
i2cread__P430.info = {"start":15422,"length":213,"line":536,"column":5,"endLine":540,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"i2cread"}



var i2cReadNumber__P308  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.buf___621 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    s.tmp_1 = { fn: sizeOf__P316, parent: s };
    r0 = s.arg1;
    s.tmp_1.arg0 = r0;
    s.pc = 3;
    return actionCall(s.tmp_1)
  case 3:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = s.arg2;
    s.tmp_3 = r0;
    r0 = pxsim.pins.i2cReadBuffer(s.tmp_0, s.tmp_2, s.tmp_3);
    s.tmp_4 = r0;
    r0 = s.buf___621;
    r0 = s.tmp_4;
    s.buf___621 = (r0);
    r0 = s.buf___621;
    s.tmp_0 = r0;
    r0 = s.arg1;
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_0, s.tmp_1, 0);
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.buf___621;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
i2cReadNumber__P308.info = {"start":1301,"length":221,"line":25,"column":4,"endLine":28,"endColumn":5,"fileName":"pxt_modules/core/pins.ts","functionName":"i2cReadNumber"}



var sizeOf__P316  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = pxsim.pxtcore.switch_eq(1, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim.pxtcore.switch_eq(2, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim.pxtcore.switch_eq(6, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim.pxtcore.switch_eq(7, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim.pxtcore.switch_eq(3, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim.pxtcore.switch_eq(4, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim.pxtcore.switch_eq(8, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim.pxtcore.switch_eq(9, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim.pxtcore.switch_eq(5, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim.pxtcore.switch_eq(10, s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim.pxtcore.switch_eq(12, s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim.pxtcore.switch_eq(11, s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = pxsim.pxtcore.switch_eq(15, s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim.pxtcore.switch_eq(13, s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = pxsim.pxtcore.switch_eq(16, s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = pxsim.pxtcore.switch_eq(14, s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = s.tmp_0;
    r0 = s.tmp_0;
    { step = 17; continue; }
  case 1:
  case 2:
  case 3:
  case 4:
    r0 = 1;
    { step = 18; continue; }
  case 5:
  case 6:
  case 7:
  case 8:
    r0 = 2;
    { step = 18; continue; }
  case 9:
  case 10:
  case 11:
  case 12:
  case 13:
  case 14:
    r0 = 4;
    { step = 18; continue; }
  case 15:
  case 16:
    r0 = 8;
    { step = 18; continue; }
  case 17:
    r0 = 0;
    { step = 18; continue; }
  case 18:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
sizeOf__P316.info = {"start":102,"length":844,"line":5,"column":4,"endLine":29,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"sizeOf"}



var i2cWriteNumber__P309  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.buf___629 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = { fn: sizeOf__P316, parent: s };
    r0 = s.arg2;
    s.tmp_0.arg0 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim.pins.createBuffer(s.tmp_1);
    s.tmp_2 = r0;
    r0 = s.buf___629;
    r0 = s.tmp_2;
    s.buf___629 = (r0);
    r0 = s.buf___629;
    s.tmp_0 = r0;
    r0 = s.arg2;
    s.tmp_1 = r0;
    r0 = s.arg1;
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, s.tmp_1, 0, s.tmp_2);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = s.buf___629;
    s.tmp_1 = r0;
    r0 = s.arg3;
    s.tmp_2 = r0;
    r0 = pxsim.pins.i2cWriteBuffer(s.tmp_0, s.tmp_1, s.tmp_2);
    r0 = s.buf___629;
    return leave(s, r0)
  default: oops()
} } }
i2cWriteNumber__P309.info = {"start":1791,"length":262,"line":35,"column":4,"endLine":39,"endColumn":5,"fileName":"pxt_modules/core/pins.ts","functionName":"i2cWriteNumber"}



var enablePower__P440  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = { fn: setMode__P432, parent: s };
    r0 = 0;
    s.tmp_0.arg0 = r0;
    r0 = 1;
    s.tmp_0.arg1 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
enablePower__P440.info = {"start":19069,"length":56,"line":655,"column":5,"endLine":657,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"enablePower"}



var setAmbientLightIntEnable__P441  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.val___632 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = { fn: i2cread__P430, parent: s };
    r0 = 128;
    s.tmp_0.arg0 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = s.val___632;
    r0 = s.tmp_1;
    s.val___632 = (r0);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 1);
    s.tmp_1 = r0;
    r0 = s.arg0;
    r0 = s.tmp_1;
    s.arg0 = (r0);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 << 4);
    s.tmp_1 = r0;
    r0 = s.arg0;
    r0 = s.tmp_1;
    s.arg0 = (r0);
    r0 = s.val___632;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 239);
    s.tmp_1 = r0;
    r0 = s.val___632;
    r0 = s.tmp_1;
    s.val___632 = (r0);
    r0 = s.val___632;
    s.tmp_0 = r0;
    r0 = s.arg0;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 | s.tmp_1);
    s.tmp_2 = r0;
    r0 = s.val___632;
    r0 = s.tmp_2;
    s.val___632 = (r0);
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 128;
    s.tmp_0.arg0 = r0;
    r0 = s.val___632;
    s.tmp_0.arg1 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
    r0 = s.val___632;
    return leave(s, r0)
  default: oops()
} } }
setAmbientLightIntEnable__P441.info = {"start":19132,"length":305,"line":659,"column":5,"endLine":667,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"setAmbientLightIntEnable"}



var setAmbientLightGain__P438  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.val___634 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = { fn: i2cread__P430, parent: s };
    r0 = 143;
    s.tmp_0.arg0 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = s.val___634;
    r0 = s.tmp_1;
    s.val___634 = (r0);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 3);
    s.tmp_1 = r0;
    r0 = s.arg0;
    r0 = s.tmp_1;
    s.arg0 = (r0);
    r0 = s.val___634;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 252);
    s.tmp_1 = r0;
    r0 = s.val___634;
    r0 = s.tmp_1;
    s.val___634 = (r0);
    r0 = s.val___634;
    s.tmp_0 = r0;
    r0 = s.arg0;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 | s.tmp_1);
    s.tmp_2 = r0;
    r0 = s.val___634;
    r0 = s.tmp_2;
    s.val___634 = (r0);
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 143;
    s.tmp_0.arg0 = r0;
    r0 = s.val___634;
    s.tmp_0.arg1 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
    r0 = s.val___634;
    return leave(s, r0)
  default: oops()
} } }
setAmbientLightGain__P438.info = {"start":18649,"length":268,"line":640,"column":5,"endLine":647,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"setAmbientLightGain"}



var InitColor__P431  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.id___635 = undefined;
    s.tmp_0 = { fn: i2cread__P430, parent: s };
    r0 = 146;
    s.tmp_0.arg0 = r0;
    s.pc = 7;
    return actionCall(s.tmp_0)
  case 7:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = s.id___635;
    r0 = s.tmp_1;
    s.id___635 = (r0);
    r0 = s.id___635;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == 168);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBool(s.tmp_1);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_1;
    { step = 2; continue; }
  case 1:
    r0 = pxsim.langsupp.ignore(s.tmp_1);
    r0 = s.id___635;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 == 156);
    { step = 2; continue; }
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_3);
    s.tmp_4 = r0;
    r0 = pxsim.Boolean_.bang(s.tmp_4);
    s.tmp_5 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_5);
    if (!r0) { step = 3; continue; }
    r0 = false;
    { step = 5; continue; }
    { step = 4; continue; }
  case 3:
  case 4:
    s.tmp_6 = { fn: setMode__P432, parent: s };
    r0 = 7;
    s.tmp_6.arg0 = r0;
    r0 = 0;
    s.tmp_6.arg1 = r0;
    s.pc = 8;
    return actionCall(s.tmp_6)
  case 8:
    r0 = s.retval;
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 129;
    s.tmp_0.arg0 = r0;
    r0 = 219;
    s.tmp_0.arg1 = r0;
    s.pc = 9;
    return actionCall(s.tmp_0)
  case 9:
    r0 = s.retval;
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 131;
    s.tmp_0.arg0 = r0;
    r0 = 246;
    s.tmp_0.arg1 = r0;
    s.pc = 10;
    return actionCall(s.tmp_0)
  case 10:
    r0 = s.retval;
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 142;
    s.tmp_0.arg0 = r0;
    r0 = 135;
    s.tmp_0.arg1 = r0;
    s.pc = 11;
    return actionCall(s.tmp_0)
  case 11:
    r0 = s.retval;
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 157;
    s.tmp_0.arg0 = r0;
    r0 = 0;
    s.tmp_0.arg1 = r0;
    s.pc = 12;
    return actionCall(s.tmp_0)
  case 12:
    r0 = s.retval;
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 158;
    s.tmp_0.arg0 = r0;
    r0 = 0;
    s.tmp_0.arg1 = r0;
    s.pc = 13;
    return actionCall(s.tmp_0)
  case 13:
    r0 = s.retval;
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 141;
    s.tmp_0.arg0 = r0;
    r0 = 96;
    s.tmp_0.arg1 = r0;
    s.pc = 14;
    return actionCall(s.tmp_0)
  case 14:
    r0 = s.retval;
    s.tmp_0 = { fn: setLEDDrive__P434, parent: s };
    r0 = 0;
    s.tmp_0.arg0 = r0;
    s.pc = 15;
    return actionCall(s.tmp_0)
  case 15:
    r0 = s.retval;
    s.tmp_0 = { fn: setAmbientLightGain__P438, parent: s };
    r0 = 1;
    s.tmp_0.arg0 = r0;
    s.pc = 16;
    return actionCall(s.tmp_0)
  case 16:
    r0 = s.retval;
    s.tmp_0 = { fn: setLightIntLowThreshold__P435, parent: s };
    r0 = 65535;
    s.tmp_0.arg0 = r0;
    s.pc = 17;
    return actionCall(s.tmp_0)
  case 17:
    r0 = s.retval;
    s.tmp_0 = { fn: setLightIntHighThreshold__P436, parent: s };
    r0 = 0;
    s.tmp_0.arg0 = r0;
    s.pc = 18;
    return actionCall(s.tmp_0)
  case 18:
    r0 = s.retval;
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 140;
    s.tmp_0.arg0 = r0;
    r0 = 17;
    s.tmp_0.arg1 = r0;
    s.pc = 19;
    return actionCall(s.tmp_0)
  case 19:
    r0 = s.retval;
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 144;
    s.tmp_0.arg0 = r0;
    r0 = 1;
    s.tmp_0.arg1 = r0;
    s.pc = 20;
    return actionCall(s.tmp_0)
  case 20:
    r0 = s.retval;
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 159;
    s.tmp_0.arg0 = r0;
    r0 = 0;
    s.tmp_0.arg1 = r0;
    s.pc = 21;
    return actionCall(s.tmp_0)
  case 21:
    r0 = s.retval;
    r0 = true;
    { step = 5; continue; }
  case 5:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.id___635;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
InitColor__P431.info = {"start":15642,"length":994,"line":542,"column":5,"endLine":565,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"InitColor"}



var setLightIntHighThreshold__P436  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.val_low___637 = undefined;
    s.val_high___638 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 255);
    s.tmp_1 = r0;
    r0 = s.val_low___637;
    r0 = s.tmp_1;
    s.val_low___637 = (r0);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 65280);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 8);
    s.tmp_2 = r0;
    r0 = s.val_high___638;
    r0 = s.tmp_2;
    s.val_high___638 = (r0);
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 134;
    s.tmp_0.arg0 = r0;
    r0 = s.val_low___637;
    s.tmp_0.arg1 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 135;
    s.tmp_0.arg0 = r0;
    r0 = s.val_high___638;
    s.tmp_0.arg1 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
    r0 = s.val_low___637;
    r0 = s.val_high___638;
    return leave(s, r0)
  default: oops()
} } }
setLightIntHighThreshold__P436.info = {"start":18078,"length":239,"line":619,"column":5,"endLine":624,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"setLightIntHighThreshold"}



var setLightIntLowThreshold__P435  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.val_low___640 = undefined;
    s.val_high___641 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 255);
    s.tmp_1 = r0;
    r0 = s.val_low___640;
    r0 = s.tmp_1;
    s.val_low___640 = (r0);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 65280);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 8);
    s.tmp_2 = r0;
    r0 = s.val_high___641;
    r0 = s.tmp_2;
    s.val_high___641 = (r0);
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 132;
    s.tmp_0.arg0 = r0;
    r0 = s.val_low___640;
    s.tmp_0.arg1 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 133;
    s.tmp_0.arg0 = r0;
    r0 = s.val_high___641;
    s.tmp_0.arg1 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
    r0 = s.val_low___640;
    r0 = s.val_high___641;
    return leave(s, r0)
  default: oops()
} } }
setLightIntLowThreshold__P435.info = {"start":17834,"length":237,"line":612,"column":5,"endLine":617,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"setLightIntLowThreshold"}



var setLEDDrive__P434  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.val___643 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = { fn: i2cread__P430, parent: s };
    r0 = 143;
    s.tmp_0.arg0 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = s.val___643;
    r0 = s.tmp_1;
    s.val___643 = (r0);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 3);
    s.tmp_1 = r0;
    r0 = s.arg0;
    r0 = s.tmp_1;
    s.arg0 = (r0);
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 << 6);
    s.tmp_1 = r0;
    r0 = s.arg0;
    r0 = s.tmp_1;
    s.arg0 = (r0);
    r0 = s.val___643;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 63);
    s.tmp_1 = r0;
    r0 = s.val___643;
    r0 = s.tmp_1;
    s.val___643 = (r0);
    r0 = s.val___643;
    s.tmp_0 = r0;
    r0 = s.arg0;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 | s.tmp_1);
    s.tmp_2 = r0;
    r0 = s.val___643;
    r0 = s.tmp_2;
    s.val___643 = (r0);
    s.tmp_0 = { fn: i2cwrite__P429, parent: s };
    r0 = 143;
    s.tmp_0.arg0 = r0;
    r0 = s.val___643;
    s.tmp_0.arg1 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
    r0 = s.val___643;
    return leave(s, r0)
  default: oops()
} } }
setLEDDrive__P434.info = {"start":17530,"length":293,"line":602,"column":5,"endLine":610,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"setLEDDrive"}



var initRGBLight__P351  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = globals.lhRGBLight___328;
    s.tmp_0 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_0);
    s.tmp_1 = r0;
    r0 = pxsim.Boolean_.bang(s.tmp_1);
    s.tmp_2 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_2);
    if (!r0) { step = 1; continue; }
    s.tmp_3 = { fn: create__P472, parent: s };
    r0 = 22;
    s.tmp_3.arg0 = r0;
    r0 = 4;
    s.tmp_3.arg1 = r0;
    r0 = 0;
    s.tmp_3.arg2 = r0;
    s.pc = 4;
    return actionCall(s.tmp_3)
  case 4:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = globals.lhRGBLight___328;
    r0 = s.tmp_4;
    globals.lhRGBLight___328 = (r0);
    { step = 2; continue; }
  case 1:
  case 2:
    s.tmp_0 = { fn: clearLight__P356, parent: s };
    s.pc = 5;
    return actionCall(s.tmp_0)
  case 5:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
initRGBLight__P351.info = {"start":10418,"length":162,"line":392,"column":1,"endLine":397,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"initRGBLight"}



var clearLight__P356  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = { fn: LHQbitRGBLight_clear__P471, parent: s };
    r0 = globals.lhRGBLight___328;
    s.tmp_0.arg0 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
clearLight__P356.info = {"start":12090,"length":64,"line":441,"column":4,"endLine":443,"endColumn":5,"fileName":"pxt_modules/qbit/main.ts","functionName":"clearLight"}



var LHQbitRGBLight_clear__P471  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.stride___645 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    r0 = r0._mode___5;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 === 1);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 1; continue; }
    r0 = 4;
    { step = 2; continue; }
  case 1:
    r0 = 3;
    { step = 2; continue; }
  case 2:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = s.stride___645;
    r0 = s.tmp_2;
    s.stride___645 = (r0);
    r0 = s.arg0;
    r0 = r0.buf___0;
    s.tmp_0 = r0;
    r0 = s.arg0;
    r0 = r0.start___3;
    s.tmp_1 = r0;
    r0 = s.stride___645;
    s.tmp_2 = r0;
    r0 = (s.tmp_1 * s.tmp_2);
    s.tmp_3 = r0;
    r0 = s.arg0;
    r0 = r0._length___4;
    s.tmp_4 = r0;
    r0 = s.stride___645;
    s.tmp_5 = r0;
    r0 = (s.tmp_4 * s.tmp_5);
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.fill(s.tmp_0, 0, s.tmp_3, s.tmp_6);
    s.tmp_0 = { fn: LHQbitRGBLight_show__P470, parent: s };
    r0 = s.arg0;
    s.tmp_0.arg0 = r0;
    s.pc = 4;
    return actionCall(s.tmp_0)
  case 4:
    r0 = s.retval;
    r0 = s.stride___645;
    return leave(s, r0)
  default: oops()
} } }
LHQbitRGBLight_clear__P471.info = {"start":5780,"length":197,"line":205,"column":8,"endLine":209,"endColumn":9,"fileName":"pxt_modules/qbit/QbitRGBLight.ts","functionName":"clear"}



var LHQbitRGBLight_show__P470  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    r0 = r0.buf___0;
    s.tmp_0 = r0;
    r0 = s.arg0;
    r0 = r0.pin___1;
    s.tmp_1 = r0;
    r0 = pxsim.sendBufferAsm(s.tmp_0, s.tmp_1);
    return leave(s, r0)
  default: oops()
} } }
LHQbitRGBLight_show__P470.info = {"start":5708,"length":62,"line":201,"column":8,"endLine":203,"endColumn":9,"fileName":"pxt_modules/qbit/QbitRGBLight.ts","functionName":"show"}



var create__P472  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.light___651 = undefined;
    s.stride___652 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.pxtcore.mkClassInstance(LHQbitRGBLight__C464_VT);
    s.tmp_0 = r0;
    r0 = s.light___651;
    r0 = s.tmp_0;
    s.light___651 = (r0);
    r0 = s.arg2;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 === 1);
    s.tmp_1 = r0;
    r0 = pxsim.numops.toBoolDecr(s.tmp_1);
    if (!r0) { step = 1; continue; }
    r0 = 4;
    { step = 2; continue; }
  case 1:
    r0 = 3;
    { step = 2; continue; }
  case 2:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = s.stride___652;
    r0 = s.tmp_2;
    s.stride___652 = (r0);
    r0 = s.light___651;
    s.tmp_0 = r0;
    r0 = s.arg1;
    s.tmp_1 = r0;
    r0 = s.stride___652;
    s.tmp_2 = r0;
    r0 = (s.tmp_1 * s.tmp_2);
    s.tmp_3 = r0;
    r0 = pxsim.pins.createBuffer(s.tmp_3);
    s.tmp_4 = r0;
    r0 = (s.tmp_0).buf___0 = (s.tmp_4);
    r0 = s.light___651;
    s.tmp_0 = r0;
    r0 = (s.tmp_0).start___3 = (0);
    r0 = s.light___651;
    s.tmp_0 = r0;
    r0 = s.arg1;
    s.tmp_1 = r0;
    r0 = (s.tmp_0)._length___4 = (s.tmp_1);
    r0 = s.light___651;
    s.tmp_0 = r0;
    r0 = s.arg2;
    s.tmp_1 = r0;
    r0 = (s.tmp_0)._mode___5 = (s.tmp_1);
    s.tmp_0 = { fn: LHQbitRGBLight_setBrightness__P465, parent: s };
    r0 = s.light___651;
    s.tmp_0.arg0 = r0;
    r0 = 255;
    s.tmp_0.arg1 = r0;
    s.pc = 5;
    return actionCall(s.tmp_0)
  case 5:
    r0 = s.retval;
    s.tmp_0 = { fn: LHQbitRGBLight_setPin__P466, parent: s };
    r0 = s.light___651;
    s.tmp_0.arg0 = r0;
    r0 = s.arg0;
    s.tmp_0.arg1 = r0;
    s.pc = 6;
    return actionCall(s.tmp_0)
  case 6:
    r0 = s.retval;
    r0 = s.light___651;
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.light___651;
    r0 = s.stride___652;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
create__P472.info = {"start":5988,"length":433,"line":211,"column":4,"endLine":221,"endColumn":5,"fileName":"pxt_modules/qbit/QbitRGBLight.ts","functionName":"create"}



var LHQbitRGBLight_setPin__P466  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = s.arg1;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).pin___1 = (s.tmp_1);
    r0 = s.arg0;
    r0 = r0.pin___1;
    s.tmp_0 = r0;
    r0 = pxsim.pins.digitalWritePin(s.tmp_0, 0);
    return leave(s, r0)
  default: oops()
} } }
LHQbitRGBLight_setPin__P466.info = {"start":1417,"length":176,"line":74,"column":8,"endLine":78,"endColumn":9,"fileName":"pxt_modules/qbit/QbitRGBLight.ts","functionName":"setPin"}



var LHQbitRGBLight_setBrightness__P465  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = s.arg1;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 & 255);
    s.tmp_2 = r0;
    r0 = (s.tmp_0).brightness___2 = (s.tmp_2);
    return leave(s, r0)
  default: oops()
} } }
LHQbitRGBLight_setBrightness__P465.info = {"start":1307,"length":100,"line":70,"column":8,"endLine":72,"endColumn":9,"fileName":"pxt_modules/qbit/QbitRGBLight.ts","functionName":"setBrightness"}



var sendVersionCmd__P336  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.buf___658 = undefined;
    r0 = pxsim.pins.createBuffer(4);
    s.tmp_0 = r0;
    r0 = s.buf___658;
    r0 = s.tmp_0;
    s.buf___658 = (r0);
    r0 = s.buf___658;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 0, 85);
    r0 = s.buf___658;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 1, 85);
    r0 = s.buf___658;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 2, 2);
    r0 = s.buf___658;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 3, 18);
    r0 = s.buf___658;
    s.tmp_0 = r0;
    r0 = pxsim.serial.writeBuffer(s.tmp_0);
    r0 = s.buf___658;
    return leave(s, r0)
  default: oops()
} } }
sendVersionCmd__P336.info = {"start":2902,"length":205,"line":126,"column":4,"endLine":133,"endColumn":2,"fileName":"pxt_modules/qbit/main.ts","functionName":"sendVersionCmd"}

var Melody__C302_VT = {
  name: "Melody",
  numFields: 6,
  methods: [
  ],
  iface: [
  ],
};
var LHQbitRGBLight__C464_VT = {
  name: "LHQbitRGBLight",
  numFields: 6,
  methods: [
  ],
  iface: [
  ],
};

setupDebugger(1)
